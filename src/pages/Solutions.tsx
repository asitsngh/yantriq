import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '../lib/gsap';

import immersionInspection from '../assets/immersion-inspection.jpg';
import rollInspectionImg from '../assets/lismar_lri.png';
import comexImg1 from '../assets/comexp1.png';
import edtImg1 from '../assets/kl_edt.png';

import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';
import kleinknechtLogo from '../assets/kleinknecht_logo.webp';

const OEMS = [
  {
    key: 'scanmaster',
    name: 'ScanMaster Systems Ltd.',
    country: 'Israel',
    category: 'NDT Ultrasonic Inspection',
    brief:
      'Automated multi-axis ultrasonic C-scan systems for aerospace, defence, steel, automotive, and industrial applications.',
    bg: immersionInspection,
    logo: scanmasterLogo,
    href: '/solutions/scanmaster',
    accent: 'from-canvas/10 via-canvas/70 to-canvas',
  },
  {
    key: 'lismar',
    name: 'LISMAR Engineering BV',
    country: 'Netherlands',
    category: 'Roll Inspection Systems',
    brief:
      'Eddy Current, Ultrasonic, and Surface Wave roll inspection systems — 50+ installations in Indian steel plants.',
    bg: rollInspectionImg,
    logo: lismarLogo,
    href: '/solutions/lismar',
    accent: 'from-canvas/10 via-canvas/60 to-canvas',
  },
  {
    key: 'comex',
    name: 'Comex AS',
    country: 'Poland',
    category: 'Mineral Sorting',
    brief:
      'XRT-based automated dry beneficiation and sorting for minerals, ores, and coal. Zero water, zero effluent.',
    bg: comexImg1,
    logo: comexLogo,
    href: '/solutions/comex',
    accent: 'from-canvas/10 via-canvas/65 to-canvas',
  },
  {
    key: 'kleinknecht',
    name: 'Kleinknecht',
    country: 'Germany',
    category: 'Electric Discharge Texturing',
    brief:
      'Linear-motor controlled EDT machines for precision surface texturing of work rolls in steel and aluminium mills.',
    bg: edtImg1,
    logo: kleinknechtLogo,
    href: '/solutions/kleinknecht',
    accent: 'from-canvas/10 via-canvas/70 to-canvas',
  },
];

export default function Solutions() {
  const pageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* ── Hero text ── */
      gsap.from('.sol-hero-title', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.sol-hero', start: 'top 85%', once: true },
      });
      gsap.from('.sol-hero-sub', {
        opacity: 0, y: 30, duration: 0.8, delay: 0.15, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.sol-hero', start: 'top 85%', once: true },
      });

      /* ── Horizontal scroll ── */
      const track = trackRef.current!;
      const container = containerRef.current!;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          snap: {
            snapTo: 1 / (OEMS.length - 1),
            directional: true,
            duration: 0.4,
            delay: 0,
            ease: 'power2.out',
          },
        },
      });

      /* ── Below scroll CTA ── */
      gsap.from('.sol-cta > *', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.sol-cta', start: 'top 85%', once: true },
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="sol-hero pt-36 pb-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-[0.3em] font-body mb-5">
            Our Solutions
          </p>
          <h1 className="sol-hero-title text-5xl lg:text-7xl font-heading font-bold text-ink leading-none mb-6">
            Industrial Solutions
          </h1>
          <p className="sol-hero-sub text-base lg:text-lg text-ink-muted max-w-2xl leading-relaxed font-body">
            Proven inspection and sorting solutions delivered through globally recognized OEM technologies for critical industrial applications. Scroll through to explore each partner.
          </p>
        </div>
      </section>

      {/* ── MOBILE: native CSS snap ── */}
      <div
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-screen [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        {OEMS.map((oem, i) => (
          <div key={oem.key} className="snap-center snap-always w-screen h-full flex-shrink-0 relative overflow-hidden">
            <img src={oem.bg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className={`absolute inset-0 bg-gradient-to-t ${oem.accent}`} />
            <div className="absolute inset-0 bg-canvas/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="max-w-sm">
                <div className="mb-6 h-9 flex items-center">
                  <img src={oem.logo} alt={oem.name} className="max-h-full max-w-[120px] object-contain opacity-90" />
                </div>
                <p className="text-ink-muted text-xs uppercase tracking-[0.25em] font-body mb-2">{oem.category}</p>
                <Link to={oem.href}>
                  <h2 className="text-3xl font-heading font-bold text-ink mb-1 leading-none hover:text-brand-light transition-colors">{oem.name}</h2>
                </Link>
                <p className="text-ink-muted text-sm font-body mb-4">{oem.country}</p>
                <p className="text-ink/80 text-sm leading-relaxed font-body mb-6">{oem.brief}</p>
                <Link to={oem.href} className="inline-flex items-center gap-2 text-ink text-sm font-body font-medium group">
                  Explore in Detail
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <span className="text-ink/10 text-6xl font-heading font-black select-none">0{i + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── DESKTOP: GSAP horizontal scroll ── */}
      <div ref={containerRef} className="hidden md:block relative h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full will-change-transform">
          {OEMS.map((oem, i) => (
            <div
              key={oem.key}
              className="oem-panel w-screen h-screen flex-shrink-0 relative overflow-hidden"
            >
              <img
                src={oem.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${oem.accent}`} />
              <div className="absolute inset-0 bg-canvas/30" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14 lg:p-20">
                <div className="max-w-xl">
                  <div className="panel-logo mb-7 h-10 flex items-center">
                    <img
                      src={oem.logo}
                      alt={oem.name}
                      className="max-h-full max-w-[140px] object-contain opacity-90"
                    />
                  </div>
                  <p className="panel-cat text-ink-muted text-xs uppercase tracking-[0.25em] font-body mb-3">
                    {oem.category}
                  </p>
                  <Link to={oem.href}>
                    <h2 className="panel-name text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ink mb-1 leading-none hover:text-brand-light transition-colors duration-200">
                      {oem.name}
                    </h2>
                  </Link>
                  <p className="text-ink-muted text-sm font-body mb-5">{oem.country}</p>
                  <p className="panel-desc text-ink/80 text-sm sm:text-base leading-relaxed font-body mb-8 max-w-md">
                    {oem.brief}
                  </p>
                  <Link
                    to={oem.href}
                    className="panel-cta inline-flex items-center gap-2 text-ink text-sm font-body font-medium group"
                  >
                    Explore in Detail
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

              <div className="absolute top-8 right-8 sm:top-16 sm:right-16">
                <span className="text-ink/10 text-7xl font-heading font-black select-none">
                  0{i + 1}
                </span>
              </div>

              <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex gap-2">
                {OEMS.map((_, j) => (
                  <div
                    key={j}
                    className={`rounded-full transition-all duration-300 ${
                      j === i
                        ? 'w-6 h-1.5 bg-ink'
                        : 'w-1.5 h-1.5 bg-ink/25'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BELOW SCROLL CTA ── */}
      <section className="py-24 px-6 sm:px-12 bg-surface border-t border-edge">
        <div className="max-w-3xl mx-auto text-center sol-cta">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Next Step
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-5 leading-tight">
            Looking for a specific solution?
          </h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Our team of qualified sales and technical engineers are ready to help you find the right technology for your operational needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
