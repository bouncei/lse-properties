// src/components/Footer.js
import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#032747] text-white py-8 px-4 md:px-10 xl:px-16  md:py-10 xl:py-16">
      <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="w-full ">
            <div className="-mt-9 -mb-5">
              <Logo component="footer" />
            </div>
            <div>
              Our platform is designed to connect individuals in Nigeria with a
              wide range of service providers. Whether you need home services,
              graphic design, or any other type of service, our platform
              simplifies the process of finding and hiring skilled
              professionals.
            </div>
            <div className="flex mt-4">
              {/* Add appropriate social media icons and links */}
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="w-full ">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <h5 className="text-lg font-bold mb-4">Community</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Leaners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h5 className="text-lg font-bold mb-4">Newsletter</h5>
            <p>Sign up and receive the latest tips via email.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="w-full px-3 py-2 mb-2 text-gray-900 rounded-md"
              />
              <Button type="submit" className="w-full bg-green-700">
                Subscribe Now
                <Send className="size-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
        <div className=" text-center border-t pt-5 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All Rights Reserved - LSE Properties
        </div>
      </div>
    </footer>
  );
}

export default Footer;
