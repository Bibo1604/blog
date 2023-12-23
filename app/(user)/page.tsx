import BlogCard from "@/components/BlogCard";
import { client } from "../lib/sanity";
import { simplifiedBlog } from "../typing";
import Banner from "@/components/Banner";

async function getData() {
    const query = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        "image": mainImage.asset -> url,
        title,
        "slug": slug.current,
        "authorName": author -> name,
        "authorImage": author -> image.asset -> url,
        categories[] ->,
        _createdAt
    }`;

    const data = await client.fetch(query);
    return data;
}

export const dynamic = 'force-dynamic';

export default async function Home() {
    const data: simplifiedBlog[] = await getData();

    return (
        <main className="px-7 md:px-10 lg:px-20">
            <Banner />
            <div className="mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-52">
                    {data.map((item) => (
                        <div key={item._id}>
                            <BlogCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )
}