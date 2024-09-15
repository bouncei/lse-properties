import { MapPin, Star } from "lucide-react";
import React, { useState } from "react";

import { Project } from "@/lib/types";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { cn, formatDate } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ViewProjectDialog from "../dialogs/view-project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [projectDialog, setProjectDialog] = useState<boolean>(false);

  const toggleProjectDialog = () => {
    setProjectDialog(!projectDialog);
  };

  return (
    <>
      <div
        className="rounded-xl  cursor-pointer border p-4 border-[#C8CFD5]  space-y-4"
        onClick={toggleProjectDialog}
      >
        {/* STATUS BADGE */}
        <Badge
          variant={
            project.status === "ongoing"
              ? "ongoing"
              : project.status == "negotiation"
              ? "negotiating"
              : project.status === "completed"
              ? "completed"
              : "review"
          }
          className="text-sm capitalize"
        >
          Status: {project.status}
        </Badge>

        {/* PROGRESS BAR */}
        <div className="flex gap-2 items-center ">
          <div>Progress:</div>
          <b>0%</b>
          <Progress
            value={project.progress}
            className={cn(
              "",
              project.status === "ongoing" && "bg-[#FC4409]",
              project.status === "completed" && "bg-[#4CAF50]",
              project.status === "negotiation" && "bg-[#FF9800]",
              project.status === "review" && "bg-primary"
            )}
          />
        </div>

        {/* USER */}
        <div className="flex gap-2 items-center">
          <Avatar className="size-14">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="avatar"
              className=" object-cover object-center"
            />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <div className="text-base tracking-wide font-semibold">
              John Doe
            </div>
            <div className="text-sm text-gray-500">Front-End Developer</div>
          </div>
        </div>

        {/* USER BIO */}
        <div className="text-sm text-gray-500 line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          reprehenderit et corrupti incidunt ex debitis vero accusamus culpa,
          aspernatur dolore tenetur quidem autem sit ullam quaerat iusto
          consequatur minus nostrum ducimus! Labore impedit sint ducimus ut,
          tempore velit praesentium incidunt, mollitia animi quod sed est ab,
          molestiae quae facere dolor.
        </div>

        {/* USER LOCATION & STARS */}
        <div className="flex text-lg justify-between items-center">
          <div className="flex gap-2 items-center">
            <MapPin className="size-4 text-gray-500" />
            <div className=" text-gray-500">Lagos, Nigeria</div>
          </div>
          <div className="flex gap-2 items-center ">
            <Star className="size-4 text-[#FEA800]" />
            <div className=" text-gray-500">
              4.5<span className="font-light">(50+)</span>
            </div>
          </div>
        </div>

        {/* STARTED DATE */}
        <div className="text-lg text-gray-500">
          Started:{" "}
          <span className="font-semibold text-black">
            {new Date(project.created_at).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            {formatDate(project.created_at)}
          </span>
        </div>

        {/* OFFER */}
        <div className="flex text-xl items-center text-gray-500 justify-between">
          <div className=" ">Current Offer:</div>
          <div
            className={cn(
              " font-bold ",
              project.status === "ongoing" && "text-[#FC4409]",
              project.status === "completed" && "text-[#4CAF50]",
              project.status === "negotiation" && "text-[#FF9800]",
              project.status === "review" && "text-primary"
            )}
          >
            {" "}
            &#x20A6; 500,000
          </div>
        </div>
      </div>

      {projectDialog && (
        <ViewProjectDialog
          isOpen={projectDialog}
          onClose={toggleProjectDialog}
          project={project}
        />
      )}
    </>
  );
};

export default ProjectCard;
