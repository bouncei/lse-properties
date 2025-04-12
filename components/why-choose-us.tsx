import { Check, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

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
    <motion.div
      className="container mx-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Properties by LSE is your trusted partner in real estate, providing
          secure and transparent property deals across Nigeria.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-16"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <feature.icon className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.h3
              className="text-xl font-semibold mb-2"
              variants={fadeInUp}
            >
              {feature.title}
            </motion.h3>
            <motion.p className="text-gray-600" variants={fadeInUp}>
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {stat.value}
            </motion.div>
            <motion.div
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
