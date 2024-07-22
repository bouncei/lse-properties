import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import Image from "next/image";

interface SetPasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
const SetPasswordDialog = ({ isOpen, onClose }: SetPasswordDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center flex-col gap-y-4 pb-2">
          <DialogDescription className="flex flex-col items-center text-center pt-2 space-y-3">
            <div className="relative size-6 md:size-12 mr-2">
              <Image fill alt="mail" src="/set_password_dialog.svg" />
            </div>
            <p className="text-sm font-bold">
              New Password Saved Successfully!
            </p>
            <p className="text-xs">
              You will be redirected to the Login page shortly!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SetPasswordDialog;
