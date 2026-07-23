
import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS, FAQ_DATA, PROBLEM_POINTS, OLD_WAY, STUDIO_WAY, TRANSFORMATION_STEPS, CURRICULUM_MODULES, FOR_YOU, NOT_FOR_YOU, VALUE_STACK } from './constants';
import FadeIn from './components/FadeIn';
import EnrollmentForm from './components/EnrollmentForm';
import HeroImage from './components/images/Group 1.png';

const NAV_LINKS = [
  { label: 'Process', id: 'process' },
  { label: 'Curriculum', id: 'curriculum' },
  { label: 'Results', id: 'results' },
  { label: 'FAQ', id: 'faq' },
];

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllModules, setShowAllModules] = useState(false);
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({});
  const curriculumSectionRef = useRef<HTMLDivElement>(null);
  const curriculumLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = curriculumSectionRef.current;
      const line = curriculumLineRef.current;
      if (!section || !line) return;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      if (rect.top < winH && rect.bottom > 0) {
        const scrolledRatio = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
        line.style.height = `${scrolledRatio * 100}%`;
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    scrollToSection(e, id);
    setIsMobileMenuOpen(false);
  };

  const visibleModules = showAllModules ? CURRICULUM_MODULES : CURRICULUM_MODULES.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-on-background font-body antialiased selection:bg-primary selection:text-white overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled ? 'nav-scrolled bg-surface/90 backdrop-blur-md border-outline-variant/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-x flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg font-bold text-on-surface hover:text-primary transition-colors"
          >
            Learning Studio
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => scrollToSection(e, link.id)}
                className="font-label text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={e => scrollToSection(e as any, 'enroll')}
              className="btn-shimmer bg-primary text-on-primary px-6 py-2.5 rounded-full font-label text-label-md font-bold hover:scale-105 hover:shadow-xl shadow-primary/20 transition-all"
            >
              Reserve Seat
            </button>
          </div>

          <button
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/30">
            <div className="max-w-container-max mx-auto px-6 py-4 flex flex-col space-y-1">
              {NAV_LINKS.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={e => handleNavClick(e, link.id)}
                  className="font-label text-label-md text-on-surface-variant hover:text-primary py-3 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={e => handleNavClick(e as any, 'enroll')}
                className="bg-primary text-on-primary px-5 py-3 rounded-full font-label text-label-md font-bold mt-2 text-center"
              >
                Reserve Seat
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-section-gap px-6 md:px-margin-x overflow-hidden">
          <div className="max-w-container-max mx-auto text-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-label text-label-md mb-8">
                ADMISSIONS OPEN · 5 SEATS MAX
              </span>
              <h1 className="font-display text-display-lg-mobile md:text-display-xl max-w-4xl mx-auto mb-8">
                Stop Learning AI. <span className="text-primary">Start Building</span> Products People Actually Use.
              </h1>
              <p className="font-body text-body-lg text-secondary max-w-2xl mx-auto mb-12">
                A high-performance, live accelerator for working professionals. Go from conceptual theory to shipping a full-stack, AI-powered product in 9 sessions—no coding experience needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <button
                  onClick={e => scrollToSection(e as any, 'enroll')}
                  className="btn-shimmer bg-primary text-white px-9 py-4 rounded-full font-display font-bold text-base hover:scale-105 hover:shadow-xl shadow-primary/20 transition-all"
                >
                  Secure Your Seat
                </button>
                <button
                  onClick={e => scrollToSection(e as any, 'curriculum')}
                  className="px-9 py-4 rounded-full border border-outline-variant font-display font-bold text-base hover:bg-surface-container transition-all"
                >
                  View Curriculum
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative mt-16 hero-float">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20" style={{ aspectRatio: '16/9' }}>
                  <img src={HeroImage} alt="Learning Studio Live Session" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Results / Success Stories ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface-container-lowest" id="results">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <FadeIn className="max-w-xl">
                <h2 className="font-display text-headline-lg mb-4">Real People, Real Outcomes</h2>
                <p className="font-body text-body-lg text-secondary">Graduates who started with zero coding experience and used the program to pivot careers, launch agencies, and ship real products.</p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {TESTIMONIALS.map((t, idx) => (
                <FadeIn key={t.id} delay={idx * 100}>
                  <div className="group border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col bg-white">
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-on-surface">{t.name}</h3>
                          <p className="font-label text-[11px] text-secondary uppercase tracking-wide">{t.role}</p>
                        </div>
                      </div>
                      <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/5 text-primary font-label text-[11px] uppercase tracking-wide mb-4">
                        {t.outcome}
                      </span>
                      <p className="font-body text-body-md text-secondary leading-relaxed italic flex-1">"{t.content}"</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-on-background text-white" id="process">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <FadeIn direction="right">
                <div>
                  <h2 className="font-display text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
                    Tutorial Hell is a <br /><span className="text-primary-container">Building Killer.</span>
                  </h2>
                  <div className="space-y-8">
                    {PROBLEM_POINTS.map((p, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-primary-container/20 group-hover:border-primary-container/50 transition-all duration-300">
                          <span className="material-symbols-outlined text-primary-container">{p.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-display text-xl font-bold mb-2">{p.title}</h4>
                          <p className="text-white/60 font-body">{p.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={150}>
                <div className="relative group">
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 aspect-square flex flex-col justify-center hover:bg-white/10 hover:border-primary-container/30 transition-all duration-500">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-6xl text-primary-container mb-6 block group-hover:scale-110 transition-transform duration-500">directions_run</span>
                      <h3 className="font-display text-2xl font-bold mb-4">We break the cycle.</h3>
                      <p className="text-white/70 max-w-sm mx-auto">No lectures. Only shipping. We teach you the 20% of tools that get you 80% of the way to a production-ready product.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x">
          <div className="max-w-container-max mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="font-display text-headline-lg mb-6">The Learning Studio Philosophy</h2>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30 rounded-2xl overflow-hidden border border-outline-variant/30">
                <div className="bg-white p-8 md:p-12 hover:bg-surface transition-colors duration-300">
                  <h3 className="font-label text-label-md text-secondary uppercase tracking-widest mb-8">THE OLD WAY</h3>
                  <div className="space-y-6">
                    {OLD_WAY.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-secondary/60">
                        <span className="material-symbols-outlined">close</span>
                        <span className="font-body text-body-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary/5 p-8 md:p-12 hover:bg-primary/[0.08] transition-colors duration-300">
                  <h3 className="font-label text-label-md text-primary uppercase tracking-widest mb-8">THE STUDIO WAY</h3>
                  <div className="space-y-6">
                    {STUDIO_WAY.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-on-surface">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="font-body text-body-lg font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Transformation Roadmap ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto">
            <FadeIn>
              <h2 className="font-display text-headline-lg text-center mb-20">Your Builder Roadmap</h2>
            </FadeIn>
            <div className="relative flex flex-col md:flex-row justify-between gap-8">
              <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant hidden md:block -z-10" />
              {TRANSFORMATION_STEPS.map((step, i) => (
                <FadeIn key={step.step} delay={i * 80} className="flex-1">
                  <div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6">{step.step}</div>
                    <h4 className="font-display text-xl font-bold mb-3">{step.title}</h4>
                    <p className="font-body text-body-md text-secondary">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet Your Mentor ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <FadeIn direction="right" className="w-full md:w-1/2">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <img
                    alt="Madhav Agarwal Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src="https://picsum.photos/id/1005/800/1000"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={150} className="w-full md:w-1/2">
                <div>
                  <span className="font-label text-label-md text-primary mb-4 block">MEET YOUR MENTOR</span>
                  <h2 className="font-display text-display-lg-mobile md:text-display-lg mb-8">Madhav Agarwal</h2>
                  <div className="space-y-6 font-body text-body-lg text-secondary leading-relaxed">
                    <p>I didn't start as a coder. I started as a builder who was tired of waiting for technical founders to validate my ideas.</p>
                    <p>Over the last few years I've built and scaled AI-first products and taught hundreds of professionals to do the same. My edge isn't a CS degree—it's knowing exactly which tools to leverage to move at 10x speed.</p>
                    <p>Learning Studio is the program I wish I had: a high-energy environment where shipping is the only metric that matters.</p>
                  </div>
                  <div className="mt-10 pt-10 border-t border-outline-variant flex gap-12">
                    <div className="group cursor-default">
                      <div className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform">5</div>
                      <div className="font-label text-label-md text-secondary">Cohorts Run</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform">100%</div>
                      <div className="font-label text-label-md text-secondary">Ship a Live Product</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform">5</div>
                      <div className="font-label text-label-md text-secondary">Seats Per Cohort</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Curriculum ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface" id="curriculum">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-headline-lg mb-4">Deeply Practical Curriculum</h2>
                <p className="font-body text-body-lg text-secondary">Every module is designed to result in a tangible asset for your product.</p>
              </div>
            </FadeIn>
            <div className="space-y-4 relative" ref={curriculumSectionRef}>
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-outline-variant/50">
                <div ref={curriculumLineRef} className="curriculum-line w-full bg-primary origin-top" />
              </div>
              {visibleModules.map((mod, idx) => {
                const isOpen = !!openModules[idx];
                return (
                  <FadeIn key={mod.number} delay={idx * 40} className="relative pl-16 group">
                    <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-white border border-outline-variant flex items-center justify-center z-10 group-hover:border-primary group-hover:rotate-12 transition-all duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary">{mod.icon}</span>
                    </div>
                    <details
                      className="bg-white border border-outline-variant rounded-xl overflow-hidden cursor-pointer hover:shadow-md hover:bg-surface-container-lowest transition-all"
                      onToggle={e => setOpenModules(prev => ({ ...prev, [idx]: (e.target as HTMLDetailsElement).open }))}
                    >
                      <summary className="p-6 flex justify-between items-center list-none font-display text-xl font-bold">
                        <span>{mod.number}. {mod.title}</span>
                        <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                      </summary>
                      <div className="px-6 pb-6 text-secondary font-body border-t border-outline-variant/30 pt-4">
                        <p>{mod.description}</p>
                        {mod.bullets && (
                          <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                            {mod.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                          </ul>
                        )}
                      </div>
                    </details>
                  </FadeIn>
                );
              })}
              {!showAllModules && (
                <div className="text-center py-8">
                  <button
                    onClick={() => setShowAllModules(true)}
                    className="text-primary font-label text-label-md flex items-center gap-2 mx-auto hover:underline hover:scale-105 transition-transform"
                  >
                    View all 9 modules <span className="material-symbols-outlined">expand_more</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <FadeIn direction="right">
              <div className="p-8 md:p-12 bg-on-background text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full">
                <h3 className="font-display text-headline-lg mb-8">This is for you if...</h3>
                <ul className="space-y-6">
                  {FOR_YOU.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">check_circle</span>
                      <p className="font-body text-body-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={100}>
              <div className="p-8 md:p-12 border border-outline-variant rounded-2xl hover:bg-surface-container transition-all duration-500 h-full">
                <h3 className="font-display text-headline-lg mb-8">This is NOT for you if...</h3>
                <ul className="space-y-6">
                  {NOT_FOR_YOU.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="material-symbols-outlined text-error group-hover:scale-110 transition-transform">cancel</span>
                      <p className="font-body text-body-lg text-secondary">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Investment / Value Stack ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface-container-high relative overflow-hidden">
          <div className="max-w-container-max mx-auto relative z-10">
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-outline-variant max-w-4xl mx-auto flex flex-col md:flex-row hover:shadow-primary/10 transition-all duration-700">
                <div className="p-8 md:p-12 md:w-3/5 md:border-r border-outline-variant">
                  <h2 className="font-display text-headline-lg mb-8">The Studio Value Stack</h2>
                  <ul className="space-y-4 mb-12">
                    {VALUE_STACK.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <div>
                          <span className="font-bold font-display">{item.title}</span>
                          <p className="text-sm text-secondary">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 md:p-12 md:w-2/5 bg-primary text-white flex flex-col justify-between text-center transition-all duration-500">
                  <div>
                    <span className="font-label text-label-md opacity-80 uppercase tracking-widest">ENROLLMENT FEE</span>
                    <div className="mt-4 font-display text-display-lg-mobile md:text-display-lg">₹15,000</div>
                    <p className="mt-2 text-sm opacity-80">One-time payment. Lifetime value.</p>
                  </div>
                  <button
                    onClick={e => scrollToSection(e as any, 'enroll')}
                    className="btn-shimmer mt-12 w-full py-4 bg-white text-primary rounded-xl font-display font-bold text-lg hover:scale-105 transition-all shadow-xl"
                  >
                    Reserve My Seat
                  </button>
                  <p className="mt-6 text-xs opacity-60">Limited to 5 builders per cohort for quality focus.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface" id="faq">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-headline-lg mb-4">Program Details</h2>
              </div>
            </FadeIn>
            <div className="divide-y divide-outline-variant/30 border-t border-b border-outline-variant/30">
              {FAQ_DATA.map((faq, idx) => (
                <FadeIn key={idx} delay={idx * 30}>
                  <div>
                    <button
                      className="w-full py-6 flex justify-between items-center text-left gap-4"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span className={`font-display font-bold text-lg transition-colors duration-150 ${openFaq === idx ? 'text-primary' : 'text-on-surface'}`}>
                        {faq.question}
                      </span>
                      <span
                        className="material-symbols-outlined flex-shrink-0 text-secondary transition-transform duration-300"
                        style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === idx ? '400px' : '0', opacity: openFaq === idx ? 1 : 0 }}
                    >
                      <p className="pb-6 text-secondary font-body leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-16 md:py-section-gap px-6 md:px-margin-x bg-[#0F172A] text-white text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <h2 className="font-display text-display-lg-mobile md:text-display-lg mb-8">Stop waiting for the "perfect time".</h2>
            <p className="font-body text-body-lg text-white/60 mb-12">The gap between idea and execution has never been smaller. Cross it with us.</p>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <button
                onClick={e => scrollToSection(e as any, 'enroll')}
                className="btn-shimmer bg-primary px-12 py-5 rounded-full font-display font-bold text-lg hover:scale-110 transition-all shadow-2xl shadow-primary/40"
              >
                Enroll Now — ₹15,000
              </button>
              <button
                onClick={e => scrollToSection(e as any, 'curriculum')}
                className="px-12 py-5 rounded-full border border-white/20 font-display font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all"
              >
                View Curriculum
              </button>
            </div>
          </FadeIn>
        </section>

        {/* ── Enrollment form ── */}
        <section id="enroll" className="py-16 md:py-section-gap px-6 md:px-margin-x bg-surface">
          <div className="max-w-2xl mx-auto">
            <EnrollmentForm />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-surface py-16 md:py-section-gap px-6 md:px-margin-x border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
            <div className="col-span-1">
              <div className="font-display text-lg font-bold text-on-surface mb-6">Learning Studio</div>
              <p className="font-body text-body-md text-secondary">Live 1-on-5 sessions to master AI-assisted product development.</p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-label text-label-md text-on-surface font-bold uppercase">Contact</h6>
              <div className="space-y-2.5">
                {[
                  { icon: 'call', label: '9587276261', href: 'tel:9587276261' },
                  { icon: 'mail', label: 'autopilotstudiojpr@gmail.com', href: 'mailto:autopilotstudiojpr@gmail.com' },
                  { icon: 'public', label: 'autopilot-studio.com', href: 'https://autopilot-studio.com' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-secondary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">{item.icon}</span>
                    <span className="font-body text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-label text-label-md text-on-surface font-bold uppercase">Program</h6>
              <ul className="space-y-2.5 font-body text-sm text-secondary">
                <li><a className="hover:text-primary transition-colors" href="#curriculum" onClick={e => scrollToSection(e as any, 'curriculum')}>Curriculum</a></li>
                <li><a className="hover:text-primary transition-colors" href="#results" onClick={e => scrollToSection(e as any, 'results')}>Results</a></li>
                <li><a className="hover:text-primary transition-colors" href="#faq" onClick={e => scrollToSection(e as any, 'faq')}>FAQ</a></li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-label text-label-md text-on-surface font-bold uppercase">Follow</h6>
              <a
                href="https://www.youtube.com/@MadhavTheAiGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-xl">smart_display</span>
                <span className="font-body text-sm">YouTube</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-label text-label-md text-secondary">© 2026 LEARNING STUDIO</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
