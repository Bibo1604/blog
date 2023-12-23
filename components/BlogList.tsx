import { simplifiedBlog } from "@/app/typing";
import BlogCard from "./BlogCard";

export const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    "image": mainImage.asset -> url,
    title,
    "slug": slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset -> url,
    categories[] ->,
    _createdAt
}`;

export default async function BlogList({data}: {data : simplifiedBlog[]}) {
    
    return (
        <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-52">
                {data.map((item) => (
                    <div key={item._id}>
                        <BlogCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
