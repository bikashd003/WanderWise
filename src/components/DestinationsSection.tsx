import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Destination {
  name: string;
  image: string;
  description: string;
  location?: string;
}

interface CategoryType {
  id: string;
  name: string;
  icon: string;
}

// Data
const categories: CategoryType[] = [
  { id: 'nature', name: 'Nature', icon: '🌲' },
  { id: 'history', name: 'History', icon: '🏛️' },
  { id: 'adventure', name: 'Adventure', icon: '🏔️' },
  { id: 'culture', name: 'Culture', icon: '🎭' }
];

const destinations: Record<string, Destination[]> = {
  nature: [
    {
      name: 'Hidden Valley, Nepal',
      image: '/images/destinations/nepal.jpg',
      description: 'A pristine valley nestled in the Himalayas, untouched by mass tourism.',
      location: 'Nepal'
    },
    {
      name: 'Socotra Island',
      image: '/images/destinations/socotra.jpg',
      description: 'An otherworldly landscape with dragon blood trees and unique biodiversity.',
      location: 'Yemen'
    },
    {
      name: 'Marble Caves',
      image: '/images/destinations/marble-caves.jpg',
      description: 'Swirling marble formations creating spectacular caves on the water.',
      location: 'Chile'
    }
  ],
  history: [
    {
      name: 'Lost City of Petra',
      image: '/images/destinations/petra.jpg',
      description: 'Ancient architectural marvel carved into rose-colored rock faces.',
      location: 'Jordan'
    },
    {
      name: 'Angkor Hidden Temples',
      image: '/images/destinations/angkor.jpg',
      description: 'Lesser-known temples in the Angkor complex, away from the crowds.',
      location: 'Cambodia'
    },
    {
      name: 'Pompeii Artisan Quarter',
      image: '/images/destinations/pompeii.jpg',
      description: 'Recently excavated district revealing daily life in ancient Rome.',
      location: 'Italy'
    }
  ],
  adventure: [
    {
      name: 'Patagonia Trails',
      image: '/images/destinations/patagonia.jpg',
      description: "Epic hiking trails through some of Earth's most dramatic landscapes.",
      location: 'Argentina/Chile'
    },
    {
      name: 'Svalbard Expedition',
      image: '/images/destinations/svalbard.jpg',
      description: 'Arctic wilderness exploration in the land of polar bears and midnight sun.',
      location: 'Norway'
    },
    {
      name: 'Zhangjiajie Forest',
      image: '/images/destinations/zhangjiajie.jpg',
      description: 'Towering pillar-like formations that inspired the landscape of Avatar.',
      location: 'China'
    }
  ],
  culture: [
    {
      name: "Kyoto's Hidden Temples",
      image: '/images/destinations/kyoto.jpg',
      description: 'Secret temples and gardens away from the tourist crowds.',
      location: 'Japan'
    },
    {
      name: 'Oaxaca Artisan Villages',
      image: '/images/destinations/oaxaca.jpg',
      description: 'Traditional communities keeping ancient crafts and traditions alive.',
      location: 'Mexico'
    },
    {
      name: 'Transylvanian Countryside',
      image: '/images/destinations/transylvania.jpg',
      description: 'Medieval villages with well-preserved architecture and living folk traditions.',
      location: 'Romania'
    }
  ]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export default function DestinationsSection() {
  const [activeCategory, setActiveCategory] = useState('nature');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background decor */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="b" gradientTransform="rotate(45 0.5 0.5)">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path d="M0,1000 C200,800 350,700 500,800 C650,900 800,800 1000,1000" fill="none" stroke="url(#b)" strokeWidth="120" />
            <circle cx="200" cy="300" r="150" fill="url(#b)" opacity="0.2" />
            <circle cx="800" cy="400" r="100" fill="url(#b)" opacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block py-1 px-3 rounded-full text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-50 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Curated Collection
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Find Your Perfect Destination
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Discover extraordinary places carefully selected by our travel experts
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-lg transition-all duration-300 flex items-center shadow-sm ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations[activeCategory].map((destination, index) => (
              <motion.div
                key={destination.name}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-60">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    animate={{
                      y: hoveredCard === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-flex items-center gap-1 py-1 px-2 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {destination.location}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <motion.div 
                    className="mt-auto flex justify-between items-center"
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm text-blue-600 font-medium">Explore destination</span>
                    <motion.span 
                      className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 text-blue-600"
                      animate={{
                        x: hoveredCard === index ? 5 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/all-destinations"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Destinations</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}