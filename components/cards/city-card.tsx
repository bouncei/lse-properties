import { City } from "@/lib/types";
import React from "react";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return <div>CityCard</div>;
}
