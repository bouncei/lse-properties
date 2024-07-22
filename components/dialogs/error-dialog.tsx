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

interface ErrorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  reloadHandler: () => void;
}
const ErrorDialog = ({ isOpen, onClose, reloadHandler }: ErrorDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center flex-col gap-y-4 pb-2">
          <DialogDescription className="flex flex-col items-center text-center pt-2 space-y-3">
            <div className="relative size-6 md:size-12 mr-2">
              <Image fill alt="mail" src="/error_dialog.svg" />
            </div>
            <p className="text-sm font-bold">Network Delay Detected!</p>
            <p className="text-xs">
              We are experiencing some network issues at the moment. This might
              take a few more seconds.
            </p>
            <Button variant="destructive" size="sm" onClick={reloadHandler}>
              Try Again
            </Button>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="!justify-center">
          <ul className="list-disc text-muted-foreground text-xs  flex items-center justify-center flex-col ">
            <li>
              <b>Retry:</b> Please wait a moment and try again.
            </li>
            <li>
              <b>Check Connection:</b> Ensure your internet connection is
              stable.
            </li>
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorDialog;
