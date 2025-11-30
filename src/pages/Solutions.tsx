import { Cloud, Brain, BarChart, Shield, Code, Smartphone } from 'lucide-react';
import Card from '../components/Card';

export default function Solutions() {
  const solutions = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services that optimize performance and reduce costs.',
      features: ['AWS & Azure Integration', 'Cloud Migration', 'DevOps Automation', '24/7 Support'],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Machine Learning',
      description:
        'Intelligent automation and predictive analytics to unlock insights and drive decision-making.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Consulting'],
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Data Analytics',
      description:
        'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Warehousing', 'Custom Reports'],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Development',
      description:
        'Bespoke software solutions tailored to your unique business requirements and workflows.',
      features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Solutions',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'App Modernization', 'Mobile Strategy'],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive technology solutions designed to address your unique business
              challenges and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} hover>
                <div className="text-blue-600 mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description:
                    'We work closely with you to understand your business goals, challenges, and requirements.',
                },
                {
                  step: '02',
                  title: 'Design & Architecture',
                  description:
                    'Our team creates a comprehensive solution architecture tailored to your needs.',
                },
                {
                  step: '03',
                  title: 'Development & Testing',
                  description:
                    'Agile development with continuous testing ensures quality and flexibility.',
                },
                {
                  step: '04',
                  title: 'Deployment & Support',
                  description:
                    'Seamless deployment with ongoing support and optimization to ensure success.',
                },
              ].map((process, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
