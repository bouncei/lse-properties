"use client";

import Footer from "@/components/footer";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import PropertySearch from "@/components/property-search";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedListings from "@/components/featured-listings";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const LandingPage = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <motion.div
          className="h-[90dvh] lg:h-screen px-4 md:px-10 xl:px-16 landing-hero-container"
          variants={fadeInUp}
        >
          <LandingNav />
          <LandingHero />
        </motion.div>

        {/* Property Search */}
        <motion.div
          className="relative -mt-20 z-20 px-4 md:px-10 xl:px-16"
          variants={fadeInUp}
        >
          <PropertySearch onSearch={() => {}} />
        </motion.div>

        {/* Featured Listings */}
        <motion.div
          className="py-20 px-4 md:px-10 xl:px-16 bg-gray-50"
          variants={fadeInUp}
        >
          <FeaturedListings />
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="py-20 px-4 md:px-10 xl:px-16"
          variants={fadeInUp}
        >
          <WhyChooseUs />
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="py-20 px-4 md:px-10 xl:px-16 bg-gray-50"
          variants={fadeInUp}
        >
          <HowItWorks />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="py-20 px-4 md:px-10 xl:px-16"
          variants={fadeInUp}
        >
          <Testimonials />
        </motion.div>
      </div>

      {/* <Footer /> */}
    </motion.div>
  );
};

export default LandingPage;
