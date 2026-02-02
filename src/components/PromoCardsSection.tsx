import { ArrowRight } from "lucide-react";
import antiAging from "@/assets/anti-aging.jpg";
import healthyAging from "@/assets/healthy-aging.jpg";
import nadSupplement from "@/assets/nad-supplement.jpg";

const promoCards = [
  {
    title: "Age with confidence",
    subtitle: "Anti-aging treatments",
    price: "$119",
    priceNote: "first month",
    image: healthyAging,
    gradient: "from-amber-500/80 to-orange-600/80",
  },
  {
    title: "Rejuvenate your skin",
    subtitle: "Premium skincare",
    price: "$84",
    priceNote: "/mo",
    image: antiAging,
    gradient: "from-rose-400/80 to-pink-600/80",
  },
  {
    title: "Boost cellular energy",
    subtitle: "NAD+ therapy",
    price: "$99",
    priceNote: "/mo",
    image: nadSupplement,
    gradient: "from-violet-500/80 to-purple-700/80",
  },
];

const PromoCardsSection = () => {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="mb-1 text-sm font-medium text-white/80">
                  {card.subtitle}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {card.title}
                </h3>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {card.price}
                  </span>
                  <span className="text-sm text-white/80">{card.priceNote}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCardsSection;
