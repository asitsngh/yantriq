import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Users, Wrench } from 'lucide-react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import logo from '../assets/yqt_logo.svg';
import immersionInspection from '../assets/immersion-inspection.jpg';
import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';
import kleinknechtLogo from '../assets/kleinknecht_logo.webp';
import radalyticaLogo from '../assets/radalytica_logo.svg';

const FEATURES = [
  {
    icon: Zap,
    title: 'Engineering Excellence',
    desc: 'State-of-the-art systems designed with global expertise and robust industrial engineering.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    desc: 'Reliable inspection and sorting that guarantees component integrity and material purity.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    desc: 'Support-first approach to ensure smooth operations at every stage.',
  },
  {
    icon: Wrench,
    title: 'Industry-Ready Support',
    desc: 'Comprehensive installation, training, and long-term service for seamless operations.',
  },
];

const OEMS = [
  { logo: scanmasterLogo, name: 'ScanMaster Systems', href: '/solutions/scanmaster' },
  { logo: lismarLogo, name: 'LISMAR Engineering', href: '/solutions/lismar' },
  { logo: comexLogo, name: 'Comex AS', href: '/solutions/comex' },
  { logo: kleinknechtLogo, name: 'Kleinknecht', href: '/solutions/kleinknecht' },
  { logo: radalyticaLogo, name: 'Radalytica', href: '/solutions/radalytica' },
];

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const introLogoRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {

      /* ── SCROLL ANIMATIONS: always run ── */
      gsap.to('.hero-bg-img', {
        yPercent: 22, ease: 'none',
        scrollTrigger: { trigger: '.hero-section', scrub: true, start: 'top top', end: 'bottom top' },
      });
      gsap.from('.stat-item', {
        opacity: 0, y: 50, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.stats-section', start: 'top 85%', once: true },
      });
      gsap.from('.feature-item', {
        opacity: 0, y: 60, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.features-section', start: 'top 85%', once: true },
      });
      gsap.from('.oem-logo-item', {
        opacity: 0, scale: 0.88, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.oem-logos-section', start: 'top 85%', once: true },
      });
      gsap.from('.cta-content > *', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.cta-section', start: 'top 85%', once: true },
      });

      /* ── SKIP INTRO: reduced motion only ── */
      if (reducedMotion) {
        gsap.set('.intro-overlay', { autoAlpha: 0 });
        return;
      }

      /* ── INTRO: auto-playing time-based sequence ── */
      const navBar   = document.getElementById('main-navbar');
      const navLogo  = document.getElementById('navbar-logo-img');
      const navText  = document.getElementById('navbar-brand-text');
      const navItems = document.getElementById('navbar-nav-items');

      /* Hide navbar and hero content initially */
      gsap.set(navBar,          { opacity: 0 });
      gsap.set(navLogo,         { opacity: 0 });
      gsap.set(navText,         { opacity: 0 });
      gsap.set(navItems,        { opacity: 0 });
      gsap.set('.hero-eyebrow', { opacity: 0 });
      gsap.set('.hero-word-1',  { yPercent: 115 });
      gsap.set('.hero-word-2',  { yPercent: 115 });
      gsap.set('.hero-sub',     { opacity: 0 });
      gsap.set('.hero-cta-1',   { opacity: 0 });
      gsap.set('.hero-cta-2',   { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      /* 1. Logo + name fade in */
      tl.from('.intro-logo-img',   { opacity: 0, duration: 0.8 }, 0.3)
        .from('.intro-brand-text', { opacity: 0, duration: 0.6 }, 0.55);

      /* 2. Brief hold, then name fades and logo flies to navbar */
      tl.to('.intro-brand-text', { opacity: 0, duration: 0.3, ease: 'power2.in' }, 1.6)
        .to('.intro-logo-img', {
          x: () => {
            const nav = document.getElementById('navbar-logo-img');
            const intro = introLogoRef.current;
            if (!nav || !intro) return 0;
            const nr = nav.getBoundingClientRect();
            const ir = intro.getBoundingClientRect();
            return (nr.left + nr.width / 2) - (ir.left + ir.width / 2);
          },
          y: () => {
            const nav = document.getElementById('navbar-logo-img');
            const intro = introLogoRef.current;
            if (!nav || !intro) return 0;
            const nr = nav.getBoundingClientRect();
            const ir = intro.getBoundingClientRect();
            return (nr.top + nr.height / 2) - (ir.top + ir.height / 2);
          },
          scale: () => {
            const nav = document.getElementById('navbar-logo-img');
            const intro = introLogoRef.current;
            if (!nav || !intro) return 1;
            const nr = nav.getBoundingClientRect();
            const ir = intro.getBoundingClientRect();
            return nr.width / ir.width;
          },
          duration: 0.75,
          ease: 'power3.inOut',
        }, 1.7);

      /* 3. Navbar fades in while logo is still flying (no gap) */
      tl.to(navBar,            { opacity: 1, duration: 0.5, ease: 'power2.out' }, 1.9)
        .to('.intro-logo-img', { opacity: 0, duration: 0.15, ease: 'none' },      2.4)
        .to(navLogo,           { opacity: 1, duration: 0.15, ease: 'none' },      2.4)
        .to(navText,           { opacity: 1, duration: 0.25, ease: 'power2.out' }, 2.5)
        .to(navItems,          { opacity: 1, duration: 0.25, ease: 'power2.out' }, 2.62);

      /* 4. Overlay out — starts dissolving as logo arrives */
      tl.to('.intro-overlay', { opacity: 0, duration: 0.45, ease: 'power2.inOut' }, 2.35);

      /* 5. Hero content cascades in */
      tl.to('.hero-eyebrow', { opacity: 1, duration: 0.5 },                    2.9)
        .to('.hero-word-1',  { yPercent: 0, duration: 0.7, ease: 'power3.out' }, 3.0)
        .to('.hero-word-2',  { yPercent: 0, duration: 0.7, ease: 'power3.out' }, 3.15)
        .to('.hero-sub',     { opacity: 1, duration: 0.5 },                    3.45)
        .to('.hero-cta-1',   { opacity: 1, duration: 0.4 },                    3.65)
        .to('.hero-cta-2',   { opacity: 1, duration: 0.4 },                    3.8)
        ;

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="hero-section relative h-screen overflow-hidden">

        {/* Background image */}
        <div className="hero-bg-img absolute inset-0 scale-[1.12] will-change-transform">
          <img
            src={immersionInspection}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/20 via-canvas/60 to-canvas/95" />
          <div className="absolute inset-0 bg-canvas/30" />
        </div>

        {/* Intro overlay — transparent so hero image shows through */}
        <div className="intro-overlay absolute inset-0 z-[60] flex flex-col items-center justify-center pointer-events-none">
          {/* Soft radial glow behind logo for legibility */}
          <div className="absolute w-[480px] h-[480px] rounded-full bg-canvas/55 blur-[72px]" />
          <img
            ref={introLogoRef}
            src={logo}
            alt="Yantriq"
            className="intro-logo-img w-24 h-24 lg:w-28 lg:h-28 relative"
          />
          <span className="intro-brand-text relative mt-5 text-xl lg:text-2xl font-heading font-bold text-ink tracking-wide text-center leading-tight px-4">
            Yantriq Systems Private Limited
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <p className="hero-eyebrow text-ink-muted text-xs uppercase tracking-[0.3em] font-body mb-6">
            Advanced Inspection Systems · India
          </p>
          <div className="overflow-hidden leading-none mb-1">
            <h1 className="hero-word-1 text-[clamp(3.5rem,11vw,8.5rem)] font-heading font-black uppercase leading-none text-ink">
              PRECISION
            </h1>
          </div>
          <div className="overflow-hidden leading-none mb-8">
            <h1 className="hero-word-2 text-[clamp(3.5rem,11vw,8.5rem)] font-heading font-black uppercase leading-none text-brand-light">
              DRIVEN.
            </h1>
          </div>
          <p className="hero-sub text-base lg:text-lg text-ink-muted max-w-md leading-relaxed font-body mb-10">
            Enabling industries to achieve safer, smarter operations with cutting-edge NDT and mineral sorting systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="hero-cta-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/solutions"
              className="hero-cta-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section py-20 bg-surface border-b border-edge">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '80%+', label: 'Repeat Clients' },
              { value: '25+', label: 'Years of Experience' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="text-5xl lg:text-6xl font-heading font-black text-ink mb-3">
                  {stat.value}
                </div>
                <div className="text-ink-muted text-xs uppercase tracking-widest font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY YANTRIQ ── */}
      <section className="features-section py-24 lg:py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
              Why Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink leading-tight">
              Why Choose Yantriq?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="feature-item bg-surface border border-edge rounded-2xl p-7 hover:border-brand-teal/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/15 mb-7 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-brand-light" />
                </div>
                <h3 className="text-base font-heading font-semibold text-ink mb-3">{f.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OEM PARTNER LOGOS ── */}
      <section className="oem-logos-section py-16 border-y border-edge">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <p className="text-center text-ink-muted text-xs uppercase tracking-[0.3em] font-body mb-12">
            Our Global OEM Partners
          </p>
          <div className="grid grid-cols-5 gap-x-16 justify-items-center w-full">
            {OEMS.map((oem, i) => (
              <Link
                key={i}
                to={oem.href}
                className="oem-logo-item group flex items-center justify-center py-4"
              >
                <img
                  src={oem.logo}
                  alt={oem.name}
                  className="h-9 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 px-6 sm:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Industries</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-6 leading-tight">
                Serving India's Most Critical Industries
              </h2>
              <p className="text-ink-muted font-body text-base leading-relaxed">
                With nearly 100 systems installed across India — many operating reliably for over 20 years — Yantriq is a trusted partner across sectors that demand uncompromising quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Aerospace', 'Defence', 'Automotive', 'Steel & Pipe', 'Bearings', 'Forgings', 'Mineral Processing', 'Rolling Mills'].map((ind) => (
                <span key={ind} className="px-4 py-2 border border-edge rounded-full text-ink-muted text-sm font-body hover:border-brand-teal/50 hover:text-ink transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section py-28 lg:py-36 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto text-center cta-content">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Ready?</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink mb-6 leading-tight">
            Ready to advance inspection excellence?
          </h2>
          <p className="text-ink-muted text-base font-body mb-10 leading-relaxed">
            Work with Yantriq to implement globally recognized NDT solutions for your industrial operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
          >
            Reach Out to Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
