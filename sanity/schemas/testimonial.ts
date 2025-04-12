import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Client Role",
      type: "string",
      options: {
        list: [
          { title: "First-time Buyer", value: "first-time-buyer" },
          { title: "Young Investor", value: "young-investor" },
          { title: "Property Owner", value: "property-owner" },
          { title: "Land Banking Investor", value: "land-banking-investor" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule) => Rule.required().min(20).max(300),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "image",
      title: "Client Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "propertyPurchased",
      title: "Property Purchased",
      type: "reference",
      to: [{ type: "property" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
