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
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity.client";
import { propertiesQuery } from "@/lib/sanity.queries";

const LandingPage = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await client.fetch(propertiesQuery);
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (searchParams: any) => {
    let filtered: any[] = [...properties];

    // Filter by location
    if (searchParams.selectedLocation) {
      filtered = filtered.filter(
        (property) =>
          property.location.toLowerCase() ===
          searchParams.selectedLocation.toLowerCase()
      );
    }

    // Filter by price range
    if (searchParams.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= parseInt(searchParams.minPrice)
      );
    }
    if (searchParams.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= parseInt(searchParams.maxPrice)
      );
    }

    // Filter by property type
    if (searchParams.propertyType) {
      filtered = filtered.filter(
        (property) =>
          property.propertyType.toLowerCase() ===
          searchParams.propertyType.toLowerCase()
      );
    }

    // Filter by bedrooms
    if (searchParams.bedrooms) {
      const bedroomCount =
        searchParams.bedrooms === "5+" ? 5 : parseInt(searchParams.bedrooms);
      filtered = filtered.filter((property) => {
        if (searchParams.bedrooms === "5+") {
          return property.bedrooms >= bedroomCount;
        }
        return property.bedrooms === bedroomCount;
      });
    }

    // Filter by bathrooms
    if (searchParams.bathrooms) {
      const bathroomCount =
        searchParams.bathrooms === "5+" ? 5 : parseInt(searchParams.bathrooms);
      filtered = filtered.filter((property) => {
        if (searchParams.bathrooms === "5+") {
          return property.bathrooms >= bathroomCount;
        }
        return property.bathrooms === bathroomCount;
      });
    }

    // Filter by amenities
    if (searchParams.selectedAmenities.length > 0) {
      filtered = filtered.filter((property) =>
        searchParams.selectedAmenities.every((amenity: string) =>
          property.amenities?.includes(amenity)
        )
      );
    }

    setFilteredProperties(filtered);
  };

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
          <PropertySearch onSearch={handleSearch} />
        </motion.div>

        {/* Featured Listings */}
        <motion.div
          className="py-20 px-4 md:px-10 xl:px-16 bg-gray-50"
          variants={fadeInUp}
        >
          <FeaturedListings filteredProperties={filteredProperties} />
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
