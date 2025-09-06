"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const textLines = [
  "Your Health, Our Priority.",
  "Accessible.",
  "Personalized.",
  "Secure.",
];

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center bg-background">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src="https://picsum.photos/1920/1280"
          alt="Abstract background of healthcare technology"
          data-ai-hint="healthcare technology"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-bold tracking-tight text-5xl md:text-7xl">
              {textLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: 'easeOut' }}
                  className={index > 0 ? 'text-primary' : 'text-foreground'}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Connecting you to comprehensive, accessible, and modern healthcare services through a secure, unified platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
            className="mt-8 flex gap-4"
          >
            <Button asChild size="lg">
              <Link href="/patient-login">
                Access Patient Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
