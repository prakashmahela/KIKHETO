import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, FileText, ArrowRight, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [downloadState, setDownloadState] = useState<"idle" | "compiling" | "ready">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", msg: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleDownload = () => {
    setDownloadState("compiling");
    setTimeout(() => {
      setDownloadState("ready");
      setTimeout(() => setDownloadState("idle"), 4000);
      
      // Programmatically trigger a dummy text file as the profile info download
      const profileInfo = `KIKHETO CHISHI - PORTFOLIO PROFILE\n
Location: Nagaland, India\n
Email: contact@kikhetochishi.com\n
Phone: +91 94360 88888\n
Service: Professional leadership, progressive civic engagement, and community initiatives centered on integrity and transparency.\n
Thank you for downloading the official profile.`;
      
      const blob = new Blob([profileInfo], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Kikheto_Chishi_Profile.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative premium ambient orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] rounded-full bg-violet-300/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[500px] h-[500px] rounded-full bg-rose-300/15 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-violet-400/25 bg-violet-500/5 text-[10px] font-mono font-extrabold uppercase tracking-[0.25em] text-[#7C3AED] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Direct Desk
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
            Let's Build a Meaningful Conversation
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-500 leading-relaxed font-sans max-w-2xl font-medium">
            Reach out for professional opportunities, collaborations, leadership conversations, and portfolio-related enquiries.
          </p>
        </div>

        {/* CONTAINER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT SIDE: THREE LUXURY BRIGHT SHINY 3D SOLID CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              
              {/* EMAIL CARD - Premium Shiny Violet */}
              <motion.div 
                whileHover={{ y: -6, x: -2 }}
                className="group relative overflow-hidden p-6 rounded-[28px] border border-white/20 bg-gradient-to-br from-[#4F46E5] to-[#4338CA] text-white shadow-[6px_6px_0px_0px_#2E2A85] hover:shadow-[10px_10px_0px_0px_#2E2A85] transition-all duration-300 cursor-pointer"
              >
                {/* Diagonal sweep glow sheen */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 flex justify-center items-center text-amber-300 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 stroke-[2.25]" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-200">
                      Primary Channel
                    </span>
                    <a href="mailto:contact@kikhetochishi.com" className="text-sm md:text-base font-extrabold tracking-tight hover:underline transition-all block mt-0.5">
                      contact@kikhetochishi.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* PHONE CARD - Premium Shiny Pink */}
              <motion.div 
                whileHover={{ y: -6, x: -2 }}
                className="group relative overflow-hidden p-6 rounded-[28px] border border-white/20 bg-gradient-to-br from-[#E11D48] to-[#BE185D] text-white shadow-[6px_6px_0px_0px_#700B2B] hover:shadow-[10px_10px_0px_0px_#700B2B] transition-all duration-300 cursor-pointer"
              >
                {/* Diagonal sweep glow sheen */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 flex justify-center items-center text-sky-200 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 stroke-[2.25]" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-rose-200">
                      Mobile Direct
                    </span>
                    <a href="tel:+919436088888" className="text-sm md:text-base font-extrabold tracking-tight hover:underline transition-all block mt-0.5">
                      +91 94360 88888
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* LOCATION CARD - Premium Shiny Emerald */}
              <motion.div 
                whileHover={{ y: -6, x: -2 }}
                className="group relative overflow-hidden p-6 rounded-[28px] border border-white/20 bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-[6px_6px_0px_0px_#024734] hover:shadow-[10px_10px_0px_0px_#024734] transition-all duration-300 cursor-pointer"
              >
                {/* Diagonal sweep glow sheen */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 flex justify-center items-center text-amber-200 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 stroke-[2.25]" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-200">
                      Official Locality
                    </span>
                    <span className="text-sm md:text-base font-extrabold tracking-tight block mt-0.5">
                      Nagaland, India
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* DOWNLOAD EXECUTIVE PROFILE MODULE */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-[32px] shadow-sm relative overflow-hidden group">
              <div className="absolute right-[-10%] top-[-10%] w-[120px] h-[120px] rounded-full bg-violet-100/40 blur-xl pointer-events-none" />
              
              <h4 className="font-display font-bold text-base text-zinc-800 tracking-tight flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#7C3AED]" /> Official Briefing Info
              </h4>
              <p className="text-xs text-zinc-500 font-sans leading-relaxed mb-4">
                Retrieve the compiled summary statement regarding Kikheto Chishi's administrative highlights and community work.
              </p>

              <button 
                onClick={handleDownload}
                disabled={downloadState === "compiling"}
                className="w-full relative overflow-hidden py-3 rounded-2xl font-bold text-xs select-none border border-zinc-200 group-hover:border-zinc-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-zinc-50 hover:bg-zinc-100 text-zinc-700 active:scale-[0.98]"
              >
                {downloadState === "idle" && (
                  <>
                    <span>Download Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                
                {downloadState === "compiling" && (
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-zinc-500 border-t-transparent animate-spin" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 animate-pulse">Compiling Document...</span>
                  </div>
                )}

                {downloadState === "ready" && (
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Download Successful!</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM DIMENSIONAL DESK FORM */}
          <div className="lg:col-span-7 bg-[#111] rounded-[36px] overflow-hidden border border-zinc-800 p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative flex flex-col justify-between">
            {/* Top decorative spotlight gradient inside the dark card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#333] pointer-events-none" />

            <div className="relative z-10 w-full">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-5 mb-6">
                <div>
                  <span className="block font-mono text-[9px] uppercase font-extrabold tracking-[0.25em] text-violet-300">
                    Direct Exchange
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-white mt-0.5">
                    Send Secure Message
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Secure Desk</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME INPUT */}
                <div>
                  <label className="block text-[10px] font-mono uppercase font-black tracking-[0.18em] text-zinc-400 mb-2 pl-1">
                    Name
                  </label>
                  <div className="relative group/input">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#1A1A1A] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:bg-[#202020] transition-all font-sans font-medium hover:border-zinc-700"
                    />
                  </div>
                </div>

                {/* EMAIL INPUT */}
                <div>
                  <label className="block text-[10px] font-mono uppercase font-black tracking-[0.18em] text-zinc-400 mb-2 pl-1">
                    Email
                  </label>
                  <div className="relative group/input">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-[#1A1A1A] border-2 border-zinc-800 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:bg-[#202020] transition-all font-sans font-medium hover:border-zinc-700"
                    />
                  </div>
                </div>

                {/* MESSAGE INPUT */}
                <div>
                  <label className="block text-[10px] font-mono uppercase font-black tracking-[0.18em] text-zinc-400 mb-2 pl-1">
                    Message
                  </label>
                  <div className="relative group/input">
                    <textarea 
                      rows={4}
                      required
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      placeholder="Write your message"
                      className="w-full bg-[#1A1A1A] border-2 border-zinc-800 rounded-xl px-4 py-3.5 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:bg-[#202020] transition-all resize-none font-sans font-medium hover:border-zinc-700"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON - Premium 3D Amber/Orange gradient with hover SHEEN */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden py-4 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-xs md:text-sm font-black tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:shadow-[0_15px_30px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-md select-none group"
                >
                  {/* Sheen sweep */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  {isSubmitting ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <span>Contact Now</span>
                      <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* SUCCESS PANEL POPUP COVER */}
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="absolute inset-0 bg-[#0E0E0E]/98 rounded-[36px] p-8 flex flex-col items-center justify-center text-center z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-5 animate-bounce">
                    <CheckCircle className="w-8 h-8 text-emerald-400 stroke-[2.25]" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-zinc-400 max-w-sm font-sans leading-relaxed">
                    Thank you for reaching out. Kikheto Chishi will review your correspondence and get in touch with you at the earliest possibility.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2 hover:bg-white/5 border border-white/10 text-zinc-400 hover:text-white rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-colors duration-200"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
