import type { Metadata } from "next";
import { BlogsPage } from "@/components/BlogsPage";
import { profile } from "@/data/profile";
import { apiConfig, type IBlogs } from "@/lib/apiConfig";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Blogs | ${profile.firstName} ${profile.lastName}`,
  description: "Sharing insights on web development, design, and technology.",
};

async function fetchBlogs(): Promise<IBlogs[]> {
  try {
    const res = await fetch(apiConfig.baseUrl + apiConfig.blogs.getAll, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const result = await res.json();
    const posts = result?.data as IBlogs[];
    if (!Array.isArray(posts) || posts.length === 0) throw new Error("empty");
    return posts;
  } catch {
    return [];
  }
}

export default async function BlogsListPage() {
  const posts = await fetchBlogs();
  return <BlogsPage posts={posts} />;
}
