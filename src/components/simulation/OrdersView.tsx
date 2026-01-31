"use client";

import { useState } from "react";
import { useSimulation, formatClock, PlacedOrder } from "@/context/SimulationContext";
import { searchOrders, OrderDefinition } from "@/data/orders";

type TabId = "order_sheet" | "progress_notes" | "vital_signs" | "lab_reports" | "imaging" | "other_tests" | "treatment_record";

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "order_sheet", label: "Order Sheet" },
  { id: "progress_notes", label: "Progress Notes" },
  { id: "vital_signs", label: "Vital Signs" },
  { id: "lab_reports", label: "Lab Reports" },
  { id: "imaging", label: "Imaging" },
  { id: "other_tests", label: "Other Tests" },
  { id: "treatment_record", label: "Treatment Record" },
];

type OrderStep = "list" | "entry" | "matching" | "confirm";

interface MatchResult {
  query: string;
  matches: OrderDefinition[];
  selectedIds: Set<string>;
}

export function OrdersView() {
  const { state, placeOrders } = useSimulation();

  const [activeTab, setActiveTab] = useState<TabId>("order_sheet");
  const [orderStep, setOrderStep] = useState<OrderStep>("list");
  const [orderText, setOrderText] = useState("");
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [finalOrders, setFinalOrders] = useState<OrderDefinition[]>([]);

  const handleStartOrder = () => {
    setOrderStep("entry");
    setOrderText("");
  };

  const handleSubmitOrders = () => {
    const lines = orderText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length === 0) {
      setOrderStep("list");
      return;
    }

    const results: MatchResult[] = lines.map((query) => ({
      query,
      matches: searchOrders(query).slice(0, 10),
      selectedIds: new Set<string>(),
    }));

    setMatchResults(results);
    setCurrentMatchIndex(0);
    setOrderStep("matching");
  };

  const toggleMatchSelection = (orderId: string) => {
    const current = matchResults[currentMatchIndex];
    const newSelected = new Set(current.selectedIds);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }

    const newResults = [...matchResults];
    newResults[currentMatchIndex] = { ...current, selectedIds: newSelected };
    setMatchResults(newResults);
  };

  const handleNextMatch = () => {
    if (currentMatchIndex < matchResults.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1);
    } else {
      const selectedOrders: OrderDefinition[] = [];
      const seenIds = new Set<string>();

      matchResults.forEach((result) => {
        result.selectedIds.forEach((id) => {
          if (!seenIds.has(id)) {
            const order = result.matches.find((m) => m.id === id);
            if (order) {
              selectedOrders.push(order);
              seenIds.add(id);
            }
          }
        });
      });

      setFinalOrders(selectedOrders);
      setOrderStep("confirm");
    }
  };

  const handleSkipMatch = () => {
    const newResults = [...matchResults];
    newResults[currentMatchIndex] = {
      ...matchResults[currentMatchIndex],
      selectedIds: new Set(),
    };
    setMatchResults(newResults);
    handleNextMatch();
  };

  const handleConfirmOrders = () => {
    const orderIds = finalOrders.map((o) => o.id);
    placeOrders(orderIds);

    setOrderStep("list");
    setOrderText("");
    setMatchResults([]);
    setCurrentMatchIndex(0);
    setFinalOrders([]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "order_sheet":
        return renderOrderSheet();
      case "progress_notes":
        return renderSimpleList("Progress Notes", state.chartRecords.progressNotes.map(n => ({
          time: formatClock(n.writtenAt),
          content: n.content
        })));
      case "vital_signs":
        return renderVitalSigns();
      case "lab_reports":
        return renderResultsList("Lab Reports", state.chartRecords.labResults);
      case "imaging":
        return renderResultsList("Imaging", state.chartRecords.imagingResults);
      case "other_tests":
        return renderResultsList("Other Tests", state.chartRecords.otherTests);
      case "treatment_record":
        return renderResultsList("Treatment Record", state.chartRecords.treatmentRecord);
      default:
        return null;
    }
  };

  const renderOrderSheet = () => {
    if (orderStep === "entry") {
      return (
        <div className="p-3">
          <div className="text-sm text-zinc-700 mb-2">Enter orders (one per line):</div>
          <textarea
            value={orderText}
            onChange={(e) => setOrderText(e.target.value)}
            placeholder="cbc&#10;bmp&#10;cxr&#10;morphine"
            className="w-full h-48 p-2 border border-zinc-400 rounded-sm text-sm font-mono bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            autoFocus
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setOrderStep("list")}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitOrders}
              disabled={orderText.trim().length === 0}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Order
            </button>
          </div>
        </div>
      );
    }

    if (orderStep === "matching" && matchResults.length > 0) {
      const current = matchResults[currentMatchIndex];
      return (
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-zinc-700">
              Matching &quot;{current.query}&quot; ({currentMatchIndex + 1}/{matchResults.length})
            </div>
          </div>
          
          {current.matches.length === 0 ? (
            <div className="text-center py-6 text-zinc-500 text-sm">
              No matches found
            </div>
          ) : (
            <div className="bg-white border border-zinc-400 rounded-sm max-h-48 overflow-y-auto">
              {current.matches.map((order) => (
                <label
                  key={order.id}
                  className={`flex items-center gap-3 p-2 border-b border-zinc-200 last:border-0 cursor-pointer hover:bg-zinc-50 ${
                    current.selectedIds.has(order.id) ? "bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={current.selectedIds.has(order.id)}
                    onChange={() => toggleMatchSelection(order.id)}
                    className="w-4 h-4 border-zinc-400 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-zinc-800 truncate">{order.display}</div>
                    <div className="text-xs text-zinc-500 capitalize">{order.category}</div>
                  </div>
                </label>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={handleSkipMatch}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200"
            >
              Skip
            </button>
            <button
              onClick={handleNextMatch}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200"
            >
              {currentMatchIndex < matchResults.length - 1 ? "Next" : "Done"}
            </button>
          </div>
        </div>
      );
    }

    if (orderStep === "confirm") {
      return (
        <div className="p-3">
          <div className="text-sm text-zinc-700 mb-2">Confirm orders ({finalOrders.length}):</div>
          
          {finalOrders.length === 0 ? (
            <div className="text-center py-6 text-zinc-500 text-sm">
              No orders selected
            </div>
          ) : (
            <div className="bg-white border border-zinc-400 rounded-sm max-h-48 overflow-y-auto">
              {finalOrders.map((order) => (
                <div key={order.id} className="p-2 border-b border-zinc-200 last:border-0">
                  <div className="text-sm text-zinc-800">{order.display}</div>
                  <div className="text-xs text-zinc-500 capitalize">{order.category}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => setOrderStep("entry")}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200"
            >
              Back
            </button>
            <button
              onClick={handleConfirmOrders}
              disabled={finalOrders.length === 0}
              className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      );
    }

    // Default: order list
    return (
      <div className="p-3">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleStartOrder}
            className="px-6 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200"
          >
            Order
          </button>
        </div>

        {state.placedOrders.length === 0 ? (
          <div className="bg-white border border-zinc-400 rounded-sm p-8 text-center text-zinc-500 text-sm">
            No orders placed
          </div>
        ) : (
          <div className="bg-white border border-zinc-400 rounded-sm max-h-64 overflow-y-auto">
            {state.placedOrders.map((order, index) => (
              <div key={`${order.orderId}-${index}`} className="p-2 border-b border-zinc-200 last:border-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-800">{order.orderDisplay}</div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    order.status === "completed" ? "bg-green-100 text-green-700" :
                    order.status === "pending" ? "bg-amber-100 text-amber-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  Ordered: {formatClock(order.orderedAt)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderVitalSigns = () => {
    const vitals = state.chartRecords.vitalSigns;
    return (
      <div className="p-3">
        {vitals.length === 0 ? (
          <div className="bg-white border border-zinc-400 rounded-sm p-8 text-center text-zinc-500 text-sm">
            No vital signs recorded
          </div>
        ) : (
          <div className="bg-white border border-zinc-400 rounded-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100 border-b border-zinc-300">
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">Time</th>
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">Temp</th>
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">HR</th>
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">BP</th>
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">RR</th>
                  <th className="text-left py-2 px-2 text-zinc-700 font-medium">SpO2</th>
                </tr>
              </thead>
              <tbody>
                {vitals.map((v, i) => (
                  <tr key={i} className="border-b border-zinc-200 last:border-0">
                    <td className="py-2 px-2 text-zinc-600">{formatClock(v.recordedAt)}</td>
                    <td className="py-2 px-2">{v.temperature ?? "-"}</td>
                    <td className="py-2 px-2">{v.heartRate ?? "-"}</td>
                    <td className="py-2 px-2">{v.bloodPressure ?? "-"}</td>
                    <td className="py-2 px-2">{v.respiratoryRate ?? "-"}</td>
                    <td className="py-2 px-2">{v.spO2 ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  const renderSimpleList = (title: string, items: { time: string; content: string }[]) => {
    return (
      <div className="p-3">
        {items.length === 0 ? (
          <div className="bg-white border border-zinc-400 rounded-sm p-8 text-center text-zinc-500 text-sm">
            No {title.toLowerCase()}
          </div>
        ) : (
          <div className="bg-white border border-zinc-400 rounded-sm max-h-64 overflow-y-auto">
            {items.map((item, i) => (
              <div key={i} className="p-2 border-b border-zinc-200 last:border-0">
                <div className="text-xs text-zinc-500 mb-1">{item.time}</div>
                <div className="text-sm text-zinc-800 whitespace-pre-wrap">{item.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderResultsList = (title: string, orders: PlacedOrder[]) => {
    return (
      <div className="p-3">
        {orders.length === 0 ? (
          <div className="bg-white border border-zinc-400 rounded-sm p-8 text-center text-zinc-500 text-sm">
            No {title.toLowerCase()}
          </div>
        ) : (
          <div className="bg-white border border-zinc-400 rounded-sm max-h-64 overflow-y-auto">
            {orders.map((order, i) => (
              <div key={i} className="p-2 border-b border-zinc-200 last:border-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-zinc-800">{order.orderDisplay}</div>
                  <div className="text-xs text-zinc-500">{formatClock(order.orderedAt)}</div>
                </div>
                {order.result && (
                  <div className="text-sm text-zinc-700 mt-1 whitespace-pre-wrap">{order.result}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-zinc-300 p-4">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        <div className="bg-zinc-200 border-2 border-zinc-400 shadow-lg flex-1 flex flex-col max-h-[calc(100vh-200px)]">
          {/* Title Bar */}
          <div className="bg-gradient-to-b from-blue-200 to-blue-300 border-b border-zinc-400 px-3 py-1.5 flex-shrink-0">
            <span className="text-sm font-medium text-zinc-800">Write Orders / Review Chart</span>
          </div>

          {/* Tabs */}
          <div className="bg-zinc-100 border-b border-zinc-400 flex overflow-x-auto flex-shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (orderStep !== "list") {
                    setOrderStep("list");
                  }
                }}
                className={`px-3 py-2 text-xs font-medium whitespace-nowrap border-r border-zinc-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-700"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-zinc-100">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
