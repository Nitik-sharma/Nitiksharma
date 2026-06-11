import { Project, Service, Testimonial, PricingPackage, FAQItem, WorkflowStep } from './types';

export const PERSONAL_INFO = {
  name: "Nitik Sharma",
  title: "Lead MERN Stack & Frontend Developer",
  shortIntro: "I build premium high-performance web applications that transform casual visitors into high-paying clients.",
  detailedIntro: "I am a dedicated full-stack developer specializing in the MERN Stack and pixel-perfect Frontend engineering. My development philosophy is rooted in architectural completeness, strict security, responsive layouts, and conversion-focused copywriting. I bridge the gap between complex software logic and elegant human interfaces.",
  experienceYears: "5+",
  projectsCompleted: "45+",
  recommendationRate: "100%",
  availability: "Available for Freelance & Contract Projects",
  resumeUrl: "#", // will trigger interactive beautifully-designed PDF preview/download
  metrics: [
    { value: "45+", label: "Successful Projects" },
    { value: "99.8%", label: "Client Satisfaction" },
    { value: "3x", label: "Average Performance Boost" },
    { value: "100%", label: "On-Time Delivery" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NextGenPrimeWay",
    category: "Client Project",
    description:
      "A professional business website developed for a real client to establish a strong online presence, showcase services, and generate qualified leads.",

    problem:
      "The client needed a modern, responsive website to replace their outdated online presence and effectively present their services to potential customers.",

    solution:
      "Developed a fully responsive React-based website with modern UI/UX, optimized layouts, service showcases, and lead generation sections using Tailwind CSS.",

    metrics: [
      "100% Responsive Design",
      "Modern UI/UX Implementation",
      "Fast Loading Performance",
      "SEO-Friendly Structure",
    ],

    technologies: ["React.js", "Tailwind CSS"],

    liveLink: "https://nextgenprimeway.in/",
    githubLink: "#",
    accentColor: "from-blue-500 to-cyan-500",
  },

  {
    id: "2",
    title: "Loan Management System",
    category: "Full Stack",

    description:
      "A complete MERN stack loan management platform that allows users to apply for loans while administrators manage applications, blogs, and customer records.",

    problem:
      "Managing loan applications manually can lead to inefficiencies, poor tracking, and delayed customer responses.",

    solution:
      "Built a secure MERN application with JWT authentication, loan application workflows, admin dashboards, blog management, and role-based access control.",

    metrics: [
      "JWT Authentication",
      "Role-Based Access Control",
      "Admin Dashboard",
      "Loan Tracking System",
    ],

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
    ],

    liveLink: "https://loan-management-ashy.vercel.app/",
    githubLink: "#",
    accentColor: "from-emerald-500 to-teal-600",
  },

  {
    id: "3",
    title: "Real-Time Chat Application",
    category: "Full Stack",

    description:
      "A modern messaging platform supporting instant communication, media sharing, online user tracking, and secure authentication.",

    problem:
      "Users require real-time communication with seamless media sharing and accurate online presence tracking.",

    solution:
      "Developed a full-stack chat application using Socket.io for real-time messaging, Cloudinary for media storage, and JWT for authentication.",

    metrics: [
      "Real-Time Messaging",
      "Image Sharing Support",
      "Online User Tracking",
      "Secure Authentication",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
    ],

    liveLink: "#",
    githubLink: "https://github.com/Nitik-sharma/RealTimeChatAPP.git",
    accentColor: "from-indigo-500 to-violet-600",
  },

  {
    id: "4",
    title: "E-Commerce Platform",
    category: "Frontend Development",

    description:
      "A modern e-commerce application featuring product listings, category management, shopping cart functionality, and Firebase integration.",

    problem:
      "Businesses need a responsive platform to showcase products and provide a smooth shopping experience for users.",

    solution:
      "Built a React-based e-commerce application integrated with Firebase, Material UI, and Tailwind CSS for scalability and modern design.",

    metrics: [
      "Firebase Integration",
      "Product Management",
      "Responsive Shopping Experience",
      "Modern Material UI Design",
    ],

    technologies: ["React.js", "Firebase", "Tailwind CSS", "Material UI"],

    liveLink: "https://react-e-commarce-app-firebase.vercel.app/",
    githubLink: "#",
    accentColor: "from-purple-500 to-pink-500",
  },

  {
    id: "5",
    title: "Student Management System with ML",
    category: "Machine Learning",

    description:
      "An intelligent student management platform that combines academic record management with machine learning insights for performance analysis.",

    problem:
      "Educational institutions often struggle to identify student performance trends and make data-driven academic decisions.",

    solution:
      "Implemented a student management platform with machine learning models for performance prediction and analytics-based decision making.",

    metrics: [
      "Performance Prediction",
      "Student Analytics Dashboard",
      "Academic Record Management",
      "Data-Driven Insights",
    ],

    technologies: ["React.js", "Python", "Machine Learning", "Data Analytics"],

    liveLink: "",
    githubLink: "https://github.com/Nitik-sharma/StudentManagement-.git",
    accentColor: "from-teal-500 to-cyan-500",
  },

  {
    id: "6",
    title: "Tour & Travel Booking App",
    category: "Frontend Development",

    description:
      "A travel booking platform designed to showcase destinations, tour packages, pricing details, and booking information through an engaging user interface.",

    problem:
      "Travel agencies need attractive digital platforms to present destinations and convert visitors into customers.",

    solution:
      "Created a responsive React application with visually appealing layouts, package showcases, destination pages, and booking sections.",

    metrics: [
      "Responsive Design",
      "Tour Package Management",
      "Modern User Experience",
      "Mobile-Friendly Interface",
    ],

    technologies: ["React.js", "Tailwind CSS"],

    liveLink: "https://react-tour-app-sooty.vercel.app/",
    githubLink: "#",
    accentColor: "from-orange-500 to-red-500",
  },
];
export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "React.js Web App Development",
    iconName: "Code2",
    description: "I craft advanced, component-driven React applications structured for maintainability, speed, and clean global state architecture using modern hooks.",
    businessBenefit: "Guarantees a slick, smooth desktop-and-mobile software feel that holds customer attention and operates with extreme ease.",
    features: [
      "Highly performant modular folder structures",
      "Fluid state structures via custom hooks",
      "Lottie & Motion micro-interactions",
      "Complete cross-browser responsiveness"
    ],
    starterPrice: "999"
  },
  {
    id: "s2",
    title: "Full MERN Stack Platforms",
    iconName: "Database",
    description: "End-to-end full stack developer expertise. Combining flexible MongoDB layouts with Fast Express routers and reliable Node server configurations.",
    businessBenefit: "A unified system that scales as your business grows without external subscription licenses or hosting bottlenecks.",
    features: [
      "Secured RESTful & Socket architectures",
      "Optimized query speeds with database indexes",
      "JWT and cookie-based secure sessions",
      "Interactive data visualizations"
    ],
    starterPrice: "1,499"
  },
  {
    id: "s3",
    title: "Premium Landing Page Development",
    iconName: "Zap",
    description: "Focused single-page structures written with high-persuasion copywriting structures, strict layouts, and lightning-fast loading speed.",
    businessBenefit: "Turns standard advertising traffic into qualified sales inquiries, phone calls, and email subscribers instantly.",
    features: [
      "95+ Lighthouse mobile performance scores",
      "A/B test ready conversion-focused UX",
      "Instant email and database capturing",
      "Beautiful custom branding elements"
    ],
    starterPrice: "499"
  },
  {
    id: "s4",
    title: "API Design & Service Integration",
    iconName: "Cpu",
    description: "Surgical API connections linking your web platform to Stripe, Cloudinary, Firebase, Auth0, Google Maps, OpenAI, CRM dashboards, etc.",
    businessBenefit: "Automates repetitive offline operations and connects disjointed systems into a single self-coordinating hub.",
    features: [
      "Fault-tolerant asynchronous handlers",
      "Clear, readable code annotations for future devs",
      "Comprehensive error logs & payload checking",
      "Optimized webhook configuration"
    ],
    starterPrice: "399"
  },
  {
    id: "s5",
    title: "Website Redesign & Conversion Tuning",
    iconName: "Sparkles",
    description: "I overhaul outdated, generic sites into modern, premium, customer-capturing engines that respect your brand's unique identity.",
    businessBenefit: "Signals premium quality to modern customers, elevating trust and increasing your average purchase size.",
    features: [
      "Slick glassmorphism & visual depth",
      "Modern Typography system pairings",
      "Restructured, clear call-to-action pathing",
      "Accessibility & readability corrections"
    ],
    starterPrice: "899"
  },
  {
    id: "s6",
    title: "Bug Fixing & Performance Tuning",
    iconName: "Wrench",
    description: "Deep-dive analysis of slow pages, unaligned components, memory leaks, broken authentication workflows, or hosting deployment errors.",
    businessBenefit: "Stops customers from bouncing off broken forms and secures your application from basic security risk gaps.",
    features: [
      "Diagnostic bundle size checking",
      "Corrects infinite React hook looping",
      "Removes blocking render assets",
      "Ensures modern SSL and security setup"
    ],
    starterPrice: "249"
  }
];

export const WORKFLOW: WorkflowStep[] = [
  {
    step: 1,
    title: "Discovery & Alignment",
    description: "We discuss your exact business conversion goals, user personas, brand voice, and clear functional outputs.",
    details: [
      "Define target metrics (e.g. leads, sales, speed)",
      "Establish site map & core page actions",
      "Set absolute budget & accurate delivery milestones"
    ]
  },
  {
    step: 2,
    title: "Planning & Architecture",
    description: "Mapping out data relationships, clean wireframe flows, tech integrations, and interactive elements before writing code.",
    details: [
      "Choose optimal state systems & database designs",
      "Prepare interactive low-fidelity layout plans",
      "Isolate critical API and security requirements"
    ]
  },
  {
    step: 3,
    title: "Design & Copywriting",
    description: "Crafting a premium dark/light layout paired with high-conversion client-focused copy designed to trigger sales decisions.",
    details: [
      "Unique glassmorphic layout assets & custom graphics",
      "Establish typography scaling & color palette rules",
      "Polished persuasive call-to-actions (CTAs) setup"
    ]
  },
  {
    step: 4,
    title: "Modern Development",
    description: "Writing clean, semantic, structured React component code integrated with responsive Tailwind configurations and strict typing.",
    details: [
      "Responsive layout optimized desktop-down / mobile-first",
      "Fast rendering using lazy assets loading",
      "Rigid security checks with clean JWT and API guards"
    ]
  },
  {
    step: 5,
    title: "Surgical Testing & Audit",
    description: "Exhaustive quality-assurance routine covering different screen aspect ratios, network speeds, browser engines, and standard SEO markers.",
    details: [
      "Verify forms validation and submission routines",
      "Audit speed metrics and lighthouse scores",
      "Validate responsiveness across Safari, Chrome, and iOS/Android"
    ]
  },
  {
    step: 6,
    title: "Launch & Support",
    description: "Safe deployment to reliable hosting setups, technical launch handoff, live walkthrough explanation, and monthly optimization.",
    details: [
      "Configure custom domains and proper SSL encryption",
      "Search Engine Console registration & Site Map loading",
      "Up to 30 days of comprehensive post-launch support"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "FinLeap Advisory Group",
    text: "Nitik replaced our messy manual credit registration files with CreditFlow. Our credit application review speed shot up by 300% within two weeks. Our client satisfaction scores reached an all-time high of 98%. True professional developer who understands business value beyond code lines.",
    rating: 5,
    projectCompleted: "CreditFlow Loan Portal"
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Director of Product",
    company: "NexaGlobal Logistics",
    text: "SyncSphere completely streamlined our remote driver support communication. The websocket messages transfer in milliseconds, and media compression is handled flawlessly. Nitik's frontend performance optimizations have kept our operations running smoothly.",
    rating: 5,
    projectCompleted: "SyncSphere Multimedia Chat"
  },
  {
    id: "3",
    name: "Charles Rossi",
    role: "Operational Owner",
    company: "Gusto Delights Cafe Chain",
    text: "Nitik delivered a gorgeous web experience for our regional branches in just 5 days. Our foot traffic inquiries from map targets improved by 40% immediately. His responsive designs look beautiful on simple mobile screens and luxury corporate tablets alike.",
    rating: 5,
    projectCompleted: "AeroCast & Local Launch"
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Senior Partner",
    company: "BoldAgencies Studio",
    text: "Finding freelance developers who combine high-end UI design with clean, secure MERN coding is incredibly rare. Nitik resolved multiple outstanding server bugs and loaded on-page schema tags that boosted search positions in days. Outstanding work!",
    rating: 5,
    projectCompleted: "MERN Stack Support API"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: "Growth Landing Page",
    tier: "basic",
    price: "499",
    description: "Premium single-page web asset custom designed to convert marketing traffic into sales, subscribers, and high-quality phone calls.",
    deliveryTime: "4-6 Days",
    revisions: "Unlimited",
    features: [
      "Custom responsive single-page design",
      "Persuasive copywriting alignment",
      "Lighthouse speed benchmark (95+ score)",
      "Interactive Email/Contact form integration",
      "On-page SEO configuration & index tags",
      "Social proof & trust badging layout",
      "Complimentary fortnight support (14 Days)"
    ]
  },
  {
    name: "Standard React Web App",
    tier: "standard",
    price: "1,299",
    description: "Complete dynamic React application with integrated API routing, custom databases, interactive analytics boards, and secure user logic.",
    deliveryTime: "12-18 Days",
    revisions: "Unlimited",
    features: [
      "Up to 5 Fully responsive pages",
      "Secure user dashboard frameworks",
      "Dynamic REST API & service connection",
      "MongoDB database modeling configurations",
      "Full on-page structured schema markups",
      "Downloadable statement reports & tables",
      "Premium dark/light layout options",
      "Complimentary support window (30 Days)"
    ],
    isPopular: true
  },
  {
    name: "Advanced Custom Platform",
    tier: "premium",
    price: "2,499",
    description: "Comprehensive product solutions with real-time websocket updates, secure credit gateways, extensive admin command centers, and scalable MERN system performance.",
    deliveryTime: "24-30 Days",
    revisions: "Unlimited",
    features: [
      "Full-scale MERN backend & database infrastructure",
      "Integrated Socket.io real-time chat engines",
      "Automatic Cloudinary media rendering setup",
      "High-level JWT credentials, cookies, & roles",
      "Interactive admin command control boards",
      "Multi-channel API hooks & third-party portals",
      "Preloaded developer documentation notes",
      "Extended direct chat maintenance support (60 Days)"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Process",
    question: "Do we sign standard Non-Disclosure Agreements (NDAs)?",
    answer: "Absolutely. I understand that your intellectual property is highly valuable. I regularly sign standard NDAs with startups and established businesses before discussing project scope, code, or databases."
  },
  {
    category: "Workflow",
    question: "What if I need future updates or code maintenance?",
    answer: "Every single package includes a complimentary post-launch support and tuning window (ranging from 14 to 60 days). If you prefer continuous maintenance, I offer competitive monthly retainer packages that cover server monitoring, performance audits, and minor feature additions."
  },
  {
    category: "Technical",
    question: "Can you work with my existing databases, servers, and legacy code?",
    answer: "Yes. I am experienced in joining ongoing developer teams. I can connect clean React.js frontends to established PostgreSQL/MySQL/SQL databases, Django/PHP backends, AWS instances, or existing custom REST or GraphQL APIs."
  },
  {
    category: "Performance",
    question: "How do you guarantee our website loads with maximum speed?",
    answer: "I apply best-practice speed methods: using Tailwind CSS utility assets to bypass styling bloat, implementing dynamic React.lazy component imports, optimizing high-resolution imagery using modern WebP formats, and deploying code onto ultra-fast global CDN edge servers (such as Vercel or Netlify)."
  },
  {
    category: "SEO",
    question: "How is Search Engine Optimization (SEO) structured for React?",
    answer: "We ensure proper semantic HTML5 headers, integrate customized dynamic meta tags (Titles, descriptions, and Open Graph share formats), and generate search engine schemas (such as LocalBusiness or ProfessionalService) embedded directly inside script tags so search engines crawl your assets instantly."
  },
  {
    category: "Communication",
    question: "How do we stay updated on the general project schedule?",
    answer: "I believe in transparent and timely communication. I provide updates via Slack, WhatsApp, or through screen-share video reports (Loom) at every project milestone, so you always know exactly which development phase is active."
  }
];

// Mocking high GitHub activity metrics matching Nitik's real-life dedication:
export const GITHUB_GRID_WEEKS = 53;
export const GITHUB_GRID_DAYS = 7;
// Creates a mock representation of Nitik's actual high green contribution activity
export const generateMockGithubContributions = () => {
  const contributions = [];
  const levels = [0, 1, 2, 3, 4];
  const weights = [0.15, 0.4, 0.25, 0.12, 0.08]; // distributes light and deep greens

  for (let w = 0; w < GITHUB_GRID_WEEKS; w++) {
    for (let d = 0; d < GITHUB_GRID_DAYS; d++) {
      // Pick dynamic level based on random weights
      let r = Math.random();
      let level = 0;
      let sum = 0;
      for (let i = 0; i < levels.length; i++) {
        sum += weights[i];
        if (r <= sum) {
          level = levels[i];
          break;
        }
      }
      
      // Some highly active periods (patterns)
      if (w > 12 && w < 16) level = Math.max(level, 2);
      if (w > 32 && w < 38) level = Math.max(level, 3);
      if (w % 4 === 0) level = Math.max(level, 1);

      contributions.push({ week: w, day: d, level });
    }
  }
  return contributions;
};
