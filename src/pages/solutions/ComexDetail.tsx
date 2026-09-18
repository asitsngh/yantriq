import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
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
      <section className="cx-hero relative min-h-[500px] overflow-hidden bg-gray-950">
        <div className="cx-hero-bg absolute inset-y-0 right-0 w-full lg:w-3/5 scale-[1.02]">
          <img src={heroBg} alt="" className="w-full h-full object-contain object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
        </div>

        <div className="cx-hero-content relative z-10 min-h-[500px] flex items-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-xl">
          <div className="mb-6 h-12 flex items-center">
            <img
              src={comexLogo}
              alt="Comex AS"
              className="max-h-full max-w-[190px] object-contain"
            />
          </div>

          <p className="text-white/80 text-xs uppercase tracking-widest font-body mb-3">
            Mineral Sorting
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-none">
            Comex AS
          </h1>
          <p className="text-white/80 text-sm font-body mt-3">Poland</p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="cx-overview py-12 lg:py-16 px-6 sm:px-12 lg:px-16 bg-surface border-b border-edge">
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
      <section className="py-14 lg:py-20 px-6 sm:px-12 lg:px-16">
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
      <section className="cx-advantages py-14 lg:py-20 px-6 sm:px-12 lg:px-16 bg-surface border-t border-edge">
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
      <section className="py-14 px-6 sm:px-12 border-t border-edge">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-5">Interested in Comex?</h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss your mineral sorting and beneficiation requirements, or explore Comex's full product range.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F4F45] text-white rounded-lg font-body font-medium text-sm shadow-md hover:bg-[#5F0F12] hover:shadow-lg transition-all"
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
