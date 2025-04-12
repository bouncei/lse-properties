// INSPECTION SCHEMA
import { defineType, defineField } from "sanity";

export default defineType({
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
      name: "location",
      title: "Location",
      type: "reference",
      to: { type: "location" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "property",
      title: "Property",
      type: "reference",
      to: { type: "property" },
      options: {
        filter: ({ document }) => {
          // Type guard to ensure we are safely accessing the _ref property
          if (
            document?.location &&
            typeof document.location === "object" &&
            "_ref" in document.location
          ) {
            return {
              filter: "location._ref == $locationId",
              params: { locationId: document.location._ref },
            };
          }
          return {
            filter: "",
            params: { locationId: "" },
          };
        },
      },
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => !document?.location, // Hide the field if no location is selected
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
