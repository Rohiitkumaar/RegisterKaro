import { ClipboardList, CreditCard, UserCog, Mail } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      title: "Fill up Application Form",
      icon: ClipboardList,
      color: "bg-rose-400 text-white",
    },
    {
      title: "Make Online Payment",
      icon: CreditCard,
      color: "bg-emerald-400 text-white",
    },
    {
      title: "Process Application",
      icon: UserCog,
      color: "bg-orange-300 text-white",
    },
    {
      title: "Get Confirm Mail",
      icon: Mail,
      color: "bg-gray-400 text-white",
    },
  ];

  return (
    <div className="w-full bg-orange-400 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-center justify-center gap-4 lg:text-center"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${step.color}`}
              >
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-white lg:mt-4">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
