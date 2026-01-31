"use client";

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from "react";
import { CCSCase } from "@/data/cases/types";
import { OrderDefinition, getOrder } from "@/data/orders";

// ============================================
// TYPES
// ============================================

export type PatientLocation = "ED" | "ICU" | "Inpatient" | "Office" | "Home";

export interface SimulationClock {
  day: number;
  hour: number;
  minute: number;
}

export interface PlacedOrder {
  orderId: string;
  orderDisplay: string;
  category: string;
  orderedAt: SimulationClock;
  resultsAvailableAt: SimulationClock;
  status: "pending" | "in_progress" | "completed";
  result?: string; // The result text when available
}

export interface ExamRecord {
  examId: string;
  label: string;
  performedAt: SimulationClock;
  findings: string;
}

export interface HistoryRecord {
  performedAt: SimulationClock;
  content: string;
}

export interface VitalSignsRecord {
  recordedAt: SimulationClock;
  temperature?: string;
  heartRate?: string;
  bloodPressure?: string;
  respiratoryRate?: string;
  spO2?: string;
  painScale?: string;
}

export interface ProgressNote {
  writtenAt: SimulationClock;
  content: string;
}

export interface ChartRecords {
  history: HistoryRecord[];
  physicalExams: ExamRecord[];
  vitalSigns: VitalSignsRecord[];
  labResults: PlacedOrder[];
  imagingResults: PlacedOrder[];
  otherTests: PlacedOrder[];
  treatmentRecord: PlacedOrder[];
  progressNotes: ProgressNote[];
}

export interface ScheduledReevaluation {
  type: "on" | "in" | "next_result" | "as_needed";
  targetTime?: SimulationClock;
  relativeDays?: number;
  relativeHours?: number;
  relativeMinutes?: number;
}

export type ActiveView = "history_pe" | "orders";

export interface SimulationState {
  // Case data
  activeCase: CCSCase | null;
  caseId: string | null;

  // Simulation state
  isActive: boolean;
  clock: SimulationClock;
  location: PatientLocation;

  // Orders and records
  placedOrders: PlacedOrder[];
  chartRecords: ChartRecords;

  // Scheduling
  scheduledReevaluation: ScheduledReevaluation | null;

  // View and Modal states
  activeView: ActiveView; // Which main page is displayed
  activeModal: "schedule" | "location" | null; // Popups that overlay on pages

  // Scoring
  score: number;
  orderHistory: string[]; // Track order sequence for grading
}

// ============================================
// ACTIONS
// ============================================

type SimulationAction =
  | { type: "START_CASE"; caseData: CCSCase; caseId: string }
  | { type: "END_CASE" }
  | { type: "ADVANCE_CLOCK"; minutes: number }
  | { type: "SET_CLOCK"; clock: SimulationClock }
  | { type: "SET_LOCATION"; location: PatientLocation }
  | { type: "PLACE_ORDER"; order: PlacedOrder }
  | { type: "PLACE_ORDERS"; orders: PlacedOrder[] }
  | { type: "COMPLETE_ORDER"; orderId: string; result: string }
  | { type: "RECORD_EXAM"; exam: ExamRecord }
  | { type: "RECORD_EXAMS"; exams: ExamRecord[] }
  | { type: "RECORD_HISTORY"; history: HistoryRecord }
  | { type: "RECORD_VITALS"; vitals: VitalSignsRecord }
  | { type: "ADD_PROGRESS_NOTE"; note: ProgressNote }
  | { type: "SET_SCHEDULED_REEVALUATION"; reevaluation: ScheduledReevaluation | null }
  | { type: "SET_ACTIVE_VIEW"; view: ActiveView }
  | { type: "OPEN_MODAL"; modal: SimulationState["activeModal"] }
  | { type: "CLOSE_MODAL" }
  | { type: "ADD_SCORE"; points: number };

// ============================================
// HELPER FUNCTIONS
// ============================================

export function formatClock(clock: SimulationClock): string {
  const hour = clock.hour.toString().padStart(2, "0");
  const minute = clock.minute.toString().padStart(2, "0");
  return `Day ${clock.day} @ ${hour}:${minute}`;
}

export function clockToMinutes(clock: SimulationClock): number {
  return clock.day * 24 * 60 + clock.hour * 60 + clock.minute;
}

export function minutesToClock(totalMinutes: number): SimulationClock {
  const day = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutes = totalMinutes % (24 * 60);
  const hour = Math.floor(remainingMinutes / 60);
  const minute = remainingMinutes % 60;
  return { day: day || 1, hour, minute };
}

export function addMinutesToClock(clock: SimulationClock, minutes: number): SimulationClock {
  const totalMinutes = clockToMinutes(clock) + minutes;
  return minutesToClock(totalMinutes);
}

export function getInitialClock(caseType: CCSCase["case_type"]): SimulationClock {
  // Different case types start at different times
  switch (caseType) {
    case "ED":
      return { day: 1, hour: 14, minute: 0 }; // 2:00 PM
    case "Clinic":
      return { day: 1, hour: 9, minute: 0 }; // 9:00 AM
    case "Inpatient":
      return { day: 1, hour: 8, minute: 0 }; // 8:00 AM
    case "ICU":
      return { day: 1, hour: 7, minute: 0 }; // 7:00 AM
    default:
      return { day: 1, hour: 8, minute: 0 };
  }
}

export function getInitialLocation(caseType: CCSCase["case_type"]): PatientLocation {
  switch (caseType) {
    case "ED":
      return "ED";
    case "Clinic":
      return "Office";
    case "Inpatient":
      return "Inpatient";
    case "ICU":
      return "ICU";
    default:
      return "ED";
  }
}

// ============================================
// INITIAL STATE
// ============================================

const initialChartRecords: ChartRecords = {
  history: [],
  physicalExams: [],
  vitalSigns: [],
  labResults: [],
  imagingResults: [],
  otherTests: [],
  treatmentRecord: [],
  progressNotes: [],
};

const initialState: SimulationState = {
  activeCase: null,
  caseId: null,
  isActive: false,
  clock: { day: 1, hour: 8, minute: 0 },
  location: "ED",
  placedOrders: [],
  chartRecords: { ...initialChartRecords },
  scheduledReevaluation: null,
  activeView: "history_pe",
  activeModal: null,
  score: 0,
  orderHistory: [],
};

// ============================================
// REDUCER
// ============================================

function simulationReducer(state: SimulationState, action: SimulationAction): SimulationState {
  switch (action.type) {
    case "START_CASE":
      return {
        ...initialState,
        activeCase: action.caseData,
        caseId: action.caseId,
        isActive: true,
        clock: getInitialClock(action.caseData.case_type),
        location: getInitialLocation(action.caseData.case_type),
        chartRecords: { ...initialChartRecords },
        activeView: "history_pe",
      };

    case "END_CASE":
      return {
        ...initialState,
      };

    case "ADVANCE_CLOCK":
      return {
        ...state,
        clock: addMinutesToClock(state.clock, action.minutes),
      };

    case "SET_CLOCK":
      return {
        ...state,
        clock: action.clock,
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.location,
        // Also add to order history for grading
        orderHistory: [...state.orderHistory, `location_${action.location.toLowerCase()}`],
      };

    case "PLACE_ORDER":
      return {
        ...state,
        placedOrders: [...state.placedOrders, action.order],
        orderHistory: [...state.orderHistory, action.order.orderId],
      };

    case "PLACE_ORDERS":
      return {
        ...state,
        placedOrders: [...state.placedOrders, ...action.orders],
        orderHistory: [...state.orderHistory, ...action.orders.map((o) => o.orderId)],
      };

    case "COMPLETE_ORDER": {
      const updatedOrders = state.placedOrders.map((order) =>
        order.orderId === action.orderId
          ? { ...order, status: "completed" as const, result: action.result }
          : order
      );

      // Categorize completed order into chart records
      const completedOrder = updatedOrders.find((o) => o.orderId === action.orderId);
      if (completedOrder) {
        const orderDef = getOrder(completedOrder.orderId);
        const newChartRecords = { ...state.chartRecords };

        if (orderDef?.category === "lab") {
          newChartRecords.labResults = [...newChartRecords.labResults, completedOrder];
        } else if (orderDef?.category === "imaging") {
          newChartRecords.imagingResults = [...newChartRecords.imagingResults, completedOrder];
        } else if (orderDef?.category === "medication" || orderDef?.category === "procedure") {
          newChartRecords.treatmentRecord = [...newChartRecords.treatmentRecord, completedOrder];
        } else {
          newChartRecords.otherTests = [...newChartRecords.otherTests, completedOrder];
        }

        return {
          ...state,
          placedOrders: updatedOrders,
          chartRecords: newChartRecords,
        };
      }

      return {
        ...state,
        placedOrders: updatedOrders,
      };
    }

    case "RECORD_EXAM":
      return {
        ...state,
        chartRecords: {
          ...state.chartRecords,
          physicalExams: [...state.chartRecords.physicalExams, action.exam],
        },
      };

    case "RECORD_EXAMS":
      return {
        ...state,
        chartRecords: {
          ...state.chartRecords,
          physicalExams: [...state.chartRecords.physicalExams, ...action.exams],
        },
      };

    case "RECORD_HISTORY":
      return {
        ...state,
        chartRecords: {
          ...state.chartRecords,
          history: [...state.chartRecords.history, action.history],
        },
      };

    case "RECORD_VITALS":
      return {
        ...state,
        chartRecords: {
          ...state.chartRecords,
          vitalSigns: [...state.chartRecords.vitalSigns, action.vitals],
        },
      };

    case "ADD_PROGRESS_NOTE":
      return {
        ...state,
        chartRecords: {
          ...state.chartRecords,
          progressNotes: [...state.chartRecords.progressNotes, action.note],
        },
      };

    case "SET_SCHEDULED_REEVALUATION":
      return {
        ...state,
        scheduledReevaluation: action.reevaluation,
      };

    case "SET_ACTIVE_VIEW":
      return {
        ...state,
        activeView: action.view,
      };

    case "OPEN_MODAL":
      return {
        ...state,
        activeModal: action.modal,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        activeModal: null,
      };

    case "ADD_SCORE":
      return {
        ...state,
        score: state.score + action.points,
      };

    default:
      return state;
  }
}

// ============================================
// CONTEXT
// ============================================

interface SimulationContextValue {
  state: SimulationState;
  dispatch: React.Dispatch<SimulationAction>;

  // Convenience methods
  startCase: (caseData: CCSCase, caseId: string) => void;
  endCase: () => void;
  advanceClock: (minutes: number) => void;
  setLocation: (location: PatientLocation) => void;
  placeOrder: (orderId: string) => void;
  placeOrders: (orderIds: string[]) => void;
  recordExam: (examId: string, label: string, findings: string) => void;
  recordExams: (exams: Array<{ examId: string; label: string; findings: string }>) => void;
  recordHistory: (content: string) => void;
  setScheduledReevaluation: (reevaluation: ScheduledReevaluation | null) => void;
  setActiveView: (view: ActiveView) => void;
  openModal: (modal: SimulationState["activeModal"]) => void;
  closeModal: () => void;
  getScheduledTimeDisplay: () => string;
}

const SimulationContext = createContext<SimulationContextValue | null>(null);

// ============================================
// PROVIDER
// ============================================

interface SimulationProviderProps {
  children: ReactNode;
}

export function SimulationProvider({ children }: SimulationProviderProps) {
  const [state, dispatch] = useReducer(simulationReducer, initialState);

  const startCase = useCallback((caseData: CCSCase, caseId: string) => {
    dispatch({ type: "START_CASE", caseData, caseId });
  }, []);

  const endCase = useCallback(() => {
    dispatch({ type: "END_CASE" });
  }, []);

  const advanceClock = useCallback((minutes: number) => {
    dispatch({ type: "ADVANCE_CLOCK", minutes });
  }, []);

  const setLocation = useCallback((location: PatientLocation) => {
    dispatch({ type: "SET_LOCATION", location });
  }, []);

  const placeOrder = useCallback(
    (orderId: string) => {
      const orderDef = getOrder(orderId);
      if (!orderDef) return;

      const order: PlacedOrder = {
        orderId,
        orderDisplay: orderDef.display,
        category: orderDef.category,
        orderedAt: { ...state.clock },
        resultsAvailableAt: addMinutesToClock(state.clock, orderDef.turnaroundMinutes),
        status: orderDef.turnaroundMinutes === 0 ? "completed" : "pending",
      };

      dispatch({ type: "PLACE_ORDER", order });
    },
    [state.clock]
  );

  const placeOrders = useCallback(
    (orderIds: string[]) => {
      const orders: PlacedOrder[] = orderIds
        .map((orderId) => {
          const orderDef = getOrder(orderId);
          if (!orderDef) return null;

          return {
            orderId,
            orderDisplay: orderDef.display,
            category: orderDef.category,
            orderedAt: { ...state.clock },
            resultsAvailableAt: addMinutesToClock(state.clock, orderDef.turnaroundMinutes),
            status: (orderDef.turnaroundMinutes === 0 ? "completed" : "pending") as PlacedOrder["status"],
          };
        })
        .filter((o): o is PlacedOrder => o !== null);

      dispatch({ type: "PLACE_ORDERS", orders });
    },
    [state.clock]
  );

  const recordExam = useCallback(
    (examId: string, label: string, findings: string) => {
      const exam: ExamRecord = {
        examId,
        label,
        performedAt: { ...state.clock },
        findings,
      };
      dispatch({ type: "RECORD_EXAM", exam });
    },
    [state.clock]
  );

  const recordExams = useCallback(
    (exams: Array<{ examId: string; label: string; findings: string }>) => {
      const examRecords: ExamRecord[] = exams.map((e) => ({
        ...e,
        performedAt: { ...state.clock },
      }));
      dispatch({ type: "RECORD_EXAMS", exams: examRecords });
    },
    [state.clock]
  );

  const recordHistory = useCallback(
    (content: string) => {
      const history: HistoryRecord = {
        performedAt: { ...state.clock },
        content,
      };
      dispatch({ type: "RECORD_HISTORY", history });
    },
    [state.clock]
  );

  const setScheduledReevaluation = useCallback(
    (reevaluation: ScheduledReevaluation | null) => {
      dispatch({ type: "SET_SCHEDULED_REEVALUATION", reevaluation });
    },
    []
  );

  const setActiveView = useCallback((view: ActiveView) => {
    dispatch({ type: "SET_ACTIVE_VIEW", view });
  }, []);

  const openModal = useCallback((modal: SimulationState["activeModal"]) => {
    dispatch({ type: "OPEN_MODAL", modal });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL" });
  }, []);

  const getScheduledTimeDisplay = useCallback((): string => {
    if (!state.scheduledReevaluation) {
      return "Not Scheduled";
    }

    const { type, targetTime, relativeDays, relativeHours, relativeMinutes } = state.scheduledReevaluation;

    switch (type) {
      case "on":
        return targetTime ? formatClock(targetTime) : "Not Set";
      case "in": {
        const parts: string[] = [];
        if (relativeDays) parts.push(`${relativeDays}d`);
        if (relativeHours) parts.push(`${relativeHours}h`);
        if (relativeMinutes) parts.push(`${relativeMinutes}m`);
        return parts.length > 0 ? `In ${parts.join(" ")}` : "Not Set";
      }
      case "next_result":
        return "With Next Result";
      case "as_needed":
        return "As Needed";
      default:
        return "Not Scheduled";
    }
  }, [state.scheduledReevaluation]);

  const value: SimulationContextValue = {
    state,
    dispatch,
    startCase,
    endCase,
    advanceClock,
    setLocation,
    placeOrder,
    placeOrders,
    recordExam,
    recordExams,
    recordHistory,
    setScheduledReevaluation,
    setActiveView,
    openModal,
    closeModal,
    getScheduledTimeDisplay,
  };

  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
}

// ============================================
// HOOK
// ============================================

export function useSimulation() {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error("useSimulation must be used within a SimulationProvider");
  }
  return context;
}
