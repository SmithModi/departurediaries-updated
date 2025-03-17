
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
