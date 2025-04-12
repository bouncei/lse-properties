import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bed, Bath, Home, MapPin } from "lucide-react";

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
    image: "/properties/property-1.jpg",
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
    image: "/properties/property-2.jpg",
  },
  {
    id: 3,
    title: "Premium Land",
    location: "Ibadan",
    area: "Jericho GRA",
    price: "25M",
    type: "Land",
    size: "500 sqm",
    image: "/properties/property-3.jpg",
  },
];

const FeaturedListings = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium properties in prime
          locations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {property.area}, {property.location}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">
                ₦{property.price}
              </p>

              <div className="flex items-center gap-4 mb-4">
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
              </div>

              <Button asChild className="w-full">
                <Link href={`/properties/${property.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/properties">View All Properties</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedListings;
