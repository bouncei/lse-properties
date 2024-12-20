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

// GET CITY BY NAME
export async function getCityByName(name: string): Promise<any> {
  const query = `*[_type == "city" && name == $name]{
  _id, name, image, description}`;
  const params = { name };
  try {
    const city = await client.fetch(query, params);
    return city[0];
  } catch (error) {
    console.error("Error fetching city:", error);
    return null;
  }
}
