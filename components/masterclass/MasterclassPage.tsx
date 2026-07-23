
import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';
import { useCountdown } from './useCountdown';
import ClaudeLogo from '../images/masterclass/claude-logo.png';
import GeminiLogo from '../images/masterclass/gemini-logo.png';
import AiStudioLogo from '../images/masterclass/ai-studio-logo.png';
import SupabaseLogo from '../images/masterclass/supabase-logo.png';
import VercelLogo from '../images/masterclass/vercel-logo.png';
import GithubLogo from '../images/masterclass/github-logo.png';
import ProofSaas from '../images/masterclass/proof-saas-dashboard.png';
import ProofFintech from '../images/masterclass/proof-fintech-dashboard.png';
import ProofEcommerce from '../images/masterclass/proof-ecommerce-dashboard.png';
import ProofCrm from '../images/masterclass/proof-crm-dashboard.png';

const MASTER_MODULES = [
  { icon: 'auto_fix_high', title: 'Modernize Legacy Sites', desc: 'Transform old, clunky websites into modern, high-converting digital experiences.' },
  { icon: 'palette', title: 'Inspiration to UI/UX', desc: 'Generate professional UI/UX designs instantly from any online inspiration or screenshot.' },
  { icon: 'rocket_launch', title: 'Deploy with Custom Domains', desc: 'Build and deploy fully functional websites with your own custom branding and domains.' },
  { icon: 'analytics', title: 'Excel to Dashboards', desc: 'Convert raw Excel sheets into interactive KPIs and visual business dashboards.' },
  { icon: 'calculate', title: 'Automated Metrics', desc: 'Calculate sales, growth, and key performance metrics automatically with AI logic.' },
  { icon: 'cloud_done', title: 'Secure Cloud Hosting', desc: 'Set up secure cloud hosting for team access and real-time collaboration.' },
];

const BONUS_KIT = [
  { icon: 'menu_book', title: 'Prompt Engineering Guide' },
  { icon: 'account_tree', title: 'AI Development Workflow' },
  { icon: 'list_alt', title: 'AI Tools Directory' },
  { icon: 'library_books', title: 'Prompt Templates Library' },
];

const TOOLS = [
  { logo: ClaudeLogo, name: 'Claude', desc: 'The "Brain" for logic.' },
  { logo: GeminiLogo, name: 'Gemini', desc: 'The "Architect" for multi-modal context.' },
  { logo: AiStudioLogo, name: 'AI Studio', desc: 'The "Workshop" for prompt engineering.' },
  { logo: SupabaseLogo, name: 'Supabase', desc: 'The "Storage" for data.' },
  { logo: VercelLogo, name: 'Vercel', desc: 'The "Engine" for hosting and deployment.' },
  { logo: GithubLogo, name: 'GitHub', desc: 'The "Safe" for version control.' },
];

const PROOF_ITEMS = [
  { image: ProofSaas, title: 'SaaS Analytics Dashboard' },
  { image: ProofFintech, title: 'Fintech Portfolio Tracker' },
  { image: ProofEcommerce, title: 'E-commerce Sales Platform' },
  { image: ProofCrm, title: 'CRM Pipeline Tool' },
];

const FOR_YOU = [
  "You have an idea and you're done waiting for a \"technical co-founder\" to show up.",
  'You want to build something once and have it keep working for you.',
  "You're willing to follow a real, step-by-step build process, not just watch someone else build.",
  'You want a finished, working product at the end—not just a certificate.',
];

const NOT_FOR_YOU = [
  'You\'re looking for a "get rich quick" button.',
  'You want theory and inspiration, not actual building.',
  "You're not willing to sit down and build, step by step, alongside the session.",
  'You already have a technical co-founder or dev team handling this for you.',
];

const ORIGINAL_PRICE = 999;
const PRICE = 499;

const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8FF32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4545" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MasterclassPage: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStickyBarDismissed, setIsStickyBarDismissed] = useState(false);
  const priceTimer = useCountdown(15 * 60);
  const cartTimer = useCountdown(10 * 60);
  const stickyBarTimer = useCountdown(10 * 60);

  return (
    <div className="min-h-screen bg-[#08090C] text-white font-['DM_Sans'] antialiased selection:bg-[#C8FF32] selection:text-[#08090C] pb-24">
      {/* Announcement bar */}
      <div className="bg-[#C8FF32] text-[#08090C] py-3 px-6 text-center border-b border-white/10">
        <span className="font-bold uppercase tracking-[0.1em] text-[12px]">
          ⚡ Live, hands-on session. No upsells. No recordings-only fluff.
        </span>
      </div>

      {/* Header */}
      <header className="bg-[#08090C]/90 backdrop-blur-md w-full border-b border-[#2A2D40]">
        <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
          <div className="text-[22px] font-['Instrument_Serif'] font-bold text-white">
            Learning <span className="text-[#C8FF32] italic">Studio</span>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="bg-[#C8FF32] text-[#08090C] px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-[13px] hover:opacity-90 transition-all"
          >
            Reserve Seat
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 px-6 overflow-hidden relative">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <h1 className="text-[40px] md:text-[64px] mb-6 leading-[1.1] tracking-tight font-['Instrument_Serif']">
                Build Real Business <span className="text-[#C8FF32] italic">Websites &amp; Dashboards</span> with AI
              </h1>
              <p className="text-[18px] text-[#A1A1A1] mb-10 max-w-xl mx-auto lg:mx-0">
                A focused, live 1:1 session to master the exact workflow for building, deploying, and shipping high-value business tools using AI—no coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full sm:w-auto bg-[#C8FF32] text-[#08090C] px-8 py-5 rounded-xl font-bold text-[18px] hover:opacity-90 transition-all uppercase tracking-tight"
                >
                  Pay ₹{PRICE} and Book My Seat →
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="text-[#A1A1A1] line-through text-[15px]">₹{ORIGINAL_PRICE}</span>
                <span className="bg-[#FF4545] text-white px-2 py-0.5 text-[10px] font-bold uppercase">50% off launch price</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-[#A1A1A1]">
                <span className="flex items-center gap-1.5 text-[14px] font-medium">
                  <span className="material-symbols-outlined text-[#C8FF32] text-[20px]">videocam</span>
                  Live on Google Meet
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="relative border border-[#2A2D40] shadow-2xl overflow-hidden">
                <img src={ProofSaas} alt="Live workshop preview" className="w-full h-full object-cover aspect-video opacity-90" />
              </div>
            </div>
          </div>
        </section>

        {/* Proof of Execution */}
        <section className="py-16 md:py-24 bg-[#08090C] overflow-hidden border-b border-[#2A2D40]">
          <div className="max-w-[1280px] mx-auto px-6 mb-12 text-center lg:text-left">
            <h2 className="text-[36px] md:text-[48px] font-['Instrument_Serif'] italic leading-tight">Proof of Execution</h2>
            <p className="text-[18px] text-[#A1A1A1] mt-2">Real business tools built by students in previous live sessions.</p>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="marquee-track gap-6 px-6">
              {[...PROOF_ITEMS, ...PROOF_ITEMS].map((item, i) => (
                <div key={i} className="w-[320px] flex-shrink-0 bg-[#13151D] border border-[#2A2D40] p-4 group">
                  <div className="block overflow-hidden mb-4 aspect-video border border-[#2A2D40]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[#C8FF32] text-[11px] font-bold uppercase tracking-widest">Built in a live session</span>
                    <h4 className="text-white font-bold text-[16px] leading-tight">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Master */}
        <section className="py-16 md:py-24 px-6 bg-[#08090C] border-b border-[#2A2D40]" id="curriculum">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[48px] mb-4 italic font-['Instrument_Serif'] leading-tight">What You'll Master in the Session</h2>
              <p className="text-[16px] text-[#C8FF32] font-medium uppercase tracking-widest">From raw idea to live, data-driven business tool</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#2A2D40]">
              {MASTER_MODULES.map((m, i) => (
                <div key={i} className="border-r border-b border-[#2A2D40] p-8 md:p-10 bg-[#13151D]/30">
                  <span className="material-symbols-outlined text-[#C8FF32] mb-6 text-4xl block">{m.icon}</span>
                  <h4 className="font-['Instrument_Serif'] text-[24px] mb-3 leading-tight">{m.title}</h4>
                  <p className="text-[#A1A1A1] text-[15px]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Resource Kit */}
        <section className="py-16 md:py-24 px-6 bg-[#08090C]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#C8FF32] font-bold uppercase tracking-[0.2em] text-[12px] mb-4 block">Free Bonus</span>
              <h2 className="text-[36px] md:text-[48px] mb-4 italic font-['Instrument_Serif']">The AI Builder Resource Kit</h2>
              <p className="text-[16px] text-[#8B8FA3]">Included with every booking, at no extra cost.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-t border-[#2A2D40]">
              {BONUS_KIT.map((b, i) => (
                <div key={i} className="border-r border-b border-[#2A2D40] p-8 md:p-10 flex flex-col items-start text-left bg-[#13151D]/20">
                  <span className="material-symbols-outlined text-[#C8FF32] text-4xl mb-6">{b.icon}</span>
                  <h4 className="font-['Instrument_Serif'] text-[20px] mb-2 leading-tight">{b.title}</h4>
                  <p className="text-[13px] uppercase tracking-widest text-[#8B8FA3]">PDF Guide</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 md:py-24 px-6 bg-[#08090C]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] mb-10 italic font-['Instrument_Serif']">"Let's be honest…"</h2>
            <div className="space-y-6 text-[17px] text-white leading-relaxed text-left">
              <ul className="space-y-4 list-none">
                <li className="pl-2 border-l-2 border-[#2A2D40]">You've watched hours of YouTube tutorials, followed along perfectly, and still ended up with a broken app and a browser full of error messages.</li>
                <li className="pl-2 border-l-2 border-[#2A2D40]">You've had an idea sitting in your Notes app for months because "I'm not technical enough to build it" keeps winning the argument.</li>
                <li className="pl-2 border-l-2 border-[#2A2D40]">You've finished an "AI course" that taught you how to write better prompts—but you still can't explain how to actually launch something people can use.</li>
              </ul>
              <p>The gap isn't coding skill. It's not money.</p>
              <p className="text-[24px] font-['Instrument_Serif'] italic">It's knowing the exact workflow.</p>
              <p className="bg-[#C8FF32]/5 p-8 border-l-4 border-[#C8FF32] italic font-['Instrument_Serif'] text-[20px] leading-snug">
                In this live session, we bypass the fluff and focus on the <span className="font-bold underline decoration-[#C8FF32]">Execution Engine</span>—the specific steps that turn a conceptual idea into a live URL that people can actually use.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Stack */}
        <section className="py-16 md:py-24 px-6 bg-[#0D0F16]" id="process">
          <div className="max-w-[1280px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[48px] mb-4 italic font-['Instrument_Serif']">You Just Need These <span className="text-[#C8FF32] underline decoration-2">FREE</span> Tools</h2>
            <p className="text-[16px] text-[#8B8FA3] font-medium uppercase tracking-widest mb-16">Total setup cost: ₹0</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#2A2D40]">
              {TOOLS.map((t, i) => (
                <div key={i} className="border-r border-b border-[#2A2D40] p-10 flex flex-col items-center text-center bg-[#08090C]">
                  <div className="w-16 h-16 flex items-center justify-center mb-6">
                    <img src={t.logo} alt={t.name} className="w-14 h-14 object-contain" />
                  </div>
                  <h4 className="font-['Instrument_Serif'] text-[26px] mb-2 italic">{t.name}</h4>
                  <p className="text-[#A1A1A1] text-[15px]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 md:py-24 px-6 bg-[#08090C]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[48px] italic font-['Instrument_Serif']">How We Compare</h2>
            </div>
            <div className="overflow-hidden border border-[#2A2D40]">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#13151D] text-white">
                      <th className="p-6 font-['Instrument_Serif'] text-[20px]">Feature</th>
                      <th className="p-6 font-['Instrument_Serif'] text-[20px]">Typical Courses</th>
                      <th className="p-6 font-['Instrument_Serif'] text-[20px] text-[#C8FF32] italic">Learning Studio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A2D40] bg-[#08090C]">
                    <tr>
                      <td className="p-6 font-bold uppercase tracking-tight text-[13px]">Price</td>
                      <td className="p-6 text-[15px] text-[#A1A1A1]">₹999 – ₹4,999</td>
                      <td className="p-6 font-bold text-[18px]">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[#A1A1A1] line-through text-[14px]">₹{ORIGINAL_PRICE}</span>
                            <span className="text-[#C8FF32] text-[20px]">₹{PRICE}</span>
                          </div>
                          <div className="bg-[#C8FF32]/10 border border-[#C8FF32]/20 px-3 py-1.5 rounded-lg inline-flex items-center gap-2 w-fit">
                            <span className="material-symbols-outlined text-[#C8FF32] text-[14px]">timer</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8FF32]">Offer expires in: {priceTimer}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold uppercase tracking-tight text-[13px]">Format</td>
                      <td className="p-6 text-[15px] text-[#A1A1A1]">30+ hours of video</td>
                      <td className="p-6 font-bold text-[16px]">Live 1:1 session</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold uppercase tracking-tight text-[13px]">Tool Stack</td>
                      <td className="p-6 text-[15px] text-[#A1A1A1]">Paid subscriptions</td>
                      <td className="p-6 font-bold text-[16px]">100% free tools</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold uppercase tracking-tight text-[13px]">End Result</td>
                      <td className="p-6 text-[#A1A1A1] text-[15px]">Certificate (PDF)</td>
                      <td className="p-6 font-bold text-[#C8FF32] text-[16px] underline decoration-2">A live, working product</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 md:py-24 px-6 bg-[#0D0F16]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[32px] md:text-[40px] mb-10 italic font-['Instrument_Serif']">This Is For You If…</h2>
              <ul className="space-y-6">
                {FOR_YOU.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 flex-shrink-0"><CheckIcon /></span>
                    <p className="text-[#8B8FA3]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#08090C] p-10 border border-[#2A2D40]">
              <h2 className="text-[26px] font-['Instrument_Serif'] mb-8 text-[#FF4545] italic">This Is NOT For You If…</h2>
              <ul className="space-y-5 text-[#8B8FA3] text-[16px]">
                {NOT_FOR_YOU.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0"><CrossIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Checkout CTA */}
        <section className="py-16 md:py-24 px-6 bg-[#08090C]" id="checkout">
          <div className="max-w-3xl mx-auto bg-[#13151D] border border-[#2A2D40] overflow-hidden">
            <div className="bg-[#C8FF32]/5 p-5 flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-[#2A2D40]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#C8FF32] text-[24px]">timer</span>
                <span className="text-[16px] md:text-[20px] font-['Instrument_Serif'] italic uppercase tracking-widest">
                  Cart expires in: <span className="text-[#C8FF32] font-bold not-italic">{cartTimer}</span>
                </span>
              </div>
              <div className="text-[#8B8FA3] text-[13px] font-bold uppercase tracking-widest">Limited seats per cohort</div>
            </div>
            <div className="p-10 md:p-16 text-center">
              <h2 className="text-[32px] md:text-[44px] mb-6 italic font-['Instrument_Serif']">Ready to Build?</h2>
              <p className="text-[#A1A1A1] text-[16px] mb-6 max-w-md mx-auto">Live 1:1 session on Google Meet, session recording available as an add-on, and the full AI Builder Resource Kit included.</p>
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-[#A1A1A1] line-through text-[16px]">₹{ORIGINAL_PRICE}</span>
                <span className="bg-[#FF4545] text-white px-2 py-0.5 text-[10px] font-bold uppercase">50% off launch price</span>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="bg-[#C8FF32] text-[#08090C] px-10 py-5 rounded-xl font-bold text-[18px] uppercase tracking-tight hover:opacity-90 transition-all"
              >
                Pay ₹{PRICE} and Book My Seat →
              </button>
              <p className="text-[#8B8FA3] text-[12px] uppercase tracking-widest mt-6">Limited seats per cohort</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#08090C] text-white w-full py-16 border-t border-[#2A2D40]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-[1280px] mx-auto">
          <div>
            <div className="text-[24px] font-['Instrument_Serif'] font-bold mb-6 italic">
              Learning <span className="text-[#C8FF32]">Studio</span>
            </div>
            <p className="text-[15px] text-[#8B8FA3] leading-relaxed">
              Empowering the next generation of AI-first builders.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8FF32]">Session</h5>
            <a href="#curriculum" className="text-[15px] text-[#8B8FA3] hover:text-white transition-colors">What You'll Master</a>
            <a href="#process" className="text-[15px] text-[#8B8FA3] hover:text-white transition-colors">Tool Stack</a>
            <a href="#checkout" className="text-[15px] text-[#8B8FA3] hover:text-white transition-colors">Reserve a Seat</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8FF32]">Connect</h5>
            <a href="mailto:autopilotstudiojpr@gmail.com" className="text-[15px] text-[#8B8FA3] hover:text-white transition-colors">autopilotstudiojpr@gmail.com</a>
            <a href="tel:9587276261" className="text-[15px] text-[#8B8FA3] hover:text-white transition-colors">9587276261</a>
          </div>
        </div>
      </footer>

      {/* Sticky bottom buy bar */}
      {!isStickyBarDismissed && (
        <div className="fixed bottom-0 left-0 w-full bg-[#08090C]/95 backdrop-blur-md border-t border-[#C8FF32] z-[100] py-4 px-6">
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-[#C8FF32]">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <span className="font-bold uppercase tracking-wider text-[12px]">Launch Price Active</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#A1A1A1] line-through text-[15px]">₹{ORIGINAL_PRICE}</span>
                <span className="text-[#C8FF32] text-[22px] font-bold font-['Instrument_Serif']">₹{PRICE}</span>
                <div className="hidden md:flex items-center gap-1.5 bg-[#C8FF32]/10 border border-[#C8FF32]/20 px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-[#C8FF32] text-[14px]">timer</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8FF32]">Expires in {stickyBarTimer}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="flex-1 sm:flex-none bg-[#C8FF32] text-[#08090C] px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-[14px] hover:opacity-90 transition-all text-center"
              >
                Pay ₹{PRICE} and Book My Seat →
              </button>
              <button
                onClick={() => setIsStickyBarDismissed(true)}
                aria-label="Dismiss"
                className="text-[#8B8FA3] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};

export default MasterclassPage;
