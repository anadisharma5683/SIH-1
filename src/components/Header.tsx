import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">HealthGov</h1>
            <p className="text-sm text-muted-foreground">Digital Health Platform</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200">
            About
          </Link>
          <Link to="/security" className="text-foreground hover:text-primary transition-colors duration-200">
            Security
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-200">
            Contact
          </Link>
          <Link 
            to="/login" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            Doctor Login
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;