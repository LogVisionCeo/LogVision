import { TripForm } from "../trip-form";

export default function TripFormExample() {
  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="p-6 bg-background">
      <TripForm onSubmit={handleSubmit} />
    </div>
  );
}
