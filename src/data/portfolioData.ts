import { 
  Award, 
  Briefcase, 
  Compass, 
  FileText, 
  Flame, 
  Globe, 
  GraduationCap, 
  Heart, 
  Lightbulb, 
  Mail, 
  MapPin, 
  Phone, 
  Shield, 
  Sparkles, 
  TrendingUp, 
  Users 
} from "lucide-react";

export interface TimelineEvent {
  id: string;
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface WorkCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string; // Tailwind class background
  textColor: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  gradient: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

export const heroData = {
  name: "Kikheto Chishi",
  subheadline: "Leadership. Journey. Work. Impact.",
  description: "A personal portfolio showcasing the journey, values, work, achievements, and professional story of Kikheto Chishi.",
  primaryCta: "Explore Portfolio",
  secondaryCta: "View Journey",
  imageSrc: "https://i.ibb.co/67MBf40x/Livine-APC-Kikheto-Copy.jpg",
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Stories", href: "#stories" },
    { name: "Work Done", href: "#work" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]
};

export const aboutData = {
  heading: "About Kikheto Chishi",
  subtitle: "Dedicated to purposeful service and impactful modern leadership.",
  bioParagraph1: "Kikheto Chishi is a prominent leader and professional who stands for progressive transformation, structural integrity, and sustainable growth. Grounded in Nagaland, India, his philosophy is rooted in action-oriented leadership that bridges traditional values with modern aspirations to foster resilient communities.",
  bioParagraph2: "Throughout his career, Kikheto has focused on initiatives that prioritize transparency, social responsibility, and continuous improvement. He is passionate about mentoring the next generation, driving local development, and fostering collaborations across multiple sectors to achieve measurable results.",
  cards: [
    {
      id: "vision",
      title: "Vision",
      description: "To cultivate a system of governance and community structures built on integrity, equity, and forward-thinking principles, enabling every individual to realize their highest potential.",
      gradient: "from-[#F0EAFF] to-[#E9DEFF]",
      iconColor: "text-[#704CF4]"
    },
    {
      id: "values",
      title: "Values",
      description: "Grounded in deep accountability, transparency, mutual respect, and dedicated public welfare. Believes that sustainable growth is impossible without strong moral and structural integrity.",
      gradient: "from-[#FFFCE6] to-[#FFF9CC]",
      iconColor: "text-[#B09A12]"
    },
    {
      id: "purpose",
      title: "Purpose",
      description: "To serve as a reliable conduit for constructive development and social progress, ensuring that leadership manifests in practical, positive outcomes for the community.",
      gradient: "from-[#E6F8F0] to-[#CCF2E1]",
      iconColor: "text-[#1B9B62]"
    }
  ]
};

export const journeyEvents: TimelineEvent[] = [
  {
    id: "foundation",
    phase: "Early Foundation",
    title: "Values & Academic Roots",
    description: "Built a solid academic foundation combined with local cultural heritage, shaping early leadership traits centered around public welfare and community development.",
    details: ["Academic distinctions in leadership", "Active participation in local community dialogue", "Deepening understanding of cultural legacy and stewardship"]
  },
  {
    id: "learning",
    phase: "Learning & Growth",
    title: "Professional Preparation & Mentorship",
    description: "Ventured into administrative and strategic realms, gathering essential insights through professional assignments, collaborative think-tanks, and mentorship program participation.",
    details: ["Collaborative research on regional socioeconomic growth", "Acquisition of specializations in public policy/strategy", "Active cross-industry leadership training"]
  },
  {
    id: "professional",
    phase: "Professional Path",
    title: "Strategic Impact & Leadership Launch",
    description: "Assumed pivotal operational and advisory roles. Led teams to implement modernization initiatives, proving that values-based leadership works in demanding corporate and social environments.",
    details: ["Engineered process optimization with high transparency", "Spearheaded public-private partnership campaigns", "Fostered team excellence and accountability frameworks"]
  },
  {
    id: "public",
    phase: "Public Work & Service",
    title: "Broadening Communal Stewardship",
    description: "Dedicated immense effort to civic engagements, community building, and state-wide development programs involving diverse societal stakeholders and governance bodies.",
    details: ["Coordinated key rural and urban integration campaigns", "Mobilized resources for local civic enhancement programs", "Created dialogue platforms to address long-term community concerns"]
  },
  {
    id: "present",
    phase: "Present Vision",
    title: "Transformative Vision & Innovation",
    description: "Currently steering high-end leadership initiatives designed to empower local talent, integrate sustainable standards, and provide consistent, authentic representation for Nagaland and beyond.",
    details: ["Active advisory roles for community-driven enterprise development", "Mentorship programs for aspiring young service leaders", "Policy research advocating forward-thinking regional growth"]
  }
];

export const workCards: WorkCard[] = [
  {
    id: "leadership",
    title: "Leadership Initiatives",
    description: "Driving organizational excellence, policy reforms, and strategic execution centered on ethical standards, public transparency, and robust governance models.",
    iconName: "Sparkles",
    accentColor: "bg-[#F3E8FF] hover:shadow-[#D8B4FE]/30",
    textColor: "text-[#7C3AED]"
  },
  {
    id: "community",
    title: "Community Projects",
    description: "Empovering local regions with basic infrastructure additions, skill-building opportunities, and health and hygiene awareness campaigns directly in communities.",
    iconName: "Users",
    accentColor: "bg-[#FFE4E6] hover:shadow-[#FECDD3]/30",
    textColor: "text-[#E11D48]"
  },
  {
    id: "engagement",
    title: "Public Engagement",
    description: "Fostering inclusive cross-generational communication and conducting structured seminars to encourage citizen participation in administrative workflows.",
    iconName: "Globe",
    accentColor: "bg-[#ECFDF5] hover:shadow-[#A7F3D0]/30",
    textColor: "text-[#059669]"
  },
  {
    id: "development",
    title: "Development Work",
    description: "Ensuring structured project execution, resource mobilization, and regional enhancement campaigns that leave a lasting physical footprint of growth.",
    iconName: "TrendingUp",
    accentColor: "bg-[#EFF6FF] hover:shadow-[#BFDBFE]/30",
    textColor: "text-[#2563EB]"
  },
  {
    id: "event",
    title: "Event Participation",
    description: "Speaking and serving as a strategic expert in domestic and national summits to highlight regional needs, perspectives, and potential investments.",
    iconName: "Briefcase",
    accentColor: "bg-[#FFFBEB] hover:shadow-[#FDE68A]/30",
    textColor: "text-[#D97706]"
  },
  {
    id: "social",
    title: "Social Contribution",
    description: "Providing direct philanthropic assistance, educational grants, and medical response campaigns during critical community hardships and transitions.",
    iconName: "Heart",
    accentColor: "bg-[#FFF1F2] hover:shadow-[#FECDD3]/30",
    textColor: "text-[#F43F5E]"
  }
];

export const statItems: StatItem[] = [
  {
    id: "years",
    value: "10+",
    label: "Years of Journey",
    description: "Deep, hands-on leadership, community stewardship, and multi-sector administrative insight."
  },
  {
    id: "projects",
    value: "25+",
    label: "Projects & Initiatives",
    description: "Successful regional development, civic support programs, and public engagements led."
  },
  {
    id: "people",
    value: "1,000+",
    label: "People Reached",
    description: "Positive communal touchpoints through direct interactions, programs, and strategic initiatives."
  },
  {
    id: "milestones",
    value: "50+",
    label: "Milestones Achieved",
    description: "Crucial strategic landmarks, institutional partnerships, and community growth targets met."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Public Moment",
    category: "Community Address",
    aspect: "aspect-[4/3]",
    gradient: "from-[#F3E8FF] via-[#E9D5FF] to-[#D8B4FE]"
  },
  {
    id: "gal-2",
    title: "Event Highlight",
    category: "Summit Keynote",
    aspect: "aspect-[4/5]",
    gradient: "from-[#FFFCE6] via-[#FFF9CC] to-[#FFE0E9]"
  },
  {
    id: "gal-3",
    title: "Community Work",
    category: "Civic Launch",
    aspect: "aspect-[4/3]",
    gradient: "from-[#E6F8F0] via-[#CCF2E1] to-[#A7F3D0]"
  },
  {
    id: "gal-4",
    title: "Professional Meet",
    category: "Strategic Exchange",
    aspect: "aspect-[4/5]",
    gradient: "from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]"
  },
  {
    id: "gal-5",
    title: "Leadership Moment",
    category: "Empowerment Workshop",
    aspect: "aspect-[4/3]",
    gradient: "from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]"
  },
  {
    id: "gal-6",
    title: "Field Visit",
    category: "Rural Engagement",
    aspect: "aspect-[16/9] md:col-span-2",
    gradient: "from-[#FFF1F2] via-[#FFE4E6] to-[#FECDD3]"
  }
];

export const valuesList: ValueItem[] = [
  {
    id: "val-1",
    title: "Integrity",
    description: "Upholding complete transparency and honesty in both private character and public office, building trust through action.",
    emoji: "⚖️",
    color: "bg-[#EFE9FF]"
  },
  {
    id: "val-2",
    title: "Discipline",
    description: "Commitment to rigorous performance standards, systemic order, and operational consistency across all undertakings.",
    emoji: "⚔️",
    color: "bg-[#FFFDE6]"
  },
  {
    id: "val-3",
    title: "Service",
    description: "Genuinely prioritizing the welfare of the collective over personal benefits, seeking the common good at every turn.",
    emoji: "🤝",
    color: "bg-[#E6F9F0]"
  },
  {
    id: "val-4",
    title: "Growth",
    description: "Promoting dynamic progression, continuous education, skill development, and open adaptation to modern solutions.",
    emoji: "🌱",
    color: "bg-[#E6F2FF]"
  },
  {
    id: "val-5",
    title: "Responsibility",
    description: "Owning the ripple effects of every administrative, developmental, and strategic decision made on behalf of the community.",
    emoji: "🛡️",
    color: "bg-[#FFEFF4]"
  },
  {
    id: "val-6",
    title: "Vision",
    description: "Formulating clear, inspiring, long-term frameworks that guide actual operations towards a prosperous and progressive future.",
    emoji: "👁️",
    color: "bg-[#FCF5E8]"
  }
];

export const quoteBlock = {
  quote: "True leadership is built through service, consistency, and the courage to keep moving forward.",
  author: "Kikheto Chishi"
};

export const contactData = {
  heading: "Let’s Connect",
  subheading: "Reach out for collaborations, professional opportunities, or meaningful conversations.",
  email: "contact@kikhetochishi.com",
  phone: "+91 94360 88888",
  location: "Nagaland, India",
  downloadText: "Download Profile",
  ctaText: "Contact Now"
};
