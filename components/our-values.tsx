import {
  Building2,
  Home,
  LineChart,
  ScrollText,
  Trees,
  Wallet,
  ArrowRight,
  Shield,
  Lightbulb,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    title: "Trust & Reliability",
    description:
      "Building lasting relationships through transparent and dependable service delivery.",
    icon: Shield,
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Innovation",
    description:
      "Embracing modern solutions and creative approaches to real estate challenges.",
    icon: Lightbulb,
    color: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    title: "Excellence",
    description:
      "Maintaining the highest standards in every aspect of our service.",
    icon: Award,
    color: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Client-Focused",
    description: "Your success and satisfaction are our top priorities.",
    icon: Users,
    color: "bg-green-50",
    textColor: "text-green-600",
  },
];

const OurValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="mt-32 mb-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-16">
        <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
          Our Core Values
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          The principles that guide our commitment to excellence in real estate
          services
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`${value.color} rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`p-3 rounded-full ${value.color} mb-4 ring-2 ring-white`}
              >
                <value.icon className={`w-8 h-8 ${value.textColor}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${value.textColor}`}>
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurValues;
