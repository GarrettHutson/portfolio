import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    images: string[];
    url: string;
    date: string;
    technologies: string[];
    content: PortableTextBlock[];
}

export type Content = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}