// TESTIMONIALS SCHEMA
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      validation: (Rule) =>
        Rule.min(10).error(`Testimonial must be at least 10 characters long`),
    }),
  ],
});
