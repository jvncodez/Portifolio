import { lazy, Suspense } from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';

// Lazy load below-fold sections
const Services = lazy(() => import('@/components/portfolio/Services'));
const About = lazy(() => import('@/components/portfolio/About'));
const Certifications = lazy(() => import('@/components/portfolio/Certifications'));
const Projects = lazy(() => import('@/components/portfolio/Projects'));
const Testimonials = lazy(() => import('@/components/portfolio/Testimonials'));
const Contact = lazy(() => import('@/components/portfolio/Contact'));
const FAQ = lazy(() => import('@/components/portfolio/FAQ'));
const Footer = lazy(() => import('@/components/portfolio/Footer'));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <About />
          <Certifications />
          <Projects />
          <Testimonials />
          <Contact />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
