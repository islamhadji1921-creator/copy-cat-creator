import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import weightLossLifestyle from "@/assets/weight-loss-lifestyle.jpg";
import healthyAging from "@/assets/healthy-aging.jpg";
import hairGrowth from "@/assets/hair-growth.jpg";
import womensHormones from "@/assets/womens-hormones.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ResourcesSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const resources = [
    {
      title: t.resources.weightLoss,
      description: t.resources.weightLossDesc,
      image: weightLossLifestyle,
    },
    {
      title: t.resources.healthyAging,
      description: t.resources.healthyAgingDesc,
      image: healthyAging,
    },
    {
      title: t.resources.hairGrowth,
      description: t.resources.hairGrowthDesc,
      image: hairGrowth,
    },
    {
      title: t.resources.womensHormones,
      description: t.resources.womensHormonesDesc,
      image: womensHormones,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            {t.resources.title}
            <br />
            <span className="text-muted-foreground">{t.resources.subtitle}</span>
          </h2>
        </ScrollReveal>

        {/* Resources Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={resource.image}
                    alt={resource.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-cover"
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
                  >
                    {t.promo.learnMore}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
