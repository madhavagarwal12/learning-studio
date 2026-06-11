
import React, { useState } from 'react';
import { TESTIMONIALS, FAQ_DATA, CURRICULUM } from './constants';
import SectionHeading from './components/SectionHeading';
import FadeIn from './components/FadeIn';
import EnrollmentForm from './components/EnrollmentForm';
import HeroImage from './components/images/Group 1.png';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    scrollToSection(e, id);
    setIsMobileMenuOpen(false);
  };

  const features = [
    { icon: 'auto_awesome',    title: 'Prompt Engineering',   desc: 'Write prompts that get professional-grade results every timefor writing, code, planning, and analysis. The foundational skill.' },
    { icon: 'description',     title: 'Product Planning',     desc: 'Turn a raw idea into a full PRD using Claude. Scope your MVP, define user stories, and plan your app before building anything.' },
    { icon: 'favorite',        title: 'Build with Lovable',   desc: 'Ship a complete database-backed web app with Lovable and Supabaseno code written, production-quality output.' },
    { icon: 'cloud_upload',    title: 'Deploy to Production', desc: 'Take your app from local to a real URL. Vercel setup, environment variables, custom domaineverything to go live.' },
    { icon: 'visibility',      title: 'Live Debugging',       desc: "Debug your builds with the group in real-time. Walk away knowing how to unblock yourself on any future project." },
    { icon: 'workspace_premium', title: 'Lifetime Community', desc: 'Discord and Skool community access with monthly calls and a network of professionals building with AI alongside you.' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#f472b6] selection:text-white">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base font-bold tracking-tight text-[#111111] hover:text-[#f472b6] transition-colors"
            style={{ letterSpacing: '-0.01em' }}
          >
            Learning Studio
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Process', id: 'about' },
              { label: 'Curriculum', id: 'curriculum' },
              { label: 'Results', id: 'testimonials' },
              { label: 'FAQ', id: 'faq' },
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => scrollToSection(e, link.id)}
                className="text-sm font-medium text-[#777777] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={e => scrollToSection(e as any, 'enroll')}
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              Reserve Seat
            </button>
          </div>

          <button
            className="md:hidden text-[#111111]"
            onClick={() => setIsMobileMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span className="material-icons-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-1">
              {[
                { label: 'Process', id: 'about' },
                { label: 'Curriculum', id: 'curriculum' },
                { label: 'Results', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
              ].map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={e => handleNavClick(e, link.id)}
                  className="text-sm font-medium text-[#777777] hover:text-[#111111] py-3 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={e => handleNavClick(e as any, 'enroll')}
                className="btn-primary px-5 py-3 rounded-xl text-sm font-semibold mt-2 text-center"
              >
                Reserve Seat
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full mb-8" style={{ background: '#fdf2f8', border: '1px solid rgba(244,114,182,0.15)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6] live-dot" />
                <span className="jetbrains text-[11px] font-medium text-[#f472b6] tracking-[0.06em]">
                  Next batch starting soon · 5 seats max
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-[#111111] leading-none mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Build Real Apps
                <br />
                <span className="text-[#f472b6]">with AI.</span>
              </h1>

              <p className="text-lg text-[#555555] font-normal mb-8 max-w-lg leading-relaxed">
                A live, hands-on program for working professionals. Plan, build, and ship a real web app using Claude, Lovable, Supabase, and Vercelno coding experience needed. 1-on-5 cohorts.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10 py-5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                {[
                  { label: 'Instructor', value: 'Madhav Agarwal' },
                  { label: 'Duration', value: '9 Sessions' },
                  { label: 'Investment', value: '₹15,000' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="jetbrains text-[10px] font-medium text-[#aaaaaa] uppercase tracking-[0.1em] mb-1">{s.label}</div>
                    <div className="font-bold text-[#111111] text-lg">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={e => scrollToSection(e as any, 'enroll')}
                  className="btn-primary px-9 py-4 rounded-xl font-semibold text-base"
                >
                  Secure Your Seat
                </button>
                <button
                  onClick={e => scrollToSection(e as any, 'curriculum')}
                  className="btn-ghost px-9 py-4 rounded-xl font-semibold text-base flex items-center justify-center space-x-2"
                >
                  <span className="material-icons-outlined text-base text-[#f472b6]">play_circle</span>
                  <span>View Syllabus</span>
                </button>
              </div>

              {/* Tool stack */}
              <div className="flex flex-wrap gap-2">
                {['Claude', 'Lovable', 'Supabase', 'Vercel'].map(tool => (
                  <span
                    key={tool}
                    className="jetbrains text-[11px] font-medium px-3 py-1.5 rounded-lg text-[#555555]"
                    style={{ background: '#f5f5f5', border: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(0,0,0,0.09)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
                  aspectRatio: '16/10',
                }}
              >
                <img
                  src={HeroImage}
                  alt="Learning Studio Live Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full bg-[#f472b6] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    style={{ boxShadow: '0 8px 24px rgba(244,114,182,0.35)' }}
                  >
                    <span className="material-icons-outlined text-2xl text-white">play_arrow</span>
                  </div>
                </div>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(0,0,0,0.08)' }}
                >
                  <span className="jetbrains text-[10px] font-medium text-[#555555] tracking-[0.08em] uppercase">
                    Live Session Preview
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Social proof strip ── */}
      <div className="section-alt py-8 px-6 divider" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12">
          {[
            { value: '40%+', label: 'Avg. salary increase' },
            { value: '5 seats', label: 'Per cohort, max' },
            { value: '100%', label: 'Ship a live product' },
            { value: '₹15K', label: 'All-inclusive fee' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-bold text-[#111111]" style={{ letterSpacing: '-0.02em' }}>{s.value}</div>
              <div className="jetbrains text-[10px] font-medium text-[#aaaaaa] uppercase tracking-[0.08em] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── About / The Live Advantage ── */}
      <section id="about" className="py-24 md:py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Why live?"
            title="The Live Advantage"
            subtitle="Real guidance, real feedback, real results. Madhav Agarwal walks you through every stephands-on, interactive, and tailored to your goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card p-8 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: '#fdf2f8' }}
                  >
                    <span className="material-icons-outlined text-[#f472b6] text-xl">{f.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-3" style={{ letterSpacing: '-0.01em' }}>{f.title}</h3>
                  <p className="text-[#777777] font-normal text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section id="curriculum" className="py-24 md:py-40 px-6 scroll-mt-20 section-alt" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The syllabus"
            title="9-Session Curriculum"
            subtitle="From understanding how Claude thinks to deploying your first real app. Every session builds toward one outcomea live product with your name on it."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CURRICULUM.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 35}>
                <div
                  className={`flex bg-white rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md ${
                    item.week === 9 ? 'ring-1 ring-[#f472b6]/20' : ''
                  }`}
                  style={{ border: '1px solid rgba(0,0,0,0.08)' }}
                >
                  {/* Week number */}
                  <div
                    className="w-16 flex-shrink-0 flex flex-col items-center justify-center"
                    style={{ borderRight: '1px solid rgba(0,0,0,0.07)', background: item.week === 9 ? '#fdf2f8' : '#fafafa' }}
                  >
                    <span className="jetbrains text-[9px] font-medium text-[#cccccc] uppercase tracking-wider mb-0.5">S</span>
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: '#f472b6', letterSpacing: '-0.02em' }}
                    >
                      {item.week}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="material-icons-outlined text-[#cccccc] text-base">{item.icon}</span>
                      <h4 className="font-bold text-[#111111] text-[15px]" style={{ letterSpacing: '-0.01em' }}>
                        {item.title}
                      </h4>
                      {item.week === 9 && (
                        <span
                          className="jetbrains text-[9px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider text-[#f472b6]"
                          style={{ background: '#fdf2f8', border: '1px solid rgba(244,114,182,0.15)' }}
                        >
                          Capstone
                        </span>
                      )}
                    </div>
                    <p className="text-[#777777] text-sm font-normal leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((topic, t) => (
                        <span
                          key={t}
                          className="jetbrains text-[10px] font-medium px-2.5 py-1 rounded-lg text-[#999999]"
                          style={{ background: '#f5f5f5', border: '1px solid rgba(0,0,0,0.07)' }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Stack note */}
          <FadeIn delay={150}>
            <div
              className="mt-8 p-5 rounded-xl bg-white flex flex-wrap items-center gap-5"
              style={{ border: '1px solid rgba(0,0,0,0.08)' }}
            >
              <p className="text-sm text-[#555555] font-normal flex-1 min-w-[200px]">
                <span className="font-semibold text-[#111111]">Every student ships a live app</span> using the same professional stack.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Claude', 'Lovable', 'Supabase', 'Vercel'].map(tool => (
                  <span
                    key={tool}
                    className="jetbrains text-[11px] font-medium px-3 py-1.5 rounded-lg text-[#f472b6]"
                    style={{ background: '#fdf2f8', border: '1px solid rgba(244,114,182,0.12)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 md:py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Student results"
            title="Success Stories"
            subtitle="Graduates who leveraged the program to pivot careers, launch agencies, and ship products that generate real revenue."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.id} delay={idx * 100}>
                <div className="card p-8 h-full flex flex-col relative">
                  <span
                    className="material-icons-outlined absolute top-6 right-6 text-4xl select-none"
                    style={{ color: 'rgba(244,114,182,0.07)', fontSize: '3.5rem' }}
                  >
                    format_quote
                  </span>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
                      style={{ border: '2px solid rgba(244,114,182,0.2)' }}
                    >
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#111111] text-[15px]">{t.name}</h5>
                      <p className="jetbrains text-[10px] font-medium text-[#aaaaaa] uppercase tracking-[0.06em] mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-[#555555] font-normal leading-relaxed text-sm flex-1 italic relative z-10">
                    "{t.content}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 md:py-40 px-6 scroll-mt-20 section-alt" style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="Questions" title="Program Details" />
          <div className="space-y-2">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: '#ffffff',
                  border: openFaq === idx ? '1px solid rgba(244,114,182,0.25)' : '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className={`font-semibold text-[15px] pr-4 transition-colors duration-150 ${openFaq === idx ? 'text-[#f472b6]' : 'text-[#111111]'}`}>
                    {faq.question}
                  </span>
                  <span
                    className="material-icons-outlined flex-shrink-0 text-[#cccccc] transition-transform duration-300"
                    style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openFaq === idx ? '400px' : '0', opacity: openFaq === idx ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-[#555555] font-normal leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTAdark strip ── */}
      <section className="py-24 md:py-40 px-6 section-dark">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="jetbrains text-[11px] font-medium text-[#f472b6] uppercase tracking-[0.1em] mb-6">
              Ready to ship?
            </p>
            <h2
              className="text-5xl md:text-7xl font-extrabold text-white mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              Stop planning.
              <br />
              Start building.
            </h2>
            <p className="text-lg text-[#888888] font-normal mb-12 max-w-lg mx-auto leading-relaxed">
              5 students per batch. Apply now and have a live product on the internet in 9 sessions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <button
                onClick={e => scrollToSection(e as any, 'enroll')}
                className="btn-primary px-12 py-5 rounded-xl font-semibold text-lg w-full md:w-auto"
              >
                Join the Batch
              </button>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {['100% Live', '9 Sessions', '₹15,000'].map((label, i) => (
                  <div key={i} className="flex items-center space-x-1.5">
                    <span className="material-icons-outlined text-[#f472b6] text-base">check_circle</span>
                    <span className="text-sm font-medium text-[#666666]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Enrollment form ── */}
      <section id="enroll" className="py-24 md:py-40 px-6 scroll-mt-20 section-alt" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-2xl mx-auto">
          <EnrollmentForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 px-6 bg-white" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-base font-bold text-[#111111] hover:text-[#f472b6] transition-colors text-left"
              style={{ letterSpacing: '-0.01em' }}
            >
              Learning Studio
            </button>
            <p className="text-sm text-[#aaaaaa] font-normal max-w-xs leading-relaxed">
              Live 1-on-5 sessions to master AI-assisted product development.
            </p>
            <p className="jetbrains text-[10px] text-[#dddddd] uppercase tracking-[0.12em] pt-2">
              © 2024 Learning Studio
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h6 className="jetbrains text-[10px] font-medium uppercase tracking-[0.1em] text-[#cccccc]">Contact</h6>
            <div className="space-y-2.5">
              {[
                { icon: 'phone', label: '9587276261', href: 'tel:9587276261' },
                { icon: 'email', label: 'autopilotstudiojpr@gmail.com', href: 'mailto:autopilotstudiojpr@gmail.com' },
                { icon: 'public', label: 'autopilot-studio.com', href: 'https://autopilot-studio.com' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 text-[#999999] hover:text-[#f472b6] transition-colors group"
                >
                  <span className="material-icons-outlined text-sm">{item.icon}</span>
                  <span className="text-sm font-normal">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:items-end">
            <h6 className="jetbrains text-[10px] font-medium uppercase tracking-[0.1em] text-[#cccccc]">Follow</h6>
            <a
              href="https://www.youtube.com/@MadhavTheAiGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#999999] hover:text-[#f472b6] transition-colors"
            >
              <span className="material-icons-outlined text-xl">smart_display</span>
              <span className="text-sm font-normal">YouTube</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
