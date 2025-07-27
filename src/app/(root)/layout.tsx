import FooterComponent from "@/components/landing/footer";
import HeaderComponent from "@/components/landing/header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
