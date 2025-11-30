import { Target, Users, Award, Heart } from 'lucide-react';
import Card from '../components/Card';

export default function About() {
  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Mission Driven',
      description:
        'To empower businesses with innovative technology solutions that create lasting impact and drive meaningful change.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'People First',
      description:
        'We believe in building strong relationships with our clients and investing in our talented team members.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Excellence',
      description:
        'Committed to delivering the highest quality solutions that exceed expectations and industry standards.',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Integrity',
      description:
        'Operating with transparency, honesty, and ethical practices in everything we do.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About YantriQ</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of passionate innovators dedicated to transforming businesses through
              cutting-edge technology solutions. With over 15 years of experience, we've helped
              hundreds of companies achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals driving YantriQ forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-blue-100">
            <p>
              Founded in 2008, YantriQ emerged from a simple vision: to make enterprise-grade
              technology accessible to businesses of all sizes. What started as a small team of
              three has grown into a thriving organization of over 50 talented professionals.
            </p>
            <p>
              Today, we serve clients across the globe, delivering innovative solutions that drive
              real business outcomes. Our journey has been marked by countless success stories,
              each one reinforcing our commitment to excellence and innovation.
            </p>
            <p>
              As we look to the future, we remain dedicated to our founding principles: put
              clients first, embrace innovation, and never stop learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
