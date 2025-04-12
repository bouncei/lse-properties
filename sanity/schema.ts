import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { categoryType } from "./schemaTypes/categoryType";
import { postType } from "./schemaTypes/postType";
import { authorType } from "./schemaTypes/authorType";
import { inspectionType } from "./schemaTypes/inspectionType";
import { cityType } from "./schemaTypes/cityType";
import { projectType } from "./schemaTypes/projectType";
import { testimonialType } from "./schemaTypes/testimonialType";
import { aboutPageType } from "./schemaTypes/aboutPageType";
import property from "./schemas/property";
import team from "./schemas/team";
import location from "./schemas/location";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    cityType,
    projectType,
    aboutPageType,
    testimonialType,
    inspectionType,
    property,
    team,
    location,
  ],
};
