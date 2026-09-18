import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import lismarLogo from '../../assets/lismar_logo1.webp';
import rollInspectionImg from '../../assets/lismar_lri.png';
import heroBg from '../../assets/Surfacewave-Product-Slide-1-1.jpg';

export default function LismarDetail() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to('.lm-hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: '.lm-hero', scrub: true, start: 'top top', end: 'bottom top' },
      });

      gsap.from('.lm-hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.utils.toArray<HTMLElement>('.lm-section').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.8, ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="lm-hero relative min-h-[500px] overflow-hidden bg-gray-950">
        <div className="lm-hero-bg absolute inset-y-0 right-0 w-full lg:w-3/5 scale-[1.02]">
          <img src={heroBg} alt="" className="w-full h-full object-contain object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
        </div>

        <div className="lm-hero-content relative z-10 min-h-[500px] flex items-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-xl">
          <div className="mb-6 h-12 flex items-center">
            <img
              src={lismarLogo}
              alt="LISMAR Engineering"
              className="max-h-full max-w-[190px] object-contain"
            />
          </div>

          <p className="text-white/80 text-xs uppercase tracking-widest font-body mb-3">
            Roll Inspection Systems
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-none">
            LISMAR Engineering BV
          </h1>
          <p className="text-white/80 text-sm font-body mt-3">The Netherlands</p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-12 lg:py-16 px-6 sm:px-12 lg:px-16 bg-surface border-b border-edge">
        <div className="max-w-4xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Company Overview</p>
          <div className="space-y-4 text-ink-muted font-body text-base leading-relaxed">
            <p>
              LISMAR Engineering BV, based in the Netherlands, is part of Ascential Technologies — a global conglomerate of testing and measurement solutions.
            </p>
            <p>
              LISMAR is a global leader in automated rolling mill roll inspection solutions, using Eddy Current, Ultrasonic, and Surface Wave technologies. With several hundreds of roll inspection systems in place all over the world, LISMAR maintains a truly global presence.
            </p>
            <p>
              We have over 50 systems installed in India at large steel plants — making LISMAR one of the most widely deployed roll inspection platforms in the country.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="lm-content py-14 lg:py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Product Range</p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
            Core Product Category
          </h2>

          <div className="lm-section grid lg:grid-cols-2 gap-14 items-start">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-ink mb-6">
                Roll Inspection Systems (LRI)
              </h3>

              <p className="text-ink-muted font-body text-sm leading-relaxed mb-6">
                The LRI systems may be fully integrated with CNC roll grinding machines, partially integrated, or supplied as a standalone solution on roll grinders.
              </p>

              <div className="space-y-4">
                {[
                  {
                    tech: 'Eddy Current (ET)',
                    desc: 'Surface defect detection — cracks, marks, and surface irregularities on roll bodies.',
                  },
                  {
                    tech: 'Ultrasonic (UT)',
                    desc: 'Sub-surface defect detection — internal cracks and inclusions that cannot be seen externally.',
                  },
                  {
                    tech: 'Surface Wave (SW)',
                    desc: 'Near-surface defect detection — ideal for detecting tight fatigue cracks just below the surface.',
                  },
                ].map((item, i) => (
                  <div key={i} className="lm-section bg-surface border border-edge rounded-2xl p-5">
                    <h4 className="text-sm font-heading font-semibold text-ink mb-2">{item.tech}</h4>
                    <p className="text-ink-muted font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="bg-surface border border-edge rounded-2xl p-6 flex items-center justify-center min-h-[300px]">
              <img
                src={rollInspectionImg}
                alt="LISMAR Roll Inspection System"
                className="object-contain max-h-[320px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 px-6 sm:px-12 lg:px-16 bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-heading font-semibold text-ink mb-8">Key Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'CNC grinding machine integration',
              'Standalone and retrofit options',
              'Multi-technology simultaneous inspection',
              'Automated defect reporting',
              'Compatible with all major roll types',
              '50+ active installations in India',
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4 border border-edge rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-light flex-shrink-0" />
                <span className="text-ink-muted font-body text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 sm:px-12 border-t border-edge">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-5">Interested in LISMAR?</h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss your roll inspection needs, or visit the LISMAR website for detailed product information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F4F45] text-white rounded-lg font-body font-medium text-sm shadow-md hover:bg-[#5F0F12] hover:shadow-lg transition-all"
            >
              Contact Yantriq
            </Link>
            <a
              href="https://www.lismar.com/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              LISMAR Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
