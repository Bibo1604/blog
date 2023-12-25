import { simplifiedBlog } from "../typing";
import Banner from "@/components/Banner";

import { draftMode } from 'next/headers'
import { LiveQuery } from 'next-sanity/preview/live-query'
import { sanityFetch } from "../lib/sanity.fetch";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList, { query } from "@/components/BlogList";

export const dynamic = 'force-dynamic';

export default async function Home() {
    const data = await sanityFetch<simplifiedBlog[]>({ query, tags: ['post'] })

    return (
        <main className="px-7 md:px-10 lg:px-20 mb-60 min-h-screen">
            <Banner />
            <LiveQuery
                enabled={draftMode().isEnabled}
                query={query}
                initialData={data}
                as={PreviewBlogList}
            >
                <BlogList data={data} />
            </LiveQuery>
        </main>
    )
}