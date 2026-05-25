import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { heroData } from "../data/portfolioData";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const forestBg = "/src/assets/images/dark_forest_banner_1779691251016.png";

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden font-sans">
      {/* Background Dark Forest Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={forestBg} 
          alt="Dark Forest Background" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant dark vignette overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
      </div>

      {/* Absolute Decorative Blobs outside the hero card to look premium */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-[10%] right-[3%] w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[150px] pointer-events-none z-1" />
      <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] rounded-full bg-yellow-500/5 blur-[100px] pointer-events-none z-1" />

      {/* Main Large Hero Container Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl rounded-[32px] overflow-hidden bg-[#FAF9F6] border border-white/40 shadow-2xl flex flex-col min-h-[90vh] z-10"
      >
        {/* Colorful Soft Gradient Background inside the Hero Card (Vertical Pastel Lighting Stripes) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.93] mix-blend-multiply flex">
          <div className="flex-1 h-full bg-gradient-to-b from-[#FFFCEE] via-[#F2EDFE] to-white/10" />
          <div className="flex-1 h-full bg-gradient-to-b from-[#FFE3ED]/40 via-[#F3E8FF]/60 to-white/10" />
          <div className="flex-1 h-full bg-gradient-to-b from-[#E6F8F0]/50 via-[#EAF0FC]/40 to-white/10" />
          <div className="flex-1 h-full bg-gradient-to-b from-[#FFFCE3]/40 via-[#FFE1EC]/30 to-white/10" />
          <div className="flex-1 h-full bg-gradient-to-b from-[#E8FAF4]/40 via-[#EEF5FC]/50 to-white/10" />
        </div>

        {/* Soft radial overlay for dreamy mood */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200/25 via-transparent to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#FFECEE]/20 via-transparent to-transparent" />

        {/* TOP NAVIGATION INSIDE HERO CARD */}
        <header className="relative w-full z-30 px-6 py-5 md:px-10 flex items-center justify-between border-b border-black/[0.03]">
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl tracking-tight text-[#2D1B4E] relative">
              KIKHETO CHISHI
              <span className="absolute -bottom-1 left-0 w-2/3 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/50 shadow-sm">
            {heroData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-2 text-xs lg:text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  activeTab === link.name 
                    ? "text-purple-950 font-semibold" 
                    : "text-gray-600 hover:text-purple-900"
                }`}
              >
                {activeTab === link.name && (
                  <motion.div 
                    layoutId="activeHeroNav"
                    className="absolute inset-0 bg-white/80 shadow-xs border border-purple-100 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right action button */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#210D3D] to-[#3B1E63] text-white font-medium text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-purple-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-purple-950/10"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/70 backdrop-blur-md text-[#2D1B4E] border border-white/40 hover:bg-white/90 shadow-xs active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden relative bg-[#FAF9F6]/95 backdrop-blur-lg border-b border-black/[0.05] z-20 px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                {heroData.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      activeTab === link.name 
                        ? "bg-[#2D1B4E] text-white" 
                        : "text-gray-600 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-55" />
                  </a>
                ))}
                <div className="pt-3 border-t border-black/[0.05]">
                  <a 
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-[#210D3D] to-[#3B1E63] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-purple-950/20 hover:opacity-90 active:scale-[0.98] transition-all"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO CONTENT SECTION */}
        <div id="home" className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-6 py-10 md:px-12 lg:px-16 overflow-hidden">
          
          {/* LEFT SIDE: Big Bold Headline and Core Bio */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 mb-4 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#5F30BD]">
                Leader & Humanitarian
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-black text-3xl sm:text-4.5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] sm:leading-[0.95] bright-color-flow text-center lg:text-left"
            >
              {heroData.name}
            </motion.h1>

            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-3 font-display font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-700 tracking-wide text-center lg:text-left"
            >
              {heroData.subheadline}
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-lg leading-relaxed font-sans font-normal text-center lg:text-left"
            >
              {heroData.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <a
                href="#about"
                className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#210D3D] via-[#35175B] to-[#452077] text-white font-semibold text-xs sm:text-sm tracking-wide text-center hover:shadow-xl hover:shadow-purple-950/30 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 group border border-white/15 w-full sm:w-auto"
              >
                {heroData.primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#journey"
                className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-white text-gray-700 font-semibold text-xs sm:text-sm tracking-wide text-center hover:bg-gray-50 border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              >
                {heroData.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Large Portrait Card and Floating Slider Bars */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full z-10 pt-4 lg:pt-0">
            
            {/* Colorful Glow Background Sphere behind the portrait */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[350px] md:w-[420px] h-[220px] sm:h-[350px] md:h-[420px] rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-[#FCEEC5] opacity-55 blur-[40px] sm:blur-[55px] pointer-events-none animate-slow-spin-reverse" />

            {/* Float-animated Portrait Nest */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-[210px] sm:w-[300px] md:w-[350px] aspect-[3/4] rounded-[24px] sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-float z-10 select-none bg-gradient-to-br from-[#ECE8FF] to-[#FAF9F6]"
            >
              {/* Glassmorphism gradient border cover */}
              <div className="absolute inset-0 border border-white/60 rounded-3xl pointer-events-none z-20" />
              
              {/* Actual Professional Portrait Generator */}
              <img 
                src={heroData.imageSrc} 
                alt="Kikheto Chishi Professional Portrait" 
                className="w-full h-full object-cover object-center grayscale-[12%] hover:grayscale-0 hover:scale-105 transition-all duration-[1.2s] ease-out pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Minimal soft shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F073A]/45 via-transparent to-transparent z-15 pointer-events-none" />
              
              {/* Small Label bottom right of portrait */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/75 backdrop-blur-md px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/40 shadow-md flex items-center justify-between z-20">
                <div>
                  <span className="block font-display font-extrabold text-[10px] sm:text-xs text-[#2D1B4E]">Kikheto Chishi</span>
                  <span className="block font-mono text-[7px] sm:text-[9px] text-gray-500 font-semibold uppercase tracking-wide">Nagaland, India</span>
                </div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shadow-xs animate-ping" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
