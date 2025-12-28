import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    hp_text: '', // honeypot
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStartTime] = useState(Date.now());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ⛔ Time-based spam check (2 seconds minimum)
    if (Date.now() - formStartTime < 2000) return;

    // ⛔ Honeypot spam check
    if (formData.hp_text) return;

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          hp_text: '',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

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
      value: '+91-022-35978445',
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with our team to explore globally proven ultrasonic and inspection 
              technologies for your operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#2F4F45] mb-6">
                Send Us a Message
              </h2>

              <Card>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[rgba(47,79,69,0.08)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[#2F4F45]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2F4F45] mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="hp_text"
                      value={formData.hp_text}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-lg font-medium flex items-center justify-center transition-all ${
                        loading
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:shadow-lg hover:scale-105'
                      }`}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                      <Send className="ml-2 w-5 h-5" />
                    </button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
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