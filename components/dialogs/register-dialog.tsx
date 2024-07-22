import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

interface RegisterDialogProps {
  email: string;
  isOpen: boolean;
  onClose: () => void;
}
const RegisterDialog = ({ email, isOpen, onClose }: RegisterDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center flex-col gap-y-4 pb-2">
          <DialogDescription className="flex flex-col items-center text-center pt-2 space-y-3">
            <div className="relative size-6 md:size-12 mr-2">
              <Image fill alt="mail" src="/sign_up_dialog.svg" />
            </div>
            <p className="text-sm font-bold">Verify your email</p>
            <p className="text-xs">
              We’ve sent a verification email to {email}. Please check your
              inbox and click the link to complete your registration.
            </p>
            <Button size="sm">Resend email</Button>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <p className=" text-muted-foreground text-xs text-center w-full">
            Didn&apos;t receive the email? Check your spam/junk folder{" "}
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
