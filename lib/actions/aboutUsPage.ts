import { client } from "@/sanity/lib/client";

// GET ALL COMPONENTS
export async function getComponents(): Promise<any[]> {
  const query = `*[_type == "aboutPage"]`;

  try {
    const components = await client.fetch(query);
    return components;
  } catch (error) {
    console.error("Error fetching about us page components:", error);
    return [];
  }
}
