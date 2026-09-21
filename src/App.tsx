import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DelayedSkeleton from './components/DelayedSkeleton';
import SmoothScroll from './components/SmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));
const RadalyXDetail = lazy(() => import('./pages/solutions/RadalyXDetail'));
const routerBasename = import.meta.env.VITE_BASE_PATH?.replace(/\/$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <SmoothScroll>
        <Navbar />

        <Suspense fallback={<DelayedSkeleton delay={500} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/radalytica" element={<RadalyXDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
