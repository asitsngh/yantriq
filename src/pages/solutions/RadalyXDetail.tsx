import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/gsap';

import radalyticaLogo from '../../assets/radalytica_logo.svg';

import rad1 from '../../assets/rad1.png';
import rad2 from '../../assets/rad2.png';
import rad3 from '../../assets/rad3.png';
import rad4 from '../../assets/rad4.png';
import rad5 from '../../assets/rad5.png';

const FEATURES = [
  {
    title: 'Advanced Features',
    bullets: [
      'High-resolution photon-counting X-ray detectors down to 55 µm.',
      'Region-of-interest scanning for large structures, reducing acquisition time while preserving critical information.',
      'Spectral imaging differentiates materials based on X-ray energy.',
      'Fully portable or installable in a workshop, with increased R&D iteration speed.',
    ],
  },
  {
    title: 'Inspection Modalities',
    bullets: [
      '2D Radiography and 3D Computed Tomography.',
      'Tomosynthesis and arbitrary-path CT.',
      'Laser surface profiling.',
      'Back-scattering and XRD applications.',
      'Standard flat-panel detectors can also be integrated when preferred.',
    ],
  },
  {
    title: 'Potential Areas of Application',
    bullets: [
      'Evaluation of castings, forgings, and machined components for internal defects.',
      'Composite materials including GFRP and CFRP, both monolithic and sandwich structures.',
      'Detection of delamination, fiber breakage, and resin-rich or resin-lean zones.',
      'Inspection of bonded structures for disbonds and adhesive failures.',
      'Additive-manufactured (3D printed) parts for internal integrity verification.',
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
      <section className="rx-hero relative min-h-[500px] overflow-hidden bg-gray-950">
        <div className="rx-hero-bg absolute inset-y-0 right-0 w-full lg:w-3/5 scale-[1.02]">
          <img
            src={rad1}
            alt="RadalyX robotic CT inspection system"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
        </div>

        <div className="rx-hero-content relative z-10 min-h-[500px] flex items-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="max-w-xl">
            <div className="mb-6 h-12 flex items-center">
              <img
                src={radalyticaLogo}
                alt="Radalytica"
                className="max-h-full max-w-[190px] object-contain"
              />
            </div>

            <p className="text-white/80 text-xs uppercase tracking-widest font-body mb-3">
              Robotic Multimodal CT Inspection
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-none">
              RadalyX
            </h1>

            <p className="text-white/80 text-sm font-body mt-3">Czech Republic</p>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed font-body mt-6 max-w-lg">
              Portable robotic computed tomography for high-resolution inspection
              of large and complex components.
            </p>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
            <p>
              We would like to introduce our advanced X-ray CT scan solutions
              designed and manufactured by Radalytica, based in the Czech
              Republic. Radalytica is an innovative imaging technology company
              that has developed a groundbreaking portable robotic computed
              tomography (CT) system.
            </p>

            <p>
              What sets our solution apart is the use of next-generation
              photon-counting imaging sensors (PCD). This technology offers
              enhanced image resolution, improved contrast sensitivity, and
              superior defect detection capability compared to conventional
              systems, allowing even the smallest defects to be identified
              with high accuracy and reliability.
            </p>
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
      <section className="rx-content-section py-14 lg:py-20 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

            <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Portable & Flexible Inspection
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
            Bring the Scanner to the Object
          </h2>

          <div className="space-y-8">

            {/* Text */}
            <div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-5">
                Portable & Modular Robotic CT
              </h3>

              <ul className="space-y-3">

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  RadalyX brings the scanner directly to the object and can
                  also be installed in a manufacturing plant.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Built for simplicity, advanced CT inspection can be performed
                  professionally after just two days of training.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Suitable for production halls, maintenance facilities,
                  laboratories, and aircraft hangars.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Large, complex, or fixed structures can be inspected where
                  they are located, without an inspection chamber size limit.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  The system supports inspection of objects of unlimited size.
                </li>

              </ul>

            </div>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-center min-h-[320px]">
                <img
                  src={rad2}
                  alt="RadalyX inspecting an aircraft"
                  className="object-contain max-h-[420px] w-full rounded-xl"
                />
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-center min-h-[320px]">
                <img
                  src={rad3}
                  alt="RadalyX installed in an industrial inspection facility"
                  className="object-contain max-h-[420px] w-full rounded-xl"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          ROBOTIC AUTOMATION
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-14 lg:py-20 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Robotic Automation
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
            Intelligent Robotic Inspection
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-center min-h-[420px]">

              <img
                src={rad5}
                alt="RadalyX portable six-axis robotic inspection system"
                className="object-contain max-h-[500px] w-full"
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
                  manages calibration, collision avoidance, trajectories, and
                  the scanning process.
                </li>

                <li className="flex items-start gap-3 text-ink-muted font-body text-sm leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-light mt-2" />
                  Automation enables repeatable checks of the same object or
                  location while minimizing human error.
                </li>

              </ul>

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          PHOTON COUNTING
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-14 lg:py-20 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Advanced Imaging
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
            Photon-Counting Detection
          </h2>

          <div className="grid gap-8">

            {/* Text */}
            <div>

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
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-center min-h-[520px]">

              <img
                src={rad4}
                alt="RadalyX photon-counting X-ray imaging example"
                className="object-contain max-h-[760px] w-full"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          MULTIMODAL IMAGING
      ───────────────────────────────────────── */}
      <section className="rx-content-section py-14 lg:py-20 px-6 sm:px-12 lg:px-16 bg-surface border-y border-edge">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Multimodal Imaging
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
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
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-center min-h-[420px]">

              <img
                src={rad5}
                alt="RadalyX multimodal robotic inspection platform"
                className="object-contain max-h-[500px] w-full"
              />

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          CORE FEATURES
      ───────────────────────────────────────── */}
      <section className="py-14 lg:py-20 px-6 sm:px-12 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">
            Features & Capabilities
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink mb-10 leading-tight">
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
                  <div className="mt-10 border-t border-edge/40" />
                )}

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}
      <section className="py-14 px-6 sm:px-12 bg-surface border-t border-edge">

        <div className="max-w-5xl mx-auto text-center">

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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2F4F45] text-white rounded-lg font-body font-medium text-sm shadow-md hover:bg-[#5F0F12] hover:shadow-lg transition-all"
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