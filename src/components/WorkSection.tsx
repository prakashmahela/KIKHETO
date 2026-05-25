import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Users, 
  Globe, 
  TrendingUp 
} from "lucide-react";

const DISPLAY_CARDS = [
  {
    id: "leadership",
    title: "Leadership Initiatives",
    description: "Strategic execution rooted in ethical standards, transparency, and practical governance.",
    icon: Sparkles,
    bgClass: "bg-[#F3E8FF] border-[#E9D5FF] text-[#3B117A]",
    iconBgClass: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/15",
    badgeLabel: "CORE.01",
    delay: 0.05
  },
  {
    id: "community",
    title: "Community Projects",
    description: "Skill-building, development support, and awareness efforts that respond to real public needs.",
    icon: Users,
    bgClass: "bg-[#FFE4E6] border-[#FECDD3] text-[#4C0519]",
    iconBgClass: "bg-[#E11D48]/10 text-[#E11D48] border-[#E11D48]/15",
    badgeLabel: "CORE.02",
    delay: 0.12
  },
  {
    id: "engagement",
    title: "Public Engagement",
    description: "Structured conversations and inclusive participation that connect people with progress.",
    icon: Globe,
    bgClass: "bg-[#E0F2FE] border-[#BAE6FD] text-[#0C4A6E]",
    iconBgClass: "bg-[#0284C7]/10 text-[#0284C7] border-[#0284C7]/15",
    badgeLabel: "CORE.03",
    delay: 0.19
  },
  {
    id: "development",
    title: "Development Work",
    description: "Planned initiatives and regional enhancement campaigns with long-term social value.",
    icon: TrendingUp,
    bgClass: "bg-[#ECFDF5] border-[#A7F3D0] text-[#064E3B]",
    iconBgClass: "bg-[#059669]/10 text-[#059669] border-[#059669]/15",
    badgeLabel: "CORE.04",
    delay: 0.26
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Premium ambient glowing backdrops for expensive visual appeal */}
      <div className="absolute top-[12%] left-[-10%] w-[380px] h-[380px] rounded-full bg-purple-200/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[12%] right-[-10%] w-[420px] h-[420px] rounded-full bg-emerald-200/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block alignment matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 max-w-7xl gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2 block">
              The Contribution
            </span>
            <h2 id="work-heading" className="font-display font-black text-4xl md:text-5xl tracking-tight leading-[1] text-left bright-color-flow">
              Core Areas of Work
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-rose-400 rounded-full mt-4" />
          </div>
          <p className="max-w-md text-xs md:text-sm text-gray-500 leading-relaxed font-sans">
            Explore Kikheto's primary service accomplishments, showcasing practical leadership milestones, civic programs, and strategic growth campaigns.
          </p>
        </div>

        {/* 4 Premium Cards Grid with Clean Spacing and Exquisite Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {DISPLAY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between p-8 rounded-[32px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] min-h-[310px] ${card.bgClass}`}
              >
                {/* Micro-interaction highlight glow inside the card */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Beautiful Circular Icon Badge & Mono Indicator */}
                <div className="flex items-center justify-between pointer-events-none">
                  <div className={`p-3.5 rounded-full border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-xs ${card.iconBgClass}`}>
                    <Icon className="h-5 w-5 stroke-[2.25]" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase opacity-55">
                    {card.badgeLabel}
                  </span>
                </div>

                {/* Bottom Section: Premium Typography with Perfect Alignment */}
                <div className="mt-8 pointer-events-none">
                  <h3 className="font-display text-[21px] font-extrabold tracking-tight leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.65] opacity-80 font-sans font-medium">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
