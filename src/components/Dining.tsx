import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface DiningImage {
  src: string;
  alt: string;
}

const images: DiningImage[] = [
  {
    src: new URL('../images/dining.jpeg', import.meta.url).href,
    alt: 'Our elegant dining area'
  },
  {
    src: new URL('../images/dining2.jpg', import.meta.url).href,
    alt: 'Dining space with natural lighting'
  },
  {
    src: new URL('../images/dining3.jpg', import.meta.url).href,
    alt: 'Comfortable dining arrangements'
  },
  {
    src: new URL('../images/dining4.jpg', import.meta.url).href,
    alt: 'Beautiful dining atmosphere'
  }
];

const Dining = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6">Dining Experience</h2>
            <p className="text-lg text-gray-600">
              Indulge in our exceptional dining experience where every meal is crafted 
              with care. Our restaurant offers a perfect blend of local and international 
              cuisine in an elegant, welcoming atmosphere.
            </p>
          </div>

          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
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

export default Dining;