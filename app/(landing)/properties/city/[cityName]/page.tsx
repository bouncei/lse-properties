import { Button } from "@/components/ui/button";
import { getCityByName } from "@/lib/actions/city";
import { getProjectsByCity } from "@/lib/actions/project";
import { City, Project } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface CityPageProps {
  params: Promise<{ cityName: string }>;
}

export default async function CityPage({ params }: CityPageProps) {
  const cityName = (await params).cityName;

  // Run both requests in parallel
  const [city, projects]: [City, Project[]] = await Promise.all([
    getCityByName(cityName),
    getProjectsByCity(cityName),
  ]);

  return (
    <div className="relative mb-6 lg:mb-10">
      <div className="absolute h-[50dvh] sm:h-[40dvh] lg:h-[50dvh] inset-0 bg-black opacity-60"></div>

      {/* TOP IMAGE */}
      <div
        className="h-[50dvh] sm:h-[40dvh] lg:h-[50dvh] w-full flex flex-col lg:flex-row items-center gap-y-14 md:gap-y-16 lg:gap-y-0 justify-center"
        style={{
          backgroundImage: `url(${urlFor(city.image).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-5 w-full">
          <div className="w-full text-center space-y-5">
            <div className="text-5xl text-white ">
              All our properties in{" "}
              <span className="font-bold">{cityName}</span>
            </div>

            {/* ACTION BUTTON */}
            <Button className="text-white text-xl" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* CITY INFORMTION */}
      <div className="flex flex-row items-center my-40 px-4 md:px-10 xl:px-16">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full lg:w-1/2 relative h-[50vh] overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 ">
          <Image
            src={urlFor(city.image).url()}
            alt={city._id}
            fill
            className="rounded-lg object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
