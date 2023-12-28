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
                <Link href={`/post/${data[0].slug}`} className="hidden relative mb-12 md:flex max-h-[450px] max-w-full gap-4 overflow-hidden rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]">
                    <div className="absolute bottom-2 left-2 z-20 flex w-full max-w-[900px] flex-col items-start justify-start rounded-xl bg-white px-6 py-4">
                        {data[0].categories === null ? null : (
                            <div className="flex gap-2 mb-2">
                                {data[0].categories.map((category: any) => (
                                    <Badge
                                        key={category._id}
                                    >
                                        {category.title}
                                    </Badge>

                                ))}
                            </div>
                        )}
                        <p className="mb-2 text-lg font-semibold">{data[0].title}</p>
                        <p className="mb-3 font-normal text-[#636262] line-clamp-2">{data[0].description ? data[0].description : null}</p>
                        <div className="flex flex-row items-center text-left">
                            {data[0].authorImage === null ? (
                                <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                            ) : (
                                <Image
                                    src={urlFor(data[0].authorImage).url()}
                                    alt="Author Image"
                                    className="mr-4 inline-block h-16 w-16 rounded-full object-cover object-top"
                                    width={100}
                                    height={100}
                                />
                            )}
                            <div className="flex flex-col items-start">
                                <h6 className="text-base font-semibold">{data[0].authorName}</h6>
                                <p className="text-sm text-[#636262]">
                                    {new Date(data[0]._createdAt).toLocaleDateString(
                                        "en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                    {data[0].image === null ? (
                        <div className="w-full h-60 bg-slate-200" />
                    ) : (
                        <Image
                            src={urlFor(data[0].image).url()}
                            alt="Blog Image"
                            className="inline-block h-full w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                            width={500}
                            height={500}
                        />
                    )}
                </Link>

                <div className="grid [grid-auto-rows:1fr] w-full grid-cols-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-16">
                    <Link href={`/post/${data[0].slug}`} className="group h-full flex md:hidden flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]">
                        {data[0].image === null ? (
                            <div className="w-full h-60 bg-slate-200" />
                        ) : (
                            <Image
                                src={urlFor(data[0].image).url()}
                                alt="Blog Image"
                                className="inline-block h-60 w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                                width={500}
                                height={500}
                            />
                        )}

                        <div className="w-full">
                            {data[0].categories === null ? null : (
                                <div className="flex gap-2 mt-1 mb-2">
                                    {data[0].categories.map((category: any) => (
                                        <Badge
                                            key={category._id}
                                        >
                                            {category.title}
                                        </Badge>

                                    ))}
                                </div>
                            )}
                            <p className="mb-3 text-lg font-semibold">{data[0].title}</p>
                            <p className="mb-5 font-normal text-[#636262] lg:mb-8 line-clamp-2">{data[0].description ? data[0].description : null}</p>
                            <div className="mx-auto flex max-w-[480px] flex-row items-center text-left">
                                {data[0].authorImage === null ? (
                                    <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                                ) : (
                                    <Image
                                        src={urlFor(data[0].authorImage).url()}
                                        alt="Author Image"
                                        className="mr-4 inline-block h-16 w-16 rounded-full object-cover object-top"
                                        width={100}
                                        height={100}
                                    />
                                )}
                                <div className="flex flex-col items-start">
                                    <h6 className="text-base font-semibold">{data[0].authorName}</h6>
                                    <p className="text-sm text-[#636262]">
                                        {new Date(data[0]._createdAt).toLocaleDateString(
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

                    {data.slice(1).map((item) => (
                        <div key={item._id}>
                            <BlogCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
