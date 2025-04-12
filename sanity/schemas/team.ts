import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "instagram", type: "url", title: "Instagram" },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Team Member",
      type: "boolean",
      initialValue: false,
      description: "Display this team member prominently on the website",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 999,
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "expertise",
      title: "Areas of Expertise",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Residential Properties", value: "residential" },
          { title: "Commercial Properties", value: "commercial" },
          { title: "Land Banking", value: "land-banking" },
          { title: "Property Investment", value: "investment" },
          { title: "Property Management", value: "management" },
          { title: "Legal & Documentation", value: "legal" },
        ],
      },
    }),
    defineField({
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});
