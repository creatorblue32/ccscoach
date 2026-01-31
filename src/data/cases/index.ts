// CCS Cases - Central Export

export * from "./types";
export { caseSTEMI } from "./case-stemi";
export { caseDKA } from "./case-dka";

import { CCSCase } from "./types";
import { caseSTEMI } from "./case-stemi";
import { caseDKA } from "./case-dka";

// All available cases
export const allCases: Record<string, CCSCase> = {
  stemi: caseSTEMI,
  dka: caseDKA,
};

// Case metadata for selection UI
export const caseList = [
  {
    id: "stemi",
    title: "Acute STEMI",
    description: "58-year-old male with crushing chest pain",
    type: "ED",
    difficulty: "Intermediate",
  },
  {
    id: "dka",
    title: "Diabetic Ketoacidosis",
    description: "24-year-old female with nausea, vomiting, and abdominal pain",
    type: "ED",
    difficulty: "Intermediate",
  },
];
