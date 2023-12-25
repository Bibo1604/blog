import { client, urlFor } from "@/app/lib/sanity.client";
import { Author } from "@/app/typing";
import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

async function getData() {
    const query = `*[_type == "author"] | order(_createdAt asc)`;
    const data = await client.fetch(query);
    return data;
}

export const dynamic = 'force-dynamic';

export default async function Authors() {
    const data: Author[] = await getData();

    return (
        <div className="">
            <div className="flex h-44 bg-black justify-center -mb-10">
                <h1 className="text-4xl font-bold text-white mt-10">Authors</h1>
            </div>
            <div className="mx-4 md:mx-5 lg:mx-6 bg-slate-200 rounded-t-lg shadow-lg pb-10">
                <div className="w-10/12 md:w-2/3 lg:w-7/12 mx-auto pt-10 md:pt-16 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
                        {data.map((item) => (
                            <Dialog key={item._id}>
                                <DialogTrigger asChild>
                                    <div className="h-72 w-60 bg-white p-3 rounded-lg shadow-xl group cursor-pointer">
                                        <Image
                                            src={urlFor(item.image.asset).url()}
                                            alt="Author Image"
                                            width={500}
                                            height={500}
                                            className="w-full h-5/6 object-cover object-top group-hover:opacity-85 transition rounded-sm"
                                        />
                                        <h3 className="font-semibold mt-5">{item.name}</h3>
                                    </div>
                                </DialogTrigger>

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="my-4 text-2xl">{item.name}</DialogTitle>
                                        <DialogDescription className="text-left">
                                            {item.bio.map((paragraph) => (
                                                <p key={paragraph._key} className="leading-6 text-[16px] md:leading-8 md:text-[17px]">{paragraph.children[0].text} <br/><br/></p>
                                            ))}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}