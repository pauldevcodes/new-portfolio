import About from "@/components/About";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className=" px-8 md:px-10 lg:mx-auto xl:max-w-screen-lg xl:px-0">
        <div className=" flex flex-col justify-center h-screen">
          <div className=" flex flex-col items-start gap-y-10">
            <h1 className=" text-3xl font-semibold text-slate-900">
              Hey &#x1F44B;, <br /> I'm Paul Okwulu and I love building
              beautiful websites and functional web applications &#128512;
            </h1>

            <Link
              href="#about"
              className=" bg-emerald-900 flex items-center rounded duration-200 ease-in-out shadow-md shadow-emerald-900/50 hover:shadow-lg hover:shadow-emerald-900/50 "
            >
              <span className=" bg-emerald-950 p-3 text-white">
                <ChevronDoubleDownIcon width={20} />
              </span>
              <button className=" text-sm px-12 py-3 uppercase text-white">
                About me
              </button>
            </Link>
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
