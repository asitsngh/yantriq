import kleinknechtLogo from '../../assets/kleinknecht_logo.webp';

/* Image placeholders – replace with actual images later */
import edtImg1 from '../../assets/kl_edt.png';

export default function Kleinknecht() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="flex items-center gap-6">
        <div
          className="w-40 h-28 flex items-center justify-center
                     bg-white rounded-xl border border-gray-200 px-4"
        >
          <img
            src={kleinknechtLogo}
            alt="Kleinknecht"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2F4F45]">
            Kleinknecht
          </h2>
          <p className="text-sm text-gray-500">
            Germany
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
            Kleinknecht based in Germany is part of Ascential Technologies, a global
            conglomerate of testing and measurement solutions.
          </p>

          <p>
            It all started with an engineering firm that specialized in control system
            design and the manufacture of control panels. Over the decades our company
            has evolved into a software-based systems integrator.
          </p>

          <p>
            We utilize modern technology to turn customer requirements into customized
            systems engineering.
          </p>

          <p>
            As the world’s first EDT-machine builder, Kleinknecht is utilizing linear
            motor technology to control electrodes for high-end EDT machines.
          </p>

          <p>
            One of our most important assets is our workforce—with over 200 employees
            stationed at three sites, our workforce is highly skilled and ready for any
            task.
          </p>
        </div>
      </section>

      {/* Core Product Category */}
      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">
          Core Product Category
        </h3>

        <h4 className="text-lg font-semibold text-[#2F4F45] mb-3">
          Electrical Discharge Technology (EDT Machines)
        </h4>

        {/* Images – central, process-oriented */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          {[edtImg1].map((img, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4
                         flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Kleinknecht EDT Machine ${index + 1}`}
                className="object-contain max-h-[260px]"
              />
            </div>
          ))}
        </div>

        {/* EDT Experience */}
        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-[#2F4F45]">
            EDT Experience
          </h4>

          <div className="prose max-w-none text-gray-700">
            <p>
              In the field of the electrical discharge machines (electrical discharge
              texturing = EDT) Kleinknecht has a long track record of proven experience.
            </p>

            <p>
              For 40 years Kleinknecht has been developing controls and generator
              technology for EDT/EDM machines.
            </p>
          </div>
        </section>

        {/* Superior Product */}
        <section className="space-y-4 mt-8">
          <h4 className="text-lg font-semibold text-[#2F4F45]">
            A Superior Product
          </h4>

          <div className="prose max-w-none text-gray-700">
            <p>
              Today, more than 60 EDT machines worldwide are equipped with electrical
              controls and generators (firing units).
            </p>

            <p>
              In the EDT process, which involves thousands of ignitions per second, the
              surface is roughened on rolls up to 10 tons—used, for example, for sheet
              metal in automobile construction or for the production of white goods.
            </p>

            <p>
              Since 2010 Kleinknecht has been a successful manufacturer of complete EDT
              machines.
            </p>

            <p>
              The innovative concept of the Kleinknecht EDT machine eradicates all the
              known weaknesses of traditional machines.
            </p>
          </div>
        </section>
      </section>

      {/* CTA */}
      <a
        href="https://www.kleinknecht.de/products/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
      >
        Explore Kleinknecht EDT Solutions →
      </a>

    </div>
  );
}
