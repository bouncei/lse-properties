"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

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
import { useProjectsStore } from "@/stores/projects-store";
import { useUserStore } from "@/stores/user-store";
import ProjectCard from "@/components/cards/project-card";

const filterList = ["all", "negotiating", "ongoing", "review"];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const { user } = useUserStore();
  const { projects, getUserProjects } = useProjectsStore();

  useEffect(() => {
    // if (!user?.id) return;

    (async () => {
      await getUserProjects("");
    })();
  }, [user]);

  const completedProjects = useMemo(() => {
    if (projects.length === 0) return [];

    return projects.filter((project) => project.status === "completed");
  }, [projects]);

  return (
    <div className="flex flex-col  items-start gap-8 text-sm ">
      {/* TITLE AND FILTER */}
      <div className="flex items-center justify-between w-full">
        <div className="font-medium text-xl lg:text-3xl">My Projects</div>

        {/* FILTER */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className=" capitalize text-black/70">
              <ListFilter className="size-5 md:mr-2" />
              <span className="hidden md:flex">Project Status: </span>
              <span className="text-primary hidden md:flex ml-1">{filter}</span>
              <ChevronDown className="hidden md:flex size-5 ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-64 p-4 mr-3">
            <div className="flex flex-col items-start gap-4">
              {filterList.map((item, index) => (
                <div
                  key={index}
                  className="flex space-x-2 w-full items-center border-none justify-start"
                >
                  <Checkbox
                    id={item}
                    checked={item === filter}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setFilter(item);
                      } else {
                        setFilter("all");
                      }
                    }}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={item}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                    >
                      {item}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* PROJECTS TABS */}
      <Tabs
        defaultValue="projects"
        className="w-full border-none bg-transparent"
      >
        <TabsList className="w-full border-b-2 border-[#C8CFD5] bg-transparent  !justify-start !rounded-none !pb-0 !mb-0">
          <div className="w-full lg:w-[70%] xl:w-[50%]  flex">
            <div className="w-full  grid bg-transparent grid-cols-2">
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
              >
                All Projects ({projects.length})
              </TabsTrigger>
              <TabsTrigger
                value="completed-projects"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2   data-[state=active]:border-b-primary data-[state=active]:rounded-none rounded-none"
              >
                Completed Projects ({completedProjects.length})
              </TabsTrigger>
            </div>
          </div>
        </TabsList>

        {/* ALL PROJECTS */}
        <TabsContent value="projects">
          <Card className="border-none py-4 lg:py-8">
            <CardContent className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.length === 0 ? (
                <div className="flex items-center justify-center gap-4 py-6 flex-col">
                  <div className="  relative size-12 md:size-32 ">
                    <Image
                      fill
                      alt="mail"
                      src="/empty-state/project1.svg"
                      className=""
                    />
                  </div>

                  <div>No project yet!</div>
                </div>
              ) : (
                projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* COMPLETED PROJECTS */}
        <TabsContent value="completed-projects">
          <Card className="border-none py-4 lg:py-8">
            <CardContent className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {completedProjects.length === 0 ? (
                <div className="flex items-center justify-center gap-4 py-6 flex-col">
                  <div className="  relative size-12 md:size-32 ">
                    <Image
                      fill
                      alt="mail"
                      src="/empty-state/project1.svg"
                      className=""
                    />
                  </div>

                  <div>No completed project yet!</div>
                </div>
              ) : (
                completedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
