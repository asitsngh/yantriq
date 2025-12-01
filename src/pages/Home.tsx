import { ArrowRight, Sparkles, Shield, Zap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import surfaceWave from '../assets/Surfacewave-Product-Slide-1-1.jpg';
import immersionInspection from '../assets/immersion-inspection.jpg'
import comexInstrument from '../assets/MSX2-1024x7842.jpg'
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: surfaceWave,
      title: 'Scanmaster-Fully Automated Advanced Ultrasonic C Scan Machines',
    },
    {
      image: immersionInspection,
      title: 'LISMAR-Most Advanced Fully Automated Roll Inspection System for Rolling Mills',
    },
    {
      image: comexInstrument,
      title: 'Comex-XRT Based Full Automated Dry Beneficiation and Sorting of Minerals, Ores, Coals etc.',
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#2F4F45]" />,
      title: 'Engineering Excellence',
      description: 'State-of-the-art systems designed with global expertise and robust industrial engineering.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#2F4F45]" />,
      title: 'Quality You Can Trust',
      description: 'Reliable inspection and sorting that guarantees component integrity and material purity.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#2F4F45]" />,
      title: 'Customer-Centric',
      description: 'Support-first approach to ensure smooth operations.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#2F4F45]" />,
      title: 'Industry-Ready Support',
      description: 'Comprehensive installation, training, and long-term service for seamless operations.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '25+', label: 'Years Experience' },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[rgba(47,79,69,0.08)] text-[#2F4F45] px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Next-Generation Technology</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Delivering {' '}
                <span className="bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">
                  Accuracy. 
                </span>
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevating {' '}
                <span className="bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">
                  Quality.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enabling industries to achieve safer, smarter, and more efficient operations with cutting-edge engineering systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-[#2F4F45] hover:text-[#2F4F45] transition-all"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <ImageSlider
              interval={5000}
              slides={[
                { image: surfaceWave, title: "Scanmaster – Fully Automated Ultrasonic C-Scan Systems" },
                { image: immersionInspection, title: "LISMAR – Advanced Roll Inspection Systems" },
                { image: comexInstrument, title: "Comex – XRT-Based Automated Sorting & Beneficiation" },
              ]}
            />

          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yantriq?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <div className="text-[#2F4F45] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#2F4F45] to-[#5F0F12] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white">
            Join hundreds of companies that trust Yantriq for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#2F4F45] rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}