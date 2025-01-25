import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import StandardRoomCarousel from './StandardRoomCarousel';

interface RoomFeature {
  title: string;
  image?: string;
  description: string;
  features: string[];
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
      <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
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
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors transform hover:scale-105 touch-manipulation"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">{room.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
          <div className="space-y-4 mb-6">
            {room.features.map((feature) => (
              <li key={feature} className="flex items-start text-gray-600">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <a
              href="https://book.nightsbridge.com/36746"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden w-full bg-red-600 text-white px-6 py-3 rounded-lg text-center hover:bg-red-700 transition-colors touch-manipulation"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};