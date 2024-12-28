"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// react icons
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaAngleDown,
  FaSearch,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

// images
import logo from "@/public/Logo.png";

const NavItem = [
  {
    name: "Home",
    dropdown: [
      { name: "Home 1", href: "/home1" },
      { name: "Home 2", href: "/home2" },
      { name: "Home 3", href: "/home3" },
      { name: "Home 4", href: "/home4" },
      { name: "Home 5", href: "/home5" },
    ],
  },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    dropdown: [
      { name: "Service 1", href: "/departments/bangla" },
      { name: "Service 2", href: "/departments/english" },
      { name: "Service 3", href: "/departments/physics" },
      { name: "Service 4", href: "/departments/chemistry" },
      { name: "Service 5", href: "/departments/math" },
      { name: "Service 6", href: "/departments/economics" },
    ],
  },
  {
    name: "Projects",
    dropdown: [
      { name: "Project 1", href: "/project1" },
      { name: "Project 2", href: "/project2" },
      { name: "Projects 3", href: "/project3" },
      { name: "Projects 4", href: "/project4" },
      { name: "Projects 5", href: "/project5" },
      { name: "Projects 6", href: "/project6" },
    ],
  },
  {
    name: "Blog",
    dropdown: [
      { name: "Blog 1", href: "/blog1" },
      { name: "Blog 2", href: "/blog2" },
      { name: "Blog 3", href: "/blog3" },
      { name: "Blog 4", href: "/blog4" },
      { name: "Blog 5", href: "/blog5" },
    ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "Page 1", href: "/page1" },
      { name: "Page 2", href: "/page2" },
      { name: "Page 3", href: "/page3" },
      { name: "Page 4", href: "/page4" },
      { name: "Page 5", href: "/page5" },
    ],
  },

  { name: "Contact", href: "/contact" },
];

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const navbarClasses = `fixed top-0 left-0 right-0 z-20 bg-white shadow-xl`;

  const isActive = (href) => href && pathname === href;

  const isDropdownActive = (dropdown) => {
    if (!dropdown) return false;
    return dropdown.some((item) => isActive(item.href));
  };

  // desktop
  const renderNavItem = (item, index) => {
    const active = isActive(item.href) || isDropdownActive(item.dropdown);

    return (
      <li
        key={index}
        className="relative group"
        onMouseEnter={() => toggleDropdown(index)}
        onMouseLeave={() => toggleDropdown(null)}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={`flex items-center cursor-pointer ${
              active
                ? "bg-[#19352d] text-black"
                : "text-black hover:text-[#19352D]"
            } px-3 py-2 rounded-md`}
          >
            {item.name}
            {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
          </Link>
        ) : (
          <span
            className={`flex items-center cursor-pointer ${
              active
                ? "bg-[#19352d] text-white"
                : "text-black hover:text-[#19352D]"
            } px-3 py-2 rounded-md`}
          >
            {item.name}
            {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
          </span>
        )}
        {item.dropdown && (
          <ul
            className={`absolute left-0 mt-2 space-y-2 w-40 bg-[#19352d] text-black rounded-md shadow-lg transition-all duration-700 transform ${
              activeDropdown === index
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-0 -translate-y-2"
            } origin-top max-h-[80vh] overflow-y-auto`}
          >
            {item.dropdown.map((dropItem, dropIndex) => (
              <li key={dropIndex}>
                <Link
                  href={dropItem.href}
                  className={`block px-4 py-2 text-sm text-white hover:bg-white hover:text-[#19352d] hover:border-l-8 hover:border-[#19352d] cursor-pointer transition-all duration-700 ${
                    isActive(dropItem.href)
                      ? "bg-white text-[#19352d] font-bold italic"
                      : ""
                  }`}
                >
                  {dropItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  //  mobile
  const renderMobileNavItem = (item, index) => {
    const active = isActive(item.href) || isDropdownActive(item.dropdown);

    return (
      <li key={index} className="block">
        <div className="block">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center ${
                active ? "bg-[#19352d] text-white" : "text-[#19352d] "
              } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
            </Link>
          ) : (
            <span
              className={`flex items-center ${
                active ? "bg-[#19352d] text-white" : "text-[#19352d]"
              } cursor-pointer px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => toggleDropdown(index)}
            >
              {item.name}
              {item.dropdown && <FaAngleDown className="ml-1 text-xs" />}
            </span>
          )}
        </div>
        {item.dropdown && (
          <ul
            className={`pl-4 mt-2 space-y-2 bg-[#19352d] transition-all duration-700 transform ${
              activeDropdown === index
                ? "opacity-100 scale-y-100 max-h-[60vh]"
                : "opacity-0 scale-y-0 max-h-0"
            } origin-top overflow-y-auto`}
          >
            {item.dropdown.map((dropItem, dropIndex) => (
              <li key={dropIndex}>
                <Link
                  href={dropItem.href}
                  className={`block px-3 py-2 text-sm ${
                    isActive(dropItem.href)
                      ? "text-[#19352d] bg-white font-bold italic"
                      : "text-white hover:bg-[#fff] hover:text-[#19352d]"
                  } hover:border-l-8 hover:border-[#19352d] cursor-pointer transition-all duration-700`}
                  onClick={() => setIsOpen(false)}
                >
                  {dropItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <main className={navbarClasses}>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} width={35} height={35} alt="Logo" />
            <h2 className="text-2xl font-bold text-[#19352d]">BizMaster</h2>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {NavItem.map(renderNavItem)}

              <FaSearch className="text-[#19352d] cursor-pointer text-lg" />

              <div className="border-r border-[#19352D66] h-5 mx-2"></div>

              <RiMenu3Line className="text-xl text-[#19352d] cursor-pointer" />

              <div className="flex items-center gap-3 ml-2">
                <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
                  <FaInstagram className="text-lg text-[#7A7A7A]" />
                </div>
                <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
                  <FaLinkedin className="text-lg text-[#7A7A7A]" />
                </div>
                <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
                  <FaTwitter className="text-lg text-[#7A7A7A] " />
                </div>
                <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
                  <FaFacebookF className="text-lg text-[#7A7A7A]" />
                </div>
              </div>
            </ul>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#19352d] focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <IoMdMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavItem.map(renderMobileNavItem)}

          <div className="flex items-center gap-5 ml-2 px-3 py-2">
            <FaSearch className="text-[#19352d] cursor-pointer text-lg" />

            <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
              <FaInstagram className="text-lg text-[#7A7A7A]" />
            </div>
            <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
              <FaLinkedin className="text-lg text-[#7A7A7A]" />
            </div>
            <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
              <FaTwitter className="text-lg text-[#7A7A7A] " />
            </div>
            <div className="bg-[#EBF3EE] p-2 rounded-2xl cursor-pointer">
              <FaFacebookF className="text-lg text-[#7A7A7A]" />
            </div>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default Menubar;
