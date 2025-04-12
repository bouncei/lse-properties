import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./schemas/blockContentType";
import property from "./schemas/property";
import team from "./schemas/team";
import location from "./schemas/location";
import testimonial from "./schemas/testimonial";
import inspection from "./schemas/inspection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, property, team, location, testimonial, inspection],
};
