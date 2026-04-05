import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, Cpu, Mouse, Gamepad2, Wifi, HardDrive } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    { title: t.products.pcConfigs, description: t.products.pcConfigsDesc, icon: Cpu, price: "45,000 دج" },
    { title: t.products.monitors, description: t.products.monitorsDesc, icon: Monitor, price: "25,000 دج" },
    { title: t.products.accessories, description: t.products.accessoriesDesc, icon: Mouse, price: "3,500 دج" },
    { title: t.products.gaming, description: t.products.gamingDesc, icon: Gamepad2, price: "85,000 دج" },
    { title: t.products.networking, description: t.products.networkingDesc, icon: Wifi, price: "8,000 دج" },
    { title: t.products.storage, description: t.products.storageDesc, icon: HardDrive, price: "12,000 دج" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <ScrollReveal className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {t.products.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            {t.products.sectionTitle}
            <br />
            <span className="text-muted-foreground">{t.products.sectionSubtitle}</span>
          </h2>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{product.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{product.price}</span>
                    <Button
                      size="sm"
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
                    >
                      {t.nav.getStarted}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
