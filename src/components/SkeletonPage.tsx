import React from 'react';

export default function SkeletonPage({ lines = 6 }: { lines?: number }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen animate-pulse bg-canvas"
    >
      {/* header skeleton */}
      <header className="fixed top-0 left-0 right-0 h-20 lg:h-24 flex items-center px-6 z-40">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-xl bg-surface" />
          <div className="w-48 h-5 bg-surface rounded" />
        </div>
      </header>

      <main className="pt-24 lg:pt-28 max-w-7xl mx-auto px-6">
        <section className="mb-12 pt-12">
          <div className="h-48 lg:h-64 rounded-2xl bg-surface" />
        </section>
        <section className="space-y-4">
          <div className="w-2/3 h-8 bg-surface rounded" />
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className={`h-4 bg-surface/60 rounded ${i % 3 === 0 ? 'w-5/6' : 'w-full'}`} />
          ))}
        </section>
      </main>
    </div>
  );
}
