// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "wks8w1ug",
  dataset: "production",
  apiVersion: "2025-03-05",
  useCdn: false,
};

const client = createClient(config);

export default client;