import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SkeletonPage from './components/SkeletonPage';
import DelayRender from './components/DelayRender';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const enableDelay = 'true';
const delayMs = 3000;

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));

function WrapIfDelay(child: React.ReactNode, key: string) {
  return enableDelay ? (
    <DelayRender key={key} delay={delayMs}>
      {child}
    </DelayRender>
  ) : (
    child
  );
}

function RoutesWithDelay() {
  const location = useLocation();
  const key = location.pathname; // force remount on every pathname change

  return (
    <Suspense fallback={<SkeletonPage />}>
      <Routes location={location}>
        <Route path="/" element={WrapIfDelay(<Home />, key)} />
        <Route path="/about" element={WrapIfDelay(<About />, key)} />
        <Route path="/solutions" element={WrapIfDelay(<Solutions />, key)} />
        <Route path="/contact" element={WrapIfDelay(<Contact />, key)} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesWithDelay />
      <Footer />
    </BrowserRouter>
  );
}