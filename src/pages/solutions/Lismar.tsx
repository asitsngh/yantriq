import lismarLogo from '../../assets/lismar_logo1.webp';

/* Product image placeholder – replace later */
import rollInspectionImg from '../../assets/lismar_lri.png';

export default function LISMAR() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-40 h-28 flex items-center justify-center
                        bg-white rounded-xl border border-gray-200 px-4">
          <img
            src={lismarLogo}
            alt="LISMAR Engineering BV"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2F4F45]">
            LISMAR Engineering BV
          </h2>
          <p className="text-sm text-gray-500">
            The Netherlands
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-3">
          Company Overview
        </h3>

        <div className="prose max-w-none text-gray-700">
          <p>
            Lismar Engineering BV. based in Netherlands is part of Ascential Technologies,
            a global conglomerate of testing and measurement solutions.
          </p>
          <p>
            Lismar is a global leader in automated rolling mill roll inspection solutions,
            using Eddy Current, Ultrasonic and surface wave technologies.
          </p>
          <p>
            LISMAR pride itself on their industry-leading inspection systems, unparalleled
            service & support, and the satisfaction of partners and clients. With several
            hundreds of roll inspection systems in place all over the world, LISMAR is a
            global company with a truly global presence.
          </p>
          <p>
            We have over 50 systems installed in India at large steel plants in India.
          </p>
        </div>
      </section>

      {/* Core Product Categories */}
      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">
          Core Product Categories
        </h3>

        <section className="space-y-6">
          <h4 className="text-lg font-semibold text-[#2F4F45]">
            Roll Inspection Systems (LRI)
          </h4>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Eddy Current technique for surface defect detection</li>
            <li>Ultrasonic technique for sub-surface defect detection</li>
            <li>Surface wave technique for near-surface defect detection</li>
          </ul>

          <div className="prose max-w-none text-gray-700">
            <p>
              The system may be fully integrated with CNC roll grinding machines, partially
              integrated, or even supplied as a standalone solution on roll grinders.
            </p>
          </div>

          {/* Central Image */}
          <div className="flex justify-center pt-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-4xl w-full flex justify-center">
              <img
                src={rollInspectionImg}
                alt="LISMAR Roll Inspection System"
                className="object-contain max-h-[280px]"
              />
            </div>
          </div>

        </section>
      </section>

      {/* CTA */}
      <a
        href="https://www.lismar.com/products/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
      >
        Explore LISMAR Solutions →
      </a>

    </div>
  );
}
