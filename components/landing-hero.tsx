import Image from "next/image";
import { Button } from "./ui/button";

const LandingHero = () => {
  return (
    <div className=" flex items-center justify-center  text-white">
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-0 lg:opacity-20"></div>{" "}
      <div className="h-[70dvh] sm:h-[60dvh] lg:h-[70dvh] w-full flex flex-col lg:flex-row lg:items-center gap-y-14 md:gap-y-16 lg:gap-y-0 lg:justify-center ">
        <div className="relative z-10 w-full lg:w-[50%] ">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Connecting <span className="text-yellow-400">Services</span>
              <br />
              with Those Who <br className="hidden lg:block" />{" "}
              <span className="text-red-500">Need </span> Them!
              <div className=" z-20 absolute bottom-2 -left-3 ">
                <div className="relative size-32 lg:size-44 ">
                  <Image alt="square_float" src="/hero_square_float.svg" fill />
                </div>
              </div>
              <div className="hidden xl:block">
                <div className=" z-20 absolute -top-3 right-0 ">
                  <div className="relative size-10 lg:size-20 ">
                    <Image
                      alt="square_float"
                      src="/hero_circle_float.svg"
                      fill
                    />
                  </div>
                </div>
                <div className=" z-20 absolute -top-8 -right-5 ">
                  <div className="relative lg:size-20 ">
                    <Image
                      alt="square_float"
                      src="/hero_circle_float.svg"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className=" text-sm sm:text-base lg::max-w-2xl mr-auto">
              Connect with skilled professionals or offer your own expertise
              with ease. Our platform bridges the gap between service providers
              and those in need of specialized skills, ensuring a seamless and
              efficient experience for all users.
            </p>
            <div className=" flex  md:items-center sm:flex-row gap-2 md:gap-4">
              <Button variant="default" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="bg-transperent">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-auto lg:mt-auto flex z-10 bg-[#E6E9EC] bg-opacity-30 justify-between border border-white text-center lg:w-[50%] lg:ml-10 p-4 px-5 sm:p-8 rounded-xl relative">
          <div className="text-center lg:text-left">
            <h2 className=" text-base lg:text-lg 2xl:text-2xl font-bold ">
              25k+
            </h2>
            <p className="text-xs md:text-sm">Successful Projects</p>
          </div>

          <div className="relative size-6 my-auto">
            <Image alt="Splash" src="/hero_divider.svg" fill />
          </div>

          <div className="text-center lg:text-left">
            <h2 className=" text-base lg:text-lg 2xl:text-2xl font-bold">
              5k+
            </h2>
            <p className="text-xs md:text-sm">Satisfied Clients</p>
          </div>
          <div className="relative size-6 my-auto">
            <Image alt="Splash" src="/hero_divider.svg" fill />
          </div>
          <div className="text-center lg:text-left">
            <h2 className=" text-base lg:text-lg 2xl:text-2xl font-bold">
              96%
            </h2>
            <p className="text-xs md:text-sm">Satisfaction Rate</p>
          </div>

          <div className=" z-20 absolute -top-8 -right-5 md:-top-10 md:-right-10 lg:-top-16 lg:-right-14">
            <div className="relative size-16 md:size-24 lg:size-32 ">
              <Image alt="Splash" src="/star.png" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
