import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./logo";
import { cn } from "@/lib/utils";
import { dashboardRoutes } from "@/constants";
import Image from "next/image";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full  ">
      <div className=" pb-2 flex-1">
        <Link href="/" className="flex items-center px-3">
          <div className="relative size-28 md:size-28 -mt-9 -mb-5 mx-2 ">
            <Image
              fill
              alt="logo"
              src={pathname === "/" ? "/home_logo.svg" : "/logo.svg"}
            />
          </div>
        </Link>

        <div className="flex flex-col gap-5">
          <div className="space-y-1 border-t border-[#C8CFD5] px-3 py-6">
            {dashboardRoutes.section1.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group p-3 flex w-full  justify-start items-center  cursor-pointer hover:text-white hover:bg-primary rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-primary"
                    : "text-[#111928]"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>

          <hr color="#E5E7EB" className="mx-3 " />

          <div className="space-y-1  border-[#C8CFD5] px-3 py-6">
            {dashboardRoutes.section2.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group p-3 flex w-full  justify-start items-center  cursor-pointer hover:text-white hover:bg-primary rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-primary"
                    : "text-[#111928]",
                  route.href === "/logout" && "text-red-500"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
