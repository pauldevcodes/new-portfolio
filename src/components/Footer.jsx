import { fastHand } from "@/app/fonts";
import Link from "next/link";

// icons
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      id: 1,
      link: "home",
      url: "/",
    },
    {
      id: 2,
      link: "portfolio",
      url: "portfolio",
    },
    {
      id: 3,
      link: "contact me",
      url: "contact",
    },
  ];

  return (
    <footer className=" bg-emerald-900 px-8 py-10 flex flex-col items-center gap-y-16 md:flex-row md:justify-between md:px-10 xl:px-[160px]">
      <div className=" flex flex-col items-center gap-y-3 md:flex-row md:gap-x-8">
        <h1 className={`${fastHand.className} text-2xl text-white font-bold`}>
          PaulDevCodes
        </h1>
        <div className=" flex flex-col items-center gap-y-5 md:flex-row md:gap-x-5">
          {links.map(({ id, link, url }) => {
            return (
              <Link
                key={id}
                href={url}
                className=" uppercase text-xs text-white font-semibold hover:text-emerald-700"
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" flex items-center gap-x-10">
        <a href="https://github.com/pauldevcodes" target="_blank">
          <FaGithub width={40} className=" text-white" />
        </a>
        <a href="https://twitter.com/pauldevcodes" target="_blank">
          <FaTwitter width={40} className=" text-white" />
        </a>
      </div>
    </footer>
  );
}
