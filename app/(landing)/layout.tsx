"use client";

import Footer from "@/components/footer";
import LandingNav from "@/components/landing-nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="h-full overflow-auto ">
      <div
        className={cn(
          "mx-auto h-full  ",
          pathname !== "/" && " px-4 md:px-10 xl:px-16    "
        )}
      >
        {pathname !== "/" && <LandingNav />}
        {children}
        {pathname !== "/" && <Footer />}
      </div>
    </main>
  );
};

export default LandingLayout;
