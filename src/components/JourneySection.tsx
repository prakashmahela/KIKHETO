import React from "react";
import { motion } from "motion/react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { journeyEvents } from "../data/portfolioData";

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-purple-100/40 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[420px] h-[420px] rounded-full bg-yellow-100/40 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Title Grid */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5F30BD] px-3 py-1 rounded-full bg-purple-500/10 mb-3 inline-block">
            Chronology
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1E0E38] tracking-tight">
            His Strategic Journey
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-amber-400 rounded-full mt-4" />
          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-lg font-sans">
            A vertical retrospective of values, administration, and modern human developmental impacts achieved over different eras.
          </p>
        </div>

        {/* TIMELINE TREE LAYOUT */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#7C3AED]/20 via-[#10B981]/15 to-[#F59E0B]/20 transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {journeyEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={event.id}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node Circle Indicator */}
                  <div className="absolute left-[20px] md:left-1/2 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-[#2A0F54] to-purple-600 shadow-md transform -translate-x-1/2 z-20 mt-1 md:mt-2" />

                  {/* Empty cell for Desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Main Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0 z-10"
                  >
                    <div className="p-6 md:p-8 rounded-[24px] bg-[#FAF9F6] border border-gray-100 shadow-xs hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                      
                      {/* Badge / Year Phrase */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-mono font-bold tracking-wider rounded-lg bg-white shadow-3xs text-purple-950 border border-purple-50/50 mb-4">
                        <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                        {event.phase}
                      </span>

                      {/* Header Title */}
                      <h3 className="font-display font-extrabold text-lg md:text-xl text-[#20103A] tracking-tight">
                        {event.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {/* Split Detaillists */}
                      <div className="mt-5 pt-4 border-t border-gray-100/60 space-y-2">
                        <span className="block text-[10px] font-mono text-purple-500 font-bold uppercase tracking-wider mb-2">
                          Core Milestones
                        </span>
                        {event.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-500 font-medium font-sans">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
