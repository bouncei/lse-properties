"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import Logo from "./logo";
import { landingPageRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone } from "lucide-react";
import MobileSidebar from "./mobile-side-bar";

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
              pathname === "/" &&
                "text-white hover:text-blue-600 hover:scale-110 ease-in transition duration-150"
            )}
          >
            <Link href={route.href}>{route.label}</Link>
          </Button>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-x-1 md:gap-x-2">
        {/* <Button
          variant="ghost"
          size="lg"
          asChild
          className={cn(
            "text-black hover:bg-transparent transition ease-in hover:text-blue-400",
            pathname === "/" && "text-black"
          )}
        >
          <Link href="/sign-in">Login</Link>
        </Button> */}

        <Button size="lg" className="">
          <MessageCircle className="size-4 mr-2" />
          Contact Us
        </Button>
      </div>

      {/* Hanburger menu */}
      {/* <Button
          className=" lg:hidden hover:bg-[#7d7e7e]  "
          variant="ghost"
          size="icon"
        >
          <Menu className="size-6" color="#fff" />
        </Button> */}
      <div className=" lg:hidden  ">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default LandingNav;
