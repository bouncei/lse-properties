"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Logo from "./logo";
import { landingPageRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const LandingNav = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0  bg-transparent  flex items-center justify-between  z-20">
      <Logo />
      <div className="hidden lg:flex  items-center">
        {landingPageRoutes.map((route) => (
          <Button
            asChild
            size="lg"
            variant="navlink"
            key={route.href}
            className={cn(
              "text-black",
              pathname === "/" && "text-[#DADFE3] hover:text-white"
            )}
          >
            <Link href={route.href}>{route.label}</Link>
          </Button>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-x-1 md:gap-x-2">
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

      {/* Hanburger menu */}
      <Button
        className=" lg:hidden hover:bg-[#7d7e7e] "
        variant="ghost"
        size="icon"
      >
        <Menu className="size-6" color="#fff" />
      </Button>
    </div>
  );
};

export default LandingNav;
