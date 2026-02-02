import { Button } from "@/components/ui/button";
import { Leaf, FlaskConical, Sparkles, Ban, Droplets, Wheat } from "lucide-react";
import scienceNature from "@/assets/science-nature.jpg";

const certifications = [
  { icon: Ban, label: "Cruelty Free" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: FlaskConical, label: "Paraben Free" },
  { icon: Sparkles, label: "Silicone Free" },
  { icon: Droplets, label: "Sulphate Free" },
  { icon: Wheat, label: "Gluten Free" },
];

const ScienceNatureSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={scienceNature}
              alt="Science and nature harmony"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
              Discover the harmony of{" "}
              <span className="text-primary">science</span> and{" "}
              <span className="text-primary">nature</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our formulations combine cutting-edge pharmaceutical science with
              natural ingredients, ensuring effective treatments that work with
              your body, not against it.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Button className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                Explore Products
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/50 p-4 text-center"
                >
                  <cert.icon className="h-6 w-6 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceNatureSection;
