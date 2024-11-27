// INSPECTION SCHEMA
import { defineType, defineField } from "sanity";

export const inspectionType = defineType({
  name: "inspection",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneNumber",
      type: "string",
      title: "Phone Number",
      validation: (Rule) => Rule.required().min(10).max(15),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: { type: "city" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "project",
      title: "Project",
      type: "reference",
      to: { type: "project" },
      options: {
        filter: ({ document }) => {
          // Type guard to ensure we are safely accessing the _ref property
          if (
            document?.city &&
            typeof document.city === "object" &&
            "_ref" in document.city
          ) {
            return {
              filter: "city._ref == $cityId",
              params: { cityId: document.city._ref },
            };
          }
          return {
            filter: "",
            params: { cityId: "" },
          };
        },
      },
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.city, // Hide the field if no city is selected
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Inspection Date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "enquiry",
      type: "text",
      title: "Enquiry",
      //   validation: (Rule) => Rule.required(), // OPTIONAL
    }),
  ],
});
