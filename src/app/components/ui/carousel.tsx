'use client';
import React, { useRef, useState, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoSlideInterval?: number;
  slidesToShow?: number; // عدد العناصر الظاهرة في نفس الوقت
  responsive?: { breakpoint: number; slidesToShow: number }[]; // دعم تجاوب متقدم
}

export default function Carousel({
  children,
  className,
  autoSlideInterval = 3000,
  slidesToShow = 1,
  responsive = [
    { breakpoint: 1400, slidesToShow: 5 },
    { breakpoint: 1200, slidesToShow: 4 },
    { breakpoint: 1024, slidesToShow: 3 },
    { breakpoint: 640, slidesToShow: 2 },
    { breakpoint: 480, slidesToShow: 1 },
    // أقل من 640 يعرض عنصر واحد
  ],
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow);
  const total = children.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive slidesToShow
  useEffect(() => {
    function handleResize() {
      let slides = slidesToShow;
      for (const r of responsive) {
        if (window.innerWidth <= r.breakpoint) {
          slides = r.slidesToShow;
        }
      }
      setVisibleSlides(slides);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsive, slidesToShow]);

  const goTo = (idx: number) => {
    setCurrent(() => {
      if (idx < 0) return total - visibleSlides;
      if (idx > total - visibleSlides) return 0;
      return idx;
    });
  };

  // Auto slide effect
  useEffect(() => {
    if (paused || total <= visibleSlides) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1 > total - visibleSlides ? 0 : prev + 1));
    }, autoSlideInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total, autoSlideInterval, visibleSlides]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-background ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${(100 / visibleSlides) * total}%`,
          transform: `translateX(-${(current * 100) / total}%)`,
        }}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: `${100 / total}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Controls */}
      {total > visibleSlides && (
        <>
          <button
            aria-label="Previous"
            onClick={() => goTo(current - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-button"
          >
            &#8592;
          </button>
          <button
            aria-label="Next"
            onClick={() => goTo(current + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-button"
          >
            &#8594;
          </button>
        </>
      )}
      {/* Dots */}
      <div className="absolute bottom-2  left-1/2 -translate-x-1/2 flex gap-2 ">
        {Array.from({ length: total - visibleSlides + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2 h-2 rounded-full border border-text ${current === idx ? 'bg-button' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
