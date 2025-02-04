import React from 'react';
import { OptimizedImage } from './common/OptimizedImage';

const Awards: React.FC = () => {
  const awards = [
    { src: '/src/images/award1.jpeg', alt: 'Award 1' },
    { src: '/src/images/award2.jpeg', alt: 'Award 2' },
    { src: '/src/images/award3.jpeg', alt: 'Award 3' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          {awards.map((award, index) => (
            <div key={index} className="w-1/4 max-w-[250px]">
              <OptimizedImage
                src={award.src}
                alt={award.alt}
                className="w-full h-auto"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;