import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RoomCard } from './rooms/RoomCard';

const rooms = [
  {
    title: 'Family Double Room',
    image: new URL('../images/room1.jpg', import.meta.url).href,
    description: '12m² cozy room with private bathroom and walk-in shower, overlooking our beautiful garden',
    features: ['Ground floor', 'Garden view', 'Private bathroom', 'Walk-in shower'],
    price: 'From N$1,200 per night',
  },
  {
    title: 'Family Room with Bathroom',
    image: new URL('../images/room2.jpg', import.meta.url).href,
    description: 'Spacious 20m² room with private bathroom and bath, perfect for families',
    features: ['Ground floor', 'Garden view', 'Private bathroom', 'Bath'],
    price: 'From N$1,500 per night',
  },
  {
    title: 'Deluxe Double Room',
    image: new URL('../images/room3.jpg', import.meta.url).href,
    description: 'Intimate 8m² room with private bathroom and garden views',
    features: ['Garden view', 'Private bathroom', 'Cozy atmosphere'],
    price: 'From N$900 per night',
  },
  {
    title: 'One-Bedroom Apartment',
    image: new URL('../images/room4.jpg', import.meta.url).href,
    description: 'Luxurious 25m² apartment with private bathroom and garden views',
    features: ['Spacious living area', 'Garden view', 'Private bathroom', 'Kitchen facilities'],
    price: 'From N$2,000 per night',
  },
];

const Rooms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="rooms" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={room.title} room={room} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;