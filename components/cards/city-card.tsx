import { City } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/properties/city/${city.name}`}
      className="gap-4 group lg:gap-6 cursor-pointer flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative w-full h-[50vh] overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 ">
        <Image
          src={urlFor(city.image).url()}
          alt={city._id}
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>

      {/* NAME */}
      <h2 className="text-xl lg:text-3xl font-medium">{city.name}</h2>

      {/* DESCRIPTION */}
      <p className="text-base lg:text-lg leading-relaxed tracking-wide">
        {city.description}
      </p>

      {/* ACTION BUTTON */}
      {/* <Button
        variant="outline"
        size="lg"
        className="lg:max-w-[70%] text-base lg:text-lg"
      >
        Schedule Appointment
      </Button> */}
    </Link>
  );
}
