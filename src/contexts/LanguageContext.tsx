import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "fr";

interface Translations {
  nav: {
    products: string;
    configs: string;
    monitors: string;
    accessories: string;
    delivery: string;
    more: string;
    contact: string;
    support: string;
    order: string;
    login: string;
    getStarted: string;
  };
  hero: {
    navHome: string;
    navProducts: string;
    navAbout: string;
    navContact: string;
    cta: string;
    badgeNew: string;
    badgeText: string;
    headline1: string;
    headline2: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    partnersLabel: string;
  };
  products: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    pcConfigs: string;
    pcConfigsDesc: string;
    monitors: string;
    monitorsDesc: string;
    accessories: string;
    accessoriesDesc: string;
    gaming: string;
    gamingDesc: string;
    networking: string;
    networkingDesc: string;
    storage: string;
    storageDesc: string;
  };
  personalizedPlan: {
    headline: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    checkEligibility: string;
    disclaimer: string;
  };
  promo: {
    card1Title: string;
    card1Subtitle: string;
    card1PriceNote: string;
    card2Title: string;
    card2Subtitle: string;
    card3Title: string;
    card3Subtitle: string;
    learnMore: string;
    firstMonth: string;
  };
  science: {
    headline1: string;
    science: string;
    and: string;
    nature: string;
    description: string;
    exploreProducts: string;
    crueltyFree: string;
    ecoFriendly: string;
    parabenFree: string;
    siliconeFree: string;
    sulphateFree: string;
    glutenFree: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
  };
  resources: {
    title: string;
    subtitle: string;
    weightLoss: string;
    weightLossDesc: string;
    healthyAging: string;
    healthyAgingDesc: string;
    hairGrowth: string;
    hairGrowthDesc: string;
    womensHormones: string;
    womensHormonesDesc: string;
  };
  footer: {
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    productsTitle: string;
    companyTitle: string;
    supportTitle: string;
    legalTitle: string;
    aboutUs: string;
    careers: string;
    press: string;
    blog: string;
    helpCenter: string;
    contactUs: string;
    shipping: string;
    privacyPolicy: string;
    termsOfService: string;
    disclaimer: string;
    copyright: string;
    tagline: string;
  };
  common: {
    perMonth: string;
  };
}

const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      products: "المنتجات",
      configs: "تجميعات",
      monitors: "شاشات",
      accessories: "إكسسوارات",
      delivery: "التوصيل",
      more: "المزيد",
      contact: "اتصل بنا",
      support: "الدعم",
      order: "اطلب الآن",
      login: "تسجيل الدخول",
      getStarted: "اطلب الآن",
    },
    hero: {
      navHome: "الرئيسية",
      navProducts: "المنتجات",
      navAbout: "من نحن",
      navContact: "اتصل بنا",
      cta: "اطلب الآن",
      badgeNew: "جديد",
      badgeText: "تجميعات حواسيب احترافية 2026 متوفرة الآن",
      headline1: "أقوى تجميعات",
      headline2: "الحواسيب في سطيف",
      subheading: "Itech Pro العلمة - سطيف، شارع فلسطين 🏠 تجميعات حواسيب احترافية، شاشات وإكسسوارات الكمبيوتر بأفضل الأسعار. توصيل لـ 58 ولاية 🚚",
      ctaPrimary: "ابدأ طلبك",
      ctaSecondary: "شاهد المنتجات",
      partnersLabel: "نعمل مع أفضل العلامات التجارية العالمية",
    },
    products: {
      sectionLabel: "منتجاتنا",
      sectionTitle: "أجهزة كمبيوتر بأسعار",
      sectionSubtitle: "تنافسية",
      pcConfigs: "تجميعات حواسيب 💻",
      pcConfigsDesc: "تجميعات مخصصة حسب احتياجاتك",
      monitors: "شاشات",
      monitorsDesc: "شاشات عالية الجودة لجميع الاستخدامات",
      accessories: "إكسسوارات الكمبيوتر",
      accessoriesDesc: "كل ما تحتاجه من ملحقات",
      gaming: "أجهزة الألعاب",
      gamingDesc: "تجهيزات gaming احترافية",
      networking: "شبكات",
      networkingDesc: "حلول الشبكات والاتصال",
      storage: "تخزين",
      storageDesc: "حلول تخزين سريعة وموثوقة",
    },
    personalizedPlan: {
      headline: "احصل على جهاز مصمم خصيصاً لك",
      feature1: "اختيار القطع حسب ميزانيتك",
      feature2: "استشارة مجانية مع خبرائنا",
      feature3: "ضمان على جميع المنتجات",
      feature4: "خدمة ما بعد البيع",
      feature5: "دعم تقني على مدار الساعة",
      checkEligibility: "استشرنا مجاناً",
      disclaimer: "*الأسعار قابلة للتغيير حسب توفر القطع والسوق.",
    },
    promo: {
      card1Title: "تجميعة Gaming",
      card1Subtitle: "أداء خارق للألعاب",
      card1PriceNote: "ابتداءً من",
      card2Title: "تجميعة مكتبية",
      card2Subtitle: "للعمل والدراسة",
      card3Title: "ترقية جهازك",
      card3Subtitle: "أعد الحياة لجهازك",
      learnMore: "اعرف المزيد",
      firstMonth: "ابتداءً من",
    },
    science: {
      headline1: "اكتشف انسجام",
      science: "الجودة",
      and: "و",
      nature: "الأداء",
      description: "نختار أفضل القطع من أقوى العلامات التجارية العالمية لنقدم لك تجميعات بأعلى أداء وأفضل سعر.",
      exploreProducts: "استكشف المنتجات",
      crueltyFree: "ضمان أصلي",
      ecoFriendly: "توصيل آمن",
      parabenFree: "قطع أصلية",
      siliconeFree: "أسعار تنافسية",
      sulphateFree: "دعم تقني",
      glutenFree: "خدمة ممتازة",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته عن خدماتنا",
      q1: "هل تقومون بالتوصيل لجميع الولايات؟",
      a1: "نعم، نوفر التوصيل لـ 58 ولاية عبر خدمات الشحن الموثوقة. 🚚",
      q2: "كيف يمكنني طلب تجميعة مخصصة؟",
      a2: "تواصل معنا عبر الهاتف أو البريد الإلكتروني وسنساعدك في اختيار القطع المناسبة لاحتياجاتك وميزانيتك.",
      q3: "هل تقدمون ضمان على المنتجات؟",
      a3: "نعم، جميع منتجاتنا تأتي مع ضمان المصنع الأصلي.",
      q4: "ما هي طرق الدفع المتاحة؟",
      a4: "نقبل الدفع نقداً عند الاستلام، التحويل البنكي، و CCP.",
      q5: "أين يقع محلكم؟",
      a5: "نحن في العلمة - سطيف، شارع فلسطين 🏠. مرحباً بكم في أي وقت!",
    },
    resources: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك",
      weightLoss: "📞 الهاتف",
      weightLossDesc: "0772 06 13 98",
      healthyAging: "📞 الهاتف 2",
      healthyAgingDesc: "+213 551 13 87 81",
      hairGrowth: "📧 البريد الإلكتروني",
      hairGrowthDesc: "xdp51919@gmail.com",
      womensHormones: "📍 العنوان",
      womensHormonesDesc: "شارع فلسطين، العلمة - سطيف",
    },
    footer: {
      ctaTitle: "هل أنت مستعد لتجميع حاسوبك؟",
      ctaDesc: "تواصل معنا اليوم واحصل على أفضل تجميعة بأفضل سعر.",
      ctaButton: "اطلب الآن",
      productsTitle: "المنتجات",
      companyTitle: "الشركة",
      supportTitle: "الدعم",
      legalTitle: "قانوني",
      aboutUs: "من نحن",
      careers: "فريقنا",
      press: "أخبارنا",
      blog: "المدونة",
      helpCenter: "مركز المساعدة",
      contactUs: "اتصل بنا",
      shipping: "التوصيل",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      disclaimer: "جميع الأسعار قابلة للتغيير حسب توفر المنتجات وظروف السوق.",
      copyright: "© 2024 Itech Pro. جميع الحقوق محفوظة.",
      tagline: "تجميعات حواسيب احترافية - العلمة، سطيف",
    },
    common: {
      perMonth: "/شهر",
    },
  },
  fr: {
    nav: {
      products: "Produits",
      configs: "Configs",
      monitors: "Écrans",
      accessories: "Accessoires",
      delivery: "Livraison",
      more: "Plus",
      contact: "Contact",
      support: "Support",
      order: "Commander",
      login: "Connexion",
      getStarted: "Commander",
    },
    hero: {
      navHome: "Accueil",
      navProducts: "Produits",
      navAbout: "À Propos",
      navContact: "Contact",
      cta: "Commander",
      badgeNew: "Nouveau",
      badgeText: "Configs PC professionnelles 2026 disponibles",
      headline1: "Les Meilleures Configs",
      headline2: "PC à Sétif",
      subheading: "Itech Pro El Eulma - Sétif, Rue Palestine 🏠 Configs PC professionnelles, écrans et accessoires aux meilleurs prix. Livraison 58 wilayas 🚚",
      ctaPrimary: "Passer Commande",
      ctaSecondary: "Voir les Produits",
      partnersLabel: "Nous travaillons avec les meilleures marques mondiales",
    },
    products: {
      sectionLabel: "Nos Produits",
      sectionTitle: "PC aux Prix",
      sectionSubtitle: "Compétitifs",
      pcConfigs: "Configs PC 💻",
      pcConfigsDesc: "Assemblages personnalisés selon vos besoins",
      monitors: "Écrans",
      monitorsDesc: "Écrans haute qualité pour tous usages",
      accessories: "Accessoires PC",
      accessoriesDesc: "Tout ce dont vous avez besoin",
      gaming: "Gaming",
      gamingDesc: "Équipements gaming professionnels",
      networking: "Réseaux",
      networkingDesc: "Solutions réseau et connectivité",
      storage: "Stockage",
      storageDesc: "Solutions de stockage rapides et fiables",
    },
    personalizedPlan: {
      headline: "Obtenez un PC conçu spécialement pour vous",
      feature1: "Choix des composants selon votre budget",
      feature2: "Consultation gratuite avec nos experts",
      feature3: "Garantie sur tous les produits",
      feature4: "Service après-vente",
      feature5: "Support technique 24h/24",
      checkEligibility: "Consultez-nous gratuitement",
      disclaimer: "*Les prix sont sujets à changement selon la disponibilité et le marché.",
    },
    promo: {
      card1Title: "Config Gaming",
      card1Subtitle: "Performance ultime",
      card1PriceNote: "à partir de",
      card2Title: "Config Bureau",
      card2Subtitle: "Travail et études",
      card3Title: "Upgrade PC",
      card3Subtitle: "Redonnez vie à votre PC",
      learnMore: "En savoir plus",
      firstMonth: "à partir de",
    },
    science: {
      headline1: "Découvrez l'harmonie entre",
      science: "qualité",
      and: "et",
      nature: "performance",
      description: "Nous sélectionnons les meilleurs composants des plus grandes marques mondiales pour vous offrir des configs haute performance au meilleur prix.",
      exploreProducts: "Explorer les Produits",
      crueltyFree: "Garantie originale",
      ecoFriendly: "Livraison sécurisée",
      parabenFree: "Pièces originales",
      siliconeFree: "Prix compétitifs",
      sulphateFree: "Support technique",
      glutenFree: "Service excellent",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur nos services",
      q1: "Livrez-vous dans toutes les wilayas ?",
      a1: "Oui, nous assurons la livraison dans les 58 wilayas via des services de transport fiables. 🚚",
      q2: "Comment commander une config personnalisée ?",
      a2: "Contactez-nous par téléphone ou email et nous vous aiderons à choisir les composants adaptés à vos besoins et budget.",
      q3: "Offrez-vous une garantie sur les produits ?",
      a3: "Oui, tous nos produits sont accompagnés de la garantie constructeur originale.",
      q4: "Quels modes de paiement acceptez-vous ?",
      a4: "Nous acceptons le paiement à la livraison, le virement bancaire et CCP.",
      q5: "Où se trouve votre magasin ?",
      a5: "Nous sommes à El Eulma - Sétif, Rue Palestine 🏠. Bienvenue à tout moment !",
    },
    resources: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour vous aider",
      weightLoss: "📞 Téléphone",
      weightLossDesc: "0772 06 13 98",
      healthyAging: "📞 Téléphone 2",
      healthyAgingDesc: "+213 551 13 87 81",
      hairGrowth: "📧 Email",
      hairGrowthDesc: "xdp51919@gmail.com",
      womensHormones: "📍 Adresse",
      womensHormonesDesc: "Rue Palestine, El Eulma - Sétif",
    },
    footer: {
      ctaTitle: "Prêt à assembler votre PC ?",
      ctaDesc: "Contactez-nous aujourd'hui et obtenez la meilleure config au meilleur prix.",
      ctaButton: "Commander Maintenant",
      productsTitle: "Produits",
      companyTitle: "Entreprise",
      supportTitle: "Support",
      legalTitle: "Légal",
      aboutUs: "À Propos",
      careers: "Notre Équipe",
      press: "Actualités",
      blog: "Blog",
      helpCenter: "Centre d'Aide",
      contactUs: "Contactez-nous",
      shipping: "Livraison",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      disclaimer: "Tous les prix sont sujets à changement selon la disponibilité des produits et les conditions du marché.",
      copyright: "© 2024 Itech Pro. Tous droits réservés.",
      tagline: "Configs PC professionnelles - El Eulma, Sétif",
    },
    common: {
      perMonth: "/mois",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
