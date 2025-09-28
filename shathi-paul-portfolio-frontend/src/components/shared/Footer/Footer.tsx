import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
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
    <footer aria-label="Footer" className="py-6">
      {/* <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2"> */}
      <p className="text-sm text-center relative z-30">
        © 2025{" "}
        <Link href="/" className="hover:underline hover:text-gold">
          Shathi Paul
        </Link>
        . All rights reserved.
      </p>
      {/* <div className="text-2xl flex justify-end items-center gap-3 md:gap-4 px-4">
          {socialLinks.map((data, i) => (
            <a
              key={i}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold duration-500"
              aria-label={data.label}
            >
              {data.icon}
            </a>
          ))}
        </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
