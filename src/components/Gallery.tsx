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
    src: new URL('../images/art%20area.jpg', import.meta.url).href,
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
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <PhotoProvider>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                >
                  <PhotoView src={image.src}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
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