import { Search, Calendar, Phone, Shield, Home } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    title: "Search & Select",
    description: "Browse our verified listings to find your perfect property.",
  },
  {
    icon: Calendar,
    title: "Schedule a Viewing",
    description: "Visit your potential property at a time that suits you.",
    link: "https://linktr.ee/propertiesbylse",
  },
  {
    icon: Phone,
    title: "Connect with an Expert",
    description: "Get professional guidance from our experienced team.",
    link: "https://wa.me/2348020860321",
  },
  {
    icon: Shield,
    title: "Secure Your Deal",
    description: "Complete your transaction with our hassle-free process.",
  },
  {
    icon: Home,
    title: "Move In, Build or Land Banking",
    description: "Start enjoying your investment with peace of mind.",
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How Properties by LSE Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your journey to property ownership made simple and transparent
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div key={step.title} className="relative text-center">
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <step.icon className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 mb-4">{step.description}</p>

            {/* Link if available */}
            {step.link && (
              <Button asChild variant="link" className="text-primary">
                <Link href={step.link} target="_blank">
                  Get Started
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/contact">Start Your Journey</Link>
        </Button>
      </div>
    </div>
  );
};

export default HowItWorks;
