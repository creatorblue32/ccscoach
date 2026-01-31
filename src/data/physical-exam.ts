// Physical Examination Components and Time Costs

export interface PhysicalExamComponent {
  id: string;
  label: string;
  timeMinutes: number;
}

export const physicalExamComponents: Record<string, PhysicalExamComponent> = {
  generalAppearance: {
    id: "generalAppearance",
    label: "General Appearance",
    timeMinutes: 1,
  },
  skin: {
    id: "skin",
    label: "Skin",
    timeMinutes: 2,
  },
  breasts: {
    id: "breasts",
    label: "Breasts",
    timeMinutes: 3,
  },
  lymphNodes: {
    id: "lymphNodes",
    label: "Lymph Nodes",
    timeMinutes: 2,
  },
  heentNeck: {
    id: "heentNeck",
    label: "HEENT/Neck",
    timeMinutes: 3,
  },
  chestLungs: {
    id: "chestLungs",
    label: "Chest/Lungs",
    timeMinutes: 2,
  },
  heartCardiovascular: {
    id: "heartCardiovascular",
    label: "Heart/Cardiovascular",
    timeMinutes: 2,
  },
  abdomen: {
    id: "abdomen",
    label: "Abdomen",
    timeMinutes: 3,
  },
  genitalia: {
    id: "genitalia",
    label: "Genitalia",
    timeMinutes: 3,
  },
  rectal: {
    id: "rectal",
    label: "Rectal",
    timeMinutes: 3,
  },
  extremitiesSpine: {
    id: "extremitiesSpine",
    label: "Extremities/Spine",
    timeMinutes: 2,
  },
  neuroPsych: {
    id: "neuroPsych",
    label: "Neuro/Psych",
    timeMinutes: 5,
  },
};

// Time cost for interval/follow-up history
export const historyTimeCost = 5; // minutes

// Get all exam component IDs
export function getExamComponentIds(): string[] {
  return Object.keys(physicalExamComponents);
}

// Calculate total time for selected exams
export function calculateExamTime(selectedExams: string[]): number {
  return selectedExams.reduce((total, examId) => {
    const exam = physicalExamComponents[examId];
    return total + (exam?.timeMinutes ?? 0);
  }, 0);
}

// Get exam component by ID
export function getExamComponent(id: string): PhysicalExamComponent | undefined {
  return physicalExamComponents[id];
}
