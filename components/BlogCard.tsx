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
        <Link href={`/post/${item.slug}`} className="group h-full flex flex-col gap-4 bg-gray-200 dark:bg-slate-100 p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px] dark:hover:[box-shadow:rgb(148,_163,_184)_7px_7px]">
            {item.image === null ? (
                <div className="w-full h-60 bg-slate-200" />
            ) : (
                <Image
                    src={urlFor(item.image).url()}
                    alt="Blog Image"
                    className="inline-block h-60 w-full object-cover object-center group-hover:scale-105 transition duration-200"
                    width={500}
                    height={500}
                />
            )}

            <div className="w-full">
                {item.categories === null ? null : (
                    <div className="flex gap-2 mt-1 mb-2">
                        {item.categories.map((category: any) => (
                            <Badge
                                key={category._id}
                                className=" dark:bg-black dark:text-white"
                            >
                                {category.title}
                            </Badge>

                        ))}
                    </div>
                )}
                <p className="mb-3 text-lg font-semibold">{item.title}</p>
                <p className="mb-5 font-normal text-[#636262] lg:mb-8 line-clamp-2">{item.description ? item.description : null}</p>
                <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
                    {item.authorImage === null ? (
                        <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                    ) : (
                        <Image
                            src={urlFor(item.authorImage).url()}
                            alt="Author Image"
                            className="mr-4 inline-block h-16 w-16 rounded-full object-cover object-top"
                            width={100}
                            height={100}
                        />
                    )}
                    <div className="flex flex-col items-start">
                        <h6 className="text-base font-semibold">{item.authorName}</h6>
                        <p className="text-sm text-[#636262]">
                            {new Date(item._createdAt).toLocaleDateString(
                                "en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}