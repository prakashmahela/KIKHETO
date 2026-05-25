import React from "react";
import { motion } from "motion/react";
import { Eye, Shield, Compass, Sparkles } from "lucide-react";
import { aboutData } from "../data/portfolioData";

export default function AboutSection() {
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "vision":
        return <Eye className={`w-5 h-5 ${colorClass}`} />;
      case "values":
        return <Shield className={`w-5 h-5 ${colorClass}`} />;
      case "purpose":
        return <Compass className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="about" className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-emerald-300/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-300/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Header */}
        <div className="flex flex-col items-start text-left mb-16 max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">
            The Philosophy
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#20103A] tracking-tight">
            {aboutData.heading}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4" />
          <p className="mt-4 text-base md:text-lg text-gray-700 font-medium">
            {aboutData.subtitle}
          </p>
        </div>

        {/* Multi-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personality & Purpose Text */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-gray-700 leading-relaxed font-sans">
            <h3 className="font-display font-bold text-xl md:text-2xl text-purple-900 leading-tight">
              A leadership model founded on moral conviction and concrete action.
            </h3>
            
            <p className="text-sm md:text-base text-gray-600">
              {aboutData.bioParagraph1}
            </p>

            <p className="text-sm md:text-base text-gray-600">
              {aboutData.bioParagraph2}
            </p>

            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-white to-purple-50/20 border border-purple-100 shadow-xs flex items-start gap-4">
              <span className="text-2xl mt-0.5">💡</span>
              <div>
                <h4 className="font-display font-semibold text-sm text-purple-950">A Commitment to Transparency</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Kikheto believes that modern administration demands a conversational, transparent bridge with the public, combining data-driven solutions with empathy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 High-End Cards (Vision, Values, Purpose) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {aboutData.cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative p-6 rounded-3xl bg-gradient-to-br ${card.gradient} border border-white/60 shadow-xs hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden`}
              >
                {/* Visual Glass highlights */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-5 z-10">
                  <div className="p-3.5 rounded-2xl bg-white/90 shadow-sm flex justify-center items-center">
                    {getIcon(card.id, card.iconColor)}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-display font-extrabold text-[#20103A] text-lg md:text-xl tracking-tight mb-2 flex items-center gap-2">
                      {card.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
