import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { ArrowRight, BriefcaseBusiness, Plus, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsOverview from "@/components/dashboard/analytics-overview";
import Activities from "@/components/dashboard/activites";

const DashboardPage = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-8 text-sm ">
      <div className="w-full xl:w-[70%] space-y-4">
        <div className="rounded-lg text-white border p-4 border-[#C8CFD5] bg-[#374C3D] space-y-4">
          <div className=" font-medium text-3xl">Welocome back Adeyanju!</div>
          <div>Here’s what’s happening on your account today:</div>

          <div className=" flex flex-col md:flex-row items-center pt-4 gap-4">
            {/* SEARCH FOR SERVICES */}
            <div className="w-full md:w-[50%] rounded-lg bg-background border bg-[#E7F2EB]  space-y-4   p-4  ">
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
            <div className="w-full md:w-[50%] rounded-lg bg-background border bg-[#E6EFF6] space-y-4   p-4  ">
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

        <div className="flex flex-col md:flex-row items-start w-full gap-4">
          {/* GIGS OVERVIEW */}
          <div className="w-full md:w-[50%] rounded-lg border p-4 border-[#C8CFD5] bg-[#FAFAFB] space-y-4">
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
          <div className="w-full md:w-[50%] rounded-lg border p-4 border-[#C8CFD5] space-y-4 bg-[#FAFAFB]">
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

                <Badge variant="percentage">-%</Badge>
              </div>
            </div>

            {/* TOTAL SPENT */}
            <div className="rounded-lg bg-background border bg-white flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Total Spent</div>

              <div className="flex justify-between items-center">
                <div className="font-medium">$ 0</div>

                <Badge variant="percentage">-%</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Overview: DESKTOP VIEW */}
        <div className="hidden xl:inline-block w-full">
          <AnalyticsOverview />
        </div>

        {/* YOUR ACTIVITIES: DESKTOP VIEW */}
        <div className="hidden xl:inline-block w-full">
          <Activities />
        </div>
      </div>

      <div className="w-full xl:w-[30%] space-y-4">
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

                <Badge variant="percentage">-%</Badge>
              </div>
            </div>

            {/* TOTAL PROJECTS DONE */}
            <div className="rounded-lg bg-background border flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Total Projects Done</div>

              <div className="flex justify-between items-center">
                <div>0</div>

                <Badge variant="percentage">-%</Badge>
              </div>
            </div>

            {/* PENDING APPROVAL */}
            <div className="rounded-lg bg-background border flex gap-4  flex-col w-full p-4  border-[#C8CFD5]">
              <div>Pending Approval</div>

              <div className="flex justify-between items-center">
                <div>0</div>

                <Badge variant="percentage">-%</Badge>
              </div>
            </div>

            <Button variant="completed">
              View Profile <ArrowRight className="size-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Analytics Overview: MOBILE VIEW */}
        <div className=" xl:hidden w-full">
          <AnalyticsOverview />
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

        {/* YOUR ACTIVITIES: MOBILE VIEW */}
        <div className=" xl:hidden w-full">
          <Activities />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
