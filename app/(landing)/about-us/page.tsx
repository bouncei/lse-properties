"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import WhyChooseUs from "@/components/why-choose-us";
import { MapPin, Mail, Phone } from "lucide-react";
import PageWrapper from "@/components/wrappers/page-wrapper";

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
      "Our clients' success and satisfaction are at the heart of everything we do.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-800 flex items-center justify-center">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Properties by LSE
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your Trusted Partner in Real Estate Excellence
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <PageWrapper
        title="Our Story"
        subTitle="Building Dreams, Creating Opportunities"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Properties by LSE is revolutionizing real estate in Abuja, Ibadan
              & Beyond, making property ownership accessible and affordable for
              young people, first-time buyers, and smart investors. Our mission
              is to transform the real estate landscape by providing
              transparent, efficient, and innovative property solutions.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that owning real estate shouldn't be just a dream—it
              should be your reality. Through our commitment to excellence and
              customer satisfaction, we've helped thousands of clients achieve
              their property ownership goals.
            </p>
          </div>
        </div>
      </PageWrapper>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <WhyChooseUs />
      </section>

      {/* Our Values */}
      <PageWrapper
        title="Our Values"
        subTitle="The principles that guide our service excellence"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We're here to answer any questions you may have
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">
                Apo, Near Fish Market, Abuja, Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+2348020860321"
                className="text-gray-600 hover:text-primary"
              >
                +234 802 086 0321
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:info@propertiesbylse.com"
                className="text-gray-600 hover:text-primary"
              >
                info@propertiesbylse.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
