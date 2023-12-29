import { simplifiedBlog } from "@/app/typing";
import BlogCard from "./BlogCard";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity.client";
import { Badge } from "./ui/badge";

export const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    "image": mainImage.asset -> url,
    title,
    description,
    "slug": slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset -> url,
    categories[] ->,
    _createdAt
}`;

export default async function BlogList({ data }: { data: simplifiedBlog[] }) {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl px-0 pt-10 md:px-10">
                <div className="grid [grid-auto-rows:1fr] w-full grid-cols-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-16">
                    {data.slice(0).map((item) => (
                        <div key={item._id}>
                            <BlogCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
