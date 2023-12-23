export interface simplifiedBlog {
    _id: string;
    image: string;
    title: string;
    slug: string;
    authorName: string;
    authorImage: string;
    categories: Category[];
    _createdAt: string;
}

type Base = {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _type: string;
}

export interface fullBlog extends Base {
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    author: Author;
    body: Block[];
}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}