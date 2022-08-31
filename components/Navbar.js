import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Toggle navbar menu
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: <NavItem item="About" />,
      href: "#about",
    },
    {
      id: 3,
      name: <NavItem item="Trainers" />,
      href: "#trainers",
    },
    {
      id: 4,
      name: <NavItem item="Contact Us" />,
      href: "#contact-us",
    },
    {
      id: 5,
      name: "Blogs",
      href: "/blogs",
    },
  ];

  return (
    <header className="bg-secondary">
      <nav className="container flex items-center justify-between px-4">
        <Image src="/Logo.svg" width={120} height={70} alt="GymZone Logo" />
        <ul
          className={`hidden md:flex items-center ${
            router.pathname === "/"
              ? "space-x-8"
              : "" || router.pathname === "/blogs/[slug]"
              ? "space-x-2"
              : "space-x-8" || router.pathname === "/blogs"
              ? "space-x-2"
              : "space-x-8"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>
                <a className="text-gray-50 text-sm font-semibold uppercase hover:text-primary transition">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={handleIsOpen} className="md:hidden">
          <FaBars size={20} color="#fff" />
        </button>
      </nav>
      <div className={isOpen ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black bg-opacity-40 z-50" : ""}>
        <nav
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-secondary h-screen p-6 ease-in duration-150"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-150"
          }
        >
          <div className="flex items-center justify-between">
            <Image src="/Logo.svg" width={120} height={70} alt="GymZone Logo" />
            <button onClick={handleIsOpen}>
              <MdClose size={25} color="#fff" />
            </button>
          </div>
          <div>
            <ul className="space-y-10 my-12 inline-block">
              {navLinks.map((link) => (
                <li key={link.id} onClick={handleIsOpen}>
                  <Link href={link.href}>
                    <a className="text-gray-50 text-sm font-semibold uppercase hover:text-primary transition">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
