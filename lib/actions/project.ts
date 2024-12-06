import { client } from "@/sanity/lib/client";

// GET ALL PROJECTS
export async function getAllProjects(): Promise<any[]> {
  const query = `*[_type == "project"]{
      name, city, description, image, gallery}`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// GET PROJECTS BY CITY
export async function getProjectsByCity(city: string): Promise<any[]> {
  const query = `*[_type == "project" && city->name == "${city}"]{
    name, city, description, image, gallery}`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error(`Error fetching projects in the city - ${city}:`, error);
    return [];
  }
}
