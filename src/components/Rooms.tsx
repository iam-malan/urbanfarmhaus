import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RoomCard } from './rooms/RoomCard';

const rooms = [
  {
    title: 'Family Unit with Bath & Shower',
    image: new URL('../images/familyplus.jpg', import.meta.url).href,
    description: 'Luxurious family suite featuring both bath and shower facilities, perfect for families seeking comfort and space. This generously sized unit comfortably accommodates up to 5 guests.',
    features: ['Sleeps up to 5 guests', 'Full bathroom suite', 'Premium bedding', 'Garden view', 'Air conditioning'],
    price: 'N$1,586.77',
    useCarousel: false
  },
  {
    title: 'Family Unit with Shower',
    image: new URL('../images/2family.jpg', import.meta.url).href,
    description: 'Modern family accommodation with a spacious walk-in shower. This well-appointed unit provides comfortable sleeping space for up to 4 guests, ideal for family getaways.',
    features: ['Sleeps up to 4 guests', 'Walk-in rainfall shower', 'Comfortable living space', 'Garden view', 'Air conditioning'],
    price: 'N$1,586.77',
    useCarousel: false
  },
  {
    title: 'Wheelchair Friendly Room',
    image: new URL('../images/wheelchair.jpg', import.meta.url).href,
    description: 'Thoughtfully designed accessible room with adapted facilities ensuring comfort for all guests. Features include wide doorways, accessible bathroom, and modern amenities.',
    features: ['Fully accessible design', 'Adapted bathroom', 'Emergency cord', 'Level access shower', 'Support rails'],
    price: 'N$1,346.89',
    useCarousel: false
  },
  {
    title: 'Standard Double Room',
    description: 'Elegant and comfortable double room offering a perfect blend of style and convenience. Each room features modern amenities and is decorated with tasteful furnishings.',
    features: ['Queen-size bed', 'En-suite bathroom', 'Garden view', 'Air conditioning', 'Work desk'],
    price: 'N$1,348.69',
    useCarousel: true
  },
];

const Rooms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Luxury Accommodation</h2>
            <p className="text-lg text-gray-600">
              Experience comfort and elegance in our thoughtfully designed rooms. 
              From family-friendly units to accessible accommodations, each room is 
              crafted to ensure a memorable stay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {rooms.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <RoomCard room={room} index={index} inView={inView} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;