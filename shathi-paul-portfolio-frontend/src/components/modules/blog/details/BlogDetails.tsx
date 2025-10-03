import { IBlogData } from "@/types";
import Image from "next/image";
import adminImg from "@/assets/images/shathi-paul.jpg";
import { PiCrownSimpleFill } from "react-icons/pi";

const BlogDetails = (blog: IBlogData) => {
  return (
    <div>
      {/* Admin part */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-[50px]">
            <Image src={adminImg} alt="" />
          </div>
          <div className="md:flex items-center gap-1">
            <div className="flex items-center gap-2">
              <span>Admin</span>
              <PiCrownSimpleFill />
            </div>
            <div>
              <span>{blog?.date}</span> {"."} <span>{blog?.time}</span>
            </div>
          </div>
        </div>
        {/* <SocialIcon /> */}
      </div>
      {/* Title and Image */}
      <div>
        <h2 className="capitalize italic text-[30px] md:text-[40px] baskervville-font mb-6">
          {blog?.title}
        </h2>
        <p className="mb-4 md:text-base font-semibold">{blog?.shortDes}</p>
        <div className="w-full h-full overflow-hidden">
          {" "}
          <Image
            className="w-full h-full object-cover"
            src={blog?.blogImage ?? ""}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      {/* Paragraph */}
      {blog?.description.map((data, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 md:gap-4 text-base md:text-lg"
        >
          <p className="italic text-xl md:text-2xl mt-4 border-l-4 border-gray pl-2">
            {" "}
            {data.quote}
          </p>
          <h3 className="font-semibold">{data.title}</h3>
          <p className=""> {data.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
