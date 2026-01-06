import scanmasterLogo from '../../assets/scanmaster_logo.png';

/* Image placeholders – replace with actual images */
import immersion1 from '../../assets/sm_iuis1.png';
import immersion2 from '../../assets/sm_iuis2.png';

import squirter1 from '../../assets/sm_suis1.png';
import squirter2 from '../../assets/sm_suis2.png';

import pipe1 from '../../assets/sm_ptis.png';
import rail1 from '../../assets/sm_rts.png';
import spotweld1 from '../../assets/sm_swts.png';

/* ---------- Product Section Component ---------- */

type ProductSectionProps = {
  title: string;
  description: React.ReactNode;
  images?: string[];
};

function ProductSection({ title, description, images }: ProductSectionProps) {
  return (
    <section className="space-y-6">

      <h3 className="text-xl font-semibold text-[#2F4F45]">
        {title}
      </h3>

      <div className="text-gray-700 space-y-2">
        {description}
      </div>

      {images && images.length > 0 && (
        <div className="flex justify-center">
          <div
            className={`grid gap-6 max-w-5xl w-full ${
              images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className="object-contain max-h-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

/* --------------------------- Page --------------------------- */

export default function ScanMaster() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-40 h-28 flex items-center justify-center
                        bg-white rounded-xl border border-gray-200 px-4">
          <img
            src={scanmasterLogo}
            alt="ScanMaster Systems Ltd."
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2F4F45]">
            ScanMaster Systems Ltd.
          </h2>
          <p className="text-sm text-gray-500">
            Israel
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
            ScanMaster Systems Ltd. based in Israel, is a global leader in automated ultrasonic
            inspection solutions, designing and manufacturing systems tailor made for specific
            applications. Their in-house technology combines advanced ultrasonic instrumentation,
            motion control mechanics, and software to deliver precise and reliable inspection results.
          </p>
          <p>
            They have supplied several hundreds of systems to various industries including aerospace,
            defence, steel, forging and castings, tubes and pipes, bearings, automotive etc.
          </p>
          <p>
            We have several systems installed in India for various applications e.g. aerospace,
            defence, automotive, bearings, Ti and other alloys etc.
            (For details visit www.scanmaster-irt.com)
          </p>
        </div>
      </section>

      {/* Core Products */}
      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">
          Core Product Categories
        </h3>

        <div className="space-y-14">

          <ProductSection
            title="Immersion Ultrasonic Inspection Systems"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    These are automated multi-axis immersion scanners (C-Scan) meeting
                    international NDT standards and approved by all major aerospace
                    companies worldwide.
                  </li>
                  <li>
                    Used for high-precision inspection of various parts including aerospace,
                    automotive, and industrial components.
                  </li>
                </ul>
              </>
            }
            images={[immersion1, immersion2]}
          />

          <ProductSection
            title="Squirter Ultrasonic Inspection Systems"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Utilizes squirter water jets in PE/TT and simultaneous PE/TT for
                    2D / 2.5D / 3D parts.
                  </li>
                  <li>
                    Suitable for composites or general part inspection.
                  </li>
                </ul>
              </>
            }
            images={[squirter1, squirter2]}
          />

          <ProductSection
            title="Pipe and Tube Inspection Systems"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Designed for ultrasonic testing of pipes, plates and tubes in
                    production lines.
                  </li>
                  <li>
                    Automated systems tailored for high-volume, consistent inspection.
                  </li>
                </ul>
              </>
            }
            images={[pipe1]}
          />

          <ProductSection
            title="Rail Testing Systems"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Systems such as TrackMaster for railway inspection — adapted to fit
                    rail vehicles and inspect rails at speeds up to ~90 km/h.
                  </li>
                  <li>
                    Includes real-time flaw detection, GPS defect localization, and
                    automatic reporting capabilities.
                  </li>
                </ul>
              </>
            }
            images={[rail1]}
          />

          <ProductSection
            title="Spot Weld Testing Solutions"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Units like the UT/Mate SpotWeld Inspector provide automatic quality
                    classification of spot welds in structures (e.g., automotive bodies).
                  </li>
                  <li>
                    These systems offer automated pass/fail decisions and integrated
                    reporting.
                  </li>
                </ul>
              </>
            }
            images={[spotweld1]}
          />

          <ProductSection
            title="Large Forgings & Bearings Inspection Systems"
            description={
              <>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Custom ultrasonic inspection for large forgings, turbine components,
                    and bearings — often used in heavy-industry and energy sectors.
                  </li>
                  <li>
                    Designed for automated high-volume inspection with robust mechanics.
                  </li>
                </ul>
              </>
            }
          />

        </div>
      </section>

      {/* CTA */}
      <a
        href="https://scanmaster-irt.com/products/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
      >
        Visit ScanMaster Website →
      </a>

    </div>
  );
}
