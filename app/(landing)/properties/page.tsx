"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/wrappers/page-wrapper";
import PropertySearch from "@/components/property-search";
import PropertyCard from "@/components/cards/property-card";
import { client } from "@/lib/sanity.client";
import { propertiesQuery } from "@/lib/sanity.queries";

export default function PropertiesPage() {
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
    let filtered = [...properties];

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <PageWrapper
        title="Our Properties"
        subTitle="Find your perfect property from our carefully curated listings"
      >
        <div className="mb-12">
          <PropertySearch onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No Properties Found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria to find more properties.
            </p>
          </div>
        )}
      </PageWrapper>
    </div>
  );
}
