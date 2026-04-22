import profileImage from "@/assets/image-2.png";

const profileData = {
  firstName: "Shathi",
  lastName: "Paul",
  copyrightName: "Shathi Paul",
  title: "Website Developer / Designer",
  email: "shathi@hashtagshathi.com",
  bio: [
    "I'm a freelance web developer focused on turning designs into seamless digital experiences.",
    "I work with Figma files, creative briefs, and existing sites that need a refresh — always with clean code, modern technologies, and sharp attention to detail.",
    "Currently available for new projects: landing pages, business sites, e-commerce, blogs, and service websites.",
  ],
  motivationImage: profileImage.src,
  motivation: [
    "I believe every great website starts with a clear purpose and ends with a user who never has to think about the technology behind it.",
    "I'm drawn to the space between design and code: where a Figma file becomes something people can actually click, scroll, and feel.",
    "Most days that means precise markup, thoughtful component structure, and a final result that looks exactly as intended.",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/shathipaul",
    instagram: "https://www.instagram.com/",
    github: "https://github.com/shathipaul",
    mail: "mailto:shathi@hashtagshathi.com",
    calendly:
      "https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul",
  },
} as const;

export const profile = profileData;
export type Profile = typeof profileData;
