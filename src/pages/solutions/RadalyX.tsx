import radalyticaLogo from '../../assets/radalytica_logo.svg';
import rad1 from '../../assets/rad1.png';
import rad2 from '../../assets/rad2.png';
import rad3 from '../../assets/rad3.png';
import rad4 from '../../assets/rad4.png';
import rad5 from '../../assets/rad5.png';

const applications = [
  'Evaluation of castings, forgings, and machined components for internal defects.',
  'Composite materials including GFRP and CFRP, both monolithic and sandwich structures.',
  'Detection of delamination, fiber breakage, and resin-rich or resin-lean zones.',
  'Inspection of bonded structures for disbonds and adhesive failures.',
  'Additive-manufactured parts for internal integrity verification.',
  'Inspection of metal welds for cracks, lack of fusion, and porosity.',
];

export default function RadalyX() {
  return (
    <div className="space-y-16">
      <div className="flex items-center gap-6">
        <div className="w-40 h-28 flex items-center justify-center bg-gray-950 rounded-xl border border-gray-200 px-4">
          <img src={radalyticaLogo} alt="Radalytica" className="object-contain max-h-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#2F4F45]">RadalyX</h2>
          <p className="text-sm text-gray-500">Czech Republic</p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-3">Company Overview</h3>
        <div className="prose max-w-none text-gray-700">
          <p>
            Radalytica, based in the Czech Republic, is an innovative imaging technology
            company that has developed a groundbreaking portable robotic computed tomography
            (CT) system.
          </p>
          <p>
            The solution uses next-generation photon-counting imaging sensors (PCD), offering
            enhanced image resolution, improved contrast sensitivity, and superior defect
            detection capability compared to conventional systems.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[rad1, rad2].map((image, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center">
            <img src={image} alt={`RadalyX inspection system ${index + 1}`} className="object-contain max-h-[320px] w-full" />
          </div>
        ))}
      </div>

      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">RadalyX Solution</h3>
        <div className="prose max-w-none text-gray-700">
          <p>
            RadalyX is a portable and modular robotic X-ray imaging platform designed to bring
            the scanner to the object or install it in a manufacturing plant. After just two
            days of training, operators can perform professional scanning.
          </p>
        </div>

        <div className="prose max-w-none text-gray-700 mt-8">
          <p>
            It performs high-quality inspections in production halls, maintenance facilities,
            laboratories, and aircraft hangars, including large, complex, or fixed structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[rad3, rad5].map((image, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center">
              <img src={image} alt={`RadalyX inspection system ${index + 3}`} className="object-contain max-h-[320px] w-full" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">Advanced Features</h3>
        <div className="space-y-6">
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Photon-counting X-ray detectors with spatial resolution down to 55 µm.</li>
            <li>2D radiography, 3D computed tomography, and arbitrary-path CT.</li>
            <li>Laser surface profiling, back-scattering, and XRD applications.</li>
            <li>Region-of-interest scanning significantly reduces acquisition time.</li>
            <li>Fully portable or installable in a workshop.</li>
          </ul>
          <div className="bg-white border border-gray-200 rounded-xl p-8 flex items-center justify-center">
            <img src={rad4} alt="RadalyX multimodal imaging diagram" className="object-contain max-h-[900px] w-full max-w-6xl" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-4">Potential Areas of Application</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {applications.map((application) => <li key={application}>{application}</li>)}
        </ul>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 rounded-xl py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#2F4F45] mb-5">Interested in RadalyX?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Contact Yantriq to discuss your specific inspection requirements, or visit the
          Radalytica website for full product specifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2F4F45] text-white rounded-lg font-medium shadow-md hover:bg-[#5F0F12] hover:shadow-lg transition-all">
            Contact Yantriq
          </a>
          <a href="https://radalytica.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3.5 border border-[#2F4F45] text-[#2F4F45] rounded-lg font-medium hover:bg-[#2F4F45] hover:text-white transition-colors">
            Radalytica Website
          </a>
        </div>
      </section>
    </div>
  );
}