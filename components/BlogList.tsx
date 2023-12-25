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
    "slug": slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset -> url,
    categories[] ->,
    _createdAt
}`;

export default async function BlogList({ data }: { data: simplifiedBlog[] }) {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl pt-16">
                <div className="mx-auto grid justify-items-stretch gap-4 lg:grid-cols-2 lg:gap-10">
                    <Link href={`/post/${data[0].slug}`} className="relative flex h-[300px] md:h-[250px] items-end [grid-area:1/1/3/2] lg:h-[540px] group">
                        {data[0].image === null ? (
                            <div className="w-full h-full bg-slate-200" />
                        ) : (
                            <Image
                                src={urlFor(data[0].image).url()}
                                alt="Blog Image"
                                className="inline-block h-full w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                                width={500}
                                height={500}
                            />
                        )}

                        <div className="absolute w-full bottom-0 left-0 flex flex-col justify-center rounded bg-white bg-opacity-50 backdrop-blur-lg px-5 py-2">
                            <h1 className="mb-1 text-lg font-bold line-clamp-2">{data[0].title}</h1>
                            <div className="flex items-center gap-5 mt-1">
                                {data[0].authorImage === null ? (
                                    <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                                ) : (
                                    <Image
                                        src={urlFor(data[0].authorImage).url()}
                                        alt="Author Image"
                                        className="rounded-full object-cover object-top h-12 w-12"
                                        width={100}
                                        height={100}
                                    />
                                )}

                                <div>
                                    <p className="text-sm mb-1">{data[0].authorName === null ? "Author name" : data[0].authorName}</p>
                                    <p className="text-sm">
                                        {new Date(data[0]._createdAt).toLocaleDateString(
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

                        {data[0].categories === null ? null : (
                            <div className="absolute flex gap-2 mt-1 top-3 right-3">
                                {data[0].categories.map((category: any) => (
                                    <Badge
                                        key={category._id}
                                    >
                                        {category.title}
                                    </Badge>

                                ))}
                            </div>
                        )}
                    </Link>

                    <Link href={`/post/${data[1].slug}`} className="relative flex h-[300px] md:h-[250px] items-end group">
                        {data[1].image === null ? (
                            <div className="w-full h-full bg-slate-200" />
                        ) : (
                            <Image
                                src={urlFor(data[1].image).url()}
                                alt="Blog Image"
                                className="inline-block h-full w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                                width={500}
                                height={500}
                            />
                        )}

                        <div className="absolute w-full bottom-0 left-0 flex flex-col justify-center rounded bg-white bg-opacity-50 backdrop-blur-lg px-5 py-2">
                            <h1 className="mb-1 text-lg font-bold line-clamp-2">{data[1].title}</h1>
                            <div className="flex items-center gap-5 mt-1">
                                {data[1].authorImage === null ? (
                                    <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                                ) : (
                                    <Image
                                        src={urlFor(data[1].authorImage).url()}
                                        alt="Author Image"
                                        className="rounded-full object-cover object-top h-12 w-12"
                                        width={100}
                                        height={100}
                                    />
                                )}

                                <div>
                                    <p className="text-sm mb-1">{data[1].authorName === null ? "Author name" : data[1].authorName}</p>
                                    <p className="text-sm">
                                        {new Date(data[1]._createdAt).toLocaleDateString(
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

                        {data[1].categories === null ? null : (
                            <div className="absolute flex gap-2 mt-1 top-3 right-3">
                                {data[1].categories.map((category: any) => (
                                    <Badge
                                        key={category._id}
                                    >
                                        {category.title}
                                    </Badge>

                                ))}
                            </div>
                        )}
                    </Link>


                    <Link href={`/post/${data[2].slug}`} className="relative flex h-[300px] md:h-[250px] items-end group">
                        {data[2].image === null ? (
                            <div className="w-full h-full bg-slate-200" />
                        ) : (
                            <Image
                                src={urlFor(data[2].image).url()}
                                alt="Blog Image"
                                className="inline-block h-full w-full rounded-lg object-cover object-center group-hover:scale-105 transition duration-200"
                                width={500}
                                height={500}
                            />
                        )}

                        <div className="absolute w-full bottom-0 left-0 flex flex-col justify-center rounded bg-white bg-opacity-50 backdrop-blur-lg px-5 py-2">
                            <h1 className="mb-1 text-lg font-bold line-clamp-2">{data[2].title}</h1>
                            <div className="flex items-center gap-5 mt-1">
                                {data[2].authorImage === null ? (
                                    <div className="rounded-full bg-slate-200 h-12 w-12"></div>
                                ) : (
                                    <Image
                                        src={urlFor(data[2].authorImage).url()}
                                        alt="Author Image"
                                        className="rounded-full object-cover object-top h-12 w-12"
                                        width={100}
                                        height={100}
                                    />
                                )}

                                <div>
                                    <p className="text-sm mb-1">{data[2].authorName === null ? "Author name" : data[2].authorName}</p>
                                    <p className="text-sm">
                                        {new Date(data[2]._createdAt).toLocaleDateString(
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

                        {data[2].categories === null ? null : (
                            <div className="absolute flex gap-2 mt-1 top-3 right-3">
                                {data[2].categories.map((category: any) => (
                                    <Badge
                                        key={category._id}
                                    >
                                        {category.title}
                                    </Badge>

                                ))}
                            </div>
                        )}
                    </Link>
                </div>

                <div className="hidden md:block border-b-2 border-b-slate-200 py-3 mt-20">
                    <p className="text-slate-500">Recent Articles</p>
                </div>

                <div className="mt-4 md:mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                        {data.slice(3).map((item) => (
                            <div key={item._id}>
                                <BlogCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}
