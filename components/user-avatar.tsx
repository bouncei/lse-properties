import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  image: string;
  firstName: string;
  lastName: string;
  size?: number;
}

export const UserAvatar = ({
  image,
  firstName,
  lastName,
  size,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(" h-8 w-8", size && `size-${size}`)}>
      <AvatarImage className="" src={image} />

      {/* INCASE THE IMAGE DOESN'T LOAD */}
      <AvatarFallback>
        {/* {firstName?.charAt(0)} {lastName?.charAt(0)} */}
        AP
      </AvatarFallback>
    </Avatar>
  );
};
