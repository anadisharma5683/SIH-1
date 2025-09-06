"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const visionPoints = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    text: 'A trustworthy and secure digital health ecosystem for every citizen.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: 'Inclusive and equitable access for all, regardless of location or background.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    text: 'A shift towards proactive and preventative care through innovative technology.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Vision() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative aspect-square max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://picsum.photos/600/600"
              alt="Vision of modern healthcare"
              data-ai-hint="future healthcare"
              fill
              className="rounded-lg object-cover shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight">Our Vision for National Wellness</motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
                We are committed to building a healthier future for our nation by leveraging technology to provide better care for all.
              </motion.p>
            </motion.div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mt-8 space-y-6"
            >
              {visionPoints.map((point, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mt-1">
                    {point.icon}
                  </div>
                  <span className="text-lg text-secondary-foreground">{point.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
