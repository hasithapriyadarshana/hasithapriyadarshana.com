import { Metadata } from "next";
import { notFound } from "next/navigation";
import Wrapper from "@/layouts/Wrapper";
import { blog_data, getBlogBySlug, getRelatedBlogs } from "@/data/blog_data";
import BlogDetails from "@/components/blog-details";
import React from "react";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blog_data.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: "Hasitha Priyadarshana" }],
    openGraph: {
      title: `${post.seo.title} | Hasitha Priyadarshana`,
      description: post.seo.description,
      url: `https://hasithapriyadarshana.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Hasitha Priyadarshana"],
      images: [
        {
          url: `https://hasithapriyadarshana.com/${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.seo.title} | Hasitha Priyadarshana`,
      description: post.seo.description,
      images: [`https://hasithapriyadarshana.com/${post.image}`],
    },
    alternates: {
      canonical: `https://hasithapriyadarshana.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(post, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://hasithapriyadarshana.com/${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Hasitha Priyadarshana",
      url: "https://hasithapriyadarshana.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Hasitha Priyadarshana",
      logo: {
        "@type": "ImageObject",
        url: "https://hasithapriyadarshana.com/assets/images/logo/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hasithapriyadarshana.com/blog/${post.slug}`,
    },
    keywords: post.seo.keywords.join(", "),
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetails post={post} relatedPosts={relatedPosts} />
    </Wrapper>
  );
}
