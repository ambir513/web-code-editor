"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useTheme } from "next-themes";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroCard() {
  const Route = useRouter();
  const { theme } = useTheme();
  return (
    <div
      className={`h-[40rem] w-full rounded-md flex md:items-center md:justify-center
     bg-#1b1718
      antialiased  relative overflow-hidden`}
    >
      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col gap-y-6 justify-center items-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className={`text-4xl md:text-7xl font-bold text-center ${
            theme === "light" &&
            " bg-clip-text text-transparent  bg-gradient-to-b from-zinc-800 to-zinc-600 pb-2"
          }  ${theme === "dark" && " text-white"}`}
        >
          WebCode <br /> with Intelligence
        </h1>
        <p
          className={`font-normal text-base  ${
            theme === "dark" ? "text-neutral-600" : "text-zinc-600"
          } max-w-[650px] text-center mx-auto`}
        >
          Webcode Editor is a power and intelligent code editor that enhances
          your coding jounery with advanced features and seamless integration.
          It is designed to help you write, debug, and optimize your code
          efficiently.
        </p>
        <Button  onClick={() => Route.push("auth/sign-in")} >
          Get Started
          <MdArrowOutward />
        </Button>
      </div>
    </div>
  );
}
