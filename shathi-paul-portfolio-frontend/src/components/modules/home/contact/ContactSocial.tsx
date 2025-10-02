import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
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
  ];
  return (
    <div className="text-xl flex gap-4 mt-">
      {socialLinks.map((data, i) => (
        <a
          key={i}
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold relative z-30 duration-500"
          aria-label={data.label}
        >
          {data.icon}
        </a>
      ))}
    </div>
  );
};

export default ContactSocial;
