import { CCSCase } from "./types";

/**
 * Case 2: Diabetic Ketoacidosis (DKA)
 * ED presentation of a young adult with Type 1 DM presenting with DKA
 */
export const caseDKA: CCSCase = {
  case_type: "ED",

  case_presentation:
    "24-year-old female with Type 1 Diabetes presents to the ED with nausea, vomiting, and abdominal pain for 2 days. She appears dehydrated and is breathing rapidly. Vitals: T 37.8°C, HR 118, BP 98/62, RR 28 (Kussmaul), SpO2 99% RA",

  init_history:
    "Patient reports 2 days of progressive nausea, vomiting (6-8 episodes), and diffuse abdominal pain. Has been unable to keep food or fluids down. Admits to running out of insulin 3 days ago and not refilling prescription due to cost concerns.",

  full_history: `Chief Complaint: Nausea, vomiting, and abdominal pain x 2 days

History of Present Illness:
- 24-year-old female with Type 1 DM since age 12
- 2 days of progressive nausea with 6-8 episodes of non-bloody, non-bilious vomiting
- Diffuse, crampy abdominal pain, 6/10 severity
- Unable to tolerate PO intake
- Increased urination and thirst over past 3 days
- Ran out of insulin 3 days ago, could not afford refill
- Noticed "fruity" smell to breath yesterday
- Mild confusion noted by roommate today
- No fever, no diarrhea, no dysuria

Past Medical History:
- Type 1 Diabetes Mellitus (diagnosed age 12)
  - Last HbA1c: 9.2% (3 months ago)
  - Previous DKA admission 2 years ago
- Hypothyroidism
- Depression

Medications:
- Insulin glargine 22 units at bedtime (ran out 3 days ago)
- Insulin lispro sliding scale with meals (ran out 3 days ago)
- Levothyroxine 75mcg daily
- Sertraline 50mg daily

Allergies: Penicillin (rash)

Family History:
- Mother: Type 2 DM
- Father: Healthy
- No family history of autoimmune diseases

Social History:
- College student, works part-time as barista
- No tobacco, no alcohol, no recreational drugs
- Lives with roommate in apartment
- Recently lost health insurance

Review of Systems:
- Constitutional: Fatigue, weakness, no fever
- HEENT: Dry mouth, blurred vision
- Cardiovascular: No chest pain, no palpitations
- Respiratory: No cough, no dyspnea at rest
- GI: (+) nausea, vomiting, abdominal pain as above, no diarrhea, no constipation
- GU: Polyuria, no dysuria, no hematuria
- Neuro: Mild confusion, no headache, no focal weakness
- Psych: No SI/HI`,

  history_and_physical: {
    general: "Ill-appearing young female, lethargic but arousable, appears dehydrated. Fruity odor to breath.",
    vitals: "T 37.8°C, HR 118, BP 98/62, RR 28 (deep, Kussmaul pattern), SpO2 99% RA",
    heent: "Dry mucous membranes. Sunken eyes. Lips dry and cracked. No oral lesions.",
    neck: "Supple. No JVD (flat neck veins). No lymphadenopathy. Thyroid normal.",
    cardiovascular: "Tachycardic, regular rhythm. S1/S2 normal. No murmurs. Weak peripheral pulses. Capillary refill 3 seconds.",
    lungs: "Clear to auscultation bilaterally. Kussmaul respirations (deep, labored). No wheezes or crackles.",
    abdomen: "Soft, diffusely tender without rebound or guarding. Hypoactive bowel sounds. No hepatosplenomegaly.",
    extremities: "No edema. Cool extremities. Delayed capillary refill (3 seconds).",
    neurological: "Lethargic but oriented to person and place, confused about date. No focal deficits. Moving all extremities.",
    skin: "Dry, decreased turgor (tenting present). No rashes."
  },

  updates: [
    {
      id: "u1_fluids_started",
      positive_update: "After 1L NS bolus, BP improves to 108/70, HR decreases to 102. Patient reports feeling slightly better.",
      negative_update: "Without IV fluids, patient becomes more hypotensive (BP 88/54), more lethargic, and urine output decreases.",
      order_to_avoid_negative: "ord_iv_fluids_bolus"
    },
    {
      id: "u2_insulin_started",
      positive_update: "Insulin drip initiated. Glucose trending down appropriately (decreasing ~50-75 mg/dL per hour). Anion gap beginning to close.",
      negative_update: "Without insulin, glucose remains >400, ketone production continues, acidosis worsens. pH drops to 7.15.",
      order_to_avoid_negative: "ord_insulin_drip"
    },
    {
      id: "u3_potassium_monitored",
      positive_update: "K+ being monitored q2h. Potassium replacement adjusted appropriately as K+ drops with insulin therapy.",
      negative_update: "Without K+ monitoring, patient develops hypokalemia (K+ 2.8). ECG shows U waves and flattened T waves. Risk of arrhythmia.",
      order_to_avoid_negative: "ord_bmp_serial"
    },
    {
      id: "u4_gap_closure",
      positive_update: "After 6 hours of treatment: glucose 220, pH 7.32, bicarb 18, anion gap 14. Transitioning to subcutaneous insulin.",
      negative_update: "If insulin drip stopped prematurely (before gap closure), ketogenesis resumes, patient deteriorates.",
      order_to_avoid_negative: "ord_insulin_drip"
    },
    {
      id: "u5_dextrose_added",
      positive_update: "D5 added to fluids when glucose reaches 250. Prevents hypoglycemia while continuing to close anion gap.",
      negative_update: "Without dextrose, glucose drops to 65, patient becomes more confused, diaphoretic.",
      order_to_avoid_negative: "ord_d5_fluids"
    }
  ],

  orders: [
    // Critical Orders
    {
      id: "ord_bmp",
      display_text: "Basic Metabolic Panel - STAT",
      points_category: "critical",
      points_amount: 10
    },
    {
      id: "ord_vbg",
      display_text: "Venous Blood Gas (VBG) or ABG",
      points_category: "critical",
      points_amount: 10
    },
    {
      id: "ord_iv_fluids_bolus",
      display_text: "Normal Saline 1L IV bolus, then 500mL/hr",
      points_category: "critical",
      points_amount: 15
    },
    {
      id: "ord_insulin_drip",
      display_text: "Regular Insulin IV drip 0.1 units/kg/hr (after K+ confirmed >3.3)",
      points_category: "critical",
      points_amount: 15
    },
    {
      id: "ord_glucose",
      display_text: "Point-of-care glucose - STAT",
      points_category: "critical",
      points_amount: 10
    },
    {
      id: "ord_potassium_replacement",
      display_text: "Potassium Chloride IV (20-40 mEq/L in fluids)",
      points_category: "critical",
      points_amount: 10
    },

    // Recommended Orders
    {
      id: "ord_bmp_serial",
      display_text: "BMP q2-4h (serial monitoring)",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_cbc",
      display_text: "CBC with differential",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_ua",
      display_text: "Urinalysis",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_beta_hydroxybutyrate",
      display_text: "Beta-hydroxybutyrate level",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_ecg",
      display_text: "ECG (12-lead)",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_iv_access",
      display_text: "IV access (two large-bore IVs)",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_cxr",
      display_text: "Chest X-ray",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_phosphate",
      display_text: "Phosphorus level",
      points_category: "recommended",
      points_amount: 2
    },
    {
      id: "ord_mg",
      display_text: "Magnesium level",
      points_category: "recommended",
      points_amount: 2
    },
    {
      id: "ord_lactate",
      display_text: "Lactate level",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_lipase",
      display_text: "Lipase (r/o pancreatitis)",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_hba1c",
      display_text: "Hemoglobin A1c",
      points_category: "recommended",
      points_amount: 2
    },
    {
      id: "ord_d5_fluids",
      display_text: "Add D5 to fluids when glucose <250",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_icu_admit",
      display_text: "Admit to ICU for monitoring",
      points_category: "recommended",
      points_amount: 5
    },
    {
      id: "ord_foley",
      display_text: "Foley catheter (strict I/O monitoring)",
      points_category: "recommended",
      points_amount: 3
    },

    // Optional Orders
    {
      id: "ord_tsh",
      display_text: "TSH",
      points_category: "optional",
      points_amount: 1
    },
    {
      id: "ord_blood_cultures",
      display_text: "Blood cultures x2",
      points_category: "optional",
      points_amount: 2
    },
    {
      id: "ord_urine_culture",
      display_text: "Urine culture",
      points_category: "optional",
      points_amount: 1
    },

    // Harmful Orders
    {
      id: "ord_bicarb_bolus",
      display_text: "Sodium Bicarbonate IV bolus (if pH >6.9)",
      points_category: "harmful",
      points_amount: -5
    },
    {
      id: "ord_insulin_bolus_only",
      display_text: "Insulin bolus without drip",
      points_category: "harmful",
      points_amount: -5
    },
    {
      id: "ord_subq_insulin_only",
      display_text: "Subcutaneous insulin only (for severe DKA)",
      points_category: "harmful",
      points_amount: -10
    },
    {
      id: "ord_discharge",
      display_text: "Discharge patient home",
      points_category: "harmful",
      points_amount: -20
    },
    {
      id: "ord_insulin_before_k",
      display_text: "Start insulin before checking/correcting K+",
      points_category: "harmful",
      points_amount: -10
    }
  ],

  diagnosis: "Diabetic Ketoacidosis (DKA) - Moderate to Severe",

  learn_mode_properties: {
    correct_exams: [
      "vitals",
      "general appearance",
      "abdominal exam",
      "skin turgor assessment",
      "mental status exam"
    ],
    list_of_correct_orders_in_sequence: [
      "ord_glucose",
      "ord_iv_access",
      "ord_bmp",
      "ord_vbg",
      "ord_iv_fluids_bolus",
      "ord_cbc",
      "ord_ua",
      "ord_beta_hydroxybutyrate",
      "ord_ecg",
      "ord_potassium_replacement",
      "ord_insulin_drip",
      "ord_bmp_serial",
      "ord_cxr",
      "ord_icu_admit",
      "ord_d5_fluids"
    ]
  }
};
