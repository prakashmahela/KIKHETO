import React from "react";
import { motion } from "motion/react";
import { Award, Target, Landmark, Activity } from "lucide-react";
import { statItems } from "../data/portfolioData";

export default function StatsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "years":
        return <Landmark className="w-5 h-5 text-purple-600" />;
      case "projects":
        return <Target className="w-5 h-5 text-rose-600" />;
      case "people":
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case "milestones":
        return <Award className="w-5 h-5 text-[#B09A12]" />;
      default:
        return <Award className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Dynamic light gradient border on section splits */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B09A12] px-3 py-1 rounded-full bg-amber-500/10 mb-3 inline-block">
            Proven Metric Metrics
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1E0E38] tracking-tight">
            Key Achievements & Highlights
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mt-4" />
          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-lg font-sans">
            A numeric encapsulation of dedicated years, developmental touchpoints, and public engagements. All statistics are completely editable placeholder figures.
          </p>
        </div>

        {/* Numeric Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 rounded-[32px] bg-[#FAF9F6] border border-gray-100/60 shadow-xs hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-start"
            >
              {/* Card top icon circle */}
              <div className="p-3.5 rounded-2xl bg-white shadow-sm flex justify-center items-center mb-6">
                {getIcon(stat.id)}
              </div>

              {/* Large styled count readout with customized tracking */}
              <span className="block font-display font-black text-4xl md:text-5xl lg:text-6xl text-[#2F1455] tracking-tight mb-2 selection:bg-purple-200">
                {stat.value}
              </span>

              {/* Label */}
              <span className="block font-display font-extrabold text-sm text-[#20103A] tracking-tight mb-3">
                {stat.label}
              </span>

              {/* Stat Detailed explanation */}
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                {stat.description}
              </p>

              {/* Corner soft accent background circle for premium design depth */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center opacity-40">
                <span className="font-mono text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
