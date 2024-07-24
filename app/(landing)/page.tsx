import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-1 flex-col ">
      <div
        className="h-[90dvh]  flex flex-col lg:h-screen px-4 md:px-10 xl:px-16  bg-black landing-hero-container"
        // style={{
        //   backgroundImage: "url('/hero_section.webp')",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        <LandingNav />
        <LandingHero />
      </div>

      <LandingContent />
    </div>
  );
};

export default LandingPage;
