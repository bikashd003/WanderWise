import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Types
interface Experience {
  title: string;
  location: string;
  description: string;
  duration: string;
  time: string;
  image?: string;
  category?: string;
}

// Data
const experiences: Experience[] = [
  {
    title: 'Dawn at Angkor Wat',
    location: 'Siem Reap, Cambodia',
    description: 'Watch the sunrise paint the ancient temples in gold, followed by a monk-guided meditation.',
    duration: '3 Hours',
    time: 'Early Morning',
    image: '/images/experiences/angkor.jpg',
    category: 'Cultural'
  },
  {
    title: 'Desert Night Sky',
    location: 'Sahara Desert, Morocco',
    description: 'Camp under the stars with local Berber guides, learning about celestial navigation.',
    duration: 'Overnight',
    time: 'Evening',
    image: '/images/experiences/desert.jpg',
    category: 'Adventure'
  },
  {
    title: 'Amazon Culinary Journey',
    location: 'Peruvian Amazon',
    description: 'Forage for ingredients and learn traditional cooking methods from indigenous guides.',
    duration: '4 Hours',
    time: 'Afternoon',
    image: '/images/experiences/amazon.jpg',
    category: 'Culinary'
  },
  {
    title: 'Northern Lights Photography',
    location: 'Tromsø, Norway',
    description: 'Guided by professional photographers, capture the dancing aurora in pristine Arctic wilderness.',
    duration: '5 Hours',
    time: 'Night',
    image: '/images/experiences/northern-lights.jpg',
    category: 'Nature'
  },
  {
    title: 'Tokyo After Dark',
    location: 'Tokyo, Japan',
    description: 'Explore hidden izakayas, speakeasies and local nightlife spots with Tokyo residents.',
    duration: '4 Hours',
    time: 'Evening',
    image: '/images/experiences/tokyo.jpg',
    category: 'Urban'
  }
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: (isEven: boolean) => ({ 
    opacity: 0, 
    x: isEven ? 50 : -50 
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

// Component
export default function ExperiencesTimeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-50/40 to-transparent" />
      <div className="absolute -right-20 top-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -left-20 bottom-40 w-60 h-60 rounded-full bg-indigo-100/30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
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
            Unforgettable Moments
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Curated Experiences
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Handcrafted moments that transform your journey into stories you'll tell forever
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-px h-full bg-gradient-to-b from-blue-300 via-indigo-400 to-blue-300"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-24 md:space-y-32 py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.title} experience={exp} index={index} />
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/all-experiences"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Discover All Experiences</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Individual Timeline Item Component
const TimelineItem = ({ experience, index }: { experience: Experience, index: number }) => {
  const isEven = index % 2 === 0;
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <div className="relative" ref={ref}>
      {/* Timeline marker dot */}
      <motion.div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md shadow-blue-500/30">
          <motion.div 
            className="absolute inset-0 w-full h-full rounded-full bg-blue-400 blur"
            variants={pulseVariants}
            animate="pulse"
          />
        </div>
      </motion.div>
      
      {/* Content */}
      <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Date marker - visible only on mobile */}
        <div className="w-full md:hidden mb-4 text-center">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {experience.category}
          </motion.span>
        </div>
        
        {/* Left/right spacer for desktop */}
        <div className="hidden md:block md:w-1/2"></div>
        
        {/* Content box */}
        <motion.div 
          className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
          custom={isEven}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            {/* Category tag - desktop only */}
            <div className="absolute top-6 right-6 hidden md:block">
              <span className="py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                {experience.category}
              </span>
            </div>
            
            {/* Optional background image with overlay */}
            {experience.image && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
              {experience.title}
            </h3>
            
            <div className="flex items-center mb-4 text-gray-600">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{experience.location}</span>
            </div>
            
            <p className="mb-6 text-gray-700">{experience.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{experience.duration}</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{experience.time}</span>
              </div>
              
              <motion.button 
                className="text-indigo-600 font-medium flex items-center"
                whileHover={{ x: 3 }}
              >
                Book Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}