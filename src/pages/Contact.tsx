import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      value: 'F-311, KAILAS INDUSTRIAL COMPLEX, PARK SITE, VIKHROLI (W), MUMBAI - 400 079, INDIA',
      link: 'https://maps.app.goo.gl/sLQLUz5PYaPJU6qH8',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discuss your requirements? Connect with us to explore 
              how our solutions can support your operational and technical goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2F4F45] mb-6">Send Us a Message</h2>
              <Card>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[rgba(47,79,69,0.08)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[#2F4F45]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2F4F45] mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F4F45] focus:border-transparent outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </button>
                  </form>
                )}
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#2F4F45] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} hover>
                    <a
                      href={info.link}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgba(47,79,69,0.08)] rounded-lg flex items-center justify-center text-[#2F4F45] group-hover:bg-[#5F0F12] group-hover:text-white transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2F4F45] mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <h3 className="text-xl font-bold text-[#2F4F45] mb-4">Office Hours (IST)</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:30 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
