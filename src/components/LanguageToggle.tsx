import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-muted/50 p-1">
      <motion.button
        onClick={() => setLanguage("ar")}
        className={`relative rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          language === "ar"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "ar" && (
          <motion.div
            layoutId="language-toggle"
            className="absolute inset-0 rounded-full bg-primary"
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">ع</span>
      </motion.button>
      <motion.button
        onClick={() => setLanguage("fr")}
        className={`relative rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          language === "fr"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "fr" && (
          <motion.div
            layoutId="language-toggle"
            className="absolute inset-0 rounded-full bg-primary"
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">FR</span>
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
