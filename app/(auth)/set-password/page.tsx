"use client";

import { useEffect, useRef, useState } from "react";
import { Circle, CircleDot, Info } from "lucide-react";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
import { Input } from "@/components/ui/input";
import SetPasswordDialog from "@/components/dialogs/set-password-dialog";
import ErrorDialog from "@/components/dialogs/error-dialog";
import Logo from "@/components/logo";
import { passwordConstraints } from "@/constants";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [constraints, setConstraints] = useState(passwordConstraints);
  const [confirmPasswordMatch, setConfirmPasswordMatch] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

    try {
      // TODO: on submit functionality
      setSuccessModal(true);
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
  }, [form, form.watch]);

  return (
    <>
      <div className="flex flex-1 md:gap-5 lg:gap-10 items-center">
        <div className="flex  flex-col h-full items-start w-full">
          <Logo />

          <div className="space-y-5 md:space-y-8 mt-4  xl:mt-16 w-full">
            <div className="font-bold text-4xl space-y-2 ">
              <h2>Set your New Password</h2>
            </div>

            <div>
              Enter a new password for your Bettersvce account. Make sure it’s
              strong and secure.
            </div>

            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full "
              >
                {/* INPUT FIELDS */}
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
                            placeholder="Enter new password"
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
                            placeholder="Re-Enter new password"
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
                    Passwords doesn&apos;t match
                  </div>
                )}

                <Button
                  size="lg"
                  type="submit"
                  className="w-full !mt-8"
                  disabled={isLoading}
                >
                  Save New Password
                </Button>
              </form>
            </Form>
          </div>

          <div className="py-4 lg:py-8 flex items-center gap-2 text-sm text-[#117C35] ">
            <Info className=" flex-shrink-0 size-6" />

            <div>
              Once you save your new password, you will be redirected to the
              login page. If you encounter any issues, please contact our{" "}
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
            <Image alt="login" src="/set_password.svg" fill />
          </div>
        </div>
      </div>

      <SetPasswordDialog
        isOpen={successModal}
        onClose={() => {
          setSuccessModal(!successModal);
        }}
      />

      <ErrorDialog
        isOpen={errorModal}
        onClose={() => setErrorModal(!errorModal)}
        reloadHandler={() => {
          // formRef.current?.reset();
          setErrorModal(!errorModal);
        }}
      />
    </>
  );
};

export default ResetPasswordPage;
