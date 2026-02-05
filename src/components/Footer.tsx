import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const footerLinks = {
    products: [
      { label: t.nav.weightLoss, href: "#" },
      { label: t.nav.antiAging, href: "#" },
      { label: t.nav.hairGrowth, href: "#" },
      { label: t.nav.strength, href: "#" },
      { label: t.nav.mood, href: "#" },
    ],
    company: [
      { label: t.footer.aboutUs, href: "#" },
      { label: t.footer.careers, href: "#" },
      { label: t.footer.press, href: "#" },
      { label: t.footer.blog, href: "#" },
    ],
    support: [
      { label: t.footer.helpCenter, href: "#" },
      { label: t.footer.contactUs, href: "#" },
      { label: t.faq.title, href: "#" },
      { label: t.footer.shipping, href: "#" },
    ],
    legal: [
      { label: t.footer.privacyPolicy, href: "#" },
      { label: t.footer.termsOfService, href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10 py-16 lg:py-20">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              {t.footer.ctaTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mb-8 max-w-xl text-background/70">
              {t.footer.ctaDesc}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
              {t.footer.ctaButton}
              <ArrowIcon className="ms-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-12 lg:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          >
            {/* Logo & Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">
                    R
                  </span>
                </div>
                <span className="text-xl font-bold">رونق الحياة</span>
              </a>
              <p className="text-sm text-background/60">
                {t.footer.tagline}
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="mb-4 font-semibold">{t.footer.productsTitle}</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-semibold">{t.footer.companyTitle}</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 font-semibold">{t.footer.supportTitle}</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 font-semibold">{t.footer.legalTitle}</h4>
              <ul className="flex flex-col gap-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <p className="text-sm text-background/60">
            {t.footer.copyright}
          </p>
          <p className="text-xs text-background/40">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
