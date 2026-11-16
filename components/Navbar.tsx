"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SwipeMaskNav } from "./uilora/SwipeMaskNav";
import { ThemeToggle } from "./theme-toggle";
import { NAV_LINKS, ROUTES } from "@/src/constants/routes";
import { companyContact, footerContent } from "@/src/content/megovista";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = NAV_LINKS.map((link) => ({
  name: link.label,
  href: link.href,
}));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Scroll Spy: identify which section is currently in view
      const sectionIds = ["services", "process", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 180;

      // When near top (hero), no section is selected
      if (window.scrollY < 220) {
        setActiveSection("");
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -90; // fixed/sticky navbar height offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSection(href);
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-xs"
          : "bg-[var(--bg-primary)]/75 backdrop-blur-md border-b border-[var(--border-subtle)]/70"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <a
          href={ROUTES.home}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
          }}
          className="flex items-center gap-3.5 group shrink-0 cursor-pointer"
          aria-label="Megovista Home"
        >
          <div className="relative w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center rounded-xl shadow-xs group-hover:scale-105 transition-transform p-1.5">
            <Image
              src="/megovista-emblem.png"
              alt="Megovista Emblem"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-sm sm:text-base font-normal tracking-widest uppercase leading-none font-sans-tight text-[var(--text-main)] block">
              {companyContact.shortName}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-light block mt-1">
              HR & Statutory
            </span>
          </div>
        </a>

        {/* Desktop SwipeMask Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <SwipeMaskNav
            items={navItems}
            activeHref={activeSection}
            onItemClick={handleNavClick}
          />
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3.5 shrink-0">
          <ThemeToggle />

          <a
            href={ROUTES.contact}
            onClick={(e) => handleNavClick(e, ROUTES.contact)}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-normal uppercase tracking-wider bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>{footerContent.consultationButton}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-4 space-y-3 transition-colors">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium"
                      : "text-[var(--text-main)] hover:bg-[var(--secondary)]/15 font-light"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)]">
            <a
              href={ROUTES.contact}
              onClick={(e) => {
                handleNavClick(e, ROUTES.contact);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-normal uppercase tracking-wider bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-95 transition-all text-center"
            >
              <span>{footerContent.consultationButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
export const SwipeMaskNavPreview = Navbar;
