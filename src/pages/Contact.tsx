import { useLayoutEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { gsap } from '../lib/gsap';

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Inject hCaptcha script once
    if (!document.querySelector('script[src*="hcaptcha"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.hcaptcha.com/1/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-label', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.contact-hero', start: 'top 90%', once: true } });
      gsap.from('.contact-hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', immediateRender: false, scrollTrigger: { trigger: '.contact-hero', start: 'top 90%', once: true } });
      gsap.from('.contact-hero-sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.1, ease: 'power2.out', immediateRender: false, scrollTrigger: { trigger: '.contact-hero', start: 'top 90%', once: true } });

      gsap.from('.contact-form-card', {
        opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.contact-content', start: 'top 90%', once: true },
      });

      gsap.from('.contact-info-card', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.contact-content', start: 'top 90%', once: true },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'sales@yantriq.in',
      link: 'mailto:sales@yantriq.in',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91-022-35978445 / +91-98191-22280',
      link: 'tel:+9102235978445',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'F-311, Kailas Industrial Complex, Park Site, Vikhroli (W), Mumbai – 400079',
      link: 'https://maps.app.goo.gl/sLQLUz5PYaPJU6qH8',
    },
  ];

  return (
    <div ref={pageRef} className="bg-canvas text-ink">

      {/* ── HERO ── */}
      <section className="contact-hero pt-36 pb-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="contact-hero-label text-ink-muted text-xs uppercase tracking-[0.3em] font-body mb-5">
            Contact
          </p>
          <h1 className="contact-hero-title text-5xl lg:text-7xl font-heading font-bold text-ink leading-none mb-6">
            Get In Touch
          </h1>
          <p className="contact-hero-sub text-base lg:text-lg text-ink-muted max-w-xl leading-relaxed font-body">
            Connect with our team to explore globally proven ultrasonic and inspection technologies for your operational needs.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="contact-content pb-24 lg:pb-32 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── FORM ── */}
            <div className="contact-form-card">
              <h2 className="text-2xl font-heading font-bold text-ink mb-7">
                Send Us a Message
              </h2>
              <div className="bg-surface border border-edge rounded-2xl p-7 sm:p-8">
                <form
                  action="https://formspree.io/f/xpqwgenj"
                  method="POST"
                  className="space-y-5"
                >
                  {[
                    { label: 'Name', name: 'name', type: 'text', required: true },
                    { label: 'Email', name: 'email', type: 'email', required: true },
                    { label: 'Company', name: 'company', type: 'text', required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-body uppercase tracking-widest text-ink-muted mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full px-4 py-3 bg-canvas border border-edge rounded-xl text-ink font-body text-sm placeholder-ink-muted/40 focus:outline-none focus:border-brand-teal transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-body uppercase tracking-widest text-ink-muted mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-canvas border border-edge rounded-xl text-ink font-body text-sm placeholder-ink-muted/40 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                    />
                  </div>

                  {/* hCaptcha */}
                  <div className="pt-1">
                    <div
                      className="h-captcha"
                      data-sitekey="0e52f250-99ac-4712-98b2-6e7ec07a679e"
                      data-theme="dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal text-ink rounded-xl font-body font-medium text-sm hover:bg-brand-light transition-colors"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* ── CONTACT INFO ── */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-ink mb-7">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-info-card group flex items-start gap-5 bg-surface border border-edge rounded-2xl p-6 hover:border-brand-teal/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-light group-hover:bg-brand-teal/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-body uppercase tracking-widest text-ink-muted mb-1">
                        {info.title}
                      </p>
                      <p className="text-ink text-sm font-body leading-relaxed">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Extra info */}
              <div className="mt-8 p-6 bg-surface/50 border border-edge/50 rounded-2xl">
                <p className="text-ink-muted text-sm font-body leading-relaxed">
                  Our team of highly qualified field experts is available for technical inquiries, product demonstrations, and project consultations. We typically respond within one business day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
