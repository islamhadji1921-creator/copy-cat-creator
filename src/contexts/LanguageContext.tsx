import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "fr";

interface Translations {
  // Header
  nav: {
    weightLoss: string;
    strength: string;
    antiAging: string;
    hairGrowth: string;
    mood: string;
    more: string;
    nad: string;
    womensHealth: string;
    mensHealth: string;
    login: string;
    getStarted: string;
  };
  // Hero
  hero: {
    rating: string;
    reviews: string;
    headline: string;
    headlineHighlight: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    price: string;
    perMonth: string;
    eligibilityTitle: string;
    eligibilityDesc: string;
    findOut: string;
  };
  // Products
  products: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    weightLossProgram: string;
    weightLossDesc: string;
    antiAgingCleanser: string;
    antiAgingDesc: string;
    hairGrowthSerum: string;
    hairGrowthDesc: string;
    strengthSupplement: string;
    strengthDesc: string;
    moodEnhancer: string;
    moodDesc: string;
    nadSupplement: string;
    nadDesc: string;
  };
  // Personalized Plan
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
  // Promo Cards
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
  // Science Nature
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
  // FAQ
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
  // Resources
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
  // Footer
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
  // Common
  common: {
    perMonth: string;
  };
}

const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      weightLoss: "إنقاص الوزن",
      strength: "القوة",
      antiAging: "مكافحة الشيخوخة",
      hairGrowth: "نمو الشعر",
      mood: "المزاج",
      more: "المزيد",
      nad: "NAD+",
      womensHealth: "صحة المرأة",
      mensHealth: "صحة الرجل",
      login: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
    },
    hero: {
      rating: "4.5",
      reviews: "(453 تقييم)",
      headline: "سيماجلوتايد المركب لـ",
      headlineHighlight: "إنقاص الوزن",
      benefit1: "نفس المكون الفعال في Wegovy® و Ozempic®",
      benefit2: "بدون رسوم مخفية",
      benefit3: "توصيل مجاني",
      price: "39,000 دج",
      perMonth: "/شهر",
      eligibilityTitle: "هل هذا مناسب لك؟",
      eligibilityDesc: "قم بتقييم سريع لمعرفة ذلك",
      findOut: "اكتشف",
    },
    products: {
      sectionLabel: "منتجاتنا",
      sectionTitle: "أدوية بأسعار معقولة",
      sectionSubtitle: "بدون تأمين",
      weightLossProgram: "برنامج إنقاص الوزن",
      weightLossDesc: "إدارة وزن مثبتة علمياً",
      antiAgingCleanser: "منظف مكافحة الشيخوخة",
      antiAgingDesc: "جدد بشرتك بشكل طبيعي",
      hairGrowthSerum: "سيروم نمو الشعر",
      hairGrowthDesc: "عزز نمو الشعر الصحي",
      strengthSupplement: "مكمل القوة",
      strengthDesc: "ابنِ كتلة عضلية خالية من الدهون",
      moodEnhancer: "محسن المزاج",
      moodDesc: "ادعم صحتك النفسية",
      nadSupplement: "مكمل NAD+",
      nadDesc: "طاقة خلوية وطول العمر",
    },
    personalizedPlan: {
      headline: "أنقص وزنك مع خطة مصممة خصيصاً لك",
      feature1: "جرعات دوائية مخصصة",
      feature2: "استشارات فردية مع مقدم الرعاية",
      feature3: "مراقبة صحية مستمرة",
      feature4: "خطط اشتراك مرنة",
      feature5: "دعم طبي على مدار الساعة",
      checkEligibility: "تحقق من أهليتك",
      disclaimer: "*قد تختلف النتائج. استشر مقدم الرعاية الصحية لتحديد ما إذا كان هذا العلاج مناسباً لك.",
    },
    promo: {
      card1Title: "تقدم في العمر بثقة",
      card1Subtitle: "علاجات مكافحة الشيخوخة",
      card1PriceNote: "الشهر الأول",
      card2Title: "جدد بشرتك",
      card2Subtitle: "عناية فاخرة بالبشرة",
      card3Title: "عزز طاقتك الخلوية",
      card3Subtitle: "علاج NAD+",
      learnMore: "اعرف المزيد",
      firstMonth: "الشهر الأول",
    },
    science: {
      headline1: "اكتشف انسجام",
      science: "العلم",
      and: "و",
      nature: "الطبيعة",
      description: "تجمع تركيباتنا بين أحدث العلوم الصيدلانية والمكونات الطبيعية، مما يضمن علاجات فعالة تعمل مع جسمك وليس ضده.",
      exploreProducts: "استكشف المنتجات",
      crueltyFree: "خالي من القسوة",
      ecoFriendly: "صديق للبيئة",
      parabenFree: "خالي من البارابين",
      siliconeFree: "خالي من السيليكون",
      sulphateFree: "خالي من الكبريتات",
      glutenFree: "خالي من الجلوتين",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته عن برامجنا",
      q1: "ما هي الولايات التي تخدمون فيها برامج GLP-1؟",
      a1: "نخدم حالياً المرضى في 48 ولاية. قد تنطبق قيود في بعض الولايات بسبب اللوائح المحلية. تواصل مع فريق الدعم لتأكيد التوفر في منطقتك.",
      q2: "هل تقبلون التأمين؟",
      a2: "نعمل حالياً بنظام الدفع النقدي للحفاظ على أسعارنا شفافة ومعقولة. ومع ذلك، قد تتمكن من استخدام أموال HSA أو FSA لعلاجاتك.",
      q3: "ما الأدوية التي يصفها أطباؤكم؟",
      a3: "يصف مقدمو الرعاية الصحية المرخصون لدينا أدوية معتمدة من FDA وإصدارات مركبة عند الاقتضاء. يشمل ذلك Semaglutide و Tirzepatide وعلاجات أخرى قائمة على الأدلة.",
      q4: 'ما هي ضمان "نفس السعر لكل جرعة"؟',
      a4: "على عكس البرامج الأخرى التي تزيد الأسعار مع زيادة الجرعة، نحافظ على تكلفتك الشهرية ثابتة بغض النظر عن الجرعة الموصوفة.",
      q5: "هل تشمل خططكم الوصفات والأدوية؟",
      a5: "نعم! يشمل اشتراكك الشهري استشارتك مع مقدم مرخص، والوصفة نفسها، وجميع الأدوية المشحونة مباشرة إلى بابك. لا توجد رسوم مخفية.",
    },
    resources: {
      title: "دليلك للصحة والعافية",
      subtitle: "يبدأ من هنا",
      weightLoss: "إنقاص الوزن",
      weightLossDesc: "اكتشف استراتيجيات مدعومة علمياً لإدارة وزن مستدامة وصحة التمثيل الغذائي.",
      healthyAging: "الشيخوخة الصحية",
      healthyAgingDesc: "تعرف على العلاجات التي يمكن أن تساعدك على التقدم في العمر بأناقة والحفاظ على حيويتك.",
      hairGrowth: "نمو الشعر",
      hairGrowthDesc: "استكشف حلولاً فعالة لاستعادة الشعر والحفاظ على شعر صحي.",
      womensHormones: "هرمونات المرأة",
      womensHormonesDesc: "فهم الصحة الهرمونية والعلاجات المصممة خصيصاً لاحتياجات المرأة الفريدة.",
    },
    footer: {
      ctaTitle: "هل أنت مستعد لبدء رحلتك الصحية؟",
      ctaDesc: "انضم إلى آلاف الأشخاص الذين غيروا صحتهم مع خططنا العلاجية المخصصة.",
      ctaButton: "ابدأ اليوم",
      productsTitle: "المنتجات",
      companyTitle: "الشركة",
      supportTitle: "الدعم",
      legalTitle: "قانوني",
      aboutUs: "من نحن",
      careers: "وظائف",
      press: "الصحافة",
      blog: "المدونة",
      helpCenter: "مركز المساعدة",
      contactUs: "اتصل بنا",
      shipping: "الشحن",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      disclaimer: "هذه البيانات لم يتم تقييمها من قبل الهيئات الصحية. هذا المنتج ليس مخصصاً لتشخيص أو علاج أو شفاء أو منع أي مرض.",
      copyright: "© 2024 رونق الحياة. جميع الحقوق محفوظة.",
      tagline: "حلول رعاية صحية مخصصة توصل إلى بابك.",
    },
    common: {
      perMonth: "/شهر",
    },
  },
  fr: {
    nav: {
      weightLoss: "Perte de Poids",
      strength: "Force",
      antiAging: "Anti-Âge",
      hairGrowth: "Croissance Capillaire",
      mood: "Humeur",
      more: "Plus",
      nad: "NAD+",
      womensHealth: "Santé Féminine",
      mensHealth: "Santé Masculine",
      login: "Connexion",
      getStarted: "Commencer",
    },
    hero: {
      rating: "4.5",
      reviews: "(453 avis)",
      headline: "Sémaglutide Composé pour la",
      headlineHighlight: "Perte de Poids",
      benefit1: "Même ingrédient que Wegovy® et Ozempic®",
      benefit2: "Sans frais cachés",
      benefit3: "Livraison gratuite",
      price: "39 000 DA",
      perMonth: "/mois",
      eligibilityTitle: "Est-ce fait pour vous ?",
      eligibilityDesc: "Faites une évaluation rapide pour le savoir",
      findOut: "Découvrir",
    },
    products: {
      sectionLabel: "Nos Médicaments",
      sectionTitle: "Médicaments Abordables",
      sectionSubtitle: "Sans Assurance",
      weightLossProgram: "Programme Perte de Poids",
      weightLossDesc: "Gestion du poids cliniquement prouvée",
      antiAgingCleanser: "Nettoyant Anti-Âge",
      antiAgingDesc: "Rajeunissez votre peau naturellement",
      hairGrowthSerum: "Sérum Croissance Capillaire",
      hairGrowthDesc: "Favorisez une croissance saine des cheveux",
      strengthSupplement: "Supplément de Force",
      strengthDesc: "Développez une masse musculaire maigre",
      moodEnhancer: "Améliorateur d'Humeur",
      moodDesc: "Soutenez votre bien-être mental",
      nadSupplement: "Supplément NAD+",
      nadDesc: "Énergie cellulaire et longévité",
    },
    personalizedPlan: {
      headline: "Perdez du poids avec un plan fait pour vous",
      feature1: "Dosage médicamenteux personnalisé",
      feature2: "Consultations individuelles avec le médecin",
      feature3: "Suivi de santé continu",
      feature4: "Plans d'abonnement flexibles",
      feature5: "Support clinique 24h/24",
      checkEligibility: "Vérifiez votre éligibilité",
      disclaimer: "*Les résultats peuvent varier. Consultez un professionnel de santé pour déterminer si ce traitement vous convient.",
    },
    promo: {
      card1Title: "Vieillissez avec confiance",
      card1Subtitle: "Traitements anti-âge",
      card1PriceNote: "premier mois",
      card2Title: "Rajeunissez votre peau",
      card2Subtitle: "Soins premium",
      card3Title: "Boostez l'énergie cellulaire",
      card3Subtitle: "Thérapie NAD+",
      learnMore: "En savoir plus",
      firstMonth: "premier mois",
    },
    science: {
      headline1: "Découvrez l'harmonie entre",
      science: "science",
      and: "et",
      nature: "nature",
      description: "Nos formulations combinent la science pharmaceutique de pointe avec des ingrédients naturels, garantissant des traitements efficaces qui travaillent avec votre corps, pas contre lui.",
      exploreProducts: "Explorer les Produits",
      crueltyFree: "Sans Cruauté",
      ecoFriendly: "Écologique",
      parabenFree: "Sans Parabène",
      siliconeFree: "Sans Silicone",
      sulphateFree: "Sans Sulfate",
      glutenFree: "Sans Gluten",
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur nos programmes",
      q1: "Dans quels états proposez-vous les programmes GLP-1 ?",
      a1: "Nous servons actuellement des patients dans 48 états. Des restrictions peuvent s'appliquer dans certains états en raison de réglementations locales. Contactez notre équipe support pour confirmer la disponibilité dans votre région.",
      q2: "Acceptez-vous l'assurance ?",
      a2: "Nous fonctionnons actuellement sur un modèle de paiement direct pour maintenir nos prix transparents et abordables. Cependant, vous pouvez utiliser vos fonds HSA ou FSA pour vos traitements.",
      q3: "Quels médicaments vos médecins prescrivent-ils ?",
      a3: "Nos professionnels de santé agréés prescrivent des médicaments approuvés par la FDA et des versions composées le cas échéant. Cela inclut le Sémaglutide, le Tirzépatide et d'autres traitements fondés sur des preuves.",
      q4: 'Quelle est notre garantie "Même Prix à Chaque Dose" ?',
      a4: "Contrairement à d'autres programmes qui augmentent les prix avec l'augmentation de la dose, nous maintenons votre coût mensuel identique quelle que soit la dose prescrite.",
      q5: "Vos plans incluent-ils les prescriptions et médicaments ?",
      a5: "Oui ! Votre abonnement mensuel comprend votre consultation avec un médecin agréé, la prescription elle-même, et tous les médicaments livrés directement chez vous. Pas de frais cachés.",
    },
    resources: {
      title: "Votre guide vers la santé et le bien-être",
      subtitle: "commence ici",
      weightLoss: "Perte de Poids",
      weightLossDesc: "Découvrez des stratégies scientifiquement prouvées pour une gestion durable du poids et une santé métabolique optimale.",
      healthyAging: "Vieillissement Sain",
      healthyAgingDesc: "Découvrez les traitements qui peuvent vous aider à vieillir gracieusement et à maintenir votre vitalité.",
      hairGrowth: "Croissance Capillaire",
      hairGrowthDesc: "Explorez des solutions efficaces pour la restauration capillaire et le maintien de cheveux sains.",
      womensHormones: "Hormones Féminines",
      womensHormonesDesc: "Comprendre la santé hormonale et les traitements adaptés aux besoins uniques des femmes.",
    },
    footer: {
      ctaTitle: "Prêt à commencer votre parcours bien-être ?",
      ctaDesc: "Rejoignez des milliers de personnes qui ont transformé leur santé avec nos plans de traitement personnalisés.",
      ctaButton: "Commencez Aujourd'hui",
      productsTitle: "Produits",
      companyTitle: "Entreprise",
      supportTitle: "Support",
      legalTitle: "Légal",
      aboutUs: "À Propos",
      careers: "Carrières",
      press: "Presse",
      blog: "Blog",
      helpCenter: "Centre d'Aide",
      contactUs: "Contactez-nous",
      shipping: "Livraison",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      disclaimer: "Ces déclarations n'ont pas été évaluées par les autorités sanitaires. Ce produit n'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie.",
      copyright: "© 2024 Ronaq El Hayat. Tous droits réservés.",
      tagline: "Solutions de santé personnalisées livrées à votre porte.",
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
