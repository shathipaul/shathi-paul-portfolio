import { ICommonButton } from "@/types";

const CommonButton = ({ text, onClick }: ICommonButton) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden text-sm lg:text-base shadow-md rounded-xl bg-primary hover:bg-chocolate text-secondary py-2 md:py-3 px-3 lg:px-6 duration-700"
    >
      <span className="hidden relative md:inline-flex items-center">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="duration-700 group-hover:[transform:rotateY(360deg)]"
            style={{ transitionDelay: `${index * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </button>
  );
};

export default CommonButton;
