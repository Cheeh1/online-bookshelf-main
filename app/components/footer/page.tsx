"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { path: "/", name: "Home" },
  { path: "/explore", name: "Explore" },
  { path: "/library", name: "Library" },
];

const Footer: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="flex flex-col gap-16 bg-white pt-10">
        <div className="flex flex-col xl:flex-row md:flex-row pl-10 md:pl-0 gap-10  xl:pl-0 justify-evenly">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary font-semibold text-xl">BookMark</h1>
            <p className="text-sm text-black w-64">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              duis morbi ac enim, ut proin. Ut et dui mauris convallis odio sem
              hac.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary font-semibold text-lg">
              Useful Links
            </h1>
            <ul className="flex flex-col gap-2 text-black text-sm">
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={
                    pathname === link.path ? "text-secondary font-bold" : ""
                  }
                  href={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary font-semibold text-lg">Help</h1>
            <ul className="flex flex-col gap-2 text-black text-sm">
              <li className="">About</li>
              <li className="">How To Use</li>
              <li className="">FAQs</li>
              <li className="">FAQs</li>
            </ul>
          </div>
        </div>
        <p className="bg-secondary tracking-widest text-white text-center font-bold py-5">
          @ 2021 BookMark
        </p>
      </footer>
    </>
  );
};

export default Footer;
