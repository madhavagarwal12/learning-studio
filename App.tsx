
import React, { useState } from 'react';
import { TESTIMONIALS, FAQ_DATA, CURRICULUM } from './constants';
import SectionHeading from './components/SectionHeading';
import FadeIn from './components/FadeIn';
import EnrollmentForm from './components/EnrollmentForm';
import HeroImage from './components/images/Group 1.png';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ) => {
    scrollToSection(e, id);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#8B1538] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl nohemi-extrabold tracking-tighter uppercase text-neutral-900">Learning Studio</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm nohemi-medium tracking-wide">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-neutral-600 hover:text-[#8B1538] transition-colors">PROCESS</a>
            <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="text-neutral-600 hover:text-[#8B1538] transition-colors">CURRICULUM</a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-neutral-600 hover:text-[#8B1538] transition-colors">RESULTS</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-neutral-600 hover:text-[#8B1538] transition-colors">FAQ</a>
            <button 
              onClick={(e) => scrollToSection(e as any, 'enroll')}
              className="bg-[#8B1538] hover:bg-[#A0153E] text-white px-6 py-2 rounded-sm nohemi-bold transition-all transform hover:scale-105"
            >
              RESERVE SPOT
            </button>
          </div>
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-icons-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="max-w-7xl mx-auto mt-4 md:hidden">
            <div className="flex flex-col space-y-2 text-sm nohemi-medium tracking-wide">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="py-2 text-neutral-700 hover:text-[#8B1538] transition-colors"
              >
                PROCESS
              </a>
              <a
                href="#curriculum"
                onClick={(e) => handleNavClick(e, 'curriculum')}
                className="py-2 text-neutral-700 hover:text-[#8B1538] transition-colors"
              >
                CURRICULUM
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className="py-2 text-neutral-700 hover:text-[#8B1538] transition-colors"
              >
                RESULTS
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, 'faq')}
                className="py-2 text-neutral-700 hover:text-[#8B1538] transition-colors"
              >
                FAQ
              </a>
              <button
                onClick={(e) => handleNavClick(e, 'enroll')}
                className="mt-2 bg-[#8B1538] hover:bg-[#A0153E] text-white px-6 py-3 rounded-sm nohemi-bold transition-all"
              >
                RESERVE SPOT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Decorative background element for light mode */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#8B1538]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#8B1538] rounded-full animate-pulse"></span>
                <span className="text-xs nohemi-medium tracking-widest uppercase text-neutral-600">Next batch starting soon • Limited to 5 seats</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl nohemi-extrabold leading-tight mb-6 text-neutral-900">
                Automate <br />
                <span className="text-[#8B1538]">with AI.</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 nohemi-regular mb-8 max-w-xl leading-relaxed">
                Master Prompt Engineering, AI Agent orchestration, and SaaS building. Streamline workflows with N8N and launch production-ready AI solutions. Learn live, 1-on-5.
              </p>

              {/* Course Stats Bar */}
              <div className="flex flex-wrap gap-8 mb-10 border-y border-neutral-200 py-6">
                <div>
                  <div className="text-[10px] nohemi-medium text-neutral-500 uppercase tracking-widest mb-1">Instructor</div>
                  <div className="nohemi-bold text-lg text-neutral-900">Madhav Agarwal</div>
                </div>
                <div>
                  <div className="text-[10px] nohemi-medium text-neutral-500 uppercase tracking-widest mb-1">Duration</div>
                  <div className="nohemi-bold text-lg text-neutral-900">4 Weeks</div>
                </div>
                <div>
                  <div className="text-[10px] nohemi-medium text-neutral-500 uppercase tracking-widest mb-1">Investment</div>
                  <div className="nohemi-bold text-lg text-neutral-900">₹15,000</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={(e) => scrollToSection(e as any, 'enroll')}
                  className="bg-[#8B1538] hover:bg-[#A0153E] text-white px-10 py-5 rounded-sm nohemi-extrabold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(139,21,56,0.2)]"
                >
                  SECURE YOUR SEAT
                </button>
                <button 
                   onClick={(e) => scrollToSection(e as any, 'curriculum')}
                   className="bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 px-10 py-5 rounded-sm nohemi-bold text-lg transition-all flex items-center justify-center space-x-2 text-neutral-900"
                >
                  <span className="material-icons-outlined">play_circle</span>
                  <span>VIEW SYLLABUS</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: 'terminal', label: 'Prompt Eng.' },
                  { icon: 'smart_toy', label: 'AI Agents' },
                  { icon: 'layers', label: 'SaaS Building' },
                  { icon: 'event', label: 'Weekends Only' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start space-y-2">
                    <span className="material-icons-outlined text-[#8B1538]">{item.icon}</span>
                    <span className="text-xs nohemi-medium text-neutral-500 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#8B1538]/10 blur-2xl group-hover:bg-[#8B1538]/20 transition-all duration-500"></div>
              <div className="relative aspect-video bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src={HeroImage}
                  alt="Learning Studio AI Automation Hero"
                  className="w-full h-full object-cover opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#8B1538] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                    <span className="material-icons-outlined text-4xl text-white">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] nohemi-medium tracking-widest border border-neutral-200 text-neutral-800">
                  N8N AGENTIC WORKFLOW [S7]
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 bg-neutral-50 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="The Live Advantage" 
            subtitle="Build SaaS-ready automation systems and AI agents with real-time guidance from Madhav Agarwal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: 'chat', 
                title: 'Prompt Engineering', 
                desc: 'Master the core skill of the AI era. Learn advanced prompting techniques to get perfect results every time.' 
              },
              { 
                icon: 'smart_toy', 
                title: 'AI Agent Design', 
                desc: 'Build autonomous agents that can think, browse, and execute tasks across 400+ applications using N8N.' 
              },
              { 
                icon: 'layers', 
                title: 'SaaS Blueprinting', 
                desc: 'Understand how to package your AI automations into scalable SaaS solutions with commercial potential.' 
              },
              { 
                icon: 'build', 
                title: 'Vibe Coding', 
                desc: 'Implement AI in real scenarios. Develop an Auto Email Responder and other solutions you can deploy immediately.' 
              },
              { 
                icon: 'visibility', 
                title: 'Live Debugging', 
                desc: 'Debug your agents with the group. Learn from shared challenges and diverse implementation strategies.' 
              },
              { 
                icon: 'verified', 
                title: 'Lifetime Support', 
                desc: 'Join our Discord and Skool communities for ongoing mentorship and monthly calls after graduation.' 
              }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="p-8 border border-neutral-200 bg-white hover:border-[#8B1538]/40 hover:shadow-xl transition-all duration-500 h-full group">
                  <span className="material-icons-outlined text-[#8B1538] text-4xl mb-6 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                  <h3 className="text-2xl nohemi-bold mb-4 text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-600 nohemi-regular leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 md:py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="9-Session Syllabus" 
            subtitle="The definitive roadmap for Prompt Engineering, AI Agents, and SaaS Building. Total implementation focus."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CURRICULUM.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className={`flex bg-white border transition-all group overflow-hidden ${item.week === 9 ? 'border-[#8B1538]/20 bg-[#8B1538]/5' : 'border-neutral-200 hover:border-[#8B1538]/30 hover:shadow-lg'}`}>
                  <div className="w-16 md:w-24 bg-neutral-50 flex flex-col items-center justify-center border-r border-neutral-200">
                    <span className="text-xs nohemi-medium text-neutral-400 mb-1">SESSION</span>
                    <span className="text-3xl nohemi-extrabold text-[#8B1538]">{item.week}</span>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="material-icons-outlined text-neutral-400 text-sm">{item.icon}</span>
                      <h4 className="text-xl nohemi-bold tracking-tight text-neutral-900">{item.title}</h4>
                      {item.week === 9 && <span className="text-[9px] nohemi-bold bg-[#8B1538] text-white px-2 py-0.5 rounded-full uppercase tracking-widest">Optional</span>}
                    </div>
                    <p className="text-neutral-600 nohemi-regular text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, tidx) => (
                        <span key={tidx} className="px-3 py-1 bg-neutral-100 text-[10px] nohemi-medium text-neutral-500 uppercase tracking-widest border border-neutral-200">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-40 bg-neutral-50 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Success Stories" 
            subtitle="See how our graduates leveraged AI to pivot careers and build their own SaaS agencies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.id} delay={idx * 150}>
                <div className="bg-white p-10 border border-neutral-200 relative group hover:border-[#8B1538]/20 hover:shadow-xl transition-all h-full flex flex-col shadow-sm">
                  <span className="material-icons-outlined absolute top-6 right-8 text-[#8B1538]/10 text-6xl group-hover:text-[#8B1538]/20 transition-all">format_quote</span>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#8B1538]">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="nohemi-bold text-lg text-neutral-900">{t.name}</h5>
                      <p className="text-[10px] nohemi-medium text-neutral-500 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 nohemi-regular italic leading-relaxed relative z-10 flex-1">
                    "{t.content}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-40 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Program Details" />
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="border-b border-neutral-100">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left hover:text-[#8B1538] transition-colors group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className={`text-lg md:text-xl nohemi-medium ${openFaq === idx ? 'text-[#8B1538]' : 'text-neutral-800'}`}>
                    {faq.question}
                  </span>
                  <span className="material-icons-outlined transition-transform duration-300 text-neutral-400" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{ maxHeight: openFaq === idx ? '400px' : '0', opacity: openFaq === idx ? 1 : 0 }}
                >
                  <p className="pb-8 text-neutral-600 nohemi-regular leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#8B1538]/5 blur-3xl rounded-full"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl nohemi-extrabold mb-8 tracking-tighter text-neutral-900">
              Stop Learning.<br />Start <span className="text-[#8B1538]">Automating.</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 nohemi-regular mb-12 max-w-2xl mx-auto leading-relaxed">
              Limited to 5 students per batch. Apply now for the next cohort and start your AI transition.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={(e) => scrollToSection(e as any, 'enroll')}
                className="w-full md:w-auto bg-[#8B1538] hover:bg-[#A0153E] text-white px-12 py-6 rounded-sm nohemi-extrabold text-xl transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(139,21,56,0.3)]"
              >
                JOIN THE BATCH
              </button>
              <div className="flex items-center space-x-6 text-sm nohemi-medium tracking-widest text-neutral-500">
                <span className="flex items-center space-x-1">
                  <span className="material-icons-outlined text-[#8B1538] text-sm">check_circle</span>
                  <span>100% LIVE</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="material-icons-outlined text-[#8B1538] text-sm">check_circle</span>
                  <span>₹15,000</span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-24 md:py-40 px-6 bg-neutral-50 scroll-mt-20 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <EnrollmentForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-lg nohemi-extrabold tracking-tighter uppercase text-neutral-900">Learning Studio</span>
            </div>
            <p className="text-sm text-neutral-500 nohemi-regular max-w-xs">
              Live, personalized 1-on-5 sessions to master the future of AI automation.
            </p>
            <div className="text-xs nohemi-medium text-neutral-400 uppercase tracking-[0.2em] pt-4">
              © 2024 Learning Studio. All rights reserved.
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h6 className="text-xs nohemi-bold uppercase tracking-widest text-neutral-400">Contact Details</h6>
            <div className="space-y-4">
              <a href="tel:9587276261" className="flex items-center space-x-3 text-neutral-600 hover:text-[#8B1538] transition-colors group">
                <span className="material-icons-outlined text-sm text-[#8B1538]">phone</span>
                <span className="nohemi-medium">9587276261</span>
              </a>
              <a href="mailto:autopilotstudiojpr@gmail.com" className="flex items-center space-x-3 text-neutral-600 hover:text-[#8B1538] transition-colors group">
                <span className="material-icons-outlined text-sm text-[#8B1538]">email</span>
                <span className="nohemi-medium">autopilotstudiojpr@gmail.com</span>
              </a>
              <a href="https://autopilot-studio.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-neutral-600 hover:text-[#8B1538] transition-colors group">
                <span className="material-icons-outlined text-sm text-[#8B1538]">public</span>
                <span className="nohemi-medium">autopilot-studio.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:items-end">
            <h6 className="text-xs nohemi-bold uppercase tracking-widest text-neutral-400">Follow Our Work</h6>
            <div className="flex space-x-6">
              <a href="https://www.youtube.com/@MadhavTheAiGuy" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#8B1538] transition-colors">
                <span className="material-icons-outlined text-2xl">smart_display</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
