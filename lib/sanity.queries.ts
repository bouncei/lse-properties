import { groq } from "next-sanity";

export const locationsQuery = groq`
  *[_type == "location"] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    description,
    image,
    featured
  }
`;

export const propertyQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    propertyType,
    price,
    "location": location->name,
    area,
    bedrooms,
    bathrooms,
    size,
    mainImage,
    "images": images[]{
      "url": asset->url,
      "alt": asset->altText
    },
    amenities,
    description,
    features,
    paymentPlans,
    status,
    featured,
  }
`;

export const propertiesQuery = groq`
  *[_type == "property"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    propertyType,
    price,
    "location": location->name,
    area,
    bedrooms,
    bathrooms,
    size,
    mainImage,
    amenities,
    status,
    featured,
  }
`;

export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true] | order(_createdAt desc)[0...3] {
    _id,
    title,
    slug,
    propertyType,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    size,
    mainImage,
    amenities,
    status,
  }
`;

export const testimonialQuery = groq`
  *[_type == "testimonial"] | order(featured desc, _createdAt desc) {
    _id,
    name,
    role,
    content,
    rating,
    image,
    featured,
    propertyPurchased->{
      title,
      slug
    }
  }
`;

export const teamQuery = groq`
  *[_type == "team"] | order(order asc) {
    _id,
    name,
    slug,
    position,
    image,
    bio,
    socialLinks,
    featured,
    expertise,
    achievements
  }
`;
