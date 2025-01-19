import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, CreditCard } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Welcome to Urban Farm Haus</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Nestled in the heart of Tutungeni, just 1.6 kilometers from Rundu's city center,
            Urban Farm Haus combines modern luxury with traditional Namibian hospitality.
            Our signature red door welcomes guests to an oasis of comfort and sophistication.
          </p>

          <div className="max-w-2xl mx-auto mb-16 p-4">
            <div className="relative">
              {/* Decorative frame effect */}
              <div className="absolute inset-0 border-8 border-amber-100 rounded-lg shadow-lg transform -rotate-1"></div>
              <div className="absolute inset-0 border-8 border-amber-50 rounded-lg shadow-lg transform rotate-1"></div>
              {/* Art image */}
              <img
                src={new URL('../images/art.jpg', import.meta.url).href}
                alt="Local artwork displayed in our guest house"
                className="relative z-10 rounded-lg w-full h-auto shadow-xl"
              />
            </div>
            <p className="text-center text-gray-500 mt-4 italic">
              Featured artwork by local artist, Tharine Grobler, displayed in our guest house
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600">3QH4+93 Rundu, Namibia</p>
              <p className="text-gray-600">Tutungeni Area</p>
              <p className="text-gray-600">+264 81 140 5668</p>
              <p className="text-gray-600">bookings.urbanfarmhaus@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Check-in/out</h3>
              <p className="text-gray-600">Check-in: 15:00 - 19:00</p>
              <p className="text-gray-600">Check-out: 06:00 - 10:00</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CreditCard className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Payment</h3>
              <p className="text-gray-600">Visa & Mastercard accepted</p>
              <p className="text-gray-600">Cash payments welcome</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Dining Experience</h3>
            <p className="text-gray-600 mb-4">
              Our on-site restaurant, Petot's Landing, offers an exceptional dining experience 
              with a highly-rated breakfast service (9.6/10 guest rating). We cater to all 
              dietary preferences with options including:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
              <li>• Full English/Irish Breakfast</li>
              <li>• Vegetarian Options</li>
              <li>• Vegan Choices</li>
              <li>• Gluten-free Menu</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;