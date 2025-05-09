import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types
interface TravelTip {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

// Data
const travelTips: TravelTip[] = [
  {
    id: 1,
    title: 'Essential Packing Tips for Long-Term Travel',
    excerpt: 'Pack smarter, not harder. Learn how to maximize your luggage space while ensuring you have everything you need.',
    content: 'When preparing for long-term travel, the key is to pack versatile items that can be mixed and matched. Start with a capsule wardrobe of neutral colors, pack clothing that can be layered, and invest in quick-dry fabrics. Roll your clothes instead of folding them to save space and prevent wrinkles. Packing cubes are a game-changer for organization, and do not forget to leave some space for souvenirs!',
    image: '/images/tips/packing.jpg',
    category: 'Preparation',
    date: 'May 5, 2025',
    readTime: '4 min read',
    author: {
      name: 'Alex Morgan',
      avatar: '/images/authors/alex.jpg',
      role: 'Travel Journalist'
    }
  },
  {
    id: 2,
    title: 'How to Connect with Locals While Traveling',
    excerpt: 'Discover authentic experiences by forming meaningful connections with residents of your destination.',
    content: 'The most memorable travel experiences often come from interactions with locals. Learn a few basic phrases in the local language - even simple greetings can go a long way. Visit neighborhood cafes and markets rather than tourist hotspots. Consider staying in homestays or using platforms that connect travelers with local guides. Show genuine interest in the culture and be respectful of local customs and traditions.',
    image: '/images/tips/locals.jpg',
    category: 'Cultural',
    date: 'April 28, 2025',
    readTime: '5 min read',
    author: {
      name: 'Sophia Chen',
      avatar: '/images/authors/sophia.jpg',
      role: 'Cultural Anthropologist'
    }
  },
  {
    id: 3,
    title: 'Sustainable Travel: Reducing Your Carbon Footprint',
    excerpt: 'Explore the world responsibly with these eco-friendly travel practices that make a difference.',
    content: 'Traveling sustainably does not mean sacrificing experiences. Choose direct flights when possible to reduce carbon emissions, and consider carbon offset programs. Use public transportation, bikes, or walk to explore your destination. Bring a reusable water bottle, shopping bag, and utensils to minimize plastic waste. Support local businesses and eco-friendly accommodations that prioritize sustainability practices.',
    image: '/images/tips/sustainable.jpg',
    category: 'Eco-friendly',
    date: 'April 20, 2025',
    readTime: '6 min read',
    author: {
      name: 'David Nkosi',
      avatar: '/images/authors/david.jpg',
      role: 'Environmental Advocate'
    }
  },
  {
    id: 4,
    title: 'Budget Travel: See More for Less',
    excerpt: 'Smart strategies to stretch your travel budget without compromising on experiences.',
    content: 'Traveling on a budget is all about prioritization and planning. Travel during shoulder seasons when prices are lower and crowds are thinner. Use fare comparison tools and set alerts for flight deals. Consider alternative accommodations like hostels, guesthouses, or apartment rentals. Take advantage of free walking tours, public museums on discount days, and explore local street food scenes for authentic and affordable dining.',
    image: '/images/tips/budget.jpg',
    category: 'Budget',
    date: 'April 15, 2025',
    readTime: '5 min read',
    author: {
      name: 'Emma Rodriguez',
      avatar: '/images/authors/emma.jpg',
      role: 'Budget Travel Expert'
    }
  },
  {
    id: 5,
    title: 'Solo Travel Safety: Tips for First-Timers',
    excerpt: 'Essential safety advice for those embarking on their first solo adventure.',
    content: 'Solo travel can be incredibly rewarding, but safety should always be a priority. Research your destination thoroughly before arrival and stay informed about local customs, scams, and areas to avoid. Share your itinerary with trusted friends or family and check in regularly. Keep digital and physical copies of important documents. Trust your intuition - if a situation feels uncomfortable, remove yourself from it. Consider joining group tours or activities to meet fellow travelers.',
    image: '/images/tips/solo.jpg',
    category: 'Safety',
    date: 'April 8, 2025',
    readTime: '7 min read',
    author: {
      name: 'James Wilson',
      avatar: '/images/authors/james.jpg',
      role: 'Travel Security Consultant'
    }
  },
  {
    id: 6,
    title: 'Photography Tips for Capturing Travel Memories',
    excerpt: 'Learn how to take stunning travel photos that tell the story of your journey.',
    content: 'Great travel photography is about capturing moments and emotions, not just landmarks. Wake up early or stay out late to catch the golden hour light. Include people in your shots to add scale and emotion. Learn the basic rules of composition like the rule of thirds, but do not be afraid to break them. Focus on details that represent the destinatios unique character. Most importantly, remember to put the camera down sometimes and fully experience the moment.',
    image: '/images/tips/photography.jpg',
    category: 'Photography',
    date: 'April 2, 2025',
    readTime: '6 min read',
    author: {
      name: 'Maya Patel',
      avatar: '/images/authors/maya.jpg',
      role: 'Travel Photographer'
    }
  }
];

// Categories for filtering
const categories = ['All', ...Array.from(new Set(travelTips.map(tip => tip.category)))];

export default function TravelTipsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedTip, setExpandedTip] = useState<number | null>(null);
  
  const filteredTips = selectedCategory === 'All' 
    ? travelTips 
    : travelTips.filter(tip => tip.category === selectedCategory);
    
  const toggleExpand = (id: number) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <section id="tips" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-20 top-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -left-20 bottom-40 w-60 h-60 rounded-full bg-indigo-100/30 blur-3xl" />
      
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
            Travel Wisdom
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Expert Travel Tips
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Insights and advice to enhance your travel experience and make every journey extraordinary
          </motion.p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip) => (
            <motion.div
              key={tip.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x200?text=Travel+Tip';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="py-1 px-3 rounded-full text-xs font-medium bg-white/90 text-indigo-700 shadow-sm">
                    {tip.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <img 
                      src={tip.author.avatar} 
                      alt={tip.author.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/32?text=A';
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{tip.author.name}</p>
                    <p className="text-xs text-gray-500">{tip.author.role}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{tip.title}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{tip.excerpt}</p>
                
                {expandedTip === tip.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-700 mb-4"
                  >
                    {tip.content}
                  </motion.div>
                )}
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{tip.date} • {tip.readTime}</span>
                  
                  <motion.button 
                    onClick={() => toggleExpand(tip.id)}
                    className="text-indigo-600 font-medium flex items-center"
                    whileHover={{ x: expandedTip === tip.id ? -3 : 3 }}
                  >
                    {expandedTip === tip.id ? (
                      <>
                        Read Less
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            className="inline-flex items-center py-3 px-6 rounded-lg bg-white border border-gray-200 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors shadow-sm"
            whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ y: 0 }}
          >
            View All Travel Tips
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
