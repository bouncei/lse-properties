import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="flex items-center justify-center text-white">
      {/* Optional overlay for better text visibility */}
      <div className="absolute h-[90dvh] lg:h-screen inset-0 bg-black opacity-50" />
      <div className="h-[70dvh] lg:h-screen w-full flex flex-col lg:flex-row lg:items-center gap-y-14 md:gap-y-16 lg:gap-y-0 justify-center">
        <div className="relative z-10 w-full lg:w-[50%]">
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold relative">
              Own Your Future
              <div className="z-20 absolute bottom-2 -left-3">
                <div className="relative size-32 lg:size-44">
                  <Image alt="square_float" src="/hero_square_float.svg" fill />
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="z-20 absolute -top-3 right-0">
                  <div className="relative size-10 lg:size-20">
                    <Image
                      alt="circle_float"
                      src="/hero_circle_float.svg"
                      fill
                    />
                  </div>
                </div>
                <div className="z-20 absolute -top-8 -right-5">
                  <div className="relative lg:size-20">
                    <Image
                      alt="circle_float"
                      src="/hero_circle_float.svg"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base sm:text-center lg:max-w-2xl mr-auto">
              Why pay rent forever when you can own? Properties by LSE is
              revolutionizing real estate in Abuja, Ibadan & Beyond, making
              property ownership easy, accessible, and affordable for young
              people, first-time buyers, and smart investors. We believe that
              owning real estate shouldn't be a dream—it should be your reality!
              The journey is much more rewarding with us so start building
              wealth today!
            </p>
            <div className="flex md:items-center md:justify-center flex-row  flex-wrap gap-2 md:gap-4">
              <Button asChild variant="default" size="lg">
                <Link href="/properties">Own It Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/schedule-inspection">Start Your Journey Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
