"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type NavItem = { name: string; href: string };
export interface NavProps {
  items: readonly NavItem[] | NavItem[];
  activeHref?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  className?: string;
}

// ============================================================================
// THE "SWIPE MASK" NAV
// Dual theme support (Dark/Light) & Active section state with full color fill
// ============================================================================
export const SwipeMaskNav = ({ items, activeHref, onItemClick, className }: NavProps) => {
  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        "flex items-center gap-1 border border-[var(--border-subtle)] rounded-full overflow-hidden p-1 bg-[var(--bg-surface)] backdrop-blur-md shadow-xs transition-colors",
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => onItemClick?.(e, item.href)}
            className={cn(
              "relative px-4 py-2 group overflow-hidden rounded-full text-[11px] uppercase tracking-widest transition-colors inline-flex items-center justify-center cursor-pointer select-none",
              isActive ? "font-medium text-white shadow-xs" : "font-normal text-[var(--text-main)]"
            )}
          >
            {/* Label text */}
            <span
              className={cn(
                "relative z-10 transition-colors duration-300",
                isActive
                  ? "text-white font-medium"
                  : "text-[var(--text-main)] group-hover:text-white"
              )}
            >
              {item.name}
            </span>

            {/* Swipe mask fill: 130% down when inactive to eliminate underline artifact; fully 0 when active */}
            <span
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 rounded-full pointer-events-none transition-transform duration-300 ease-out",
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[135%] group-hover:translate-y-0"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SwipeMaskNav;
