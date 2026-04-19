import Link from "next/link";

const NavigateSection = () => {
  // SVG arrow matching the reference site
  function ArrowIcon() {
    return (
      <svg
        className="h-[clamp(1rem,1.5vw,2rem)] w-[clamp(1rem,1.5vw,2rem)]"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <line
          x1="0.2"
          y1="50.2"
          x2="100.2"
          y2="50.2"
          stroke="currentColor"
          strokeWidth="4"
        />
        <line
          x1="65.4"
          y1="15.2"
          x2="100.8"
          y2="50.6"
          stroke="currentColor"
          strokeWidth="4"
        />
        <line
          x1="65.4"
          y1="85.2"
          x2="100.8"
          y2="49.9"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    );
  }

  return (
    <div className="ml-auto flex flex-col items-end gap-4 mt-[15vh] pr-[5vw] pb-[10vh]">
      {[
        { href: "/works", label: "WORKS" },
        { href: "/services", label: "SERVICES" },
        { href: "/blogs", label: "BLOGS" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light transition-opacity hover:opacity-60"
        >
          <span>{label}</span>
          <ArrowIcon />
        </Link>
      ))}
    </div>
  );
};

export default NavigateSection;
