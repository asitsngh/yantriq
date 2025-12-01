import { Target, Users, Award, Heart, X } from 'lucide-react';
import Card from '../components/Card';
import { useState } from 'react';
import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';

export default function About() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

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
      name: 'ScanMaster Systems Ltd.',
      role: 'Israel',
      image: scanmasterLogo,
      description:
        `ScanMaster is a global leader in the development, design and manufacturing of automated ultrasonic inspection systems. Their technologically innovative systems have been installed with prime customers worldwide.\n\nWith more than three decades of inspection system expertise, ScanMaster has built up a large, knowledgeable and strong team of experts with diverse technology skills and application expertise. Delivering inspection systems to critical applications, with a strong commitment to quality, service and customer support has been a cornerstone to success.`,
    },
    {
      name: 'Lismar Engineering BV',
      role: 'The Netherlands',
      image: lismarLogo,
      description:
        `LISMAR is a strong growing and dynamic company and is leading in Roll Inspection Systems. LISMAR's automatic Inspection Systems detect Surface defects through Eddy Current Technology (ET) and Surface Wave Technology (SW). For Subsurface defects, Ultrasonic Technology (UT) is applied.\n\n"LISMAR is your trusted partner in Roll Quality Control"`,
    },
    {
      name: 'Comex AS',
      role: 'Norway',
      image: comexLogo,
      description:
        `Comex sorting systems employ the state-of-the-art sensor technologies utilizing X-rays, optical sensors and reflectance in UV and IR light using hyperspectral imaging. These are widely applied in mining and mineral industry for separation of different minerals like coal, quartz, calcite and pre-concentration of metal ores like gold, copper, zinc-lead, tin, chrome and iron ores. The solution offers environment friendly, low cost and highly efficient sorting.`,
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">About Yantriq</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yantriq delivers a comprehensive range of advanced solutions in{' '}
              <span className="font-bold bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">Non-Destructive Testing (NDT)</span> and{' '}
              <span className="font-bold bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">Mineral Sorting</span>, in collaboration with leading design and
              manufacturing companies from Europe and Israel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With <span className="font-bold bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] bg-clip-text text-transparent">over 25 years of cumulative industry experience</span>, we
              specialize in sales, marketing, installation, commissioning, training, and long-term technical support for
              high-precision inspection and sorting systems. Our team consists of highly qualified sales and technical
              engineers who work closely with customers to understand and fulfil their critical operational requirements.
            </p>

            <h3 className="text-2xl font-bold text-[#5F0F12] mb-8">Our Core Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              <Card hover>
                <h4 className="font-bold text-[#2F4F45] mb-3 text-center text-lg">
                  Marketing & Technical Sales
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Marketing and technical sales of products manufactured by us and our global partners.
                </p>
              </Card>

              <Card hover>
                <h4 className="font-bold text-[#2F4F45] mb-3 text-center text-lg">
                  Customized Manufacturing
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Customized manufacturing of system components in India with precision and quality.
                </p>
              </Card>

              <Card hover>
                <h4 className="font-bold text-[#2F4F45] mb-3 text-center text-lg">
                  System Integration & Installation
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  System integration, installation, commissioning, and training—either jointly with our principals or 
                  independently under their supervision.
                </p>
              </Card>

              <Card hover>
                <h4 className="font-bold text-[#2F4F45] mb-3 text-center text-lg">
                  Maintenance & Support
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Maintenance and technical support during and after warranty periods with round-the-clock assistance.
                </p>
              </Card>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We proudly serve many of India's leading{' '}
              <span className="font-bold text-[#2F4F45]">Aerospace</span>,{' '}
              <span className="font-bold text-[#5F0F12]">Defense</span>,{' '}
              <span className="font-bold text-[#2F4F45]">Automotive</span>,{' '}
              <span className="font-bold text-[#5F0F12]">Steel & Pipe</span>, and{' '}
              <span className="font-bold text-[#2F4F45]">Bearing</span> industries. With{' '}
              <span className="font-bold text-[#5F0F12]">over 50 systems installed across the country</span>, several of
              our installations have been operating reliably for more than{' '}
              <span className="font-bold text-[#2F4F45]">16 years</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:pt-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F4F45] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="text-[#2F4F45] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#2F4F45] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:pt-12 lg:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F4F45] mb-4">Meet Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Yantriq Systems Pvt. Ltd. has been established and run by team of highly qualified field experts having 
              backgrounds in metallurgy, Physics and IT. Yantriq has joined together with top rated companies around the world, 
              who are doing R&D, developing latest technologies and solutions in respective fields.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover>
                <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#2F4F45] mb-1 text-center">{member.name}</h3>
                <p className="text-[#5F0F12] font-medium text-center mb-4">{member.role}</p>
                <button
                  onClick={() => setSelectedPartner(index)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] text-white rounded-lg font-medium hover:shadow-lg transition-all opacity-0 group-hover:opacity-100 duration-300"
                >
                  Read More
                </button>
              </Card>
            ))}
          </div>
          <p className="text-lg text-gray-600 max-w-4xl lg:pt-8 mx-auto">
            We are also introducing a new line of Mineral Sorting Solution products, tailored for diverse sectors including mining, 
            mineral processing, chemical plants, recycling units, and academic or research institutions.
          </p>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedPartner !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={team[selectedPartner].image}
                  alt={team[selectedPartner].name}
                  className="h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2F4F45] mb-1">
                  {team[selectedPartner].name}
                </h3>
                <p className="text-[#5F0F12] font-medium">{team[selectedPartner].role}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">
              {team[selectedPartner].description}
            </p>
          </div>
        </div>
      )}

      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#2F4F45] to-[#5F0F12] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-white/90">
            <p>
              Founded in 1998 with a vision to bring world-class industrial technologies to India, Yantriq Systems Private 
              Limited began as a small, highly skilled engineering team focused on delivering reliable Non-Destructive Testing 
              (NDT) solutions. Over time, that team has grown into a strong organization committed to quality, technical 
              excellence, and customer satisfaction.
            </p>
            <p>
              From our early projects to the more than 50 systems operating successfully across India today, our journey has 
              been shaped by trust, long-term partnerships, and a dedication to solving real industry challenges. Many of our 
              installations have been running efficiently for over 16 years—underscoring our commitment to precision and 
              dependable support.
            </p>
            <p>
              As we continue to expand, we remain anchored to our core principles: put customers first, deliver meaningful 
              technology, and evolve to meet the needs of modern industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}