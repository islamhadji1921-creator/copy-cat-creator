import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, Truck, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroProduct from "@/assets/hero-product.jpg";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import antiAging from "@/assets/anti-aging.jpg";
import hairGrowth from "@/assets/hair-growth.jpg";
import strength from "@/assets/strength.jpg";
import mood from "@/assets/mood.jpg";

const benefits = [
  { icon: Check, text: "Same ingredient as Wegovy® & Ozempic®" },
  { icon: DollarSign, text: "No hidden fees" },
  { icon: Truck, text: "Free shipping" },
];

const galleryImages = [
  { src: heroProduct, alt: "Weight loss medication pen" },
  { src: weightLossLifestyle, alt: "Weight loss lifestyle" },
  { src: antiAging, alt: "Anti-aging skincare" },
  { src: hairGrowth, alt: "Hair growth serum" },
  { src: strength, alt: "Strength training" },
  { src: mood, alt: "Mental wellness" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [smallImages, setSmallImages] = useState([1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      setSmallImages((prev) => {
        const next1 = (prev[0] + 1) % galleryImages.length;
        const next2 = (prev[1] + 1) % galleryImages.length;
        return [next1, next2];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-wellness-teal-light to-background py-12 lg:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Rating Badge */}
            <ScrollReveal delay={0}>
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
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
                Compounded Semaglutide for{" "}
                <span className="text-primary">Weight Loss</span>
              </h1>
            </ScrollReveal>

            {/* Benefits List */}
            <ScrollReveal delay={0.2}>
              <ul className="flex flex-col gap-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Pricing */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">$296</span>
                  <span className="text-lg text-muted-foreground">/mo</span>
                </div>
                <Button className="w-fit rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Eligibility Card */}
            <ScrollReveal delay={0.5}>
              <div className="mt-2 rounded-xl border border-border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
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
            </ScrollReveal>
          </div>

          {/* Right Content - Animated Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main Large Image */}
            <div className="col-span-2 relative h-64 lg:h-80 overflow-hidden rounded-2xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Small Images with scroll animation */}
            <div className="relative h-40 lg:h-48 overflow-hidden rounded-2xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={smallImages[0]}
                  src={galleryImages[smallImages[0]].src}
                  alt={galleryImages[smallImages[0]].alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="relative h-40 lg:h-48 overflow-hidden rounded-2xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={smallImages[1]}
                  src={galleryImages[smallImages[1]].src}
                  alt={galleryImages[smallImages[1]].alt}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
