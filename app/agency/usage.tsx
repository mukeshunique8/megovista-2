"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Search,
    Copyright,
    Grid3X3,
    Users,
    Briefcase
} from "lucide-react";
import { GlobalStyles, ExecCard, ExecButton, uiloraExecCategories, uiloraExecProjectsMassive, uiloraExecTeamMassive, uiloraExecClientsMassive } from "./component";
import { cn } from "@/lib/utils";
// --- MAIN LAYOUT ---

export default function UiloraExecutiveStudio() {
    const [activeTab, setActiveTab] = useState("Selected Works");
    const [activeFilter, setActiveFilter] = useState("All Monographs");

    const filteredProjects = activeFilter === "All Monographs"
        ? uiloraExecProjectsMassive
        : uiloraExecProjectsMassive.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-stone-100 text-stone-900 font-sans-tight selection:bg-black selection:text-white">
            <GlobalStyles />

            {/* MINIMALIST HEADER */}
            <header className="fixed top-0 left-0 w-full z-50 bg-stone-100/90 backdrop-blur-md border-b border-stone-300 transition-colors hover:bg-stone-100">
                <div className="flex justify-between items-center h-20 px-6 md:px-12">
                    <div className="flex justify-between items-center w-full max-w-[2000px] mx-auto">

                        {/* Branding */}
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-serif-display text-2xl group-hover:bg-red-600 transition-colors">
                                E
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tighter uppercase leading-none">Uilora Exec.</h1>
                                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mt-1">Creative Division</span>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex gap-1">
                            {['Selected Works', 'Directors', 'Manifesto'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => setActiveTab(item)}
                                    className={cn(
                                        "px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all relative",
                                        activeTab === item ? "text-black" : "text-stone-500 hover:text-black"
                                    )}
                                >
                                    {item}
                                    {activeTab === item && (
                                        <motion.div layoutId="underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-black" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <button className="text-stone-400 hover:text-black transition-colors"><Search className="w-5 h-5 stroke-[2.5px]" /></button>
                            <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-stone-300 px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-all">
                                Commission Us <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* MARQUEE */}
            <div className="w-full overflow-hidden bg-black text-white py-3 mt-20 border-t border-b border-stone-800 flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex shrink-0 gap-16 text-[10px] font-mono uppercase tracking-[0.3em] font-bold"
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="flex items-center gap-16"><Copyright className="w-3 h-3" /> UILORA EXECUTIVE AGENCY. NEW YORK. PARIS. TOKYO. <span className="text-red-500">+++</span> DIGITAL EXCELLENCE. BRUTALIST AESTHETICS.</span>
                    ))}
                </motion.div>
            </div>

            {/* MAIN CONTENT AREA */}
            <main className="max-w-[2000px] mx-auto px-6 md:px-12 pt-24 pb-32 min-h-screen">

                <AnimatePresence mode="wait">

                    {/* SELECTED WORKS TAB */}
                    {activeTab === 'Selected Works' && (
                        <motion.div
                            key="works"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Giant Headline */}
                            <div className="mb-20 max-w-5xl">
                                <h2 className="font-serif-display text-5xl md:text-8xl italic font-black text-black leading-none mb-8 tracking-tighter">
                                    Visual Culture <br />
                                    <span className="not-italic block tracking-tight">Engineered.</span>
                                </h2>
                                <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                                    An uncompromising approach to digital craftsmanship. Powered by Uilora.
                                </p>
                            </div>

                            {/* Filters */}
                            <div className="flex flex-wrap gap-2 mb-16 border-b border-stone-300 pb-6">
                                {uiloraExecCategories.map(cat => (
                                    <ExecButton
                                        key={cat}
                                        active={activeFilter === cat}
                                        onClick={() => setActiveFilter(cat)}
                                    >
                                        {cat}
                                    </ExecButton>
                                ))}
                            </div>

                            {/* Brutalist Asymmetric Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                {filteredProjects.map((proj, idx) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: idx > 6 ? 0.1 : idx * 0.05 }}
                                        key={proj.id}
                                        className={proj.colSpan}
                                    >
                                        <ExecCard>
                                            <div className="img-zoom-wrapper w-full h-[500px] md:h-[700px] mb-6 bg-stone-200">
                                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex justify-between items-start pt-2">
                                                <div>
                                                    <h3 className="font-serif-display text-3xl md:text-5xl font-black italic tracking-tighter group-hover:text-red-600 transition-colors mb-2">
                                                        {proj.title}
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                                                        <span>Client: <span className="text-black">{proj.client}</span></span>
                                                        <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                                        <span>{proj.category}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-bold uppercase tracking-widest border border-stone-300 px-2 py-1 bg-stone-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                                                        {proj.year}
                                                    </span>
                                                </div>
                                            </div>
                                        </ExecCard>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredProjects.length > 0 && (
                                <div className="mt-20 text-center border-t border-stone-300 pt-16">
                                    <button className="text-4xl md:text-7xl font-serif-display font-black italic hover:text-red-600 transition-colors tracking-tighter flex items-center justify-center gap-4 mx-auto group">
                                        View Archive <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* DIRECTORS TAB */}
                    {activeTab === 'Directors' && (
                        <motion.div
                            key="directors"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="mb-20 max-w-5xl">
                                <h2 className="font-serif-display text-5xl md:text-8xl italic font-black text-black leading-none mb-8 tracking-tighter">
                                    The <br />
                                    <span className="not-italic block tracking-tight">Directoriate.</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {uiloraExecTeamMassive.map((mem) => (
                                    <div key={mem.id} className="group cursor-pointer">
                                        <div className="w-full aspect-square mb-6 bg-stone-200 overflow-hidden relative">
                                            <img src={mem.avatar} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={mem.name} />
                                            <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-sans-tight tracking-tight mb-2 uppercase group-hover:text-red-600 transition-colors">{mem.name}</h3>
                                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-stone-500 border-t border-stone-300 pt-4">
                                            <span>{mem.role}</span>
                                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all group-hover:text-red-600 text-black" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* MANIFESTO TAB (CLIENTS & INFO) */}
                    {activeTab === 'Manifesto' && (
                        <motion.div
                            key="manifesto"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                                <div>
                                    <h2 className="font-serif-display text-5xl md:text-7xl font-black italic tracking-tighter mb-12">
                                        Our <br /><span className="not-italic">Philosophy.</span>
                                    </h2>
                                    <article className="prose prose-stone lg:prose-xl font-serif-display max-w-none prose-p:font-medium prose-p:leading-relaxed text-stone-700">
                                        <p>Form strictly follows function, but function does not preclude beauty. We design interfaces and visual systems that refuse to compromise. <strong>Uilora Executive</strong> is built for the top 1% of digital ambition.</p>
                                        <p>We believe in subtraction. Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. Our brutalist approach guarantees unparalleled clarity and impact.</p>
                                    </article>
                                    <div className="mt-16">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-8 border-b border-stone-300 pb-4">Selected Partners</h3>
                                        <ul className="space-y-4">
                                            {uiloraExecClientsMassive.map((client) => (
                                                <li key={client.id} className="flex justify-between items-end border-b border-stone-200 pb-4 hover:border-black transition-colors group cursor-crosshair">
                                                    <span className="text-2xl font-black uppercase tracking-tight group-hover:text-red-600 transition-colors">{client.name}</span>
                                                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">{client.status} / {client.engagements}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-stone-200 p-12 flex items-center justify-center">
                                    <h2 className="text-[12rem] font-serif-display font-black text-white hover:text-red-600 transition-colors cursor-crosshair">E.</h2>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

            </main>
        </div>
    );
}