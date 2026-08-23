import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global defaults
ScrollTrigger.config({ limitCallbacks: true });

export { gsap, ScrollTrigger };
