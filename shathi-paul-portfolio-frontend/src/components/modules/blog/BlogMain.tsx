import CommonTitle from "@/components/common/CommonTitle";
import BlogCard from "./Cards/BlogCard";
import { getAllData } from "@/services/GetServices";

const BlogMain = async () => {
  const blogData = await getAllData("todos");
  console.log(blogData);

  return (
    <div className="pt-10 md:pt-28">
      <CommonTitle text="My Blogs" />
      <BlogCard blogData={blogData} />
    </div>
  );
};

export default BlogMain;
