import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import scanmasterLogo from '../../assets/scanmaster_logo.png';
import immersion1 from '../../assets/sm_iuis1.png';
import immersion2 from '../../assets/sm_iuis2.png';
import squirter1 from '../../assets/sm_suis1.png';
import squirter2 from '../../assets/sm_suis2.png';
import pipe1 from '../../assets/sm_ptis.png';
import rail1 from '../../assets/sm_rts.png';
import spotweld1 from '../../assets/sm_swts.png';
import forgings1 from '../../assets/sm_forgings.jpg';
import heroBg from '../../assets/immersion-inspection.jpg';

const PRODUCTS = [
  {
    title: 'Immersion Ultrasonic Inspection Systems',
    bullets: [
      'Automated multi-axis immersion scanners (C-Scan) meeting international NDT standards.',
      'Approved by all major aerospace companies worldwide.',
      'Used for high-precision inspection of aerospace, automotive, and industrial components.',
    ],
    images: [immersion1, immersion2],
  },
  {
    title: 'Squirter Ultrasonic Inspection Systems',
    bullets: [
      'Utilizes squirter water jets in PE/TT and simultaneous PE/TT modes.',
      'Suitable for 2D / 2.5D / 3D parts including composites.',
    ],
    images: [squirter1, squirter2],
  },
  {
    title: 'Pipe & Tube Inspection Systems',
    bullets: [
      'Designed for ultrasonic testing of pipes, plates and tubes in production lines.',
      'Automated systems tailored for high-volume, consistent inspection.',
    ],
    images: [pipe1],
  },
  {
    title: 'Rail Testing Systems',
    bullets: [
      'TrackMaster inspects rails at speeds up to ~90 km/h from rail-mounted vehicles.',
      'Real-time flaw detection, GPS defect localization, and automatic reporting.',
    ],
    images: [rail1],
  },
  {
    title: 'Spot Weld Testing Solutions',
    bullets: [
      'UT/Mate SpotWeld Inspector provides automatic quality classification of spot welds.',
      'Automated pass/fail decisions and integrated reporting for automotive body structures.',
    ],
    images: [spotweld1],
  },
  {
    title: 'Large Forgings & Bearings Inspection',
    bullets: [
      'Custom ultrasonic inspection for large forgings, turbine components, and bearings.',
      'Designed for automated high-volume inspection in heavy-industry and energy sectors.',
    ],
    images: [forgings1],
  },
];

export default function ScanMasterDetail() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* Hero parallax */
      gsap.to('.sm-hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: '.sm-hero', scrub: true, start: 'top top', end: 'bottom top' },
      });

      /* Hero content */
      gsap.from('.sm-hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      /* Overview */
      gsap.from('.sm-overview', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.sm-overview', start: 'top 85%', once: true },
      });

      /* Product sections */
      gsap.utils.toArray<HTMLElement>('.sm-product').forEach((el) => {
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
      <section className="sm-hero relative min-h-[500px] overflow-hidden bg-gray-950">
        <div className="sm-hero-bg absolute inset-y-0 right-0 w-full lg:w-3/5 scale-[1.02]">
          <img src={heroBg} alt="" className="w-full h-full object-contain object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
        </div>

        <div className="sm-hero-content relative z-10 min-h-[500px] flex items-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-xl">
          <div className="mb-6 h-12 flex items-center">
            <img
              src={scanmasterLogo}
              alt="ScanMaster Systems"
              className="max-h-full max-w-[190px] object-contain"
            />
          </div>

          <p className="text-white/80 text-xs uppercase tracking-widest font-body mb-3">
            NDT Ultrasonic Inspection
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-none">
            ScanMaster Systems Ltd.
          </h1>
          <p className="text-white/80 text-sm font-body mt-3">Israel</p>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="sm-overview py-12 lg:py-16 px-6 sm:px-12 lg:px-16 bg-surface border-b border-edge">
        <div className="max-w-4xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Company Overview</p>
          <div className="space-y-4 text-ink-muted font-body text-base leading-relaxed">
            <p>
              ScanMaster Systems Ltd., based in Israel, is a global leader in automated ultrasonic inspection solutions, designing and manufacturing systems tailor-made for specific applications. Their in-house technology combines advanced ultrasonic instrumentation, motion control mechanics, and software to deliver precise and reliable inspection results.
            </p>
            <p>
              They have supplied several hundreds of systems to various industries including aerospace, defence, steel, forging and castings, tubes and pipes, bearings, and automotive.
            </p>
            <p>
              We have several systems installed in India for various applications — aerospace, defence, automotive, bearings, Ti and other alloys.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-14 lg:py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Product Range</p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
            Core Product Categories
          </h2>

          <div className="space-y-20">
            {PRODUCTS.map((product, i) => (
              <div key={i} className="sm-product">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  {/* Text */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                      {product.title}
                    </h3>
                    <ul className="space-y-3">
                      {product.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Images */}
                  {product.images.length > 0 ? (
                    <div className={`grid ${product.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {product.images.map((img, j) => (
                        <div
                          key={j}
                          className="bg-surface border border-edge rounded-2xl p-4 flex items-center justify-center min-h-[200px]"
                        >
                          <img
                            src={img}
                            alt=""
                            className="object-contain max-h-[220px] w-full"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`bg-surface border border-edge rounded-2xl p-8 flex items-center justify-center min-h-[160px] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <p className="text-ink-muted text-sm font-body text-center italic">
                        Custom systems — contact us for specifications
                      </p>
                    </div>
                  )}
                </div>

                {/* Divider */}
                {i < PRODUCTS.length - 1 && (
                  <div className="mt-16 border-t border-edge/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 sm:px-12 bg-surface border-t border-edge">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-5">Interested in ScanMaster?</h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss your specific inspection requirements, or visit the ScanMaster website for full product specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F4F45] text-white rounded-lg font-body font-medium text-sm shadow-md hover:bg-[#5F0F12] hover:shadow-lg transition-all"
            >
              Contact Yantriq
            </Link>
            <a
              href="https://scanmaster-irt.com/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              ScanMaster Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
