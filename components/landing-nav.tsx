"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Logo from "./logo";
import { landingPageRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LandingNav = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-transparent  flex items-center justify-between  z-20">
      <Logo />
      <div className="flex space-x-5 items-center">
        {landingPageRoutes.map((route) => (
          <Button
            asChild
            variant="navlink"
            key={route.href}
            className={cn("text-black", pathname === "/" && "text-[#DADFE3]")}
          >
            <Link href={route.href}>{route.label}</Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-x-1 md:gap-x-2">
        <Button
          variant="ghost"
          size="lg"
          asChild
          className={cn(
            "text-black hover:bg-transparent transition ease-in hover:text-blue-400",
            pathname === "/" && "text-[#DADFE3]"
          )}
        >
          <Link href="/sign-in">Login</Link>
        </Button>

        <Button asChild size="lg">
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingNav;
