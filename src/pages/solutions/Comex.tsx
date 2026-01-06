import comexLogo from '../../assets/Comex-AS.webp';

/* Image placeholders – replace with actual images */
import comexImg1 from '../../assets/comexp1.png';
import comexImg2 from '../../assets/comexp2.png';
import comexImg3 from '../../assets/comexp3.png';
import comexImg4 from '../../assets/comexp4.png';

export default function Comex() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="flex items-center gap-6">
        <div
          className="w-40 h-28 flex items-center justify-center
                     bg-white rounded-xl border border-gray-200 px-4"
        >
          <img
            src={comexLogo}
            alt="Comex AS"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2F4F45]">
            Comex AS
          </h2>
          <p className="text-sm text-gray-500">
            Poland
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
            Comex based in Poland is a leading sorting solution provider for various
            minerals and ores. Comex is known for its innovative sorting systems and
            pulverizing technology.
          </p>
          <p>
            Their team of experienced engineers, own laboratory and constant cooperation
            with the largest research network allow them to offer customers highly
            innovative technologies for the production and separation / beneficiation
            of minerals and ores.
          </p>
          <p>
            They optimize production costs and increase the profitability of production
            processes by improving the quality of the final product.
          </p>
        </div>
      </section>

      {/* Core Product Category */}
      <section>
        <h3 className="text-xl font-semibold text-[#2F4F45] mb-6">
          Core Product Category
        </h3>

        <div className="prose max-w-none text-gray-700 mb-6">
          <p>
            The XRT based sorting system scans and collects relative density data of
            particles moving on a conveyor belt. The sorting system controller processes
            this data and instructs pneumatic nozzles at the end of the conveyor to sort
            the particles based on customer defined content limits, removing higher or
            lower density particles than the density corresponding to the specified
            content limit.
          </p>
          <p>
            The whole process is highly reliable and flexible.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[comexImg1, comexImg2, comexImg3, comexImg4].map((img, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4
                         flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Comex Sorting System ${index + 1}`}
                className="object-contain max-h-[240px]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section>
        <h4 className="text-lg font-semibold text-[#2F4F45] mb-4">
          Major Advantages of XRT Based Sorting Solution
        </h4>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            High speed precision sorting systems for separating rich and poor coal or ore
            particles.
          </li>
          <li>
            Sorting process is dry process, unlike conventional wet process which uses
            water and magnetite, our sorting process does not consume anything.
          </li>
          <li>
            Comex sorting system requires small space for equipment installation and
            operation as compared to wet process, which require coal, water, magnetite
            storage and handling systems, drying plants and large drying space.
          </li>
          <li>
            Flexibility to install the sorting system in a movable container, makes it
            possible to shift the container with sorting line as per the convenience.
          </li>
          <li>
            The operation cost of our system is only consumable and only few tens of KWH,
            is substantially lower than operational cost of other sorting techniques.
          </li>
          <li>
            Simple one step operation.
          </li>
          <li>
            Low cost of operation, maintenance and labor, just one qualified system
            operator can run the whole unit.
          </li>
          <li>
            Flexibility to sort particles with corresponding yield just by changing the
            system settings, stored in memory.
          </li>
          <li>
            Nil effect on environment as Comex system does not consume water or nor
            discharge any effluent or emit any particulate matter.
            (Some dust from process will be there, for which suitable collecting systems
            will be provided.)
          </li>
        </ul>
      </section>

      {/* CTA */}
      <a
        href="https://comex-group.com/#more"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#2F4F45] font-medium hover:underline"
      >
        Explore Comex Solutions →
      </a>

    </div>
  );
}
