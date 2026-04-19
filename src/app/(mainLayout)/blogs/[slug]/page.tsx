import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/BlogPostPage";
import { profile } from "@/data/profile";
import { apiConfig, type IBlogs } from "@/lib/apiConfig";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function fetchPost(id: string): Promise<IBlogs | null> {
  try {
    const res = await fetch(
      `${apiConfig.baseUrl}${apiConfig.blogs.getDetails}/${id}`,
      { cache: "no-cache" }
    );
    if (!res.ok) throw new Error(`${res.status}`);
    const result = await res.json();
    return result?.data as IBlogs;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${profile.firstName} ${profile.lastName}`,
    description: post.subTitle,
  };
}

export default async function BlogPostRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
