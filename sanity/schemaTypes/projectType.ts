// PROJECT SCHEMA
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Project Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: { type: "city" },
      validation: (Rule: { required: () => any }) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Project Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 200,
      },
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Project Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Project Image",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid", // Optional: Displays images in a grid layout
      },
      validation: (Rule) =>
        Rule.min(2).error("You must add at least 2 images to the gallery."),
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              type: "string",
              title: "Question",
              validation: (Rule) => Rule.required().min(1).max(200),
            }),
            defineField({
              name: "answer",
              type: "text",
              title: "Answer",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: "question",
              subtitle: "answer",
            },
          },
        },
      ],
      options: {
        layout: "list", // Optional: Displays FAQs in a list layout
      },
      validation: (Rule) => Rule.min(1).error("You must add at least one FAQ."),
    }),
  ],
});
