import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import pcAssembly from "@/assets/pc-assembly.jpg";

const PersonalizedPlanSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    t.personalizedPlan.feature1,
    t.personalizedPlan.feature2,
    t.personalizedPlan.feature3,
    t.personalizedPlan.feature4,
    t.personalizedPlan.feature5,
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={gymFitness}
          alt="Fitness background"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-foreground/95 via-foreground/80 to-foreground/40`} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h2 className="mb-6 text-3xl font-bold text-background lg:text-4xl xl:text-5xl">
            {t.personalizedPlan.headline}
          </h2>

          <ul className="mb-8 flex flex-col gap-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-background/90">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
              {t.nav.getStarted}
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-background/30 bg-transparent px-8 py-6 text-lg font-medium text-background hover:bg-background/10"
            >
              {t.personalizedPlan.checkEligibility}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-xs text-background/60"
          >
            {t.personalizedPlan.disclaimer}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedPlanSection;
