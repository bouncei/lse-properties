import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, slideIn, staggerContainer } from "@/lib/animations";

const LandingHero = () => {
  return (
    <div className="flex items-center justify-center text-white">
      {/* Optional overlay for better text visibility */}
      <motion.div
        className="absolute h-[90dvh] lg:h-screen inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      />
      <div className="h-[70dvh] lg:h-screen w-full flex flex-col lg:flex-row lg:items-center gap-y-14 md:gap-y-16 lg:gap-y-0 justify-center">
        <motion.div
          className="relative z-10 w-full lg:w-[50%]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full text-left space-y-4 sm:space-y-8 py-8">
            <motion.div
              className="text-4xl lg:text-5xl xl:text-6xl  sm:text-center font-bold relative"
              variants={fadeInUp}
            >
              Own Your Future
              <motion.div
                className="z-20 absolute bottom-2 -left-3"
                variants={scaleIn}
              >
                <div className="relative size-32 lg:size-44">
                  <Image alt="square_float" src="/hero_square_float.svg" fill />
                </div>
              </motion.div>
            </motion.div>
            <motion.p
              className="text-sm sm:text-base sm:text-center "
              variants={slideIn}
            >
              Why pay rent forever when you can own? Properties by LSE is
              revolutionizing real estate in Abuja, Ibadan & Beyond, making
              property ownership easy, accessible, and affordable for young
              people, first-time buyers, and smart investors. We believe that
              owning real estate shouldn&apos;t be a dream—it should be your
              reality! The journey is much more rewarding with us so start
              building wealth today!
            </motion.p>
            <motion.div
              className="flex md:items-center md:justify-center flex-row flex-wrap gap-2 md:gap-4"
              variants={fadeInUp}
            >
              <Button asChild variant="default" size="lg">
                <Link href="/properties">Own It Now</Link>
              </Button>

              <Button asChild variant="secondary" size="lg">
                <Link href="/schedule-inspection">Start Your Journey Now</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingHero;
