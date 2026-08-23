import { useLayoutEffect, useRef, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/gsap';
import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';
import kleinknechtLogo from '../assets/kleinknecht_logo.webp';
import surfaceWave from '../assets/Surfacewave-Product-Slide-1-1.jpg';

const TEAM = [
  {
    name: 'ScanMaster Systems Ltd.',
    role: 'Israel',
    href: '/solutions/scanmaster',
    image: scanmasterLogo,
    website: 'https://scanmaster-irt.com/about-scanmaster-systems/',
    description: `
      <p><strong>ScanMaster Systems</strong>, originally founded as Inspection Research & Technologies (IRT), is a global leader in the development, design and manufacturing of automated ultrasonic inspection systems. Our technologically innovative systems have been installed with prime customers worldwide.</p>
      <br/>
      <p>Each ScanMaster ultrasonic inspection system has a number of core modules which are integrated in application-specific configurations delivering the right solution to address the specific requirements and relevant standards. These modules include advanced industrial PC-based digital ultrasonic instrumentation, mechanical manipulation systems, servo motion control hardware and production-oriented software packages.</p>
      <br/>
      <p>With more than three decades of inspection system expertise, ScanMaster has built up a large, knowledgeable and strong team of experts with diverse technology skills and application expertise. Delivering inspection systems to critical applications, our strong commitment to quality, service and customer support has been a cornerstone to our success.</p>
      <br/>
      <h4><b>Markets ScanMaster Serves</b></h4>
      <p>ScanMaster delivers powerful ultrasonic inspection systems in the fields of aerospace, automotive, railways, steel, and power generation among others.</p>
    `,
  },
  {
    name: 'Lismar Engineering BV',
    role: 'The Netherlands',
    href: '/solutions/lismar',
    image: lismarLogo,
    website: 'https://www.lismar.com/about/',
    description: `
      <p><strong>LISMAR Engineering BV</strong> is a global leader in roll inspection systems, with installations across steel and aluminium production facilities worldwide. In addition to its headquarters in the Netherlands and the United States, LISMAR maintains an extensive global presence through local representatives in regions including China, India, Korea, Taiwan, South Africa, Brazil, Mexico, Russia, and Germany.</p>
      <br/>
      <p>LISMAR is a dynamic and continuously growing company, specializing exclusively in roll inspection technology. Its automatic inspection systems detect surface defects using Eddy Current Technology (ET) and Surface Wave Technology (SW), while subsurface defects are identified through Ultrasonic Testing (UT).</p>
      <br/>
      <p>With a strong focus on reliability, performance, and customer support, LISMAR has established itself as a trusted partner in roll quality control for rolling mills worldwide.</p>
    `,
  },
  {
    name: 'Comex AS',
    role: 'Poland',
    href: '/solutions/comex',
    image: comexLogo,
    website: 'https://comex-group.com/about-us/',
    description: `
      <p><strong>Comex</strong> is internationally recognized for its innovative sorting systems and advanced pulverizing technologies. Backed by a team of experienced engineers, in-house laboratory capabilities, and close cooperation with leading research institutions, Comex delivers highly advanced solutions for the production, separation of fine powders, and optical sorting of large particles.</p>
      <br/>
      <p>Comex systems are deployed across mining operations, mineral processing plants, chemical facilities, and recycling plants worldwide. These solutions consistently deliver measurable operational benefits, enabling customers to optimize production costs and enhance profitability by improving the quality of the final product.</p>
    `,
  },
  {
    name: 'Kleinknecht',
    role: 'Germany',
    href: '/solutions/kleinknecht',
    image: kleinknechtLogo,
    website: 'https://www.kleinknecht.de/about-us/',
    description: `
      <p><strong>Kleinknecht</strong> is a globally recognized specialist in Electric Discharge Texturing (EDT) systems for flat rolling applications in the steel and aluminium industries.</p>
      <br/>
      <p>Kleinknecht's EDT solutions enable precise and repeatable surface texturing of work rolls, directly influencing strip surface quality, lubrication behavior, and downstream forming performance. These systems are widely deployed in leading rolling mills worldwide and comply with the highest industrial quality standards.</p>
      <br/>
      <p>The company originated as an engineering firm specializing in control system design and the manufacture of control panels. Over the decades, Kleinknecht has evolved into a software-driven systems integrator, leveraging modern technologies to transform customer requirements into customized system engineering solutions.</p>
      <br/>
      <p>One of Kleinknecht's key strengths is its workforce. With more than 200 highly skilled employees across three locations, the company possesses the expertise and capacity to support complex industrial projects globally.</p>
    `,
  },
];

const CORE_AREAS = [
  {
    title: 'Marketing & Technical Sales',
    desc: 'Marketing and technical sales of products manufactured by us and our global partners.',
  },
  {
    title: 'Customized Manufacturing',
    desc: 'Customized manufacturing of system components in India with precision and quality.',
  },
  {
    title: 'System Integration & Installation',
    desc: 'System integration, installation, commissioning, and training — jointly with our principals or independently.',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Maintenance and technical support during and after warranty periods with round-the-clock assistance.',
  },
];

export default function About() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* Hero */
      gsap.from('.about-hero-label', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.about-hero', start: 'top 85%', once: true } });
      gsap.from('.about-hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', immediateRender: false, scrollTrigger: { trigger: '.about-hero', start: 'top 85%', once: true } });
      gsap.from('.about-hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.15, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.about-hero', start: 'top 85%', once: true } });

      /* Stats row */
      gsap.from('.about-stat', { opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.about-stats', start: 'top 85%', once: true } });

      /* Core areas */
      gsap.from('.core-area-item', { opacity: 0, y: 50, stagger: 0.1, duration: 0.7, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.core-areas', start: 'top 85%', once: true } });

      /* Partners */
      gsap.from('.partner-card', {
        opacity: 0,
        y: 40,
        scale: 0.97,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.partners-section', start: 'top 85%', once: true },
      });

      /* Story image parallax */
      gsap.to('.story-bg-img', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-section',
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="about-hero relative pt-36 pb-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Subtle bg gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-canvas pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <p className="about-hero-label text-ink-muted text-xs uppercase tracking-[0.3em] font-body mb-5">
            About Yantriq
          </p>
          <h1 className="about-hero-title text-5xl lg:text-7xl font-heading font-bold text-ink leading-none mb-8">
            Precision. Trust.<br />
            <span className="text-brand-light">25 Years.</span>
          </h1>
          <p className="about-hero-sub text-base lg:text-lg text-ink-muted max-w-2xl leading-relaxed font-body">
            Yantriq delivers a comprehensive range of advanced solutions in{' '}
            <span className="text-ink font-medium">Non-Destructive Testing (NDT)</span> and{' '}
            <span className="text-ink font-medium">Mineral Sorting</span>, in collaboration with leading design and manufacturing companies from Europe and Israel.
          </p>
        </div>
      </section>

      {/* ── KEY STATS ── */}
      <section className="about-stats py-16 border-y border-edge bg-surface">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { value: '100+', label: 'Systems Installed in India' },
              { value: '25+', label: 'Years Cumulative Experience' },
              { value: '20+', label: 'Years — Oldest Installations Still Running' },
            ].map((s, i) => (
              <div key={i} className="about-stat">
                <div className="text-4xl lg:text-5xl font-heading font-black text-ink mb-2">{s.value}</div>
                <div className="text-ink-muted text-xs font-body uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE AREAS ── */}
      <section className="core-areas py-24 lg:py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink leading-tight">
              Our Core Areas of Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_AREAS.map((area, i) => (
              <div
                key={i}
                className="core-area-item bg-surface border border-edge rounded-2xl p-7 hover:border-brand-teal/40 transition-colors"
              >
                <div className="text-3xl font-heading font-black text-ink/10 mb-5 leading-none select-none">
                  0{i + 1}
                </div>
                <h3 className="text-base font-heading font-semibold text-ink mb-3">{area.title}</h3>
                <p className="text-ink-muted text-sm font-body leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 px-6 sm:px-12 bg-surface border-y border-edge">
        <div className="max-w-7xl mx-auto">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-6">
            Industries We Serve
          </p>
          <p className="text-ink-muted font-body text-base leading-relaxed max-w-3xl mb-8">
            We proudly serve many of India's leading{' '}
            <span className="text-ink font-medium">Aerospace</span>,{' '}
            <span className="text-ink font-medium">Defence</span>,{' '}
            <span className="text-ink font-medium">Automotive</span>,{' '}
            <span className="text-ink font-medium">Steel & Pipe</span>, and{' '}
            <span className="text-ink font-medium">Bearing</span> industries. With nearly 100 systems installed across the country, several of our installations have been operating reliably for more than 20 years.
          </p>
        </div>
      </section>

      {/* ── OEM PARTNERS ── */}
      <section className="partners-section py-24 lg:py-32 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-4">OEM Partners</p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ink leading-tight mb-4">
              Meet Our Partners
            </h2>
            <p className="text-ink-muted font-body text-sm leading-relaxed">
              Yantriq has joined together with top-rated companies around the world who are doing R&D, developing the latest technologies and solutions in their respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member, index) => (
              <button
                key={index}
                onClick={() => setSelectedPartner(index)}
                className="partner-card group bg-surface border border-edge rounded-2xl p-6 text-left hover:border-brand-teal/50 transition-all duration-300 flex flex-col"
              >
                {/* Logo */}
                <div className="w-full h-16 flex items-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full max-w-[120px] object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <h3 className="text-sm font-heading font-semibold text-ink mb-1">{member.name}</h3>
                <p className="text-ink-muted text-xs font-body mb-4">{member.role}</p>

                <div className="mt-auto flex items-center gap-2 text-brand-light text-xs font-body font-medium group-hover:gap-3 transition-all duration-200">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="story-section relative py-24 lg:py-36 overflow-hidden">
        {/* Background image */}
        <div className="story-bg-img absolute inset-0 scale-[1.1]">
          <img src={surfaceWave} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-canvas/85" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 text-center">
          <p className="text-ink-muted text-xs uppercase tracking-widest font-body mb-5">Our Story</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-ink mb-8 leading-tight">
            Founded 1998.<br />Still Going Strong.
          </h2>
          <div className="space-y-5 text-ink/80 font-body text-base leading-relaxed text-left">
            <p>
              Founded in 1998 with a vision to bring world-class industrial technologies to India, Yantriq Systems Private Limited began as a small, highly skilled engineering team focused on delivering reliable Non-Destructive Testing (NDT) solutions. Over time, that team has grown into a strong organization committed to quality, technical excellence, and customer satisfaction.
            </p>
            <p>
              From our early projects to the nearly 100 systems operating successfully across India today, our journey has been shaped by trust, long-term partnerships, and a dedication to solving real industry challenges. Many of our installations have been running efficiently for over 20 years — underscoring our commitment to precision and dependable support.
            </p>
            <p>
              As we continue to expand, we remain anchored to our core principles: put customers first, deliver meaningful technology, and evolve to meet the needs of modern industry.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-teal text-ink rounded-full font-body font-medium text-sm hover:bg-brand-light transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARTNER MODAL ── */}
      {selectedPartner !== null && (
        <div
          className="fixed inset-0 bg-canvas/80 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedPartner(null); }}
        >
          <div className="flex min-h-full items-center justify-center p-4 py-10">
            <div className="bg-surface border border-edge rounded-2xl max-w-3xl w-full relative shadow-2xl">
              {/* Close */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-5 right-5 p-2 hover:bg-surface-2 rounded-lg transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-ink-muted" />
              </button>

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-16 flex-shrink-0 flex items-center">
                    <img
                      src={TEAM[selectedPartner].image}
                      alt={TEAM[selectedPartner].name}
                      className="max-h-full max-w-full object-contain opacity-90"
                    />
                  </div>
                  <div>
                    <a
                      href={TEAM[selectedPartner].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-heading font-bold text-ink hover:text-brand-light transition-colors mb-1 block"
                    >
                      {TEAM[selectedPartner].name}
                    </a>
                    <p className="text-ink-muted text-sm font-body">{TEAM[selectedPartner].role}</p>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="font-body text-ink-muted text-sm leading-relaxed space-y-2 prose-headings:text-ink prose-strong:text-ink"
                  dangerouslySetInnerHTML={{ __html: TEAM[selectedPartner].description }}
                />

                {/* External link */}
                <div className="mt-8 pt-6 border-t border-edge">
                  <a
                    href={TEAM[selectedPartner].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-light text-sm font-body font-medium hover:text-ink transition-colors"
                  >
                    To find out more, visit their website <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
