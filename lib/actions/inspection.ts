import { client, writeClient } from "@/sanity/lib/client";

interface InspectionData {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  property: string;
  date: string;
  enquiry?: string;
}

export async function createInspection(data: InspectionData) {
  try {
    const inspection = await writeClient.create({
      _type: "inspection",
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      location: {
        _type: "reference",
        _ref: data.location,
      },
      property: {
        _type: "reference",
        _ref: data.property,
      },
      date: data.date,
      enquiry: data.enquiry,
    });
    return inspection;
  } catch (error) {
    console.error("Error creating inspection:", error);
    throw error;
  }
}

// Get all locations for the form
export async function getLocations() {
  const query = `*[_type == "location"]{
    _id,
    name
  }`;

  try {
    const locations = await client.fetch(query);
    return locations;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

// Get properties by location
export async function getPropertiesByLocation(locationId: string) {
  const query = `*[_type == "property" && location._ref == $locationId]{
    _id,
    title
  }`;

  try {
    const properties = await client.fetch(query, { locationId });
    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}
