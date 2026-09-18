import React from 'react';

export default function SkeletonPage({ lines = 6 }: { lines?: number }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen animate-pulse bg-white/50"
    >
      {/* header skeleton */}
      <header className="fixed top-0 left-0 right-0 h-20 lg:h-24 flex items-center px-6 shadow-sm z-40">
        <div className="flex items-center space-x-4">
          {/* logo placeholder */}
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[rgba(47,79,69,0.12)]" />
          {/* brand text placeholder */}
          <div className="w-72 h-6 lg:h-8 bg-[rgba(47,79,69,0.12)] rounded" />
        </div>
      </header>

      {/* page content placeholder */}
      <main className="pt-24 lg:pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* hero */}
        <section className="mb-12">
          <div className="h-48 lg:h-56 rounded-2xl bg-[rgba(47,79,69,0.06)]" />
        </section>

        {/* two-column layout skeleton */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* title */}
            <div className="w-3/4 h-9 bg-[rgba(47,79,69,0.06)] rounded" />

            {/* paragraph lines */}
            {Array.from({ length: lines }).map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-[rgba(47,79,69,0.06)] rounded ${
                  i % 3 === 0 ? 'w-5/6' : 'w-full'
                }`}
              />
            ))}

            {/* cards list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-2xl border border-[rgba(47,79,69,0.04)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[rgba(47,79,69,0.08)]" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-[rgba(47,79,69,0.06)] rounded w-3/4" />
                      <div className="h-3 bg-[rgba(47,79,69,0.04)] rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* sidebar */}
          <aside className="space-y-4">
            <div className="h-14 bg-[rgba(47,79,69,0.06)] rounded" />
            <div className="h-44 bg-[rgba(47,79,69,0.06)] rounded" />
            <div className="h-14 bg-[rgba(47,79,69,0.06)] rounded" />
          </aside>
        </section>

        {/* footer placeholder */}
        <section className="mt-16">
          <div className="h-28 bg-[rgba(47,79,69,0.03)] rounded" />
        </section>
      </main>
    </div>
  );
}
