"use client";
import "react-day-picker/style.css";
import { useState } from "react";
import Image from "next/image";
import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Plus,
  Star,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardPage = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="flex items-start gap-8 text-sm ">
      <div className="w-[70%] space-y-4">
        <div className="rounded-lg text-white border p-4 border-[#C8CFD5] bg-[#374C3D] space-y-4">
          <div className=" font-medium text-3xl">Welocome back Adeyanju!</div>
          <div>Here’s what’s happening on your account today:</div>

          <div className=" flex items-center pt-4 gap-x-4">
            {/* SEARCH FOR SERVICES */}
            <div className="w-[50%] rounded-lg bg-background border bg-[#E7F2EB]  space-y-4   p-4  ">
              <div className="text-black font-medium">Search for Services</div>

              <div className="text-[#5C5B59]">Add funds easily</div>

              <Button
                variant="outline"
                className="bg-transparent rounded-full text-green-600 border-green-600"
              >
                <BriefcaseBusiness className="size-5 mr-2" /> Hire Talents
              </Button>
            </div>

            {/* TOP UP YOUR WALLET */}
            <div className="w-[50%] rounded-lg bg-background border bg-[#E6EFF6] space-y-4   p-4  ">
              <div className="text-black font-medium">Top Up your Wallet</div>

              <div className="text-[#5C5B59]">Add funds easily</div>

              <Button
                variant="outline"
                className="bg-transparent rounded-full text-primary border-primary"
              >
                <Plus className="size-5 mr-2" /> Add Funds
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-start w-full gap-x-4">
          {/* GIGS OVERVIEW */}
          <div className="w-[50%] rounded-lg border p-4 border-[#C8CFD5] bg-[#FAFAFB] space-y-4">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="mail" src="/icons/activity.svg" />
              </div>
              <div className="font-medium line-clamp-1 lg:text-lg">
                Gigs Overview (0)
              </div>
            </div>

            {/* COMPLETED */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Completed</div>

              <Badge variant="completed">0</Badge>
            </div>

            {/* ONGOING */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Ongoing</div>

              <Badge variant="onGoing">0</Badge>
            </div>

            {/* NEGOTIATING */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Negotiating</div>

              <Badge variant="negotiating">0</Badge>
            </div>
          </div>

          {/* REVENUE OVERVIEW */}
          <div className="w-[50%] rounded-lg border p-4 border-[#C8CFD5] space-y-4 bg-[#FAFAFB]">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="mail" src="/icons/activity.svg" />
              </div>
              <div className="font-medium line-clamp-1 lg:text-lg">
                Revenue Overview ($0)
              </div>
            </div>

            {/* AVAILABLE BALANCE */}
            <div className="rounded-lg bg-background border bg-white flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Active Balance</div>

              <div className="flex justify-between items-center">
                <div className="font-medium">$ 0</div>

                <Badge className="bg-[#EEF0F2] text-[#5C5B59]">-%</Badge>
              </div>
            </div>

            {/* TOTAL SPENT */}
            <div className="rounded-lg bg-background border bg-white flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Total Spent</div>

              <div className="flex justify-between items-center">
                <div className="font-medium">$ 0</div>

                <Badge className="bg-[#EEF0F2] text-[#5C5B59]">-%</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="rounded-lg border p-4 border-[#C8CFD5] bg-[#FAFAFB] space-y-4">
          <div className="flex items-center justify-between">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="analytics" src="/icons/activity.svg" />
              </div>
              <div className="font-medium line-clamp-1 lg:text-lg">
                Analytics Overview
              </div>
            </div>

            {/* CALENDAR DROPDOWN */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="focus-visible:ring-0  focus-visible:ring-offset-0"
                >
                  {range?.from ? (
                    range.to ? (
                      <>
                        {format(range.from, "LLL dd, y")} -{" "}
                        {format(range.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(range.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}{" "}
                  <ChevronDown className="size-5 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="z-10 w-full text-sm ">
                <DayPicker
                  defaultMonth={new Date()}
                  mode="range"
                  min={2}
                  // max={9}
                  selected={range}
                  onSelect={setRange}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="rounded-lg p-4 space-y-4 bg-background">
            <div className="flex justify-end items-center">
              <Badge className="bg-red-500 mr-2"></Badge>
              Spent
            </div>

            {/* CHARTS */}
            <Tabs defaultValue="revenue" className="w-full">
              <TabsList className="w-[400px] grid bg-[#FAFAFB] grid-cols-2">
                <TabsTrigger
                  value="revenue"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Total revenue
                </TabsTrigger>
                <TabsTrigger
                  value="gigs"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Total Gigs
                </TabsTrigger>
              </TabsList>
              <TabsContent value="revenue">
                <Card>
                  <CardHeader>
                    <CardTitle> TODO: Total Revenue Chart</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {/* // TODO: TOTAL REVENUE CHART */}
                  </CardContent>
                  <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="gigs">
                <Card>
                  <CardHeader>
                    <CardTitle>TODO: Total Gigs Chart</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-2">
                    {/* // TODO: TOTAL GIGS CHART */}
                  </CardContent>
                  <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* YOUR ACTIVITIES */}
        <div className="rounded-lg  p-4  space-y-4">
          <div className="font-medium line-clamp-1 lg:text-lg">
            Your Activites
          </div>

          {/* ACTIVITY TABS */}
          <Tabs
            defaultValue="gigs"
            className="w-full border-none bg-transparent"
          >
            <TabsList className="w-full border-b-2 border-[#C8CFD5] bg-transparent  !justify-start !rounded-none !pb-0 !mb-0">
              <div className="w-[70%] flex">
                <div className="w-full  grid bg-transparent grid-cols-3">
                  <TabsTrigger
                    value="gigs"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
                  >
                    Gigs(0)
                  </TabsTrigger>
                  <TabsTrigger
                    value="saved-gigs"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
                  >
                    Saved Gigs(0)
                  </TabsTrigger>
                  <TabsTrigger
                    value="posts"
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
                  >
                    Posts(0)
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent value="gigs">
              <Card className="border-none">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-4 py-6 flex-col">
                    <div className="  relative size-12 md:size-32 ">
                      <Image
                        fill
                        alt="mail"
                        src="/empty-state/project.svg"
                        className=""
                      />
                    </div>

                    <div>No ongoing project yet!</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="saved-gigs">
              <Card className="border-none">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-4 py-6 flex-col">
                    <div className="  relative size-12 md:size-32 ">
                      <Image
                        fill
                        alt="mail"
                        src="/empty-state/bookmark.svg"
                        className=""
                      />
                    </div>

                    <div>No saved project yet!</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="posts">
              <Card className="border-none">
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-4 py-6 flex-col">
                    <div className="  relative size-12 md:size-32 ">
                      <Image
                        fill
                        alt="mail"
                        src="/empty-state/project.svg"
                        className=""
                      />
                    </div>

                    <div>No post made yet!</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="w-[30%] space-y-4">
        <div className=" rounded-lg border bg-[#FAFAFB]  border-[#C8CFD5] ">
          <div className="p-4 flex flex-col gap-4">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="mail" src="/icons/activity.svg" />
              </div>
              <div className="font-medium line-clamp-1 lg:text-lg">
                Your Performance Activities
              </div>
            </div>

            <hr color="#C8CFD5" />

            <div className="flex items-center gap-4 ">
              <UserAvatar
                image="https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                firstName="Adeyanju"
                lastName="Olawanifemi"
              />

              <div className=" space-y-2">
                <div>Adeyanju Olawanifemi Praise</div>
                <Badge className="py-2 px-4 text-primary bg-[#E6EFF6] ">
                  Top 1000% Creator
                </Badge>
              </div>
            </div>

            <div className="rounded-lg border bg-white flex items-center flex-col justify-center p-4  border-[#C8CFD5]">
              <div className="flex items-center gap-x-2">
                <Badge
                  variant="onGoing"
                  className="flex items-center font-medium"
                >
                  <Star className="size-4 mr-2 " />
                  0.0
                </Badge>
                Average Rating
              </div>

              {/* ADD CHART */}
              <div></div>
            </div>

            {/* ACTIVE GIGS */}
            <div className="rounded-lg bg-background border flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Active Gigs</div>

              <div className="flex justify-between items-center">
                <div>0</div>

                <Badge className="bg-[#EEF0F2] text-[#5C5B59]">-%</Badge>
              </div>
            </div>

            {/* TOTAL PROJECTS DONE */}
            <div className="rounded-lg bg-background border flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Total Projects Done</div>

              <div className="flex justify-between items-center">
                <div>0</div>

                <Badge className="bg-[#EEF0F2] text-[#5C5B59]">-%</Badge>
              </div>
            </div>

            {/* PENDING APPROVAL */}
            <div className="rounded-lg bg-background border flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Pending Approval</div>

              <div className="flex justify-between items-center">
                <div>0</div>

                <Badge className="bg-[#EEF0F2] text-[#5C5B59]">-%</Badge>
              </div>
            </div>

            <Button variant="completed">
              View Profile <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* REVIEWS AND RATING */}
        <div className="rounded-lg border bg-[#FAFAFB]  border-[#C8CFD5] ">
          <div className="p-4 flex flex-col gap-4">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="mail" src="/icons/star.svg" />
              </div>
              <div className="font-medium line-clamp-1 lg:text-lg">
                Latest Reviews & Ratings
              </div>
            </div>

            <hr color="#C8CFD5" />

            <div className="rounded-lg border bg-[white]  border-[#C8CFD5] p-4 ">
              <div>
                Latest Review & Rating <span className="text-red-500">*</span>{" "}
                (2)
              </div>

              <div className="flex items-center justify-center gap-4 py-6 flex-col">
                <div className="  relative size-12 md:size-32 ">
                  <Image
                    fill
                    alt="mail"
                    src="/empty-state/star.png"
                    className=""
                  />
                </div>

                <div>No Reviews & Ratings yet!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
