
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
    content: "I built an AI automation tool during the live sessions that I've now sold to my company and three competitors—each sale in six figures. The 1-on-5 format meant I got personalized guidance on my specific use case. This course paid for itself 100x over.",
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Ayush',
    role: 'Founder, AI Automation Agency',
    content: "Right after completing the course, I launched my AI automation agency and started serving international clients through referrals. The practical project work and continuous support from the community made the transition seamless. I went from learning AI to selling AI solutions in just 2 months.",
    avatar: 'https://picsum.photos/id/177/100/100'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What experience level do I need?',
    answer: "No prior coding or technical AI knowledge required. If you can operate a PC, open YouTube, and browse websites, you're ready. This program is designed for working professionals (5+ years experience) who want to leverage AI in their careers—whether you're in sales, marketing, operations, or any other field. We start from the fundamentals and build up to implementation."
  },
  {
    question: 'How do the live sessions work?',
    answer: "We meet every Saturday and Sunday on Google Meet for 1-3 hour sessions depending on the practical work we're doing. Sessions are highly interactive—you can ask questions anytime, work on exercises in real-time, and get immediate feedback. It's not a lecture; it's a workshop where you learn by doing. The 1-on-5 ratio ensures you get personalized attention."
  },
  {
    question: "What project will I build during the course?",
    answer: "You'll build at least one AI project tailored to your goals—decided during our discovery call before the sessions start. Past students have built SaaS tools, AI agents, CRM systems, portfolio websites with AI features, and automation workflows. You build individually with my guidance, but you can also collaborate with other students on additional projects if you'd like. I'll support you on your project even after sessions."
  },
  {
    question: 'What if I miss a session?',
    answer: "All sessions are recorded and available to you. However, live attendance is strongly encouraged because the real value comes from asking questions, doing practicals together, and getting real-time feedback. Recordings are there as a backup, not a replacement."
  },
  {
    question: 'What tools and software will I need?',
    answer: "Just a laptop (Mac or PC, doesn't matter) and internet connection. We'll work with various AI tools like ChatGPT for text, Gemini for documents/images, AI Studio for video generation, and more. Most work happens on cloud servers, so your computer specs don't matter. You can start with free versions of most tools—I'll guide you on what you need as we progress."
  },
  {
    question: "How long is the program and what's the time commitment?",
    answer: "Minimum 8 core live sessions over 4 weeks (2 sessions per weekend). Some batches include an optional 9th session for pitching. Expect to invest 8-12 hours per week total including practice between sessions. We keep batches small (5 students max) to maintain quality."
  },
  {
    question: 'What support do I get after the course?',
    answer: "Lifetime access to our Discord community with monthly calls and workshops. I come online twice a week on Discord for open discussions and questions. You also get lifetime access to our premium Skool community. The learning doesn't stop after the sessions—you'll have ongoing support as you implement and grow."
  },
  {
    question: "What's your refund and batch switching policy?",
    answer: "50% refund is available only after the first session if you feel it's not the right fit. No batch switching is allowed once you start, as each group develops its own dynamic and pace. This ensures a consistent learning experience for your cohort."
  }
];

export const CURRICULUM: Module[] = [
  {
    week: 1,
    title: 'Foundations & Myths',
    description: 'Intro, goal discussion, and debunking common AI misconceptions to set a clear learning path.',
    icon: 'psychology',
    topics: ['Goal Alignment', 'Myth Busting', 'AI Landscape']
  },
  {
    week: 2,
    title: 'Prompt Engineering',
    description: 'Mastering the art of communication with AI. Advanced prompting for Agents and SaaS content.',
    icon: 'auto_awesome',
    topics: ['Advanced Prompting', 'AI Content Detection', 'Iterative Refinement']
  },
  {
    week: 3,
    title: 'Gen AI',
    description: 'Deep dive into content generation across Text, Audio, Video, Images, and Documents.',
    icon: 'brush',
    topics: ['Multi-modal Generation', 'Asset Creation', 'Model Selection']
  },
  {
    week: 4,
    title: 'Vibe Coding (Main project)',
    description: 'Implementing AI in real-life scenarios. Blueprinting your SaaS project architecture and norms.',
    icon: 'rocket',
    topics: ['SaaS Blueprinting', 'Ethics & Norms', 'Project Architecting']
  },
  {
    week: 5,
    title: 'The N8N Engine',
    description: 'Introduction to N8N automation and the complete installation process.',
    icon: 'account_tree',
    topics: ['N8N Basics', 'Installation', 'Workflow Logic']
  },
  {
    week: 6,
    title: 'Workflow Architecture',
    description: 'Mastering Basic Nodes and leveraging pre-built workflows for rapid development.',
    icon: 'settings_input_component',
    topics: ['Basic Nodes', 'Workflow Templates', 'Error Handling']
  },
  {
    week: 7,
    title: 'System Building (AI Agents)',
    description: 'Building custom solutions with N8N and delegating tasks to autonomous AI Agents.',
    icon: 'smart_toy',
    topics: ['Agent Orchestration', 'Task Delegation', 'Agentic Logic']
  },
  {
    week: 8,
    title: 'Project Submission and Deployment',
    description: 'Building the Auto Email Responder. Finalizing your production-ready SaaS solution.',
    icon: 'verified',
    topics: ['SaaS Deployment', 'Live Testing', 'Debugging']
  },
  {
    week: 9,
    title: 'Pitch & Deploy (Optional)',
    description: 'Optional advanced session: Pitching your SaaS/Agent solution and deploying it for an external client.',
    icon: 'campaign',
    topics: ['Solution Pitching', 'Client Deployment', 'Freelancing Roadmap']
  }
];
