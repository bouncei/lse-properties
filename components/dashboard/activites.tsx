"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Activities = () => {
  return (
    <div className="rounded-lg  p-4  space-y-4">
      <div className="font-medium line-clamp-1 lg:text-lg">Your Activites</div>

      {/* ACTIVITY TABS */}
      <Tabs defaultValue="gigs" className="w-full border-none bg-transparent">
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
  );
};

export default Activities;
