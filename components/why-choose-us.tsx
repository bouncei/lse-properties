import { Check, Shield, Users } from "lucide-react";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is thoroughly vetted and verified for your peace of mind.",
    icon: Check,
  },
  {
    title: "Secure & Transparent Transactions",
    description:
      "Safe, secure, and transparent property transactions from start to finish.",
    icon: Shield,
  },
  {
    title: "5K+ Satisfied Clients",
    description:
      "Join thousands of satisfied homeowners who trusted Properties by LSE.",
    icon: Users,
  },
];

const stats = [
  {
    value: "25K+",
    label: "Successful Property Deals",
  },
  {
    value: "5K+",
    label: "Satisfied Homeowners",
  },
  {
    value: "96%",
    label: "Customer Satisfaction",
  },
  {
    value: "25,000+",
    label: "Trusted Users Worldwide",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Properties by LSE is your trusted partner in real estate, providing
          secure and transparent property deals across Nigeria.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
