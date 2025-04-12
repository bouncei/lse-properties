"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chuka O.",
    role: "First-time Buyer",
    content:
      "I never thought I could afford a home this early in life, but Properties by LSE made it possible!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ada M.",
    role: "Young Investor",
    content: "The best real estate company for young people looking to invest!",
    rating: 5,
  },
  {
    id: 3,
    name: "John D.",
    role: "Property Owner",
    content:
      "Their transparent process and expert guidance made my property purchase seamless.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah K.",
    role: "Land Banking Investor",
    content:
      "Properties by LSE helped me make a smart investment in land banking. Their expertise is unmatched!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
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
