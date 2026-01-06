import { useState } from 'react';
import ScanMaster from './solutions/ScanMaster';
import LISMAR from './solutions/Lismar';
import Comex from './solutions/Comex';
import Kleinknecht from './solutions/Kleinknecht';

/* ================= OEM MAP ================= */

const OEMS_BY_SOLUTION = {
  ndt: [
    { key: 'scanmaster', label: 'ScanMaster Systems Ltd.' },
    { key: 'lismar', label: 'LISMAR Engineering BV' },
  ],
  mineral: [
    { key: 'comex', label: 'Comex AS' },
  ],
  edt: [
    { key: 'kleinknecht', label: 'Kleinknecht' },
  ],
} as const;

type SolutionKey = keyof typeof OEMS_BY_SOLUTION;
type OEMKey =
  typeof OEMS_BY_SOLUTION[keyof typeof OEMS_BY_SOLUTION][number]['key'];

export default function Solutions() {
  const [activeSolution, setActiveSolution] =
    useState<SolutionKey>('ndt');

  const [activeOEM, setActiveOEM] =
    useState<OEMKey>('scanmaster');

  /* ================= OEM RENDERER ================= */

  const renderOEM = () => {
    switch (activeOEM) {
      case 'scanmaster':
        return <ScanMaster />;
      case 'lismar':
        return <LISMAR />;
      case 'comex':
        return <Comex />;
      case 'kleinknecht':
        return <Kleinknecht />;
      default:
        return null;
    }
  };

  return (
    <div>

      {/* ================= Hero ================= */}
      <section
        className="bg-gradient-to-br from-[rgba(47,79,69,0.03)] via-white to-[rgba(95,15,18,0.03)]
                   py-20 lg:pt-32 lg:pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2F4F45] mb-6">
            Industrial Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven inspection and sorting solutions delivered through globally recognized
            OEM technologies for critical industrial applications.
          </p>
        </div>
      </section>

      {/* ================= Sticky Tabs Header ================= */}
      <section className="sticky top-24 z-40 bg-white">
        <div className="pt-6 pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-6">
              <div className="flex gap-10 border-b border-gray-200">
                {[
                  { key: 'ndt', label: 'NDT Ultrasonic Inspection Systems' },
                  { key: 'mineral', label: 'Mineral Sorting Solutions' },
                  { key: 'edt', label: 'Electric Discharge Texturing (EDT)' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveSolution(tab.key as SolutionKey);
                      const firstOEM =
                        OEMS_BY_SOLUTION[tab.key as SolutionKey][0];
                      if (firstOEM) setActiveOEM(firstOEM.key);
                    }}
                    className={`pb-4 pt-5 text-lg font-medium transition-colors ${
                      activeSolution === tab.key
                        ? 'text-[#2F4F45] border-b-2 border-[#2F4F45]'
                        : 'text-gray-600 hover:text-[#2F4F45]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Content ================= */}
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* ================= Left OEM Nav ================= */}
            <aside className="lg:col-span-1">
              <div
                className="sticky top-[200px]
                           bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2"
              >
                {OEMS_BY_SOLUTION[activeSolution].map((oem) => (
                  <button
                    key={oem.key}
                    onClick={() => setActiveOEM(oem.key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeOEM === oem.key
                        ? 'bg-[rgba(47,79,69,0.14)] text-[#2F4F45] font-medium'
                        : 'text-gray-700 hover:bg-white'
                    }`}
                  >
                    {oem.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* ================= Right Content Pane ================= */}
            <div className="lg:col-span-3">
              {renderOEM()}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
