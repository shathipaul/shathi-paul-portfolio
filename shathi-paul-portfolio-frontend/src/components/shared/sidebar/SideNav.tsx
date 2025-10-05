import CommonButton from "@/components/common/buttons/CommonButton";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const SideNav = () => {
  const sideNavData = [
    { name: "Blogs", href: "/dashboard/blogs" },
    { name: "Projects", href: "/dashboard/projects" },
  ];
  return (
    <nav className="bg-white/70 backdrop-blur-sm h-screen flex flex-col relative z-30">
      <div className="flex-1 flex items-center justify-center">
        <ul className="flex md:flex-col items-center gap-6 w-full">
          {sideNavData.map((data, index) => (
            <li key={index}>
              <Link href={data.href} className="relative z-30">
                <CommonButton text={data.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center underline"
        >
          <FaHome /> Go to Home
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
