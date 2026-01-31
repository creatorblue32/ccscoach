"use client";

import { useSimulation, formatClock } from "@/context/SimulationContext";

export function ActionBar() {
  const { state, setActiveView, openModal, getScheduledTimeDisplay } = useSimulation();

  return (
    <div className="bg-zinc-200 border-b border-zinc-300 px-4 py-3">
      {/* Main Action Buttons */}
      <div className="flex items-stretch justify-center gap-3">
        {/* Interval Hx or PE Button - switches to history_pe view */}
        <button
          onClick={() => setActiveView("history_pe")}
          className={`flex-1 max-w-[220px] border rounded-md p-3 transition-colors shadow-sm flex items-center gap-3 ${
            state.activeView === "history_pe"
              ? "bg-blue-100 border-blue-400 ring-2 ring-blue-300"
              : "bg-zinc-100 border-zinc-400 hover:bg-zinc-50 active:bg-zinc-200"
          }`}
        >
          {/* Doctor Icon */}
          <div className="w-12 h-12 bg-gradient-to-b from-blue-100 to-blue-200 rounded border border-blue-300 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="7" r="4" />
              <path d="M12 14c-6 0-8 3-8 5v2h16v-2c0-2-2-5-8-5z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-zinc-800">Interval Hx</div>
            <div className="text-sm text-zinc-600">or PE</div>
          </div>
        </button>

        {/* Write Orders or Review Chart Button - switches to orders view */}
        <button
          onClick={() => setActiveView("orders")}
          className={`flex-1 max-w-[220px] border rounded-md p-3 transition-colors shadow-sm flex items-center gap-3 ${
            state.activeView === "orders"
              ? "bg-amber-100 border-amber-400 ring-2 ring-amber-300"
              : "bg-zinc-100 border-zinc-400 hover:bg-zinc-50 active:bg-zinc-200"
          }`}
        >
          {/* Clipboard Icon */}
          <div className="w-12 h-12 bg-gradient-to-b from-amber-50 to-amber-100 rounded border border-amber-300 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14H7v-2h3v2zm0-4H7v-2h3v2zm0-4H7V7h3v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-zinc-800">Write Orders</div>
            <div className="text-sm text-zinc-600">or Review Chart</div>
          </div>
        </button>

        {/* Obtain Results or See Patient Later Button */}
        <button
          onClick={() => openModal("schedule")}
          className="flex-1 max-w-[220px] bg-zinc-100 border border-zinc-400 rounded-md p-3 hover:bg-zinc-50 active:bg-zinc-200 transition-colors shadow-sm flex items-center gap-3"
        >
          {/* Clock Icon */}
          <div className="w-12 h-12 bg-gradient-to-b from-slate-100 to-slate-200 rounded border border-slate-400 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-zinc-800">Obtain Results</div>
            <div className="text-sm text-zinc-600">or See Patient Later</div>
            <div className="text-xs text-blue-600 font-medium mt-0.5">
              {formatClock(state.clock)}
            </div>
          </div>
        </button>

        {/* Change Location Button */}
        <button
          onClick={() => openModal("location")}
          className="flex-1 max-w-[220px] bg-zinc-100 border border-zinc-400 rounded-md p-3 hover:bg-zinc-50 active:bg-zinc-200 transition-colors shadow-sm flex items-center gap-3"
        >
          {/* File Cabinet / Building Icon */}
          <div className="w-12 h-12 bg-gradient-to-b from-stone-100 to-stone-200 rounded border border-stone-400 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-stone-700" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="2" width="16" height="6" rx="1" />
              <rect x="4" y="9" width="16" height="6" rx="1" />
              <rect x="4" y="16" width="16" height="6" rx="1" />
              <rect x="10" y="4" width="4" height="2" fill="white" />
              <rect x="10" y="11" width="4" height="2" fill="white" />
              <rect x="10" y="18" width="4" height="2" fill="white" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm font-medium text-zinc-800">Change Location</div>
            <div className="text-xs text-blue-600 font-medium mt-0.5">
              {state.location}
            </div>
          </div>
        </button>
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-center gap-8 mt-3 pt-2 border-t border-zinc-300">
        <div className="text-sm text-blue-600 font-medium">
          Maximum allotted real time: untimed
        </div>
      </div>
    </div>
  );
}
