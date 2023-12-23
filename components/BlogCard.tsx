import { simplifiedBlog } from "@/app/typing"
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { urlFor } from "@/app/lib/sanity";

type Props = {
    item: simplifiedBlog;
}

export default function BlogCard({ item }: Props) {
    return (
        <Link href={`/post/${item.slug}`} className="relative overflow-hidden group">
            <div className="h-80">
                <Image
                    src={urlFor(item.image).url()}
                    alt="Blog Image"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-200 opacity-90"
                    width={300}
                    height={300}
                />
                <div className="absolute flex gap-2 mt-3 bottom-3 right-3">
                    {item.categories.map((category: any) => (
                        <Badge
                            key={category._id}
                            className="bg-orange-500"
                        >
                            {category.title}
                        </Badge>

                    ))}
                </div>

                <div className="mt-5">
                    <h1 className="text-xl font-bold line-clamp-2">{item.title}</h1>


                    <div className="flex items-center gap-5 mt-3">
                        <Image
                            src={urlFor(item.authorImage).url()}
                            alt="Author Image"
                            className="rounded-full object-cover object-top h-12 w-12"
                            width={100}
                            height={100}
                        />
                        <div>
                            <p className="text-sm mb-1">{item.authorName}</p>
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
            </div>
        </Link>
    )
}