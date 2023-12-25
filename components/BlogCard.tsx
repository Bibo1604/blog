import { simplifiedBlog } from "@/app/typing"
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { urlFor } from "@/app/lib/sanity.client";

type Props = {
    item: simplifiedBlog;
}

export default function BlogCard({ item }: Props) {
    return (
        <Link href={`/post/${item.slug}`} className="relative flex h-[300px] items-end group">
            {item.image === null ? (
                <div className="w-full h-full bg-slate-200" />
            ) : (
                <Image
                    src={urlFor(item.image).url()}
                    alt="Blog Image"
                    className="inline-block h-full w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                    width={500}
                    height={500}
                />
            )}

            <div className="absolute w-full bottom-0 left-0 flex flex-col justify-center rounded bg-white bg-opacity-50 backdrop-blur-md px-5 py-2">
                <h1 className="mb-1 text-lg font-bold line-clamp-2">{item.title}</h1>
                <div className="flex items-center gap-5 mt-1">
                    {item.authorImage === null ? (
                        <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                    ) : (
                        <Image
                            src={urlFor(item.authorImage).url()}
                            alt="Author Image"
                            className="rounded-full object-cover object-top h-12 w-12"
                            width={100}
                            height={100}
                        />
                    )}

                    <div>
                        <p className="text-sm mb-1">{item.authorName === null ? "Author name" : item.authorName}</p>
                        <p className="text-sm">
                            {new Date(item._createdAt).toLocaleDateString(
                                "en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {item.categories === null ? null : (
                <div className="absolute flex gap-2 mt-1 top-3 right-3">
                    {item.categories.map((category: any) => (
                        <Badge
                            key={category._id}
                        >
                            {category.title}
                        </Badge>

                    ))}
                </div>
            )}
        </Link>
    )
}