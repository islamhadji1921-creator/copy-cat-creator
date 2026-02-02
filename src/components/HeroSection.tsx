import { Star, Check, Truck, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroProduct from "@/assets/hero-product.jpg";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import antiAging from "@/assets/anti-aging.jpg";

const benefits = [
  { icon: Check, text: "Same ingredient as Wegovy® & Ozempic®" },
  { icon: DollarSign, text: "No hidden fees" },
  { icon: Truck, text: "Free shipping" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-wellness-teal-light to-background py-12 lg:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-background px-4 py-2 shadow-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? "fill-secondary text-secondary" : i === 4 ? "fill-secondary/50 text-secondary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.5</span>
              <span className="text-sm text-muted-foreground">(453 reviews)</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Compounded Semaglutide for{" "}
              <span className="text-primary">Weight Loss</span>
            </h1>

            {/* Benefits List */}
            <ul className="flex flex-col gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">$296</span>
                <span className="text-lg text-muted-foreground">/mo</span>
              </div>
              <Button className="w-fit rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Eligibility Card */}
            <div className="mt-2 rounded-xl border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Is This Right for You?</p>
                  <p className="text-sm text-muted-foreground">
                    Take a quick assessment to find out
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Find Out
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={heroProduct}
                alt="Weight loss medication pen"
                className="h-64 w-full rounded-2xl object-cover shadow-lg lg:h-80"
              />
            </div>
            <div>
              <img
                src={weightLossLifestyle}
                alt="Weight loss lifestyle"
                className="h-40 w-full rounded-2xl object-cover shadow-lg lg:h-48"
              />
            </div>
            <div>
              <img
                src={antiAging}
                alt="Anti-aging skincare"
                className="h-40 w-full rounded-2xl object-cover shadow-lg lg:h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
