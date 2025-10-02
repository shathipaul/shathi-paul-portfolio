import CommonTitle from "@/components/common/CommonTitle";
import ContactForm from "./ContactForm";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { TbSocial } from "react-icons/tb";
import ContactSocial from "./ContactSocial";

const ContactSection = () => {
  const contactData = [
    // { icon: <FaLocationDot />, title: "Located", text: "Bangladesh" },
    { icon: <SiFreelancer />, title: "Freelance", text: "Available right now" },
    {
      icon: <MdOutlineMarkEmailRead />,
      title: "Email",
      text: "shathi.skr.paul@gmail.com",
    },
    {
      icon: <TbSocial />,
      title: "Social",
      text: "",
      component: <ContactSocial />,
    },
  ];

  return (
    <div id="contact" className="mb-6 md:mb-8 lg:mb-16 scroll-mt-28">
      <CommonTitle text="Let's talk about ideas" />
      <div className="flex flex-col md:flex-row justify-evenly gap-8  items-center">
        <div className="flex flex-col justify-center gap-8">
          {contactData.map((data, index) => (
            <div key={index} className="flex  items-center gap-6">
              <div className="relative z-30 bg-secondary border-2 border-primary rounded-full p-4 lg:p-6 text-2xl">
                {data.icon}
              </div>
              <div>
                <h4 className="text-lg lg:text-xl">{data.title}</h4>
                <p className="relative z-30 text-sm md:text-base italic">
                  {data.text}
                </p>
                <>{data.component}</>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
