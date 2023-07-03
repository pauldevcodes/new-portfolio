"use client";
import { useState } from "react";
import { fastHand } from "@/app/fonts";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleMenuIcon = () => {
    setMenuIcon(!menuIcon);
  };
  const links = [
    {
      id: 1,
      link: "home",
      url: "/"
    },
    {
      id: 2,
      link: "portfolio",
      url: "portfolio"
    },
    {
      id: 3,
      link: "contact",
      url: "#contact"
    },
  ];

  return (
    <header className=" fixed w-screen px-8 py-5 bg-white z-20 flex items-center justify-between shadow-lg md:py-10 md:px-10 xl:px-[160px]">
      <h1 className={`${fastHand.className} text-2xl font-bold`}>PaulDevCodes</h1>
      <div onClick={handleMenuIcon} className=" md:hidden">
        {menuIcon ? <XMarkIcon width={30} /> : <Bars3Icon width={30} />}
      </div>
      <div className=" hidden md:flex items-center gap-x-10">
        {links.map(({ id, link, url }) => {
          return (
            <Link
              key={id}
              href={url}
              className=" uppercase text-xs font-semibold hover:text-emerald-700"
            >
              {link}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
