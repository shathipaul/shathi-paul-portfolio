import type { MetadataRoute } from "next";
import { apiConfig } from "@/lib/apiConfig";
import type { IBlogs } from "@/lib/apiConfig";

const BASE_URL = "https://naimurrahman.dev";

async function fetchBlogIds(): Promise<string[]> {
  try {
    const res = await fetch(`${apiConfig.baseUrl}${apiConfig.blogs.getAll}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const posts: IBlogs[] = data?.data ?? data ?? [];
    return posts.map((p) => p._id);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogIds = await fetchBlogIds();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogIds.map((id) => ({
    url: `${BASE_URL}/blogs/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
