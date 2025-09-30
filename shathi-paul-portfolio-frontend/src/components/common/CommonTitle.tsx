import { poppins } from "@/app/layout";

const CommonTitle = ({ text }: { text: string }) => {
  return (
    <h3
      className={`${poppins.className} text-3xl md:text-4xl lg:text-5xl text-center tracking-wider mb-16 relative z-30`}
    >
      {text}
    </h3>
  );
};

export default CommonTitle;
