"use client";

import InspectionForm from "@/components/forms/InspectionForm";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// export const metadata = {
//   title: "Schedule Inspection | LSE Properties",
//   description: "Schedule a property inspection with LSE Properties",
// };

export default function ScheduleInspection() {
  return (
    <motion.div
      className="container mx-auto py-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-2xl mx-auto" variants={staggerContainer}>
        <motion.div className="mb-8 text-center" variants={fadeInUp}>
          <h1 className="text-3xl font-bold mb-4">Schedule an Inspection</h1>
          <p className="text-muted-foreground">
            Fill out the form below to schedule a property inspection. We'll get
            back to you within 24 hours to confirm your appointment.
          </p>
        </motion.div>
        <motion.div
          className="bg-card p-6 rounded-lg shadow-sm"
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <InspectionForm />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
