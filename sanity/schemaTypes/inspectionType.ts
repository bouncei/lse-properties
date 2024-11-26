import { defineType, defineField } from "sanity";

const cityOptions = [
  { title: "Abuja", value: "Abuja" },
  // TODO: Add more cities as needed
];

const projectOptions = [
  { title: "Abuja", value: "Abuja" },
  // TODO: Add more projects as needed
];

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
      type: "string",
      title: "City",
      options: {
        list: cityOptions,
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "project",
      type: "string",
      title: "Project",
      options: {
        list: projectOptions,
      },
      validation: (Rule) => Rule.required(),
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

export const cityList = cityOptions;
export const projectList = projectOptions;
