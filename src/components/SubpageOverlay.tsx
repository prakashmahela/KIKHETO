import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Landmark, FileText, Award } from "lucide-react";
import { subpagesData, SubpageDetail } from "../data/subpagesData";

interface SubpageOverlayProps {
  category: "topHighlights" | "featureCards" | "impactStats" | "journeySteps" | "workItems" | "valueCards";
  index: number;
  onClose: () => void;
}

export default function SubpageOverlay({ category, index, onClose }: SubpageOverlayProps) {
  // Safe extraction of the detail object
  const detailsList = subpagesData[category] || [];
  const details: SubpageDetail | undefined = detailsList[index];

  // Lock body scroll while the overlay subpage is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!details) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 35 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="fixed inset-0 z-[100] h-screen w-full overflow-y-auto bg-[#FCFAF7] text-[#1D160E] outline-none"
    >
      {/* Decorative Elegant Soft Gradient Glow in the top right element corner */}
      <div className="pointer-events-none absolute top-0 right-0 w-[420px] h-[400px] bg-gradient-to-br from-amber-200/10 via-stone-100/10 to-transparent blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[350px] bg-[#EAE2D5]/20 blur-[90px]" />

      <div className="mx-auto max-w-4xl px-6 py-10 md:px-12 md:py-16">
        
        {/* TOP LEFT BACK BUTTON: Standardised, premium, and clean, with transition */}
        <div className="mb-10 flex justify-start">
          <button
            onClick={onClose}
            className="group flex items-center gap-3.5 rounded-full border border-[#D5CFC1] bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1D160E] shadow-xs cursor-pointer transition-all duration-300 hover:border-[#1D160E]/70 hover:bg-[#FAF6F0] hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.25] transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
        </div>

        {/* SUBPAGE HERO HEADER SECTION */}
        <header className="relative mb-12">
          {/* Category kicker */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DFD9CE] bg-[#FAF5EE] px-3.5 py-1 text-[9.5px] font-mono font-bold tracking-[0.25em] uppercase text-[#736856]">
            <Landmark className="h-3 w-3 text-amber-700" />
            {details.categoryLabel}
          </span>

          {/* Majestic display title */}
          <h1 className="mt-5 font-display text-3xl font-black leading-[1.12] tracking-tight text-[#1D160E] sm:text-4xl md:text-5.5xl">
            {details.title}
          </h1>

          {/* Minimalist divider line */}
          <div className="mt-8 h-1 w-20 rounded-full bg-[#EF6A21]" />
        </header>

        {/* DETAILED NARRATIVE LAYOUT CONTAINER */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.42fr]">
          
          {/* LEFT PANEL: Rich prose paragraphs */}
          <section className="space-y-7 text-[14.5px] leading-[1.8] text-[#4A4235] font-medium font-sans">
            {details.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-0">
                {p}
              </p>
            ))}
          </section>

          {/* RIGHT PANEL: Metadata, Administrative Creed, Quote Block */}
          <aside className="space-y-8">
            
            {/* Elegant Callout Quote Block */}
            <blockquote className="relative rounded-[28px] border-l-4 border-amber-500 bg-[#FAF6F0] p-6 shadow-xs">
              <span className="absolute -top-4 -left-1 text-5xl font-serif text-amber-500/15 pointer-events-none">“</span>
              <p className="relative z-10 font-serif text-[12.5px] leading-[1.7] italic text-[#595040]">
                {details.quote}
              </p>
              <cite className="mt-4 block font-mono text-[9px] font-extrabold uppercase tracking-[0.16em] text-stone-500 not-italic">
                — Administrative Creed
              </cite>
            </blockquote>

            {/* Structured Administrative Ledger Card */}
            <div className="rounded-[28px] border border-[#EBE5DB] bg-[#FFFDFC] p-6 shadow-xs">
              <div className="mb-4 flex items-center gap-2.5">
                <FileText className="h-4.5 w-4.5 text-stone-600" />
                <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-[#1D160E]">
                  Service Ledger
                </h4>
              </div>
              
              <div className="space-y-4 border-t border-[#ECE6DB] pt-4 text-[11px] font-mono font-bold uppercase text-[#736A5B]">
                <div className="flex justify-between">
                  <span>Context:</span>
                  <span className="text-[#1D160E]">Public Service</span>
                </div>
                <div className="flex justify-between border-t border-[#F5F0E6] pt-3">
                  <span>Scope:</span>
                  <span className="text-[#1D160E]">Nagaland Support</span>
                </div>
                <div className="flex justify-between border-t border-[#F5F0E6] pt-3">
                  <span>Standard:</span>
                  <span className="text-[#1D160E]">Rigorous Audit</span>
                </div>
              </div>
            </div>

          </aside>
        </div>

        {/* BOTTOM METRICS SECTION: Key Contributions & Objectives */}
        <section className="mt-14 border-t border-[#DFD9CE] pt-12">
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-5.5 w-5.5 text-amber-600" />
            <h3 className="font-display text-[15px] font-extrabold uppercase tracking-[0.18em] text-[#1D160E]">
              Key Accomplishments & Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {details.bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-[22px] border border-[#EFECE6] bg-[#FFFDFC] p-6 shadow-xs transition-colors duration-300 hover:border-amber-200"
              >
                <div className="mb-2 font-mono text-xs font-bold uppercase text-amber-700">
                  Step 0{idx + 1}
                </div>
                <h4 className="font-display text-[13px] font-black text-[#1D160E] tracking-tight">
                  {point.title}
                </h4>
                <p className="mt-2 text-[12px] leading-[1.65] text-[#6E6454] font-medium font-sans">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DISTRACTION-FREE BOTTOM SIGN-OFF */}
        <footer className="mt-16 border-t border-[#ECE6DB] pt-8 text-center">
          <p className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#807663] select-none">
            Kikheto Chishi • Dedicated Administrative Portfolio
          </p>
        </footer>

      </div>
    </motion.div>
  );
}
