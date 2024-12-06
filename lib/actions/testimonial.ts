import { client } from "@/sanity/lib/client";

// GET ALL TESTIMONIALS
export async function getTestimonials(): Promise<any[]> {
  const query = `*[_type == "inspection"]`;

  try {
    const testimonials = await client.fetch(query);
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
