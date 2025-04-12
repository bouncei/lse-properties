import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { client } from "@/lib/sanity.client";
import { locationsQuery } from "@/lib/sanity.queries";

const propertyTypes = ["Apartment", "Duplex", "Land", "Commercial"];
const bedroomOptions = ["1", "2", "3", "4", "5+"];
const bathroomOptions = ["1", "2", "3", "4", "5+"];
const amenities = [
  "Gated Estate",
  "Security",
  "Swimming Pool",
  "Smart Home",
  "Gym",
  "24/7 Power",
];

interface Location {
  _id: string;
  name: string;
  slug: { current: string };
}

interface PropertySearchProps {
  onSearch: (searchParams: {
    selectedLocation: string;
    minPrice: string;
    maxPrice: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    selectedAmenities: string[];
  }) => void;
}

const PropertySearch = ({ onSearch }: PropertySearchProps) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await client.fetch(locationsQuery);
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleSearch = () => {
    onSearch({
      selectedLocation,
      minPrice,
      maxPrice,
      propertyType,
      bedrooms,
      bathrooms,
      selectedAmenities,
    });
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location._id} value={location.name}>
                {location.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={bedrooms} onValueChange={setBedrooms}>
          <SelectTrigger>
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            {bedroomOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option} {option === "5+" ? "" : "Bedroom(s)"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={bathrooms} onValueChange={setBathrooms}>
          <SelectTrigger>
            <SelectValue placeholder="Bathrooms" />
          </SelectTrigger>
          <SelectContent>
            {bathroomOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option} {option === "5+" ? "" : "Bathroom(s)"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="col-span-full">
          <p className="text-sm font-medium mb-2">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <Button
                key={amenity}
                variant={
                  selectedAmenities.includes(amenity) ? "default" : "outline"
                }
                size="sm"
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Button className="w-full mt-6" size="lg" onClick={handleSearch}>
        Search Properties
      </Button>
    </div>
  );
};

export default PropertySearch;
