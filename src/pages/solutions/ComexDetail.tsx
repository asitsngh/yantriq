import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import comexLogo from '../../assets/Comex-AS.webp';
import comexImg1 from '../../assets/comexp1.png';
import comexImg2 from '../../assets/comexp2.png';
import comexImg3 from '../../assets/comexp3.png';
import comexImg4 from '../../assets/comexp4.png';
import heroBg from '../../assets/MSX2-1024x7842.jpg';

const ADVANTAGES = [
  'High-speed precision sorting for separating rich and poor coal or ore particles.',
  'Dry process — unlike conventional wet processes that consume water and magnetite.',
  'Small footprint compared to wet processing with coal, water, magnetite, and drying systems.',
  'Movable container installation for flexible deployment across multiple sites.',
  'Extremely low operational cost — only electricity, at a few tens of kWh.',
  'Simple one-step operation requiring a single qualified operator.',
  'Flexible sort thresholds — adjust yield settings via stored memory.',
  'Zero environmental impact — no water, no effluent, no particulate emissions.',
];

export default function ComexDetail() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to('.cx-hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: '.cx-hero', scrub: true, start: 'top top', end: 'bottom top' },
      });

      gsap.from('.cx-hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.cx-overview', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.cx-overview', start: 'top 85%', once: true },
      });

      gsap.from('.cx-product-img', {
        opacity: 0, scale: 0.96, stagger: 0.08, duration: 0.7, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.cx-images', start: 'top 85%', once: true },
      });

      gsap.from('.cx-advantage', {
        opacity: 0, x: -20, stagger: 0.05, duration: 0.6, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.cx-advantages', start: 'top 85%', once: true },
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="cx-hero relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="cx-hero-bg absolute inset-0 scale-[1.1]">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/30 via-canvas/65 to-canvas" />
        </div>

        <div className="cx-hero-content relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-16 pb-14 max-w-7xl mx-auto">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-ink-muted text-xs font-body uppercase tracking-widest mb-8 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Solutions
          </Link>

          <div className="mb-5 h-10 flex items-center">
            <img
              src={comexLogo}
              alt="Comex AS"
              className="max-h-full max-w-[160px] object-contain opacity-90"
            />
          </div>

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-2">
            Mineral Sorting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink leading-none">
            Comex AS
          </h1>
          <p className="text-ink-muted text-sm font-body mt-2">Poland</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="cx-overview py-20 px-6 sm:px-12 lg:px-16 bg-surface border-b border-edge">
        <div className="max-w-4xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Company Overview</p>
          <div className="space-y-4 text-ink-muted font-body text-base leading-relaxed">
            <p>
              Comex, based in Poland, is a leading sorting solution provider for various minerals and ores. Their team of experienced engineers, own laboratory, and constant cooperation with the largest research network allow them to offer highly innovative technologies for the production and separation/beneficiation of minerals and ores.
            </p>
            <p>
              They optimize production costs and increase the profitability of production processes by improving the quality of the final product. Comex is also known for its innovative pulverizing technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Technology</p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-8 leading-tight">
            XRT-Based Sorting System
          </h2>
          <p className="text-ink-muted font-body text-base leading-relaxed max-w-3xl mb-8">
            The XRT-based sorting system scans and collects relative density data of particles moving on a conveyor belt. The sorting system controller processes this data and instructs pneumatic nozzles at the end of the conveyor to sort particles based on customer-defined content limits — removing higher or lower density particles than specified. The whole process is highly reliable and flexible.
          </p>

          {/* System images grid */}
          <div className="cx-images grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[comexImg1, comexImg2, comexImg3, comexImg4].map((img, i) => (
              <div
                key={i}
                className="cx-product-img bg-surface border border-edge rounded-2xl p-4 flex items-center justify-center min-h-[180px]"
              >
                <img
                  src={img}
                  alt={`Comex System ${i + 1}`}
                  className="object-contain max-h-[200px] w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="cx-advantages py-20 px-6 sm:px-12 lg:px-16 bg-surface border-t border-edge">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Why XRT?</p>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-ink mb-10 leading-tight">
            Major Advantages of XRT-Based Sorting
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="cx-advantage flex items-start gap-4 bg-canvas border border-edge rounded-2xl px-5 py-4">
                <span className="flex-shrink-0 text-ink/20 font-heading font-black text-sm mt-0.5 w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-ink-muted font-body text-sm leading-relaxed">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 sm:px-12 border-t border-edge">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-5">Interested in Comex?</h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss your mineral sorting and beneficiation requirements, or explore Comex's full product range.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
            >
              Contact Yantriq
            </Link>
            <a
              href="https://comex-group.com/#more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              Comex Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
