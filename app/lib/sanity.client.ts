import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
    studioUrl: "/studio",
    encodeSourceMap: true,
    perspective: "published"
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}