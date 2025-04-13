"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/sanity.client";
import { propertyQuery } from "@/lib/sanity.queries";
import { urlForImage } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import { Bed, Bath, Home, MapPin, Check, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { defaultImage } from "@/lib/constants";

interface PropertyPageProps {
  params: {
    slug: string;
  };
}

const PropertyPage = ({ params }: PropertyPageProps) => {
  const [property, setProperty] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await client.fetch(propertyQuery, {
        slug: params.slug,
      });
      setProperty(data);
    };
    fetchProperty();
  }, [params.slug]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const mainImageUrl = property.mainImage
    ? urlForImage(property.mainImage)?.url()
    : null;

  const allImages = [
    ...(mainImageUrl
      ? [{ url: mainImageUrl, alt: property.title }]
      : [defaultImage]),
    ...(property.images || []),
  ];

  if (allImages.length === 0) {
    allImages.push(defaultImage);
  }

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    }
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Property Images Gallery */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={allImages[activeImageIndex].url}
          alt={allImages[activeImageIndex].alt || property.title}
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === activeImageIndex ? "bg-white" : "bg-white/50"
              )}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                <span>
                  {property.area}, {property.location.name}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              <p className="text-4xl font-bold text-primary mb-6">
                {formatPrice(property.price)}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                {property.propertyType !== "land" && (
                  <>
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-gray-500" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-gray-500" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gray-500" />
                  <span>{property.size} sqm</span>
                </div>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="flex-1">
                    Payment Plans
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div className="prose max-w-none">
                    <PortableText value={property.description} />
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.features?.map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary" />
                          <span>{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="payment" className="mt-4">
                  <div className="space-y-6">
                    {property.paymentPlans?.map((plan: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">{plan.title}</h3>
                        <p className="text-gray-600 mb-2">{plan.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Duration: {plan.duration}</span>
                          <span>Initial Payment: {plan.initialPayment}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities?.map((amenity: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full">
                  <Link
                    href={`/schedule-inspection?location=${property.location._id}&property=${property._id}`}
                    // target="_blank"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Viewing
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="https://wa.me/2348020860321" target="_blank">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Agent
                  </Link>
                </Button>
              </div>
            </div>

            {/* Property Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-2">Property Status</h3>
              <div
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm",
                  property.status === "available" &&
                    "bg-green-100 text-green-800",
                  property.status === "sold" && "bg-red-100 text-red-800",
                  property.status === "reserved" &&
                    "bg-yellow-100 text-yellow-800"
                )}
              >
                {property.status.charAt(0).toUpperCase() +
                  property.status.slice(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
