"use client";

import Image from "next/image";
import Link from "next/link";
import * as z from "zod";

import { formSchema } from "./constant";
import {
  Form,
  FormControl,
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
import { useEffect, useState } from "react";
import { Circle, CircleDot, Info } from "lucide-react";
import RegisterDialog from "@/components/dialogs/register-dialog";
import Logo from "@/components/logo";
import { Checkbox } from "@/components/ui/checkbox";
import { passwordConstraints } from "@/constants";

const SignUpPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [constraints, setConstraints] = useState(passwordConstraints);
  const [successModal, setSuccessModal] = useState(false);
  const [registerdEmail, setRegisteredEmail] = useState("");
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(false);
  const [terms, setTerms] = useState<string>("off");

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
    if (!confirmPasswordMatch) return;

    if (terms === "off") {
      toast.error("Please accept the terms and conditions");
      return;
    }

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

  // Function to check if the password meets the constraints
  const checkPasswordConstraints = (password: string) => {
    const constraintsCopy = [...passwordConstraints];
    constraintsCopy[0].value = /[A-Z]/.test(password); // At least one uppercase letter
    constraintsCopy[1].value = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one symbol
    constraintsCopy[2].value = /[0-9]/.test(password); // At least one number
    constraintsCopy[3].value = password.length >= 6; // Minimum 6 characters
    setConstraints(constraintsCopy);
  };

  useEffect(() => {
    // Check password constraints whenever the form's password field changes
    const subscription = form.watch((value) => {
      if (value.password === value.confirmPassword) {
        setConfirmPasswordMatch(true);
      } else {
        setConfirmPasswordMatch(false);
      }

      if (value.password) {
        checkPasswordConstraints(value.password);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  return (
    <>
      <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
        <div className="flex  flex-col h-full  items-start w-full">
          <Logo />

          <div className="space-y-3 lg:space-y-5 mt-3  w-full">
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

                <div className="flex flex-wrap gap-4 items-center text-muted-foreground">
                  {constraints.map((constriant) => (
                    <div
                      key={constriant.title}
                      className="flex items-center space-x-2"
                    >
                      {constriant.value ? (
                        <CircleDot className="size-3 flex-shrink-0 md:size-4 text-[#117C35]" />
                      ) : (
                        <Circle className="size-3 flex-shrink-0 md:size-4" />
                      )}

                      <div className="text-xs md:text-sm">
                        {constriant.title}
                      </div>
                    </div>
                  ))}
                </div>

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

                {!confirmPasswordMatch && (
                  <div className="text-[#EF4444] text-sm font-medium ">
                    Passwords doesn't match
                  </div>
                )}

                <div className="w-full py-2 text-left text-sm ">
                  {/* <FormLabel>Terms and Conditions</FormLabel> */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      className="w-4 h-4 text-[#117C35]  rounded border-[#117C35]
       border focus:ring-[#117C35] data-[state=checked]:bg-[#117C35]"
                      onCheckedChange={(checked) =>
                        setTerms(checked ? "on" : "off")
                      }
                      value={terms}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
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
                    </label>
                  </div>
                </div>

                <Button
                  size="lg"
                  type="submit"
                  className="w-full !mt-8"
                  disabled={isLoading}
                >
                  Sign up
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
