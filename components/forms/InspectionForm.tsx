"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createInspection,
  getLocations,
  getPropertiesByLocation,
} from "@/lib/actions/inspection";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromRight } from "@/lib/animations";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(1, "Please select a location"),
  property: z.string().min(1, "Please select a property"),
  date: z.string().min(1, "Please select a date"),
  enquiry: z.string().optional(),
});

export default function InspectionForm() {
  const [locations, setLocations] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [properties, setProperties] = useState<
    { _id: string; title: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      location: "",
      property: "",
      date: "",
      enquiry: "",
    },
  });

  useEffect(() => {
    const loadLocations = async () => {
      const locationsData = await getLocations();
      setLocations(locationsData);
    };
    loadLocations();
  }, []);

  const handleLocationChange = async (locationId: string) => {
    form.setValue("location", locationId);
    form.setValue("property", "");
    const propertiesData = await getPropertiesByLocation(locationId);
    setProperties(propertiesData);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await createInspection(values);
      toast.success("Inspection scheduled successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to schedule inspection. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Get tomorrow's date as the minimum date for scheduling
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          <motion.div variants={slideInFromRight}>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={slideInFromRight}>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input type="date" min={minDate} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          <motion.div variants={slideInFromRight}>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={handleLocationChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <AnimatePresence>
                        {locations.map((location, index) => (
                          <motion.div
                            key={location._id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SelectItem value={location._id}>
                              {location.name}
                            </SelectItem>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div variants={slideInFromRight}>
            <FormField
              control={form.control}
              name="property"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a property" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <AnimatePresence>
                        {properties.map((property, index) => (
                          <motion.div
                            key={property._id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <SelectItem value={property._id}>
                              {property.title}
                            </SelectItem>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <FormField
            control={form.control}
            name="enquiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific requirements or questions?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Scheduling..." : "Schedule Inspection"}
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  );
}
