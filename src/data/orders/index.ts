// Central Order Library
// A comprehensive list of all available orders with turnaround times and aliases

export type OrderCategory = 
  | "lab" 
  | "imaging" 
  | "procedure" 
  | "medication" 
  | "consult" 
  | "disposition" 
  | "monitoring"
  | "cardiac"
  | "activation";

export interface OrderDefinition {
  id: string;
  display: string;
  category: OrderCategory;
  turnaroundMinutes: number;
  aliases: string[];
}

// ============================================
// ORDER LIBRARY WITH TURNAROUND TIMES
// ============================================

export const orderLibrary: Record<string, OrderDefinition> = {
  // ============================================
  // LABS - CHEMISTRY
  // ============================================
  lab_bmp: {
    id: "lab_bmp",
    display: "Basic Metabolic Panel (BMP)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["bmp", "basic metabolic", "chem 7", "chem7"],
  },
  lab_cmp: {
    id: "lab_cmp",
    display: "Comprehensive Metabolic Panel (CMP)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["cmp", "comprehensive metabolic", "chem 14", "chem14"],
  },
  lab_glucose: {
    id: "lab_glucose",
    display: "Glucose (POC)",
    category: "lab",
    turnaroundMinutes: 5,
    aliases: ["glucose", "blood sugar", "bs", "poc glucose", "fingerstick"],
  },
  lab_hba1c: {
    id: "lab_hba1c",
    display: "Hemoglobin A1c",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["hba1c", "a1c", "hemoglobin a1c", "glycated hemoglobin"],
  },
  lab_lipid: {
    id: "lab_lipid",
    display: "Lipid Panel",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["lipid", "lipid panel", "cholesterol", "lipids"],
  },
  lab_lfts: {
    id: "lab_lfts",
    display: "Liver Function Tests (LFTs)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["lfts", "lft", "liver function", "hepatic panel", "liver panel"],
  },
  lab_amylase: {
    id: "lab_amylase",
    display: "Amylase",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["amylase"],
  },
  lab_lipase: {
    id: "lab_lipase",
    display: "Lipase",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["lipase"],
  },
  lab_lactate: {
    id: "lab_lactate",
    display: "Lactate",
    category: "lab",
    turnaroundMinutes: 15,
    aliases: ["lactate", "lactic acid"],
  },
  lab_ammonia: {
    id: "lab_ammonia",
    display: "Ammonia",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["ammonia", "nh3"],
  },
  lab_uric_acid: {
    id: "lab_uric_acid",
    display: "Uric Acid",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["uric acid", "urate"],
  },
  lab_magnesium: {
    id: "lab_magnesium",
    display: "Magnesium",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["magnesium", "mag", "mg"],
  },
  lab_phosphorus: {
    id: "lab_phosphorus",
    display: "Phosphorus",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["phosphorus", "phos", "phosphate"],
  },
  lab_calcium_ionized: {
    id: "lab_calcium_ionized",
    display: "Calcium, Ionized",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["ionized calcium", "ica", "calcium ionized"],
  },

  // ============================================
  // LABS - HEMATOLOGY
  // ============================================
  lab_cbc: {
    id: "lab_cbc",
    display: "CBC with Differential",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["cbc", "complete blood count", "cbc with diff", "blood count"],
  },
  lab_retic: {
    id: "lab_retic",
    display: "Reticulocyte Count",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["retic", "reticulocyte", "retic count"],
  },
  lab_peripheral_smear: {
    id: "lab_peripheral_smear",
    display: "Peripheral Blood Smear",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["peripheral smear", "blood smear", "pbs"],
  },
  lab_esr: {
    id: "lab_esr",
    display: "Erythrocyte Sedimentation Rate (ESR)",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["esr", "sed rate", "sedimentation rate"],
  },
  lab_crp: {
    id: "lab_crp",
    display: "C-Reactive Protein (CRP)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["crp", "c reactive protein"],
  },
  lab_procalcitonin: {
    id: "lab_procalcitonin",
    display: "Procalcitonin",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["procalcitonin", "proct", "pct"],
  },

  // ============================================
  // LABS - COAGULATION
  // ============================================
  lab_pt_inr: {
    id: "lab_pt_inr",
    display: "PT/INR",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["pt", "inr", "pt/inr", "protime", "prothrombin time"],
  },
  lab_ptt: {
    id: "lab_ptt",
    display: "PTT",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["ptt", "aptt", "partial thromboplastin"],
  },
  lab_fibrinogen: {
    id: "lab_fibrinogen",
    display: "Fibrinogen",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["fibrinogen", "fib"],
  },
  lab_d_dimer: {
    id: "lab_d_dimer",
    display: "D-Dimer",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["d-dimer", "d dimer", "ddimer"],
  },
  lab_fib_degradation: {
    id: "lab_fib_degradation",
    display: "Fibrin Degradation Products",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["fdp", "fibrin degradation"],
  },

  // ============================================
  // LABS - CARDIAC
  // ============================================
  lab_troponin: {
    id: "lab_troponin",
    display: "Troponin I or T",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["troponin", "trop", "tni", "tnt"],
  },
  lab_troponin_serial: {
    id: "lab_troponin_serial",
    display: "Troponin (Serial q3-6h)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["serial troponin", "troponin serial"],
  },
  lab_bnp: {
    id: "lab_bnp",
    display: "BNP",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["bnp", "brain natriuretic peptide"],
  },
  lab_nt_probnp: {
    id: "lab_nt_probnp",
    display: "NT-proBNP",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["nt-probnp", "nt probnp", "pro bnp"],
  },
  lab_ck_mb: {
    id: "lab_ck_mb",
    display: "CK-MB",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["ck-mb", "ckmb", "ck mb"],
  },

  // ============================================
  // LABS - BLOOD GAS
  // ============================================
  lab_abg: {
    id: "lab_abg",
    display: "Arterial Blood Gas (ABG)",
    category: "lab",
    turnaroundMinutes: 15,
    aliases: ["abg", "arterial blood gas", "blood gas"],
  },
  lab_vbg: {
    id: "lab_vbg",
    display: "Venous Blood Gas (VBG)",
    category: "lab",
    turnaroundMinutes: 15,
    aliases: ["vbg", "venous blood gas"],
  },
  lab_carboxyhgb: {
    id: "lab_carboxyhgb",
    display: "Carboxyhemoglobin",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["carboxyhemoglobin", "cohgb", "co level", "carbon monoxide"],
  },
  lab_methemoglobin: {
    id: "lab_methemoglobin",
    display: "Methemoglobin",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["methemoglobin", "methgb", "methb"],
  },

  // ============================================
  // LABS - URINALYSIS
  // ============================================
  lab_ua: {
    id: "lab_ua",
    display: "Urinalysis",
    category: "lab",
    turnaroundMinutes: 20,
    aliases: ["ua", "urinalysis", "urine analysis"],
  },
  lab_urine_culture: {
    id: "lab_urine_culture",
    display: "Urine Culture",
    category: "lab",
    turnaroundMinutes: 2880, // 48 hours
    aliases: ["urine culture", "ucx", "urine cx"],
  },
  lab_urine_drug_screen: {
    id: "lab_urine_drug_screen",
    display: "Urine Drug Screen",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["uds", "urine drug screen", "drug screen", "tox screen"],
  },
  lab_urine_pregnancy: {
    id: "lab_urine_pregnancy",
    display: "Urine Pregnancy Test (hCG)",
    category: "lab",
    turnaroundMinutes: 15,
    aliases: ["urine pregnancy", "upt", "pregnancy test", "hcg urine"],
  },
  lab_urine_electrolytes: {
    id: "lab_urine_electrolytes",
    display: "Urine Electrolytes",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["urine electrolytes", "urine lytes", "una", "uk"],
  },
  lab_urine_osmolality: {
    id: "lab_urine_osmolality",
    display: "Urine Osmolality",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["urine osmolality", "uosm", "urine osm"],
  },

  // ============================================
  // LABS - MICROBIOLOGY
  // ============================================
  lab_blood_culture: {
    id: "lab_blood_culture",
    display: "Blood Cultures x2",
    category: "lab",
    turnaroundMinutes: 2880, // 48 hours for preliminary
    aliases: ["blood culture", "bcx", "blood cx", "cultures"],
  },
  lab_sputum_culture: {
    id: "lab_sputum_culture",
    display: "Sputum Culture",
    category: "lab",
    turnaroundMinutes: 2880,
    aliases: ["sputum culture", "sputum cx"],
  },
  lab_wound_culture: {
    id: "lab_wound_culture",
    display: "Wound Culture",
    category: "lab",
    turnaroundMinutes: 2880,
    aliases: ["wound culture", "wound cx"],
  },
  lab_csf_culture: {
    id: "lab_csf_culture",
    display: "CSF Culture",
    category: "lab",
    turnaroundMinutes: 2880,
    aliases: ["csf culture", "csf cx", "spinal fluid culture"],
  },
  lab_stool_culture: {
    id: "lab_stool_culture",
    display: "Stool Culture",
    category: "lab",
    turnaroundMinutes: 2880,
    aliases: ["stool culture", "stool cx"],
  },
  lab_c_diff: {
    id: "lab_c_diff",
    display: "C. difficile Toxin",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["c diff", "cdiff", "c difficile", "clostridium difficile"],
  },
  lab_rapid_strep: {
    id: "lab_rapid_strep",
    display: "Rapid Strep Test",
    category: "lab",
    turnaroundMinutes: 15,
    aliases: ["rapid strep", "strep test", "strep"],
  },
  lab_flu_test: {
    id: "lab_flu_test",
    display: "Influenza A/B PCR",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["flu test", "influenza", "flu", "flu pcr"],
  },
  lab_covid_test: {
    id: "lab_covid_test",
    display: "COVID-19 PCR",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["covid", "covid test", "sars-cov-2", "coronavirus"],
  },
  lab_rsv: {
    id: "lab_rsv",
    display: "RSV PCR",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["rsv", "respiratory syncytial virus"],
  },

  // ============================================
  // LABS - ENDOCRINE/METABOLIC
  // ============================================
  lab_tsh: {
    id: "lab_tsh",
    display: "TSH",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["tsh", "thyroid stimulating hormone"],
  },
  lab_free_t4: {
    id: "lab_free_t4",
    display: "Free T4",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["free t4", "ft4", "thyroxine"],
  },
  lab_free_t3: {
    id: "lab_free_t3",
    display: "Free T3",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["free t3", "ft3", "triiodothyronine"],
  },
  lab_cortisol: {
    id: "lab_cortisol",
    display: "Cortisol (Random)",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["cortisol", "random cortisol"],
  },
  lab_cortisol_am: {
    id: "lab_cortisol_am",
    display: "Cortisol (AM)",
    category: "lab",
    turnaroundMinutes: 60,
    aliases: ["am cortisol", "morning cortisol"],
  },
  lab_acth: {
    id: "lab_acth",
    display: "ACTH",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["acth", "adrenocorticotropic hormone"],
  },
  lab_beta_hcg: {
    id: "lab_beta_hcg",
    display: "Beta-hCG (Serum)",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["beta hcg", "serum hcg", "quantitative hcg", "bhcg"],
  },
  lab_beta_hydroxybutyrate: {
    id: "lab_beta_hydroxybutyrate",
    display: "Beta-Hydroxybutyrate",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["beta hydroxybutyrate", "bohb", "ketones", "serum ketones"],
  },

  // ============================================
  // LABS - TOXICOLOGY
  // ============================================
  lab_etoh: {
    id: "lab_etoh",
    display: "Ethanol Level",
    category: "lab",
    turnaroundMinutes: 30,
    aliases: ["etoh", "alcohol level", "ethanol", "blood alcohol"],
  },
  lab_salicylate: {
    id: "lab_salicylate",
    display: "Salicylate Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["salicylate", "aspirin level"],
  },
  lab_acetaminophen: {
    id: "lab_acetaminophen",
    display: "Acetaminophen Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["acetaminophen level", "tylenol level", "apap level"],
  },
  lab_digoxin: {
    id: "lab_digoxin",
    display: "Digoxin Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["digoxin level", "dig level"],
  },
  lab_lithium: {
    id: "lab_lithium",
    display: "Lithium Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["lithium level", "li level"],
  },
  lab_valproic_acid: {
    id: "lab_valproic_acid",
    display: "Valproic Acid Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["valproic acid level", "depakote level", "vpa level"],
  },
  lab_phenytoin: {
    id: "lab_phenytoin",
    display: "Phenytoin Level",
    category: "lab",
    turnaroundMinutes: 45,
    aliases: ["phenytoin level", "dilantin level"],
  },

  // ============================================
  // LABS - AUTOIMMUNE/RHEUM
  // ============================================
  lab_ana: {
    id: "lab_ana",
    display: "ANA",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["ana", "antinuclear antibody"],
  },
  lab_rf: {
    id: "lab_rf",
    display: "Rheumatoid Factor",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["rf", "rheumatoid factor"],
  },
  lab_anti_ccp: {
    id: "lab_anti_ccp",
    display: "Anti-CCP",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["anti-ccp", "anti ccp", "ccp antibody"],
  },
  lab_complement: {
    id: "lab_complement",
    display: "Complement (C3, C4)",
    category: "lab",
    turnaroundMinutes: 120,
    aliases: ["complement", "c3", "c4", "c3 c4"],
  },

  // ============================================
  // IMAGING - X-RAY
  // ============================================
  img_cxr: {
    id: "img_cxr",
    display: "Chest X-ray",
    category: "imaging",
    turnaroundMinutes: 30,
    aliases: ["cxr", "chest xray", "chest x-ray", "chest radiograph"],
  },
  img_cxr_portable: {
    id: "img_cxr_portable",
    display: "Chest X-ray (Portable)",
    category: "imaging",
    turnaroundMinutes: 20,
    aliases: ["portable cxr", "portable chest xray", "bedside cxr"],
  },
  img_axr: {
    id: "img_axr",
    display: "Abdominal X-ray (KUB)",
    category: "imaging",
    turnaroundMinutes: 30,
    aliases: ["axr", "abdominal xray", "kub", "flat plate"],
  },
  img_xray_extremity: {
    id: "img_xray_extremity",
    display: "X-ray Extremity",
    category: "imaging",
    turnaroundMinutes: 30,
    aliases: ["extremity xray", "limb xray", "arm xray", "leg xray"],
  },
  img_xray_spine: {
    id: "img_xray_spine",
    display: "X-ray Spine",
    category: "imaging",
    turnaroundMinutes: 30,
    aliases: ["spine xray", "c-spine", "l-spine", "t-spine"],
  },
  img_xray_pelvis: {
    id: "img_xray_pelvis",
    display: "X-ray Pelvis",
    category: "imaging",
    turnaroundMinutes: 30,
    aliases: ["pelvis xray", "pelvic xray"],
  },

  // ============================================
  // IMAGING - CT
  // ============================================
  img_ct_head: {
    id: "img_ct_head",
    display: "CT Head without Contrast",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["ct head", "head ct", "ct brain", "non-con head ct"],
  },
  img_ct_head_contrast: {
    id: "img_ct_head_contrast",
    display: "CT Head with Contrast",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["ct head with contrast", "contrast head ct"],
  },
  img_cta_head_neck: {
    id: "img_cta_head_neck",
    display: "CTA Head and Neck",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["cta head neck", "cta", "ct angiogram head"],
  },
  img_ct_chest: {
    id: "img_ct_chest",
    display: "CT Chest without Contrast",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["ct chest", "chest ct"],
  },
  img_ct_chest_contrast: {
    id: "img_ct_chest_contrast",
    display: "CT Chest with Contrast",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["ct chest with contrast", "contrast chest ct"],
  },
  img_cta_chest: {
    id: "img_cta_chest",
    display: "CTA Chest (PE Protocol)",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["cta chest", "pe protocol", "ctpa", "ct pulmonary angiogram"],
  },
  img_ct_abdomen_pelvis: {
    id: "img_ct_abdomen_pelvis",
    display: "CT Abdomen/Pelvis with Contrast",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["ct abdomen pelvis", "ct ap", "abdominal ct", "ct abd pelvis"],
  },
  img_ct_abdomen_pelvis_wo: {
    id: "img_ct_abdomen_pelvis_wo",
    display: "CT Abdomen/Pelvis without Contrast",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["ct abd pelvis no contrast", "non-con ct abdomen"],
  },
  img_ct_spine: {
    id: "img_ct_spine",
    display: "CT Spine",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["ct spine", "ct c-spine", "ct l-spine"],
  },
  img_ct_angio_abdomen: {
    id: "img_ct_angio_abdomen",
    display: "CT Angiography Abdomen",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["cta abdomen", "abdominal cta", "mesenteric cta"],
  },

  // ============================================
  // IMAGING - MRI
  // ============================================
  img_mri_brain: {
    id: "img_mri_brain",
    display: "MRI Brain without Contrast",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["mri brain", "brain mri", "mri head"],
  },
  img_mri_brain_contrast: {
    id: "img_mri_brain_contrast",
    display: "MRI Brain with Contrast",
    category: "imaging",
    turnaroundMinutes: 150,
    aliases: ["mri brain with contrast", "contrast brain mri"],
  },
  img_mra_brain: {
    id: "img_mra_brain",
    display: "MRA Brain",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["mra brain", "mra head", "mr angiogram brain"],
  },
  img_mri_spine: {
    id: "img_mri_spine",
    display: "MRI Spine",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["mri spine", "mri c-spine", "mri l-spine"],
  },
  img_mri_abdomen: {
    id: "img_mri_abdomen",
    display: "MRI Abdomen",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["mri abdomen", "abdominal mri"],
  },
  img_mrcp: {
    id: "img_mrcp",
    display: "MRCP",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["mrcp", "magnetic resonance cholangiopancreatography"],
  },

  // ============================================
  // IMAGING - ULTRASOUND
  // ============================================
  img_us_abdomen: {
    id: "img_us_abdomen",
    display: "Ultrasound Abdomen",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["us abdomen", "abdominal us", "abdominal ultrasound"],
  },
  img_us_ruq: {
    id: "img_us_ruq",
    display: "Ultrasound RUQ (Gallbladder)",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["ruq us", "ruq ultrasound", "gallbladder us", "gb us"],
  },
  img_us_pelvis: {
    id: "img_us_pelvis",
    display: "Ultrasound Pelvis",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["pelvic us", "pelvic ultrasound", "us pelvis"],
  },
  img_us_renal: {
    id: "img_us_renal",
    display: "Ultrasound Renal",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["renal us", "kidney ultrasound", "renal ultrasound"],
  },
  img_us_dvt: {
    id: "img_us_dvt",
    display: "Ultrasound Venous Doppler (DVT)",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["dvt us", "venous doppler", "leg us", "lower extremity doppler"],
  },
  img_us_carotid: {
    id: "img_us_carotid",
    display: "Ultrasound Carotid Doppler",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["carotid us", "carotid doppler", "carotid ultrasound"],
  },
  img_echo_tte: {
    id: "img_echo_tte",
    display: "Echocardiogram (TTE)",
    category: "imaging",
    turnaroundMinutes: 60,
    aliases: ["tte", "echo", "echocardiogram", "transthoracic echo"],
  },
  img_echo_tee: {
    id: "img_echo_tee",
    display: "Echocardiogram (TEE)",
    category: "imaging",
    turnaroundMinutes: 90,
    aliases: ["tee", "transesophageal echo"],
  },
  img_fast: {
    id: "img_fast",
    display: "FAST Exam",
    category: "imaging",
    turnaroundMinutes: 10,
    aliases: ["fast", "fast exam", "focused assessment"],
  },
  img_us_aorta: {
    id: "img_us_aorta",
    display: "Ultrasound Aorta",
    category: "imaging",
    turnaroundMinutes: 45,
    aliases: ["aorta us", "aortic ultrasound", "aaa screening"],
  },

  // ============================================
  // IMAGING - NUCLEAR/OTHER
  // ============================================
  img_vq_scan: {
    id: "img_vq_scan",
    display: "V/Q Scan",
    category: "imaging",
    turnaroundMinutes: 120,
    aliases: ["vq scan", "v/q", "ventilation perfusion"],
  },
  img_hida: {
    id: "img_hida",
    display: "HIDA Scan",
    category: "imaging",
    turnaroundMinutes: 180,
    aliases: ["hida", "hida scan", "hepatobiliary scan"],
  },
  img_nuclear_stress: {
    id: "img_nuclear_stress",
    display: "Nuclear Stress Test",
    category: "imaging",
    turnaroundMinutes: 240,
    aliases: ["nuclear stress", "myocardial perfusion"],
  },

  // ============================================
  // CARDIAC STUDIES
  // ============================================
  ecg_12lead: {
    id: "ecg_12lead",
    display: "ECG (12-lead)",
    category: "cardiac",
    turnaroundMinutes: 5,
    aliases: ["ecg", "ekg", "12 lead", "electrocardiogram"],
  },
  ecg_serial: {
    id: "ecg_serial",
    display: "ECG (Serial)",
    category: "cardiac",
    turnaroundMinutes: 5,
    aliases: ["serial ecg", "serial ekg", "repeat ecg"],
  },
  ecg_continuous: {
    id: "ecg_continuous",
    display: "Continuous Cardiac Monitoring",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["cardiac monitor", "telemetry", "continuous monitoring"],
  },
  stress_test: {
    id: "stress_test",
    display: "Exercise Stress Test",
    category: "cardiac",
    turnaroundMinutes: 120,
    aliases: ["stress test", "exercise stress", "treadmill test"],
  },

  // ============================================
  // PROCEDURES - VASCULAR ACCESS
  // ============================================
  proc_iv_access: {
    id: "proc_iv_access",
    display: "IV Access (Peripheral)",
    category: "procedure",
    turnaroundMinutes: 5,
    aliases: ["iv", "iv access", "peripheral iv", "piv"],
  },
  proc_iv_large_bore: {
    id: "proc_iv_large_bore",
    display: "IV Access (Two Large-Bore)",
    category: "procedure",
    turnaroundMinutes: 10,
    aliases: ["large bore iv", "2 large bore", "two large bore"],
  },
  proc_central_line: {
    id: "proc_central_line",
    display: "Central Venous Catheter",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["central line", "central access", "cvc", "triple lumen"],
  },
  proc_arterial_line: {
    id: "proc_arterial_line",
    display: "Arterial Line",
    category: "procedure",
    turnaroundMinutes: 20,
    aliases: ["art line", "arterial line", "a-line"],
  },
  proc_io_access: {
    id: "proc_io_access",
    display: "Intraosseous Access",
    category: "procedure",
    turnaroundMinutes: 5,
    aliases: ["io", "io access", "intraosseous"],
  },

  // ============================================
  // PROCEDURES - AIRWAY
  // ============================================
  proc_intubation: {
    id: "proc_intubation",
    display: "Endotracheal Intubation",
    category: "procedure",
    turnaroundMinutes: 10,
    aliases: ["intubation", "intubate", "ett", "endotracheal tube"],
  },
  proc_cricothyrotomy: {
    id: "proc_cricothyrotomy",
    display: "Cricothyrotomy",
    category: "procedure",
    turnaroundMinutes: 5,
    aliases: ["cric", "cricothyrotomy", "surgical airway"],
  },
  proc_npa: {
    id: "proc_npa",
    display: "Nasopharyngeal Airway",
    category: "procedure",
    turnaroundMinutes: 2,
    aliases: ["npa", "nasal trumpet", "nasopharyngeal"],
  },
  proc_opa: {
    id: "proc_opa",
    display: "Oropharyngeal Airway",
    category: "procedure",
    turnaroundMinutes: 2,
    aliases: ["opa", "oral airway", "oropharyngeal"],
  },
  proc_bvm: {
    id: "proc_bvm",
    display: "Bag-Valve-Mask Ventilation",
    category: "procedure",
    turnaroundMinutes: 0,
    aliases: ["bvm", "bag mask", "ambu bag"],
  },
  proc_suction: {
    id: "proc_suction",
    display: "Airway Suctioning",
    category: "procedure",
    turnaroundMinutes: 2,
    aliases: ["suction", "suctioning", "airway suction"],
  },

  // ============================================
  // PROCEDURES - OTHER
  // ============================================
  proc_foley: {
    id: "proc_foley",
    display: "Foley Catheter",
    category: "procedure",
    turnaroundMinutes: 10,
    aliases: ["foley", "urinary catheter", "bladder catheter"],
  },
  proc_ng_tube: {
    id: "proc_ng_tube",
    display: "Nasogastric Tube",
    category: "procedure",
    turnaroundMinutes: 10,
    aliases: ["ng tube", "ngt", "nasogastric"],
  },
  proc_lumbar_puncture: {
    id: "proc_lumbar_puncture",
    display: "Lumbar Puncture",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["lp", "lumbar puncture", "spinal tap"],
  },
  proc_paracentesis: {
    id: "proc_paracentesis",
    display: "Paracentesis",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["paracentesis", "para", "abdominal tap"],
  },
  proc_thoracentesis: {
    id: "proc_thoracentesis",
    display: "Thoracentesis",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["thoracentesis", "chest tap", "pleural tap"],
  },
  proc_chest_tube: {
    id: "proc_chest_tube",
    display: "Chest Tube Insertion",
    category: "procedure",
    turnaroundMinutes: 20,
    aliases: ["chest tube", "tube thoracostomy"],
  },
  proc_pericardiocentesis: {
    id: "proc_pericardiocentesis",
    display: "Pericardiocentesis",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["pericardiocentesis", "pericardial tap"],
  },
  proc_wound_care: {
    id: "proc_wound_care",
    display: "Wound Care/Dressing",
    category: "procedure",
    turnaroundMinutes: 15,
    aliases: ["wound care", "dressing", "wound dressing"],
  },
  proc_suturing: {
    id: "proc_suturing",
    display: "Laceration Repair/Suturing",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["suturing", "laceration repair", "sutures", "stitches"],
  },
  proc_splinting: {
    id: "proc_splinting",
    display: "Splinting",
    category: "procedure",
    turnaroundMinutes: 15,
    aliases: ["splint", "splinting"],
  },
  proc_reduction: {
    id: "proc_reduction",
    display: "Fracture/Dislocation Reduction",
    category: "procedure",
    turnaroundMinutes: 30,
    aliases: ["reduction", "fracture reduction", "dislocation reduction"],
  },

  // ============================================
  // IV FLUIDS
  // ============================================
  iv_ns_bolus: {
    id: "iv_ns_bolus",
    display: "Normal Saline Bolus (1L)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ns bolus", "saline bolus", "1l ns", "fluid bolus"],
  },
  iv_ns_maintenance: {
    id: "iv_ns_maintenance",
    display: "Normal Saline Maintenance",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ns maintenance", "ivf", "maintenance fluids"],
  },
  iv_lr_bolus: {
    id: "iv_lr_bolus",
    display: "Lactated Ringer's Bolus (1L)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lr bolus", "lactated ringers", "rl bolus"],
  },
  iv_lr_maintenance: {
    id: "iv_lr_maintenance",
    display: "Lactated Ringer's Maintenance",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lr maintenance"],
  },
  iv_d5_ns: {
    id: "iv_d5_ns",
    display: "D5 Normal Saline",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d5ns", "d5 ns", "dextrose saline"],
  },
  iv_d5_half_ns: {
    id: "iv_d5_half_ns",
    display: "D5 1/2 Normal Saline",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d5 half ns", "d5 0.45", "d5 half saline"],
  },
  iv_d5w: {
    id: "iv_d5w",
    display: "D5W",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d5w", "dextrose water"],
  },
  iv_d10w: {
    id: "iv_d10w",
    display: "D10W",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d10w", "d10"],
  },
  iv_d50: {
    id: "iv_d50",
    display: "D50 (Dextrose 50%) IV Push",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d50", "dextrose 50", "amp d50"],
  },
  iv_blood_prbc: {
    id: "iv_blood_prbc",
    display: "Packed Red Blood Cells",
    category: "medication",
    turnaroundMinutes: 30,
    aliases: ["prbc", "packed cells", "blood transfusion", "rbcs"],
  },
  iv_blood_ffp: {
    id: "iv_blood_ffp",
    display: "Fresh Frozen Plasma",
    category: "medication",
    turnaroundMinutes: 30,
    aliases: ["ffp", "plasma", "fresh frozen plasma"],
  },
  iv_blood_platelets: {
    id: "iv_blood_platelets",
    display: "Platelets",
    category: "medication",
    turnaroundMinutes: 30,
    aliases: ["platelets", "platelet transfusion"],
  },
  iv_albumin: {
    id: "iv_albumin",
    display: "Albumin",
    category: "medication",
    turnaroundMinutes: 15,
    aliases: ["albumin"],
  },

  // ============================================
  // MEDICATIONS - CARDIAC
  // ============================================
  med_aspirin: {
    id: "med_aspirin",
    display: "Aspirin 325mg PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["aspirin", "asa", "aspirin 325"],
  },
  med_aspirin_81: {
    id: "med_aspirin_81",
    display: "Aspirin 81mg PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["baby aspirin", "asa 81", "low dose aspirin"],
  },
  med_clopidogrel: {
    id: "med_clopidogrel",
    display: "Clopidogrel (Plavix) 600mg loading",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["plavix", "clopidogrel", "plavix load"],
  },
  med_clopidogrel_75: {
    id: "med_clopidogrel_75",
    display: "Clopidogrel (Plavix) 75mg PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["plavix 75", "clopidogrel 75"],
  },
  med_ticagrelor: {
    id: "med_ticagrelor",
    display: "Ticagrelor 180mg PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ticagrelor", "brilinta"],
  },
  med_heparin_bolus: {
    id: "med_heparin_bolus",
    display: "Heparin IV Bolus",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["heparin bolus", "heparin load"],
  },
  med_heparin_drip: {
    id: "med_heparin_drip",
    display: "Heparin IV Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["heparin drip", "heparin infusion", "heparin gtt"],
  },
  med_enoxaparin: {
    id: "med_enoxaparin",
    display: "Enoxaparin (Lovenox) SQ",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lovenox", "enoxaparin"],
  },
  med_warfarin: {
    id: "med_warfarin",
    display: "Warfarin PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["warfarin", "coumadin"],
  },
  med_nitroglycerin_sl: {
    id: "med_nitroglycerin_sl",
    display: "Nitroglycerin 0.4mg SL",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["nitro", "nitroglycerin", "ntg", "sl nitro"],
  },
  med_nitroglycerin_drip: {
    id: "med_nitroglycerin_drip",
    display: "Nitroglycerin IV Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["nitro drip", "ntg drip", "nitro gtt"],
  },
  med_metoprolol_iv: {
    id: "med_metoprolol_iv",
    display: "Metoprolol 5mg IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["metoprolol iv", "lopressor iv"],
  },
  med_metoprolol_po: {
    id: "med_metoprolol_po",
    display: "Metoprolol PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["metoprolol", "lopressor", "metoprolol po"],
  },
  med_atenolol: {
    id: "med_atenolol",
    display: "Atenolol PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["atenolol", "tenormin"],
  },
  med_carvedilol: {
    id: "med_carvedilol",
    display: "Carvedilol PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["carvedilol", "coreg"],
  },
  med_labetalol_iv: {
    id: "med_labetalol_iv",
    display: "Labetalol IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["labetalol", "trandate"],
  },
  med_esmolol: {
    id: "med_esmolol",
    display: "Esmolol IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["esmolol", "brevibloc"],
  },
  med_diltiazem_iv: {
    id: "med_diltiazem_iv",
    display: "Diltiazem IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["diltiazem iv", "cardizem iv"],
  },
  med_diltiazem_po: {
    id: "med_diltiazem_po",
    display: "Diltiazem PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["diltiazem", "cardizem"],
  },
  med_verapamil: {
    id: "med_verapamil",
    display: "Verapamil",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["verapamil", "calan"],
  },
  med_amiodarone_iv: {
    id: "med_amiodarone_iv",
    display: "Amiodarone IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["amiodarone iv", "cordarone iv"],
  },
  med_amiodarone_po: {
    id: "med_amiodarone_po",
    display: "Amiodarone PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["amiodarone", "cordarone"],
  },
  med_adenosine: {
    id: "med_adenosine",
    display: "Adenosine 6mg IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["adenosine", "adenocard"],
  },
  med_digoxin: {
    id: "med_digoxin",
    display: "Digoxin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["digoxin", "lanoxin"],
  },
  med_atropine: {
    id: "med_atropine",
    display: "Atropine 0.5mg IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["atropine"],
  },
  med_epinephrine_cardiac: {
    id: "med_epinephrine_cardiac",
    display: "Epinephrine 1mg IV (Cardiac Arrest)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["epinephrine", "epi", "adrenaline"],
  },
  med_vasopressin: {
    id: "med_vasopressin",
    display: "Vasopressin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["vasopressin"],
  },
  med_dopamine: {
    id: "med_dopamine",
    display: "Dopamine Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["dopamine", "dopamine drip"],
  },
  med_dobutamine: {
    id: "med_dobutamine",
    display: "Dobutamine Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["dobutamine", "dobutamine drip"],
  },
  med_norepinephrine: {
    id: "med_norepinephrine",
    display: "Norepinephrine (Levophed) Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["norepinephrine", "levophed", "norepi"],
  },
  med_phenylephrine: {
    id: "med_phenylephrine",
    display: "Phenylephrine Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["phenylephrine", "neo", "neosynephrine"],
  },
  med_tpa: {
    id: "med_tpa",
    display: "tPA (Alteplase)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["tpa", "alteplase", "thrombolytics"],
  },
  med_statin: {
    id: "med_statin",
    display: "Atorvastatin 80mg PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["statin", "atorvastatin", "lipitor"],
  },
  med_ace_inhibitor: {
    id: "med_ace_inhibitor",
    display: "ACE Inhibitor (Lisinopril)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ace inhibitor", "lisinopril", "acei"],
  },
  med_arb: {
    id: "med_arb",
    display: "ARB (Losartan)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["arb", "losartan", "cozaar"],
  },
  med_furosemide_iv: {
    id: "med_furosemide_iv",
    display: "Furosemide (Lasix) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lasix iv", "furosemide iv"],
  },
  med_furosemide_po: {
    id: "med_furosemide_po",
    display: "Furosemide (Lasix) PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lasix", "furosemide"],
  },
  med_hydralazine: {
    id: "med_hydralazine",
    display: "Hydralazine",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["hydralazine"],
  },
  med_nitroprusside: {
    id: "med_nitroprusside",
    display: "Nitroprusside Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["nitroprusside", "nipride"],
  },
  med_nicardipine: {
    id: "med_nicardipine",
    display: "Nicardipine Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["nicardipine", "cardene"],
  },

  // ============================================
  // MEDICATIONS - PAIN/SEDATION
  // ============================================
  med_morphine: {
    id: "med_morphine",
    display: "Morphine IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["morphine", "ms"],
  },
  med_fentanyl: {
    id: "med_fentanyl",
    display: "Fentanyl IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["fentanyl"],
  },
  med_hydromorphone: {
    id: "med_hydromorphone",
    display: "Hydromorphone (Dilaudid) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["dilaudid", "hydromorphone"],
  },
  med_oxycodone: {
    id: "med_oxycodone",
    display: "Oxycodone PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["oxycodone", "percocet", "oxycontin"],
  },
  med_acetaminophen: {
    id: "med_acetaminophen",
    display: "Acetaminophen PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["tylenol", "acetaminophen", "apap"],
  },
  med_acetaminophen_iv: {
    id: "med_acetaminophen_iv",
    display: "Acetaminophen IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["iv tylenol", "ofirmev", "acetaminophen iv"],
  },
  med_ibuprofen: {
    id: "med_ibuprofen",
    display: "Ibuprofen PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ibuprofen", "motrin", "advil"],
  },
  med_ketorolac: {
    id: "med_ketorolac",
    display: "Ketorolac (Toradol) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["toradol", "ketorolac"],
  },
  med_naproxen: {
    id: "med_naproxen",
    display: "Naproxen PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["naproxen", "aleve", "naprosyn"],
  },
  med_lidocaine_local: {
    id: "med_lidocaine_local",
    display: "Lidocaine (Local Anesthetic)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lidocaine", "local anesthetic"],
  },
  med_ketamine: {
    id: "med_ketamine",
    display: "Ketamine",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ketamine"],
  },
  med_propofol: {
    id: "med_propofol",
    display: "Propofol",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["propofol", "diprivan"],
  },
  med_etomidate: {
    id: "med_etomidate",
    display: "Etomidate",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["etomidate"],
  },
  med_midazolam: {
    id: "med_midazolam",
    display: "Midazolam (Versed)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["versed", "midazolam"],
  },
  med_lorazepam: {
    id: "med_lorazepam",
    display: "Lorazepam (Ativan)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ativan", "lorazepam"],
  },
  med_diazepam: {
    id: "med_diazepam",
    display: "Diazepam (Valium)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["valium", "diazepam"],
  },
  med_haloperidol: {
    id: "med_haloperidol",
    display: "Haloperidol (Haldol)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["haldol", "haloperidol"],
  },

  // ============================================
  // MEDICATIONS - RESPIRATORY
  // ============================================
  med_oxygen_nc: {
    id: "med_oxygen_nc",
    display: "Oxygen via Nasal Cannula",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["o2 nc", "nasal cannula", "oxygen nc"],
  },
  med_oxygen_mask: {
    id: "med_oxygen_mask",
    display: "Oxygen via Face Mask",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["o2 mask", "face mask", "oxygen mask"],
  },
  med_oxygen_nrb: {
    id: "med_oxygen_nrb",
    display: "Oxygen via Non-Rebreather",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["nrb", "non-rebreather", "non rebreather"],
  },
  med_oxygen_hfnc: {
    id: "med_oxygen_hfnc",
    display: "High-Flow Nasal Cannula",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["high flow", "hfnc", "optiflow"],
  },
  med_bipap: {
    id: "med_bipap",
    display: "BiPAP",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["bipap", "bilevel"],
  },
  med_cpap: {
    id: "med_cpap",
    display: "CPAP",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["cpap"],
  },
  med_albuterol_neb: {
    id: "med_albuterol_neb",
    display: "Albuterol Nebulizer",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["albuterol neb", "albuterol nebulizer", "neb treatment"],
  },
  med_albuterol_mdi: {
    id: "med_albuterol_mdi",
    display: "Albuterol MDI",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["albuterol inhaler", "albuterol mdi", "ventolin"],
  },
  med_ipratropium: {
    id: "med_ipratropium",
    display: "Ipratropium Nebulizer",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ipratropium", "atrovent"],
  },
  med_duoneb: {
    id: "med_duoneb",
    display: "Duoneb (Albuterol/Ipratropium)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["duoneb", "combivent"],
  },
  med_prednisone: {
    id: "med_prednisone",
    display: "Prednisone PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["prednisone"],
  },
  med_methylprednisolone: {
    id: "med_methylprednisolone",
    display: "Methylprednisolone (Solu-Medrol) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["solu-medrol", "methylprednisolone", "solumedrol"],
  },
  med_dexamethasone: {
    id: "med_dexamethasone",
    display: "Dexamethasone IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["dexamethasone", "decadron"],
  },
  med_epinephrine_anaphylaxis: {
    id: "med_epinephrine_anaphylaxis",
    display: "Epinephrine 0.3mg IM (Anaphylaxis)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["epipen", "im epinephrine", "epi im"],
  },
  med_magnesium_asthma: {
    id: "med_magnesium_asthma",
    display: "Magnesium Sulfate IV (Asthma)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["mag sulfate asthma", "iv mag asthma"],
  },

  // ============================================
  // MEDICATIONS - GI
  // ============================================
  med_ondansetron: {
    id: "med_ondansetron",
    display: "Ondansetron (Zofran)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["zofran", "ondansetron"],
  },
  med_metoclopramide: {
    id: "med_metoclopramide",
    display: "Metoclopramide (Reglan)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["reglan", "metoclopramide"],
  },
  med_promethazine: {
    id: "med_promethazine",
    display: "Promethazine (Phenergan)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["phenergan", "promethazine"],
  },
  med_pantoprazole: {
    id: "med_pantoprazole",
    display: "Pantoprazole (Protonix) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["protonix", "pantoprazole", "ppi iv"],
  },
  med_omeprazole: {
    id: "med_omeprazole",
    display: "Omeprazole PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["omeprazole", "prilosec", "ppi"],
  },
  med_famotidine: {
    id: "med_famotidine",
    display: "Famotidine (Pepcid)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["famotidine", "pepcid", "h2 blocker"],
  },
  med_sucralfate: {
    id: "med_sucralfate",
    display: "Sucralfate",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["sucralfate", "carafate"],
  },
  med_lactulose: {
    id: "med_lactulose",
    display: "Lactulose",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lactulose"],
  },
  med_octreotide: {
    id: "med_octreotide",
    display: "Octreotide",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["octreotide", "sandostatin"],
  },

  // ============================================
  // MEDICATIONS - ANTIBIOTICS
  // ============================================
  med_vancomycin: {
    id: "med_vancomycin",
    display: "Vancomycin IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["vancomycin", "vanco"],
  },
  med_piperacillin_tazobactam: {
    id: "med_piperacillin_tazobactam",
    display: "Piperacillin-Tazobactam (Zosyn) IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["zosyn", "pip-tazo", "piperacillin"],
  },
  med_ceftriaxone: {
    id: "med_ceftriaxone",
    display: "Ceftriaxone IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ceftriaxone", "rocephin"],
  },
  med_cefepime: {
    id: "med_cefepime",
    display: "Cefepime IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["cefepime", "maxipime"],
  },
  med_cefazolin: {
    id: "med_cefazolin",
    display: "Cefazolin IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["cefazolin", "ancef"],
  },
  med_azithromycin: {
    id: "med_azithromycin",
    display: "Azithromycin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["azithromycin", "zithromax", "z-pack"],
  },
  med_levofloxacin: {
    id: "med_levofloxacin",
    display: "Levofloxacin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["levofloxacin", "levaquin"],
  },
  med_ciprofloxacin: {
    id: "med_ciprofloxacin",
    display: "Ciprofloxacin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ciprofloxacin", "cipro"],
  },
  med_metronidazole: {
    id: "med_metronidazole",
    display: "Metronidazole (Flagyl)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["flagyl", "metronidazole"],
  },
  med_ampicillin: {
    id: "med_ampicillin",
    display: "Ampicillin IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["ampicillin"],
  },
  med_ampicillin_sulbactam: {
    id: "med_ampicillin_sulbactam",
    display: "Ampicillin-Sulbactam (Unasyn)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["unasyn", "ampicillin-sulbactam"],
  },
  med_meropenem: {
    id: "med_meropenem",
    display: "Meropenem",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["meropenem", "merrem"],
  },
  med_gentamicin: {
    id: "med_gentamicin",
    display: "Gentamicin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["gentamicin"],
  },
  med_doxycycline: {
    id: "med_doxycycline",
    display: "Doxycycline",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["doxycycline", "doxy"],
  },
  med_tmp_smx: {
    id: "med_tmp_smx",
    display: "Trimethoprim-Sulfamethoxazole (Bactrim)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["bactrim", "tmp-smx", "septra"],
  },
  med_clindamycin: {
    id: "med_clindamycin",
    display: "Clindamycin",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["clindamycin", "cleocin"],
  },
  med_penicillin: {
    id: "med_penicillin",
    display: "Penicillin G",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["penicillin", "pcn"],
  },
  med_acyclovir: {
    id: "med_acyclovir",
    display: "Acyclovir",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["acyclovir", "zovirax"],
  },
  med_fluconazole: {
    id: "med_fluconazole",
    display: "Fluconazole",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["fluconazole", "diflucan"],
  },
  med_oseltamivir: {
    id: "med_oseltamivir",
    display: "Oseltamivir (Tamiflu)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["tamiflu", "oseltamivir"],
  },

  // ============================================
  // MEDICATIONS - ENDOCRINE
  // ============================================
  med_insulin_regular_drip: {
    id: "med_insulin_regular_drip",
    display: "Regular Insulin IV Drip",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["insulin drip", "regular insulin drip", "insulin gtt"],
  },
  med_insulin_regular_sq: {
    id: "med_insulin_regular_sq",
    display: "Regular Insulin SQ",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["regular insulin", "sliding scale"],
  },
  med_insulin_lispro: {
    id: "med_insulin_lispro",
    display: "Insulin Lispro SQ",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["humalog", "lispro"],
  },
  med_insulin_glargine: {
    id: "med_insulin_glargine",
    display: "Insulin Glargine SQ",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["lantus", "glargine", "basal insulin"],
  },
  med_d50_glucose: {
    id: "med_d50_glucose",
    display: "Dextrose 50% IV Push",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["d50 push", "dextrose push"],
  },
  med_glucagon: {
    id: "med_glucagon",
    display: "Glucagon IM",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["glucagon"],
  },
  med_levothyroxine: {
    id: "med_levothyroxine",
    display: "Levothyroxine IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["levothyroxine", "synthroid iv"],
  },
  med_hydrocortisone: {
    id: "med_hydrocortisone",
    display: "Hydrocortisone IV (Stress Dose)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["hydrocortisone", "stress dose steroids", "solu-cortef"],
  },

  // ============================================
  // MEDICATIONS - ELECTROLYTES
  // ============================================
  med_potassium_iv: {
    id: "med_potassium_iv",
    display: "Potassium Chloride IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["iv potassium", "kcl iv", "k+ iv"],
  },
  med_potassium_po: {
    id: "med_potassium_po",
    display: "Potassium Chloride PO",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["oral potassium", "k-dur", "kcl po"],
  },
  med_magnesium_iv: {
    id: "med_magnesium_iv",
    display: "Magnesium Sulfate IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["iv mag", "magnesium iv", "mag sulfate"],
  },
  med_calcium_gluconate: {
    id: "med_calcium_gluconate",
    display: "Calcium Gluconate IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["calcium gluconate", "iv calcium"],
  },
  med_calcium_chloride: {
    id: "med_calcium_chloride",
    display: "Calcium Chloride IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["calcium chloride"],
  },
  med_phosphorus: {
    id: "med_phosphorus",
    display: "Phosphorus Replacement",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["phosphorus", "phos replacement", "k-phos"],
  },
  med_sodium_bicarb: {
    id: "med_sodium_bicarb",
    display: "Sodium Bicarbonate IV",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["bicarb", "sodium bicarbonate", "nahco3"],
  },

  // ============================================
  // MEDICATIONS - NEURO
  // ============================================
  med_levetiracetam: {
    id: "med_levetiracetam",
    display: "Levetiracetam (Keppra)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["keppra", "levetiracetam"],
  },
  med_phenytoin: {
    id: "med_phenytoin",
    display: "Phenytoin (Dilantin)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["dilantin", "phenytoin", "fosphenytoin"],
  },
  med_valproic_acid: {
    id: "med_valproic_acid",
    display: "Valproic Acid",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["depakote", "valproic acid", "valproate"],
  },
  med_mannitol: {
    id: "med_mannitol",
    display: "Mannitol",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["mannitol"],
  },
  med_hypertonic_saline: {
    id: "med_hypertonic_saline",
    display: "Hypertonic Saline (3%)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["hypertonic saline", "3% saline", "hts"],
  },
  med_naloxone: {
    id: "med_naloxone",
    display: "Naloxone (Narcan)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["narcan", "naloxone"],
  },
  med_flumazenil: {
    id: "med_flumazenil",
    display: "Flumazenil",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["flumazenil", "romazicon"],
  },
  med_thiamine: {
    id: "med_thiamine",
    display: "Thiamine (Vitamin B1)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["thiamine", "vitamin b1", "b1"],
  },

  // ============================================
  // MEDICATIONS - ANTICOAGULATION/REVERSAL
  // ============================================
  med_vitamin_k: {
    id: "med_vitamin_k",
    display: "Vitamin K (Phytonadione)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["vitamin k", "phytonadione"],
  },
  med_protamine: {
    id: "med_protamine",
    display: "Protamine",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["protamine"],
  },
  med_pcc: {
    id: "med_pcc",
    display: "Prothrombin Complex Concentrate (PCC)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["pcc", "kcentra", "4 factor pcc"],
  },
  med_idarucizumab: {
    id: "med_idarucizumab",
    display: "Idarucizumab (Praxbind)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["praxbind", "idarucizumab", "dabigatran reversal"],
  },
  med_andexanet: {
    id: "med_andexanet",
    display: "Andexanet Alfa",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["andexanet", "andexxa", "xa reversal"],
  },
  med_tranexamic_acid: {
    id: "med_tranexamic_acid",
    display: "Tranexamic Acid (TXA)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["txa", "tranexamic acid"],
  },

  // ============================================
  // MEDICATIONS - OTHER
  // ============================================
  med_diphenhydramine: {
    id: "med_diphenhydramine",
    display: "Diphenhydramine (Benadryl)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["benadryl", "diphenhydramine"],
  },
  med_famotidine_allergy: {
    id: "med_famotidine_allergy",
    display: "Famotidine (H2 blocker for allergy)",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["famotidine allergy", "pepcid allergy"],
  },
  med_allopurinol: {
    id: "med_allopurinol",
    display: "Allopurinol",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["allopurinol", "zyloprim"],
  },
  med_colchicine: {
    id: "med_colchicine",
    display: "Colchicine",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["colchicine", "colcrys"],
  },
  med_tetanus: {
    id: "med_tetanus",
    display: "Tetanus Toxoid/Tdap",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["tetanus", "tdap", "tetanus shot"],
  },
  med_rabies: {
    id: "med_rabies",
    display: "Rabies Vaccine",
    category: "medication",
    turnaroundMinutes: 0,
    aliases: ["rabies vaccine", "rabies"],
  },

  // ============================================
  // CONSULTS
  // ============================================
  consult_cardiology: {
    id: "consult_cardiology",
    display: "Cardiology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["cardiology consult", "cards consult", "consult cardiology"],
  },
  consult_pulmonology: {
    id: "consult_pulmonology",
    display: "Pulmonology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["pulmonology consult", "pulm consult", "consult pulmonology"],
  },
  consult_gi: {
    id: "consult_gi",
    display: "GI Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["gi consult", "gastroenterology consult", "consult gi"],
  },
  consult_nephrology: {
    id: "consult_nephrology",
    display: "Nephrology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["nephrology consult", "renal consult", "consult nephrology"],
  },
  consult_neurology: {
    id: "consult_neurology",
    display: "Neurology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["neurology consult", "neuro consult", "consult neurology"],
  },
  consult_neurosurgery: {
    id: "consult_neurosurgery",
    display: "Neurosurgery Consult",
    category: "consult",
    turnaroundMinutes: 45,
    aliases: ["neurosurgery consult", "nsgy consult", "consult neurosurgery"],
  },
  consult_surgery: {
    id: "consult_surgery",
    display: "General Surgery Consult",
    category: "consult",
    turnaroundMinutes: 30,
    aliases: ["surgery consult", "general surgery", "consult surgery"],
  },
  consult_trauma: {
    id: "consult_trauma",
    display: "Trauma Surgery Consult",
    category: "consult",
    turnaroundMinutes: 15,
    aliases: ["trauma consult", "trauma surgery", "consult trauma"],
  },
  consult_ortho: {
    id: "consult_ortho",
    display: "Orthopedic Surgery Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["ortho consult", "orthopedics", "consult ortho"],
  },
  consult_ob: {
    id: "consult_ob",
    display: "OB/GYN Consult",
    category: "consult",
    turnaroundMinutes: 30,
    aliases: ["ob consult", "obgyn consult", "consult ob"],
  },
  consult_urology: {
    id: "consult_urology",
    display: "Urology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["urology consult", "uro consult", "consult urology"],
  },
  consult_ent: {
    id: "consult_ent",
    display: "ENT Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["ent consult", "otolaryngology", "consult ent"],
  },
  consult_ophthalmology: {
    id: "consult_ophthalmology",
    display: "Ophthalmology Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["ophthalmology consult", "eye consult", "consult ophthalmology"],
  },
  consult_psychiatry: {
    id: "consult_psychiatry",
    display: "Psychiatry Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["psychiatry consult", "psych consult", "consult psychiatry"],
  },
  consult_id: {
    id: "consult_id",
    display: "Infectious Disease Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["id consult", "infectious disease", "consult id"],
  },
  consult_toxicology: {
    id: "consult_toxicology",
    display: "Toxicology/Poison Control Consult",
    category: "consult",
    turnaroundMinutes: 15,
    aliases: ["tox consult", "poison control", "consult toxicology"],
  },
  consult_palliative: {
    id: "consult_palliative",
    display: "Palliative Care Consult",
    category: "consult",
    turnaroundMinutes: 120,
    aliases: ["palliative consult", "comfort care", "consult palliative"],
  },
  consult_social_work: {
    id: "consult_social_work",
    display: "Social Work Consult",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["social work", "sw consult", "consult social work"],
  },
  consult_case_management: {
    id: "consult_case_management",
    display: "Case Management",
    category: "consult",
    turnaroundMinutes: 60,
    aliases: ["case management", "cm", "discharge planning"],
  },

  // ============================================
  // ACTIVATION/ALERTS
  // ============================================
  activate_cath_lab: {
    id: "activate_cath_lab",
    display: "Activate Cardiac Catheterization Lab",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["activate cath lab", "cath lab", "cardiac cath"],
  },
  activate_stroke: {
    id: "activate_stroke",
    display: "Activate Stroke Team",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["stroke alert", "code stroke", "activate stroke"],
  },
  activate_trauma: {
    id: "activate_trauma",
    display: "Activate Trauma Team",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["trauma alert", "code trauma", "activate trauma"],
  },
  activate_code: {
    id: "activate_code",
    display: "Call Code Blue",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["code blue", "call code", "cardiac arrest"],
  },
  activate_rapid_response: {
    id: "activate_rapid_response",
    display: "Call Rapid Response",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["rapid response", "rrt", "call rapid"],
  },
  activate_or: {
    id: "activate_or",
    display: "Book Operating Room",
    category: "activation",
    turnaroundMinutes: 0,
    aliases: ["book or", "operating room", "schedule surgery"],
  },

  // ============================================
  // DISPOSITION
  // ============================================
  admit_floor: {
    id: "admit_floor",
    display: "Admit to Floor (General Medical/Surgical)",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["admit floor", "admit medsurg", "floor admission"],
  },
  admit_tele: {
    id: "admit_tele",
    display: "Admit to Telemetry",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["admit tele", "telemetry admission", "admit telemetry"],
  },
  admit_stepdown: {
    id: "admit_stepdown",
    display: "Admit to Step-Down/IMC",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["admit stepdown", "imc", "intermediate care"],
  },
  admit_icu: {
    id: "admit_icu",
    display: "Admit to ICU",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["admit icu", "icu admission", "intensive care"],
  },
  admit_ccu: {
    id: "admit_ccu",
    display: "Admit to CCU",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["admit ccu", "cardiac icu", "coronary care"],
  },
  admit_observation: {
    id: "admit_observation",
    display: "Admit to Observation",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["obs admission", "observation", "admit obs"],
  },
  discharge_home: {
    id: "discharge_home",
    display: "Discharge Home",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["discharge", "dc home", "discharge home"],
  },
  discharge_ama: {
    id: "discharge_ama",
    display: "Discharge AMA",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["ama", "discharge ama", "against medical advice"],
  },
  transfer_facility: {
    id: "transfer_facility",
    display: "Transfer to Outside Facility",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["transfer", "transfer out", "outside facility"],
  },

  // ============================================
  // MONITORING/ORDERS
  // ============================================
  monitor_continuous_cardiac: {
    id: "monitor_continuous_cardiac",
    display: "Continuous Cardiac Monitoring",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["continuous cardiac", "cardiac monitoring", "tele monitoring"],
  },
  monitor_continuous_pulse_ox: {
    id: "monitor_continuous_pulse_ox",
    display: "Continuous Pulse Oximetry",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["continuous pulse ox", "spo2 monitoring", "pulse ox"],
  },
  monitor_neuro_checks: {
    id: "monitor_neuro_checks",
    display: "Neuro Checks q1-2h",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["neuro checks", "neurological checks", "q1h neuro"],
  },
  monitor_strict_io: {
    id: "monitor_strict_io",
    display: "Strict Intake/Output",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["strict i/o", "strict io", "intake output"],
  },
  monitor_daily_weights: {
    id: "monitor_daily_weights",
    display: "Daily Weights",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["daily weights", "daily weight"],
  },
  monitor_fingerstick: {
    id: "monitor_fingerstick",
    display: "Fingerstick Glucose q4-6h",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["fingerstick", "accu-check", "blood sugar check"],
  },
  monitor_serial_exams: {
    id: "monitor_serial_exams",
    display: "Serial Abdominal Exams",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["serial abdominal exams", "serial exams"],
  },
  order_npo: {
    id: "order_npo",
    display: "NPO",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["npo", "nothing by mouth", "nil per os"],
  },
  order_clear_liquids: {
    id: "order_clear_liquids",
    display: "Clear Liquid Diet",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["clear liquids", "clears", "clear liquid diet"],
  },
  order_regular_diet: {
    id: "order_regular_diet",
    display: "Regular Diet",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["regular diet", "general diet", "reg diet"],
  },
  order_cardiac_diet: {
    id: "order_cardiac_diet",
    display: "Cardiac Diet",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["cardiac diet", "heart healthy diet"],
  },
  order_renal_diet: {
    id: "order_renal_diet",
    display: "Renal Diet",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["renal diet", "kidney diet"],
  },
  order_diabetic_diet: {
    id: "order_diabetic_diet",
    display: "Diabetic Diet",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["diabetic diet", "ada diet", "carb controlled"],
  },
  order_dvt_prophylaxis: {
    id: "order_dvt_prophylaxis",
    display: "DVT Prophylaxis (SCDs/Heparin)",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["dvt prophylaxis", "scds", "vte prophylaxis"],
  },
  order_fall_precautions: {
    id: "order_fall_precautions",
    display: "Fall Precautions",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["fall precautions", "fall risk"],
  },
  order_seizure_precautions: {
    id: "order_seizure_precautions",
    display: "Seizure Precautions",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["seizure precautions", "seizure risk"],
  },
  order_suicide_precautions: {
    id: "order_suicide_precautions",
    display: "Suicide Precautions",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["suicide precautions", "1:1 sitter", "safety precautions"],
  },
  order_restraints: {
    id: "order_restraints",
    display: "Physical Restraints",
    category: "monitoring",
    turnaroundMinutes: 0,
    aliases: ["restraints", "physical restraints"],
  },

  // ============================================
  // LOCATION CHANGES (for grading purposes)
  // ============================================
  location_ed: {
    id: "location_ed",
    display: "Move to Emergency Department",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["move to ed", "transfer to ed", "emergency department"],
  },
  location_icu: {
    id: "location_icu",
    display: "Move to Intensive Care Unit",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["move to icu", "transfer to icu", "intensive care unit"],
  },
  location_inpatient: {
    id: "location_inpatient",
    display: "Move to Inpatient Unit",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["move to floor", "inpatient unit", "transfer to floor"],
  },
  location_office: {
    id: "location_office",
    display: "Move to Office",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["move to office", "office visit", "clinic"],
  },
  location_home: {
    id: "location_home",
    display: "Send Home",
    category: "disposition",
    turnaroundMinutes: 0,
    aliases: ["send home", "home", "discharge home location"],
  },
};

// Type for order IDs
export type OrderId = keyof typeof orderLibrary;

// Get order by ID
export function getOrder(orderId: string): OrderDefinition | undefined {
  return orderLibrary[orderId];
}

// Get order display text by ID
export function getOrderDisplayText(orderId: string): string {
  return orderLibrary[orderId]?.display ?? orderId;
}

// Get all order IDs
export function getAllOrderIds(): string[] {
  return Object.keys(orderLibrary);
}

// Get all orders
export function getAllOrders(): OrderDefinition[] {
  return Object.values(orderLibrary);
}

// Search orders by keyword (searches id, display, and aliases)
export function searchOrders(keyword: string): OrderDefinition[] {
  const lowerKeyword = keyword.toLowerCase().trim();
  if (!lowerKeyword) return [];

  return Object.values(orderLibrary).filter((order) => {
    // Check ID
    if (order.id.toLowerCase().includes(lowerKeyword)) return true;
    // Check display text
    if (order.display.toLowerCase().includes(lowerKeyword)) return true;
    // Check aliases
    if (order.aliases.some((alias) => alias.toLowerCase().includes(lowerKeyword))) return true;
    return false;
  });
}

// Get orders by category
export function getOrdersByCategory(category: OrderCategory): OrderDefinition[] {
  return Object.values(orderLibrary).filter((order) => order.category === category);
}
