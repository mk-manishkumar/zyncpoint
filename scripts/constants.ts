// Type definitions
export interface Feature {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Service {
  name: string;
  hook: string;
  problem: string;
  features: Feature[];
  benefit: string;
  testimonial?: Testimonial | null;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface MissionItem {
  title: string;
  description: string;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

export interface WhyChooseUsFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}

// ========================================
// SERVICES PAGE CONTENT
// ========================================

// Hero Section Content
export const HERO_CONTENT = {
  eyebrow: "Services That Actually Work",
  title: {
    line1: "We Don't Just Build Websites.",
    line2: "We Build Digital Experiences That Drive Results.",
  },
  description: "We're on a mission to create websites that go beyond aesthetics. Every project combines thoughtful engineering, conversion-focused design, and genuine care for your success. Let's build something that actually works for your business.",
  cta: {
    primary: {
      text: "Explore Services",
      href: "#services",
    },
    secondary: {
      text: "Let's Talk Strategy",
      href: "#contact",
    },
  },
};

// Intro Section Content
export const INTRO_CONTENT = {
  heading: "Here's what we believe:",
  paragraphs: ["A website should be more than just a digital business card. It should work hard for your business, capturing attention, building trust, and guiding visitors toward taking action.", "We are a new agency with a clear focus: creating websites that deliver real value. No fluff, no empty promises, just thoughtful design and solid execution.", "We've studied what works. What makes visitors engage. What turns interest into action. What separates websites that convert from those that just look pretty."],
  closing: "Ready to see what we can build together?",
};

// Services Data
export const SERVICES: Service[] = [
  {
    name: "Creative Websites That Actually Sell",
    hook: "If your website doesn't grab attention in 3 seconds, you've already lost.",
    problem: "Your current website is bleeding money. Visitors bounce faster than a rubber ball. Your competitors with uglier products somehow get more customers. Nobody is clicking your CTAs.",
    features: [
      {
        title: "Motion That Matters",
        description: "Every animation has a purpose: direct attention, create desire, eliminate objections, drive action.",
      },
      {
        title: "Psychology-Driven Design",
        description: "Color psychology, eye-tracking patterns, cognitive fluidity, actual science that makes visitors unable to resist.",
      },
      {
        title: "Conversion Architecture",
        description: "Your website becomes a sales funnel on steroids. We map every click, every scroll toward purchase.",
      },
      {
        title: "Mobile-First Dominance",
        description: "70% of visitors are on phones. If your site doesn't work there, you're leaving money on the table.",
      },
    ],
    benefit: "Your website becomes a powerful tool for your business, working around the clock to attract, engage, and convert visitors into customers.",
    testimonial: null,
  },
  {
    name: "AI That Talks Like a Human",
    hook: "What if your website could answer questions, handle objections, and close sales while you sleep?",
    problem: "You are losing hot prospects at 2 AM, on weekends, during holidays. They have one question, cannot find the answer, and boom, they are gone to your competitor.",
    features: [
      {
        title: "24/7 Sales Machine",
        description: "Handles inquiries, books appointments, upsells customers while you're binge-watching Netflix.",
      },
      {
        title: "Human-Like Conversations",
        description: "Trained on your brand voice, your products, your customers' questions. Sounds like you, not a confused robot.",
      },
      {
        title: "Smart Qualification",
        description: "Identifies hot prospects and prioritizes them. No more wasting time on tire-kickers.",
      },
      {
        title: "Seamless Handoffs",
        description: "When humans are needed, transfers smoothly with full context. No repeating information.",
      },
    ],
    benefit: "Never miss an opportunity. Provide instant responses to customer questions, qualify leads automatically, and offer support whenever your visitors need it, even when you're not available.",
    testimonial: null,
  },
  {
    name: "Professional Hosting Solutions",
    hook: "Your amazing website is worthless if nobody can find it online.",
    problem: "Your website needs a solid foundation. Poor hosting leads to slow performance, downtime during traffic spikes, and unprofessional URLs that hurt your brand credibility.",
    features: [
      {
        title: "Enterprise-Grade Hosting",
        description: "Cloud infrastructure that scales automatically. Black Friday surge? Your site doesn't blink.",
      },
      {
        title: "Domain Strategy",
        description: "Perfect domain name, professional email addresses. info@yourbrand.com beats gmail every time.",
      },
      {
        title: "SSL & Security Protection",
        description: "Industry-standard security. Google rewards you. Customers trust you with their credit cards.",
      },
      {
        title: "Speed Optimization",
        description: "Load so fast visitors think they have better internet.",
      },
      {
        title: "Global CDN",
        description: "Content delivered from servers closest to visitors. Tokyo gets the same blazing speed as Texas.",
      },
    ],
    benefit: "Launch with confidence knowing your website is fast, secure, and professionally hosted. Focus on growing your business while we handle the technical details.",
    testimonial: null,
  },
  {
    name: "Getting Paid Shouldn't Be This Hard",
    hook: "The easier it is to buy, the more customers will complete their purchase. Simple as that.",
    problem: "You did everything right. Customer wants to buy. Then your checkout loses them. Too many steps. Too much info. Confusing payment options. Broken on mobile. Every friction point costs money.",
    features: [
      {
        title: "One-Click Checkouts",
        description: "Credit cards, Apple Pay, Google Pay, PayPal, whatever gets them from 'want' to 'bought' fastest.",
      },
      {
        title: "Smart Form Fields",
        description: "Autofill, address lookup, intelligent defaults cut checkout time by 60%.",
      },
      {
        title: "Mobile-Optimized Everything",
        description: "Designed to work flawlessly on mobile devices where most customers complete their purchases.",
      },
      {
        title: "QR Code",
        description: "Restaurant menus, product information, event registration, and payment links, all accessible through clean, reliable QR codes.",
      },
    ],
    benefit: "Make it easy for customers to pay you. Easy checkout processes, multiple payment options, and smart solutions like QR codes mean fewer abandoned carts and more completed transactions.",
    testimonial: null,
  },
];

// Why Choose Us Section
export const WHY_CHOOSE_US = {
  title: "Why Work With Us",
  items: [
    {
      title: "Quality-Focused",
      description: "We take pride in delivering clean, well-structured code and thoughtful design that stands the test of time.",
    },
    {
      title: "Communication First",
      description: "You will always know where your project stands. Clear updates, honest timelines, and no technical jargon unless you want it.",
    },
    {
      title: "Results-Driven",
      description: "Every decision is made with your business goals in mind. We build websites that are designed to perform, not just look good.",
    },
  ] as WhyChooseUsItem[],
};

// CTA Section Content
export const CTA_CONTENT = {
  title: "Let's Start a Conversation",
  paragraphs: ["Starting a new project can feel overwhelming. We get it. That's why we keep things simple.", "Schedule a quick call, tell us about your goals, and we'll share our honest thoughts on how we can help. No pressure, no sales pitch, just a genuine conversation about your project.", "If it feels like a good fit, we'll work together. If not, that's okay too. Either way, you'll walk away with some useful insights."],
  highlight: "Schedule a quick call, tell us about your goals, and we'll share our honest thoughts on how we can help. No pressure, no sales pitch, just a genuine conversation about your project.",
  button: {
    text: "Schedule a Free Call",
    href: "/contact",
  },
  subtext: "Free consultation • No obligation • Honest feedback",
};

// Arsenal Section
export const ARSENAL_SECTION = {
  title: "Our",
  titleHighlight: "Arsenal",
};

// ========================================
// ABOUT PAGE CONTENT
// ========================================

// About Page - Why ZyncPoint Section
export const ABOUT_WHY_ZYNCPOINT = {
  title: {
    prefix: "Why",
    highlight: "ZyncPoint?",
  },
  description: "At ZyncPoint, we bridge the gap between complex business challenges and high-performance digital solutions. In an era where technology moves faster than ever, we ensure your business stays ahead by providing the technical precision and creative edge needed to win.",
  mission: {
    title: "Our Mission:",
    description: "To Zync your vision with the most state-of-the-art technology, delivering you to the Point of market leadership.",
  },
  visionCard: {
    title: "Zync Your Vision",
    description: "Transform challenges into competitive advantages with cutting-edge technology",
  },
};

// About Page - Mission Items
export const MISSION_ITEMS: MissionItem[] = [
  {
    title: "Technical Excellence",
    description: "Deep expertise in modern tech stacks and best practices",
    color: "from-primary to-primary-light",
  },
  {
    title: "Creative Innovation",
    description: "Unique solutions that set your business apart",
    color: "from-primary-light to-accent",
  },
  {
    title: "Scalability First",
    description: "Built for growth from day one",
    color: "from-accent to-primary",
  },
];

// About Page - Team Members
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Manish Kumar",
    role: "Founder",
    image: "/teams/manish_kumar.png",
    social: {
      linkedin: "https://www.linkedin.com/in/mk-manishkumar",
      twitter: "https://x.com/_manishmk",
      github: "https://github.com/mk-manishkumar",
    },
  },
  // Add more team members here as needed
];

// About Page - Team Section
export const ABOUT_TEAM_SECTION = {
  eyebrow: "Meet the Team",
  title: {
    prefix: "Our",
    highlight: "Team",
  },
  description: "A focused team driven by engineering excellence, product thinking, and long-term impact.",
};

// ========================================
// WHY CHOOSE US SECTION (Home Page)
// ========================================

// Why Choose Us Section Header
export const WHY_CHOOSE_US_SECTION = {
  eyebrow: "Why Choose Us",
  title: {
    prefix: "Why Choose",
    highlight: "ZyncPoint",
  },
  description: "Key advantages that set us apart",
};

// Why Choose Us Features
export const WHY_CHOOSE_US_FEATURES: WhyChooseUsFeature[] = [
  {
    icon: "⚡",
    title: "Performance-Driven",
    description: "Speed, efficiency, and optimization at every level",
    color: "from-accent to-accent/60",
    delay: 0.1,
  },
  {
    icon: "🔒",
    title: "Security First",
    description: "Enterprise-grade security practices and compliance",
    color: "from-primary to-primary-light",
    delay: 0.2,
  },
  {
    icon: "🤝",
    title: "Collaborative Approach",
    description: "Partners in your success, not just vendors",
    color: "from-accent to-primary",
    delay: 0.3,
  },
  {
    icon: "📈",
    title: "Proven Results",
    description: "Measurable impact on business growth and ROI",
    color: "from-primary-light to-accent",
    delay: 0.4,
  },
  {
    icon: "🔬",
    title: "Innovation-Focused",
    description: "Always at the forefront of technology",
    color: "from-primary to-accent/80",
    delay: 0.5,
  },
  {
    icon: "🎯",
    title: "Precision Execution",
    description: "Precise attention to every detail",
    color: "from-accent/80 to-primary-light",
    delay: 0.6,
  },
];
