import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Security from '@/components/Security';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;