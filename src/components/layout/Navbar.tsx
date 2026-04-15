import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-14 h-14">
          <Image
            src={logo}
            alt="Orienco Logo"
            fill
            priority
            sizes="56px"
            className="object-contain rounded-2xl"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden items-center gap-12 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/80 transition-all hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Placeholder for alignment to match design (logo on right is not in image, but links are centered-ish) */}
      <div className="w-16 hidden md:block" />
    </nav>
  );
};

export default Navbar;
