import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import antiAging from "@/assets/anti-aging.jpg";
import hairGrowth from "@/assets/hair-growth.jpg";
import strength from "@/assets/strength.jpg";
import mood from "@/assets/mood.jpg";
import nadSupplement from "@/assets/nad-supplement.jpg";

const products = [
  {
    title: "Weight Loss Program",
    price: "$149",
    period: "/mo",
    image: weightLossLifestyle,
    description: "Clinically proven weight management",
  },
  {
    title: "Anti-Aging Cleanser",
    price: "$49",
    period: "/mo",
    image: antiAging,
    description: "Rejuvenate your skin naturally",
  },
  {
    title: "Hair Growth Serum",
    price: "$89",
    period: "/mo",
    image: hairGrowth,
    description: "Promote healthy hair growth",
  },
  {
    title: "Strength Supplement",
    price: "$79",
    period: "/mo",
    image: strength,
    description: "Build lean muscle mass",
  },
  {
    title: "Mood Enhancer",
    price: "$59",
    period: "/mo",
    image: mood,
    description: "Support mental wellness",
  },
  {
    title: "NAD+ Supplement",
    price: "$129",
    period: "/mo",
    image: nadSupplement,
    description: "Cellular energy & longevity",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Meds
          </span>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Medication Made Affordable
            <br />
            <span className="text-muted-foreground">Without The Insurance</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.period}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
