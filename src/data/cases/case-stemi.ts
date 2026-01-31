import { CCSCase } from "./types";

/**
 * Case 1: Acute ST-Elevation Myocardial Infarction (STEMI)
 * Classic ED presentation of chest pain with acute coronary syndrome
 */
export const caseSTEMI: CCSCase = {
  case_type: "ED",

  case_presentation:
    "58-year-old male presents to the ED with crushing substernal chest pain radiating to the left arm for 45 minutes. He appears diaphoretic and anxious. Vitals: T 37.2°C, HR 102, BP 148/92, RR 22, SpO2 94% RA",

  init_history:
    "Patient reports sudden onset of severe chest pain while watching TV at home. Pain is 9/10, pressure-like, radiating to left arm and jaw. Associated with nausea and diaphoresis. Took 2 aspirin at home before calling 911.",

  full_history: `Chief Complaint: Crushing chest pain x 45 minutes

History of Present Illness:
- 58-year-old male with sudden onset severe substernal chest pain
- Pain started at rest while watching TV
- Character: Pressure-like, "elephant sitting on chest"
- Severity: 9/10
- Radiation: Left arm, jaw
- Associated symptoms: Nausea, diaphoresis, mild dyspnea
- No relief with position change
- Took 2 aspirin 325mg at home ~20 minutes ago

Past Medical History:
- Hypertension (diagnosed 8 years ago, on lisinopril)
- Hyperlipidemia (on atorvastatin, admits poor compliance)
- Type 2 Diabetes Mellitus (on metformin, last HbA1c 7.8%)
- Former smoker (quit 2 years ago, 30 pack-year history)

Medications:
- Lisinopril 20mg daily
- Atorvastatin 40mg daily (takes intermittently)
- Metformin 1000mg BID

Allergies: NKDA

Family History:
- Father: MI at age 62, deceased
- Mother: Hypertension, alive
- Brother: CABG at age 55

Social History:
- Former smoker, quit 2 years ago (30 pack-years)
- Occasional alcohol (2-3 beers/week)
- Works as accountant, sedentary lifestyle
- Married, 2 adult children

Review of Systems:
- Constitutional: No fever, no recent weight changes
- Cardiovascular: (+) chest pain as above, no palpitations, no leg swelling
- Respiratory: Mild dyspnea, no cough
- GI: Nausea, no vomiting, no abdominal pain
- Neuro: No headache, no dizziness, no focal weakness`,

  history_and_physical: {
    general: "Alert, anxious-appearing male in moderate distress, diaphoretic, clutching chest",
    vitals: "T 37.2°C, HR 102, BP 148/92, RR 22, SpO2 94% RA",
    heent: "Normocephalic, atraumatic. Pupils equal and reactive. Mucous membranes moist.",
    neck: "No JVD, no carotid bruits, trachea midline",
    cardiovascular: "Tachycardic, regular rhythm. S1/S2 present. No murmurs, rubs, or gallops. Distal pulses 2+ bilaterally.",
    lungs: "Clear to auscultation bilaterally. No wheezes, rales, or rhonchi. Normal respiratory effort.",
    abdomen: "Soft, non-tender, non-distended. Normal bowel sounds. No hepatomegaly.",
    extremities: "No cyanosis, clubbing, or edema. Warm and well-perfused.",
    neurological: "Alert and oriented x3. Cranial nerves II-XII intact. No focal deficits. Moving all extremities.",
    skin: "Diaphoretic. No rashes or lesions."
  },

  updates: [
    {
      id: "u1_ecg_obtained",
      positive_update: "ECG shows ST elevations in leads V1-V4 with reciprocal ST depressions in inferior leads, consistent with anterior STEMI. Cath lab has been activated.",
      negative_update: "Without ECG, STEMI diagnosis is delayed. Patient develops worsening chest pain and BP drops to 100/68.",
      order_to_avoid_negative: "ord_ecg"
    },
    {
      id: "u2_aspirin_given",
      positive_update: "Aspirin administered. Platelet inhibition initiated.",
      negative_update: "Without aspirin, ongoing platelet aggregation at culprit lesion. Increased risk of complete occlusion.",
      order_to_avoid_negative: "ord_aspirin"
    },
    {
      id: "u3_heparin_given",
      positive_update: "Anticoagulation initiated. Thrombus propagation inhibited.",
      negative_update: "Without anticoagulation, thrombus continues to propagate. Risk of complete vessel occlusion increases.",
      order_to_avoid_negative: "ord_heparin"
    },
    {
      id: "u4_cath_lab_activated",
      positive_update: "Cath lab team activated within 10 minutes. Patient prepared for emergent PCI. Door-to-balloon time on track for <90 minutes.",
      negative_update: "Delay in cath lab activation. Myocardial ischemia continues. Troponins rising. Risk of cardiogenic shock increases.",
      order_to_avoid_negative: "ord_cath_lab"
    },
    {
      id: "u5_pain_management",
      positive_update: "Morphine reduces chest pain to 4/10. Patient more comfortable. Reduced myocardial oxygen demand.",
      negative_update: "Continued severe pain increases sympathetic drive, HR remains elevated at 110, increasing myocardial oxygen demand.",
      order_to_avoid_negative: "ord_morphine"
    }
  ],

  orders: [
    // Critical Orders
    {
      id: "ord_ecg",
      display_text: "ECG (12-lead) - STAT",
      points_category: "critical",
      points_amount: 15
    },
    {
      id: "ord_aspirin",
      display_text: "Aspirin 325mg PO (if not already given)",
      points_category: "critical",
      points_amount: 10
    },
    {
      id: "ord_cath_lab",
      display_text: "Activate Cardiac Catheterization Lab",
      points_category: "critical",
      points_amount: 15
    },
    {
      id: "ord_heparin",
      display_text: "Heparin IV bolus + infusion (or Enoxaparin)",
      points_category: "critical",
      points_amount: 10
    },
    {
      id: "ord_p2y12",
      display_text: "P2Y12 inhibitor (Ticagrelor 180mg or Clopidogrel 600mg)",
      points_category: "critical",
      points_amount: 10
    },

    // Recommended Orders
    {
      id: "ord_troponin",
      display_text: "Troponin I or T - STAT",
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
      id: "ord_bmp",
      display_text: "Basic Metabolic Panel",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_pt_inr",
      display_text: "PT/INR, PTT",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_cxr",
      display_text: "Chest X-ray (portable)",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_oxygen",
      display_text: "Supplemental O2 via nasal cannula (2-4L)",
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
      id: "ord_morphine",
      display_text: "Morphine 2-4mg IV for pain",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_nitro",
      display_text: "Nitroglycerin 0.4mg SL (if BP allows)",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_beta_blocker",
      display_text: "Metoprolol 5mg IV (if no contraindications)",
      points_category: "recommended",
      points_amount: 3
    },
    {
      id: "ord_monitor",
      display_text: "Continuous cardiac monitoring",
      points_category: "recommended",
      points_amount: 5
    },

    // Optional Orders
    {
      id: "ord_lipid_panel",
      display_text: "Lipid Panel",
      points_category: "optional",
      points_amount: 1
    },
    {
      id: "ord_bnp",
      display_text: "BNP or NT-proBNP",
      points_category: "optional",
      points_amount: 1
    },
    {
      id: "ord_mg",
      display_text: "Magnesium level",
      points_category: "optional",
      points_amount: 1
    },

    // Harmful Orders
    {
      id: "ord_thrombolytics",
      display_text: "tPA/Thrombolytics (when PCI available)",
      points_category: "harmful",
      points_amount: -10
    },
    {
      id: "ord_nsaids",
      display_text: "NSAIDs (Ibuprofen, Ketorolac)",
      points_category: "harmful",
      points_amount: -5
    },
    {
      id: "ord_discharge",
      display_text: "Discharge patient home",
      points_category: "harmful",
      points_amount: -20
    }
  ],

  diagnosis: "Acute Anterior ST-Elevation Myocardial Infarction (STEMI)",

  learn_mode_properties: {
    correct_exams: [
      "vitals",
      "cardiovascular exam",
      "lung exam",
      "general appearance"
    ],
    list_of_correct_orders_in_sequence: [
      "ord_ecg",
      "ord_iv_access",
      "ord_monitor",
      "ord_oxygen",
      "ord_aspirin",
      "ord_troponin",
      "ord_cbc",
      "ord_bmp",
      "ord_pt_inr",
      "ord_heparin",
      "ord_p2y12",
      "ord_nitro",
      "ord_morphine",
      "ord_cath_lab",
      "ord_cxr"
    ]
  }
};
