import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { ArrowRight, BriefcaseBusiness, Plus, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashboardPage = () => {
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
              <div className="font-medium line-clamp-1">Gigs Overview (0)</div>
            </div>

            {/* COMPLETED */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Completed</div>

              <Badge className="border-[#117C35] bg-[#E7F2EB] text-[#117C35]">
                0
              </Badge>
            </div>

            {/* ONGOING */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Ongoing</div>

              <Badge className="border-[#FEA800] bg-[#FFF4DF] text-[#FEA800]">
                0
              </Badge>
            </div>

            {/* NEGOTIATING */}
            <div className="flex w-full rounded-lg border p-4 border-[#C8CFD5] bg-background justify-between items-center">
              <div>Negotiating</div>

              <Badge className="border-[#3C3B39] bg-[#EEF0F2] text-[#3C3B39]">
                0
              </Badge>
            </div>
          </div>

          {/* REVENUE OVERVIEW */}
          <div className="w-[50%] rounded-lg border p-4 border-[#C8CFD5] space-y-4 bg-[#FAFAFB]">
            <div className=" flex items-center gap-4">
              <div className=" flex-shrink-0 relative size-5 md:size-10 ">
                <Image fill alt="mail" src="/icons/activity.svg" />
              </div>
              <div className="font-medium line-clamp-1">
                Revenue Overview ($332k)
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
      </div>

      <div className="w-[30%] rounded-lg border bg-[#FAFAFB]  border-[#C8CFD5] ">
        <div className="p-4 flex flex-col gap-4">
          <div className=" flex items-center gap-4">
            <div className=" flex-shrink-0 relative size-5 md:size-10 ">
              <Image fill alt="mail" src="/icons/activity.svg" />
            </div>
            <div className="font-medium line-clamp-1">
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
              <Badge className="text-[#ED7405] bg-[#FEF3E9]">
                <Star className="size-5 mr-2 " />
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

          <Button className="w-full transition  border border-[#117C35] bg-[#E7F2EB] text-[#117C35] hover:bg-[#E7F2EB] hover:opacity-70 ease-in">
            View Profile <ArrowRight className="size-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
