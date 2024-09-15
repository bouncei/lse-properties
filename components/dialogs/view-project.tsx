import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

import { Project } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { TimerResetIcon } from "lucide-react";

interface ViewProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const ViewProjectDialog: React.FC<ViewProjectDialogProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:min-w-[50vw]">
        <DialogHeader className="">
          <DialogTitle className="text-xl lg:text-4xl border-b border-[#C8CFD5] pb-2 lg:pb-4">
            {project.name}
          </DialogTitle>
        </DialogHeader>
        {/* CONTENT */}
        <div className=" flex flex-col p-0 w-full">
          {/* EARNED & CATEGORY & DURATION */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-0 md:justify-between  border-b border-[#C8CFD5] pb-4">
            {/* EARNINGS */}
            <div className="flex flex-col gap-2 text-sm lg:text-lg items-center">
              <div className=" text-gray-500 font-medium">Earned</div>
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

            {/* CATEGORY */}
            <div className="flex flex-col gap-2 text-sm items-center lg:text-lg">
              <div className=" text-gray-500 font-medium">Category</div>
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
                Web Development
              </Badge>
            </div>

            {/* DURATION */}
            <div className="flex flex-col gap-2 text-sm items-center lg:text-lg">
              <div className=" text-gray-500 flex items-center font-medium">
                <span>
                  <TimerResetIcon className=" mr-2 flex-shrink-0" />
                </span>
                Duration
              </div>

              <div className=" text-black font-semibold">
                Aug 3rd - Sept 3rd, 2024
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProjectDialog;
