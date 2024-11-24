"use client";

import Footer from "@/components/footer";
import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import SideBar from "@/components/sidebar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col relative">
      {/* SIDE BAR */}
      {/* <div className="hidden h-full md:flex md:flex-col md:fixed  md:w-72 md:inset-y-0">
        <SideBar />
      </div> */}

      <div className="flex flex-1 flex-col ">
        <div className="h-[90dvh]  flex flex-col lg:h-screen px-4 md:px-10 xl:px-16  landing-hero-container">
          <LandingNav />
          <LandingHero />
        </div>

        <LandingContent />

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
