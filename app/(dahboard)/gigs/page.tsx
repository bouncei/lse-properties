"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ListFilter, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Gig } from "@/lib/types";

const filterList = ["all", "negotiating", "ongoing", "review"];
const GigsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [gigs, setGigs] = useState<Gig[]>([]);

  const archivedGigs = useMemo(() => {
    if (gigs.length === 0) return [];

    return gigs.filter((project) => project.status === "archived");
  }, [gigs]);

  return (
    <div className="flex flex-col  items-start gap-8 text-sm ">
      {/* TITLE AND FILTER */}
      <div className="flex items-center justify-between w-full">
        <div className="font-medium text-xl lg:text-3xl">Gigs</div>

        {/* CREATE GIG */}
        <Button className="bg-green-700 hover:bg-none hover:opacity-70 hover:bg-green-600">
          <Plus className="size-5 mr-2" /> Create Gig
        </Button>
      </div>

      {/* PROJECTS TABS */}
      <Tabs defaultValue="gigs" className="w-full border-none bg-transparent">
        <TabsList className="w-full border-b-2 border-[#C8CFD5] bg-transparent  !justify-start !rounded-none !pb-0 !mb-0">
          <div className="w-full lg:w-[70%] xl:w-[50%]  flex">
            <div className="w-full  grid bg-transparent grid-cols-2">
              <TabsTrigger
                value="gigs"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
              >
                Gigs({gigs.length})
              </TabsTrigger>
              <TabsTrigger
                value="archived-gigs"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
              >
                Archived Gigs({archivedGigs.length})
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
                    src="/empty-state/gig.svg"
                    className=""
                  />
                </div>

                <div>No gigs yet!</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="archived-gigs">
          <Card className="border-none">
            <CardContent className="space-y-2">
              <div className="flex items-center justify-center gap-4 py-6 flex-col">
                <div className="  relative size-12 md:size-32 ">
                  <Image
                    fill
                    alt="mail"
                    src="/empty-state/gig.svg"
                    className=""
                  />
                </div>

                <div>No archived gigs yet!</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GigsPage;
