
import { FAQItem, Testimonial, ProblemPoint, TransformationStep, CurriculumModule, ValueStackItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Viplov',
    role: 'AI Project Manager (Former Sales Manager)',
    outcome: '40% salary hike · 8 weeks',
    content: "After being laid off from my sales role, I joined this program with uncertainty. Within 8 weeks, I transitioned into an AI Project Manager position with a 40% salary hike. The live sessions and hands-on approach gave me the confidence and skills to pivot my entire career.",
    avatar: 'https://picsum.photos/id/64/200/200'
  },
  {
    id: '2',
    name: 'Pankaj',
    role: 'Sales & AI Consultant',
    outcome: 'Sold to 4 companies · 6-figure deals',
    content: "I built an AI tool during the live sessions that I've now sold to my company and three competitors—each sale in six figures. The 1-on-5 format meant I got personalized guidance on my specific use case. This course paid for itself 100x over.",
    avatar: 'https://picsum.photos/id/91/200/200'
  },
  {
    id: '3',
    name: 'Ayush',
    role: 'Founder, AI Automation Agency',
    outcome: 'Agency launched · 2 months',
    content: "Right after completing the course, I launched my AI agency and started serving international clients through referrals. The practical project work and continuous community support made the transition seamless.",
    avatar: 'https://picsum.photos/id/177/200/200'
  }
];

export const PROBLEM_POINTS: ProblemPoint[] = [
  {
    icon: 'sync_problem',
    title: 'The YouTube Loop',
    description: 'Watching 40 hours of "How to Build an AI App" but never opening a code editor. You feel productive, but you aren’t building anything.'
  },
  {
    icon: 'dangerous',
    title: 'Tool Obsession',
    description: 'Debating between React and Next.js for three weeks while your idea dies on a napkin. Tools are means, not the end.'
  },
  {
    icon: 'sentiment_dissatisfied',
    title: 'The Shipping Fear',
    description: 'The terrifying gap between "It works on my machine" and "The first user just signed up." Most courses stop before this.'
  }
];

export const OLD_WAY = ['Mastering Syntax', 'Theoretical Projects', 'Generic "Clone" Apps', 'Solitary Learning'];
export const STUDIO_WAY = ['Product-First Thinking', 'Shipping Real SaaS', 'Custom AI Architectures', 'Collaborative Sprints'];

export const TRANSFORMATION_STEPS: TransformationStep[] = [
  { step: 1, title: 'Thinking Differently', description: 'Breaking down problems like a Product Engineer. Idea validation and wireframing.' },
  { step: 2, title: 'The AI Engine', description: 'Prompt engineering at a professional level. Building the backend logic with Claude.' },
  { step: 3, title: 'UI That Sells', description: 'Designing with Lovable. High-fidelity components without wasting months.' },
  { step: 4, title: 'Live Deployment', description: 'Supabase, Vercel, and Domain connection. The thrill of hitting ‘Publish’.' }
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    number: '01',
    icon: 'lightbulb',
    title: 'The Product Thesis',
    description: 'Learn how to identify high-value problems that can be solved with AI. Market research, competitor analysis, and creating your MVP roadmap.',
    bullets: ['TAM/SAM/SOM for AI micro-SaaS', "Creating your 'Product-First' framework", 'Building your idea backlog']
  },
  {
    number: '02',
    icon: 'psychology',
    title: 'Advanced Claude Workflows',
    description: 'Mastering Claude as your Lead Engineer. From complex prompt chaining to generating full-stack architecture.',
    bullets: ['Prompt structure & iteration loops', 'Context engineering for large codebases', 'Output control and validation']
  },
  {
    number: '03',
    icon: 'brush',
    title: 'Lovable UI Mastery',
    description: 'Building pixel-perfect interfaces at the speed of thought. Using AI to design components and layouts.',
    bullets: ['Screen mapping & user flows', 'Component-driven design in Lovable', 'Responsive layouts without CSS']
  },
  {
    number: '04',
    icon: 'account_tree',
    title: 'UX & Flow Mapping',
    description: 'Map every screen and user interaction before you build a single thing. Think like a product designer—understand flows, states, and the happy path.',
    bullets: ['Wireframing with AI', 'Empty, loading & error states', 'Information architecture']
  },
  {
    number: '05',
    icon: 'storage',
    title: 'Data & Auth with Supabase',
    description: 'Connect a real, production-grade database and authentication layer to your app—no backend code required.',
    bullets: ['Schema design for SaaS apps', 'Row-level security & auth', 'Realtime data & storage']
  },
  {
    number: '06',
    icon: 'verified',
    title: 'QA & Edge Case Hunting',
    description: 'QA your app like a professional. Hunt edge cases, improve empty states, tighten error handling, and raise the quality bar before you ship.',
    bullets: ['Systematic QA passes', 'Edge case checklists', 'UI polish & micro-interactions']
  },
  {
    number: '07',
    icon: 'cloud_upload',
    title: 'Deploy to Production',
    description: "Ship your app to a real URL on the internet. Vercel setup, environment variables, custom domain—everything needed to go from local to live.",
    bullets: ['Vercel deployment pipeline', 'Custom domain & environment setup', 'Production launch checklist']
  },
  {
    number: '08',
    icon: 'workspace_premium',
    title: 'Daily AI Partnership',
    description: 'Build the daily habit of using Claude for all your work—emails, research, analysis, strategy, writing. Make AI an invisible layer across everything you do.',
    bullets: ['Daily workflow integration', 'Habit building systems', 'AI-assisted decision making']
  },
  {
    number: '09',
    icon: 'campaign',
    title: 'Capstone & Demo Day',
    description: 'Present your live product. Get structured peer feedback. Write your LinkedIn post. Leave with a portfolio piece, a resume line, and a clear next chapter.',
    bullets: ['Live product demo', 'Structured peer feedback', 'Career portfolio & LinkedIn post']
  }
];

export const FOR_YOU = [
  'You have ideas but lack the technical skills to build them alone.',
  'You’re a designer or marketer who wants to become a "One Person SaaS".',
  'You’re tired of watching tutorials and want to ship a real product.'
];

export const NOT_FOR_YOU = [
  'You’re looking for a certificate to put on LinkedIn without building anything.',
  'You want a slow-paced academic study of Large Language Models.',
  'You aren’t ready to commit at least 10 hours a week to building.'
];

export const VALUE_STACK: ValueStackItem[] = [
  { title: '9 Sessions of Live Training', description: 'Step-by-step sessions with Madhav Agarwal' },
  { title: 'Premium SaaS Code Templates', description: 'Skip the boilerplate with our custom stack' },
  { title: 'Weekly Personalized Code Reviews', description: 'Direct feedback on your specific product' },
  { title: 'Private Builder Community', description: 'Lifetime access to our network of builders' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What experience level do I need?',
    answer: "No prior coding or technical AI knowledge required. If you can operate a PC, open YouTube, and browse websites, you're ready. This program is designed for working professionals (5+ years experience) who want to leverage AI in their careers—whether you're in sales, marketing, operations, or any other field. We start from the fundamentals and build up to shipping real software."
  },
  {
    question: 'How do the live sessions work?',
    answer: "We meet every Saturday and Sunday on Google Meet for 1–3 hour sessions depending on the practical work we're doing. Sessions are highly interactive—you can ask questions anytime, work on exercises in real-time, and get immediate feedback. It's not a lecture; it's a workshop where you learn by doing. The 1-on-5 ratio ensures you get personalized attention."
  },
  {
    question: 'What project will I build during the course?',
    answer: "You'll design and ship a complete web application—decided during our discovery call before the sessions start. Past students have built customer feedback tools, CRM dashboards, portfolio sites, client intake systems, and internal team tools. You'll go from product requirements through to a live URL, using Claude, Lovable, Supabase, and Vercel. I'll support you on your project even after graduation."
  },
  {
    question: 'What if I miss a session?',
    answer: "All sessions are recorded and available to you. However, live attendance is strongly encouraged because the real value comes from asking questions, doing practicals together, and getting real-time feedback. Recordings are there as a backup, not a replacement."
  },
  {
    question: 'What tools and software will I need?',
    answer: "Just a laptop (Mac or PC) and an internet connection. We work with Claude for AI planning and writing, Lovable for building the app interface, Supabase for the database and authentication, and Vercel for deployment. Most tools have generous free tiers to get you started—I'll guide you on what you need as we go. No downloads, no local installs."
  },
  {
    question: "How long is the program and what's the time commitment?",
    answer: "9 sessions total—8 core sessions over 4 weekends plus a Capstone & Demo Day. Expect to invest 8–12 hours per week including practice between sessions. We keep batches small (5 students max) to maintain quality and ensure every student ships a real project."
  },
  {
    question: 'What support do I get after the course?',
    answer: "Lifetime access to our Discord community with monthly calls and workshops. Madhav comes online twice a week on Discord for open discussions and questions. You also get lifetime access to our premium Skool community. The learning doesn't stop after Demo Day—you'll have ongoing support as you build and grow."
  },
  {
    question: "What's your refund and batch switching policy?",
    answer: "50% refund is available only after the first session if you feel it's not the right fit. No batch switching is allowed once you start, as each group develops its own dynamic and pace. This ensures a consistent learning experience for your cohort."
  }
];
