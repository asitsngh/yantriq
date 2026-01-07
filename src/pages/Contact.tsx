import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useEffect } from 'react';
import Card from '../components/Card';

export default function Contact() {
  useEffect(() => {
    // Inject hCaptcha script once
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[#2F4F45]" />,
      title: 'Email',
      value: 'sales@yantriq.in',
      link: 'mailto:sales@yantriq.in',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#2F4F45]" />,
      title: 'Phone',
      value: '+91-022-35978445 / +91-98191-22280',
      link: 'tel:+9102235978445',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#2F4F45]" />,
      title: 'Location',
      value:
        'F-311, Kailas Industrial Complex, Park Site, Vikhroli (W), Mumbai - 400079, India',
      link: 'https://maps.app.goo.gl/sLQLUz5PYaPJU6qH8',
    },
  ];

  return (
    <div>
      {/* ================= Hero ================= */}
      <section className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connect with our team to explore globally proven ultrasonic and
            inspection technologies for your operational needs.
          </p>
        </div>
      </section>

      {/* ================= Content ================= */}
      <section className="py-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* ================= Form ================= */}
            <div>
              <h2 className="text-3xl font-bold text-[#2F4F45] mb-6">
                Send Us a Message
              </h2>

              <Card>
                <form
                  action="https://formspree.io/f/xpqwgenj"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] outline-none resize-none"
                    />
                  </div>

                  {/* ✅ hCaptcha (manual, REQUIRED) */}
                  <div className="pt-4">
                    <div
                      className="h-captcha"
                      data-sitekey="0e52f250-99ac-4712-98b2-6e7ec07a679e"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-lg font-medium flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </Card>
            </div>

            {/* ================= Contact Info ================= */}
            <div>
              <h2 className="text-3xl font-bold text-[#2F4F45] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} hover>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgba(47,79,69,0.08)] rounded-lg flex items-center justify-center group-hover:bg-[#5F0F12] group-hover:text-white transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2F4F45] mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
