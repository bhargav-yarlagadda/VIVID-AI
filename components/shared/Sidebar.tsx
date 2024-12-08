"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <aside className="w-full max-w-xs h-screen p-4 bg-white shadow-lg dark:bg-gray-900">
      <div className="flex flex-col h-full gap-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="flex flex-col gap-4">
          <div className="flex px-4">
            <Image
              src={user?.imageUrl || "/assets/icons/profile.svg"} // Use your default image path here
              alt="user profile"
              width={40}
              height={30}
              className="rounded-full max-w-[34px] max-h-[34px] my-auto"
            />
            <li className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
              {user?.firstName && (
                <span className="text-purple-500 dark:text-purple-400">
                 welcome {user.firstName}
                </span>
              )}
            </li>
          </div>

          <SignedIn>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <Link href={link.route} className="flex items-center gap-2">
                      <Image
                        src={link.icon}
                        alt="icon"
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="space-y-2">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <Link href={link.route} className="flex items-center gap-2">
                      <Image
                        src={link.icon}
                        alt="icon"
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
