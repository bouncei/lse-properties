"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/" className="flex items-center">
      <div className="relative size-28 md:size-28 mr-2 md:mr-4">
        <Image
          fill
          alt="logo"
          src={pathname === "/" ? "/home_logo.svg" : "/logo.svg"}
        />
      </div>
    </Link>
  );
};

export default Logo;
