import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "@/components/BlurText";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = ["Intel", "AMD", "NVIDIA", "MSI", "ASUS"];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-right"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/5" />

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navigation */}
        <nav className="flex w-full max-w-7xl mx-auto flex-row items-center justify-between px-8 py-6">
          <span className="font-instrument text-3xl tracking-tight text-white">
            Itech Pro<sup className="text-xs">®</sup>
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {[
              { label: t.hero.navHome, active: true },
              { label: t.hero.navProducts },
              { label: t.hero.navAbout },
              { label: t.hero.navContact },
            ].map((link, i) => (
              <a
                key={i}
                href="#"
                className={`font-barlow text-sm transition-colors ${
                  link.active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button className="liquid-glass rounded-full px-6 py-2.5 font-barlow text-sm text-white transition-transform hover:scale-[1.03]">
            {t.hero.cta}
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-center px-4 pt-24 md:px-8 lg:px-16 max-w-7xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass mb-8 flex w-fit items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-black">
              {t.hero.badgeNew}
            </span>
            <span className="font-barlow text-sm text-white">
              {t.hero.badgeText}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-mondwest text-6xl leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]">
            <BlurText text={t.hero.headline1} delay={100} direction="bottom" />
            <br />
            <BlurText text={t.hero.headline2} delay={500} direction="bottom" />
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 max-w-xl font-barlow text-sm font-light text-white md:text-base"
          >
            {t.hero.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6 flex flex-col items-center gap-6 sm:flex-row"
          >
            <button className="liquid-glass-strong flex items-center gap-2 rounded-full px-8 py-3 font-barlow text-sm text-white transition-transform hover:scale-[1.03]">
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 font-barlow text-sm text-white transition-opacity hover:opacity-80">
              <Play className="h-4 w-4" fill="white" />
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Partners Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass rounded-full px-4 py-1.5 font-barlow text-xs text-white">
            {t.hero.partnersLabel}
          </span>
          <div className="flex items-center gap-8 md:gap-12">
            {partners.map((name) => (
              <span
                key={name}
                className="font-instrument text-2xl italic tracking-tight text-white md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
