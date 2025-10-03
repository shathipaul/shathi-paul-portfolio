import BlogDetails from "@/components/modules/blog/details/BlogDetails";
import { getDataById } from "@/services/GetServices";

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const blog = await getDataById("todos", id);
  console.log(blog);
  return (
    <div>
      <BlogDetails {...blog} />
    </div>
  );
};

export default BlogDetailPage;
