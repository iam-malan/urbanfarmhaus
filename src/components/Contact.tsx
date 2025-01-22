import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">How to Find Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 space-y-6">
              <a href="tel:+264811405668" className="flex items-center space-x-4 p-2 -mx-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-base md:text-lg">+264 81 140 5668</span>
              </a>
              <a href="mailto:bookings.urbanfarmhaus@gmail.com" className="flex items-center space-x-4 p-2 -mx-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-base md:text-lg break-all">bookings.urbanfarmhaus@gmail.com</span>
              </a>
              <div className="flex items-start space-x-4 p-2 -mx-2">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg">Erf 1582 Rundu, Namibia</span>
              </div>
              <p className="text-gray-600 mt-6 text-center text-sm md:text-base">
                Please note: Independence Avenue has been renamed to Dr Sam Nuyoma Drive.
              </p>
            </div>
            
            <div className="h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15447.372252726266!2d19.7667!3d-17.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf2c5e8b9e74c7d%3A0x9f296da909e19747!2sRundu%2C+Namibia!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;