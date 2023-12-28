import { fullBlog } from "@/app/typing";
import { sanityFetch } from "@/app/lib/sanity.fetch";
import LiveQuery from 'next-sanity/preview/live-query';
import BlogPost, { getQuery } from "@/components/BlogPost";
import { draftMode } from "next/headers";
import PreviewBlogPost from "@/components/PreviewBlogPost";

type Props = {
    params: {
        slug: string;
    };
}

export const dynamic = 'force-dynamic';

export default async function Post({ params: { slug } }: Props) {
    const query = getQuery(slug);
    const data = await sanityFetch<fullBlog>({ query, tags: ['post'] });

    return (
        <div className="min-h-screen">
            <LiveQuery
                enabled={draftMode().isEnabled}
                query={query}
                initialData={data}
                as={PreviewBlogPost}
            >
                <BlogPost data={data} />
            </LiveQuery>
        </div>
    )
}