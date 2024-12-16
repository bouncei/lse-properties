"use server";

import PageWrapper from "@/components/wrappers/page-wrapper";
import { City } from "@/lib/types";
import React from "react";
import { getAllCities } from "@/lib/actions/city";
import CityCard from "@/components/cards/city-card";

export default async function PropertiesPage() {
  let cities: City[] = await getAllCities();

  console.log("All cities", cities);
  return (
    <PageWrapper
      title="Properties"
      subTitle="Kindly Click On View Listings Under The City of Your Choice To See Details About The Project You’ll Like To Buy or Your Property of Choice."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
        {cities.map((city) => (
          <CityCard key={city._id} city={city} />
        ))}
      </div>
    </PageWrapper>
  );
}
