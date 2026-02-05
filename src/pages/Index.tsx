import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Services from '@/components/portfolio/Services';
import Projects from '@/components/portfolio/Projects';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import FAQ from '@/components/portfolio/FAQ';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <FAQ />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
