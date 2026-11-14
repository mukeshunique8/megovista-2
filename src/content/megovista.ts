export * from "../constants/routes";

// ─── COMPANY & CONTACT DETAILS ───────────────────────────────────────────────
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

// ─── HERO SECTION CONTENT ───────────────────────────────────────────────────
export const heroContent = {
  badge: "Modern HR Operations & Statutory Governance",
  titlePrimary: "Precision HR & compliance,",
  titleAccent: "built for scale.",
  description:
    "Megovista connects end-to-end HR operations, statutory social security (EPFO, ESIC, GST, Labour Laws), and global certifications (ISO, ISMS, CMMI) into one seamless, zero-penalty operating system.",
  ctaPrimary: {
    label: "Explore Solutions",
    href: "#services",
  },
  ctaSecondary: {
    label: "Schedule Consultation",
    href: "#contact",
  },
  image: "/images/hero-modern-hr.jpg",
  metrics: [
    { value: "100%", label: "Filing accuracy rate across EPFO, ESIC & GST" },
    { value: "Zero", label: "Statutory penalty default record since inception" },
    { value: "11+", label: "Turnkey statutory & certification frameworks" },
    { value: "500+", label: "Workforce scalability — scaling with your growth" },
  ],
  telemetryPills: [
    { label: "EPFO & ESIC Status", status: "100% On-Time Protocol" },
    { label: "Zero Liability Defaults", status: "Sec 14B & 7Q Risk Shield" },
  ],
}

// Legacy alias for compatibility
export const heroMetrics = heroContent.metrics;

// ─── SERVICES CONTENT (THE 4 CORE PILLARS) ──────────────────────────────────
export interface ServicePillar {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  image: string
  deliverables: string[]
  highlight: string
}

export const servicesContent = {
  eyebrow: "Core Capabilities",
  title: "Four Pillars. Total Compliance.",
  subtitle:
    "Everything ambitious companies need to maintain pristine regulatory governance, safe workplaces, and international enterprise credibility.",
  deliverablesLabel: "Key Deliverables",
  ctaLabel: "Request scope details",
  pillars: [
    {
      id: "payroll-hr",
      number: "01",
      title: "HR & Payroll Operations",
      tagline: "Foundational People Infrastructure",
      description:
        "Full-cycle monthly payroll computation, tax structuring, attendance reconciliation, and central & state Labour Act registers (Forms A–E).",
      image: "/images/services-payroll.jpg",
      deliverables: [
        "End-to-end payroll processing & payslip generation",
        "Statutory Form A–E labour registers maintenance",
        "Employment contracts, offer letters & HR policies",
        "Payment of Gratuity Act computation & setup",
      ],
      highlight: "Guaranteed Accuracy",
    },
    {
      id: "epfo-esic",
      number: "02",
      title: "Statutory Social Security",
      tagline: "EPFO & ESIC Administration",
      description:
        "Turnkey registration, Universal Account Number (UAN) generation, 100% KYC seeding, and automated monthly ECR filings before the 15th.",
      image: "/images/services-compliance.jpg",
      deliverables: [
        "Fast-track EPFO & ESIC entity registration",
        "Zero-penalty monthly ECR returns filing",
        "UAN generation & Aadhaar/Bank KYC verification",
        "PF withdrawal, transfer & death claim assistance",
      ],
      highlight: "Pre-15th Protocol",
    },
    {
      id: "tax-registrations",
      number: "03",
      title: "Registrations & Tax Filings",
      tagline: "Entity Legality & Commercial Licenses",
      description:
        "Essential commercial licenses, state Shops and Commercial Establishments compliance, monthly GST filing, MSME/Udyam, and encrypted DSC tokens.",
      image: "/images/services-tax.jpg",
      deliverables: [
        "Shops & Commercial Establishments license",
        "MSME / Udyam registration & subsidy facilitation",
        "GST monthly/quarterly reconciliation & returns",
        "Class 3 encrypted Digital Signature Certificates (DSC)",
      ],
      highlight: "Multi-State Ready",
    },
    {
      id: "governance-audit",
      number: "04",
      title: "Governance & Certification",
      tagline: "Workplace Safety & Global Credibility",
      description:
        "Mandatory POSH compliance with external member appointment, employee sensitization, plus ISO 9001, ISO 27001 (ISMS), and CMMI appraisal readiness.",
      image: "/images/services-audit.jpg",
      deliverables: [
        "POSH Internal Complaints Committee (ICC) & external member",
        "Annual POSH employer report filing & staff workshops",
        "ISO 9001 (QMS) & ISO 27001 (ISMS) audit advisory",
        "CMMI maturity appraisal guidance for enterprise RFPs",
      ],
      highlight: "Enterprise RFP Advantage",
    },
  ] as ServicePillar[],
}

// ─── PROCESS CONTENT (THE 4-STAGE BLUEPRINT) ────────────────────────────────
export interface BlueprintPhase {
  number: string
  timeframe: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
}

export const processContent = {
  eyebrow: "The Blueprint",
  title: "From Audit to Autopilot in Four Phases",
  subtitle:
    "A transparent, milestone-driven roadmap that transforms historical liabilities into structured, automated compliance.",
  ctaLabel: "Initiate this phase",
  deliverablesHeading: "Phase Deliverables",
  phases: [
    {
      number: "01",
      timeframe: "Days 1 – 3",
      title: "Diagnostic Forensic Audit",
      tagline: "Historical Gap Analysis & Exposure Scorecard",
      description:
        "We conduct an in-depth audit of past PF, ESI, GST, and Labour filings to identify hidden liabilities and Section 14B/7Q interest exposure before department inspectors do.",
      deliverables: [
        "Comprehensive statutory compliance scorecard",
        "Section 14B / 7Q penalty exposure heatmap",
        "Executive rectification & transition blueprint",
        "Director liability & risk mitigation protocol",
      ],
    },
    {
      number: "02",
      timeframe: "Days 4 – 10",
      title: "Portal Reconciliation & Setup",
      tagline: "KYC Cleansing & Credential Synchronization",
      description:
        "We cleanse historical employee records, resolve pending KYC rejections on government portals, update DSC credentials, and configure an automated statutory calendar.",
      deliverables: [
        "EPFO & ESIC portal reconciliation & KYC seeding",
        "Digital signature (DSC) authorization & token setup",
        "Automated compliance calendar with escalation triggers",
        "Designated Megovista relationship manager onboarding",
      ],
    },
    {
      number: "03",
      timeframe: "Monthly Ongoing",
      title: "Autopilot Monthly Execution",
      tagline: "Strict Pre-15th Zero-Penalty Protocol",
      description:
        "Every month, our dedicated desk computes exact payroll withholdings, generates challans, files returns, and delivers timestamped proof before statutory deadlines.",
      deliverables: [
        "Timely ECR and challan generation across PF & ESI",
        "Pre-15th submission with zero penalty guarantee",
        "Monthly payslips, registers & tax summaries",
        "Grievance resolution for member UAN / claims",
      ],
    },
    {
      number: "04",
      timeframe: "Scale & Growth",
      title: "Governance & Certification",
      tagline: "ISO, ISMS & Tier-1 Client Credibility",
      description:
        "As your team expands to 50, 100, and 500+ employees, we implement POSH workplace safety frameworks, factory safety committees, and ISO 9001/27001 certifications.",
      deliverables: [
        "Mandatory POSH ICC constitution & external member",
        "ISO 9001 and ISO 27001 audit readiness",
        "CMMI process framework alignment",
        "Multi-state expansion & branch registration",
      ],
    },
  ] as BlueprintPhase[],
}

// Legacy alias
export const blueprintPhases = processContent.phases.map(p => ({
  ...p,
  checklist: p.deliverables,
}))

// ─── ABOUT & TRUST CONTENT ──────────────────────────────────────────────────
export const aboutContent = {
  eyebrow: "About Megovista",
  title: "Where Deep Domain Expertise Meets Modern Agility",
  subtitle:
    "We act as an authentic executive extension of your management team — dedicated to your operational peace of mind and workforce wellbeing.",
  leadership: {
    name: "E. Gokulraj",
    role: "Managing Partner",
    organization: "Megovista HR Solutions",
    credentials: "Statutory Compliance Specialist · ISO & CMMI Advisory",
    quote:
      "Great businesses are built by great people. Connect with purpose, lead with vision, and grow together.",
    image: "/team/team.png",
  },
  pillars: [
    {
      title: "Zero-Penalty Record",
      desc: "Impeccable operational discipline ensuring zero default notices, damages, or compounding interest under Sections 14B and 7Q.",
      icon: "ShieldCheck",
    },
    {
      title: "Direct Department Liaison",
      desc: "Deep hands-on experience interfacing with EPFO, ESIC, Labour, and GST inspectorates to handle queries swiftly and professionally.",
      icon: "Briefcase",
    },
    {
      title: "Multi-State Coverage",
      desc: "Unified workforce governance across Tamil Nadu, Karnataka, Maharashtra, Delhi NCR, Telangana, and key Indian commercial hubs.",
      icon: "MapPin",
    },
    {
      title: "Tier-1 Certification Edge",
      desc: "Guiding growing startups and enterprises to ISO 9001, ISO 27001, and CMMI certifications required to win enterprise buyer RFPs.",
      icon: "Award",
    },
  ],
  image: "/images/about-corporate.jpg",
}

// Legacy alias
export const leadership = aboutContent.leadership;
export const valuesList = aboutContent.pillars.map((p, idx) => ({
  number: `0${idx + 1}`,
  title: p.title,
  desc: p.desc,
  icon: p.icon,
}))
export const whyChooseAdvantages = aboutContent.pillars.map((p, idx) => ({
  number: `0${idx + 1}`,
  title: p.title,
  desc: p.desc,
}))

// ─── FAQS ───────────────────────────────────────────────────────────────────
export const faqContent = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "Clear Answers for Confident Decisions",
  subtitle:
    "The core statutory, financial, and operational questions business owners ask before partnering with Megovista.",
  items: [
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
  ],
}

// Legacy alias
export const faqs = faqContent.items;

// ─── CONTACT SECTION CONTENT ────────────────────────────────────────────────
export const contactContent = {
  eyebrow: "Get In Touch",
  title: "Let's Make Compliance the Easy Part",
  subtitle:
    "Book a confidential statutory consultation or forensic audit review with our Chennai advisory team.",
  form: {
    nameLabel: "Your Full Name",
    emailLabel: "Work Email",
    phoneLabel: "Phone Number",
    serviceLabel: "Service Required",
    messageLabel: "Tell us about your team size or compliance requirements",
    submitLabel: "Schedule Consultation",
    serviceOptions: [
      "Statutory PF & ESI Compliance",
      "Full-Cycle Payroll Processing",
      "Diagnostic Forensic HR Audit",
      "POSH Compliance & External Member",
      "ISO 9001 / ISO 27001 Certification",
      "Commercial Tax (GST / MSME / DSC)",
      "Multi-State Expansion Advisory",
    ],
  },
  headquarters: {
    city: "Chennai Headquarters",
    address: companyContact.address,
    hours: companyContact.workingHours,
    phone: companyContact.phone,
    email: companyContact.email,
    whatsappUrl: companyContact.whatsappUrl,
    googleMapsUrl: companyContact.googleMapsUrl,
  },
  ui: {
    whatsAppCta: "Chat on WhatsApp",
    headquartersLabel: "Headquarters",
    openInGoogleMaps: "Open in Google Maps ↗",
    directPhoneLabel: "Direct Phone",
    emailInquiriesLabel: "Email Inquiries",
    operatingHoursLabel: "Office Operating Hours",
    successTitle: "Consultation Request Received!",
    successMessage:
      "Thank you for reaching out. Our compliance advisory team will contact you within 24 business hours to confirm your consultation slot.",
    resetButton: "Send Another Message",
  },
}

// ─── FOOTER CONTENT ────────────────────────────────────────────────────────
export const footerContent = {
  bio: "Turnkey HR operations, statutory governance (EPFO, ESIC, GST, Labour Laws), and ISO/CMMI certification advisory for scaling enterprises.",
  operatingHoursLabel: "Operating Hours",
  navigationHeading: "Navigation",
  inquiriesHeading: "Direct Inquiries",
  allRightsReserved: "All rights reserved.",
  backToTop: "Back to top",
  consultationButton: "Consult an Expert",
  whatsAppButton: "Chat on WhatsApp",
  callButton: "Direct Call",
}

// ─── LEGACY COMPATIBILITY EXPORTS ───────────────────────────────────────────
export const tickerWords = [
  { word: "Excellence", style: "serif-fill" },
  { word: "Integrity", style: "sans-outline" },
  { word: "Accuracy", style: "serif-fill" },
  { word: "Client Focus", style: "sans-outline" },
  { word: "Accountability", style: "serif-fill" },
] as const

export const missionItems = [
  "Deliver accurate, timely and fully compliant HR and payroll solutions, including PF, ESI, UAN and labour law administration.",
  "Provide end-to-end regulatory support across GST, MSME, Shops and Establishments, and Digital Signature services.",
  "Guide organisations toward ISO, ISMS and CMMI certification, strengthening credibility and operational excellence.",
  "Foster safe, inclusive and respectful workplaces through POSH training and expert HR advisory.",
  "Build long-term client relationships grounded in transparency, professionalism and ethical practice.",
] as const

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

// ─── AGENCY LANDING PAGE DATA ───────────────────────────────────────────────
export const agencyCategories = [
  "All Solutions",
  "Payroll & Registers",
  "EPFO & ESIC Governance",
  "Tax, GST & Commercial",
  "POSH & ISO Certifications",
] as const

export interface AgencyProject {
  id: string
  title: string
  client: string
  category: string
  year: string
  status: string
  image: string
  colSpan: string
  description: string
}

export const agencyProjects: AgencyProject[] = [
  {
    id: "SOL_EPFO_01",
    title: "EPFO & ESIC Section 14B Defense",
    client: "Precision Engineering & Manufacturing",
    category: "EPFO & ESIC Governance",
    year: "2024",
    status: "100% Zero Penalty",
    image: "/images/services-compliance.jpg",
    colSpan: "md:col-span-2",
    description: "Complete remediation of historical PF arrears, damages mitigation under Section 14B, and implementation of automated pre-15th ECR filing protocol.",
  },
  {
    id: "SOL_PAYROLL_02",
    title: "Multi-State Corporate Payroll Architecture",
    client: "National Tech & Logistics Scaleup",
    category: "Payroll & Registers",
    year: "2024",
    status: "Active Autopilot",
    image: "/images/services-payroll.jpg",
    colSpan: "col-span-1",
    description: "Automated monthly payroll across 4 Indian states, statutory Form A–E labour registers, and integrated TDS/PT withholdings.",
  },
  {
    id: "SOL_ISO_03",
    title: "ISO 27001 (ISMS) & 9001 Enterprise Certification",
    client: "B2B SaaS & Cloud Infrastructure",
    category: "POSH & ISO Certifications",
    year: "2025",
    status: "Accredited",
    image: "/images/services-audit.jpg",
    colSpan: "col-span-1",
    description: "End-to-end information security management system (ISMS) implementation, audit gap analysis, and global enterprise RFP qualification.",
  },
  {
    id: "SOL_POSH_04",
    title: "POSH Internal Committee (ICC) & Workplace Safety",
    client: "Enterprise FinTech & IT Services",
    category: "POSH & ISO Certifications",
    year: "2024",
    status: "Compliant & Filed",
    image: "/images/about-corporate.jpg",
    colSpan: "md:col-span-2",
    description: "Mandatory POSH policy drafting, senior external member appointment, bilingual staff sensitization, and annual employer report submission.",
  },
  {
    id: "SOL_TAX_05",
    title: "Commercial Tax, MSME Udyam & Class-3 DSC Setup",
    client: "Healthcare & Diagnostic Network",
    category: "Tax, GST & Commercial",
    year: "2025",
    status: "Active Filing",
    image: "/images/services-tax.jpg",
    colSpan: "col-span-1",
    description: "Monthly GST reconciliations, MSME / Udyam subsidy facilitation, state commercial establishment licenses, and encrypted digital signatures.",
  },
  {
    id: "SOL_LABOUR_06",
    title: "Labour Act Registers & Inspection Preparedness",
    client: "Omnichannel Retail & Warehousing",
    category: "Payroll & Registers",
    year: "2024",
    status: "Inspection Shield",
    image: "/images/hero-modern-hr.jpg",
    colSpan: "col-span-1",
    description: "Central and state Labour Act compliance (Forms A–E, wage slips, bonus registers, and gratuity calculations) shielding directors from personal liabilities.",
  },
  {
    id: "SOL_AUDIT_07",
    title: "Diagnostic Forensic HR & Statutory Audit",
    client: "Heavy Fabrication & Industrial Plant",
    category: "EPFO & ESIC Governance",
    year: "2024",
    status: "Clean Scorecard",
    image: "/images/about-corporate.jpg",
    colSpan: "md:col-span-2",
    description: "Deep-dive 36-month forensic audit of historical PF, ESI, GST, and Labour filings uncovering latent liabilities before government inspectors do.",
  },
]

export interface AgencyTeamMember {
  id: string
  name: string
  role: string
  credentials: string
  bio: string
  avatar: string
}

export const agencyTeam: AgencyTeamMember[] = [
  {
    id: "DIR_01",
    name: "E. Gokulraj",
    role: "Managing Director",
    credentials: "Statutory Compliance Specialist · Enterprise Governance",
    bio: "Over a decade of direct domain expertise in statutory social security, EPFO/ESIC tribunal procedures, and enterprise operational governance.",
    avatar: "/team/team.png",
  },
  {
    id: "DIR_02",
    name: "K. Meenakshi",
    role: "Managing Director",
    credentials: "Labour Law Counsel & Operations Strategy",
    bio: "Leading corporate legal advisory, Factories Act governance, multi-state establishment licensing, and dispute resolution.",
    avatar: "/images/about-corporate.jpg",
  },
  {
    id: "DIR_03",
    name: "Santhosh",
    role: "Client Relations",
    credentials: "Enterprise Accounts & Department Liaison",
    bio: "Facilitating seamless portal reconciliations, KYC validations, department interactions with inspectorates, and dedicated client advisory.",
    avatar: "/images/hero-modern-hr.jpg",
  },
]

export interface AgencyClient {
  id: string
  name: string
  sector: string
  engagements: string
  status: string
}

export const agencyClients: AgencyClient[] = [
  {
    id: "CL_01",
    name: "Manufacturing & Industrial Engineering",
    sector: "Heavy Fabrication, Auto Ancillaries, Assembly",
    engagements: "Turnkey PF, ESI, Factory Act & Safety",
    status: "Active Governance",
  },
  {
    id: "CL_02",
    name: "Information Technology & Enterprise SaaS",
    sector: "Cloud Infrastructure, Software Development",
    engagements: "ISO 27001 ISMS, Multi-State Payroll & POSH",
    status: "Active Governance",
  },
  {
    id: "CL_03",
    name: "Healthcare & Multi-Specialty Clinics",
    sector: "Hospitals, Diagnostic Centers, Pharmaceuticals",
    engagements: "Statutory ESIC, GST Reconciliation & Registrations",
    status: "Active Governance",
  },
  {
    id: "CL_04",
    name: "Retail, FMCG & Commercial Warehousing",
    sector: "Supply Chain, Omnichannel Retail, Distribution",
    engagements: "Labour Act Registers (Forms A–E) & Shops License",
    status: "Active Governance",
  },
  {
    id: "CL_05",
    name: "Financial Services & FinTech Scaleups",
    sector: "NBFCs, Payment Gateways, WealthTech",
    engagements: "CMMI Appraisal Advisory, POSH ICC & Audits",
    status: "Active Governance",
  },
  {
    id: "CL_06",
    name: "Hospitality & Commercial Services",
    sector: "Hotels, Facility Management, Logistics",
    engagements: "Contract Labour Regulation & EPF Advisory",
    status: "Active Governance",
  },
]

export const agencyManifesto = {
  eyebrow: "Our Philosophy",
  titlePrimary: "Statutory Precision.",
  titleAccent: "Engineered for Scale.",
  lead: "An uncompromising approach to corporate compliance, statutory governance, and operational credibility. Built for ambitious enterprises.",
  paragraphs: [
    "Compliance is not bureaucratic friction — when engineered properly, it is the ultimate competitive moat. We build corporate operating systems that remove the threat of statutory defaults, penalty compounding, and director personal liability.",
    "We believe in mathematical precision. In statutory social security, a single misplaced KYC detail or delayed filing after the 15th results in compounding damages under Sections 14B and 7Q. Megovista enforces a strict pre-15th protocol backed by automated audits, certified DSC security, and seasoned legal advisory.",
    "Whether your enterprise is hiring its 10th employee or scaling past 500 across multiple Indian states, Megovista guarantees total regulatory peace of mind.",
  ],
  stats: [
    { label: "Statutory Filing Accuracy", value: "100%" },
    { label: "Penalty Default Rate", value: "Zero" },
    { label: "Turnkey Regulatory Frameworks", value: "11+" },
    { label: "Workforce Scale Supported", value: "500+" },
  ],
  partnersHeading: "Key Industry Verticals Governed",
}

export const agencyMarquee = [
  "MEGOVISTA HR SOLUTIONS",
  "STATUTORY SOCIAL SECURITY",
  "EPFO & ESIC PRE-15TH PROTOCOL",
  "ZERO PENALTY TRACK RECORD",
  "LABOUR LAW GOVERNANCE",
  "CHENNAI HEADQUARTERS",
  "ISO 9001 & ISO 27001 ADVISORY",
  "POSH WORKPLACE COMPLIANCE",
  "TAMIL NADU & PAN-INDIA",
]

