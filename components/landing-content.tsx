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

      {/* SERVICES */}
      <div className="px-4 md:px-10 xl:px-16 py-8 bg-muted md:py-10 xl:py-16">
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
      <div className="px-4 md:px-10 xl:px-16 py-8  md:py-10 xl:py-16">
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
      <div className="bg-muted px-4  md:px-10 xl:px-16 py-8  md:py-10 xl:py-16">
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
      <div
        className=" text-white  flex flex-col px-4  md:px-10 xl:px-16 py-16 xl:py-24   bg-black relative"
        style={{
          backgroundImage: `url('/images/landing-page/for_client.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="flex flex-col md:flex-row z-10 gap-8 items-center md:items-start lg:items-center justify-between">
          <div className="w-full md:w-[35%] space-y-5  lg:space-y-8">
            <Badge className="bg-background text-primary uppercase p-2">
              💼 For Clients
            </Badge>

            <div className="text-3xl  lg:text-4xl xl:text-5xl font-bold leading-[3.25rem] lg:leading-[4.25rem] ">
              Find and hire <br className="hidden md:flex" />
              <span className="my-2 text-red-500">professionals</span>
              <br />
              with <span className="text-purple-500">ease.</span>
            </div>

            <div className="text-sm">
              Dedicated customer support to assist with any issues or inquiries.
              Resources and guides help users make the most of the platform.
            </div>

            <Button size="lg" className="hidden md:flex">
              Hire a professional now{" "}
              <SquareArrowOutUpRight className="ml-2 size-6 " />
            </Button>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="grid text-sm grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 ">
              {landingPageClientsGuide.map((guide, index) => (
                <Card key={index} className="bg-transparent border text-white ">
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Badge className="p-3 px-4">{index + 1}</Badge>
                    <div className="space-y-2">
                      <p className=" text-base lg:text-lg font-medium">
                        {guide.title}
                      </p>
                      <p className="text-xs lg:text-sm font-light">
                        {guide.text}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <Button size="lg" className=" w-full md:hidden">
            Hire a professional now{" "}
            <SquareArrowOutUpRight className="ml-2 size-6 " />
          </Button>
        </div>
      </div>

      {/* Apple store or Google store */}
      <div className="bg-muted px-4 md:px-10 xl:px-16 py-8  md:py-10 xl:py-16">
        <div className="flex items-center flex-col justify-center gap-y-5">
          <div className="text-center text-primary text-xl md:text-3xl font-medium">
            Work fast from anywhere
          </div>

          <div>
            Stay up to date and move work forward with Fiixconn on iOS &
            Android. Download the app today.
          </div>

          <div className="flex items-center gap-4 ">
            <Link
              href="/"
              target="_blank"
              className="flex items-center bg-black hover:opacity-80 ease-in transition cursor-pointer text-white py-2 px-4 rounded-md gap-3"
            >
              <div className="flex-shrink-0 relative size-7 ">
                <Image alt="google plat" src="/icons/google_play.svg" fill />
              </div>
              <div className="flex flex-col ">
                <p className="text-xs">Download on </p>
                <p className="text-sm font-medium">Google Play</p>
              </div>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="flex items-center bg-black hover:opacity-80 ease-in transition cursor-pointer text-white py-2 px-4 rounded-md gap-3"
            >
              <div className="flex-shrink-0 relative size-7 ">
                <Image alt="google plat" src="/icons/apple.svg" fill />
              </div>
              <div className="flex flex-col ">
                <p className="text-xs">Download on </p>
                <p className="text-sm font-medium">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* FOR SERVICE PROVIDERS */}
      <div
        className=" text-white  flex flex-col px-4  md:px-10 xl:px-16 py-16 xl:py-24   bg-black relative"
        style={{
          backgroundImage: `url('/images/landing-page/for_service_provider.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="flex flex-col md:flex-row z-10 gap-8 items-center md:items-start lg:items-center justify-between">
          <div className="w-full md:w-[35%] space-y-5  lg:space-y-8">
            <Badge className="bg-[#FCE7E5] text-red-500 uppercase p-2">
              🛠️ For Service Provider
            </Badge>

            <div className="text-3xl  lg:text-4xl xl:text-5xl font-bold leading-[3.25rem] lg:leading-[4.25rem] ">
              Show your <br className="hidden md:flex" />
              <span className="my-2 text-green-500">services</span>
              <br />
              and grow your{" "}
              <span className="text-red-500">client network.</span>
            </div>

            <div className="text-sm">
              Dedicated customer support to assist with any issues or inquiries.
              Resources and guides help users make the most of the platform.
            </div>

            <Button size="lg" className="hidden md:flex bg-green-500">
              Get a Gig
              <SquareArrowOutUpRight className="ml-2 size-6 " />
            </Button>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="grid text-sm grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 ">
              {landingPageSeriveProvidersGuide.map((guide, index) => (
                <Card key={index} className="bg-transparent border text-white ">
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Badge className="p-3 px-4 bg-green-500">{index + 1}</Badge>
                    <div className="space-y-2">
                      <p className=" text-base lg:text-lg font-medium">
                        {guide.title}
                      </p>
                      <p className="text-xs lg:text-sm font-light">
                        {guide.text}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <Button size="lg" className=" w-full tex-green-500 md:hidden">
            Get a Gig
            <SquareArrowOutUpRight className="ml-2 size-6 " />
          </Button>
        </div>
      </div>

      {/* USER REVIEWS */}
      <div className=" px-4  md:px-10 xl:px-16 py-8  md:py-10 xl:py-16">
        <div className="pb-3 md:pb-8 text-center xl:pb-14 text-primary text-xl md:text-3xl font-medium">
          User Reviews
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-[40vh] font-medium w-[55vh] bg-primary flex items-center text-lg lg:text-2xl   text-white justify-center">
            What Our <br /> Users <br /> Are Saying!
            {/* FLOATING ICON */}
            <div className="absolute  inset-5  xl:inset-20 ">
              <div className="relative size-20 xl:size-32">
                <Image alt="review" src="/icons/user_review_1.svg" fill />
              </div>
            </div>
            {/* SLIDER BUTTONS */}
            <div className="absolute bottom-8 right-8 flex items-center gap-[1px]">
              <Button
                size="icon"
                className="bg-white hover:bg-white/70 rounded-r-none"
              >
                <MoveLeft className="size-5" color="black" />
              </Button>

              <Button
                size="icon"
                className="bg-white hover:bg-white/70 rounded-l-none"
              >
                <MoveRight className="size-5" color="black" />
              </Button>
            </div>
          </div>

          <div className=" relative h-[40vh] w-[55vh] bg-[#F3F8F4] flex items-center justify-center">
            <div className="flex z-10 p-8 items-center h-full justify-between flex-col">
              <div className="text-center text-xs line-clamp-3 lg:line-clamp-4 2xl:line-clamp-6 lg:text-sm">
                I’ve had the pleasure of working with some of the best
                freelancers on this platform. Their professionalism, expertise,
                and dedication to delivering high-quality work have consistently
                exceeded my expectations. The seamless collaboration are simply
                outstanding. Highly recommended!
              </div>

              <div className="flex flex-col items-center gap-y-2">
                <div className="flex items-center gap-x-2">
                  {landingPageUserReviews.map((review) => (
                    <Avatar key={review.image}>
                      <AvatarImage
                        src={review.image}
                        alt="avatar"
                        className=""
                      />
                      <AvatarFallback>{review.name}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>

                <div className="text-xs lg:text-sm text-center">
                  <div className="font-medium">Adeyanju Olawanifemi Praise</div>
                  <div>CEO & Founder</div>
                </div>
              </div>
            </div>

            {/* FLOATING QUOTE */}
            <div className="absolute  inset-3  ">
              <div className="relative size-5 xl:size-10">
                <Image alt="review" src="/icons/quote.svg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
    </div>
  );
};

export default LandingContent;
