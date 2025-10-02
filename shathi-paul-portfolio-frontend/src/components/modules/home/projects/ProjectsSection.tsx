import pr1 from "@/assets/images/projects/img-two.png";
import pr2 from "@/assets/images/projects/img-three.png";
import pr3 from "@/assets/images/projects/img-one.png";
import pr4 from "@/assets/images/projects/img-four.png";
import pr5 from "@/assets/images/projects/img-five.png";
import CommonButton from "@/components/common/buttons/CommonButton";
import CommonTitle from "@/components/common/CommonTitle";
import Image from "next/image";
import { poppins } from "@/app/layout";

const ProjectsSection = () => {
  const projectData = [
    {
      img: pr1,
      title: "Georgia Photography Portfolio",
      stack: "|| React | Redux | Tailwind.CSS | Node.js | Express | MongoDB ||",
      description: "",
      link: "",
    },
    {
      img: pr2,
      title: "Tap Dolphin - App Landing Page",
      stack: "|| HTML | CSS | JavaScript | Tailwind.CSS ||",
      description: "",
      link: "",
    },
    {
      img: pr3,
      title: "Carship - Car transportation Service",
      stack: "|| React | Redux | Tailwind.CSS | Node.js | Express | MongoDB ||",
      description: "",
      link: "",
    },
    {
      img: pr4,
      title: "Optimalfolio - Financial Advising Agency",
      stack: "|| React | Tailwind.CSS | Node.js ||",
      description: "",
      link: "",
    },
    {
      img: pr5,
      title: "Jessica Pariston - Personal Blog Website",
      stack: "|| React | Redux | Tailwind.CSS | Node.js | Express | MongoDB ||",
      description: "",
      link: "",
    },
  ];
  return (
    <div className="mb-16" id="projects">
      <CommonTitle text="My Awesome Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((data, index) => (
          <div
            key={index}
            className="relative z-30 bg-secondary shadow-2xl rounded-xl p-8 flex flex-col gap-10 hover:scale-105 transition-transform duration-500 "
          >
            <div className="w-full h-[348px] lg:h-[250px]">
              <Image
                src={data.img}
                alt={""}
                className="w-full h-full rounded-xl object-cover object-top shadow"
              />
            </div>
            <div>
              <h3 className={`${poppins.className} text-2xl font-bold mb-2`}>
                {data.title}
              </h3>
              <span className="text-xs">{data.stack}</span>
              <p>{data.description}</p>
            </div>
            <CommonButton text="View project" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
