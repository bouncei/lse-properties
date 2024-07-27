"use client";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col relative">
      {/* SIDE BAR */}
      <div className="hidden h-full md:flex md:flex-col md:fixed  md:w-72 md:inset-y-0">
        <SideBar />
      </div>
      <section className=" md:pl-72 flex flex-1 flex-col ">
        <div className=" sticky top-0 z-10 border-b border-[#C8CFD5]">
          <NavBar />
        </div>

        <div className=" p-6 ">{children}</div>
      </section>
    </div>
  );
};

export default DashboardLayout;
