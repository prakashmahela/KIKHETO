import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUp,
  Award,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Compass,
  FileText,
  Globe2,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import { PhotoGallery } from "./components/ui/gallery";
import SubpageOverlay from "./components/SubpageOverlay";
const kikhetoPortrait = "https://i.ibb.co/67MBf40x/Livine-APC-Kikheto-Copy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const topHighlights = [
  {
    icon: Users2,
    title: "Public Collaboration",
    text: "A clear bridge between people, teams, institutions, and the communities that need responsible leadership.",
    bgGradient: "from-violet-500/10 to-indigo-500/10",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-600",
  },
  {
    icon: Briefcase,
    title: "Focused Work Tracking",
    text: "Every initiative is presented with structure, clarity, and a premium professional portfolio flow.",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Measured Impact",
    text: "Milestones, service work, values, and achievements are displayed in a clean result-first layout.",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-500/20",
    iconColor: "text-rose-600",
  },
];

interface FeatureCard {
  title: string;
  text: string;
  className: string;
  image?: boolean;
  dark?: boolean;
  isThreeD?: boolean;
  icon?: any;
  iconBg?: string;
  shadowClass?: string;
  headingClass?: string;
  textClass?: string;
  portrait?: boolean;
  imageSrc?: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Built-In Public Service",
    text: "A portfolio story shaped around service, responsibility, and meaningful leadership action.",
    className: "col-span-2 lg:col-span-8 min-h-[160px] sm:min-h-[250px] bg-photo-card text-white",
    image: true,
    dark: true,
    imageSrc: "https://i.ibb.co/ybpYS6g/hq720.jpg",
  },
  {
    title: "Clear Role Definition",
    text: "A simple, accountable presentation of vision, values, responsibilities, and professional purpose.",
    className: "col-span-1 lg:col-span-4 min-h-[160px] sm:min-h-[250px] bg-[#7C3AED] text-white border-[#8B5CF6] hover:bg-[#6D28D9]",
    isThreeD: true,
    icon: Compass,
    iconBg: "bg-white/10 text-amber-350 border-white/20",
    shadowClass: "shadow-[4px_4px_0px_0px_#4C1D95] sm:shadow-[6px_6px_0px_0px_#4C1D95] hover:shadow-[8px_8px_0px_0px_#4C1D95] hover:-translate-y-1 hover:-translate-x-0.5 border border-white/20",
    headingClass: "text-white",
    textClass: "text-purple-100",
  },
  {
    title: "Real-Time Leadership",
    text: "Field presence, team coordination, and people-first decision-making brought into one visual system.",
    className: "col-span-1 lg:col-span-4 min-h-[160px] sm:min-h-[240px] bg-[#db2777] text-white border-[#f472b6] hover:bg-[#be185d]",
    isThreeD: true,
    icon: Sparkles,
    iconBg: "bg-white/10 text-yellow-350 border-white/20",
    shadowClass: "shadow-[4px_4px_0px_0px_#831843] sm:shadow-[6px_6px_0px_0px_#831843] hover:shadow-[8px_8px_0px_0px_#831843] hover:-translate-y-1 hover:-translate-x-0.5 border border-white/20",
    headingClass: "text-white",
    textClass: "text-pink-100",
  },
  {
    title: "Progress Tracking",
    text: "Work, journey, achievements, and values are arranged like a modern dashboard with premium spacing.",
    className: "col-span-2 lg:col-span-8 min-h-[160px] sm:min-h-[240px] bg-photo-card text-white",
    image: true,
    dark: true,
    imageSrc: "https://i.ibb.co/XZ4NMwkw/APC-Kikheto-Sema-and-other-officials-visits-Organic-Air-Condition-Market.jpg",
  },
];

const impactStats = [
  {
    value: "10+",
    label: "Years of Journey",
    text: "Hands-on leadership, service exposure, and professional growth.",
    icon: CalendarDays,
    bgClass: "bg-gradient-to-br from-[#120B2E] via-[#24134C] to-[#3B1982] text-white border-violet-500/40 shadow-[0_25px_60px_-15px_rgba(59,25,130,0.55)]",
    shapeClass: "rounded-[64px_20px_64px_20px]",
    valueColor: "text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-200 font-display text-[64px] font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] tracking-[-0.05em]",
    labelColor: "text-white font-extrabold",
    textColor: "text-indigo-200/90",
    iconBgClass: "bg-white/10 text-amber-300 border-white/20",
    badgeLabel: "TEMPO",
    glowColor: "bg-indigo-500/30",
  },
  {
    value: "25+",
    label: "Projects & Campaigns",
    text: "Development initiatives, civic support, public engagement, and civic duties.",
    icon: FileText,
    bgClass: "bg-gradient-to-br from-[#021F18] via-[#043E31] to-[#0A5C49] text-white border-emerald-500/40 shadow-[0_25px_60px_-15px_rgba(10,92,73,0.55)]",
    shapeClass: "rounded-[90px_90px_24px_24px]",
    valueColor: "text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-200 font-display text-[64px] font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] tracking-[-0.05em]",
    labelColor: "text-white font-extrabold",
    textColor: "text-emerald-200/90",
    iconBgClass: "bg-white/10 text-emerald-300 border-white/20",
    badgeLabel: "SCOPE",
    glowColor: "bg-emerald-500/30",
  },
  {
    value: "1K+",
    label: "People Reached",
    text: "Meaningful direct touchpoints across programs, campaigns, and active public service.",
    icon: Users2,
    bgClass: "bg-gradient-to-br from-[#2D050B] via-[#5C0A18] to-[#910C22] text-white border-rose-500/40 shadow-[0_25px_60px_-15px_rgba(145,12,34,0.55)]",
    shapeClass: "rounded-[20px_64px_20px_64px]",
    valueColor: "text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-200 font-display text-[64px] font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] tracking-[-0.05em]",
    labelColor: "text-white font-extrabold",
    textColor: "text-rose-200/90",
    iconBgClass: "bg-white/10 text-rose-300 border-white/20",
    badgeLabel: "IMPACT",
    glowColor: "bg-rose-500/30",
  },
];

const journeySteps = [
  {
    phase: "Foundation",
    title: "Values & Roots",
    text: "Built on cultural grounding, discipline, education, and a strong sense of public responsibility.",
  },
  {
    phase: "Growth",
    title: "Preparation & Mentorship",
    text: "Learned through professional exposure, dialogue, research, and collaborative development work.",
  },
  {
    phase: "Service",
    title: "Public Work & Action",
    text: "Focused on community-first initiatives, accountable execution, and visible real-world outcomes.",
  },
  {
    phase: "Vision",
    title: "Modern Leadership",
    text: "A present-day vision for transparent, people-focused, sustainable progress for Nagaland and beyond.",
  },
];

const workItems = [
  {
    icon: Sparkles,
    title: "Leadership Initiatives",
    text: "Strategic execution rooted in ethical standards, transparency, and practical governance.",
    tone: "bg-gradient-to-br from-[#6366F1] to-[#4F46E5]",
    borderColor: "border-indigo-400/40",
    iconColor: "text-white",
    textColor: "text-white",
    subtitleColor: "text-indigo-100/90",
    indexColor: "text-indigo-200/40",
    iconBox: "bg-white/15 border border-white/20",
  },
  {
    icon: HeartHandshake,
    title: "Community Projects",
    text: "Skill-building, development support, and awareness efforts that respond to real public needs.",
    tone: "bg-gradient-to-br from-[#F43F5E] to-[#E11D48]",
    borderColor: "border-rose-400/40",
    iconColor: "text-white",
    textColor: "text-white",
    subtitleColor: "text-rose-100/90",
    indexColor: "text-rose-200/40",
    iconBox: "bg-white/15 border border-white/20",
  },
  {
    icon: Globe2,
    title: "Public Engagement",
    text: "Structured conversations and inclusive participation that connect people with progress.",
    tone: "bg-gradient-to-br from-[#0EA5E9] to-[#0284C7]",
    borderColor: "border-sky-400/40",
    iconColor: "text-white",
    textColor: "text-white",
    subtitleColor: "text-sky-100/90",
    indexColor: "text-sky-200/40",
    iconBox: "bg-white/15 border border-white/20",
  },
  {
    icon: Compass,
    title: "Development Work",
    text: "Planned initiatives and regional enhancement campaigns with long-term social value.",
    tone: "bg-gradient-to-br from-[#10B981] to-[#059669]",
    borderColor: "border-emerald-400/40",
    iconColor: "text-white",
    textColor: "text-white",
    subtitleColor: "text-emerald-100/90",
    indexColor: "text-emerald-200/40",
    iconBox: "bg-white/15 border border-white/20",
  },
];

const valueCards = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Transparent conduct, honest action, and trust that is built through consistency.",
    letter: "I",
    metalTheme: "Platinum Edition",
    ambientGlow: "group-hover:shadow-[0_40px_80px_-15px_rgba(100,116,139,0.18)]",
    cardBg: "bg-gradient-to-b from-[#FAF8F5] to-[#EFECE6] border-[#D1CABF]/55",
    cornerColor: "border-slate-400/40 group-hover:border-slate-500",
    badgeBg: "bg-slate-100/90 border-slate-200 text-slate-700",
    innerDashed: "border-slate-400/15",
    accentTab: "from-slate-400 via-slate-200 to-slate-400",
    iconContainer: "bg-[#1E293B] text-white shadow-[0_8px_20px_rgba(30,41,59,0.2)]",
    letterColor: "text-slate-400/[0.04]",
  },
  {
    icon: CheckCircle2,
    title: "Discipline",
    text: "A commitment to order, consistency, and high standards across every responsibility.",
    letter: "D",
    metalTheme: "Gold Edition",
    ambientGlow: "group-hover:shadow-[0_40px_80px_-15px_rgba(217,119,6,0.18)]",
    cardBg: "bg-gradient-to-b from-[#FDFBF7] to-[#F1E8D5] border-[#DED4C0]/55",
    cornerColor: "border-amber-400/50 group-hover:border-amber-600",
    badgeBg: "bg-amber-50/90 border-amber-200 text-amber-800",
    innerDashed: "border-amber-500/10",
    accentTab: "from-amber-500 via-amber-200 to-amber-500",
    iconContainer: "bg-[#78350F] text-white shadow-[0_8px_20px_rgba(120,53,15,0.2)]",
    letterColor: "text-amber-500/[0.04]",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    text: "Putting collective welfare first and making leadership meaningful through action.",
    letter: "S",
    metalTheme: "Bronze Edition",
    ambientGlow: "group-hover:shadow-[0_40px_80px_-15px_rgba(225,29,72,0.18)]",
    cardBg: "bg-gradient-to-b from-[#FDFBFB] to-[#F3E2E2] border-[#DED0D0]/55",
    cornerColor: "border-rose-400/50 group-hover:border-rose-600",
    badgeBg: "bg-rose-50/90 border-rose-200 text-rose-800",
    innerDashed: "border-rose-500/10",
    accentTab: "from-rose-500 via-rose-200 to-rose-500",
    iconContainer: "bg-[#881337] text-white shadow-[0_8px_20px_rgba(136,19,55,0.2)]",
    letterColor: "text-rose-500/[0.04]",
  },
];

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [selectedSubpage, setSelectedSubpage] = useState<{
    category: "topHighlights" | "featureCards" | "impactStats" | "journeySteps" | "workItems" | "valueCards";
    index: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 640);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#15120F] antialiased selection:bg-[#15120F] selection:text-[#FAF9F6] font-sans">
      {/* HERO SECTION IS KEPT EXACTLY AS YOUR FILE HAD IT */}
      <HeroSection />

      <main className="relative z-10 overflow-hidden bg-[#FAF9F6]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(185,173,152,0.20),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(93,111,84,0.13),transparent_28%)]" />

        {/* REFERENCE-LIKE INTRO STRIP */}
        <section id="about" className="relative px-5 pt-20 pb-16 md:px-10 lg:pt-24">
          <div className="mx-auto max-w-[1120px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-kicker">About The Portfolio</span>
              <p className="reference-subtitle mt-4 text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed max-w-xl opacity-90">
                A clean personal portfolio that presents Kikheto Chishi’s journey, values, public work, and professional impact in a calm, expensive, reference-style layout.
              </p>
            </motion.div>

            <div className="mt-8 md:mt-14 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-10">
              {topHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    onClick={() => setSelectedSubpage({ category: "topHighlights", index })}
                    className={`text-center cursor-pointer group hover:-translate-y-1 transition-all duration-300 ${index === 2 ? "col-span-2 md:col-span-1 max-w-[280px] sm:max-w-[400px] mx-auto md:max-w-none" : ""}`}
                  >
                    <div className={`mx-auto mb-3 sm:mb-5 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} ${item.iconColor} shadow-[0_8px_16px_rgba(0,0,0,0.04)] sm:shadow-[0_12px_24px_rgba(0,0,0,0.06)] backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.25]" />
                    </div>
                    <h3 className="font-display text-[14px] sm:text-[18px] font-bold tracking-[-0.03em] text-[#15120F] group-hover:text-amber-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-1 sm:mt-2 max-w-[255px] text-[10px] sm:text-[12px] leading-[1.6] sm:leading-[1.75] text-[#6F685F] group-hover:text-amber-950 transition-colors duration-300">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* COPY-PASTE REFERENCE FEATURE GRID FEEL */}
        <section id="work" className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-kicker">Portfolio System</span>
              <h2 className="reference-heading mt-4">
                Everything His Story Needs to
                <br className="hidden sm:block" /> Work Smarter
              </h2>
              <p className="reference-subtitle mt-5">
                From leadership story to public initiatives, all sections are built to feel connected, organized, and premium — together.
              </p>
            </motion.div>

            <div className="mt-8 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12">
              {featureCards.map((card, index) => {
                const IconComponent = card.isThreeD ? card.icon : null;
                return (
                  <motion.article
                    key={card.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.07 }}
                    onClick={() => setSelectedSubpage({ category: "featureCards", index })}
                    className={`feature-card relative overflow-hidden rounded-[16px] sm:rounded-[22px] p-4 sm:p-7 md:p-8 cursor-pointer group/card hover:scale-[1.015] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-300 ${card.isThreeD ? `${card.className} ${card.shadowClass} transform-gpu` : card.className}`}
                  >
                    {card.image && (
                      <>
                        <img
                          src={card.imageSrc || kikhetoPortrait}
                          alt="Kikheto Chishi leadership moment"
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.16))]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      </>
                    )}

                    {card.portrait && (
                      <img
                        src={kikhetoPortrait}
                        alt="Kikheto Chishi"
                        className="absolute bottom-0 right-3 h-[92%] max-h-[200px] sm:max-h-[275px] w-auto object-contain drop-shadow-[0_22px_36px_rgba(0,0,0,0.23)] md:right-10"
                      />
                    )}

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      {card.isThreeD && IconComponent && (
                        <div className="flex justify-between items-start mb-3 sm:mb-6">
                          <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border ${card.iconBg} flex items-center justify-center shadow-inner`}>
                            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.25]" />
                          </div>
                          <span className="text-[7px] sm:text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/50 bg-white/5 px-2 py-0.5 sm:py-1 rounded">
                            3D Core
                          </span>
                        </div>
                      )}
                      
                      {!card.isThreeD && <div className="h-3 sm:h-6" />}

                      <div className={`max-w-[370px] ${card.portrait ? "pr-14 sm:pr-28 md:pr-40" : ""}`}>
                        <h3 className={`font-display text-[14px] sm:text-[22px] font-bold tracking-[-0.04em] ${card.isThreeD ? card.headingClass : (card.dark ? "text-white" : "")}`}>
                          {card.title}
                        </h3>
                        <p className={`mt-1 sm:mt-2 text-[10px] sm:text-[12px] leading-snug sm:leading-[1.7] ${card.isThreeD ? card.textClass : (card.dark || card.portrait ? "text-white/76" : "text-[#6F685F]")}`}>
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section id="achievements" className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-kicker">Measured Highlights</span>
              <h2 className="reference-heading mt-4">Proven Results, Real Impact</h2>
              <p className="reference-subtitle mt-5">
                A focused view of the numbers and milestones that make the story feel trustworthy, grounded, and complete.
              </p>
            </motion.div>

            <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`relative group ${index === 2 ? "col-span-2 md:col-span-1 max-w-[280px] sm:max-w-[400px] w-full mx-auto md:max-w-none md:w-auto" : ""}`}>
                    {/* Atmospheric outer glow matching each card's color theme */}
                    <div className={`absolute -inset-1.5 ${stat.shapeClass} ${stat.glowColor} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ease-out`} />

                    <motion.article
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{
                        y: -12,
                        scale: 1.04,
                        rotate: index === 0 ? -1.5 : index === 2 ? 1.5 : 0.5,
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      onClick={() => setSelectedSubpage({ category: "impactStats", index })}
                      className={`relative overflow-hidden p-4 sm:p-9 min-h-[220px] sm:min-h-[320px] border border-white/10 transition-shadow duration-500 flex flex-col justify-between ${stat.shapeClass} ${stat.bgClass} cursor-pointer`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Inner High-End Glass reflection diagonal glaze */}
                      <div className="absolute inset-0 w-[250%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out pointer-events-none" />

                      {/* Top Specular luxury glare highlights */}
                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none" />

                      {/* Faint oversized premium background serial indicator */}
                      <span 
                        className="absolute bottom-2 right-4 sm:bottom-4 sm:right-8 text-[60px] sm:text-[110px] font-black leading-none text-white/[0.04] select-none pointer-events-none font-display"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        0{index + 1}
                      </span>
                      
                      <div className="relative z-10 flex h-full flex-col justify-between gap-4 sm:gap-14" style={{ transformStyle: "preserve-3d" }}>
                        <div className="flex items-center justify-between" style={{ transform: "translateZ(20px)" }}>
                          <div className={`flex h-9 w-9 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-[18px] border transition-transform duration-500 group-hover:scale-110 shadow-inner ${stat.iconBgClass}`}>
                            <Icon className="h-4 w-4 sm:h-5.5 sm:w-5.5 stroke-[2.25]" />
                          </div>
                          <span className="text-[8px] sm:text-[10px] font-mono font-extrabold tracking-[0.22em] uppercase opacity-95 border border-white/20 bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                            {stat.badgeLabel}
                          </span>
                        </div>

                        <div style={{ transform: "translateZ(30px)" }}>
                          <div className={`font-display leading-none tracking-[-0.06em] ${stat.valueColor.replace("text-[64px]", "text-[38px] sm:text-[64px]")}`}>
                            {stat.value}
                          </div>
                          <h3 className={`mt-2 sm:mt-4 font-display text-[15px] sm:text-[20px] font-black tracking-tight ${stat.labelColor}`}>
                            {stat.label}
                          </h3>
                          <p className={`mt-1 sm:mt-2.5 text-[10px] sm:text-[12.5px] leading-snug sm:leading-[1.65] ${stat.textColor} font-sans font-medium opacity-90`}>
                            {stat.text}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px] rounded-[30px] bg-[#0E0C0A] border border-white/5 p-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.6)] md:p-10 lg:p-12 relative overflow-hidden">
            {/* Ambient luxury background light */}
            <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[220px] h-[220px] rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center relative z-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-[10px] font-mono font-extrabold uppercase tracking-[0.22em] text-amber-200 mb-4 shadow-sm">
                  Journey Roadmap
                </span>
                <h2 className="mt-4 font-display text-[34px] font-black leading-[1.05] tracking-tight md:text-[48px] bg-gradient-to-r from-amber-100 via-yellow-250 to-orange-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.25)]">
                  A Clear Path of Growth & Service
                </h2>
                <p className="mt-5 max-w-sm text-[13px] leading-[1.8] text-stone-300 font-sans">
                  The journey is organized like a premium roadmap — simple to scan, perfectly readable, and stunningly balanced on all screens.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {journeySteps.map((step, index) => (
                  <motion.article
                    key={step.phase}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    onClick={() => setSelectedSubpage({ category: "journeySteps", index })}
                    className="group relative overflow-hidden rounded-[16px] sm:rounded-[24px] border border-white/10 bg-white/[0.04] p-3 sm:p-6 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    {/* Interactive Real Glass Sheen diagonal sweep */}
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <div className="mb-2.5 sm:mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-amber-500/15 border border-amber-400/20 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-200 shadow-inner">
                        {step.phase}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-white/40">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-[14px] sm:text-[19px] font-extrabold tracking-tight text-white mb-1 sm:mb-2 group-hover:text-amber-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-[12px] leading-snug sm:leading-[1.65] text-stone-300 font-medium group-hover:text-stone-100 transition-colors duration-300">
                      {step.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL STORIES GALLERY (21st Dev) */}
        <section id="stories" className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            <PhotoGallery />
          </div>
        </section>

        {/* WORK / SERVICES CARDS */}
        <section className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <span className="section-kicker">Work Done</span>
                <h2 className="reference-heading mt-4 text-left">Core Areas of Work</h2>
              </motion.div>
              <p className="max-w-sm text-[13px] leading-[1.8] text-[#6F685F]">
                Each card follows the reference style: soft solid color, rounded layout, clean spacing, and no messy alignment.
              </p>
            </div>

            {(() => {
              const getPosition = (index: number) => {
                let diff = index - activeWorkIndex;
                if (diff === 3) diff = -1;
                if (diff === -3) diff = 1;
                if (diff === 2) {
                  return {
                    translateX: 0,
                    translateZ: -120,
                    rotateY: 0,
                    scale: 0.8,
                    opacity: 0,
                    zIndex: 10,
                    pointerEvents: "none" as const,
                  };
                }
                if (diff === -2) {
                  return {
                    translateX: 0,
                    translateZ: -120,
                    rotateY: 0,
                    scale: 0.8,
                    opacity: 0,
                    zIndex: 10,
                    pointerEvents: "none" as const,
                  };
                }
                if (diff === 0) {
                  return {
                    translateX: 0,
                    translateZ: 80,
                    rotateY: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 30,
                    pointerEvents: "auto" as const,
                  };
                }
                if (diff === 1 || diff === -3) {
                  return {
                    translateX: "x-pos-right",
                    translateZ: 0,
                    rotateY: -22,
                    scale: 0.88,
                    opacity: 0.85,
                    zIndex: 20,
                    pointerEvents: "auto" as const,
                  };
                }
                if (diff === -1 || diff === 3) {
                  return {
                    translateX: "x-pos-left",
                    translateZ: 0,
                    rotateY: 22,
                    scale: 0.88,
                    opacity: 0.85,
                    zIndex: 20,
                    pointerEvents: "auto" as const,
                  };
                }
                return {
                  translateX: 0,
                  translateZ: -150,
                  rotateY: 0,
                  scale: 0.7,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: "none" as const,
                };
              };

              return (
                <div className="flex flex-col items-center">
                  {/* Active Heading matching Artfy style */}
                  <div className="text-center mb-10 h-20 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeWorkIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-[#15120F]">
                          {workItems[activeWorkIndex].title}
                        </h3>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#A28F75] mt-2">
                          Kikheto Chishi • Milestone 0{activeWorkIndex + 1}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 3D CAROUSEL CONTAINER */}
                  <div 
                    className="relative flex items-center justify-center w-full select-none"
                    style={{ 
                      height: isMobile ? "280px" : "410px", 
                      perspective: "1200px" 
                    }}
                  >
                    {workItems.map((item, index) => {
                      const Icon = item.icon;
                      const pos = getPosition(index);
                      
                      // Determine dynamic translate value
                      let tx = 0;
                      if (pos.translateX === "x-pos-left") {
                        tx = isMobile ? -65 : windowWidth < 1024 ? -190 : -260;
                      } else if (pos.translateX === "x-pos-right") {
                        tx = isMobile ? 65 : windowWidth < 1024 ? 190 : 260;
                      }

                      return (
                        <motion.div
                          key={item.title}
                          animate={{
                            x: tx,
                            z: pos.translateZ,
                            rotateY: pos.rotateY,
                            scale: pos.scale,
                            opacity: pos.opacity,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 26,
                          }}
                          onClick={() => {
                            if (activeWorkIndex === index) {
                              setSelectedSubpage({ category: "workItems", index });
                            } else {
                              setActiveWorkIndex(index);
                            }
                          }}
                          className={`absolute cursor-pointer rounded-[24px] sm:rounded-[32px] ${item.tone} border ${item.borderColor} shadow-[0_15px_35px_-8px_rgba(0,0,0,0.22)] sm:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_-10px_rgba(0,0,0,0.45)] transition-shadow duration-500 flex flex-col items-center justify-center p-4 sm:p-8 select-none ${activeWorkIndex === index ? "ring-2 ring-amber-500/20" : ""}`}
                          style={{
                            transformStyle: "preserve-3d",
                            width: isMobile ? "180px" : "300px",
                            height: isMobile ? "260px" : "400px",
                            zIndex: pos.zIndex,
                            pointerEvents: pos.pointerEvents as any,
                            backfaceVisibility: "hidden",
                          }}
                        >
                          {/* Premium Specular Diagonal Glare Reflection Line */}
                          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] bg-gradient-to-tr from-white/0 via-white/10 to-white/20 opacity-40 pointer-events-none" />
                          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-white/10 to-transparent opacity-60 pointer-events-none" />
                          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                          {/* 3D FLOATING CONTENT: Stacked, beautifully centered in the middle of the card */}
                          <div className="flex flex-col items-center justify-center text-center h-full w-full pointer-events-none">
                            
                            {/* Floating Index Pill - Layer 1 (Depth: 25px) */}
                            <span 
                              className={`font-mono text-[7px] sm:text-[9px] font-extrabold tracking-[0.25em] uppercase px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border ${item.borderColor} ${item.indexColor} bg-white/10 mb-3 sm:mb-6 shadow-inner`}
                              style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
                            >
                              Milestone 0{index + 1}
                            </span>

                            {/* Floating Icon Box - Layer 2 (Depth: 55px) */}
                            <div 
                              className={`flex h-10 w-10 sm:h-15 sm:w-15 items-center justify-center rounded-xl sm:rounded-[22px] ${item.iconBox} shadow-lg backdrop-blur-[4px] mb-3 sm:mb-6 transition-transform duration-500`}
                              style={{ transform: "translateZ(55px)", transformStyle: "preserve-3d" }}
                            >
                              <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6 stroke-[2.25]" />
                            </div>

                            {/* Floating Metadata Cluster - Layer 3 (Depth: 40px) */}
                            <div 
                              className="space-y-1 sm:space-y-3"
                              style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
                            >
                              <h4 className={`font-display text-[14px] sm:text-[20px] md:text-[22px] font-black leading-tight tracking-tight ${item.textColor} select-none`}>
                                {item.title}
                              </h4>
                              <p className={`text-[9.5px] sm:text-[12px] md:text-[13px] leading-snug sm:leading-[1.65] ${item.subtitleColor} font-sans font-medium select-none max-w-[150px] sm:max-w-[210px] mx-auto opacity-95`}>
                                {item.text}
                              </p>
                            </div>

                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* SLIDER NAVIGATION BUTTONS (Exactly like Artfy template) */}
                  <div className="flex items-center gap-4 mt-8">
                    {/* Left button */}
                    <button
                      onClick={() => setActiveWorkIndex((prev) => (prev - 1 + 4) % 4)}
                      className="w-12 h-12 rounded-full border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-500 hover:text-zinc-700 transition-all duration-300 shadow-sm active:scale-[0.95]"
                    >
                      <span className="text-[17px] font-bold">←</span>
                    </button>
                    
                    {/* Right button */}
                    <button
                      onClick={() => setActiveWorkIndex((prev) => (prev + 1) % 4)}
                      className="w-12 h-12 rounded-full bg-[#EF6A21] hover:bg-[#EA5912] flex items-center justify-center text-white transition-all duration-300 shadow-[0_4px_14px_rgba(239,106,33,0.35)] active:scale-[0.95]"
                    >
                      <span className="text-[17px] font-bold">→</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* VALUES */}
        <section className="relative px-5 py-16 md:px-10 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-kicker">Core Values</span>
              <h2 className="reference-heading mt-4">A System of Character</h2>
              <p className="reference-subtitle mt-5">
                Premium, clean, and readable value cards that support the portfolio without making the page feel heavy.
              </p>
            </motion.div>

            <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-4 sm:gap-7 md:grid-cols-3">
              {valueCards.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className={`relative group ${index === 2 ? "col-span-2 md:col-span-1 max-w-[280px] sm:max-w-[400px] w-full mx-auto md:max-w-none md:w-auto" : ""}`}>
                    {/* Atmospheric soft colored backlight glow */}
                    <div className={`absolute -inset-1 rounded-[24px_16px_24px_16px] sm:rounded-[40px_16px_40px_16px] ${value.ambientGlow} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 pointer-events-none`} />

                    <motion.article
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotate: index === 0 ? -1 : index === 2 ? 1 : -0.5,
                      }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 18,
                      }}
                      onClick={() => setSelectedSubpage({ category: "valueCards", index })}
                      className={`relative overflow-hidden p-4 sm:p-8 min-h-[220px] sm:min-h-[320px] rounded-[24px_16px_24px_16px] sm:rounded-[40px_16px_40px_16px] border ${value.cardBg} transition-all duration-500 flex flex-col justify-between cursor-pointer`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Real Metallic Highlight top glaze line */}
                      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${value.accentTab} opacity-80`} />

                      {/* Thin Inner Dotted Luxury Certificate Border Pinstripe */}
                      <div className={`absolute inset-2 border border-dashed ${value.innerDashed} rounded-[20px_12px_20px_12px] sm:rounded-[34px_12px_34px_12px] pointer-events-none transition-all duration-500 group-hover:inset-1.5 sm:inset-3 sm:group-hover:inset-2.5`} />

                      {/* Exquisite Corner Metal Bracket Ornaments */}
                      <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t border-l ${value.cornerColor} transition-colors duration-500`} />
                      <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-t border-r ${value.cornerColor} transition-colors duration-500`} />
                      <div className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b border-l ${value.cornerColor} transition-colors duration-500`} />
                      <div className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-b border-r ${value.cornerColor} transition-colors duration-500`} />

                      {/* Premium Shimmer Diagonal sweep glare */}
                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Classic Serif Monogram in background */}
                      <span 
                        className={`absolute right-3 top-6 sm:right-6 sm:top-10 font-serif text-[60px] sm:text-[110px] font-black leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 ${value.letterColor}`}
                        style={{ transform: "translateZ(10px)" }}
                      >
                        {value.letter}
                      </span>

                      {/* Card Header Section: Icon & Category badge */}
                      <div className="flex items-start justify-between relative z-10" style={{ transform: "translateZ(25px)" }}>
                        <div className={`flex h-9 w-9 sm:h-13 sm:w-13 items-center justify-center rounded-xl sm:rounded-2xl ${value.iconContainer} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6 stroke-[2]" />
                        </div>
                        <span className={`text-[7px] sm:text-[9px] font-mono font-bold uppercase tracking-[0.18em] border border-stone-200 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full ${value.badgeBg} shadow-xs`}>
                          {value.metalTheme}
                        </span>
                      </div>

                      {/* Card Content Section */}
                      <div className="relative z-10 mt-5 sm:mt-10" style={{ transform: "translateZ(30px)" }}>
                        <h3 className="font-display text-[15px] sm:text-[22px] font-extrabold tracking-tight text-[#15120F]">
                          {value.title}
                        </h3>
                        <p className="mt-1 sm:mt-3 text-[10px] sm:text-[12.5px] leading-snug sm:leading-[1.7] text-[#5E574E] font-medium font-sans">
                          {value.text}
                        </p>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-5 rounded-[26px] bg-[#16301A] border border-emerald-950/20 p-8 text-white md:p-10 shadow-[0_30px_60px_-15px_rgba(22,48,26,0.35)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <p className="max-w-3xl font-display text-[30px] font-bold leading-[1.08] tracking-[-0.06em] md:text-[42px] text-emerald-50">
                  “True leadership is built through service, consistency, and the courage to keep moving forward.”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-[#FAF9F6] ring-2 ring-emerald-500/20">
                    <img src={kikhetoPortrait} alt="Kikheto Chishi" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white">Kikheto Chishi</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/60">Nagaland, India</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative px-3 sm:px-5 pb-24 pt-16 md:px-10 lg:pb-28 lg:pt-20">
          <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-[24px] sm:rounded-[40px] bg-gradient-to-br from-[#120526] via-[#1B0D38] to-[#0A0314] p-5 sm:p-8 md:p-12 lg:p-14 border border-violet-500/10 shadow-[0_50px_100px_-25px_rgba(0,0,0,0.65)]">
            
            {/* Elegant high-end background light leaks */}
            <div className="absolute right-[-20%] top-[-20%] h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute left-[-20%] bottom-[-20%] h-80 w-80 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

            {/* Glowing active decorative lines */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full justify-center"
              >
                <span className="section-kicker !bg-violet-950/40 !border-violet-500/20 !text-violet-300">
                  Contact
                </span>
                <h2 className="font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-stone-100 to-indigo-200 text-2xl sm:text-3xl md:text-5xl lg:text-5xl leading-[1.1] mt-4">
                  Let’s Build a Meaningful Conversation
                </h2>
                <p className="mt-4 max-w-md text-[11.5px] sm:text-[13.5px] leading-relaxed sm:leading-[1.8] text-violet-200/70 font-medium">
                  Reach out for professional opportunities, collaborations, leadership conversations, and portfolio-related enquiries.
                </p>

                <div className="mt-7 space-y-3.5 sm:space-y-4">
                  {/* Email row with premium styling */}
                  <a 
                    href="mailto:contact@kikhetochishi.com" 
                    className="flex items-center gap-2.5 sm:gap-4 w-full max-w-xs sm:w-fit sm:min-w-[280px] rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 px-3.5 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold text-white transition-all duration-300 hover:translate-x-1.5 sm:hover:translate-x-2 hover:bg-white/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.12)] group overflow-hidden"
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-rose-500/20 text-rose-300 border border-rose-400/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-rose-500/30 shadow-md">
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.25]" />
                    </div>
                    <span className="font-mono text-stone-200 group-hover:text-white transition-colors duration-300 truncate">contact@kikhetochishi.com</span>
                  </a>

                  {/* Phone row with premium styling */}
                  <a 
                    href="tel:+919436088888" 
                    className="flex items-center gap-2.5 sm:gap-4 w-full max-w-xs sm:w-fit sm:min-w-[280px] rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 px-3.5 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold text-white transition-all duration-300 hover:translate-x-1.5 sm:hover:translate-x-2 hover:bg-white/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.12)] group overflow-hidden"
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/30 shadow-md">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.25]" />
                    </div>
                    <span className="font-mono text-stone-200 group-hover:text-white transition-colors duration-300 truncate">+91 94360 88888</span>
                  </a>

                  {/* Location physical card */}
                  <div 
                    className="flex items-center gap-2.5 sm:gap-4 w-full max-w-xs sm:w-fit sm:min-w-[280px] rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 px-3.5 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold text-white transition-all duration-300 hover:translate-x-1.5 sm:hover:translate-x-2 hover:bg-white/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.12)] group overflow-hidden"
                  >
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/30 shadow-md">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.25]" />
                    </div>
                    <span className="font-mono text-stone-200 group-hover:text-white truncate">Nagaland, India</span>
                  </div>
                </div>
              </motion.div>

              <motion.form
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E5] to-[#EDE1CD] border border-[#D5C6AC]/90 p-6 md:p-8 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.45)] overflow-hidden"
                onSubmit={(event) => event.preventDefault()}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Internal dashed license boarder layout signature */}
                <div className="absolute inset-2 md:inset-3 border border-dashed border-[#BBA588]/25 rounded-[26px] pointer-events-none" />

                {/* Glare sheen across the certificate-gold canvas */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 opacity-40 pointer-events-none" />

                <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                  <div className="mb-6 text-center">
                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-[#80705B]">
                      Secure Inquiry Portal
                    </span>
                  </div>

                  <div>
                    <label className="font-mono text-[9px] font-extrabold tracking-[0.2em] uppercase text-[#73644F] mb-1.5 block" htmlFor="name">Name</label>
                    <input 
                      id="name" 
                      className="w-full rounded-2xl border border-[#D0BFAC]/80 bg-white/60 backdrop-blur-[2px] px-5 py-3.5 text-sm text-[#1A1612] placeholder-[#80705B]/40 outline-none transition-all duration-300 focus:border-[#EF6A21] focus:bg-white focus:shadow-[0_0_0_4px_rgba(239,106,33,0.12)]" 
                      placeholder="Enter your name" 
                    />
                  </div>

                  <div className="mt-4">
                    <label className="font-mono text-[9px] font-extrabold tracking-[0.2em] uppercase text-[#73644F] mb-1.5 block" htmlFor="email">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full rounded-2xl border border-[#D0BFAC]/80 bg-white/60 backdrop-blur-[2px] px-5 py-3.5 text-sm text-[#1A1612] placeholder-[#80705B]/40 outline-none transition-all duration-300 focus:border-[#EF6A21] focus:bg-white focus:shadow-[0_0_0_4px_rgba(239,106,33,0.12)]" 
                      placeholder="Enter your email" 
                    />
                  </div>

                  <div className="mt-4">
                    <label className="font-mono text-[9px] font-extrabold tracking-[0.2em] uppercase text-[#73644F] mb-1.5 block" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      className="w-full rounded-2xl border border-[#D0BFAC]/80 bg-white/60 backdrop-blur-[2px] px-5 py-3.5 text-sm text-[#1A1612] placeholder-[#80705B]/40 outline-none min-h-[120px] resize-none transition-all duration-300 focus:border-[#EF6A21] focus:bg-white focus:shadow-[0_0_0_4px_rgba(239,106,33,0.12)]" 
                      placeholder="Write your message" 
                    />
                  </div>

                  <button className="relative mt-6 w-full overflow-hidden rounded-full bg-[#15120F] px-6 py-4.5 text-[11px] font-black uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2B251F] active:scale-[0.98] shadow-[0_15px_35px_rgba(21,18,15,0.3)]">
                    {/* Interior Shimmer effect on hover */}
                    <div className="absolute inset-0 w-[180%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    Contact Now
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-[#110424] px-6 py-12 text-white/80">
        <div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <div className="font-display text-[15px] font-black tracking-[0.12em] text-white">KIKHETO CHISHI</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/38">Leadership • Journey • Work • Impact</div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2.5">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] text-white/55">
              <Award className="h-4 w-4 text-amber-400 animate-pulse" />
              Premium Portfolio Website
            </div>
            <div className="text-[9px] font-mono tracking-[0.22em] uppercase text-white/35">
              Developed by <span className="text-amber-300 font-bold">Niti Technologies</span>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-purple-800 to-indigo-800 p-4 text-white shadow-[0_16px_40px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(124,58,237,0.45)]"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <AnimatePresence>
        {selectedSubpage && (
          <SubpageOverlay
            category={selectedSubpage.category}
            index={selectedSubpage.index}
            onClose={() => setSelectedSubpage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
