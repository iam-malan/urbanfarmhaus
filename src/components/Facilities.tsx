import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FacilityCard } from './facilities/FacilityCard';
import { getFacilities } from '../data/facilities';

const Facilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = getFacilities();

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <FacilityCard
                key={facility.title}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;