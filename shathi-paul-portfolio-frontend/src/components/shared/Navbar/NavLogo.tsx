import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import logo2 from "@/assets/images/fav.png";

const NavLogo = () => {
  return (
    <>
      <Link
        href="/"
        className="hidden md:block md:w-48 xl:w-60"
        aria-label="Go to Shathi Paul - Web Developer Homepage"
      >
        <Image
          src={logo}
          alt="Shathi Paul Logo - Web Developer"
          priority
          sizes="(max-width: 1280px) 192px, 240px"
        />
      </Link>

      {/* Mobile logo */}
      <Link
        href="/"
        className="w-20 md:hidden"
        aria-label="Go to Shathi Paul - Web Developer Homepage"
      >
        <Image
          src={logo2}
          alt="Shathi Paul Icon Logo"
          loading="lazy"
          sizes="80px"
        />
      </Link>
    </>
  );
};

export default NavLogo;
