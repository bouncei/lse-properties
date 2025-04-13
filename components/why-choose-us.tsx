import { Check, Shield, Users } from "lucide-react";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Verified Listings",
    description:
      "Every property is thoroughly vetted and verified for your peace of mind.",
    icon: Check,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Secure & Transparent Transactions",
    description:
      "Safe, secure, and transparent property transactions from start to finish.",
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "5K+ Satisfied Clients",
    description:
      "Join thousands of satisfied homeowners who trusted Properties by LSE.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
];

interface Stat {
  value: number;
  displayValue: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: 25000,
    displayValue: "25K+",
    label: "Successful Property Deals",
    color: "from-blue-500 to-blue-600",
  },
  {
    value: 5000,
    displayValue: "5K+",
    label: "Satisfied Homeowners",
    color: "from-green-500 to-green-600",
  },
  {
    value: 96,
    displayValue: "96%",
    label: "Customer Satisfaction",
    color: "from-purple-500 to-purple-600",
  },
  {
    value: 25000,
    displayValue: "25,000+",
    label: "Trusted Users Worldwide",
    color: "from-pink-500 to-pink-600",
  },
];

interface AnimatedNumberProps {
  value: number;
  displayValue: string;
  color: string;
}

const AnimatedNumber = ({
  value,
  displayValue,
  color,
}: AnimatedNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });

      const node = ref.current;
      const startValue = 0;

      const animation = animate(startValue, value, {
        duration: 3.5,
        ease: [0.215, 0.61, 0.355, 1.0], // cubic-bezier for smooth easing
        onUpdate(value) {
          if (node) {
            if (value >= 1000) {
              node.textContent = Math.floor(value).toLocaleString() + "+";
            } else if (displayValue.includes("%")) {
              node.textContent = Math.floor(value) + "%";
            } else {
              node.textContent = Math.floor(value) + "+";
            }
          }
        },
        onComplete() {
          if (node) {
            node.textContent = displayValue;
          }
        },
      });

      return () => animation.stop();
    }
  }, [isInView, value, displayValue, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={cn(
        "text-4xl font-bold mb-3 bg-gradient-to-r bg-clip-text text-transparent",
        color
      )}
    >
      {0}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="container mx-auto py-16 px-4 sm:px-6 lg:px-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Properties by LSE is your trusted partner in real estate, providing
          secure and transparent property deals across Nigeria.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-24"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="p-8 rounded-xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                feature.color
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <feature.icon className="w-8 h-8" />
            </motion.div>
            <motion.h3 className="text-2xl font-bold mb-4" variants={fadeInUp}>
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              {feature.description}
            </motion.p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg"
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedNumber
              value={stat.value}
              displayValue={stat.displayValue}
              color={stat.color}
            />
            <motion.div
              className="text-gray-600 font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
