// CCS Case Schema Types

export interface CCSUpdate {
  id: string;
  positive_update: string;
  negative_update: string;
  order_to_avoid_negative: string;
}

export interface CCSOrder {
  id: string;
  display_text: string;
  points_category: "critical" | "recommended" | "optional" | "harmful";
  points_amount: number;
}

export interface LearnModeProperties {
  correct_exams: string[];
  list_of_correct_orders_in_sequence: string[];
}

export interface CCSCase {
  case_type: "ED" | "Clinic" | "Inpatient" | "ICU";
  case_presentation: string;
  init_history: string;
  full_history: string;
  history_and_physical: Record<string, string>;
  updates: CCSUpdate[];
  orders: CCSOrder[];
  diagnosis: string;
  learn_mode_properties: LearnModeProperties;
}
