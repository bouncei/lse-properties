import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const writeClient = client.config({
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
  useCdn: false, // We need this for mutations
});
