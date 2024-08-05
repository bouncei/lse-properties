"use client";
import "react-day-picker/style.css";
import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ChevronDown } from "lucide-react";
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
const AnalyticsOverview = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
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
  );
};

export default AnalyticsOverview;
