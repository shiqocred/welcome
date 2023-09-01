import Image from "next/image";
import bg from "./images/bg.png";
import { Fragment } from "react";
import Navbar from "@/components/navbar";
import Quotes from "@/components/quotes";
import Widget from "@/components/widget";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Fragment>
        <div className="w-1/3 h-2/3 absolute left-0 bottom-0 bg-gradient-to-l from-background dark:to-background/20 to-background/0  -z-10" />
        <div className="w-1/3 h-2/3 absolute left-0 bottom-0 bg-gradient-to-bl from-background/70 dark:to-background/20 to-background/0 -z-10" />
        <div className="w-1/3 h-2/3 absolute left-0 bottom-0 bg-gradient-to-b from-background dark:to-background/20 to-background/0 -z-10" />
        <div className="w-1/3 h-2/3 absolute left-0 bottom-0 -z-20">
          <Image src={bg} alt="" fill className="object-cover" />
        </div>
      </Fragment>
      <Navbar />
      <main className="w-full h-[calc(100%-88px)] max-w-7xl mx-auto">
        <div className="w-full h-full p-8 flex justify-between relative">
          <Quotes />
          <Widget />
        </div>
      </main>
    </div>
  );
}
