import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-label="Footer" className="max-w-[1400px] mx-auto py-6">
      <p className="relative z-30 text-sm text-center">
        © 2025{" "}
        <Link href="/" className="duration-500 hover:underline hover:text-gold">
          Shathi Paul
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
