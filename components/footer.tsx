// src/components/Footer.js
import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Input } from "./ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-10 xl:px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Properties by LSE</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <p>Apo, Near Fish Market, Abuja, Nigeria</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+2348020860321">+234 802 086 0321</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@propertiesbylse.com">
                  info@propertiesbylse.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-primary">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/2348020860321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Stay ahead with exclusive real estate tips & deals!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button type="submit" className="w-full">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          {/* Social Links */}
          <div className="flex justify-end gap-4 ">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 hover:text-primary" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-primary" />
            </Link>
          </div>

          {/* DEVELOPER BRANDING */}
          <p className="text-gray-400">
            Built by{" "}
            <a
              href="https://bouncei.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Bouncey
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>©2025 All Rights Reserved - Properties by LSE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
