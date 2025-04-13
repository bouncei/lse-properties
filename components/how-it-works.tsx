import { Search, Calendar, Phone, Shield, Home } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Search & Select",
    description: "Browse our verified listings to find your perfect property.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Calendar,
    title: "Schedule a Viewing",
    description: "Visit your potential property at a time that suits you.",
    link: "https://linktr.ee/propertiesbylse",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Phone,
    title: "Connect with an Expert",
    description: "Get professional guidance from our experienced team.",
    link: "https://wa.me/2348020860321",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Secure Your Deal",
    description: "Complete your transaction with our hassle-free process.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Home,
    title: "Move In, Build or Land Banking",
    description: "Start enjoying your investment with peace of mind.",
    color: "bg-amber-100 text-amber-600",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HowItWorks = () => {
  return (
    <motion.section
      className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          How Properties by LSE Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Your journey to property ownership made simple and transparent
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
        variants={staggerContainer}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            {/* Step number */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
              {index + 1}
            </div>

            {/* Connector line for larger screens */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2" />
            )}

            {/* Icon */}
            <div
              className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${step.color}`}
            >
              <step.icon className="w-8 h-8" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {step.description}
            </p>

            {/* Link if available */}
            {step.link && (
              <Button
                asChild
                variant="outline"
                className="w-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Link href={step.link} target="_blank">
                  Get Started
                </Link>
              </Button>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center" variants={fadeInUp}>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/schedule-inspection">Start Your Journey Today</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
