import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import healthyAging from "@/assets/healthy-aging.jpg";
import hairGrowth from "@/assets/hair-growth.jpg";
import womensHormones from "@/assets/womens-hormones.jpg";

const resources = [
  {
    title: "Weight Loss",
    description:
      "Discover science-backed strategies for sustainable weight management and metabolic health.",
    image: weightLossLifestyle,
  },
  {
    title: "Healthy Aging",
    description:
      "Learn about treatments that can help you age gracefully and maintain vitality.",
    image: healthyAging,
  },
  {
    title: "Hair Growth",
    description:
      "Explore effective solutions for hair restoration and maintaining healthy hair.",
    image: hairGrowth,
  },
  {
    title: "Women's Hormones",
    description:
      "Understanding hormonal health and treatments tailored for women's unique needs.",
    image: womensHormones,
  },
];

const ResourcesSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Your guide to health and wellness
            <br />
            <span className="text-muted-foreground">starts here</span>
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {resource.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {resource.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
