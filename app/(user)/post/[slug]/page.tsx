import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/typing";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import { TextComponents } from "@/components/TextComponents";
import { Badge } from "@/components/ui/badge";

type Props = {
    params: {
        slug: string;
    };
}

async function getData(slug: string) {
    const query = `*[_type == 'post' && slug.current == "${slug}"][0] {
        ...,
        author ->,
        categories[] ->
    }`

    const data = await client.fetch(query);
    return data;
}

export const dynamic = 'force-dynamic';

export default async function Post({ params: { slug } }: Props) {
    const data: fullBlog = await getData(slug);

    return (
        <article className="max-w-2xl items-center mx-auto px-7 md:px-0">
            <div className="flex items-center space-x-2 mb-5">
                {data.categories.map((category) => (
                    <Badge key={category._id}>{category.title}</Badge>
                ))}
            </div>
            <div className="space-y-10">
                <h1 className="text-3xl md:text-5xl font-extrabold">{data.title}</h1>

                <div className="flex items-center space-x-5">
                    <Image
                        src={urlFor(data.author.image).url()}
                        alt="Author Image"
                        height={100}
                        width={100}
                        className="rounded-full object-cover object-top w-12 h-12"
                    />
                    <div>
                        <h3 className="text-lg font-bold">{data.author.name}</h3>
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