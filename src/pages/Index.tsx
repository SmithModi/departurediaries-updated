
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import Testimonials from '@/components/home/Testimonials';
import SlidingBanner from '@/components/shared/SlidingBanner';
import GoogleReviewPopup from '@/components/shared/GoogleReviewPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SlidingBanner text="Pay Zero Convience Fee Forever, Only or Ayodhya Flights" />
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <Testimonials />
      </main>
      <Footer />
      <GoogleReviewPopup />
    </div>
  );
};

export default Index;
