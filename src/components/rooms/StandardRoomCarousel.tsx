import React, { useState, useEffect } from 'react';
import { OptimizedImage } from '../common/OptimizedImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: new URL('../../images/standard.jpg', import.meta.url).href,
    alt: 'Standard Room View 1'
  },
  {
    src: new URL('../../images/standard2.jpg', import.meta.url).href,
    alt: 'Standard Room View 2'
  },
  {
    src: new URL('../../images/standard 3.jpg', import.meta.url).href,
    alt: 'Standard Room View 3'
  }
];

const StandardRoomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full"
          />
        </div>
      ))}
      
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 md:p-2 rounded-full transition-colors touch-manipulation"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 md:p-2 rounded-full transition-colors touch-manipulation"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors touch-manipulation ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StandardRoomCarousel;
