import { useState } from "react";

import { useGigsStore } from "@/stores/gigs-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";

interface CreateGigDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Enter a valid title",
  }),
  description: z
    .string()
    .min(120, {
      message:
        "120-160 characters is the recommended length for easy comprehension ",
    })
    .max(160, {
      message:
        "120-160 characters is the recommended length for easy comprehension ",
    }),
  category: z.string().min(3, {
    message: "Enter a valid category",
  }),
  price: z.number().min(1, {
    message: "Enter a valid price",
  }),

  // TODO: ADD MEDIA
});

const CreateGigDialog = ({ isOpen, onClose }: CreateGigDialogProps) => {
  const { getGigsByUser } = useGigsStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Input validation
    if (!form.formState.isValid) return;

    try {
      // TODO: create functionality

      console.log("Create form values", values);
    } catch (error: any) {
      toast.error("Something went wrong");

      console.log("Error while creating a new gig:", error);
    } finally {
      router;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle>Create a New Gig</DialogTitle>
          <DialogDescription>
            Start a new project and bring your ideas to life.
          </DialogDescription>
        </DialogHeader>
        {/* CONTENT */}
        <div className="space-y-3">
          <Form {...form}>
            <form onScroll={form.handleSubmit(onSubmit)}>
              {/* INPUT FIELDS */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gig Title</FormLabel>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type="submit" className="rounded-xl">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGigDialog;
