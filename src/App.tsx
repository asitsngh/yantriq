import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import DelayedSkeleton from './components/DelayedSkeleton';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));
const ScanMasterDetail = lazy(() => import('./pages/solutions/ScanMasterDetail'));
const LismarDetail = lazy(() => import('./pages/solutions/LismarDetail'));
const ComexDetail = lazy(() => import('./pages/solutions/ComexDetail'));
const KleinknechtDetail = lazy(() => import('./pages/solutions/KleinknechtDetail'));

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Navbar />
        <Suspense fallback={<DelayedSkeleton delay={500} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/scanmaster" element={<ScanMasterDetail />} />
            <Route path="/solutions/lismar" element={<LismarDetail />} />
            <Route path="/solutions/comex" element={<ComexDetail />} />
            <Route path="/solutions/kleinknecht" element={<KleinknechtDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
