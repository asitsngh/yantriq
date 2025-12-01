import React, { useEffect, useState } from "react";

type Slide = {
  image: string;
  title: string;
};

interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
}

export default function ImageSlider({ slides, interval = 5000 }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isHovering]);

  if (!slides.length) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Decorative gradient behind the card */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4F45] to-[#5F0F12] rounded-3xl blur-3xl opacity-20 animate-pulse" />

      <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
        <div className="aspect-square md:aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden relative bg-gray-50 border border-gray-100">
          {slides.map((slide, i) => {
            const visible = i === current;
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  visible ? "opacity-100 z-20" : "opacity-0 -z-10 pointer-events-none"
                }`}
              >
                {/* Blurred BG */}
                <img
                    src={slide.image}
                    className="
                        absolute inset-0 w-full h-full object-cover
                        blur-[70px] brightness-125 saturate-150
                        scale-125 opacity-45
                        "
                />

                {/* Foreground image */}
                <div className="relative z-30 flex items-center justify-center w-full h-full p-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-40 w-[78%] h-[78%] object-contain drop-shadow-2xl transition-transform duration-500"
                    style={{
                      transform: visible ? "scale(1)" : "scale(0.98)"
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "bg-[#2F4F45] w-6" : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[#2F4F45] font-semibold mt-4">
          {slides[current].title}
        </p>
      </div>
    </div>
  );
}
