"use client";

import Footer from "@/components/footer";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import PropertySearch from "@/components/property-search";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedListings from "@/components/featured-listings";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="h-[90dvh] lg:h-screen px-4 md:px-10 xl:px-16 landing-hero-container">
          <LandingNav />
          <LandingHero />
        </div>

        {/* Property Search */}
        <div className="relative -mt-20 z-20 px-4 md:px-10 xl:px-16">
          <PropertySearch onSearch={() => {}} />
        </div>

        {/* Featured Listings */}
        <div className="py-20 px-4 md:px-10 xl:px-16 bg-gray-50">
          <FeaturedListings />
        </div>

        {/* Why Choose Us */}
        <div className="py-20 px-4 md:px-10 xl:px-16">
          <WhyChooseUs />
        </div>

        {/* How It Works */}
        <div className="py-20 px-4 md:px-10 xl:px-16 bg-gray-50">
          <HowItWorks />
        </div>

        {/* Testimonials */}
        <div className="py-20 px-4 md:px-10 xl:px-16">
          <Testimonials />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
