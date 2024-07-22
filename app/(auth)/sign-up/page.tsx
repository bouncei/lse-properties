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
import RegisterDialog from "@/components/dialogs/register-dialog";

const SignUpPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [successModal, setSuccessModal] = useState(false);
  const [registerdEmail, setRegisteredEmail] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const togglePasswordVisibility = (type: string) => {
    if (type === "password") {
      setShowPassword({ ...showPassword, password: !showPassword.password });
    } else {
      setShowPassword({
        ...showPassword,
        confirmPassword: !showPassword.confirmPassword,
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // TODO: on submit functionality
      setSuccessModal(true);
      setRegisteredEmail(values.email);
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
    <>
      <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
        <div className="flex  flex-col h-full items-start w-full">
          <Link href="/" className="flex items-center">
            <div className="relative size-28 md:size-32 mr-2 md:mr-4">
              <Image fill alt="logo" src="/logo.svg" />
            </div>
          </Link>

          <div className="space-y-4 md:space-y-6 mt-4  w-full">
            <div className="font-bold text-4xl space-y-2 ">
              <h2>Create a New Account</h2>
            </div>

            <div>
              Personalized the opportunities Join our community to connect,
              create, and grow.
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full "
              >
                {/* INPUT FIELDS */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="John Doe"
                          className="focus-visible:ring-0"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            disabled={isLoading}
                            type={showPassword.password ? "text" : "password"}
                            placeholder="Enter password"
                            className="focus-visible:ring-0"
                            {...field}
                          />

                          <div
                            className="absolute inset-y-0  right-0 pr-3 flex items-center cursor-pointer text-sm"
                            onClick={() => togglePasswordVisibility("password")}
                          >
                            {showPassword.password ? "Hide" : "Show"}
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* //TODO: ADD PASSWORD CONSTRAINTS */}

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            disabled={isLoading}
                            type={
                              showPassword.confirmPassword ? "text" : "password"
                            }
                            placeholder="Re-Enter password"
                            className="focus-visible:ring-0"
                            {...field}
                          />

                          <div
                            className="absolute inset-y-0  right-0 pr-3 flex items-center cursor-pointer text-sm"
                            onClick={() =>
                              togglePasswordVisibility("confirmPassword")
                            }
                          >
                            {showPassword.confirmPassword ? "Hide" : "Show"}
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full py-2 text-left text-sm ">
                  {/* <FormLabel>Terms and Conditions</FormLabel> */}
                  <div className="flex items-center">
                    <Input
                      type="checkbox"
                      className="w-4 h-4 text-[#117C35]  rounded border-gray
                  border focus:ring-[#117C35]  "
                    />
                    <span className="ml-2">
                      I agree to the{" "}
                      <span className=" underline ease-in hover:opacity-70 text-[#117C35] cursor-pointer hover:scale-105 transition">
                        <Link href="/terms-and-conditions">
                          Terms and Conditions
                        </Link>
                      </span>{" "}
                      and{" "}
                      <span className=" underline ease-in hover:opacity-70 text-[#117C35] cursor-pointer hover:scale-105 transition">
                        <Link href="/privacy-policy">Privacy Policy.</Link>
                      </span>
                    </span>
                  </div>

                  {/* <div>
                 
                </div> */}
                </div>

                <Button
                  size="lg"
                  type="submit"
                  className="w-full !mt-8"
                  disabled={isLoading}
                >
                  Sign in
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-full text-center py-3 text-sm ">
            Already have an account?{" "}
            <span className=" underline ease-in hover:opacity-70 text-[#117C35] cursor-pointer hover:scale-105 transition">
              <Link href="/sign-in">Sign in here.</Link>
            </span>
          </div>

          <div className="py-3 flex items-center gap-2 text-sm text-[#117C35] ">
            <Info className=" flex-shrink-0 size-6" />

            <div>
              Your information is safe with us. We respect your privacy and will
              never share your details without your consent.
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="ml-auto">
          <div className="hidden md:flex relative h-[90dvh] md:w-[440px] lg:w-[600px]">
            <Image alt="login" src="/register.svg" fill />
          </div>
        </div>
      </div>

      <RegisterDialog
        email={registerdEmail}
        isOpen={successModal}
        onClose={() => {
          setSuccessModal(!successModal);
        }}
      />
    </>
  );
};

export default SignUpPage;
