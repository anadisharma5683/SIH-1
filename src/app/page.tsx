"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from '@/components/pages/home/hero';
import { AboutProgram } from '@/components/pages/home/about-program';
import { Vision } from '@/components/pages/home/vision';
import { KeyFeatures } from '@/components/pages/home/key-features';

function ScrollAnimationDemo() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], ["-100%", "0%", "0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} className="h-[200vh] bg-background py-16 sm:py-24 relative">
      <div className="sticky top-1/2 -translate-y-1/2 container mx-auto px-4 overflow-hidden">
        <motion.div
          style={{ x, opacity }}
          className="mx-auto w-48 h-48 md:w-64 md:h-64 bg-primary rounded-xl shadow-2xl flex items-center justify-center"
        >
          <span className="text-primary-foreground font-bold text-2xl text-center p-4">I'm animated!</span>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutProgram />
      <KeyFeatures />
      <ScrollAnimationDemo />
      <Vision />
    </>
  );
}
