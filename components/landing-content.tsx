"use client";

import { useMountedState } from "react-use";
import Image from "next/image";

import {
  landingPageHowItWorks,
  landingPageServices,
  landingPageSponsors,
  landingPageTalentCategories,
  landingPageTalents,
} from "@/constants";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "./ui/card";

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
      <div className="px-4 md:px-10 xl:px-16 flex flex-col md:flex-row  items-start md:items-center gap-y-6 md:gap-y-0 md:justify-between py-4 md:py-10 xl:py-16 ">
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

      {/* SERVICES */}
      <div className="px-4 md:px-10 xl:px-16 py-4 bg-muted md:py-10 xl:py-16">
        <div className="flex items-center flex-col justify-center">
          <div className="pb-3 md:pb-8 text-center xl:pb-14 text-primary text-xl md:text-3xl font-medium">
            Core Serivices For You
          </div>

          <div className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {landingPageServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-lg bg-background px-8 py-14
                shadow-md shadow-primary/10 hover:shadow-primary/20 transition ease-in"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1537016549486-1ac154c28ccf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="size-10 xl:size-12 relative">
                  <Image alt="service" src={service.imgPath} fill />
                </div>
                <div className=" text-white ">{service.title}</div>
                <div className=" text-white ">{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TALENTS */}
      <div className="px-4 md:px-10 xl:px-16 py-4  md:py-10 xl:py-16">
        <div className="space-y-4">
          <div className="b-3 md:pb-8  xl:pb-14 text-xl md:text-3xl font-medium">
            Browse through our <span className="text-[#663AC9]">talent</span>{" "}
            categories
          </div>

          <Tabs defaultValue="all" className="">
            <div className="flex flex-col md:flex-row items-start md:items-center pb-2 space-y-3 md:space-y-0  justify-between">
              <TabsList className="grid w-full md:w-auto grid-cols-4 gap-3 md:gap-5">
                {landingPageTalentCategories.map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase()}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <Button size="lg" className="hidden md:inline-flex">
                See more categories
                <ArrowRight className="size-6 ml-2" />
              </Button>
            </div>

            {landingPageTalentCategories.map((category) => (
              <TabsContent
                key={category}
                value={category.toLowerCase()}
                className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {(category.toLowerCase() === "all"
                  ? landingPageTalents
                  : category.toLowerCase() === "development"
                  ? developmentTalentsFiltered
                  : category.toLowerCase() === "design"
                  ? designTalentsFiltered
                  : brandingTalentsFiltered
                ).map((talent, index) => (
                  <Card
                    key={index}
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1514043133987-e4801c95b2c8?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <CardHeader>
                      <div className="py-8 text-white  text-center my-auto">
                        <p className=" font-medium">{talent.title}</p>
                        <p className="text-xs font-light">
                          {talent.talentsCount} Talents
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            ))}

            <Button size="lg" className=" my-2 w-full md:hidden">
              See more categories
              <ArrowRight className="size-6 ml-2" />
            </Button>
          </Tabs>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-muted px-4 md:px-10 xl:px-16 py-4  md:py-10 xl:py-16">
        <div className="pb-3 md:pb-8 text-center xl:pb-14 text-primary text-xl md:text-3xl font-medium">
          How Does FIIXCONN Works?
        </div>

        <div className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {landingPageHowItWorks.map((item) => (
            <div
              key={item.iconPath}
              className="flex flex-col items-center text-center justify-center gap-3 rounded-lg  px-8 py-14 hover:shadow-primary/20 hover:bg-background hover:scale-105 transition ease-in"
            >
              <div className="size-10 xl:size-12 relative">
                <Image alt="service" src={item.iconPath} fill />
              </div>
              <div className=" font-medium">{item.title}</div>
              <div className="">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOR CLIENTS */}
      <div></div>

      {/* style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1537016549486-1ac154c28ccf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }} */}
    </div>
  );
};

export default LandingContent;
