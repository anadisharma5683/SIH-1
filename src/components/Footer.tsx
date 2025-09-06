import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-background py-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold">HealthGov</h3>
          </div>
          
          <div className="border-t border-background/20 pt-6 mt-6">
            <p className="text-background/80 text-sm mb-2">
              Official website of the United States Government
            </p>
            <p className="text-background/60 text-sm">
              © 2024 Department of Health and Human Services. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors duration-200">Accessibility</a>
              <a href="#" className="hover:text-background transition-colors duration-200">FOIA</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;