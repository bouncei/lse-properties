import InspectionForm from "@/components/forms/InspectionForm";

export const metadata = {
  title: "Schedule Inspection | LSE Properties",
  description: "Schedule a property inspection with LSE Properties",
};

export default function ScheduleInspection() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Schedule an Inspection</h1>
          <p className="text-muted-foreground">
            Fill out the form below to schedule a property inspection. We'll get
            back to you within 24 hours to confirm your appointment.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <InspectionForm />
        </div>
      </div>
    </div>
  );
}
