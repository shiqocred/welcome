"use client";

import * as React from "react";
import Image from "next/image";
import { Check, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { useDate } from "@/hooks/use-date";
import { Poppins } from "next/font/google";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { useLocalStorage } from "@/hooks/use-local-storage";

import discord from "@/app/images/discord.png";
import maps from "@/app/images/maps.png";
import drive from "@/app/images/drive.png";
import figma from "@/app/images/figma.png";
import gmail from "@/app/images/gmail.png";
import google from "@/app/images/google.png";
import github from "@/app/images/github.png";
import aiChat from "@/app/images/ai-chat.png";
import siakad from "@/app/images/siakad.png";
import whatsapp from "@/app/images/whatsapp.png";
import youtube from "@/app/images/youtube.png";
import youtubeMusic from "@/app/images/youtube-music.png";

import comingSoon from "@/app/images/comming-soon.png";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import WidgetLoading from "./loading/widget-loading";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

export const widgetMenu = [
  {
    value: "google",
    name: "Google",
    src: google,
    href: "https://google.com",
  },
  {
    value: "drive",
    name: "Drive",
    src: drive,
    href: "https://drive.google.com",
  },
  {
    value: "siakad",
    name: "SIAKAD",
    src: siakad,
    href: "https://akademik.uin-suka.ac.id",
  },
  {
    value: "youtube",
    name: "Youtube",
    src: youtube,
    href: "https://youtube.com",
  },
  {
    value: "whatsapp",
    name: "Whatsapp",
    src: whatsapp,
    href: "https://web.whatsapp.com",
  },
  {
    value: "github",
    name: "Github",
    src: github,
    href: "https://github.com",
  },
  {
    value: "yt-music",
    name: "Yt Music",
    src: youtubeMusic,
    href: "https://music.youtube.com",
  },
  {
    value: "discord",
    name: "Discord",
    src: discord,
    href: "https://discord.com",
  },
  {
    value: "maps",
    name: "Maps",
    src: maps,
    href: "https://maps.google.com",
  },
  {
    value: "gmail",
    name: "Gmail",
    src: gmail,
    href: "https://mail.google.com",
  },
  {
    value: "figma",
    name: "Figma",
    src: figma,
    href: "https://figma.com",
  },
  {
    value: "ai-chat",
    name: "Chat GPT",
    src: aiChat,
    href: "https://chat.openai.com",
  },
];

const Widget = () => {
  const { today, wish, time } = useDate();
  const [open, setOpen] = React.useState(false);
  const [fullHour, setFullHour] = useLocalStorage("format", true);
  const [detik, setDetik] = useLocalStorage("detik", false);
  const [isMounted, setIsMounted] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <WidgetLoading />;
  }

  return (
    <div className="w-[764px] h-full flex flex-col space-y-4">
      <div className="w-full flex space-x-4 h-[374px]">
        <div className="w-full flex space-x-4 h-full flex-1">
          <div className="flex h-full w-full flex-col space-y-4">
            {widgetMenu.slice(0, 3).map((menu) => (
              <Button
                key={menu.value}
                variant={"outline"}
                className="w-full h-full flex flex-col space-y-2"
                onClick={() => router.push(menu.href)}
              >
                <div className="w-10 h-10 relative overflow-hidden mt-3">
                  <Image
                    draggable={false}
                    className="object-contain pointer-events-none"
                    alt=""
                    src={menu.src}
                    fill
                  />
                </div>
                <p>{menu.name}</p>
              </Button>
            ))}
            {/*  */}
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            {widgetMenu.slice(3, 6).map((menu) => (
              <Button
                key={menu.value}
                variant={"outline"}
                className="w-full h-full flex flex-col space-y-2"
                onClick={() => router.push(menu.href)}
              >
                <div className="w-10 h-10 relative overflow-hidden mt-3">
                  <Image
                    draggable={false}
                    className="object-contain pointer-events-none"
                    alt=""
                    src={menu.src}
                    fill
                  />
                </div>
                <p>{menu.name}</p>
              </Button>
            ))}
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            {widgetMenu.slice(6, 9).map((menu) => (
              <Button
                key={menu.value}
                variant={"outline"}
                className="w-full h-full flex flex-col space-y-2"
                onClick={() => router.push(menu.href)}
              >
                <div className="w-10 h-10 relative overflow-hidden mt-3">
                  <Image
                    draggable={false}
                    className="object-contain pointer-events-none"
                    alt=""
                    src={menu.src}
                    fill
                  />
                </div>
                <p>{menu.name}</p>
              </Button>
            ))}
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            {widgetMenu.slice(9, 12).map((menu) => (
              <Button
                key={menu.value}
                variant={"outline"}
                className="w-full h-full flex flex-col space-y-2"
                onClick={() => router.push(menu.href)}
              >
                <div className="w-10 h-10 relative overflow-hidden mt-3">
                  <Image
                    draggable={false}
                    className="object-contain pointer-events-none"
                    alt=""
                    src={menu.src}
                    fill
                  />
                </div>
                <p>{menu.name}</p>
              </Button>
            ))}
          </div>
        </div>
        <div className="h-full w-[244px] flex flex-col space-y-4 flex-none">
          <div
            className={cn(
              "w-full h-[114px] flex justify-center items-center rounded-md flex-none border relative shadow",
              font.className
            )}
          >
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-6 h-6 p-0 flex justify-center items-center absolute bottom-1 right-1 rounded-sm"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 w-[80px] rounded-sm"
                align="start"
                side="right"
                sideOffset={8}
              >
                <Command>
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        setFullHour(!fullHour), setOpen(false);
                      }}
                      className="text-[10px] flex justify-between"
                    >
                      24 Jam
                      <Check
                        className={cn("w-3 h-3", fullHour ? "block" : "hidden")}
                      />
                    </CommandItem>
                    <CommandItem
                      onSelect={() => {
                        setDetik(!detik), setOpen(false);
                      }}
                      className="text-[10px] flex justify-between"
                    >
                      Detik
                      <Check
                        className={cn("w-3 h-3", detik ? "block" : "hidden")}
                      />
                    </CommandItem>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <time
              className="flex space-y-2 flex-col items-center justify-center w-[225px]"
              suppressHydrationWarning
            >
              <div className="flex space-x-2 justify-center w-full mt-5">
                <div
                  className="flex items-end justify-center"
                  suppressHydrationWarning
                >
                  <div
                    className={cn(
                      "font-medium flex justify-center",
                      detik ? "text-4xl" : "text-5xl mr-1"
                    )}
                    suppressHydrationWarning
                  >
                    <div
                      className={cn(
                        "justify-end flex",
                        detik ? "w-[23.5px]" : "w-auto"
                      )}
                    >
                      {fullHour
                        ? time[24].slice(0, 2) === "24"
                          ? 0
                          : time[24].charAt(0)
                        : time[12].length === 11
                        ? time[12].charAt(0)
                        : 0}
                    </div>
                    <div
                      className={cn(
                        "flex justify-end",
                        detik ? "w-[23.5px]" : "w-auto"
                      )}
                    >
                      {fullHour
                        ? time[24].slice(0, 2) === "24"
                          ? 0
                          : time[24].charAt(1)
                        : time[12].length === 11
                        ? time[12].charAt(1)
                        : time[12].charAt(0)}
                    </div>
                  </div>
                  <p className="font-light">J</p>
                </div>
                <div className="flex items-end justify-center">
                  <div
                    className={cn(
                      "font-medium flex justify-center",
                      detik ? "text-4xl" : "text-5xl mr-1"
                    )}
                    suppressHydrationWarning
                  >
                    <div
                      className={cn(
                        "flex justify-end",
                        detik ? "w-[23.5px]" : "w-auto"
                      )}
                    >
                      {fullHour
                        ? time[24].charAt(0)
                        : time[12].length === 11
                        ? time[12].charAt(3)
                        : time[12].charAt(2)}
                    </div>
                    <div
                      className={cn(
                        "flex justify-end",
                        detik ? "w-[23.5px]" : "w-auto"
                      )}
                    >
                      {fullHour
                        ? time[24].charAt(0)
                        : time[12].length === 11
                        ? time[12].charAt(4)
                        : time[12].charAt(3)}
                    </div>
                  </div>
                  <p className="font-light">M</p>
                </div>
                {detik && (
                  <div
                    className="flex items-end justify-center"
                    suppressHydrationWarning
                  >
                    <div className="text-4xl w-[23.5px]">
                      {time[24].charAt(6)}
                    </div>
                    <div className="text-4xl w-[23.5px]">
                      {time[24].charAt(7)}
                    </div>
                    <p className="font-light">D</p>
                  </div>
                )}
                {!fullHour && (
                  <div className="text-xs">
                    <p>
                      {time[12].slice(time[12].length - 2, time[12].length) ===
                      "AM"
                        ? "AM"
                        : "PM"}
                    </p>
                  </div>
                )}
              </div>
              <div>{wish}</div>
            </time>
          </div>
          <div className="w-full h-full flex-1 flex items-center border justify-center rounded-md shadow">
            <Calendar mode="single" selected={today} />
          </div>
        </div>
      </div>
      <div className="w-full border rounded-md bg-background flex space-y-4 justify-center items-center flex-col flex-1">
        <div className="w-44 h-44 relative">
          <Image
            alt=""
            src={comingSoon}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
        <p className="text-4xl font-semibold">Coming Soon</p>
      </div>
    </div>
  );
};

export default Widget;
