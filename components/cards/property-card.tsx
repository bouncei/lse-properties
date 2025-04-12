import Image from "next/image";
import { Bed, Bath, Home, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity.image";
import { cn } from "@/lib/utils";
import { defaultImage } from "@/lib/constants";

interface PropertyCardProps {
  property: {
    _id: string;
    title: string;
    slug: { current: string };
    propertyType: string;
    price: number;
    location: string;
    area: string;
    bedrooms?: number;
    bathrooms?: number;
    size: number;
    mainImage: any;
    status: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    }
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={urlForImage(property.mainImage)?.url() || defaultImage.url}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              property.status === "available" && "bg-green-100 text-green-800",
              property.status === "sold" && "bg-red-100 text-red-800",
              property.status === "reserved" && "bg-yellow-100 text-yellow-800"
            )}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>
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
          {formatPrice(property.price)}
        </p>

        <div className="flex items-center gap-4 mb-4">
          {property.propertyType !== "land" ? (
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
              <span>{property.size} sqm</span>
            </div>
          )}
        </div>

        <Button asChild className="w-full">
          <Link href={`/properties/${property.slug.current}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
