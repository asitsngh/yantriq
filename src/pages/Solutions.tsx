import { useState } from 'react';
import scanmasterLogo from '../assets/scanmaster_logo.png';
import lismarLogo from '../assets/lismar_logo1.webp';
import comexLogo from '../assets/Comex-AS.webp';


export default function Solutions() {
  const oems = [
    {
      name: 'ScanMaster Systems Ltd.',
      logo: scanmasterLogo,
      website: 'https://scanmaster-irt.com/products/',
      description: `
        <p>
        ScanMaster is a global leader in the development, design and manufacturing of automated ultrasonic inspection systems. Our technologically innovative systems have been installed with prime customers worldwide. 
        </p>
        <br/><br/>
        <p>
        Each ScanMaster ultrasonic inspection system has a number of core modules which are integrated in application-specific configurations delivering the right solution to address the specific requirements and relevant standards. These modules include advanced industrial PC-based digital ultrasonic instrumentation, mechanical manipulation systems, servo motion control hardware and production-oriented software packages. 
        </p>
        <br/><br/>
        <p>
        With more than three decades of inspection system expertise, ScanMaster has built up a large, knowledgeable and strong team of experts with diverse technology skills and application expertise. Delivering inspection systems to critical applications, our strong commitment to quality, service and customer support has been a cornerstone to our success. 
        ScanMaster has installed more than 400 of ultrasonic inspection systems with prime customers at different locations all over the world. Our major customers come from various industries such as: aerospace and aircraft, automotive, railroad, Steel, pipes and tubes, energy, forging, casting and ordnance etc.
        </p>
      `,
    },
    {
      name: 'LISMAR Engineering BV',
      logo: lismarLogo,
      website: 'https://www.lismar.com/products/',
      description: `
        <p>
        Lismar is a leading manufacturer of roll inspection system installed on roll grinding machines, having most comprehensive range of solution to meet the inspection requirements in steel and aluminium industries. They are fully dedicated to roll inspection technology and have supplied large numbers of such system worldwide including India.  
        </p>      
      `,
    },
    {
      name: 'Comex AS',
      logo: comexLogo,
      website: 'https://comex-group.com/about-us/#more',
      description: `
        <p>
        Comex Group delivers technologies for production and separation of fine powders and optical separation of large particles. The company develops innovative, highly advanced solutions for optimisation of the production costs that increase profitability of production processes through enhancing the quality of the final product, reducing the energy consumption and achieving more environmentally friendly parameters. Our customers include mines, processing plants, chemical plants, recycling plants as well as higher education institutions. 
        </p>
        <br/><br/>
        <p>
        Comex derives from SIM Investment Group and SINTEF Materials Technology, which is the biggest research institution in Scandinavia, whereas majority of the offered solutions have been developed in the recognized laboratories of NTNU University in Trondheim. 
        </p>
        <br/><br/>
        <p>
        What distinguishes Comex is its own testing laboratory, where we test samples delivered by the customers and which enables us to develop devices that suit individual needs of our customers. Our laboratory is open also to our contractors, who are very welcomed to take part in these tests. 
        </p>
        <br/><br/>
        <p>
        Since 2003 Comex has delivered over 150 innovative solutions for larger and smaller mining and production companies from several dozen countries. Our sales representatives operate in Europe, Asia, America, Africa and Australia.  
        </p>
      `,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)] py-20 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">
            Industrial Inspection Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven inspection and NDT solutions delivered through globally recognized OEM technologies for critical industrial applications.
          </p>
        </div>
      </section>

      {/* OEM Tabs */}
      <section className="pt-12 pb-20 lg:pt-12 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 overflow-x-auto pb-2 mb-12">
            {oems.map((oem, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 pb-3 whitespace-nowrap transition-colors ${
                  activeIndex === index
                    ? 'border-b-2 border-[#2F4F45] text-[#2F4F45]'
                    : 'text-gray-500 hover:text-[#2F4F45]'
                }`}
              >
                <img
                  src={oem.logo}
                  alt={oem.name}
                  className="h-8 object-contain"
                />
                <span className="font-medium text-sm lg:text-base">
                  {oem.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active OEM Content */}
          {/* Description */}
          <div className="lg:col-span-2">
            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html: oems[activeIndex].description,
              }}
            />

            {/* Explore Solutions */}
            <div className="mt-6">
              <a
                href={oems[activeIndex].website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
              >
                Explore Solutions
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
      </section>
    </div>
  );
}
