"use client";

import { useState } from "react";
import { useSimulation, formatClock, addMinutesToClock } from "@/context/SimulationContext";
import { physicalExamComponents, historyTimeCost, calculateExamTime } from "@/data/physical-exam";

type ModalStep = "selection" | "results";

export function HistoryPEModal() {
  const { state, closeModal, advanceClock, recordExams, recordHistory } = useSimulation();

  const [step, setStep] = useState<ModalStep>("selection");
  const [includeHistory, setIncludeHistory] = useState(false);
  const [selectedExams, setSelectedExams] = useState<Set<string>>(new Set());
  const [resultsContent, setResultsContent] = useState<{ title: string; time: string; content: string } | null>(null);

  if (state.activeModal !== "history_pe") return null;

  const toggleExam = (examId: string) => {
    const newSelected = new Set(selectedExams);
    if (newSelected.has(examId)) {
      newSelected.delete(examId);
    } else {
      newSelected.add(examId);
    }
    setSelectedExams(newSelected);
  };

  const clearAll = () => {
    setSelectedExams(new Set());
    setIncludeHistory(false);
  };

  // Calculate total time
  const examTime = calculateExamTime(Array.from(selectedExams));
  const historyTime = includeHistory ? historyTimeCost : 0;
  const totalTime = examTime + historyTime;

  // Map exam IDs to case history_and_physical keys
  function getFindingsKey(examId: string): string {
    const keyMap: Record<string, string> = {
      generalAppearance: "general",
      heentNeck: "heent",
      chestLungs: "lungs",
      heartCardiovascular: "cardiovascular",
      abdomen: "abdomen",
      extremitiesSpine: "extremities",
      neuroPsych: "neurological",
      skin: "skin",
    };
    return keyMap[examId] ?? examId;
  }

  const handleOk = () => {
    if (totalTime === 0) {
      closeModal();
      return;
    }

    // Calculate the new time after exam
    const newTime = addMinutesToClock(state.clock, totalTime);

    // Build results content
    let content = "";
    
    if (includeHistory && state.activeCase) {
      content += "Interval/follow-up history\n";
      content += "There has been no significant change in the patient's condition.\n\n";
      recordHistory(state.activeCase.full_history);
    }

    // Record exams and build content
    if (selectedExams.size > 0 && state.activeCase) {
      const examRecords = Array.from(selectedExams).map((examId) => {
        const examDef = physicalExamComponents[examId];
        const findingsKey = getFindingsKey(examId);
        const findings = state.activeCase?.history_and_physical[findingsKey] ?? "Normal examination";

        content += `${examDef.label}\n${findings}\n\n`;

        return {
          examId,
          label: examDef.label,
          findings,
        };
      });
      recordExams(examRecords);
    }

    // Advance the clock
    advanceClock(totalTime);

    // Show results
    setResultsContent({
      title: "History and Physical",
      time: formatClock(newTime),
      content: content.trim(),
    });
    setStep("results");
  };

  const handleResultsOk = () => {
    setStep("selection");
    setIncludeHistory(false);
    setSelectedExams(new Set());
    setResultsContent(null);
    closeModal();
  };

  const handleCancel = () => {
    setStep("selection");
    setIncludeHistory(false);
    setSelectedExams(new Set());
    setResultsContent(null);
    closeModal();
  };

  // Physical exam items in two columns (left and right)
  const examItems = Object.entries(physicalExamComponents);
  const leftColumn = examItems.slice(0, 6);
  const rightColumn = examItems.slice(6);

  if (step === "results" && resultsContent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={handleResultsOk} />
        
        <div className="relative bg-zinc-200 border-2 border-zinc-400 shadow-lg w-full max-w-xl mx-4">
          {/* Title Bar */}
          <div className="bg-gradient-to-b from-blue-200 to-blue-300 border-b border-zinc-400 px-3 py-1.5 flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-800">{resultsContent.title}</span>
          </div>

          {/* Content */}
          <div className="bg-white border border-zinc-300 m-2 p-4">
            <div className="text-center text-sm font-medium text-zinc-700 mb-4">
              {resultsContent.time}
            </div>
            <div className="text-sm text-zinc-800 whitespace-pre-wrap font-mono">
              {resultsContent.content}
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center p-3">
            <button
              onClick={handleResultsOk}
              className="px-8 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={handleCancel} />

      <div className="relative bg-zinc-200 border-2 border-zinc-400 shadow-lg w-full max-w-lg mx-4">
        {/* History Section */}
        <div className="m-3 mb-2">
          <div className="bg-zinc-100 border border-zinc-400 rounded-sm">
            <div className="bg-gradient-to-b from-zinc-200 to-zinc-300 border-b border-zinc-400 px-3 py-1.5">
              <span className="text-sm font-semibold text-zinc-800">History</span>
            </div>
            <div className="p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeHistory}
                  onChange={(e) => setIncludeHistory(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-zinc-400 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-zinc-800">Interval/follow up</span>
              </label>
            </div>
          </div>
        </div>

        {/* Physical Examination Section */}
        <div className="m-3 mt-2">
          <div className="bg-zinc-100 border border-zinc-400 rounded-sm">
            <div className="bg-gradient-to-b from-zinc-200 to-zinc-300 border-b border-zinc-400 px-3 py-1.5">
              <span className="text-sm font-semibold text-zinc-800">Physical Examination</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {/* Left Column */}
                <div className="space-y-2">
                  {leftColumn.map(([id, exam]) => (
                    <label key={id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExams.has(id)}
                        onChange={() => toggleExam(id)}
                        className="w-4 h-4 rounded-sm border-zinc-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-zinc-800">{exam.label}</span>
                    </label>
                  ))}
                </div>
                {/* Right Column */}
                <div className="space-y-2">
                  {rightColumn.map(([id, exam]) => (
                    <label key={id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExams.has(id)}
                        onChange={() => toggleExam(id)}
                        className="w-4 h-4 rounded-sm border-zinc-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-zinc-800">{exam.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 p-3 pt-2">
          <button
            onClick={handleOk}
            className="px-8 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm"
          >
            OK
          </button>
          <button
            onClick={clearAll}
            className="px-8 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
