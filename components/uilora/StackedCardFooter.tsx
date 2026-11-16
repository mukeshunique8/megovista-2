"use client";

import React from "react";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { companyContact, footerContent } from "@/src/content/megovista";
import { NAV_LINKS, ROUTES } from "@/src/constants/routes";

// Clean SVGs for Social / Communication channels
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.92 0-1.66.75-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export const StackedCardFooter = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
      <div id="footer" className="scroll-mt-24 bg-[var(--bg-primary)] p-4 sm:p-6 md:p-8 pb-0 transition-colors duration-300">
        <footer className="rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-[var(--bg-surface)] dark:bg-[#0E1326] text-[var(--text-main)] border-t border-x border-[var(--border-subtle)] p-8 sm:p-12 md:p-16 lg:p-20 min-h-[460px] flex flex-col justify-between relative shadow-2xl transition-colors overflow-hidden">
          {/* Subtle Ambient Violet/Blue Radial Underglow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-tl from-[var(--secondary)]/15 via-[var(--primary)]/10 to-transparent blur-3xl opacity-75"
          />

          {/* Top Grid: Brand & Narrative (Left) + Links & Inquiries (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Col 1: Megovista Brand Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <span>{companyContact.shortName} · Chennai HQ</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.03em] leading-[1.1] font-sans-tight text-[var(--text-main)]">
                Precision compliance. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-sky-300 dark:to-violet-400 font-light">
                  Assured scale.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-muted)] font-light max-w-lg leading-relaxed">
                {footerContent.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{companyContact.city}, {companyContact.state}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                  <span>{companyContact.phone}</span>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation & Inquiries (Split in 2 Columns) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:pl-10">
              {/* Menu */}
              <div>
                <h4 className="font-mono text-[11px] font-normal uppercase tracking-widest text-[var(--text-muted)] mb-5">
                  {footerContent.navigationHeading}
                </h4>
                <ul className="space-y-3 text-sm font-light">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[var(--text-muted)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group font-light"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Connect & Social Channels */}
              <div>
                <h4 className="font-mono text-[11px] font-normal uppercase tracking-widest text-[var(--text-muted)] mb-5">
                  {footerContent.inquiriesHeading}
                </h4>
                <ul className="space-y-3.5 text-sm font-light">
                  <li>
                    <a
                      href={companyContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors inline-flex items-center gap-2 group"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="text-[var(--text-muted)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span>Email Advisory</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${companyContact.phoneRaw}`}
                      className="text-[var(--text-muted)] hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <Phone className="w-4 h-4 text-violet-500 group-hover:scale-110 transition-transform" />
                      <span>Direct Call</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={companyContact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <MapPin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                      <span>Google Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Watermark Brand Text, Copyright & Scroll to Top Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-[var(--border-subtle)] pt-8 mt-12 gap-6 relative z-10">
            <div>
              <span className="text-[10vw] font-black uppercase tracking-tighter leading-none text-slate-900/15 dark:text-white/10 select-none pointer-events-none block -mb-4 transition-colors">
                MEGOVISTA
              </span>
              <p className="text-xs text-[var(--text-muted)] font-mono mt-3">
                © {new Date().getFullYear()} {companyContact.name}. {footerContent.allRightsReserved}
              </p>
            </div>

            {/* Scroll to Top Action Button (Royal Blue to Violet Gradient) */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={footerContent.backToTop}
              title={footerContent.backToTop}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer shrink-0"
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </button>
          </div>
        </footer>
      </div>
      );
};

      export default StackedCardFooter;
