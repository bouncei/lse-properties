"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { client } from "@/lib/sanity.client";
import { featuredTestimonialsQuery } from "@/lib/sanity.queries";
import { urlForImage } from "@/lib/sanity.image";
import Image from "next/image";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

const formatRole = (role: string): string => {
  return role
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(featuredTestimonialsQuery);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied clients about their experience with Properties
          by LSE
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="w-full flex-shrink-0 px-4">
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                {/* {testimonial.image && (
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={urlForImage(testimonial.image).url()}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )} */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gray-300 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">
                    {formatRole(testimonial.role)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
