"use server";

import PageWrapper from "@/components/wrappers/page-wrapper";
import { City } from "@/lib/types";
import React from "react";
import { getAllCities } from "@/lib/actions/city";

interface PropertiesPageProps {
  cities: City[];
}

export default async function PropertiesPage() {
  let cities = await getAllCities();

  console.log("All cities", cities);
  return (
    <PageWrapper
      title="Properties"
      subTitle="Kindly Click On View Listings Under The City of Your Choice To See Details About The Project You’ll Like To Buy or Your Property of Choice."
    >
      Properties
    </PageWrapper>
  );
}
