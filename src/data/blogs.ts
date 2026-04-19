export interface BlogSection {
  type: "paragraph" | "point";
  heading?: string;
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;          // Display format, e.g. "Oct 5, 2025"
  excerpt: string;
  image?: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-practices-for-api-design",
    title: "Best Practices for API Design",
    category: "Backend",
    date: "Oct 5, 2025",
    excerpt:
      "Discover how to design clean, scalable, and high-performance APIs with proper versioning, error handling, and modern best practices.",
    image: "https://i.ibb.co.com/dwhWkrwG/blog-01.webp",
    content: [
      {
        type: "paragraph",
        text: "APIs are the backbone of modern applications. A well-designed API ensures scalability, maintainability, and a smooth developer experience. Here are some key best practices to keep in mind:",
      },
      {
        type: "point",
        heading: "1. Use RESTful principles thoughtfully",
        text: "Choose the architecture that fits your project. REST is great for simplicity, scalability, and caching, making it a reliable choice for most applications.",
      },
      {
        type: "point",
        heading: "2. Consistent and meaningful naming",
        text: "Endpoints, parameters, and responses should follow a consistent naming convention. This reduces confusion and makes APIs intuitive for developers.",
      },
      {
        type: "point",
        heading: "3. Proper versioning",
        text: "Always version your API from the start. This ensures backward compatibility and allows iterative improvements without breaking existing clients.",
      },
      {
        type: "point",
        heading: "4. Clear and helpful error handling",
        text: "Return meaningful error messages and status codes. This helps developers debug issues quickly and improves the overall user experience.",
      },
      {
        type: "point",
        heading: "5. Documentation is key",
        text: "A well-documented API reduces friction for developers. Tools like Swagger or Postman make it easier to generate interactive and up-to-date docs.",
      },
      {
        type: "point",
        heading: "6. Secure your endpoints",
        text: "Implement authentication and authorization, use HTTPS, and validate inputs to protect both your API and users' data.",
      },
      {
        type: "point",
        heading: "7. Keep responses efficient and predictable",
        text: "Minimize payload size, avoid unnecessary data, and maintain consistent response structures for easier consumption by clients.",
      },
      {
        type: "paragraph",
        text: "Designing APIs isn't just about code — it's about creating a reliable and developer-friendly experience.",
      },
    ],
  },
];
