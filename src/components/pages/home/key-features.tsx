"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  CalendarDays,
  FileText,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Mobile Access",
    description: "Access your health records and services on the go.",
  },
  {
    icon: <CalendarDays className="h-8 w-8 mb-4 text-primary" />,
    title: "Appointment Booking",
    description: "Easily schedule and manage your doctor appointments.",
  },
  {
    icon: <FileText className="h-8 w-8 mb-4 text-primary" />,
    title: "Digital Prescriptions",
    description: "Get and manage your prescriptions digitally and securely.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 mb-4 text-primary" />,
    title: "Secure Messaging",
    description: "Communicate securely with your healthcare providers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function KeyFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Features at Your Fingertips
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to manage your health in one place.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-lg text-center"
              variants={itemVariants}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
