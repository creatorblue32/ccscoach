"use client";

import { useState } from "react";
import { useSimulation, PatientLocation } from "@/context/SimulationContext";

interface LocationOption {
  id: PatientLocation;
  label: string;
}

const inpatientLocations: LocationOption[] = [
  { id: "ED", label: "Emergency Department" },
  { id: "ICU", label: "Intensive Care Unit" },
  { id: "Inpatient", label: "Inpatient Unit" },
];

const outpatientLocations: LocationOption[] = [
  { id: "Office", label: "Office" },
  { id: "Home", label: "Home" },
];

export function LocationModal() {
  const { state, closeModal, setLocation } = useSimulation();
  const [selectedLocation, setSelectedLocation] = useState<PatientLocation>(state.location);

  if (state.activeModal !== "location") return null;

  const handleConfirm = () => {
    setLocation(selectedLocation);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={handleCancel} />

      <div className="relative bg-zinc-200 border-2 border-zinc-400 shadow-lg w-full max-w-md mx-4">
        {/* Title Bar */}
        <div className="bg-gradient-to-b from-blue-200 to-blue-300 border-b border-zinc-400 px-3 py-1.5 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-800">Change Location</span>
          <button
            onClick={handleCancel}
            className="w-5 h-5 bg-zinc-100 border border-zinc-400 rounded-sm text-xs font-bold text-zinc-600 hover:bg-zinc-200"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Inpatient Locations */}
            <div className="bg-zinc-100 border border-zinc-400 rounded-sm">
              <div className="bg-gradient-to-b from-zinc-200 to-zinc-300 border-b border-zinc-400 px-3 py-1.5">
                <span className="text-sm font-semibold text-zinc-800">Inpatient Locations</span>
              </div>
              <div className="p-3 space-y-2">
                {inpatientLocations.map((location) => (
                  <label key={location.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      checked={selectedLocation === location.id}
                      onChange={() => setSelectedLocation(location.id)}
                      className="w-4 h-4 border-zinc-400 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={`text-sm ${selectedLocation === location.id ? "font-medium text-blue-700" : "text-zinc-800"}`}>
                      {location.label}
                    </span>
                    {state.location === location.id && (
                      <span className="text-xs text-zinc-500">(current)</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Outpatient Locations */}
            <div className="bg-zinc-100 border border-zinc-400 rounded-sm">
              <div className="bg-gradient-to-b from-zinc-200 to-zinc-300 border-b border-zinc-400 px-3 py-1.5">
                <span className="text-sm font-semibold text-zinc-800">Outpatient Locations</span>
              </div>
              <div className="p-3 space-y-2">
                {outpatientLocations.map((location) => (
                  <label key={location.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      checked={selectedLocation === location.id}
                      onChange={() => setSelectedLocation(location.id)}
                      className="w-4 h-4 border-zinc-400 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={`text-sm ${selectedLocation === location.id ? "font-medium text-blue-700" : "text-zinc-800"}`}>
                      {location.label}
                    </span>
                    {state.location === location.id && (
                      <span className="text-xs text-zinc-500">(current)</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 p-3 pt-0">
          <button
            onClick={handleConfirm}
            className="px-8 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm"
          >
            OK
          </button>
          <button
            onClick={handleCancel}
            className="px-8 py-1.5 bg-zinc-100 border border-zinc-400 rounded text-sm font-medium text-zinc-800 hover:bg-zinc-200 active:bg-zinc-300 shadow-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
