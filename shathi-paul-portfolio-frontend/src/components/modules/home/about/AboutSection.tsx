import Image from "next/image";
import myImage from "@/assets/images/shathi.jpg";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import CommonButton from "@/components/common/buttons/CommonButton";

const AboutSection = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shathipaul",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/shathipaul",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: <IoIosMail />,
      link: "mailto:shathi.skr.paul@gmail.com",
      label: "Email",
    },
  ];
  return (
    <div
      id="about"
      className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 2xl:gap-10 items-center my-16 overflow-hidden"
    >
      {/* Image Section */}
      <div className="flex justify-center relative">
        {/* Border Wrapper */}
        <div className="relative w-full md:w-[400px] h-[550px] xl:ml-36 mb-16 lg:mb-0">
          {/* Border */}
          <div className="absolute w-[90%] md:w-[360px] h-[93%] md:h-[505px] border-5 border-primary right-0 bottom-0"></div>

          {/* Icons on top-left */}
          <div className="absolute top-6 left-0 z-40 flex flex-col gap-3 bg-secondary py-3 px-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 bg-primary text-secondary rounded-lg hover:bg-gold transition duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Image */}
          <div className="absolute z-30 w-[90%] md:w-[360px] h-[93%] md:h-[505px] left-0 top-0">
            <Image
              src={myImage}
              alt="Shathi Paul, Web Developer specializing in Next.js and React.js hidden md:block"
              className="object-cover h-full w-full rounded block"
              fill
              priority
            />
          </div>
        </div>
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center text-center lg:text-left gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider">
          Hey, Shathi here
        </h1>
        <h2 className="text-lg md:text-xl tracking-widerr">
          I craft responsive, modern websites that look great and work
          flawlessly.
        </h2>
        <p className="text-justify">
          I’m a website developer passionate about turning designs into seamless
          digital experiences. Whether it’s a Figma file, a creative concept, or
          an existing site that needs a fresh touch — I bring it to life with
          clean code, modern technologies, and a sharp eye for detail.
        </p>
        <p className="text-justify">
          I specialize in Next.js, React.js, Tailwind CSS, and Node.js, building
          websites that are not only visually appealing but also fast,
          responsive, and SEO-friendly. My goal is simple: to help businesses,
          startups, and agencies stand out online with websites that look great
          and perform even better.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mt-6 relative z-30">
          <CommonButton text="Hire me" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
