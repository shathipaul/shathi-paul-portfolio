import CommonTitle from "@/components/common/CommonTitle";
import htmlLogo from "@/assets/images/skills/1.svg";
import cssLogo from "@/assets/images/skills/2.svg";
import jsLogo from "@/assets/images/skills/3.svg";
import tsLogo from "@/assets/images/skills/4.svg";
import reactLogo from "@/assets/images/skills/5.svg";
import nextLogo from "@/assets/images/skills/6.svg";
import tailwindLogo from "@/assets/images/skills/7.svg";
import nodeLogo from "@/assets/images/skills/8.svg";
import mongoLogo from "@/assets/images/skills/9.svg";
import postLogo from "@/assets/images/skills/13.svg";
import sqlLogo from "@/assets/images/skills/10.svg";
import prismaLogo from "@/assets/images/skills/11.svg";

const SkillsSection = () => {
  const skillsData = [
    // {
    //   title: "HTML",
    //   image: htmlLogo,
    // },
    // {
    //   title: "CSS",
    //   image: cssLogo,
    // },
    {
      title: "JavaScript",
      image: jsLogo,
    },
    {
      title: "TypeScript",
      image: tsLogo,
    },
    {
      title: "React.js",
      image: reactLogo,
    },
    {
      title: "Next.js",
      image: nextLogo,
    },
    {
      title: "Tailwind CSS",
      image: tailwindLogo,
    },
    {
      title: "Node.js",
      image: nodeLogo,
    },
    {
      title: "MongoDB",
      image: mongoLogo,
    },
    // {
    //   title: "SQL",
    //   image: sqlLogo,
    // },
    {
      title: "Postgres",
      image: postLogo,
    },
    {
      title: "Prisma",
      image: prismaLogo,
    },
  ];
  return (
    <div>
      <CommonTitle text="Professional Skills" />
    </div>
  );
};

export default SkillsSection;
