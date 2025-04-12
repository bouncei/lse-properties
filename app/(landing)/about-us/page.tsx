"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import WhyChooseUs from "@/components/why-choose-us";
import { MapPin, Mail, Phone } from "lucide-react";
import PageWrapper from "@/components/wrappers/page-wrapper";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  slideIn,
  slideInFromRight,
} from "@/lib/animations";

const values = [
  {
    title: "Integrity",
    description:
      "We conduct our business with the highest standards of professional behavior and ethics.",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve and adapt to meet the changing needs of our clients.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service delivery.",
  },
  {
    title: "Client-Centric",
    description:
      "Our clients&apos; success and satisfaction are at the heart of everything we do.",
  },
];

const AboutUsPage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div
        className="relative h-[40vh] bg-gray-800 flex items-center justify-center"
        variants={fadeIn}
      >
        <motion.div
          className="relative z-10 text-center text-white"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
          >
            About Properties by LSE
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Your Trusted Partner in Real Estate Excellence
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Company Overview */}
      <PageWrapper
        title="Our Story"
        subTitle="Building Dreams, Creating Opportunities"
      >
        <motion.div
          className="container mx-auto px-4 md:px-10 xl:px-16"
          variants={staggerContainer}
        >
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
          >
            <motion.p className="text-gray-600 mb-8" variants={slideIn}>
              Properties by LSE is revolutionizing real estate in Abuja, Ibadan
              & Beyond, making property ownership accessible and affordable for
              young people, first-time buyers, and smart investors. Our mission
              is to transform the real estate landscape by providing
              transparent, efficient, and innovative property solutions.
            </motion.p>
            <motion.p className="text-gray-600 mb-8" variants={slideIn}>
              We believe that owning real estate shouldn&apos;t be just a
              dream—it should be your reality. Through our commitment to
              excellence and customer satisfaction, we&apos;ve helped thousands
              of clients achieve their property ownership goals.
            </motion.p>
          </motion.div>
        </motion.div>
      </PageWrapper>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-16 px-4 md:px-10 xl:px-16 bg-gray-50"
        variants={fadeInUp}
      >
        <WhyChooseUs />
      </motion.section>

      {/* Our Values */}
      <PageWrapper
        title="Our Values"
        subTitle="The principles that guide our service excellence"
      >
        <motion.div
          className="container mx-auto px-4 md:px-10 xl:px-16"
          variants={staggerContainer}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                custom={index}
              >
                <motion.h3
                  className="text-xl font-semibold mb-3 text-primary"
                  variants={slideInFromRight}
                >
                  {value.title}
                </motion.h3>
                <motion.p className="text-gray-600" variants={slideIn}>
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </PageWrapper>

      {/* Contact Information */}
      <motion.section className="py-16 bg-gray-50" variants={fadeInUp}>
        <motion.div
          className="container mx-auto px-4 md:px-10 xl:px-16"
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We&apos;re here to answer any questions you may have
            </p>
          </motion.div>
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: "Apo, Near Fish Market, Abuja, Nigeria",
                link: null,
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+234 802 086 0321",
                link: "tel:+2348020860321",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@propertiesbylse.com",
                link: "mailto:info@propertiesbylse.com",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                custom={index}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold mb-2"
                  variants={slideInFromRight}
                >
                  {item.title}
                </motion.h3>
                {item.link ? (
                  <motion.a
                    href={item.link}
                    className="text-gray-600 hover:text-primary"
                    variants={slideIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.content}
                  </motion.a>
                ) : (
                  <motion.p
                    className="text-gray-600 text-center"
                    variants={slideIn}
                  >
                    {item.content}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUsPage;
