//  CITY SCHEMA
import { defineField, defineType } from "sanity";

export const cityType = defineType({
  name: "city",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "City Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    }),
    // ADD OPTIONAL IMAGE FIELD
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
