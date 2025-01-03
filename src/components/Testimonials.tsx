import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  country: string;
  date: string;
  rating: number;
  review: string;
  roomType: string;
  stayDuration: string;
  guestType: string;
  isReviewersChoice?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah",
    country: "United Kingdom",
    date: "September 3, 2024",
    rating: 10,
    review: "We had such a lovely stay both times we visited Urban Farm Haus! We were welcomed in like family by the hosts. Great room, large and clean with amenities and water which was a nice touch. Having a lovely home cooked meal each night with the hosts and other guests and a great breakfast each morning made it feel like a home away from home. We also got great advice on places to visit while we travelled along the Caprivi Strip. Wonderful stay, wish we could visit again soon!",
    roomType: "Deluxe Double Room",
    stayDuration: "1 night · August 2024",
    guestType: "Couple"
  },
  {
    name: "Susan",
    country: "Vietnam",
    date: "March 2, 2024",
    rating: 10,
    review: "Room was spacious, bed comfortable and bathroom amazing. Lovely communal area for dinner and a lovely pool to cool off. We ate at the property and all 3 meals were delicious, well done to Tjaard, especially for the Schnitzel and the amazing beef madras. Tjaard was also incredibly helpful in assisting us with planning our onward trip through the Caprivi Strip.He helped us with the route and suggested places to stay within our budget... fantastic and thank you",
    roomType: "Standard Double Room",
    stayDuration: "3 nights · February 2024",
    guestType: "Couple"
  },
  {
    name: "Rachel",
    country: "Ethiopia",
    date: "February 13, 2023",
    rating: 10,
    review: "The hosts were so kind and welcoming. They made sure everything I needed was on hand. The room was super clean and the pool was a great spot to cool down after a long drive. The flowers and grounds were lovely, too!",
    roomType: "Standard Double Room",
    stayDuration: "1 night · February 2023",
    guestType: "Solo traveler",
    isReviewersChoice: true
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number; inView: boolean }> = ({ testimonial, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-red-100" />
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold">
          {testimonial.name[0]}
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <h3 className="font-semibold">{testimonial.name}</h3>
            {testimonial.isReviewersChoice && (
              <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Reviewers' choice
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{testimonial.country}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating/2 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{testimonial.review}</p>

      <div className="text-sm text-gray-600">
        <p>{testimonial.roomType}</p>
        <p>{testimonial.stayDuration}</p>
        <p>{testimonial.guestType}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Guest Experiences</h2>
          <p className="text-gray-600 text-center mb-12">Read what our guests have to say about their stay</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
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

export default Testimonials;