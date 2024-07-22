"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";

const ErrorComponent = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div className="overflow-auto">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:h-screen  flex flex-col mx-4 md:mx-8">
          <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
            <div className="flex  flex-col h-full items-start w-full">
              <Link href="/" className="flex items-center">
                <div className="relative size-28 md:size-32 mr-2 md:mr-4">
                  <Image fill alt="logo" src="/logo.svg" />
                </div>
              </Link>

              <div className="space-y-5 md:space-y-8 mt-4  md:mt-36 xl:mt-44 w-full">
                <div className="font-bold text-4xl space-y-2 ">
                  <h2>Connection Lost!</h2>
                </div>

                <div>
                  Oops! Looks like our connection got lost. Sorry, it looks like
                  you&apos;re off the grid.{" "}
                </div>
              </div>
              <Button
                size="lg"
                type="submit"
                className="w-full !mt-8"
                onClick={goBack}
              >
                <Undo2 className="size-5 mr-2" />
                Back to Previous Page
              </Button>
            </div>

            {/* Image */}
            <div className="ml-auto">
              <div className="hidden md:flex relative h-[90dvh] md:w-[440px] lg:w-[600px] ">
                <Image alt="login" src="/not_found.svg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
