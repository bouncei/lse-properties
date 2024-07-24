import { Button } from "./ui/button";

const LandingHero = () => {
  return (
    <div className=" flex items-center justify-center  text-white">
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      <div className="h-[80dvh] w-full flex items-center justify-center">
        <div className="relative z-10 w-1/2 ">
          <div className="w-full text-left py-8">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Connecting <span className="text-yellow-400">Services</span>
              <br />
              with Those Who <span className="text-red-500">Need Them!</span>
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-[#E6E9EC] max-w-2xl mr-auto">
              Connect with skilled professionals or offer your own expertise
              with ease. Our platform bridges the gap between service providers
              and those in need of specialized skills, ensuring a seamless and
              efficient experience for all users.
            </p>
            <div className="mt-8  space-x-4">
              <Button variant="default" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="bg-transperent">
                Learn More
              </Button>
            </div>
            {/* <div className="mt-8 flex justify-center space-x-8 text-center">
              <div>
                <h2 className="text-2xl font-bold">25k+</h2>
                <p>Successful Projects</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">5k+</h2>
                <p>Satisfied Clients</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">96%</h2>
                <p>Satisfaction Rate</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default LandingHero;
