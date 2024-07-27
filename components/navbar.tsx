import {
  Bell,
  ChevronDown,
  Search,
  SquareArrowOutDownRight,
  SquareArrowOutUpRight,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import MobileSidebar from "./mobile-side-bar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const NavBar = () => {
  return (
    <div className="bg-transparent bg-opacity-30 backdrop-blur-sm  flex items-center  p-4 px-6">
      <MobileSidebar />

      <div className="w-full flex items-center justify-between">
        {/* SEARCH BAR */}
        <div className="relative w-[50%]">
          <Input
            type="text"
            placeholder="Search"
            className="w-full focus-visible:ring-0  focus-visible:ring-offset-0"
          />
          <div className="absolute inset-y-0  right-0 pr-3 flex items-center cursor-pointer text-sm rounded-full">
            <Search color="#3C3B39" className="size-5" />
          </div>
        </div>

        {/* ACCOUNT DETAILS */}
        <div className="w-[35%]">
          <div className="w-full flex items-center text-sm justify-between">
            <Button
              variant="completed"
              size="sm"
              className=" hidden lg:inline-flex rounded-full"
            >
              Become a Creator
              <SquareArrowOutUpRight className="size-5 ml-2" />
            </Button>

            <div className="flex items-center gap-1">
              <Button size="icon" variant="ghost">
                <Bell className="size-5 text-primary" />
              </Button>
              <hr className=" flex-shrink-0 rotate-90 text-black w-5" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="focus-visible:ring-0  focus-visible:ring-offset-0"
                  >
                    <Avatar className="mr-2">
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-flex">
                      Adeyanju <ChevronDown className="size-5 ml-2" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-5">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
