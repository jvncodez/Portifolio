import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import SystemAlert from '@/components/portfolio/SystemAlert';
import Services from '@/components/portfolio/Services';
import About from '@/components/portfolio/About';
import Certifications from '@/components/portfolio/Certifications';
import Projects from '@/components/portfolio/Projects';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import FAQ from '@/components/portfolio/FAQ';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SystemAlert />
        <Services />
        <About />
        <Certifications />
        <Projects />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
