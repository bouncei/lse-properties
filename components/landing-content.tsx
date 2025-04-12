"use client";

import { useMountedState } from "react-use";
import Image from "next/image";

import {
  landingPageClientsGuide,
  landingPageHowItWorks,
  landingPageSeriveProvidersGuide,
  landingPageServices,
  landingPageSponsors,
  landingPageTalentCategories,
  landingPageTalents,
  landingPageUserReviews,
} from "@/constants";
import { Button } from "./ui/button";
import {
  ArrowRight,
  MoveLeft,
  MoveRight,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const LandingContent = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  const developmentTalentsFiltered = landingPageTalents.filter(
    (talent) => talent.tag === "development"
  );
  const designTalentsFiltered = landingPageTalents.filter(
    (talent) => talent.tag === "design"
  );
  const brandingTalentsFiltered = landingPageTalents.filter(
    (talent) => talent.tag === "branding"
  );

  return (
    <div className="h-full flex flex-col">
      {/* SPONSORS */}
      <div className="px-4 md:px-10 xl:px-16 flex flex-col md:flex-row  items-start md:items-center gap-y-6 md:gap-y-0 md:justify-between py-8 md:py-10 xl:py-16 ">
        <div className="w-full md:w-[20%] text-muted-foreground">
          Trusted by 25,000+ users Worldwide
        </div>

        <div className="w-full md:w-[60%] flex flex-wrap md:flex-nowrap gap-4 md:gap-0 md:justify-between items-center">
          {landingPageSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative size-14 sm:size-20  xl:size-24  "
            >
              <Image alt="Splash" src={sponsor.imgPath} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
