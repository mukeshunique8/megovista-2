/**
 * Centralized Application Routes & Section Anchors
 * All navigation links, section references, and routes must be imported from here.
 * Never hardcode anchor tags or URLs in components.
 */

export const ROUTES = {
  home: '#home',
  story: '#story',
  offer: '#offer',
  blueprint: '#blueprint',
  people: '#people',
  faq: '#faq',
  contact: '#contact',
} as const

export type RouteKey = keyof typeof ROUTES

export const NAV_LINKS = [
  { label: 'Story', href: ROUTES.story },
  { label: 'Solutions', href: ROUTES.offer },
  { label: 'Blueprint', href: ROUTES.blueprint },
  { label: 'People', href: ROUTES.people },
  { label: 'FAQ', href: ROUTES.faq },
] as const

export const MARQUEE_WORDS = [
  'PF & ESI',
  'GST filing',
  'Payroll',
  'POSH',
  'ISO 9001',
  'ISMS 27001',
  'CMMI',
  'MSME / Udyam',
  'DSC',
  'Labour Acts',
] as const

