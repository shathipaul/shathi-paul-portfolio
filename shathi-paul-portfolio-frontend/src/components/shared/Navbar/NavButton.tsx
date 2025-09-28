import { MdTouchApp } from "react-icons/md";

const NavButton = () => {
  return (
    <>
      <a
        href="https://calendly.com/shathi-paul/website-strategy-call-with-shathi-paul"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Schedule a meeting about your website project with Shathi Paul"
        className="relative inline-block group"
      >
        <span className="relative z-10 block  py-2 lg:py-3 px-3 lg:px-6 overflow-hidden leading-tight transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full py-2 md:py-3 px-3 lg:px-6 rounded-lg bg-secondary"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
          <span className="relative inline-flex md:hidden items-center">
            <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
              <MdTouchApp className="text-xl" />
            </span>
          </span>
          <span className="hidden relative md:inline-flex items-center">
            <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
              L
            </span>
            <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
              e
            </span>
            <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
              t&apos;
            </span>
            <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
              s
            </span>

            <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
              &nbsp;
            </span>
            <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
              T
            </span>
            <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
              a
            </span>
            <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
              l
            </span>
            <span className="duration-700 [transition-delay:0.18s] group-hover:[transform:rotateY(360deg)]">
              k
            </span>
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-10 lg:h-12 -mb-1 -mr-1 transition-all duration-500 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
    </>
  );
};

export default NavButton;
