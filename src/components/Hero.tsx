import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${new URL('../images/reddoor.jpg', import.meta.url).href})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center text-center text-white px-4"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Urban Farm Haus
          </h1>
          <p className="text-xl md:text-2xl mb-8">
          Where farmhouse charm meets natural serenity - your urban oasis in Rundu
          </p>
          <a
            href="https://nightsbridge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg hover:bg-red-700 transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;