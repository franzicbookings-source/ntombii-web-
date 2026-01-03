
import React from 'react';
import { 
  Globe, 
  Layout, 
  Smartphone, 
  Wrench, 
  Server, 
  ShieldCheck, 
  PenTool, 
  Upload, 
  Mail, 
  Search,
  Code,
  Zap,
  CheckCircle,
  BarChart,
  Cpu,
  Bot
} from 'lucide-react';
import { Service, Project, Testimonial, PricingTier } from './types';

export const CORE_SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Custom Websites',
    description: 'Bespoke, high-performance websites tailored to your brand identity and business goals.',
    icon: 'Globe',
    category: 'core',
    startingPrice: 'R2,500'
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Complex, scalable SaaS platforms and internal tools built with modern frameworks.',
    icon: 'Layout',
    category: 'core',
    startingPrice: 'R3,000'
  },
  {
    id: 'mobile-apps',
    title: 'Native Mobile Apps',
    description: 'Performance-first iOS and Android applications developed for a seamless mobile experience.',
    icon: 'Smartphone',
    category: 'core',
    startingPrice: 'R30,000'
  },
  {
    id: 'automation',
    title: 'AI & Workflow Automation',
    description: 'Eliminate manual tasks with custom AI agents, API integrations, and automated business workflows.',
    icon: 'Bot',
    category: 'core',
    startingPrice: 'R5,000'
  }
];

export const ADDITIONAL_SERVICES: Service[] = [
  {
    id: 'hosting',
    title: 'Local Cloud Hosting',
    description: 'Ultra-fast local South African hosting with low latency for your local customer base.',
    icon: 'Server',
    category: 'additional'
  },
  {
    id: 'maintenance',
    title: 'Ongoing Maintenance',
    description: 'Continuous updates, security patches, and performance monitoring for peace of mind.',
    icon: 'ShieldCheck',
    category: 'additional'
  },
  {
    id: 'content',
    title: 'Professional Content',
    description: 'Expert copywriting and local imagery to make your site truly engaging for the SA market.',
    icon: 'PenTool',
    category: 'additional'
  },
  {
    id: 'uploading',
    title: 'Content Management',
    description: 'We handle the heavy lifting of uploading and formatting your data and articles.',
    icon: 'Upload',
    category: 'additional'
  },
  {
    id: 'email',
    title: 'Secure Email Hosting',
    description: 'Professional, reliable, and secure email solutions for your entire organization.',
    icon: 'Mail',
    category: 'additional'
  },
  {
    id: 'seo',
    title: 'Local SEO Mastery',
    description: 'Proven strategies to improve your rankings on Google.co.za and drive organic local traffic.',
    icon: 'Search',
    category: 'additional'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Essential',
    setupPrice: 'R2,500',
    monthlyPrice: 'R499',
    description: 'Ideal for startups needing a high-impact professional presence.',
    features: [
      'Custom Responsive Design',
      'Local Cloud Hosting Included',
      '2 Professional Email Accounts',
      'Monthly Content Uploads (1)',
      'Basic SEO Optimization'
    ]
  },
  {
    id: 'growth',
    name: 'Professional',
    setupPrice: 'R12,500',
    monthlyPrice: 'R1,850',
    description: 'For growing businesses requiring active content and basic automation.',
    features: [
      'Advanced CMS Integration',
      'Basic Workflow Automation (Zapier/Make)',
      '5 Professional Email Accounts',
      'Bi-Weekly Content Updates',
      'Rank-Focused SEO Strategy',
      'Priority Support'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Custom Studio',
    setupPrice: 'R25,000+',
    monthlyPrice: 'R3,500',
    description: 'High-scale apps and enterprise tools with dedicated management.',
    features: [
      'Bespoke Web App / Native App',
      'Custom AI Agent & Full Automation',
      'Unlimited Content Management',
      '24/7 Security Monitoring',
      'Weekly SEO Performance Reports',
      'Custom Tool Automations'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'thola-online',
    title: 'TholaOnline',
    category: 'Business Directory & SMME Hub',
    description: 'A powerful digital ecosystem for South African small businesses to list their services, gain visibility, and connect with customers.',
    image: 'https://images.unsplash.com/photo-1454165833767-1d16ed021382?auto=format&fit=crop&q=80&w=1200',
    logo: 'https://www.google.com/s2/favicons?domain=tholaonline.co.za&sz=128',
    link: 'https://tholaonline.co.za',
    caseStudy: {
      problem: 'Small, Medium, and Micro Enterprises (SMMEs) in South Africa lacked a centralized, high-performance platform to showcase their local services to a digital-first audience.',
      solution: 'We built a high-velocity directory with advanced filtering, SEO-optimized business profiles, and a seamless vendor onboarding experience.',
      results: [
        'Massive digital footprint for KZN-based businesses',
        'Intuitive search functionality for local service discovery',
        'Mobile-first architecture optimized for low-data environments'
      ],
      stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Search Optimization']
    }
  },
  {
    id: 'rnb-gathering',
    title: 'RnB Soulful Groove Gathering',
    category: 'Music Festival Platform',
    description: 'The official digital home for South Africa\'s most anticipated RnB music festival, optimized for storytelling and ticket conversion.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8a4874093?auto=format&fit=crop&q=80&w=1200',
    logo: 'https://www.google.com/s2/favicons?domain=rnbsoulfulgroovegathering.co.za&sz=128',
    link: 'https://rnbsoulfulgroovegathering.co.za',
    caseStudy: {
      problem: 'A premium music festival needs a web presence that handles high-traffic surges during ticket releases while maintaining a soulful, high-end brand aesthetic.',
      solution: 'Developed a visually stunning, reactive platform with integrated ticket booking flows and artist line-up showcases.',
      results: [
        'Significant increase in online ticket sales conversion',
        'Seamless performance during peak promotional periods',
        'Engaging user experience that captured the festival spirit'
      ],
      stack: ['React', 'Framer Motion', 'Stripe/Ticket Integration', 'Node.js']
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'thola-ceo',
    name: 'CEO',
    role: 'Managing Director',
    company: 'TholaOnline',
    content: 'As one of their first clients, I was blown away by the personal attention and technical depth they brought. They were kind, charged me way less than I would have paid if I went to traditional web devs, and they even handled all my content and hosting.',
    avatar: 'https://i.pravatar.cc/150?u=thola',
    link: 'https://tholaonline.co.za'
  },
  {
    id: 'rnb-ceo',
    name: 'CEO',
    role: 'Founder',
    company: 'RnB Soulful Groove Gathering',
    content: 'NTOMBII COMM may be new but their expertise feels seasoned. They delivered our website in less than a week with 2 years worth of content. They host our website and emails and we have had zero issues.',
    avatar: 'https://i.pravatar.cc/150?u=rnb',
    link: 'https://rnbsoulfulgroovegathering.co.za'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  BarChart: <BarChart className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />
};
