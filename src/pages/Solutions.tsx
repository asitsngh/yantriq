import { useEffect, useState } from 'react';
import { gsap } from '../lib/gsap';
import ScanMaster from './solutions/ScanMaster';
import LISMAR from './solutions/Lismar';
import Comex from './solutions/Comex';
import Kleinknecht from './solutions/Kleinknecht';
import RadalyX from './solutions/RadalyX';

/* ================= OEM MAP ================= */

const OEMS_BY_SOLUTION = {
  ndt: [
    { key: 'scanmaster', label: 'ScanMaster Systems Ltd.', subheading: 'Ultrasonic Testing Solutions' },
    { key: 'lismar', label: 'LISMAR Engineering BV', subheading: 'Roll Inspection Solutions' },
    { key: 'kleinknecht', label: 'Kleinknecht', subheading: 'EDT Machines' },
    { key: 'radalytica', label: 'Radalytica', subheading: 'X-Ray CT/RT Solutions' },
  ],
  mineral: [
    { key: 'comex', label: 'Comex AS', subheading: 'Mineral Sorting Solutions' },
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

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.solutions-hero-copy > *', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      });

      gsap.from('.solution-panel', {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.solution-panel-wrap',
          start: 'top 80%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
      case 'radalytica':
        return <RadalyX />;
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
        <div className="solutions-hero-copy max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                  { key: 'ndt', label: 'NDT Inspection Systems' },
                  { key: 'mineral', label: 'Mineral Sorting Solutions' },
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
      <section className="solution-panel-wrap pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* ================= Left OEM Nav ================= */}
            <aside className="solution-panel lg:col-span-1">
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
                    <span className="block font-medium">{oem.label}</span>
                    <span className="mt-1 block text-xs text-gray-500">
                      {oem.subheading}
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            {/* ================= Right Content Pane ================= */}
            <div className="solution-panel lg:col-span-3">
              {renderOEM()}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
