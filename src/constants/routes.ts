/**
 * Centralized Application Routes & Section Anchors
 * All navigation links, section references, and routes must be imported from here.
 * Never hardcode anchor tags or URLs in components.
 */

export const ROUTES = {
  home: '#home',
  services: '#services',
  process: '#process',
  about: '#about',
  faq: '#faq',
  contact: '#contact',
} as const

export type RouteKey = keyof typeof ROUTES

export const NAV_LINKS = [
  { label: 'Services', href: ROUTES.services },
  { label: 'Process', href: ROUTES.process },
  { label: 'About', href: ROUTES.about },
  { label: 'FAQ', href: ROUTES.faq },
  { label: 'Contact', href: ROUTES.contact },
] as const

export const MARQUEE_WORDS = [
  'PF & ESI Compliance',
  'Monthly ECR Filing',
  'Full-Cycle Payroll',
  'POSH Training & ICC',
  'ISO 9001 & 27001',
  'CMMI Advisory',
  'GST & Tax Filings',
  'Labour Act Registers',
  'MSME & Udyam',
  'Digital Signature (DSC)',
] as const
