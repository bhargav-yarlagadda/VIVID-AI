"use client";
import { useState } from "react";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className=" p-4 bg-white h-screen shadow-lg dark:bg-gray-900">
      <div className={`flex ${isMenuOpen?"justify-end":"justify-center"} items-center mb-4`}>
        <Image
          src="/assets/icons/menu.svg"
          alt="menu"
          width={32}
          height={32}
         className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className="w-full flex  justify-center mb-4">
        <div
        
        className={`cursor-pointer transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        >

        <UserButton />
        </div>
      </div>
      {isMenuOpen && (
        <nav className="flex transition-all duration-100 ease-out flex-col items-center gap-6">
          <SignedIn>
            <ul className="w-full flex flex-col items-center gap-4">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    className={`w-full p-3 flex items-center justify-start ${
                      isActive
                        ? "bg-purple-100 text-purple-600"
                        : "text-gray-800 dark:text-gray-200"
                    } rounded-md hover:bg-purple-200 transition-colors duration-200`}
                    key={link.route}
                  >
                    <Link
                      className="flex items-center gap-3 w-full"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt={`${link.label} icon`}
                        width={24}
                        height={24}
                        className={`${isActive ? "brightness-150" : ""}`}
                      />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>

          <SignedOut>
            <button className="w-full py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-md shadow-lg hover:opacity-90 transition-opacity duration-200">
              <Link href="/sign-in" className="w-full text-center">
                Login
              </Link>
            </button>
          </SignedOut>
        </nav>
      )}

      {!isMenuOpen && (
        <nav className="flex flex-col items-center gap-4 mt-4">
          <SignedIn>
            <ul className="w-full flex flex-col items-center gap-4">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    className={`w-full p-3 flex items-center justify-center ${
                      isActive
                        ? "bg-purple-100 text-purple-600"
                        : "text-gray-800 dark:text-gray-200"
                    } rounded-md hover:bg-purple-200 transition-colors duration-200`}
                    key={link.route}
                  >
                    <Link
                      className="flex items-center gap-2 w-full"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt={`${link.label} icon`}
                        width={24}
                        height={24}
                        className={`${isActive ? "brightness-150" : ""}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      )}
    </header>
  );
};

export default MobileNav;
