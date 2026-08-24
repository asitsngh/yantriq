import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import radalyticaLogo from '../../assets/radalytica_logo.svg';

import rad1 from '../../assets/rad1.png';
import rad2 from '../../assets/rad2.png';
import rad3 from '../../assets/rad3.png';
import rad4 from '../../assets/rad4.png';
import rad5 from '../../assets/rad5.png';

const FEATURES = [
  {
    title: 'Region-of-Interest (ROI) Scanning',
    bullets: [
      'Scan only specific areas of large structures.',
      'Significantly reduces acquisition time while preserving critical information.',
      'Eliminates the need to scan the entire object when only a specific region matters.',
    ],
  },
  {
    title: 'Automation & Consistency',
    bullets: [
      'Automatization minimizes human error through consistent, repeatable inspections.',
      'Automatic checking of the same object or location repeatedly.',
      'Dramatically increases R&D iterations with high resolution and sensitivity.',
      'Full integration with manufacturing workflows.',
    ],
  },
  {
    title: 'Potential Areas of Application',
    bullets: [
      'Evaluation of castings, forgings, and machined components for internal defects.',
      'Composite materials including GFRP and CFRP, both monolithic and sandwich structures.',
      'Detection of delamination, fiber breakage, and resin-rich or resin-lean zones.',
      'Inspection of bonded structures for disbonds and adhesive failures.',
      'Additive manufactured (3D printed) parts for internal integrity verification.',
      'Inspection of metal welds for cracks, lack of fusion, and porosity.',
      'Any other suitable NDT applications.',
    ],
  },
];

export default function RadalyXDetail() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* Hero parallax */
      gsap.to('.rx-hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.rx-hero',
          scrub: true,
          start: 'top top',
          end: 'bottom top',
        },
      });

      /* Hero content */
      gsap.from('.rx-hero-content > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
      });

      /* Overview */
      gsap.from('.rx-overview', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.rx-overview',
          start: 'top 85%',
          once: true,
        },
      });

      /* Content sections */
      gsap.utils.toArray<HTMLElement>('.rx-content-section').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      });

      /* Feature sections */
      gsap.utils.toArray<HTMLElement>('.rx-feature').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}
      <section className="rx-hero relative h-[70vh] min-h-[500px] overflow-hidden">

        <div className="rx-hero-bg absolute inset-0 scale-[1.1]">
          <img
            src={rad1}
            alt="RadalyX robotic CT inspection system"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-canvas/20 via-canvas/55 to-canvas" />
        </div>

        <div className="rx-hero-content relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 lg:px-16 pb-14 max-w-7xl mx-auto">

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-ink-muted text-xs font-body uppercase tracking-widest mb-8 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Solutions
          </Link>

          {/* Logo */}
          <div className="mb-5 h-10 flex items-center">
            <img
              src={radalyticaLogo}
              alt="Radalytica"
              className="max-h-full max-w-[160px] object-contain opacity-90"
            />
          </div>

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-2">
            Robotic Multimodal CT Inspection
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink leading-none">
            RadalyX
          </h1>

          <p className="text-ink-muted text-sm font-body mt-2">
            Czech Republic
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          OVERVIEW
      ───────────────────────────────────────── */}
      <section className="rx-overview py-20 px-6 sm:px-12 lg:px-16 bg-surface border-b border-edge">
        <div className="max-w-4xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">
            Company Overview
          </p>

          <div className="space-y-4 text-ink-muted font-body text-base leading-relaxed">

            <p>
              Radalytica, based in the Czech Republic, has developed an
              advanced portable robotic computed tomography (CT) system for
              non-destructive testing (NDT). RadalyX is a modular robotic
              X-ray imaging platform designed to bring the scanner directly
              to the object rather than being restricted by the dimensions of
              a conventional inspection chamber.
            </p>

            <p>
              What sets RadalyX apart is its use of next-generation
              photon-counting imaging sensors (PCD). The technology provides
              enhanced image resolution, improved contrast sensitivity, and
              superior defect detection capability compared with conventional
              systems, allowing even small defects to be identified with high
              accuracy and reliability.
            </p>

            <p>
              Designed for simplicity, RadalyX can be operated professionally
              after just two days of training and can be used in production
              halls, maintenance facilities, laboratories, aircraft hangars,
              or other locations where large and complex structures need to
              be inspected.
            </p>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          PORTABLE & FLEXIBLE INSPECTION
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-20 lg:py-28 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Portable Inspection
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Bring the Scanner to the Object
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Text */}
            <div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                Portable & Modular Robotic CT
              </h3>

              <ul className="space-y-3">

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Brings the scanner directly to the object, eliminating the
                  size limitations of conventional inspection chambers.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Fully portable or installable in manufacturing plants and
                  workshops.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Suitable for production halls, maintenance facilities,
                  laboratories, and aircraft hangars.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Large, complex, and fixed structures can be inspected where
                  they are located.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Professional scanning can be performed after minimal
                  operator training.
                </li>

              </ul>

            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-surface border border-edge rounded-2xl p-4 flex items-center justify-center min-h-[240px]">
                <img
                  src={rad2}
                  alt="RadalyX inspecting an aircraft"
                  className="object-contain max-h-[300px] w-full rounded-xl"
                />
              </div>

              <div className="bg-surface border border-edge rounded-2xl p-4 flex items-center justify-center min-h-[240px]">
                <img
                  src={rad3}
                  alt="RadalyX installed in an industrial inspection facility"
                  className="object-contain max-h-[300px] w-full rounded-xl"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          ROBOTIC AUTOMATION
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Robotic Automation
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Intelligent Robotic Inspection
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="bg-canvas border border-edge rounded-2xl p-6 flex items-center justify-center min-h-[300px]">

              <img
                src={rad5}
                alt="RadalyX portable six-axis robotic inspection system"
                className="object-contain max-h-[360px] w-full"
              />

            </div>

            {/* Text */}
            <div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                Six-Axis Robotic Positioning
              </h3>

              <ul className="space-y-3">

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Two synchronized six-axis robotic arms automatically position
                  the X-ray source and detector.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Intelligent software manages calibration, collision
                  avoidance, and scanning trajectories.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Automatic data acquisition reduces manual operator
                  intervention.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Operators simply define the inspection task while the system
                  manages the scanning process.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Enables repeatable inspection of complex or fixed structures.
                </li>

              </ul>

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          PHOTON COUNTING
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-20 lg:py-28 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Advanced Imaging
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Photon-Counting Detection
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div className="lg:order-2">

              <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                High Resolution & Sensitivity
              </h3>

              <ul className="space-y-3">

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Photon-counting X-ray detectors provide very high spatial
                  resolution down to 55 µm.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Enhanced image resolution and contrast sensitivity improve
                  the detection of small defects.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  High dynamic range enables imaging of highly attenuating
                  objects while retaining useful information from low
                  attenuation regions.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Standard flat-panel detectors can also be integrated when
                  required by the customer.
                </li>

              </ul>

            </div>

            {/* Image */}
            <div className="lg:order-1 bg-surface border border-edge rounded-2xl p-5 flex items-center justify-center">

              <img
                src={rad4}
                alt="RadalyX photon-counting X-ray imaging example"
                className="object-contain max-h-[430px] w-full"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          MULTIMODAL IMAGING
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-20 lg:py-28 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Multimodal Imaging
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Multiple Inspection Modalities
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                One Robotic Platform, Multiple Techniques
              </h3>

              <ul className="space-y-3">

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  2D Radiography for rapid inspection and imaging.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  3D Computed Tomography for detailed internal analysis.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Tomosynthesis and arbitrary-path CT for flexible inspection
                  geometries.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Laser surface profiling for dimensional measurements.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Back-scattering and XRD applications for material
                  characterization.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Spectral imaging for differentiating materials based on
                  X-ray energy.
                </li>

              </ul>

            </div>

            {/* Image */}
            <div className="bg-canvas border border-edge rounded-2xl p-6 flex items-center justify-center min-h-[300px]">

              <img
                src={rad5}
                alt="RadalyX multimodal robotic inspection platform"
                className="object-contain max-h-[360px] w-full"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          CORE FEATURES
      ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Features & Capabilities
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-16 leading-tight">
            Built for Advanced NDT
          </h2>

          <div className="space-y-16">

            {FEATURES.map((feature, i) => (
              <div key={i} className="rx-feature">

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                  <div>
                    <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                      {feature.title}
                    </h3>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {i < FEATURES.length - 1 && (
                  <div className="mt-16 border-t border-edge/40" />
                )}

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}
      <section className="py-20 px-6 sm:px-12 bg-surface border-t border-edge">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-heading font-bold text-ink mb-5">
            Interested in RadalyX?
          </h2>

          <p className="text-ink-muted font-body text-sm mb-8 leading-relaxed">
            Contact Yantriq to discuss your specific inspection requirements,
            or visit the Radalytica website for full product specifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
            >
              Contact Yantriq
            </Link>

            <a
              href="https://radalytica.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-edge text-ink-muted rounded-full font-body text-sm hover:border-brand-teal hover:text-ink transition-colors"
            >
              Radalytica Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}   