import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bed, Bath, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { featuredPropertiesQuery } from "@/lib/sanity.queries";
import { client } from "@/lib/sanity.client";
import { useEffect } from "react";
import PropertyCard from "./cards/property-card";

const FeaturedListings = () => {
  const [featuredProperties, setFeaturedProperties] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      const properties = await client.fetch(featuredPropertiesQuery);
      setFeaturedProperties(properties);
    };
    fetchFeaturedProperties();
  }, []);

  return (
    <motion.div
      className="container mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium properties in prime
          locations
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {featuredProperties.slice(0, 3).map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/properties">View All Properties</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedListings;
