import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import kleinknechtLogo from '../../assets/kleinknecht_logo.webp';
import edtImg1 from '../../assets/kl_edt.png';

export default function KleinknechtDetail() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* Hero gradient "bg" doesn't have an image, just animate content */
      gsap.from('.kk-hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.utils.toArray<HTMLElement>('.kk-section').forEach((el) => {
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
      <section className="relative pt-36 pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/8 via-canvas to-brand-burgundy/5 pointer-events-none" />

        <div className="kk-hero-content relative z-10 max-w-7xl mx-auto">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-ink-muted text-xs font-body uppercase tracking-widest mb-10 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Solutions
          </Link>

          <div className="mb-6 h-10 flex items-center">
            <img
              src={kleinknechtLogo}
              alt="Kleinknecht"
              className="max-h-full max-w-[160px] object-contain opacity-90"
            />
          </div>

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-3">
            Electric Discharge Texturing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-ink leading-none mb-3">
            Kleinknecht
          </h1>
          <p className="text-ink-muted text-sm font-body">Germany</p>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="kk-section py-20 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">
        <div className="max-w-4xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Company Overview</p>
          <div className="space-y-4 text-ink-muted font-body text-base leading-relaxed">
            <p>
              Kleinknecht, based in Germany, is part of Ascential Technologies — a global conglomerate of testing and measurement solutions.
            </p>
            <p>
              As the world's first EDT-machine builder, Kleinknecht is utilizing linear motor technology to control electrodes for high-end EDT machines. The company has evolved from a control system specialist into a full-scale software-driven systems integrator over four decades.
            </p>
            <p>
              With over 200 employees stationed at three sites, Kleinknecht's highly skilled workforce is ready for complex, customized industrial engineering challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ── EDT TECHNOLOGY ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">Technology</p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Electric Discharge Texturing (EDT)
          </h2>

          <div className="kk-section grid lg:grid-cols-2 gap-14 items-start">
            {/* Text */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-5">EDT Machines</h3>

              <div className="space-y-5 text-ink-muted font-body text-base leading-relaxed mb-8">
                <p>
                  In the EDT process — involving thousands of ignitions per second — the surface of rolls up to 10 tons is precisely roughened. These rolls are used for sheet metal in automobile construction and the production of white goods.
                </p>
                <p>
                  Since 2010, Kleinknecht has been a successful manufacturer of complete EDT machines. The innovative concept of the Kleinknecht EDT machine eradicates all known weaknesses of traditional machines through its linear motor technology and advanced control system.
                </p>
                <p>
                  Today, more than 60 EDT machines worldwide are equipped with Kleinknecht electrical controls and generators (firing units) — a testament to the reliability and precision of their technology.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Track Record', val: '40+ years of EDT/EDM machine development' },
                  { label: 'Installations', val: '60+ machines equipped with Kleinknecht controls' },
                  { label: 'Technology', val: 'Linear motor electrode control — world first' },
                  { label: 'Applications', val: 'Steel & aluminium flat rolling mills globally' },
                ].map((item, i) => (
                  <div key={i} className="kk-section flex items-start gap-4 py-3 border-b border-edge/50 last:border-0">
                    <span className="text-ink-muted text-xs font-body uppercase tracking-wider w-28 flex-shrink-0 mt-0.5">
                      {item.label}
                    </span>
                    <span className="text-ink font-body text-sm">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="kk-section bg-surface border border-edge rounded-2xl p-6 flex items-center justify-center min-h-[320px]">
              <img
                src={edtImg1}
                alt="Kleinknecht EDT Machine"
                className="object-contain max-h-[340px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="kk-section py-16 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-heading font-semibold text-ink mb-8">Applications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Cold rolling mill work rolls',
              'Automotive sheet steel texturing',
              'White goods production rolls',
              'Aluminium rolling mill rolls',
              'Precision surface roughness control',
              'Roll regrinding and retexturing',
            ].map((app, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4 border border-edge rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-light flex-shrink-0" />
                <span className="text-ink-muted font-body text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="kk-section py-20 px-6 sm:px-12 border-t border-edge">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-5">Interested in Kleinknecht?</h2>
          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss EDT solutions for your rolling mill, or visit the Kleinknecht website for full technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
            >
              Contact Yantriq
            </Link>
            <a
              href="https://www.kleinknecht.de/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              Kleinknecht Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
