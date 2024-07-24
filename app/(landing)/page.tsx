import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div
        className="h-full  flex flex-col lg:h-screen px-4 md:px-6 xl:px-16  bg-black"
        style={{
          backgroundImage: "url('/hero_section.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <LandingNav />
        <LandingHero />
      </div>

      <LandingContent />
    </>
  );
};

export default LandingPage;
