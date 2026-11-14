import { cn } from "@/lib/utils";
import React from "react";

// --- MOCK DATA ---
export const uiloraExecCategories = ["All Monographs", "Art Direction", "Film & Photography", "Editorial", "Web Experiences"];

export const uiloraExecProjectsMassive = Array.from({ length: 90 }).map((_, i) => {
    const categories = ["Art Direction", "Film & Photography", "Editorial", "Web Experiences"];
    const category = categories[Math.floor(Math.random() * categories.length)];
    // Asymmetric brutalist layout sizes
    const colSpan = Math.random() > 0.85 ? "md:col-span-2" : "col-span-1";

    return {
        id: `EXEC_WK_${i + 1}`,
        title: ["The Silent Shift", "Brutalist Architecture", "Neon Noir", "Vogue Reimagined", "Acme FW24", "Spatial Design", "Helvetica Mvt."][Math.floor(Math.random() * 7)],
        client: ["Chanel", "Nike", "Uilora HQ", "Vercel", "Acme", "A24 Films", "Balenciaga"][Math.floor(Math.random() * 7)],
        category,
        year: `202${Math.floor(Math.random() * 4) + 1}`,
        status: Math.random() > 0.1 ? "Published" : "Concept",
        image: `https://picsum.photos/seed/${i + 2000}/1200/800?grayscale=1`,
        colSpan,
    };
});

export const uiloraExecTeamMassive = Array.from({ length: 30 }).map((_, i) => ({
    id: `DIR_${i + 1}`,
    name: ["Alex Chen", "Sarah Miller", "John Doe", "Eva Wong", "Chris Fox", "Jane Smith", "Sam O'Connor"][Math.floor(Math.random() * 7)],
    role: ["Creative Executive", "Lead Photographer", "Art Director", "Typography Lead", "Producer"][Math.floor(Math.random() * 5)],
    avatar: `https://i.pravatar.cc/150?u=exec_${i}`,
}));

export const uiloraExecClientsMassive = Array.from({ length: 15 }).map((_, i) => ({
    id: `C_${i + 1}`,
    name: ["Chanel", "Nike Global", "Uilora HQ", "Vercel", "Acme Corp", "A24 Films", "Balenciaga", "Apple", "LVMH", "Tesla"][Math.floor(Math.random() * 10)],
    engagements: Math.floor(Math.random() * 8) + 1,
    status: Math.random() > 0.2 ? "Active Partner" : "Legacy Client",
}));

// --- CSS INJECTION (SWISS/BRUTALIST ESTHETIC) ---
export function GlobalStyles() {
    return (
        <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;700;900&display=swap');

    .font-serif-display { font-family: 'Playfair Display', serif; }
    .font-sans-tight { font-family: 'Inter', sans-serif; letter-spacing: -0.02em; }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f5f5f4; }
    ::-webkit-scrollbar-thumb { background: #1c1917; }
    ::-webkit-scrollbar-thumb:hover { background: #dc2626; }
    
    .img-zoom-wrapper {
        overflow: hidden;
    }
    .img-zoom-wrapper img {
        transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        filter: grayscale(100%);
    }
    .exec-card:hover .img-zoom-wrapper img {
        transform: scale(1.05);
        filter: grayscale(0%);
    }
  `}</style>
    );
}

// --- COMPONENTS ---

export function ExecCard({ children, className }: any) {
    return (
        <div className={cn("exec-card group cursor-pointer border-b border-stone-200 pb-8 transition-colors hover:border-black", className)}>
            {children}
        </div>
    );
}

export function ExecButton({ children, active, onClick, className }: any) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-6 py-2 border font-sans-tight text-xs uppercase tracking-widest font-bold transition-all duration-300",
                active ? "bg-black text-white border-black" : "bg-transparent text-stone-500 border-stone-300 hover:border-black hover:text-black",
                className
            )}
        >
            {children}
        </button>
    );
}
