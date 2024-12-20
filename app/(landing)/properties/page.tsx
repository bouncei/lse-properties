"use server";

import PageWrapper from "@/components/wrappers/page-wrapper";
import { City } from "@/lib/types";
import React from "react";
import { getAllCities } from "@/lib/actions/city";
import CityCard from "@/components/cards/city-card";

export default async function PropertiesPage() {
  let cities: City[] = await getAllCities();

  return (
    <PageWrapper
      title="Cities"
      subTitle="Kindly Click On A City of Your Choice To See Details About The Project You’ll Like To Buy or Your Property of Choice."
    >
      <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-2 ">
        {cities.map((city) => (
          <CityCard key={city._id} city={city} />
        ))}
      </div>
    </PageWrapper>
  );
}
