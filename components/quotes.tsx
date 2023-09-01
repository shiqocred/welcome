"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import LoadingQuotes from "./loading/loading-quotes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

const Quotes = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!isMounted) {
    return <LoadingQuotes />;
  }

  return (
    <div
      className={cn(
        "w-[305px] flex-col justify-between flex pt-8 h-full",
        font.className
      )}
    >
      <div className="flex flex-col space-y-8">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rotate-45 rounded-[2px] bg-slate-500" />
            <div className="w-[14px] h-[14px] rotate-45 rounded-[4px] bg-slate-500" />
            <div className="w-2 h-2 rotate-45 rounded-[2px] bg-slate-500" />
          </div>
          <p className="font-light text-sm text-muted-foreground">
            Your planning guide
          </p>
        </div>
        <div className="space-y-8">
          <h3 className="font-bold text-6xl leading-none">
            Explore must-see places
          </h3>
          <p className="text-sm font-light text-muted-foreground">
            Escape to paradise: Unlock a world of Advanture and Wonder
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 font-semibold">
        <Button size="icon" onClick={onSwitch}>
          <Sun
            size={20}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={20}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
        {theme === "light" ? "Light" : "Dark"}
      </div>
    </div>
  );
};

export default Quotes;
