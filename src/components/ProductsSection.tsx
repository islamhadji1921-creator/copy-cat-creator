import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import antiAging from "@/assets/anti-aging.jpg";
import hairGrowth from "@/assets/hair-growth.jpg";
import strength from "@/assets/strength.jpg";
import mood from "@/assets/mood.jpg";
import nadSupplement from "@/assets/nad-supplement.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      title: t.products.weightLossProgram,
      price: "19,500 دج",
      period: t.common.perMonth,
      image: weightLossLifestyle,
      description: t.products.weightLossDesc,
    },
    {
      title: t.products.antiAgingCleanser,
      price: "6,400 دج",
      period: t.common.perMonth,
      image: antiAging,
      description: t.products.antiAgingDesc,
    },
    {
      title: t.products.hairGrowthSerum,
      price: "11,700 دج",
      period: t.common.perMonth,
      image: hairGrowth,
      description: t.products.hairGrowthDesc,
    },
    {
      title: t.products.strengthSupplement,
      price: "10,400 دج",
      period: t.common.perMonth,
      image: strength,
      description: t.products.strengthDesc,
    },
    {
      title: t.products.moodEnhancer,
      price: "7,800 دج",
      period: t.common.perMonth,
      image: mood,
      description: t.products.moodDesc,
    },
    {
      title: t.products.nadSupplement,
      price: "16,900 دج",
      period: t.common.perMonth,
      image: nadSupplement,
      description: t.products.nadDesc,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
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

        {/* Products Grid */}
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
