"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LogoProps {
  component?: string;
}

const Logo = ({ component }: LogoProps) => {
  const pathname = usePathname();

  return (
    <Link href="/" className="flex items-center">
      <div className="relative size-28 md:size-28 mr-2 md:mr-4">
        <Image
          fill
          alt="logo"
          src={component === "footer" ? "/logo_white.png" : "/logo.png"}
          className="object-contain object-center"
        />
      </div>
    </Link>
  );
};

export default Logo;
