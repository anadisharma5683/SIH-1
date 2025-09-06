"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} HealthConnect. All rights reserved.</p>
        <p className="mt-1">An Official Government Healthcare Initiative.</p>
      </div>
    </footer>
  );
}
