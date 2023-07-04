import Image from "next/image";
import Link from "next/link";

// fonts
import { karla } from "@/app/fonts";
// images
import profilePicture from "../../public/profile pic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className=" px-8 flex flex-col gap-y-10 md:px-10 md:flex-row md:gap-x-10 md:items-stretch xl:px-[160px]"
    >
      <div className=" flex-1 bg-black">
        <Image src={profilePicture} alt="profile of Paul Okwulu" className=" w-full h-full object-cover" />
      </div>
      <div className=" flex-1 flex flex-col justify-between">
        <div className=" bg-gray-300 h-[1px] w-full md:w-1/2"></div>
        {/* content */}
        <div className=" my-7 flex-1">
          <h2 className={`${karla.className} text-4xl text-slate-900`}>
            About Me
          </h2>
          <p className=" text-slate-600 text-sm my-7 md:text-base">
            I&apos;m a junior front-end developer looking for a new role in a startup
            or an existing company. I focus on writing accessible HTML, using
            modern CSS practices and writing clean Javascript. When writing
            Javascript code, I mostly use React, but I can adapt to whatever
            tools are required. I&apos;m based in Lagos, Nigeria, but I&apos;m happy
            working remotely. When I&apos;m not coding, you&apos;ll either find me playing
            my electric guitar with my musicians or playing games or watching
            k-drama and animes. I&apos;d love for you to check out my work.
          </p>
          <Link
            href="/portfolio"
            className=" px-8 py-4 border-2 border-emerald-900 border-solid text-emerald-900 text-sm font-semibold uppercase w-fit rounded cursor-pointer duration-200 hover:text-white hover:bg-emerald-900 hover:shadow-md hover:shadow-emerald-900/50"
          >
            go to portfolio
          </Link>
        </div>
        <div className=" bg-gray-300 h-[1px] w-full md:w-1/2"></div>
      </div>
    </section>
  );
}
