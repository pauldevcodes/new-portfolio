import { karla } from "@/app/fonts";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className=" my-20 px-8 flex flex-col items-center gap-y-10 md:px-10 lg:flex-row lg:justify-between lg:items-center xl:px-[160px]">
      <h3 className={`${karla.className} text-4xl text-slate-900 text-center lg:text-start`}>
        Interested in doing a project together?
      </h3>
      <Link
        href="/portfolio"
        className=" px-8 py-4 border-2 border-emerald-900 border-solid text-emerald-900 text-sm font-semibold uppercase w-fit rounded cursor-pointer duration-200 hover:text-white hover:bg-emerald-900 hover:shadow-md hover:shadow-emerald-900/50"
      >
        contact me
      </Link>
    </section>
  );
}
