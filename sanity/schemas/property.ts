import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "apartment" },
          { title: "Duplex", value: "duplex" },
          { title: "Land", value: "land" },
          { title: "Commercial", value: "commercial" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "area",
      title: "Area",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bedrooms",
      title: "Number of Bedrooms",
      type: "number",
      hidden: ({ document }) => document?.propertyType === "land",
    }),
    defineField({
      name: "bathrooms",
      title: "Number of Bathrooms",
      type: "number",
      hidden: ({ document }) => document?.propertyType === "land",
    }),
    defineField({
      name: "size",
      title: "Property Size (sqm)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Additional Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Gated Estate", value: "gated-estate" },
          { title: "Security", value: "security" },
          { title: "Swimming Pool", value: "swimming-pool" },
          { title: "Smart Home", value: "smart-home" },
          { title: "Gym", value: "gym" },
          { title: "24/7 Power", value: "24-7-power" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "paymentPlans",
      title: "Payment Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Plan Title" },
            { name: "description", type: "text", title: "Plan Description" },
            { name: "duration", type: "string", title: "Duration" },
            {
              name: "initialPayment",
              type: "number",
              title: "Initial Payment (%)",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
          { title: "Reserved", value: "reserved" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      location: "location",
      propertyType: "propertyType",
    },
    prepare({ title, media, location, propertyType }) {
      return {
        title,
        subtitle: `${propertyType}`,
        media,
      };
    },
  },
});
