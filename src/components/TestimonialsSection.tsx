import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types
interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
}

// Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Johnson',
    location: 'New York, USA',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    text: 'WanderWise transformed our family vacation into an unforgettable adventure. The local experiences they recommended were authentic and off the beaten path. Our kids still talk about the sunrise meditation at Angkor Wat!',
    trip: 'Family Tour of Southeast Asia'
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'London, UK',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    text: 'As a solo traveler, I was looking for unique experiences that would connect me with locals. The Tokyo After Dark tour was incredible - I visited places I would never have found on my own and made friends I still keep in touch with.',
    trip: 'Japan Cultural Immersion'
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    location: 'Barcelona, Spain',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    text: 'The Northern Lights photography experience exceeded all expectations. The guides were knowledgeable and patient, and they took us to the perfect spots away from the crowds. The photos I captured are priceless.',
    trip: 'Arctic Adventure'
  },
  {
    id: 4,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 4,
    text: 'WanderWise helped us plan our honeymoon with experiences tailored to our interests. The Desert Night Sky experience in Morocco was magical and romantic - exactly what we were looking for.',
    trip: 'Morocco Honeymoon'
  },
  {
    id: 5,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    text: 'The Amazon Culinary Journey was a highlight of our trip to Peru. Learning traditional cooking methods from indigenous guides gave us a deeper appreciation of the culture. Highly recommend!',
    trip: 'South American Expedition'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-60 h-60 rounded-full bg-blue-100/30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block py-1 px-3 rounded-full text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-50 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Traveler Stories
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            What Our Explorers Say
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Real experiences from travelers who've discovered extraordinary moments with WanderWise
          </motion.p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar and Info */}
                <div className="md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-indigo-100">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150?text=WW';
                      }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 mb-3">{testimonials[activeIndex].location}</p>
                  
                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 py-1 px-3 rounded-full">
                    {testimonials[activeIndex].trip}
                  </span>
                </div>
                
                {/* Testimonial Text */}
                <div className="md:w-2/3">
                  <svg className="w-10 h-10 text-indigo-100 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.209 0-4 1.791-4 4v10h10V12h-6c0-1.105 0.895-2 2-2v-2zM22 8c-2.209 0-4 1.791-4 4v10h10V12h-6c0-1.105 0.895-2 2-2v-2z" />
                  </svg>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {testimonials[activeIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300 hover:bg-indigo-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <motion.button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
