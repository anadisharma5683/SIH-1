import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div 
        style={{ y, opacity }}
        className="text-center max-w-4xl mx-auto px-4 z-5"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-7xl font-bold text-foreground mb-6"
        >
          Secure Healthcare
          <span className="block text-primary">For Everyone</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-1xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
        >
          Connecting patients and healthcare providers through a secure, 
          government-approved digital platform built for the future of medicine.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            Learn More
          </button>
          <button className="border border-border text-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-secondary transition-colors duration-200">
            View Documentation
          </button>
        </motion.div>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply"></div>
        <div className="absolute top-48 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-muted rounded-full mix-blend-multiply"></div>
      </div>
    </section>
  );
};

export default Hero;