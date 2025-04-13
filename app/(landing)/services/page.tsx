"use client";

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
import OurValues from "@/components/our-values";

const services = [
  {
    title: "Property Sales",
    description: "Own a home in top locations",
    longDescription:
      "Find your dream home in premium locations. We handle everything from property search to closing the deal.",
    icon: Home,
    color: "bg-blue-50",
    textColor: "text-blue-600",
    link: "/properties",
  },
  {
    title: "Rental Listings",
    description: "Find quality rental apartments",
    longDescription:
      "Access our curated list of high-quality rental properties that match your lifestyle and budget.",
    icon: Building2,
    color: "bg-purple-50",
    textColor: "text-purple-600",
    link: "/properties",
  },
  {
    title: "Investment Advisory",
    description: "Smart property investments",
    longDescription:
      "Get expert guidance on property investments to maximize returns and minimize risks.",
    icon: LineChart,
    color: "bg-green-50",
    textColor: "text-green-600",
    link: "/properties",
  },
  {
    title: "Property Management",
    description: "Stress-free landlord solutions",
    longDescription:
      "Let us handle tenant management, maintenance, and rent collection while you enjoy passive income.",
    icon: Wallet,
    color: "bg-orange-50",
    textColor: "text-orange-600",
    link: "/properties",
  },
  {
    title: "Land Acquisition & Development",
    description: "Secure the best plots",
    longDescription:
      "From raw land to developed properties, we help you identify and acquire prime real estate opportunities.",
    icon: Trees,
    color: "bg-teal-50",
    textColor: "text-teal-600",
    link: "/properties",
  },
  {
    title: "Consulting & Documentation",
    description: "Get legal & financial guidance",
    longDescription:
      "Navigate complex real estate transactions with our expert legal and financial consultation services.",
    icon: ScrollText,
    color: "bg-red-50",
    textColor: "text-red-600",
    link: "/properties",
  },
];

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-24">
        <div className="container mx-auto px-4 md:px-10 xl:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Comprehensive Real Estate Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From finding your dream home to managing your property
              investments, we provide end-to-end solutions for all your real
              estate needs.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-10 xl:px-16 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 ${service.color} rounded-2xl mb-6`}
              >
                <service.icon className={`w-8 h-8 ${service.textColor}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-500 text-sm mb-6">
                {service.longDescription}
              </p>
              <Button
                variant="ghost"
                className={`group ${service.textColor} hover:bg-gray-50`}
                asChild
              >
                <a href={service.link}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <OurValues />

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your real
            estate goals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/schedule-inspection">Schedule a Consultation</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
