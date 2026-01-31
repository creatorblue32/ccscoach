"use client";

import { useState } from "react";
import { useSimulation, ScheduledReevaluation, addMinutesToClock } from "@/context/SimulationContext";

type ScheduleType = "on" | "in" | "next_result" | "as_needed";

// Helper to get day of week name from day number (Day 1 = Monday in the calendar)
function getDayOfWeekName(dayNumber: number): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // In the calendar, day 1 is Monday (column index 1)
  // So day 1 = Monday, day 2 = Tuesday, ..., day 7 = Sunday, day 8 = Monday, etc.
  const dayIndex = dayNumber % 7;
  // Adjust so that day 1 = Monday (index 1), day 7 = Sunday (index 0)
  if (dayIndex === 0) return days[0]; // Sunday
  return days[dayIndex];
}

export function ScheduleModal() {
  const { state, closeModal, setScheduledReevaluation, advanceClock } = useSimulation();

  const [scheduleType, setScheduleType] = useState<ScheduleType>("on");
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(state.clock.day);

  // For "on" type - specific date/time
  const [targetDay, setTargetDay] = useState(state.clock.day);
  const [targetHour, setTargetHour] = useState(state.clock.hour);
  const [targetMinute, setTargetMinute] = useState(state.clock.minute);

  if (state.activeModal !== "schedule") return null;

  const handleCalendarDayClick = (day: number) => {
    setSelectedCalendarDay(day);
    setTargetDay(day);
  };

  const handleConfirm = () => {
    let reevaluation: ScheduledReevaluation;

    switch (scheduleType) {
      case "on":
        reevaluation = {
          type: "on",
          targetTime: { day: targetDay, hour: targetHour, minute: targetMinute },
        };
        break;
      case "in":
        // "In" uses the selected calendar day
        const futureDays = selectedCalendarDay - state.clock.day;
        reevaluation = {
          type: "in",
          relativeDays: futureDays,
          relativeHours: 0,
          relativeMinutes: 0,
          targetTime: { day: selectedCalendarDay, hour: state.clock.hour, minute: state.clock.minute },
        };
        break;
      case "next_result":
        reevaluation = { type: "next_result" };
        break;
      case "as_needed":
        reevaluation = { type: "as_needed" };
        break;
      default:
        reevaluation = { type: "as_needed" };
    }

    setScheduledReevaluation(reevaluation);
    
    // If we have a specific time, advance to it
    if (scheduleType === "on" || scheduleType === "in") {
      let minutesToAdvance = 0;
      if (scheduleType === "on") {
        const targetMinutes = targetDay * 24 * 60 + targetHour * 60 + targetMinute;
        const currentMinutes = state.clock.day * 24 * 60 + state.clock.hour * 60 + state.clock.minute;
        minutesToAdvance = Math.max(0, targetMinutes - currentMinutes);
      } else {
        // For "in", advance to that day at current time
        const targetMinutes = selectedCalendarDay * 24 * 60 + state.clock.hour * 60 + state.clock.minute;
        const currentMinutes = state.clock.day * 24 * 60 + state.clock.hour * 60 + state.clock.minute;
        minutesToAdvance = Math.max(0, targetMinutes - currentMinutes);
      }
      if (minutesToAdvance > 0) {
        advanceClock(minutesToAdvance);
      }
    }
    
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  // Generate calendar grid - 10 rows of 7 days each (days 1-70)
  // The calendar shows: Sun Mon Tue Wed Thu Fri Sat
  // Day 1 starts on Monday (column index 1)
  const calendarRows: (number | null)[][] = [];
  
  // First row starts with empty Sunday, then Day 1 on Monday
  const firstRow: (number | null)[] = [null]; // Sunday is empty
  for (let i = 1; i <= 6; i++) {
    firstRow.push(i); // Days 1-6 (Mon-Sat)
  }
  calendarRows.push(firstRow);
  
  // Remaining rows (days 7-69)
  let currentDay = 7;
  for (let row = 0; row < 9; row++) {
    const rowDays: (number | null)[] = [];
    for (let col = 0; col < 7; col++) {
      if (currentDay <= 69) {
        rowDays.push(currentDay);
        currentDay++;
      } else {
        rowDays.push(null);
      }
    }
    calendarRows.push(rowDays);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={handleCancel} />

      <div className="relative bg-slate-300 border border-slate-400 shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        {/* Title Bar */}
        <div className="bg-slate-400 border-b border-slate-500 px-3 py-1.5 sticky top-0">
          <span className="text-sm font-medium text-slate-800">Reevaluate</span>
        </div>

        {/* Content - Two Column Layout */}
        <div className="p-3 flex gap-3">
          {/* Left Column - Calendar */}
          <div className="bg-white border border-slate-400 p-2 flex-shrink-0">
            <div className="text-sm font-semibold text-slate-800 mb-1">Calendar</div>
            <table className="border-collapse text-xs">
              <thead>
                <tr>
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <th
                      key={day}
                      className="w-8 h-6 text-center font-semibold text-slate-700 border border-slate-300"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendarRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((day, colIndex) => (
                      <td
                        key={colIndex}
                        className={`w-8 h-6 text-center border border-slate-300 cursor-pointer transition-colors ${
                          day === null
                            ? "bg-slate-100"
                            : day === selectedCalendarDay
                            ? "bg-green-400 text-white font-medium"
                            : day === state.clock.day
                            ? "bg-blue-100"
                            : "bg-white hover:bg-slate-100"
                        }`}
                        onClick={() => day !== null && handleCalendarDayClick(day)}
                      >
                        {day}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Column - Reevaluate Case Options */}
          <div className="bg-white border border-slate-400 p-3 flex-1 min-w-0">
            <div className="text-sm font-semibold text-slate-800 mb-3">Reevaluate Case</div>
            
            <div className="space-y-3">
              {/* On Option */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="radio"
                  id="schedule-on"
                  name="scheduleType"
                  checked={scheduleType === "on"}
                  onChange={() => setScheduleType("on")}
                  className="w-4 h-4 flex-shrink-0"
                />
                <label htmlFor="schedule-on" className="text-sm text-slate-800 cursor-pointer">
                  On
                </label>
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="text-xs text-slate-700">Day(s)</span>
                  <input
                    type="text"
                    value={targetDay}
                    onChange={(e) => setTargetDay(parseInt(e.target.value) || state.clock.day)}
                    className="w-10 px-1 py-0.5 border border-slate-400 text-xs"
                  />
                  <span className="text-xs text-slate-700">Hour(s):</span>
                  <input
                    type="text"
                    value={targetHour}
                    onChange={(e) => setTargetHour(Math.min(23, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-10 px-1 py-0.5 border border-slate-400 text-xs"
                  />
                  <span className="text-xs text-slate-700">Minute(s):</span>
                  <input
                    type="text"
                    value={targetMinute}
                    onChange={(e) => setTargetMinute(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-10 px-1 py-0.5 border border-slate-400 text-xs"
                  />
                </div>
              </div>

              {/* In Option */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="schedule-in"
                  name="scheduleType"
                  checked={scheduleType === "in"}
                  onChange={() => setScheduleType("in")}
                  className="w-4 h-4"
                />
                <label htmlFor="schedule-in" className="text-sm text-slate-800 cursor-pointer">
                  In
                </label>
                <span className="ml-2 text-sm text-slate-700">
                  {getDayOfWeekName(selectedCalendarDay)}
                </span>
              </div>

              {/* With next available result Option */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="schedule-next"
                  name="scheduleType"
                  checked={scheduleType === "next_result"}
                  onChange={() => setScheduleType("next_result")}
                  className="w-4 h-4"
                />
                <label htmlFor="schedule-next" className="text-sm text-slate-800 cursor-pointer">
                  With next available result
                </label>
              </div>

              {/* Call/see me as needed Option */}
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="schedule-asneeded"
                  name="scheduleType"
                  checked={scheduleType === "as_needed"}
                  onChange={() => setScheduleType("as_needed")}
                  className="w-4 h-4"
                />
                <label htmlFor="schedule-asneeded" className="text-sm text-slate-800 cursor-pointer">
                  Call/see me as needed
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 p-3 pt-0">
          <button
            onClick={handleConfirm}
            className="px-8 py-1.5 bg-slate-200 border border-slate-400 rounded text-sm font-medium text-slate-800 hover:bg-slate-300 active:bg-slate-400 shadow-sm"
          >
            OK
          </button>
          <button
            onClick={handleCancel}
            className="px-8 py-1.5 bg-slate-200 border border-slate-400 rounded text-sm font-medium text-slate-800 hover:bg-slate-300 active:bg-slate-400 shadow-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
