import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Enhanced animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideIn = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
};

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate background movement based on mouse position
  const backgroundX = mousePosition.x / -100;
  const backgroundY = mousePosition.y / -100;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Added padding-top for the floating navbar */}
      {/* Modernized background with subtle parallax effect and mesh gradient */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: backgroundX, 
            y: backgroundY,
          }}
          transition={{ type: "spring", stiffness: 10 }}
          className="absolute inset-0 w-[105%] h-[105%]"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #4a6baf 0%, transparent 70%), radial-gradient(circle at 70% 60%, #6a45a5 0%, transparent 70%), linear-gradient(135deg, #29323f 0%, #485563 100%)',
          }}
        />
        
        {/* Abstract shapes */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute w-[40vw] h-[40vw] rounded-full bg-blue-400/30 blur-3xl"
            style={{ top: '15%', left: '60%' }}
            animate={{ 
              x: mousePosition.x / 50,
              y: mousePosition.y / 50,
            }}
            transition={{ type: "spring", stiffness: 5 }}
          />
          <motion.div 
            className="absolute w-[30vw] h-[30vw] rounded-full bg-indigo-500/20 blur-3xl"
            style={{ top: '60%', left: '15%' }}
            animate={{ 
              x: mousePosition.x / -40,
              y: mousePosition.y / -40,
            }}
            transition={{ type: "spring", stiffness: 5 }}
          />
        </div>
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <div className="flex items-center justify-center space-x-3 text-xs font-medium mb-6">
            <span className="inline-block w-16 h-[1px] bg-white opacity-50" />
            <span className="text-white/80 uppercase tracking-widest font-light">WanderWise</span>
            <span className="inline-block w-16 h-[1px] bg-white opacity-50" />
          </div>
        </motion.div>

        <motion.h1
          variants={slideUp}
          className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/70 leading-tight"
        >
          Discover the World
          <span className="block mt-2">Less Traveled</span>
        </motion.h1>

        <motion.p
          variants={slideIn}
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed font-light"
        >
          Uncover hidden gems and extraordinary experiences off the beaten path
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-28"
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ y: 5 }}
          >
            <span className="text-sm text-white/70 mb-3 group-hover:text-white transition-colors duration-300">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 border-2 border-white/30 rounded-full p-1 group-hover:border-white/50 transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="w-2 h-2 bg-white rounded-full mx-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Modern floating badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -right-4 top-1/4 hidden md:block"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-3 border border-white/20"
          >
            <div className="text-xs font-medium text-white/90">Curated Experiences</div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute -left-4 bottom-1/3 hidden md:block"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-3 border border-white/20"
          >
            <div className="text-xs font-medium text-white/90">Local Guides</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}