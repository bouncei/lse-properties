import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bed, Bath, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const featuredProperties = [
  {
    id: 1,
    title: "Luxury 4-Bedroom Duplex",
    location: "Abuja",
    area: "Katampe Extension",
    price: "75M",
    bedrooms: 4,
    bathrooms: 4,
    type: "Duplex",
    image:
      "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Modern 3-Bedroom Apartment",
    location: "Abuja",
    area: "Guzape",
    price: "45M",
    bedrooms: 3,
    bathrooms: 3,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Premium Land",
    location: "Ibadan",
    area: "Jericho GRA",
    price: "25M",
    type: "Land",
    size: "500 sqm",
    image:
      "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const FeaturedListings = () => {
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
        {featuredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative h-48">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <motion.div
                className="flex items-center gap-2 text-gray-500 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MapPin className="w-4 h-4" />
                <span>
                  {property.area}, {property.location}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <motion.p
                className="text-2xl font-bold text-primary mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                ₦{property.price}
              </motion.p>

              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {property.type !== "Land" ? (
                  <>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4 text-gray-500" />
                    <span>{property.size}</span>
                  </div>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="w-full">
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
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
