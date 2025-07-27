"use client";
import React from "react";
import { ThemeCard } from "../theme/theme-card";
import { useRouter } from "next/navigation";

export default function FooterComponent() {
  const Route = useRouter();
  return (
    <footer className="w-full justify-center items-center lg:px-28 md:px-10 px-2">
      <div className="">
        <hr className="mx-5" />
      </div>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-x-2 gap-y-3 my-6 md:mx-10 mx-4">
        <div className="">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Web Code Editor. All Rights Reserved.
          </p>
        </div>
        <div className="flex md:justify-center justify-between md:items-center md:gap-x-10 gap-y-3">
          <div className="text-muted-foreground text-sm flex md:flex-row flex-col  md:justify-center md:items-center md:gap-x-4 gap-y-1">
            <p
              className="hover:text-zinc-600 cursor-pointer"
              onClick={() => Route.push("terms-contitions")}
            >
              Terms & Condition
            </p>
            <p
              className="hover:text-zinc-600 cursor-pointer"
              onClick={() => Route.push("faqs")}
            >
              FAQs
            </p>
            <p
              className="hover:text-zinc-600 cursor-pointer"
              onClick={() => Route.push("about")}
            >
              About
            </p>
          </div>
          <div className="w-fit md:mt-0 mt-10">
            <ThemeCard />
          </div>
        </div>
      </div>
    </footer>
  );
}
