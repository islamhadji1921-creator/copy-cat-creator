import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import gamingPc from "@/assets/gaming-pc-build.jpg";
import monitorSetup from "@/assets/monitor-setup.jpg";
import pcComponents from "@/assets/pc-components.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const PromoCardsSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const promoCards = [
    { title: t.promo.card1Title, subtitle: t.promo.card1Subtitle, price: "65,000 دج", priceNote: t.promo.firstMonth, image: gamingPc, gradient: "from-red-600/80 to-red-900/80" },
    { title: t.promo.card2Title, subtitle: t.promo.card2Subtitle, price: "35,000 دج", priceNote: t.promo.firstMonth, image: monitorSetup, gradient: "from-gray-700/80 to-gray-900/80" },
    { title: t.promo.card3Title, subtitle: t.promo.card3Subtitle, price: "15,000 دج", priceNote: t.promo.firstMonth, image: pcComponents, gradient: "from-red-500/80 to-gray-800/80" },
  ];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid gap-6 md:grid-cols-3">
          {promoCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-[3/4] lg:aspect-[4/5]">
                <motion.img src={card.image} alt={card.title} whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="mb-1 text-sm font-medium text-white/80">{card.subtitle}</p>
                <h3 className="mb-3 text-2xl font-bold text-white">{card.title}</h3>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{card.price}</span>
                  <span className="text-sm text-white/80">{card.priceNote}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline group/link">
                  {t.promo.learnMore}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PromoCardsSection;
