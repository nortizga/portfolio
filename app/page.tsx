'use client';
import { useEffect, useState } from 'react';

const NAV_LINKS = ['Experience','About', 'Contact'];

const EXPERIENCE = [
  {
    company: 'Red Ventures - Education (EDU)',
    role: 'Software Engineer',
    period: '2025 – Present',
    description:
      'Building education platforms powered by AWS serverless infrastructure and React-based web applications.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'AWS Lambda',
      'DynamoDB',
      'CI/CD',
      'Agile Methodology',
      'Team Collaboration',
      'AI-powered Development Workflows',
    ],
    accent: '#2B50AA',
  },
  {
    company: 'Nave Bank',
    role: 'Software Engineer',
    period: '2023 – 2025',
    description:
      `Developed banking APIs and financial systems with a focus on reliability, security, and compliance for Puerto Rico's first digital-focused bank, contributing to core banking architecture and integration decisions.`,
    tech: [
      'NestJS',
      'PostgreSQL',
      'TypeScript',
      'Node.js',
      'AWS',
      'Docker',
      'CI/CD',
      'Agile Methodology'
    ],
    accent: '#FF9FE5',
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main
      className="min-h-screen bg-[#272727] text-[#FFD4D4]"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#272727]/90 backdrop-blur-md border-b border-[#FFD4D4]/10' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span
            className="font-bold text-xl text-[#FF9FE5]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            dev<span className="text-[#2B50AA]">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#FFD4D4]/70 hover:text-[#FF9FE5] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-[#FFD4D4]/70 hover:text-[#FF9FE5] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#272727]/95 backdrop-blur-md border-t border-[#FFD4D4]/10 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#FFD4D4]/70 hover:text-[#FF9FE5] transition-colors duration-200 py-1"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#2B50AA]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#FF9FE5]/5 blur-3xl pointer-events-none" />
          <h1
            className="text-[clamp(52px,8vw,100px)] font-extrabold leading-[1.05] text-[#FFD4D4] mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Nicole Ortiz
          </h1>

          <p className="text-xl text-[#FFD4D4]/70 max-w-2xl mb-4 leading-relaxed font-medium">
            Software Engineer in Puerto Rico passionate about building modern
            full-stack applications.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-mono text-[#FF858D] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'DM Mono, monospace' }}
          >
            Experience
          </p>
          <h2
            className="text-5xl font-extrabold text-[#FFD4D4]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Where I've worked recently.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#2B50AA]/40 via-[#FF9FE5]/30 to-transparent ml-5 hidden md:block" />
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div
                key={job.company}
                className="md:pl-16 relative"
              >
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-full border-2 items-center justify-center hidden md:flex flex-shrink-0"
                  style={{
                    borderColor: job.accent + '50',
                    background: job.accent + '10',
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: job.accent }}
                  />
                </div>
                <div className="rounded-3xl border border-[#FFD4D4]/10 bg-[#FFD4D4]/5 p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold text-[#FFD4D4]"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {job.company}
                      </h3>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: job.accent }}
                      >
                        {job.role}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono text-[#FFD4D4]/30 mt-1"
                      style={{ fontFamily: 'DM Mono, monospace' }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[#FFD4D4]/55 leading-relaxed mb-5">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full border border-[#FFD4D4]/15 text-[#FFD4D4]/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-mono text-[#FF858D] tracking-widest uppercase mb-4"
            style={{ fontFamily: 'DM Mono, monospace' }}
          >
            About
          </p>
          <h2
            className="text-5xl font-extrabold text-[#FFD4D4]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            A bit about me.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-[#FFD4D4]/60 leading-relaxed mb-4 text-lg">
              I'm passionate about building software and continuously learning
              as an engineer. I enjoy solving complex problems, collaborating
              with others, and creating products that make a meaningful impact.
              Throughout my career, I've had the opportunity to work on digital
              banking platforms, education technology, and customer-facing web
              applications, building scalable backend services and intuitive web
              experiences.
            </p>
            <p className="text-[#FFD4D4]/55 leading-relaxed mb-4">
              I'm also passionate about open source and enjoy learning from the
              developer community while exploring cloud technologies and
              AI-assisted development workflows. When I'm not coding, you'll
              usually find me at CrossFit, riding my bike, or spending time with
              my dog, Alfie.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { label: 'Experience', value: '5+ Years', accent: '#FF9FE5' },
              {
                label: 'Focus',
                value: 'Full Stack & Cloud',
                accent: '#2B50AA',
              },
              { label: 'Current', value: 'Red Ventures', accent: '#FF858D' },
              { label: 'Location', value: 'Puerto Rico 🇵🇷', accent: '#5B7FD4' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-4 border border-[#FFD4D4]/10 rounded-2xl bg-[#FFD4D4]/5"
              >
                <p className="text-xs text-[#FFD4D4]/40 mb-1">{stat.label}</p>
                <p
                  className="text-base font-bold"
                  style={{ color: stat.accent, fontFamily: 'Syne, sans-serif' }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-mono text-[#FF858D] tracking-widest uppercase mb-6"
            style={{ fontFamily: 'DM Mono, monospace' }}
          >
            Contact
          </p>
          <h2
            className="text-6xl font-extrabold text-[#FFD4D4] mb-6 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-[#FF9FE5]">Let's connect.</span>
          </h2>
          <p className="text-[#FFD4D4]/50 mb-12 text-lg leading-relaxed">
            Whether it's software engineering, cloud architecture, AI, or
            building products that make a difference, I'm always open to
            thoughtful conversations and new ideas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:nicole.ortiz.dev@gmail.com"
              className="px-8 py-4 bg-[#FF858D] hover:bg-[#ff6b75] text-[#272727] font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              nicole.ortiz.dev@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/nortizga' },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/nicoleortizga/',
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#FFD4D4]/40 hover:text-[#FF9FE5] transition-colors duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#FFD4D4]/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span
              className="font-bold text-[#FF9FE5]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              dev<span className="text-[#2B50AA]">.</span>
            </span>
            <p className="text-xs text-[#FFD4D4]/30">
              Made with ❤️ from Puerto Rico 🇵🇷
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-[#FFD4D4]/30 mr-2">Let's Connect</p>
            <a
              href="https://github.com/nortizga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#FFD4D4]/15 hover:border-[#FF9FE5]/50 text-[#FFD4D4]/50 hover:text-[#FF9FE5] rounded-full text-xs transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicoleortizga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#FFD4D4]/15 hover:border-[#2B50AA]/80 text-[#FFD4D4]/50 hover:text-[#2B50AA] rounded-full text-xs transition-all duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
