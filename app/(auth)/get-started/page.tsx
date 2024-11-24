import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="md:h-screen  flex flex-col mx-4 md:mx-8">
      <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
        <div className="flex text-sm h-full flex-col items-start">
          <Logo />

          <div className="space-y-8 mt-16 xl:mt-40">
            <div className="font-bold text-4xl space-y-2 ">
              <h2>Welcome to</h2>
              <h2>BETTERSVCE!</h2>
            </div>

            <div>
              Discover a seamless way to connect, create, and grow. Whether
              you&apos;re here to offer your services, find the perfect gig, or
              just stay connected, <b>LSE Properties</b> has everything you
              need.
            </div>

            <div className="space-y-3 flex flex-col ">
              <Button className="" variant="outline" size="lg" asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/sign-up">Create an account</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="ml-auto">
          <div className="hidden md:flex relative h-[90dvh]  md:w-[440px] lg:w-[600px] ">
            <Image alt="Splash" src="/person_with_notebook.svg" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
