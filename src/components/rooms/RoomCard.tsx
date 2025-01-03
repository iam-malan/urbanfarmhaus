import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface RoomFeature {
  title: string;
  image: string;
  description: string;
  features: string[];
  price: string;
}

interface RoomCardProps {
  room: RoomFeature;
  index: number;
  inView: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="https://nightsbridge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <ul className="space-y-2 mb-4">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600">
              <Check className="w-4 h-4 text-red-600 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-red-600 font-semibold">{room.price}</p>
      </div>
    </motion.div>
  );
};