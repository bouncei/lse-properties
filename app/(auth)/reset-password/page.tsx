"use client";

import Image from "next/image";
import Link from "next/link";
import * as z from "zod";

import { formSchema } from "./constant";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, Info } from "lucide-react";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: on submit functionality
      console.log("Form values", values);

      // form.reset();
    } catch (error: any) {
      toast.error("Something went wrong");

      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
      <div className="flex  flex-col h-full items-start w-full">
        <Link href="/" className="flex items-center">
          <div className="relative size-28 md:size-32 mr-2 md:mr-4">
            <Image fill alt="logo" src="/logo.svg" />
          </div>
        </Link>

        <div className="space-y-5 md:space-y-8 mt-4  xl:mt-16 w-full">
          <div className="font-bold text-4xl space-y-2 ">
            <h2>Reset your Password</h2>
          </div>

          <div>
            To reset your password, enter the email associated with your
            account. We will send you a link to create a new password.
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-full "
            >
              {/* INPUT FIELDS */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="john.doe@gmail.com"
                        className="focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full py-2 text-end text-sm ">
                Remember password?{" "}
                <span className=" underline ease-in hover:opacity-70 text-[#117C35] cursor-pointer hover:scale-105 transition">
                  <Link href="/sign-in">Login here</Link>
                </span>
              </div>

              <Button
                size="lg"
                type="submit"
                className="w-full !mt-8"
                disabled={isLoading}
              >
                Send Reset Link
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full text-center py-4 text-sm ">
          Don&apos;t have an account?{" "}
          <span className=" underline ease-in hover:opacity-70 text-[#117C35] cursor-pointer hover:scale-105 transition">
            <Link href="/sign-up">Create Account here.</Link>
          </span>
        </div>

        <div className="py-5 flex items-center gap-2 text-sm text-[#117C35] ">
          <Info className=" flex-shrink-0 size-6" />

          <div>
            If you don't receive the email within a few minutes, check your spam
            folder or contact our{" "}
            <b className=" underline cursor-pointer transition ease-in hover:opacity-70">
              support team
            </b>{" "}
            for assistance.
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="ml-auto">
        <div className="hidden md:flex relative h-[90dvh] md:w-[440px] lg:w-[600px] ">
          <Image alt="login" src="/reset-password.svg" fill />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
