"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";
import Image from "next/image";

type props = {
  links: {
    path: string;
    name: string;
  }[];
  toggle: boolean;
  action: () => void;
  handleModal: () => void;
}

const Menu = ({ links, toggle, action }: props) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`z-30 transition-all duration-500 delay-100 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <section
          className={`bg-secondary top-0 left-0 fixed bottom-0 pt-36 pb-56 w-full flex flex-col gap-10 duration-500 delay-100 transition-all ${
            toggle ? "transform translate-y-0" : "transform -translate-x-full"
          }`}
        >
          <div className="absolute top-10 right-10" onClick={action}>
            <FaX className="text-3xl rounded-full bg-primary text-white p-1" />
          </div>
          <div className="flex flex-col text-2xl font-semibold items-center gap-10 text-white">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`hover:text-primary ${
                  pathname === link.path ? "text-primary" : ""
                }`}
                href={link.path}
                onClick={action}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 mt-8">
            <div className="relative flex justify-center">
              <input
                className="w-32 placeholder:font-semibold pl-4 placeholder:text-secondary border-2 border-secondary text-primary px-2 rounded-3xl py-2 placeholder:text-xl"
                type="text"
                name="search"
                placeholder="Search"
                id="search"
              />
              <Image
                className="absolute top-3 right-4 bg-white"
                width={20}
                height={20}
                src="/images/search.svg"
                alt="search"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
