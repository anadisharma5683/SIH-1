"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Waves className="h-7 w-7" />
            <span className="text-foreground">HealthConnect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/patient-login">Patient Login</Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="flex flex-col items-center gap-4 p-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors w-full text-center py-2">
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <Link href="/patient-login" onClick={toggleMenu}>Patient Login</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
