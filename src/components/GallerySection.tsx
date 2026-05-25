import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Image as ImageIcon, Sparkles, Compass } from "lucide-react";
import { galleryItems } from "../data/portfolioData";

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[30%] left-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-200/20 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-pink-200/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 max-w-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B0176D] px-3 py-1 rounded-full bg-pink-500/10 mb-3 inline-block">
            Milestone Moments
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#20103A] tracking-tight">
            Gallery & Moments
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-indigo-400 rounded-full mt-4" />
          <p className="mt-4 text-xs md:text-sm text-gray-500 leading-relaxed font-sans">
            A curated visual chronicle of Kikheto Chishi’s actions in public forums, diplomatic meets, development checks, and citizen engagements. Click any card to expand the visual block.
          </p>
        </div>

        {/* Premium Grid Layout - Utilizing varying aspect ratios for editorial feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-[28px] overflow-hidden bg-white border border-white/60 shadow-xs hover:shadow-xl cursor-pointer transition-all duration-500 ${item.aspect}`}
            >
              
              {/* Outer Elegant Gradient Card mimicking actual image placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center p-8 transition-transform duration-[1200ms] group-hover:scale-105`}>
                
                {/* Embedded dynamic geometric glass art inside empty space */}
                <div className="relative w-full h-full border border-white/30 rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden bg-white/10 backdrop-blur-xs select-none">
                  
                  {/* Glowing background shapes to look expensive */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 blur-xl pointer-events-none" />
                  
                  {/* Central icon symbolizing photography */}
                  <ImageIcon className="w-8 h-8 text-[#20103A]/30 mb-2 group-hover:scale-110 group-hover:text-purple-950/40 transition-all" />
                  
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#20103A]/50 font-bold block mb-1">
                    Placeholder Asset
                  </span>

                  <span className="font-sans text-[10px] text-[#20103A]/40 text-center max-w-xs">
                    Representing official photo log of {item.title.toLowerCase()}
                  </span>

                </div>

              </div>

              {/* Bottom Transparent Card Label */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-xs flex items-center justify-between z-10 transition-all duration-300 group-hover:bg-white/85">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-purple-600 font-bold">
                    {item.category}
                  </span>
                  <span className="block font-display font-extrabold text-sm text-[#20103A] tracking-wider mt-0.5">
                    {item.title}
                  </span>
                </div>
                
                {/* Maximize Icon */}
                <span className="p-2 rounded-full bg-white text-purple-950 shadow-2xs scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX / ZOOM POPUP MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#140026]/90 backdrop-blur-md flex items-center justify-center z-50 p-6"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/15 text-white hover:bg-white/25 border border-white/20 active:scale-95 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div 
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl rounded-3xl overflow-hidden bg-white/95 border border-white/30 shadow-2xl p-6 md:p-8 flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Elegant Preview Representation */}
                <div className={`w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${selectedItem.gradient} flex items-center justify-center border border-black/5`}>
                  <div className="w-11/12 h-[85%] border border-white/30 rounded-xl bg-white/10 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center select-none">
                    <ImageIcon className="w-10 h-10 text-[#20103A]/25 mb-3" />
                    <span className="font-display font-extrabold text-sm text-[#20103A]/70 uppercase tracking-wide">
                      {selectedItem.title} Visual Document
                    </span>
                    <p className="text-xs text-gray-500 mt-2 max-w-xs font-sans">
                      This is an interactive gallery placeholder box for moments captured on community engagement campaigns. Users can substitute clean local photo media files later.
                    </p>
                  </div>
                </div>

                {/* Subtext info inside lightbox */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="block font-mono text-xs text-purple-600 font-bold uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[#20103A] tracking-tight mt-1">
                      {selectedItem.title} Box Log
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#059669]">
                      Verified Era
                    </span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 leading-relaxed font-sans border-t border-gray-100 pt-4">
                  Full photography logs from field visits, professional exchange gatherings, summit workshops and public addresses. Photos depict high-end structural growth, strategic alignments, and community outreach coordinates.
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
