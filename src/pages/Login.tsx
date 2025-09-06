import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store doctor login data in local state (mock implementation)
    localStorage.setItem('doctorLogin', JSON.stringify(formData));
    console.log('Doctor logged in:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full"></div>
      </div>

      {/* Back to Home Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        ← Back to Home
      </Link>

      <div className="relative z-10 w-full max-w-md">
        {/* Injection Drop Animation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {/* Syringe */}
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 1C8.9 1 8.5 1.4 8.5 2S8.9 3 9.5 3H10.5C11.1 3 11.5 2.6 11.5 2S11.1 1 10.5 1H9.5ZM11.5 4H8.5V6H11.5V4ZM12 7H8V17C8 18.1 8.9 19 10 19S12 18.1 12 17V7ZM10 16C9.4 16 9 15.6 9 15S9.4 14 10 14 11 14.4 11 15 10.6 16 10 16Z"/>
              </svg>
            </div>
            {/* Drop */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-primary rounded-full"
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-lg backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Login</h1>
            <p className="text-muted-foreground">Access your HealthGov dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors duration-200">
              Forgot your password?
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              For security, this session will expire after 30 minutes of inactivity.
            </p>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <p className="text-sm font-medium text-foreground">Secure Connection</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Your login is protected by 256-bit SSL encryption
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;