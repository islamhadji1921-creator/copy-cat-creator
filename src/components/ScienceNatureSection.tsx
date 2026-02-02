import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, FlaskConical, Sparkles, Ban, Droplets, Wheat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import scienceNature from "@/assets/science-nature.jpg";

const certifications = [
  { icon: Ban, label: "Cruelty Free" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: FlaskConical, label: "Paraben Free" },
  { icon: Sparkles, label: "Silicone Free" },
  { icon: Droplets, label: "Sulphate Free" },
  { icon: Wheat, label: "Gluten Free" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ScienceNatureSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <motion.img
              src={scienceNature}
              alt="Science and nature harmony"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl shadow-lg"
            />
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right">
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Discover the harmony of{" "}
                <span className="text-primary">science</span> and{" "}
                <span className="text-primary">nature</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.1}>
              <p className="mb-8 text-lg text-muted-foreground">
                Our formulations combine cutting-edge pharmaceutical science with
                natural ingredients, ensuring effective treatments that work with
                your body, not against it.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="mb-10 flex flex-wrap gap-4">
                <Button className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
                  Explore Products
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </div>
            </ScrollReveal>

            {/* Certifications Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-3 gap-4 sm:grid-cols-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/50 p-4 text-center cursor-pointer hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <cert.icon className="h-6 w-6 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {cert.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceNatureSection;
