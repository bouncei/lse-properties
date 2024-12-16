import { client } from "@/sanity/lib/client";

// GET ALL CITIES
export async function getAllCities(): Promise<any[]> {
  const query = `*[_type == "city"]{
    _id, name, image, description}`;

  try {
    const cities = await client.fetch(query);
    return cities;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}
