import { Target, Users, Award, Heart, X } from 'lucide-react';
import Card from '../components/Card';
import { useState } from 'react';
import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';
import kleinknechtLogo from '../assets/kleinknecht_logo.webp';

export default function About() {
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Mission Driven',
      description:
        'Deliver internationally compliant NDT solutions, ensuring dependable service quality while enhancing overall production efficiency.',
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
      website: 'https://scanmaster-irt.com/about-scanmaster-systems/',
      description: `
            <p>
              <strong>ScanMaster Systems</strong>, originally founded as Inspection Research & Technologies (IRT), is a global leader in the development, design and manufacturing of automated ultrasonic inspection systems. Our technologically innovative systems have been installed with prime customers worldwide.
            </p>
            <br/>
            <p>
              Each ScanMaster ultrasonic inspection system has a number of core modules which are integrated in application-specific configurations delivering the right solution to address the specific requirements and relevant standards. These modules include advanced industrial PC-based digital ultrasonic instrumentation, mechanical manipulation systems, servo motion control hardware and production-oriented software packages.
            </p>
            <br/>
            <p>
              With more than three decades of inspection system expertise, ScanMaster has built up a large, knowledgeable and strong team of experts with diverse technology skills and application expertise. Delivering inspection systems to critical applications, our strong commitment to quality, service and customer support has been a cornerstone to our success.
            </p>
            <br/><br/>
            <h4><b>Markets ScanMaster Serves</b></h4>
            <p>
              ScanMaster delivers powerful ultrasonic inspection systems in the fields of aerospace, automotive, railways, steel, and power generation among others.
            </p>
            <br/>
            <p>
              Our innovative systems are available for a multitude of environments including laboratories and production facilities and enable the inspection of components both in production prior to use and while in service.
            </p>
      `,
    },
    {
      name: 'Lismar Engineering BV',
      role: 'The Netherlands',
      image: lismarLogo,
      website: 'https://www.lismar.com/about/',
      description:
        `
        <p>
          <strong>LISMAR Engineering BV</strong> is a global leader in roll inspection systems,
          with installations across steel and aluminium production facilities worldwide.
          In addition to its headquarters in the Netherlands and the United States, LISMAR
          maintains an extensive global presence through local representatives in regions
          including China, India, Korea, Taiwan, South Africa, Brazil, Mexico, Russia, and
          Germany.
        </p>
        <br/>
        <p>
          LISMAR is a dynamic and continuously growing company, specializing exclusively in
          roll inspection technology. Its automatic inspection systems detect surface defects
          using Eddy Current Technology (ET) and Surface Wave Technology (SW), while subsurface
          defects are identified through Ultrasonic Testing (UT).
        </p>
        <br/>
        <p>
          With a strong focus on reliability, performance, and customer support, LISMAR has
          established itself as a trusted partner in roll quality control for rolling mills
          worldwide.
        </p>
        `,
    },
    {
      name: 'Comex AS',
      role: 'Norway',
      image: comexLogo,
      website: 'https://comex-group.com/about-us/',
      description:
        `
        <p>
          <strong>Comex</strong> is internationally recognized for its innovative sorting systems
          and advanced pulverizing technologies. Backed by a team of experienced engineers,
          in-house laboratory capabilities, and close cooperation with leading research
          institutions, Comex delivers highly advanced solutions for the production,
          separation of fine powders, and optical sorting of large particles.
        </p>
        <br/>
        <p>
          Comex systems are deployed across mining operations, mineral processing plants,
          chemical facilities, and recycling plants worldwide. These solutions consistently
          deliver measurable operational benefits, enabling customers to optimize production
          costs and enhance profitability by improving the quality of the final product.
        </p>
        `,
    },
    {
        name: 'Kleinknecht',
        role: 'Germany',
        image: kleinknechtLogo,
        website: 'https://www.kleinknecht.de/about-us/',
        description: `
          <p>
            <strong>Kleinknecht</strong> is a globally recognized specialist in Electric Discharge
            Texturing (EDT) systems for flat rolling applications in the steel and aluminium
            industries.
          </p>
          <br/>
          <p>
            Kleinknecht’s EDT solutions enable precise and repeatable surface texturing of work
            rolls, directly influencing strip surface quality, lubrication behavior, and
            downstream forming performance. These systems are widely deployed in leading rolling
            mills worldwide and comply with the highest industrial quality standards.
          </p>
          <br/>
          <p>
            The company originated as an engineering firm specializing in control system design
            and the manufacture of control panels. Over the decades, Kleinknecht has evolved into
            a software-driven systems integrator, leveraging modern technologies to transform
            customer requirements into customized system engineering solutions.
          </p>
          <br/>
          <p>
            One of Kleinknecht’s key strengths is its workforce. With more than 200 highly skilled
            employees across three locations, the company possesses the expertise and capacity
            to support complex industrial projects globally.
          </p>
        `,
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
              <span className="font-bold text-[#5F0F12]">nearly 100 systems installed across the country</span>, several of
              our installations have been operating reliably for more than{' '}
              <span className="font-bold text-[#2F4F45]">20 years</span>.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="fixed inset-0 bg-black/50 z-50 p-4 sm:p-6 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <div
              className="bg-white rounded-2xl max-w-4xl w-full
                        max-h-[90vh] overflow-y-auto
                        relative shadow-xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Content wrapper (padding moved here) */}
              <div className="p-6 sm:p-10">
                
                {/* Header */}
                <div className="flex items-center gap-6 sm:gap-8 mb-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl flex items-center justify-center overflow-hidden bg-gray-50">
                    <img
                      src={team[selectedPartner].image}
                      alt={team[selectedPartner].name}
                      className="h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2F4F45] mb-1">
                      {team[selectedPartner].name}
                    </h3>
                    <p className="text-[#5F0F12] font-medium text-base sm:text-lg">
                      {team[selectedPartner].role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: team[selectedPartner].description,
                  }}
                />

                {/* Learn more link */}
                <div className="mt-6">
                  <a
                    href={team[selectedPartner].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <path d="M21 14v7h-7" />
                      <path d="M3 10v11h11" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
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
              From our early projects to the nearly 100 systems operating successfully across India today, our journey has 
              been shaped by trust, long-term partnerships, and a dedication to solving real industry challenges. Many of our 
              installations have been running efficiently for over 20 years—underscoring our commitment to precision and 
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