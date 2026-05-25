import React from "react";
import { motion } from "motion/react";
import { valuesList, quoteBlock } from "../data/portfolioData";

export default function ValuesSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Background Globe */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-amber-100/30 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-100/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* VALUES SUBSECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 px-3 py-1 rounded-full bg-purple-500/10 mb-3 inline-block">
            Internal Compass
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1E0E38] tracking-tight">
            Core Values & Convictions
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 rounded-full mt-4" />
          <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-lg font-sans">
            The fundamental pillars that guide Kikheto Chishi's decisions, community workflows, and human-first objectives.
          </p>
        </div>

        {/* 6 Grid Cards for Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-28">
          {valuesList.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-8 rounded-[32px] ${val.color} border border-white/55 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-start items-start`}
            >
              {/* Giant Emoji for a unique vibe */}
              <div className="text-3xl mb-5 select-none">{val.emoji}</div>

              {/* Title */}
              <h4 className="font-display font-black text-xl text-[#2F1455] tracking-tight mb-3">
                {val.title}
              </h4>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ELEGANT CENTRED QUOTE BLOCK SECTION */}
        <div className="relative py-16 px-8 md:px-16 rounded-[40px] bg-[#FAF9F6] border border-gray-100 flex flex-col items-center justify-center text-center max-w-4xl mx-auto overflow-hidden shadow-2xs">
          
          {/* Subtle colorful glowing backlighting behind the quote */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-purple-300/15 via-pink-300/15 to-yellow-300/15 blur-[55px] pointer-events-none" />

          {/* Decorative Giant Quote mark */}
          <span className="absolute top-4 left-8 font-serif text-7xl md:text-8xl text-purple-950/5 select-none font-bold">
            “
          </span>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Quote content */}
            <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-[#2D1B4E] leading-normal max-w-2xl tracking-tight text-center selection:bg-purple-200">
              “{quoteBlock.quote}”
            </h3>

            {/* Author Credit */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <span className="font-mono text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-[#5F30BD]">
                {quoteBlock.author}
              </span>
              <span className="font-sans text-[10px] text-gray-400 font-medium font-normal">
                Personal Guideline
              </span>
            </div>
          </motion.div>

          <span className="absolute bottom-[-10px] right-8 font-serif text-7xl md:text-8xl text-purple-950/5 select-none font-bold">
            ”
          </span>

        </div>

      </div>
    </section>
  );
}
