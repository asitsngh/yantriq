import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../lib/gsap';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const rafCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCb);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route change: scroll to top and refresh ScrollTrigger
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return <>{children}</>;
}
