"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, ShieldCheck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Easy Access to Care',
    description: 'Connect with healthcare providers seamlessly from anywhere, at any time.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Secure Patient Data',
    description: 'Your health information is protected with state-of-the-art security and privacy protocols.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Personalized Health Plans',
    description: 'Receive health plans and recommendations tailored to your individual needs.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function AboutProgram() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A New Era of Digital Healthcare</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are revolutionizing access to healthcare, making it simpler, smarter, and more personal.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full text-center bg-card hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary">
                <CardHeader>
                  <motion.div
                    className="mx-auto bg-primary/10 p-4 rounded-full w-fit"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: 'backOut' }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
