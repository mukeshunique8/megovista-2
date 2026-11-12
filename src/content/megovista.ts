export * from "../constants/routes";

export const tickerWords = [
  { word: 'Excellence', style: 'serif-fill' },
  { word: 'Integrity', style: 'sans-outline' },
  { word: 'Accuracy', style: 'serif-fill' },
  { word: 'Client Focus', style: 'sans-outline' },
  { word: 'Accountability', style: 'serif-fill' },
] as const

export const missionItems = [
  'Deliver accurate, timely and fully compliant HR and payroll solutions, including PF, ESI, UAN and labour law administration.',
  'Provide end-to-end regulatory support across GST, MSME, Shops and Establishments, and Digital Signature services.',
  'Guide organisations toward ISO, ISMS and CMMI certification, strengthening credibility and operational excellence.',
  'Foster safe, inclusive and respectful workplaces through POSH training and expert HR advisory.',
  'Build long-term client relationships grounded in transparency, professionalism and ethical practice.',
] as const

export const companyContact = {
  name: "Megovista HR Solutions",
  shortName: "Megovista",
  tagline: "People. Connect. Grow.",
  phone: "+91 70104 13915",
  phoneRaw: "7010413915",
  email: "megovista@gmail.com",
  address: "No. 25/11, Jamal Sowcar Street, Old Washermenpet, Chennai - 600021",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600021",
  googleMapsUrl: "https://maps.google.com/?q=No.+25/11,+Jamal+Sowcar+Street,+Old+Washermenpet,+Chennai+-+600021",
  whatsappUrl: "https://wa.me/917010413915?text=Hello%20Megovista%2C%20I%20am%20interested%20in%20your%20HR%20and%20compliance%20services.",
  workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM",
}

export const leadership = {
  name: "E. Gokulraj",
  role: "Managing Partner",
  organization: "Megovista HR Solutions",
  credentials: "Statutory Compliance Specialist · ISO & CMMI Advisory",
  quote: "Great businesses are built by great people. Connect with purpose, lead with vision, and grow together.",
  image: "/team/team.png",
  pillars: [
    {
      number: "01",
      title: "People First",
      desc: "Putting employee wellbeing, dignity, and fair workplace systems at the center of every organizational decision.",
    },
    {
      number: "02",
      title: "Connect with Purpose",
      desc: "Bridging business vision, statutory governance, and people-management to drive sustainable workplace success.",
    },
    {
      number: "03",
      title: "Grow Together",
      desc: "Empowering corporate scalability and credibility through 100% compliant, certified, and ethical HR operations.",
    },
  ],
}

export interface GrowthTimelineMilestone {
  stage: string
  title: string
  desc: string
  x: number
  y: number
  placement: 'top' | 'bottom'
}

export const growthTimelineMilestones: GrowthTimelineMilestone[] = [
  {
    stage: 'DAY 1',
    title: 'Labour Act registers',
    desc: 'Forms A–E are mandatory for every registered commercial entity from the very first day.',
    x: 130,
    y: 400,
    placement: 'bottom',
  },
  {
    stage: '10 PEOPLE',
    title: 'ESIC, POSH & Gratuity',
    desc: 'ESIC where wages are up to ₹21,000, an Internal Committee with an external member, and the Gratuity Act.',
    x: 375,
    y: 310,
    placement: 'top',
  },
  {
    stage: '20 PEOPLE',
    title: 'Provident Fund',
    desc: 'EPFO becomes mandatory: 12% employee plus 12% employer, filed before the 15th.',
    x: 620,
    y: 240,
    placement: 'bottom',
  },
  {
    stage: '250 WORKERS',
    title: 'Safety Committee',
    desc: 'Mandatory for manufacturing and industrial units at this scale.',
    x: 865,
    y: 170,
    placement: 'top',
  },
  {
    stage: '500+',
    title: 'Enterprise authority',
    desc: 'ISO, ISMS and CMMI certification, with a zero-penalty record behind you.',
    x: 1110,
    y: 120,
    placement: 'bottom',
  },
]

export const heroMetrics = [
  { value: "100%", label: "filing accuracy rate across EPFO, ESIC & GST" },
  { value: "Zero", label: "statutory penalty default record since inception" },
  { value: "11+", label: "turnkey statutory and certification solutions" },
  { value: "500+", label: "workforce scalability — we grow with your headcount" },
]

export const growthStory = {
  headline: "Every company starts with a",
  headlineAccent: "first hire.",
  intro:
    "As your team grows, Indian statutory obligations multiply exponentially. Miss a single threshold, and your leadership faces compounding damages under Section 14B and 7Q. Megovista charts your course from day one to enterprise scale.",
  milestones: [
    {
      id: "day-1",
      stage: "Day 1",
      title: "Labour Registers (Forms A–E)",
      desc: "Maintenance of mandatory central & state registers, shops & commercial licensing, employment contracts, and tax withholding setups.",
      tag: "Foundational",
      side: "below-right",
    },
    {
      id: "10-people",
      stage: "10 people",
      title: "ESIC, POSH & Gratuity",
      desc: "Mandatory POSH Internal Complaints Committee (ICC) constitution with External Member appointment, ESIC registration, and Gratuity provisions.",
      tag: "Statutory Mandate",
      side: "above-left",
    },
    {
      id: "20-people",
      stage: "20 people",
      title: "Provident Fund (EPFO)",
      desc: "Statutory EPFO registration, Universal Account Number (UAN) generation, 100% KYC seeding, and automated monthly ECR filing before the 15th.",
      tag: "Criminal Liability Risk",
      side: "above-left",
    },
    {
      id: "250-workers",
      stage: "250 workers",
      title: "Safety Committee & Standing Orders",
      desc: "Formal certified Standing Orders, workplace health and safety committees, factory rules compliance, and contract labour monitoring.",
      tag: "Industrial Scale",
      side: "above-left",
    },
    {
      id: "500-plus",
      stage: "500+",
      title: "Enterprise Authority & ISO 27001",
      desc: "Institutional multi-state governance, ISO 9001 quality frameworks, ISMS (ISO 27001) data protection, and CMMI appraisal readiness.",
      tag: "Tier-1 Maturity",
      side: "above-left",
    },
  ],
}

export const fourPillars = [
  {
    number: "01",
    label: "PILLAR 01",
    title: "HR & Payroll",
    color: "cream",
    textColor: "ink",
    illustration: "payroll",
    blurb: "Complete workforce management, salary processing, and employee welfare.",
    items: [
      { name: "HR Consulting", tag: "Fast-track" },
      { name: "Payroll Processing", tag: "Essential" },
      { name: "Labour Act Compliance", tag: "Mandatory" },
      { name: "POSH Training", tag: "Mandatory" },
    ],
  },
  {
    number: "02",
    label: "PILLAR 02",
    title: "PF & ESI",
    color: "lilac",
    textColor: "ink",
    illustration: "shield",
    blurb: "End-to-end statutory social security and employee benefits administration.",
    items: [
      { name: "PF & ESI Registration", tag: "Fast-track" },
      { name: "Monthly ECR Returns", tag: "Mandatory" },
      { name: "UAN Generation", tag: "Essential" },
      { name: "PF Claims & Settlement", tag: "High value" },
    ],
  },
  {
    number: "03",
    label: "PILLAR 03",
    title: "Registrations & Tax",
    color: "vermilion",
    textColor: "ink",
    illustration: "certificate",
    blurb: "Essential commercial licenses, tax registrations, and digital credentials.",
    items: [
      { name: "Shops and Establishments", tag: "Mandatory" },
      { name: "MSME / Udyam Registration", tag: "High value" },
      { name: "GST Registration & Filing", tag: "Essential" },
      { name: "Digital Signature (DSC)", tag: "Fast-track" },
    ],
  },
  {
    number: "04",
    label: "PILLAR 04",
    title: "Certification",
    color: "lime",
    textColor: "ink",
    illustration: "star-ring",
    blurb: "Internationally recognized audit guidance and maturity frameworks.",
    items: [
      { name: "ISO Certification (9001)", tag: "Global" },
      { name: "ISMS (ISO 27001)", tag: "Global" },
      { name: "CMMI Certification", tag: "Global" },
      { name: "Pre-Audit Governance", tag: "High value" },
    ],
  },
]

export const elevenSolutions = [
  {
    number: "01",
    category: "HR & PAYROLL",
    title: "Payroll Processing & Support",
    bullets: [
      "Monthly payroll calculation and verification",
      "Salary structuring & tax optimization",
      "Statutory deductions (PF, ESI, PT, TDS)",
      "Automated payslip generation & reports",
    ],
  },
  {
    number: "02",
    category: "SOCIAL SECURITY",
    title: "PF & ESI Compliance",
    bullets: [
      "EPFO & ESIC establishment registrations",
      "Monthly ECR file preparation & portal filing",
      "UAN generation & KYC Aadhaar seeding",
      "Employee claim guidance (Form 19, 10C, 31)",
    ],
  },
  {
    number: "03",
    category: "TAX & FINANCE",
    title: "GST Registration & Return Filing",
    bullets: [
      "New GST registration & multi-state amendment",
      "Monthly GSTR-1 & GSTR-3B filings",
      "ITC reconciliation & vendor ledger audit",
      "Annual return filing (GSTR-9)",
    ],
  },
  {
    number: "04",
    category: "STATUTORY OPS",
    title: "Labour Act Compliance",
    bullets: [
      "Maintenance of mandatory statutory registers",
      "Contract Labour (Regulation & Abolition) Act",
      "Minimum Wages & Payment of Wages compliance",
      "Maternity Benefit & Gratuity compliance",
    ],
  },
  {
    number: "05",
    category: "CERTIFICATION",
    title: "ISO, ISMS & CMMI Certification",
    bullets: [
      "ISO 9001 Quality Management System",
      "ISO 27001 Information Security (ISMS)",
      "CMMI process maturity gap assessment",
      "Pre-audit documentation & certification advisory",
    ],
  },
  {
    number: "06",
    category: "WORKPLACE SAFETY",
    title: "POSH Training & Compliance",
    bullets: [
      "Internal Complaints Committee (ICC) constitution",
      "External Member appointment & advisory",
      "Interactive employee sensitisation workshops",
      "Statutory Annual POSH Report filing with district officer",
    ],
  },
  {
    number: "07",
    category: "LICENSING",
    title: "Shops & Establishments & MSME",
    bullets: [
      "Shops & Commercial Establishments license",
      "Udyam / MSME registration for priority credit",
      "Periodic license renewals & notices response",
      "Display certificates & compliance audit",
    ],
  },
  {
    number: "08",
    category: "CREDENTIALS",
    title: "Digital Signature Certificates (DSC)",
    bullets: [
      "Class 3 DSC with secure USB cryptographic token",
      "Director / Signatory paperless KYC verification",
      "MCA, EPFO, ESIC & GST portal DSC mapping",
      "Timely renewal alerts before token expiry",
    ],
  },
  {
    number: "09",
    category: "DOCUMENTATION",
    title: "HR Documentation & Policies",
    bullets: [
      "Custom Employee Handbook & Code of Conduct",
      "Employment contracts & offer letters (IP/NDA)",
      "Performance appraisal & promotion frameworks",
      "Separation, Full & Final (F&F) settlement protocols",
    ],
  },
  {
    number: "10",
    category: "TALENT",
    title: "Recruitment & Onboarding",
    bullets: [
      "Role profiling & talent pipeline sourcing",
      "Candidate technical & cultural screening",
      "Structured day-one employee onboarding kit",
      "Pre-employment KYC & background verification",
    ],
  },
  {
    number: "11",
    category: "ADVISORY",
    title: "HR Consulting & Advisory",
    bullets: [
      "Workforce compensation benchmarking",
      "Statutory risk exposure diagnostic review",
      "HR tech stack & portal integration advisory",
      "Executive consultation with Managing Partner",
    ],
  },
]

export const blueprintPhases = [
  {
    number: "01",
    timeframe: "Days 1 – 3",
    title: "Diagnostic HR & Statutory Audit",
    tagline: "Forensic gap analysis and exposure scorecard",
    description:
      "We perform a deep forensic audit of historical PF, ESI, GST, and Labour filings to uncover liabilities before department inspectors do.",
    checklist: [
      "Comprehensive statutory audit scorecard",
      "Section 14B / 7Q penalty exposure heatmap",
      "Executive rectification & alignment blueprint",
      "Director personal liability risk mitigation",
    ],
  },
  {
    number: "02",
    timeframe: "Days 4 – 10",
    title: "Statutory Setup & Process Alignment",
    tagline: "Portal reconciliation, KYC cleansing, and setup",
    description:
      "We clean historical data, link UANs with Aadhaar/bank accounts, map DSC tokens, and build an automated compliance calendar.",
    checklist: [
      "EPFO & ESIC portal reconciliation and KYC seeding",
      "Payroll structure & statutory deduction alignment",
      "POSH Internal Complaints Committee constitution",
      "Mandatory commercial displays & register setup",
    ],
  },
  {
    number: "03",
    timeframe: "Monthly · Before 15th & 20th",
    title: "Automated Monthly Operations",
    tagline: "Zero-penalty autonomous execution every cycle",
    description:
      "Every month, our engine runs payroll, prepares ECR challans, submits portal filings, and provides management verification receipts.",
    checklist: [
      "Monthly ECR calculation and pre-15th EPFO remittance",
      "ESIC portal filings and medical card linking",
      "GSTR-1, GSTR-3B filings & vendor ITC matching",
      "Statutory payslip dispatch and executive confirmation",
    ],
  },
  {
    number: "04",
    timeframe: "Ongoing & Milestones",
    title: "Certification & Continuous Advisory",
    tagline: "Certification support and strategic executive access",
    description:
      "We institutionalize enterprise quality standards (ISO 9001), information security (ISO 27001), and CMMI maturity frameworks for tier-1 client bids.",
    checklist: [
      "ISO 9001:2015 & ISO 27001 (ISMS) implementation",
      "CMMI process maturity gap assessment & audit prep",
      "Continuous labour notice defense representation",
      "On-demand executive counsel with Managing Partner",
    ],
  },
]

export const visionContent = {
  statement:
    "To be India's most trusted partner in human resources, statutory compliance, and organisational certification, enabling businesses to operate with unshakeable confidence, integrity, and sustained growth.",
  mission: [
    "Deliver accurate, timely, and fully compliant HR and payroll solutions, including PF, ESI, UAN, and labour law administration.",
    "Provide end-to-end regulatory support across GST, MSME, Shops & Establishments, and Digital Signature services.",
    "Guide organisations toward ISO, ISMS, and CMMI certification, strengthening their credibility and tier-1 market authority.",
    "Foster safe, inclusive, and respectful workplaces through POSH training and expert HR advisory.",
    "Build long-term client relationships grounded in transparency, professionalism, and ethical practice.",
  ],
}

export const valuesList = [
  {
    number: "01",
    title: "Integrity",
    tagline: "Ethical and confidential",
    description: "We uphold the highest ethical standards in every engagement and handle client information with complete confidentiality.",
  },
  {
    number: "02",
    title: "Accuracy",
    tagline: "Every filing done right",
    description: "We treat every filing, return, and registration with precision, because compliance leaves no room for error.",
  },
  {
    number: "03",
    title: "Accountability",
    tagline: "We own deadlines",
    description: "We take ownership of our commitments and deliver within agreed timelines without compromise.",
  },
  {
    number: "04",
    title: "Client Focus",
    tagline: "Fitted to your needs",
    description: "We tailor our solutions to each client's size, sector, and goals, building relationships for the long term.",
  },
  {
    number: "05",
    title: "Excellence",
    tagline: "Current with the law",
    description: "We keep our knowledge current with changing laws and best practices so that our clients always stay ahead.",
  },
]

export const whyChooseAdvantages = [
  {
    number: "01",
    bg: "ink",
    textColor: "cream",
    title: "Reliable, End-to-End Support",
    desc: "From statutory PF/ESI filings to ISO certification and payroll, we handle your entire back-office regulatory load under one roof.",
  },
  {
    number: "02",
    bg: "lilac",
    textColor: "ink",
    title: "100% Accuracy Guarantee",
    desc: "Compliance leaves zero room for error. We treat every monthly return, challan, and registration with precision so you avoid penalties.",
  },
  {
    number: "03",
    bg: "lime",
    textColor: "ink",
    title: "Zero Penalty Record",
    desc: "A track record of zero default penalties across 1,000+ filing cycles since inception across central and state authorities.",
  },
  {
    number: "04",
    bg: "vermilion",
    textColor: "ink",
    title: "Experienced Leadership",
    desc: "Guided by Managing Partner E. Gokulraj, our team pairs deep regulatory domain expertise with modern corporate agility.",
  },
  {
    number: "05",
    bg: "white",
    textColor: "ink",
    title: "Tailored to Your Growth Stage",
    desc: "Whether you are an emerging startup needing basic payroll & Udyam or a 500+ enterprise seeking CMMI & ISO audit, we scale with you.",
  },
  {
    number: "06",
    bg: "ink",
    textColor: "cream",
    title: "True Long-Term Partnership",
    desc: "We work as a natural extension of your team — dedicated to your operational peace of mind and workforce wellbeing.",
  },
]

export const faqs = [
  {
    q: "At what headcount does PF & ESI become mandatory in India?",
    a: "Under the Employees’ Provident Funds and Miscellaneous Provisions Act 1952, EPFO registration is strictly mandatory once an establishment reaches 20 employees. Voluntary registration is permitted below 20. ESIC is mandatory at 10 or 20 employees (depending on state legislation) for workers earning up to ₹21,000/month. Megovista handles complete registration, UAN setup, and monthly filings.",
  },
  {
    q: "What is POSH compliance and is it mandatory for tech startups?",
    a: "The POSH Act 2013 mandates that ANY entity with 10 or more employees must constitute a formal Internal Complaints Committee (ICC) headed by a senior woman employee and including an independent External Member. Non-compliance attracts a statutory fine of ₹50,000 and possible cancellation of business licenses. Megovista provides external member appointment, training, and annual report filing.",
  },
  {
    q: "What are the penalties for late PF & ESI monthly ECR filings?",
    a: "Late ECR filing after the 15th attracts Section 14B penal damages (ranging up to 100% of arrears) plus Section 7Q mandatory interest at 12% per annum. More critically, revenue recovery officers can freeze company bank accounts and issue warrants to directors. Megovista enforces a strict pre-15th protocol with a zero-penalty guarantee.",
  },
  {
    q: "Can Megovista manage workforce compliance across multiple Indian states?",
    a: "Yes. For enterprises with teams, branches, or remote staff across Delhi, Karnataka, Maharashtra, Tamil Nadu, Telangana, and other states, Megovista sets up state sub-codes, coordinates state-specific Professional Tax (PT), and ensures local Shops and Commercial Establishments compliance.",
  },
  {
    q: "How does ISO 9001 and ISO 27001 (ISMS) help in winning Tier-1 clients?",
    a: "Enterprise RFPs from global corporations, BFSI, and US/EU buyers mandate ISO 27001 as proof that client data, intellectual property, and access policies meet international security standards. Megovista conducts the forensic gap audit, prepares SOPs, runs internal mock audits, and guides you through certification.",
  },
  {
    q: "How does the onboarding transition work if we already have a consultant?",
    a: "We execute a seamless 10-day handover without business interruption. Our team performs a forensic audit on day 1 to catch past mismatches, reconciles portal KYC data, updates DSC credentials, and builds a master compliance calendar. Your team never misses a filing deadline during transition.",
  },
]

