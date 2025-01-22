import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: new URL('../images/reddoor2.jpg', import.meta.url).href,
    alt: 'Another view of our signature red door and entrance area'
  },
  {
    src: new URL('../images/art area.jpg', import.meta.url).href,
    alt: 'Art display area showcasing local Namibian talent'
  },
  {
    src: new URL('../images/plants.jpg', import.meta.url).href,
    alt: 'Lush plants and greenery adding natural beauty to our spaces'
  },
  {
    src: new URL('../images/rooms.jpg', import.meta.url).href,
    alt: 'One of our elegantly appointed guest rooms'
  },
  {
    src: new URL('../images/collage.jpg', import.meta.url).href,
    alt: 'A collage showcasing various aspects of Urban Farm Haus'
  },
  {
    src: new URL('../images/gallery.png', import.meta.url).href,
    alt: 'Beautiful view of our guest house facilities'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Gallery</h2>
          <PhotoProvider maskOpacity={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer touch-manipulation"
                >
                  <PhotoView src={image.src}>
                    <div className="w-full h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 active:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    </div>
                  </PhotoView>
                </motion.div>
              ))}
            </div>
          </PhotoProvider>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;