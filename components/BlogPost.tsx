import { fullBlog } from "@/app/typing";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { TextComponents } from "./TextComponents";

export const getQuery = (slug: string) => {
    const query = `*[_type == 'post' && slug.current == "${slug}"][0] {
        ...,
        author ->,
        categories[] ->
    }`
    return query
}

export default function BlogPost({ data }: { data: fullBlog }) {
    return (
        <article className="max-w-2xl items-center mx-auto px-7 md:px-0 pb-20">
            {data.categories === null ? null : (
                <div className="flex items-center space-x-2 mb-5">
                    {data.categories?.map((category) => (
                        <Badge key={category._id}>{category.title}</Badge>
                    ))}
                </div>
            )}

            <div className="space-y-10 mb-5">
                <h1 className="text-4xl md:text-5xl font-extrabold">{data.title}</h1>

                <div className="flex items-center space-x-5">
                    {data.author === null ? (
                        <div className="rounded-full bg-slate-200 w-12 h-12"></div>
                    ) : (
                        <Image
                            src={urlFor(data.author.image).url()}
                            alt="Author Image"
                            height={100}
                            width={100}
                            className="rounded-full object-cover object-top w-12 h-12"
                        />
                    )}

                    <div>
                        <h3 className="text-lg font-bold">{data.author === null ? "Author name" : data.author.name}</h3>
                        <p>
                            <span>Published on{" "}</span>
                            {new Date(data._createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}
                        </p>
                    </div>
                </div>
            </div>

            <PortableText value={data.body} components={TextComponents} />
        </article>
    )
}