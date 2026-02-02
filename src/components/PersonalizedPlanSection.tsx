import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymFitness from "@/assets/gym-fitness.jpg";

const features = [
  "Personalized medication dosing",
  "1-on-1 provider consultations",
  "Ongoing health monitoring",
  "Flexible subscription plans",
  "24/7 clinical support",
];

const PersonalizedPlanSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymFitness}
          alt="Fitness background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-xl">
          <h2 className="mb-6 text-3xl font-bold text-background lg:text-4xl xl:text-5xl">
            Lose weight with a plan made just for you
          </h2>

          <ul className="mb-8 flex flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-background/90">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90">
              Get started
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-background/30 bg-transparent px-8 py-6 text-lg font-medium text-background hover:bg-background/10"
            >
              See if you're eligible
            </Button>
          </div>

          <p className="mt-6 text-xs text-background/60">
            *Results may vary. Consult with a healthcare provider to determine
            if this treatment is right for you. Individual results depend on
            adherence to the program and lifestyle factors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedPlanSection;
