import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: any) => {
  if (!source) {
    return null;
  }

  return imageBuilder.image(source).auto("format").fit("max");
};
