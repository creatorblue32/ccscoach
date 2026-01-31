"use client";

import { useState, useRef, useEffect } from "react";
import { SimulationProvider, useSimulation, formatClock } from "@/context/SimulationContext";
import { ActionBar, LocationModal, ScheduleModal, HistoryPEView, OrdersView } from "@/components/simulation";
import { allCases, caseList } from "@/data/cases";

function SimulationContent() {
  const { state, startCase, endCase } = useSimulation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCaseSelect = (caseId: string) => {
    const caseData = allCases[caseId];
    if (caseData) {
      startCase(caseData, caseId);
    }
    setDropdownOpen(false);
  };

  const handleEndCase = () => {
    endCase();
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-zinc-50 via-white to-teal-50/30">
      {/* Modern Top Bar */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-zinc-200/60 px-8 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          {/* Left: Title & Case Selector */}
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-lg font-semibold text-zinc-900 tracking-tight">
                CCS Simulation
              </h1>
              <p className="text-xs text-zinc-500">Practice clinical case scenarios</p>
            </div>

            <div className="h-8 w-px bg-zinc-200" />

            {/* Case Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  state.isActive
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md shadow-teal-500/20"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:border-teal-300 hover:shadow-sm"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${state.isActive ? "text-white/80" : "text-zinc-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>
                  {state.isActive && state.caseId
                    ? caseList.find((c) => c.id === state.caseId)?.title ?? state.caseId
                    : "Select a Case"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""} ${
                    state.isActive ? "text-white/80" : "text-zinc-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 z-50 overflow-hidden">
                  <div className="px-3 py-2 border-b border-zinc-100 bg-zinc-50">
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Available Cases
                    </p>
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {caseList.map((caseItem) => (
                      <button
                        key={caseItem.id}
                        onClick={() => handleCaseSelect(caseItem.id)}
                        className={`w-full px-4 py-3 text-left transition-all ${
                          state.caseId === caseItem.id
                            ? "bg-teal-50"
                            : "hover:bg-zinc-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                              state.caseId === caseItem.id
                                ? "bg-teal-500 text-white"
                                : "bg-zinc-100 text-zinc-600"
                            }`}
                          >
                            {caseItem.type}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium ${
                              state.caseId === caseItem.id ? "text-teal-700" : "text-zinc-900"
                            }`}>
                              {caseItem.title}
                            </p>
                            <p className="text-xs text-zinc-500 mt-0.5 truncate">
                              {caseItem.description}
                            </p>
                            <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded ${
                              caseItem.difficulty === "Intermediate"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-green-100 text-green-700"
                            }`}>
                              {caseItem.difficulty}
                            </span>
                          </div>
                          {state.caseId === caseItem.id && (
                            <svg
                              className="w-5 h-5 text-teal-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Status & End Case */}
          {state.isActive && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-700">Case Active</span>
              </div>
              <div className="text-sm text-zinc-500">
                {formatClock(state.clock)} | {state.location}
              </div>
              <button
                onClick={handleEndCase}
                className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                End Case
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {state.isActive && state.activeCase ? (
          <>
            {/* Classic Action Bar */}
            <ActionBar />

            {/* Active View Content */}
            {state.activeView === "history_pe" && <HistoryPEView />}
            {state.activeView === "orders" && <OrdersView />}

            {/* Modals (overlay on views) */}
            <LocationModal />
            <ScheduleModal />
          </>
        ) : (
          /* Modern No Case Selected State */
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center max-w-lg">
              {/* Illustration */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 flex items-center justify-center shadow-xl shadow-zinc-200/50">
                  <svg
                    className="w-16 h-16 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">
                Ready to begin?
              </h2>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Select a case from the dropdown above to start your CCS simulation practice.
              </p>

              {/* Quick Stats */}
              <div className="inline-flex items-center gap-6 px-6 py-3 bg-white rounded-xl border border-zinc-200 shadow-sm">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-zinc-900">{caseList.length}</p>
                  <p className="text-xs text-zinc-500">Cases Available</p>
                </div>
                <div className="h-8 w-px bg-zinc-200" />
                <div className="text-center">
                  <p className="text-2xl font-semibold text-teal-600">0</p>
                  <p className="text-xs text-zinc-500">Completed</p>
                </div>
                <div className="h-8 w-px bg-zinc-200" />
                <div className="text-center">
                  <p className="text-2xl font-semibold text-zinc-900">--</p>
                  <p className="text-xs text-zinc-500">Avg. Score</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SimulationPage() {
  return (
    <SimulationProvider>
      <SimulationContent />
    </SimulationProvider>
  );
}
