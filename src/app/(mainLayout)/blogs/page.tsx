import type { Metadata } from "next";
import { BlogsPage } from "@/components/BlogsPage";
import NavigationSection from "@/components/NavigationSection";
import { profile } from "@/data/profile";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: `Blogs | ${profile.firstName} ${profile.lastName}`,
  description: "Sharing insights on web development, design, and technology.",
};

export default function BlogsListPage() {
  return (
    <>
      <BlogsPage posts={blogPosts} />
      <NavigationSection />
    </>
  );
}
