
import { Testimonial, FAQItem, Module } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Viplov',
    role: 'AI Project Manager (Former Sales Manager)',
    content: "After being laid off from my sales role, I joined this program with uncertainty. Within 8 weeks, I transitioned into an AI Project Manager position with a 40% salary hike. The live sessions and hands-on approach gave me the confidence and skills to pivot my entire career. Best investment I've made.",
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Pankaj',
    role: 'Sales & AI Consultant',
    content: "I built an AI tool during the live sessions that I've now sold to my company and three competitorseach sale in six figures. The 1-on-5 format meant I got personalized guidance on my specific use case. This course paid for itself 100x over.",
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Ayush',
    role: 'Founder, AI Automation Agency',
    content: "Right after completing the course, I launched my AI agency and started serving international clients through referrals. The practical project work and continuous community support made the transition seamless. I went from learning AI to selling AI solutions in just 2 months.",
    avatar: 'https://picsum.photos/id/177/100/100'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What experience level do I need?',
    answer: "No prior coding or technical AI knowledge required. If you can operate a PC, open YouTube, and browse websites, you're ready. This program is designed for working professionals (5+ years experience) who want to leverage AI in their careerswhether you're in sales, marketing, operations, or any other field. We start from the fundamentals and build up to shipping real software."
  },
  {
    question: 'How do the live sessions work?',
    answer: "We meet every Saturday and Sunday on Google Meet for 1–3 hour sessions depending on the practical work we're doing. Sessions are highly interactiveyou can ask questions anytime, work on exercises in real-time, and get immediate feedback. It's not a lecture; it's a workshop where you learn by doing. The 1-on-5 ratio ensures you get personalized attention."
  },
  {
    question: 'What project will I build during the course?',
    answer: "You'll design and ship a complete web applicationdecided during our discovery call before the sessions start. Past students have built customer feedback tools, CRM dashboards, portfolio sites, client intake systems, and internal team tools. You'll go from product requirements through to a live URL, using Claude, Lovable, Supabase, and Vercel. I'll support you on your project even after graduation."
  },
  {
    question: 'What if I miss a session?',
    answer: "All sessions are recorded and available to you. However, live attendance is strongly encouraged because the real value comes from asking questions, doing practicals together, and getting real-time feedback. Recordings are there as a backup, not a replacement."
  },
  {
    question: 'What tools and software will I need?',
    answer: "Just a laptop (Mac or PC) and an internet connection. We work with Claude for AI planning and writing, Lovable for building the app interface, Supabase for the database and authentication, and Vercel for deployment. Most tools have generous free tiers to get you startedI'll guide you on what you need as we go. No downloads, no local installs."
  },
  {
    question: "How long is the program and what's the time commitment?",
    answer: "9 sessions total8 core sessions over 4 weekends plus a Capstone & Demo Day. Expect to invest 8–12 hours per week including practice between sessions. We keep batches small (5 students max) to maintain quality and ensure every student ships a real project."
  },
  {
    question: 'What support do I get after the course?',
    answer: "Lifetime access to our Discord community with monthly calls and workshops. Madhav comes online twice a week on Discord for open discussions and questions. You also get lifetime access to our premium Skool community. The learning doesn't stop after Demo Dayyou'll have ongoing support as you build and grow."
  },
  {
    question: "What's your refund and batch switching policy?",
    answer: "50% refund is available only after the first session if you feel it's not the right fit. No batch switching is allowed once you start, as each group develops its own dynamic and pace. This ensures a consistent learning experience for your cohort."
  }
];

export const CURRICULUM: Module[] = [
  {
    week: 1,
    title: 'Claude Foundations',
    description: "Understand what Claude is, how it reasons, and why it's fundamentally different from everything you've tried before. Set your learning goals for the program.",
    icon: 'psychology',
    topics: ['How Claude Works', 'AI Literacy', 'Goal Setting']
  },
  {
    week: 2,
    title: 'Prompt Engineering',
    description: 'Write prompts that consistently get professional-grade results. The single most valuable skill in the AI eraand one most people never learn properly.',
    icon: 'auto_awesome',
    topics: ['Prompt Structure', 'Iteration Loops', 'Output Control']
  },
  {
    week: 3,
    title: 'Product Planning',
    description: "Turn a raw idea into a complete product plan using Claude. Write your Product Requirements Document and define your MVP scope before touching a builder.",
    icon: 'description',
    topics: ['PRD Writing', 'MVP Scoping', 'Feature Prioritization']
  },
  {
    week: 4,
    title: 'UX & User Flows',
    description: 'Map every screen and user interaction before you build a single thing. Think like a product designerunderstand flows, states, and the happy path.',
    icon: 'account_tree',
    topics: ['Screen Mapping', 'User Flows', 'Wireframing with AI']
  },
  {
    week: 5,
    title: 'Build with Lovable',
    description: 'Build a full, production-quality web application connected to a real databasewithout writing a single line of code. From zero to working product.',
    icon: 'rocket_launch',
    topics: ['Lovable IDE', 'Supabase Database', 'Zero-code Dev']
  },
  {
    week: 6,
    title: 'Test & Polish',
    description: 'QA your app like a professional. Hunt edge cases, improve empty states, tighten error handling, and raise the quality bar before you ship.',
    icon: 'verified',
    topics: ['QA Testing', 'Edge Cases', 'UI Polish']
  },
  {
    week: 7,
    title: 'Deploy to Production',
    description: "Ship your app to a real URL on the internet. Vercel setup, environment variables, custom domaineverything needed to go from local to live.",
    icon: 'cloud_upload',
    topics: ['Vercel Deploy', 'Domain Setup', 'Production Checklist']
  },
  {
    week: 8,
    title: 'Daily AI Partnership',
    description: 'Build the daily habit of using Claude for all your workemails, research, analysis, strategy, writing. Make AI an invisible layer across everything you do.',
    icon: 'workspace_premium',
    topics: ['Daily Workflows', 'Work Integration', 'Habit Building']
  },
  {
    week: 9,
    title: 'Capstone & Demo Day',
    description: "Present your live product. Get structured peer feedback. Write your LinkedIn post. Leave with a portfolio piece, a resume line, and a clear next chapter.",
    icon: 'campaign',
    topics: ['Live Demo', 'LinkedIn Post', 'Career Portfolio']
  }
];
