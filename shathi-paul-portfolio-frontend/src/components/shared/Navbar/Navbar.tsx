"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll on mobile
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Detect scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuData = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:block transition-colors duration-500 ${
          scrolled ? "bg-secondary shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-evenly xl:justify-between items-center px-4 md:px-10 py-2">
          <div className="w-1/3 h-full flex items-center justify-start">
            <NavLogo />
          </div>

          <nav aria-label="Main navigation w-1/3">
            <ul
              className={`flex gap-10 py-3 px-8 ${
                scrolled
                  ? "bg-transparent"
                  : "bg-secondary shadow-md rounded-xl"
              }`}
            >
              {menuData.map((data, index) => (
                <li key={index}>
                  <Link
                    href={data.link}
                    className={`text-primary font-medium hover:text-gold ${
                      pathname === data.link ? "font-semibold" : ""
                    }`}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-1/3 h-full flex items-center justify-end">
            <NavButton />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div
          className={`flex justify-between items-center px-4 py-2 ${
            scrolled ? "bg-secondary shadow-md" : "bg-transparent"
          }`}
        >
          <NavLogo />
          <div className="flex justify-end items-center gap-1">
            <NavButton />
            <Hamburger
              size={24}
              duration={0.4}
              color="#3e2c23"
              easing="ease-in"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`bg-white px-6 fixed top-0 z-50 pt-6 flex flex-col items-start gap-4 w-3/4 md:w-2/4 h-screen ${
            isOpen ? "left-0" : "-left-full"
          } duration-500 ease-in-out`}
        >
          <NavLogo />
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
            {menuData.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                className="text-base font-medium hover:font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setOpen(false)}
              >
                {data.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
