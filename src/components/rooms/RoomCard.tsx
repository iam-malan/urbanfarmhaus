import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import StandardRoomCarousel from './StandardRoomCarousel';

interface RoomFeature {
  title: string;
  image?: string;
  description: string;
  features: string[];
  price: string;
  useCarousel?: boolean;
}

interface RoomCardProps {
  room: RoomFeature;
  index: number;
  inView: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, index, inView }) => {
  const renderImage = () => {
    if (room.useCarousel) {
      return <StandardRoomCarousel />;
    }
    return (
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-auto max-h-[500px] object-contain transform group-hover:scale-105 transition-transform duration-500"
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
        <div className="relative overflow-hidden">
          {renderImage()}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <a
              href="https://book.nightsbridge.com/36746"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">{room.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
          <div className="space-y-3 mb-6">
            {room.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-red-600 mr-3" />
                {feature}
              </li>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <p className="text-red-600 font-bold text-xl">{room.price}</p>
            <span className="text-sm text-gray-500">per night</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};