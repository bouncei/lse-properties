import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { categoryType } from "./schemaTypes/categoryType";
import { postType } from "./schemaTypes/postType";
import { authorType } from "./schemaTypes/authorType";
import { inspectionType } from "./schemaTypes/inspectionType";
import { cityType } from "./schemaTypes/cityType";
import { projectType } from "./schemaTypes/projectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    cityType,
    projectType,
    inspectionType,
  ],
};
