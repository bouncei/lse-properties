import NavBar from "@/components/navbar";
import { Sidebar } from "lucide-react";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col relative">
      {/* SIDE BAR */}
      <div className="hidden h-full md:flex md:flex-col md:fixed  md:w-72 md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <section className="md:pl-72 flex flex-1 flex-col ">
        <div className=" sticky top-0 z-10">
          <NavBar />
        </div>

        <div className="pb-10">{children}</div>
      </section>
    </div>
  );
};

export default DashboardLayout;
