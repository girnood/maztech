/**
 * MAZTech | متجر ماز تيك للإلكترونيات
 * Full Bilingual (Arabic RTL / English LTR) E-Commerce Store & Order Page
 * 20 Electronics Products — Plain HTML/CSS/JavaScript — OMR (3 Decimal Places)
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. STORE CONFIGURATION & 20 ELECTRONICS PRODUCTS
  // =========================================================================
  const STORE_CONFIG = {
    currencyCode: "OMR",
    decimalPlaces: 3,
    authorisedWhatsAppNumber: "96892727487",
    storageKey: "voltedge_store_cart_v3",
    langStorageKey: "voltedge_store_lang_v3",
    mandatoryDisclaimer:
      "Educational prototype — demo products and prices — no online payment"
  };

  // 20 Real Electronics Products with Bilingual Names/Descriptions & Studio Photographs
  const PRODUCTS = [
    {
      id: "VE-101",
      category: "charging",
      price: 9.500,
      image: "assets/product-1.png",
      fallbackImage: "assets/ve-101.svg",
      ar: {
        name: "شاحن جداري فائق السرعة 65 واط بتقنية GaN منفذ USB-C",
        description:
          "محول طاقة مدمج بمنفذي USB-C و USB-A يدعم الشحن السريع لأجهزة اللابتوب والآيباد والهواتف الذكية مع حماية حرارية ذكية.",
        imageAlt: "صورة استوديو لشاحن جداري سريع 65 واط بتقنية GaN"
      },
      en: {
        name: "USB-C 65W GaN Fast Wall Charger Adapter",
        description:
          "Compact dual-port USB-C and USB-A GaN power adapter suitable for laptops, tablets, and smartphones with thermal protection.",
        imageAlt: "Studio photograph of the matte-black 65W GaN USB-C Fast Wall Charger"
      }
    },
    {
      id: "VE-102",
      category: "audio",
      price: 24.750,
      image: "assets/product-2.png",
      fallbackImage: "assets/ve-102.svg",
      ar: {
        name: "سماعة رأس لاسلكية احترافية عازلة للضوضاء للدراسة والعمل",
        description:
          "سماعة بلوتوث 5.3 محيطية بوسائد جلدية مريحة، ميكروفون مدمج نقي للاجتماعات والمحاضرات، ومنفذ سلكي 3.5 ملم إضافي.",
        imageAlt: "صورة استوديو لسماعة الرأس اللاسلكية الاحترافية"
      },
      en: {
        name: "Wireless Over-Ear Studio & Study Headphones",
        description:
          "Closed-back Bluetooth 5.3 over-ear headphones with memory-foam cushions, detachable 3.5mm cable, and clear voice microphone.",
        imageAlt: "Studio photograph of the Wireless Over-Ear Studio Headphones"
      }
    },
    {
      id: "VE-103",
      category: "desk",
      price: 18.250,
      image: "assets/product-3.png",
      fallbackImage: "assets/ve-103.svg",
      ar: {
        name: "لوحة مفاتيح ميكانيكية لاسلكية مدمجة 75% بإضاءة خلفية",
        description:
          "كيبورد ميكانيكي احترافي 84 مفتاحاً بهيكل ألمنيوم، مفاتيح تكتيكية هادئة قابلة للتبديل، ودعم كامل لنظامي Windows و macOS.",
        imageAlt: "صورة استوديو للوحة المفاتيح الميكانيكية المدمجة 75%"
      },
      en: {
        name: "Compact 75% Wireless Tactile Mechanical Keyboard",
        description:
          "84-key aluminum-frame mechanical desk keyboard with hot-swappable tactile switches, crisp LED backlight, and dual-OS layout.",
        imageAlt: "Studio photograph of the Compact 75% Tactile Mechanical Keyboard"
      }
    },
    {
      id: "VE-104",
      category: "charging",
      price: 11.900,
      image: "assets/product-4.png",
      fallbackImage: "assets/ve-104.svg",
      ar: {
        name: "موزع منافذ ألمنيوم 7 في 1 (USB-C Multiport Hub 4K)",
        description:
          "يحول منفذ USB-C واحد إلى مخرج شاشة 4K HDMI، منفذي USB 3.0 فائقي السرعة، قارئ بطاقات SD/microSD، ومدخل شحن 100 واط.",
        imageAlt: "صورة استوديو لموزع المنافذ 7 في 1 من الألمنيوم"
      },
      en: {
        name: "7-in-1 Space-Grey Aluminium USB-C Multiport Hub",
        description:
          "Expands a single USB-C port into 4K HDMI video output, dual USB 3.0 data ports, SD/microSD card readers, and 100W PD pass-through.",
        imageAlt: "Studio photograph of the 7-in-1 Aluminium USB-C Multiport Hub"
      }
    },
    {
      id: "VE-105",
      category: "audio",
      price: 14.000,
      image: "assets/product-5.png",
      fallbackImage: "assets/ve-105.svg",
      ar: {
        name: "كاميرا ويب احترافية 1080p Full-HD مع غطاء خصوصية",
        description:
          "كاميرا مكتبية بتركيز تلقائي وعدسة زجاجية عالية الوضوح، مزودة بميكروفون ستيريو مزدوج ومشبك تثبيت مرن لجميع الشاشات.",
        imageAlt: "صورة استوديو لكاميرا الويب الاحترافية 1080p"
      },
      en: {
        name: "1080p Auto-Focus Pro Study & Streaming Webcam",
        description:
          "Full-HD glass-lens USB webcam featuring rapid auto-focus, built-in privacy shutter, dual stereo mics, and universal monitor clip.",
        imageAlt: "Studio photograph of the 1080p Auto-Focus Study Webcam"
      }
    },
    {
      id: "VE-106",
      category: "desk",
      price: 10.600,
      image: "assets/product-6.png",
      fallbackImage: "assets/ve-106.svg",
      ar: {
        name: "مصباح شاشة مكتبي LED ذكي بلمس تدريجي بدون انعكاس",
        description:
          "شريط إضاءة ألمنيوم يثبت أعلى الشاشة ليضيء مساحة المكتب ولوحة المفاتيح دون أي وهج على العين، مع تحكم بدرجة حرارة اللون.",
        imageAlt: "صورة استوديو لمصباح الشاشة المكتبي LED"
      },
      en: {
        name: "Asymmetric LED Monitor Light Bar with Touch Dimmer",
        description:
          "USB-powered aluminum desk lamp that clips onto any monitor to illuminate your desk and keyboard with zero screen glare.",
        imageAlt: "Studio photograph of the LED Monitor Light Bar illuminating a desk"
      }
    },
    {
      id: "VE-107",
      category: "charging",
      price: 15.800,
      image: "assets/product-7.png",
      fallbackImage: "assets/ve-101.svg",
      ar: {
        name: "بنك طاقة محمول 20,000mAh بشاشة رقمية وشحن سريع 65 واط",
        description:
          "بطارية متنقلة بهيكل ألمنيوم متين وشاشة LED لعرض نسبة البطارية بدقة، قادرة على شحن اللابتوب والهاتف في وقت واحد.",
        imageAlt: "صورة استوديو لبنك الطاقة المحمول 20000 ملي أمبير بشاشة رقمية"
      },
      en: {
        name: "20,000mAh 65W PD Laptop & Phone Power Bank with LED Display",
        description:
          "High-capacity portable battery in matte aluminum featuring a smart digital percentage display and dual USB-C fast charging.",
        imageAlt: "Studio photograph of the 20000mAh Power Bank with LED display"
      }
    },
    {
      id: "VE-108",
      category: "audio",
      price: 19.400,
      image: "assets/product-8.png",
      fallbackImage: "assets/ve-102.svg",
      ar: {
        name: "سماعات أذن لاسلكية داخلية (TWS) بعزل ضوضاء نشط ANC",
        description:
          "سماعات بلوتوث صغيرة الحجم بصوت نقي وعميق، مع علبة شحن لاسلكية تدوم حتى 30 ساعة ومقاومة لرذاذ الماء.",
        imageAlt: "صورة استوديو لسماعات الأذن اللاسلكية مع علبة الشحن"
      },
      en: {
        name: "True Wireless ANC Noise-Cancelling In-Ear Earbuds",
        description:
          "Compact Bluetooth earbuds with active noise cancellation, 4-mic call clarity, and sleek pocket charging case.",
        imageAlt: "Studio photograph of the True Wireless ANC Earbuds in charging case"
      }
    },
    {
      id: "VE-109",
      category: "desk",
      price: 12.500,
      image: "assets/product-9.png",
      fallbackImage: "assets/ve-103.svg",
      ar: {
        name: "ماوس لاسلكي مريح (Ergonomic) متعدد الأجهزة بصوت نقر صامت",
        description:
          "فأرة مكتبية مصممة لراحة اليد لساعات العمل الطويلة، تدعم الاقتران بـ 3 أجهزة عبر البلوتوث أو مستقبل USB مع عجلة تمرير معدنية.",
        imageAlt: "صورة استوديو للماوس اللاسلكي المريح باللون الرمادي الداكن"
      },
      en: {
        name: "Ergonomic Multi-Device Silent Wireless Productivity Mouse",
        description:
          "Contoured wireless mouse with precision optical sensor, metallic fast-scroll wheel, silent switches, and 3-device pairing.",
        imageAlt: "Studio photograph of the Ergonomic Wireless Productivity Mouse"
      }
    },
    {
      id: "VE-110",
      category: "desk",
      price: 9.900,
      image: "assets/product-10.png",
      fallbackImage: "assets/ve-104.svg",
      ar: {
        name: "حامل لابتوب وتابلت مكتبي من الألمنيوم قابل لتعديل الارتفاع",
        description:
          "قاعدة مكتبية متينة ترفع شاشة اللابتوب لمستوى النظر الصحي، مع فتحات تهوية لتبريد الجهاز ووسائد سيليكون مانعة للانزلاق.",
        imageAlt: "صورة استوديو لحامل اللابتوب المكتبي المصنوع من الألمنيوم"
      },
      en: {
        name: "Adjustable Anodized Aluminium Laptop & Tablet Desk Stand",
        description:
          "Ergonomic space-grey aluminum riser stand that elevates laptops to eye level while improving airflow and desk organization.",
        imageAlt: "Studio photograph of the Adjustable Aluminium Laptop Stand"
      }
    },
    {
      id: "VE-111",
      category: "desk",
      price: 29.500,
      image: "assets/product-11.png",
      fallbackImage: "assets/ve-104.svg",
      ar: {
        name: "قرص تخزين خارجي سريع NVMe SSD سعة 1 تيرابايت منفذ USB-C",
        description:
          "وحدة تخزين خارجية فائقة السرعة (حتى 1050 ميجابايت/ثانية) بهيكل معدني مقاوم للصدمات لحفظ المشاريع والملفات الكبيرة.",
        imageAlt: "صورة استوديو لقرص التخزين الخارجي السريع NVMe SSD"
      },
      en: {
        name: "1TB Portable NVMe USB-C High-Speed External SSD",
        description:
          "Pocket-sized solid-state drive delivering up to 1050MB/s transfer speeds in a shock-resistant aluminum enclosure.",
        imageAlt: "Studio photograph of the 1TB Portable NVMe External SSD"
      }
    },
    {
      id: "VE-112",
      category: "audio",
      price: 21.000,
      image: "assets/product-12.png",
      fallbackImage: "assets/ve-105.svg",
      ar: {
        name: "ميكروفون مكتبي احترافي USB للبودكاست والمحاضرات مع فلتر صوت",
        description:
          "ميكروفون كوندنسر عالي الحساسية بقاعدة مكتبية ثابتة وزر كتم سريع ومؤشر LED، مثالي للتسجيل الصوتي والتعليم عن بعد.",
        imageAlt: "صورة استوديو للميكروفون المكتبي الاحترافي مع حامل وفلتر"
      },
      en: {
        name: "Professional USB Condenser Studio & Study Microphone",
        description:
          "Cardioid USB desktop microphone with studio pop filter, gain control dial, instant mute button, and zero-latency monitoring.",
        imageAlt: "Studio photograph of the USB Condenser Desk Microphone"
      }
    },
    {
      id: "VE-113",
      category: "desk",
      price: 26.800,
      image: "assets/product-13.png",
      fallbackImage: "assets/ve-101.svg",
      ar: {
        name: "راوتر لاسلكي ذكي ثنائي النطاق بتقنية Wi-Fi 6 فائق السرعة",
        description:
          "موجه شبكة حديث يدعم سرعات الجيل السادس Wi-Fi 6 وتغطية واسعة للمنزل والمكتب مع 4 هوائيات عالية الكسب ومنافذ جيجابت.",
        imageAlt: "صورة استوديو لراوتر الشبكة الذكي بتقنية Wi-Fi 6"
      },
      en: {
        name: "Dual-Band AX3000 Wi-Fi 6 High-Speed Smart Mesh Router",
        description:
          "Next-gen Wi-Fi 6 router engineered for lag-free video calls, study streams, and multi-device smart homes with Gigabit ports.",
        imageAlt: "Studio photograph of the Wi-Fi 6 Smart Mesh Router"
      }
    },
    {
      id: "VE-114",
      category: "audio",
      price: 42.000,
      image: "assets/product-14.png",
      fallbackImage: "assets/ve-105.svg",
      ar: {
        name: "جهاز عرض ضوئي محمول (Mini Projector) بدقة 1080p ومكبر صوت",
        description:
          "بروجكتر ذكي صغير الحجم للعروض التقديمية والأفلام، يدعم الاتصال عبر HDMI و USB-C والربط اللاسلكي بالهاتف.",
        imageAlt: "صورة استوديو لجهاز العرض الضوئي المحمول بدقة 1080p"
      },
      en: {
        name: "Compact 1080p Smart Portable LED Mini Projector",
        description:
          "Portable Full-HD projector with precision glass lens, auto keystone correction, built-in speaker, and HDMI/USB-C input.",
        imageAlt: "Studio photograph of the Compact 1080p Portable Mini Projector"
      }
    },
    {
      id: "VE-115",
      category: "charging",
      price: 16.500,
      image: "assets/product-15.png",
      fallbackImage: "assets/ve-101.svg",
      ar: {
        name: "قاعدة شحن لاسلكي مغناطيسية 3 في 1 للهاتف والساعة والسماعة",
        description:
          "محطة شحن مكتبية أنيقة ترتب مكتبك وتشحن هاتفك الذكي وساعتك وسماعتك اللاسلكية في آن واحد بدون فوضى الأسلاك.",
        imageAlt: "صورة استوديو لقاعدة الشحن اللاسلكي المغناطيسية 3 في 1"
      },
      en: {
        name: "3-in-1 Magnetic Wireless Charging Desk Stand Station",
        description:
          "All-in-one magnetic fast charging dock for smartphone, smartwatch, and wireless earbuds with weighted non-slip base.",
        imageAlt: "Studio photograph of the 3-in-1 Magnetic Wireless Charging Stand"
      }
    },
    {
      id: "VE-116",
      category: "desk",
      price: 17.900,
      image: "assets/product-16.png",
      fallbackImage: "assets/ve-103.svg",
      ar: {
        name: "لوح رسم رقمي احترافي (Graphic Tablet) مع قلم ذكي بدون بطارية",
        description:
          "تابلت رسم وتدوين ملاحظات بـ 8192 مستوى حساسية ضغط، مثالي للمصممين والطلاب والمدرسين للشرح التفاعلي.",
        imageAlt: "صورة استوديو للوح الرسم الرقمي مع القلم الإلكتروني"
      },
      en: {
        name: "Digital Graphic Drawing Pen Tablet with Battery-Free Stylus",
        description:
          "Ultra-slim digital drawing pad with 8192 pressure sensitivity levels and programmable shortcut keys for design and e-learning.",
        imageAlt: "Studio photograph of the Digital Graphic Drawing Tablet and Stylus"
      }
    },
    {
      id: "VE-117",
      category: "charging",
      price: 13.200,
      image: "assets/product-17.png",
      fallbackImage: "assets/ve-101.svg",
      ar: {
        name: "توصيلة كهربائية ذكية للحماية من التيار مع 4 مقابس و4 منافذ USB",
        description:
          "مشترك طاقة مكتبي مزود بحماية فائقة من تذبذب الكهرباء، يحتوي على 4 مقابس عالمية ومنفذي USB-C ومنفذي USB-A للشحن المباشر.",
        imageAlt: "صورة استوديو للتوصيلة الكهربائية الذكية مع منافذ USB"
      },
      en: {
        name: "Smart Surge Protector Power Strip with 4 AC & 4 USB Ports",
        description:
          "Heavy-duty desktop power bar with surge protection, 4 universal AC outlets, and 4 fast-charging USB-C / USB-A ports.",
        imageAlt: "Studio photograph of the Smart Surge Protector Power Strip"
      }
    },
    {
      id: "VE-118",
      category: "audio",
      price: 16.800,
      image: "assets/product-18.png",
      fallbackImage: "assets/ve-102.svg",
      ar: {
        name: "مكبرات صوت مكتبية مزدوجة (Stereo Speakers) بتقنية بلوتوث و USB",
        description:
          "سماعات مكتبية مزدوجة بصوت ستيريو واضح وعميق وإضاءة حلقية هادئة، تعمل عبر كابل USB أو الاتصال اللاسلكي بالبلوتوث.",
        imageAlt: "صورة استوديو لمكبرات الصوت المكتبية المزدوجة"
      },
      en: {
        name: "Dual Stereo Desktop Computer Speakers (Bluetooth & USB)",
        description:
          "Compact acoustic desktop speakers with metallic drivers, front volume control knob, and dual wired/Bluetooth connectivity.",
        imageAlt: "Studio photograph of the Dual Stereo Desktop Speakers"
      }
    },
    {
      id: "VE-119",
      category: "desk",
      price: 54.000,
      image: "assets/product-19.png",
      fallbackImage: "assets/ve-106.svg",
      ar: {
        name: "شاشة محمولة إضافية للابتوب 15.6 بوصة FHD IPS بمنفذ USB-C",
        description:
          "شاشة ثانية فائقة النحافة تضاعف إنتاجيتك أثناء الدراسة أو السفر، تعمل بكابل USB-C واحد أو مدخل Mini-HDMI مع غطاء ذكي.",
        imageAlt: "صورة استوديو للشاشة المحمولة الإضافية مقاس 15.6 بوصة"
      },
      en: {
        name: "15.6-Inch Full-HD IPS Ultra-Slim USB-C Portable Monitor",
        description:
          "Lightweight travel second screen with ultra-narrow bezels, dual USB-C / HDMI ports, and foldable magnetic kickstand cover.",
        imageAlt: "Studio photograph of the 15.6-Inch USB-C Portable Monitor"
      }
    },
    {
      id: "VE-120",
      category: "desk",
      price: 11.400,
      image: "assets/product-20.png",
      fallbackImage: "assets/ve-104.svg",
      ar: {
        name: "منفاخ هواء ومكنسة إلكترونيات لاسلكية لتنظيف الكيبورد والحاسب",
        description:
          "جهاز 2 في 1 لاسلكي قابل للشحن عبر USB-C يدفع الهواء بقوة لإزالة الغبار من لوحات المفاتيح والمراوح والأجهزة الدقيقة.",
        imageAlt: "صورة استوديو لمنفاخ الهواء اللاسلكي لتنظيف الإلكترونيات"
      },
      en: {
        name: "Cordless Electric Compressed Air Duster & Mini Desk Vacuum",
        description:
          "Rechargeable 2-in-1 high-RPM air blower and mini vacuum designed to clean mechanical keyboards, laptops, and camera lenses.",
        imageAlt: "Studio photograph of the Cordless Electric Air Duster for electronics"
      }
    }
  ];

  const PRODUCT_MAP = new Map(PRODUCTS.map((p) => [p.id, p]));

  // =========================================================================
  // 2. BILINGUAL UI DICTIONARY (Arabic RTL & English LTR)
  // =========================================================================
  const I18N = {
    ar: {
      dir: "rtl",
      toggleLabel: "English",
      skipLink: "تخطي إلى المحتوى الرئيسي",
      brandName: "MAZTech",
      brandTagline: "أحدث الإلكترونيات وملحقات المكتب الذكي",
      navHome: "الرئيسية",
      navCatAll: "كل المنتجات (20)",
      navCatCharging: "الشحن والطاقة",
      navCatAudio: "الصوتيات والعرض",
      navCatDesk: "المكتب والتخزين والشبكات",
      navCart: "سلة المشتريات",
      navCheckout: "صفحة الطلب والدفع",
      heroEyebrow: "متجر MAZTech للإلكترونيات الحديثة • 20 منتجاً",
      homeHeadline: "أدوات إلكترونية احترافية مصممة للدراسة والعمل والمكتب العصري",
      homeDescription:
        "يوفر متجر MAZTech تشكيلة متكاملة من 20 منتجاً إلكترونياً تشمل الشواحن السريعة بتقنية GaN، السماعات المحيطية، الشاشات المحمولة، وحدات التخزين SSD، وملحقات المكتب الذكي.",
      valueLabel: "قيمتنا المضافة:",
      homeValueStatement:
        "مواصفات تقنية دقيقة، أسعار واضحة بالريال العُماني (OMR)، مع صفحة طلب سريعة تدعم الدفع عند الاستلام أو الدفع عن طريق الواتساب.",
      heroShopBtn: "تصفح الـ 20 منتجاً الآن",
      heroCheckoutBtn: "عرض سلة المشتريات",
      heroFeaturedTag: "الأكثر طلباً للمكتب والدراسة",
      feat1Title: "20 منتجاً إلكترونياً متنوعاً",
      feat1Desc: "تشكيلة شاملة من الشواحن، الصوتيات، الشاشات، الراوترات، ومستلزمات المكتب.",
      feat2Title: "الدفع عند الاستلام أو عبر واتساب",
      feat2Desc: "صفحة طلب واضحة بجميع بيانات الزبون مع خيار الدفع عند الاستلام أو عبر الواتساب.",
      feat3Title: "واجهة ثنائية اللغة (عربي / English)",
      feat3Desc: "تبديل فوري بين العربية (RTL) والإنجليزية (LTR) مع حفظ تلقائي لسلة المشتريات.",
      homeFeaturedTitle: "منتجات مختارة من المتجر",
      homeFeaturedSubtitle: "اكتشف تشكيلتنا الكاملة المكونة من 20 منتجاً إلكترونياً بأحدث المواصفات",
      homeViewAllBtn: "عرض جميع الـ 20 منتجاً ←",
      catalogueHeading: "كتالوج الإلكترونيات (20 منتجاً)",
      catalogueSubtitle:
        "جميع الأسعار بالريال العُماني (OMR - 3 خانات عشرية). إضافة منتج مكرر تزيد الكمية تلقائياً حتى 99 قطعة.",
      filterAll: "الكل (20)",
      filterCharging: "الشحن والطاقة (5)",
      filterAudio: "الصوتيات والعرض (6)",
      filterDesk: "المكتب والتخزين والشبكات (9)",
      catGoCartText: "عرض السلة",
      priceLabel: "السعر التجريبي",
      addToCart: "أضف إلى السلة",
      maxReached: "الحد الأقصى (99)",
      inCartBadge: (q) => `في السلة: ${q}`,
      cartHeading: "سلة المشتريات واختيار الكميات",
      cartSubtitle:
        "تحكم في الكميات الصحيحة (من 1 إلى 99)، راجع الإجماليات الدقيقة، ثم انتقل لصفحة الطلب أو أرسل مسودة واتساب.",
      cartContinueBtn: "متابعة التسوق",
      clearCartBtn: "إفراغ السلة",
      emptyCartTitle: "سلة المشتريات فارغة حالياً",
      emptyCartDesc: "أضف منتجات إلكترونية من الكتالوج لتفعيل حساب الإجماليات وصفحة الطلب والدفع.",
      emptyBrowseBtn: "تصفح المنتجات الإلكترونية (20 منتجاً)",
      lblDistinctItems: "عدد الأصناف المختلفة:",
      lblTotalUnits: "إجمالي عدد القطع:",
      lblGrandTotal: "الإجمالي الكلي:",
      proceedCheckoutBtn: "المتابعة إلى صفحة الطلب وإدخال بيانات الزبون 📋",
      unitPriceLabel: "سعر الوحدة:",
      lineTotalLabel: "الإجمالي الفرعي:",
      removeBtn: "حذف",
      previewHeading: "معاينة الطلب ومسودة واتساب",
      previewHelp:
        "يمكنك نسخ نص الطلب أو فتح مسودة جاهزة في واتساب إلى الرقم المعتمد دون إرسال تلقائي.",
      lblWhatsappNum: "رقم واتساب المعتمد (أرقام دولية فقط، مثال: 96890000000):",
      lblPreviewBox: "معاينة نص الطلب (قابل للنسخ):",
      copyPreviewBtn: "📋 نسخ نص الطلب",
      whatsappDraftBtn: "💬 فتح مسودة الطلب في واتساب",
      waValidMsg: (num) => `رقم دولي معتمد وصالح (+${num}).`,
      waInvalidMsg:
        "الرقم غير صالح (أدخل أرقاماً دولية فقط من 7 إلى 15 رقماً بدون + أو مسافات). تم تعطيل فتح واتساب مع بقاء المعاينة والنسخ متاحين.",
      checkoutHeading: "صفحة الطلب وبيانات الزبون",
      checkoutSubtitle:
        "أدخل بيانات الزبون الكاملة (الاسم الأول، الاسم الثاني، الدولة، رقم الهاتف، الإيميل) واختر طريقة الدفع.",
      backToCartBtn: "← العودة إلى السلة",
      step1Title: "1. بيانات الزبون الكاملة",
      lblCustFirstName: "الاسم الأول *",
      lblCustLastName: "الاسم الثاني (العائلة) *",
      lblCustCountry: "الدولة *",
      lblCustPhone: "رقم الهاتف *",
      lblCustEmail: "البريد الإلكتروني (الإيميل) *",
      lblCustAddress: "المدينة / العنوان التفصيلي (اختياري)",
      step2Title: "2. خيارات الدفع",
      payCodTitle: "الدفع عند الاستلام (Cash on Delivery)",
      payCodSub: "ادفع قيمة الطلب عند استلام المنتجات من مندوب التوصيل",
      payWaTitle: "الدفع عن طريق الواتساب (Payment via WhatsApp)",
      payWaSub: "فتح مسودة الطلب مع بياناتك في واتساب لترتيب الدفع والاستلام مباشرة",
      submitOrderBtn: (totalStr) => `تأكيد بيانات الطلب وإصدار الملخص (${totalStr})`,
      checkoutSummaryTitle: "ملخص الطلبية",
      chkLblSubtotal: "المجموع الفرعي:",
      chkLblShipping: "رسوم التوصيل:",
      chkShippingFree: "مجاني (Free)",
      chkLblTotal: "الإجمالي المطلوب:",
      receiptTitle: "تم تجهيز ملخص الطلب ببيانات الزبون",
      copyReceiptBtn: "📋 نسخ تفاصيل الطلب الكامل",
      whatsappReceiptBtn: "💬 إرسال الطلب عبر واتساب الآن",
      footerBrandTitle: "⚡ MAZTech | متجر ماز تيك للإلكترونيات",
      footerBrandDesc: "متجر متخصص في بيع الأدوات الإلكترونية الحديثة وملحقات المكتب والدراسة (20 منتجاً).",
      toastAdded: (name) => `تمت إضافة "${name}" إلى السلة.`,
      toastIncreased: (name, q) => `تمت زيادة كمية "${name}" إلى ${q}.`,
      toastMax: (name) => `تم الوصول للحد الأقصى (99) للمنتج "${name}".`,
      toastRemoved: (name) => `تم حذف "${name}" من السلة.`,
      toastCleared: "تم إفراغ سلة المشتريات بالكامل.",
      toastCopied: "تم نسخ تفاصيل الطلب إلى الحافظة بنجاح.",
      formErrEmptyCart: "سلة المشتريات فارغة! أضف منتجات أولاً قبل إتمام الطلب.",
      formErrFields:
        "يرجى تعبئة جميع بيانات الزبون المطلوبة: (الاسم الأول، الاسم الثاني، الدولة، رقم الهاتف، والإيميل)."
    },
    en: {
      dir: "ltr",
      toggleLabel: "العربية",
      skipLink: "Skip to main content",
      brandName: "MAZTech",
      brandTagline: "Modern Electronics & Smart Desk Gear",
      navHome: "Home",
      navCatAll: "All Products (20)",
      navCatCharging: "Power & Charging",
      navCatAudio: "Audio & Projection",
      navCatDesk: "Desk, Storage & Wi-Fi",
      navCart: "Cart Selection",
      navCheckout: "Order & Checkout",
      heroEyebrow: "MAZTech Modern Electronics Store • 20 Curated Products",
      homeHeadline: "Everyday Electronics Engineered for Study, Work, and Modern Desks",
      homeDescription:
        "MAZTech offers 20 curated electronics products including GaN fast chargers, studio headphones, portable monitors, NVMe SSDs, and smart desk accessories.",
      valueLabel: "Value Statement:",
      homeValueStatement:
        "Accurate technical specifications, transparent OMR pricing (3 decimal places), and a streamlined Order Page supporting Cash on Delivery or Payment via WhatsApp.",
      heroShopBtn: "Browse All 20 Products",
      heroCheckoutBtn: "View Shopping Cart",
      heroFeaturedTag: "Top Pick for Study & Remote Work",
      feat1Title: "20 Curated Electronics Items",
      feat1Desc: "Comprehensive range of chargers, audio gear, portable monitors, routers, and desk tools.",
      feat2Title: "Cash on Delivery or WhatsApp Pay",
      feat2Desc: "Complete customer order page with Cash on Delivery or direct Payment via WhatsApp.",
      feat3Title: "Bilingual Interface (AR / EN)",
      feat3Desc: "Instant switching between Arabic RTL and English LTR with persistent local cart storage.",
      homeFeaturedTitle: "Featured Store Electronics",
      homeFeaturedSubtitle: "Explore our lineup of 20 carefully engineered electronics products",
      homeViewAllBtn: "View All 20 Products →",
      catalogueHeading: "Online Electronics Catalogue (20 Products)",
      catalogueSubtitle:
        "All demo prices are displayed in OMR (3 decimal places). Adding an existing item increases its quantity up to 99.",
      filterAll: "All Items (20)",
      filterCharging: "Power & Charging (5)",
      filterAudio: "Audio & Projection (6)",
      filterDesk: "Desk, Storage & Wi-Fi (9)",
      catGoCartText: "View Cart",
      priceLabel: "Demo Price",
      addToCart: "Add to Cart",
      maxReached: "Max (99)",
      inCartBadge: (q) => `In Cart: ${q}`,
      cartHeading: "Cart Selection & Quantities",
      cartSubtitle:
        "Adjust whole-number quantities (1–99), verify line totals, and proceed to the Order Page or open a WhatsApp draft.",
      cartContinueBtn: "Continue Shopping",
      clearCartBtn: "Clear Cart",
      emptyCartTitle: "Your cart selection is currently empty",
      emptyCartDesc: "Add electronics items from the Online Catalogue to calculate totals and unlock ordering.",
      emptyBrowseBtn: "Browse 20 Electronics Products",
      lblDistinctItems: "Distinct Products:",
      lblTotalUnits: "Total Units Selected:",
      lblGrandTotal: "Demo Order Total:",
      proceedCheckoutBtn: "Proceed to Customer Order Page 📋",
      unitPriceLabel: "Unit Price:",
      lineTotalLabel: "Line Total:",
      removeBtn: "Remove",
      previewHeading: "Demo Request Preview & WhatsApp Draft",
      previewHelp:
        "Copy the formatted order text below or open a pre-encoded draft in WhatsApp to our authorised number (never auto-sent).",
      lblWhatsappNum: "Authorised WhatsApp Number (International digits only, e.g. 96890000000):",
      lblPreviewBox: "Copyable Demo Request Preview:",
      copyPreviewBtn: "📋 Copy Request Preview",
      whatsappDraftBtn: "💬 Open WhatsApp Draft",
      waValidMsg: (num) => `Valid authorised international number (+${num}).`,
      waInvalidMsg:
        "Invalid number (enter 7–15 digits only, no + or spaces). WhatsApp opening is disabled; preview and copy remain active.",
      checkoutHeading: "Customer Order & Payment Page",
      checkoutSubtitle:
        "Complete all customer fields (First Name, Second Name, Country, Phone, Email) and choose your payment option.",
      backToCartBtn: "← Back to Cart Selection",
      step1Title: "1. Complete Customer Information",
      lblCustFirstName: "First Name *",
      lblCustLastName: "Second / Last Name *",
      lblCustCountry: "Country *",
      lblCustPhone: "Phone Number *",
      lblCustEmail: "Email Address *",
      lblCustAddress: "City / Street Address (Optional)",
      step2Title: "2. Payment Options",
      payCodTitle: "Cash on Delivery (الدفع عند الاستلام)",
      payCodSub: "Pay when you receive your order upon delivery",
      payWaTitle: "Payment via WhatsApp (الدفع عن طريق الواتساب)",
      payWaSub: "Open your encoded order draft in WhatsApp to arrange payment & delivery",
      submitOrderBtn: (totalStr) => `Confirm Customer Details & Preview Order (${totalStr})`,
      checkoutSummaryTitle: "Order Summary",
      chkLblSubtotal: "Subtotal:",
      chkLblShipping: "Delivery Fee:",
      chkShippingFree: "Free",
      chkLblTotal: "Total Demo Amount:",
      receiptTitle: "Customer Order Summary Ready",
      copyReceiptBtn: "📋 Copy Full Order Details",
      whatsappReceiptBtn: "💬 Send Order via WhatsApp Now",
      footerBrandTitle: "⚡ MAZTech | Modern Electronics Store",
      footerBrandDesc: "Curated personal electronics, fast chargers, and study desk peripherals (20 products).",
      toastAdded: (name) => `Added "${name}" to your cart.`,
      toastIncreased: (name, q) => `Increased "${name}" quantity to ${q}.`,
      toastMax: (name) => `Maximum quantity (99) reached for "${name}".`,
      toastRemoved: (name) => `Removed "${name}" from cart.`,
      toastCleared: "Cleared all items from your cart.",
      toastCopied: "Copied order details to clipboard.",
      formErrEmptyCart: "Your cart is empty! Please add products before submitting an order.",
      formErrFields:
        "Please complete all required customer fields: First Name, Second Name, Country, Phone Number, and Email."
    }
  };

  // =========================================================================
  // 3. STATE & LOCAL STORAGE
  // =========================================================================
  let currentLang = "ar";
  let activeCategory = "all";
  let cart = [];
  let storageAvailable = true;
  let storageNoticeMessage = "";

  function toMinorUnits(amount) {
    const factor = Math.pow(10, STORE_CONFIG.decimalPlaces);
    return Math.round(Number(amount) * factor);
  }

  function formatCurrencyFromMinor(minorUnits) {
    const factor = Math.pow(10, STORE_CONFIG.decimalPlaces);
    const val = (minorUnits / factor).toFixed(STORE_CONFIG.decimalPlaces);
    return `${STORE_CONFIG.currencyCode} ${val}`;
  }

  function formatCurrency(amount) {
    return formatCurrencyFromMinor(toMinorUnits(amount));
  }

  function clampQuantity(rawQty) {
    const parsed = Number(rawQty);
    if (!Number.isFinite(parsed)) return 1;
    const whole = Math.floor(parsed);
    if (whole < 1) return 1;
    if (whole > 99) return 99;
    return whole;
  }

  function loadStateFromStorage() {
    let rawCart = null;
    try {
      const testKey = "__voltedge_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);

      const savedLang = window.localStorage.getItem(STORE_CONFIG.langStorageKey);
      if (savedLang === "ar" || savedLang === "en") {
        currentLang = savedLang;
      }

      rawCart = window.localStorage.getItem(STORE_CONFIG.storageKey);
    } catch (_) {
      storageAvailable = false;
      storageNoticeMessage =
        "التخزين المحلي للمتصفح غير متاح — ستعمل السلة خلال هذه الجلسة فقط. / Local storage unavailable — session-only cart.";
      cart = [];
      return;
    }

    if (!rawCart) {
      cart = [];
      return;
    }

    try {
      const parsed = JSON.parse(rawCart);
      if (!Array.isArray(parsed)) throw new Error("Cart root not array");

      const sanitized = [];
      const seen = new Set();
      let hadCorrupt = false;

      for (const item of parsed) {
        if (
          !item ||
          typeof item !== "object" ||
          typeof item.id !== "string" ||
          !PRODUCT_MAP.has(item.id)
        ) {
          hadCorrupt = true;
          continue;
        }
        const qty = Number(item.quantity);
        if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
          hadCorrupt = true;
          continue;
        }
        if (seen.has(item.id)) {
          hadCorrupt = true;
          const existing = sanitized.find((x) => x.id === item.id);
          if (existing) existing.quantity = Math.min(99, existing.quantity + qty);
          continue;
        }
        seen.add(item.id);
        sanitized.push({ id: item.id, quantity: qty });
      }

      cart = sanitized;
      if (hadCorrupt) {
        storageNoticeMessage =
          "تم اكتشاف بيانات سلة غير صالحة وإصلاحها تلقائياً. / Invalid saved cart entries were cleaned automatically.";
        saveCartToStorage();
      }
    } catch (_) {
      cart = [];
      storageNoticeMessage =
        "تم اكتشاف بيانات تالفة في التخزين المحلي وإعادة ضبط السلة بأمان. / Corrupted saved cart data was safely reset.";
      try {
        window.localStorage.removeItem(STORE_CONFIG.storageKey);
      } catch (_e) {}
    }
  }

  function saveCartToStorage() {
    if (!storageAvailable) return;
    try {
      window.localStorage.setItem(STORE_CONFIG.storageKey, JSON.stringify(cart));
    } catch (_) {
      storageAvailable = false;
      storageNoticeMessage =
        "تعذر حفظ السلة في التخزين المحلي. / Could not persist cart to local storage.";
      renderStorageAlert();
    }
  }

  function setLanguage(lang) {
    if (lang !== "ar" && lang !== "en") return;
    currentLang = lang;
    if (storageAvailable) {
      try {
        window.localStorage.setItem(STORE_CONFIG.langStorageKey, currentLang);
      } catch (_) {}
    }
    document.documentElement.lang = currentLang;
    document.documentElement.dir = I18N[currentLang].dir;
    renderAll();
  }

  // =========================================================================
  // 4. CART OPERATIONS
  // =========================================================================
  function addToCart(productId) {
    const product = PRODUCT_MAP.get(productId);
    if (!product) return;
    const t = I18N[currentLang];
    const localName = product[currentLang].name;

    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      if (existing.quantity >= 99) {
        showToast(t.toastMax(localName));
        return;
      }
      existing.quantity = clampQuantity(existing.quantity + 1);
      showToast(t.toastIncreased(localName, existing.quantity));
    } else {
      cart.push({ id: productId, quantity: 1 });
      showToast(t.toastAdded(localName));
    }

    saveCartToStorage();
    renderAll();
  }

  function updateCartQuantity(productId, rawQty) {
    const existing = cart.find((item) => item.id === productId);
    if (!existing) return;

    const parsed = Number(rawQty);
    if (!Number.isFinite(parsed)) {
      renderAll();
      return;
    }
    existing.quantity = clampQuantity(parsed);
    saveCartToStorage();
    renderAll();
  }

  function removeFromCart(productId) {
    const product = PRODUCT_MAP.get(productId);
    cart = cart.filter((item) => item.id !== productId);
    saveCartToStorage();
    if (product) {
      showToast(I18N[currentLang].toastRemoved(product[currentLang].name));
    }
    renderAll();
  }

  function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCartToStorage();
    const receiptModal = document.getElementById("demo-receipt-modal");
    if (receiptModal) receiptModal.hidden = true;
    showToast(I18N[currentLang].toastCleared);
    renderAll();
  }

  function getTotalUnits() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getGrandTotalMinor() {
    return cart.reduce((sum, item) => {
      const product = PRODUCT_MAP.get(item.id);
      if (!product) return sum;
      return sum + toMinorUnits(product.price) * item.quantity;
    }, 0);
  }

  // =========================================================================
  // 5. WHATSAPP VALIDATION & DEMO ORDER PREVIEW BUILDER
  // =========================================================================
  function isValidInternationalNumber(raw) {
    if (typeof raw !== "string") return false;
    return /^[1-9]\d{6,14}$/.test(raw.trim());
  }

  function buildDemoOrderPreviewText(customerDetails) {
    const isAr = currentLang === "ar";
    if (cart.length === 0) {
      return isAr
        ? [
            "=== معاينة طلب متجر MAZTech للإلكترونيات ===",
            `[${STORE_CONFIG.mandatoryDisclaimer}]`,
            "",
            "سلة المشتريات فارغة حالياً.",
            "أضف منتجات من الكتالوج لتوليد مسودة الطلب."
          ].join("\n")
        : [
            "=== MAZTECH ELECTRONICS — DEMO REQUEST PREVIEW ===",
            `[${STORE_CONFIG.mandatoryDisclaimer}]`,
            "",
            "Your cart is currently empty.",
            "Add products from the Online Catalogue to generate an order draft."
          ].join("\n");
    }

    const lines = isAr
      ? [
          "مرحباً متجر MAZTech للإلكترونيات،",
          `أرغب في إرسال طلب جديد (${STORE_CONFIG.mandatoryDisclaimer}):`,
          ""
        ]
      : [
          "Hello MAZTech Electronics,",
          `I would like to submit a DEMO order request (${STORE_CONFIG.mandatoryDisclaimer}):`,
          ""
        ];

    cart.forEach((item, idx) => {
      const product = PRODUCT_MAP.get(item.id);
      if (!product) return;
      const unitMinor = toMinorUnits(product.price);
      const lineMinor = unitMinor * item.quantity;
      const pName = product[currentLang].name;
      lines.push(
        `${idx + 1}. [${product.id}] ${pName}`,
        `   ${isAr ? "الكمية" : "Qty"}: ${item.quantity} × ${formatCurrencyFromMinor(unitMinor)} = ${formatCurrencyFromMinor(lineMinor)}`
      );
    });

    lines.push(
      "",
      `${isAr ? "عدد الأصناف" : "Distinct Items"}: ${cart.length}`,
      `${isAr ? "إجمالي القطع" : "Total Units"}: ${getTotalUnits()}`,
      `${isAr ? "الإجمالي الكلي" : "Demo Order Total"}: ${formatCurrencyFromMinor(getGrandTotalMinor())}`
    );

    if (customerDetails) {
      lines.push(
        "",
        isAr ? "=== بيانات الزبون والدفع ===" : "=== Customer & Payment Details ===",
        `${isAr ? "الاسم الأول" : "First Name"}: ${customerDetails.firstName}`,
        `${isAr ? "الاسم الثاني" : "Second Name"}: ${customerDetails.lastName}`,
        `${isAr ? "الدولة" : "Country"}: ${customerDetails.country}`,
        `${isAr ? "رقم الهاتف" : "Phone Number"}: ${customerDetails.phone}`,
        `${isAr ? "البريد الإلكتروني" : "Email"}: ${customerDetails.email}`,
        ...(customerDetails.address
          ? [`${isAr ? "العنوان" : "Address"}: ${customerDetails.address}`]
          : []),
        `${isAr ? "طريقة الدفع المختارة" : "Payment Option"}: ${customerDetails.paymentLabel}`
      );
    }

    lines.push("", `[${STORE_CONFIG.mandatoryDisclaimer}]`);
    return lines.join("\n");
  }

  // =========================================================================
  // 6. DOM RENDERING & NAVIGATION
  // =========================================================================
  const screens = {
    home: document.getElementById("screen-home"),
    catalogue: document.getElementById("screen-catalogue"),
    cart: document.getElementById("screen-cart"),
    checkout: document.getElementById("screen-checkout")
  };

  const navBtns = {
    home: document.getElementById("nav-home"),
    cart: document.getElementById("nav-cart")
  };

  function updateHeaderActiveStates(screenKey) {
    Object.keys(navBtns).forEach((k) => {
      const btn = navBtns[k];
      if (!btn) return;
      const match = k === screenKey;
      btn.classList.toggle("active", match);
      if (match) {
        btn.setAttribute("aria-current", "page");
      } else {
        btn.removeAttribute("aria-current");
      }
    });

    document.querySelectorAll("[data-nav-cat]").forEach((catBtn) => {
      const cat = catBtn.getAttribute("data-nav-cat");
      const match = screenKey === "catalogue" && cat === activeCategory;
      catBtn.classList.toggle("active", match);
      if (match) {
        catBtn.setAttribute("aria-current", "page");
      } else {
        catBtn.removeAttribute("aria-current");
      }
    });

    document.querySelectorAll("[data-category]").forEach((pill) => {
      pill.classList.toggle(
        "active",
        pill.getAttribute("data-category") === activeCategory
      );
    });
  }

  function navigateTo(screenKey) {
    if (!screens[screenKey]) return;

    Object.keys(screens).forEach((k) => {
      const match = k === screenKey;
      screens[k].hidden = !match;
      screens[k].classList.toggle("active", match);
    });

    updateHeaderActiveStates(screenKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigateToCategory(catKey) {
    activeCategory = catKey || "all";
    renderProductGrids();
    navigateTo("catalogue");
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function renderStaticTranslations() {
    const t = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = t.dir;

    setText("skip-link-text", t.skipLink);
    setText("lang-toggle-label", t.toggleLabel);
    setText("brand-name-display", t.brandName);
    setText("brand-tagline-display", t.brandTagline);
    setText("nav-home", t.navHome);
    setText("nav-cat-all", t.navCatAll);
    setText("nav-cat-charging", t.navCatCharging);
    setText("nav-cat-audio", t.navCatAudio);
    setText("nav-cat-desk", t.navCatDesk);
    setText("nav-cart-text", t.navCart);
    setText("nav-checkout", t.navCheckout);

    setText("hero-eyebrow", t.heroEyebrow);
    setText("home-headline", t.homeHeadline);
    setText("home-description", t.homeDescription);
    setText("value-label", t.valueLabel);
    setText("home-value-statement", t.homeValueStatement);
    setText("hero-shop-btn", t.heroShopBtn);
    setText("hero-checkout-btn", t.heroCheckoutBtn);
    setText("hero-featured-tag", t.heroFeaturedTag);

    setText("feat-1-title", t.feat1Title);
    setText("feat-1-desc", t.feat1Desc);
    setText("feat-2-title", t.feat2Title);
    setText("feat-2-desc", t.feat2Desc);
    setText("feat-3-title", t.feat3Title);
    setText("feat-3-desc", t.feat3Desc);

    setText("home-featured-title", t.homeFeaturedTitle);
    setText("home-featured-subtitle", t.homeFeaturedSubtitle);
    setText("home-view-all-btn", t.homeViewAllBtn);

    setText("catalogue-heading", t.catalogueHeading);
    setText("catalogue-subtitle", t.catalogueSubtitle);
    setText("filter-all", t.filterAll);
    setText("filter-charging", t.filterCharging);
    setText("filter-audio", t.filterAudio);
    setText("filter-desk", t.filterDesk);
    setText("cat-go-cart-text", t.catGoCartText);

    setText("cart-heading", t.cartHeading);
    setText("cart-subtitle", t.cartSubtitle);
    setText("cart-continue-btn", t.cartContinueBtn);
    setText("clear-cart-btn", t.clearCartBtn);
    setText("empty-cart-title", t.emptyCartTitle);
    setText("empty-cart-desc", t.emptyCartDesc);
    setText("empty-browse-btn", t.emptyBrowseBtn);
    setText("lbl-distinct-items", t.lblDistinctItems);
    setText("lbl-total-units", t.lblTotalUnits);
    setText("lbl-grand-total", t.lblGrandTotal);
    setText("proceed-checkout-btn", t.proceedCheckoutBtn);

    setText("preview-heading", t.previewHeading);
    setText("preview-help", t.previewHelp);
    setText("lbl-whatsapp-num", t.lblWhatsappNum);
    setText("lbl-preview-box", t.lblPreviewBox);
    setText("copy-preview-btn", t.copyPreviewBtn);
    setText("whatsapp-draft-btn", t.whatsappDraftBtn);

    setText("checkout-heading", t.checkoutHeading);
    setText("checkout-subtitle", t.checkoutSubtitle);
    setText("back-to-cart-btn", t.backToCartBtn);
    setText("step-1-title", t.step1Title);
    setText("lbl-cust-first-name", t.lblCustFirstName);
    setText("lbl-cust-last-name", t.lblCustLastName);
    setText("lbl-cust-country", t.lblCustCountry);
    setText("lbl-cust-phone", t.lblCustPhone);
    setText("lbl-cust-email", t.lblCustEmail);
    setText("lbl-cust-address", t.lblCustAddress);
    setText("step-2-title", t.step2Title);
    setText("pay-cod-title", t.payCodTitle);
    setText("pay-cod-sub", t.payCodSub);
    setText("pay-wa-title", t.payWaTitle);
    setText("pay-wa-sub", t.payWaSub);

    setText("checkout-summary-title", t.checkoutSummaryTitle);
    setText("chk-lbl-subtotal", t.chkLblSubtotal);
    setText("chk-lbl-shipping", t.chkLblShipping);
    setText("chk-shipping", t.chkShippingFree);
    setText("chk-lbl-total", t.chkLblTotal);
    setText("receipt-title", t.receiptTitle);
    setText("copy-receipt-btn", t.copyReceiptBtn);
    setText("whatsapp-receipt-btn", t.whatsappReceiptBtn);
    setText("footer-brand-title", t.footerBrandTitle);
    setText("footer-brand-desc", t.footerBrandDesc);
  }

  function createProductCardElement(product) {
    const t = I18N[currentLang];
    const loc = product[currentLang];
    const inCart = cart.find((x) => x.id === product.id);
    const qty = inCart ? inCart.quantity : 0;

    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("role", "listitem");

    const media = document.createElement("div");
    media.className = "product-media";

    const img = document.createElement("img");
    img.className = "product-img";
    img.src = product.image;
    img.alt = loc.imageAlt;
    img.loading = "lazy";
    img.onerror = function () {
      this.onerror = null;
      this.src = product.fallbackImage;
    };
    media.appendChild(img);

    const sku = document.createElement("span");
    sku.className = "product-sku-badge";
    sku.textContent = product.id;
    media.appendChild(sku);

    if (qty > 0) {
      const qBadge = document.createElement("span");
      qBadge.className = "product-qty-badge";
      qBadge.textContent = t.inCartBadge(qty);
      media.appendChild(qBadge);
    }

    const content = document.createElement("div");
    content.className = "product-content";

    const title = document.createElement("h3");
    title.className = "product-name";
    title.textContent = loc.name;

    const desc = document.createElement("p");
    desc.className = "product-desc";
    desc.textContent = loc.description;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const priceBlock = document.createElement("div");
    priceBlock.className = "price-block";

    const priceLbl = document.createElement("span");
    priceLbl.className = "price-label";
    priceLbl.textContent = t.priceLabel;

    const priceVal = document.createElement("span");
    priceVal.className = "price-value";
    priceVal.textContent = formatCurrency(product.price);

    priceBlock.appendChild(priceLbl);
    priceBlock.appendChild(priceVal);

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn btn-primary";
    addBtn.disabled = qty >= 99;
    addBtn.textContent = qty >= 99 ? t.maxReached : t.addToCart;
    addBtn.addEventListener("click", () => addToCart(product.id));

    bottom.appendChild(priceBlock);
    bottom.appendChild(addBtn);

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(bottom);

    card.appendChild(media);
    card.appendChild(content);
    return card;
  }

  function renderProductGrids() {
    // Home Featured Grid (shows 6 featured products on Home)
    const homeGrid = document.getElementById("home-featured-grid");
    if (homeGrid) {
      homeGrid.innerHTML = "";
      PRODUCTS.slice(0, 6).forEach((p) => {
        homeGrid.appendChild(createProductCardElement(p));
      });
    }

    // Full Online Catalogue Grid (all 20 products or filtered)
    const catGrid = document.getElementById("catalogue-grid");
    if (catGrid) {
      catGrid.innerHTML = "";
      const list =
        activeCategory === "all"
          ? PRODUCTS
          : PRODUCTS.filter((p) => p.category === activeCategory);

      list.forEach((p) => {
        catGrid.appendChild(createProductCardElement(p));
      });
    }
  }

  function renderCartAndCheckout() {
    const t = I18N[currentLang];
    const isCartEmpty = cart.length === 0;
    const totalUnits = getTotalUnits();
    const grandMinor = getGrandTotalMinor();
    const grandFormatted = formatCurrencyFromMinor(grandMinor);

    setText("nav-cart-count", String(totalUnits));
    setText("catalogue-cart-count", String(totalUnits));

    const emptyBox = document.getElementById("cart-empty-state");
    if (emptyBox) emptyBox.hidden = !isCartEmpty;

    const clearBtn = document.getElementById("clear-cart-btn");
    if (clearBtn) clearBtn.disabled = isCartEmpty;

    const proceedBtn = document.getElementById("proceed-checkout-btn");
    if (proceedBtn) proceedBtn.disabled = isCartEmpty;

    const itemsList = document.getElementById("cart-items-list");
    if (itemsList) {
      itemsList.innerHTML = "";
      cart.forEach((item) => {
        const product = PRODUCT_MAP.get(item.id);
        if (!product) return;
        const loc = product[currentLang];
        const unitMinor = toMinorUnits(product.price);
        const lineMinor = unitMinor * item.quantity;

        const row = document.createElement("article");
        row.className = "cart-line-item";

        const thumb = document.createElement("img");
        thumb.className = "cart-line-thumb";
        thumb.src = product.image;
        thumb.alt = loc.imageAlt;
        thumb.onerror = function () {
          this.onerror = null;
          this.src = product.fallbackImage;
        };

        const body = document.createElement("div");

        const top = document.createElement("div");
        top.className = "cart-line-top";

        const title = document.createElement("h3");
        title.className = "cart-line-title";
        title.textContent = `${loc.name} (${product.id})`;

        const rmBtn = document.createElement("button");
        rmBtn.type = "button";
        rmBtn.className = "remove-btn";
        rmBtn.textContent = t.removeBtn;
        rmBtn.addEventListener("click", () => removeFromCart(product.id));

        top.appendChild(title);
        top.appendChild(rmBtn);

        const unitP = document.createElement("p");
        unitP.className = "cart-line-unit";
        unitP.textContent = `${t.unitPriceLabel} ${formatCurrencyFromMinor(unitMinor)}`;

        const ctrls = document.createElement("div");
        ctrls.className = "cart-line-controls";

        const stepper = document.createElement("div");
        stepper.className = "qty-stepper";

        const decBtn = document.createElement("button");
        decBtn.type = "button";
        decBtn.className = "qty-btn";
        decBtn.textContent = "−";
        decBtn.disabled = item.quantity <= 1;
        decBtn.addEventListener("click", () =>
          updateCartQuantity(product.id, item.quantity - 1)
        );

        const qInput = document.createElement("input");
        qInput.type = "number";
        qInput.className = "qty-input";
        qInput.min = "1";
        qInput.max = "99";
        qInput.step = "1";
        qInput.value = String(item.quantity);
        qInput.addEventListener("change", (e) =>
          updateCartQuantity(product.id, e.target.value)
        );

        const incBtn = document.createElement("button");
        incBtn.type = "button";
        incBtn.className = "qty-btn";
        incBtn.textContent = "+";
        incBtn.disabled = item.quantity >= 99;
        incBtn.addEventListener("click", () =>
          updateCartQuantity(product.id, item.quantity + 1)
        );

        stepper.appendChild(decBtn);
        stepper.appendChild(qInput);
        stepper.appendChild(incBtn);

        const lineSub = document.createElement("span");
        lineSub.className = "line-subtotal";
        lineSub.textContent = `${t.lineTotalLabel} ${formatCurrencyFromMinor(lineMinor)}`;

        ctrls.appendChild(stepper);
        ctrls.appendChild(lineSub);

        body.appendChild(top);
        body.appendChild(unitP);
        body.appendChild(ctrls);

        row.appendChild(thumb);
        row.appendChild(body);
        itemsList.appendChild(row);
      });
    }

    setText("summary-distinct-count", String(cart.length));
    setText("summary-unit-count", String(totalUnits));
    setText("summary-grand-total", grandFormatted);

    // Preview & WhatsApp validation
    const previewTextarea = document.getElementById("order-preview-textarea");
    if (previewTextarea) {
      previewTextarea.value = buildDemoOrderPreviewText();
    }

    const whatsappInput = document.getElementById("whatsapp-number-input");
    const whatsappStatus = document.getElementById("whatsapp-number-status");
    const copyPreviewBtn = document.getElementById("copy-preview-btn");
    const whatsappDraftBtn = document.getElementById("whatsapp-draft-btn");

    const numVal = whatsappInput
      ? whatsappInput.value.trim()
      : STORE_CONFIG.authorisedWhatsAppNumber;
    const validNum = isValidInternationalNumber(numVal);

    if (whatsappStatus) {
      whatsappStatus.textContent = validNum ? t.waValidMsg(numVal) : t.waInvalidMsg;
      whatsappStatus.className = `field-status ${validNum ? "valid" : "invalid"}`;
    }

    if (copyPreviewBtn) copyPreviewBtn.disabled = isCartEmpty;
    if (whatsappDraftBtn) whatsappDraftBtn.disabled = isCartEmpty || !validNum;

    // Checkout Sidebar Mini Summary
    const miniContainer = document.getElementById("checkout-items-mini");
    if (miniContainer) {
      miniContainer.innerHTML = "";
      cart.forEach((item) => {
        const product = PRODUCT_MAP.get(item.id);
        if (!product) return;
        const lineMinor = toMinorUnits(product.price) * item.quantity;
        const div = document.createElement("div");
        div.className = "mini-item";
        div.innerHTML = `<span>${product[currentLang].name} <strong>× ${item.quantity}</strong></span><strong dir="ltr">${formatCurrencyFromMinor(lineMinor)}</strong>`;
        miniContainer.appendChild(div);
      });
    }

    setText("chk-subtotal", grandFormatted);
    setText("chk-total", grandFormatted);
    setText("submit-order-btn", t.submitOrderBtn(grandFormatted));

    const submitOrderBtn = document.getElementById("submit-order-btn");
    if (submitOrderBtn) submitOrderBtn.disabled = isCartEmpty;

    const whatsappReceiptBtn = document.getElementById("whatsapp-receipt-btn");
    if (whatsappReceiptBtn) whatsappReceiptBtn.disabled = isCartEmpty || !validNum;
  }

  function renderStorageAlert() {
    const alertEl = document.getElementById("storage-alert");
    if (alertEl) {
      alertEl.hidden = true;
    }
  }

  function renderAll() {
    renderStorageAlert();
    renderStaticTranslations();
    renderProductGrids();
    renderCartAndCheckout();
  }

  // =========================================================================
  // 7. EVENTS & ORDER FORM SUBMISSION
  // =========================================================================
  let toastTimer = null;
  function showToast(msg) {
    const region = document.getElementById("toast-region");
    if (!region) return;
    region.innerHTML = "";
    const box = document.createElement("div");
    box.className = "toast-message";
    box.textContent = msg;
    region.appendChild(box);

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      region.innerHTML = "";
    }, 3200);
  }

  function openWhatsAppWithText(text) {
    if (cart.length === 0) return;
    const whatsappInput = document.getElementById("whatsapp-number-input");
    const number = whatsappInput
      ? whatsappInput.value.trim()
      : STORE_CONFIG.authorisedWhatsAppNumber;
    if (!isValidInternationalNumber(number)) {
      renderCartAndCheckout();
      return;
    }
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copyTextToClipboard(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      showToast(I18N[currentLang].toastCopied);
    } catch (_) {
      showToast(I18N[currentLang].toastCopied);
    }
  }

  function initEvents() {
    // Navigation buttons
    document.querySelectorAll("[data-nav]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(btn.getAttribute("data-nav"));
      });
    });

    // Header Category Navigation buttons
    document.querySelectorAll("[data-nav-cat]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateToCategory(btn.getAttribute("data-nav-cat"));
      });
    });

    // Language Switcher
    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setLanguage(currentLang === "ar" ? "en" : "ar");
      });
    }

    // Category Filter Pills
    document.querySelectorAll("[data-category]").forEach((pill) => {
      pill.addEventListener("click", () => {
        navigateToCategory(pill.getAttribute("data-category") || "all");
      });
    });

    // Clear Cart
    const clearBtn = document.getElementById("clear-cart-btn");
    if (clearBtn) clearBtn.addEventListener("click", clearCart);

    // WhatsApp Number Input
    const whatsappInput = document.getElementById("whatsapp-number-input");
    if (whatsappInput) {
      whatsappInput.value = STORE_CONFIG.authorisedWhatsAppNumber;
      whatsappInput.addEventListener("input", () => {
        STORE_CONFIG.authorisedWhatsAppNumber = whatsappInput.value.trim();
        renderCartAndCheckout();
      });
    }

    // Copy Preview Button
    const copyPreviewBtn = document.getElementById("copy-preview-btn");
    if (copyPreviewBtn) {
      copyPreviewBtn.addEventListener("click", () => {
        if (cart.length === 0) return;
        const previewTextarea = document.getElementById("order-preview-textarea");
        if (previewTextarea) copyTextToClipboard(previewTextarea.value);
      });
    }

    // WhatsApp Draft Button
    const whatsappDraftBtn = document.getElementById("whatsapp-draft-btn");
    if (whatsappDraftBtn) {
      whatsappDraftBtn.addEventListener("click", () => {
        openWhatsAppWithText(buildDemoOrderPreviewText());
      });
    }

    // Payment Method Radio Highlight (Cash on Delivery vs Payment via WhatsApp)
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        document.querySelectorAll(".payment-option").forEach((lbl) => {
          lbl.classList.toggle("selected", lbl.contains(radio) && radio.checked);
        });
      });
    });

    // Customer Order Form Submission
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const t = I18N[currentLang];
        const errEl = document.getElementById("checkout-form-error");

        if (cart.length === 0) {
          if (errEl) {
            errEl.textContent = t.formErrEmptyCart;
            errEl.hidden = false;
          }
          return;
        }

        const firstName = (document.getElementById("cust-first-name")?.value || "").trim();
        const lastName = (document.getElementById("cust-last-name")?.value || "").trim();
        const country = (document.getElementById("cust-country")?.value || "").trim();
        const phone = (document.getElementById("cust-phone")?.value || "").trim();
        const email = (document.getElementById("cust-email")?.value || "").trim();
        const address = (document.getElementById("cust-address")?.value || "").trim();

        if (!firstName || !lastName || !country || !phone || !email) {
          if (errEl) {
            errEl.textContent = t.formErrFields;
            errEl.hidden = false;
          }
          return;
        }

        if (errEl) errEl.hidden = true;

        const selectedRadio = document.querySelector(
          'input[name="paymentMethod"]:checked'
        );
        const payVal = selectedRadio ? selectedRadio.value : "cod";
        const paymentLabel = payVal === "whatsapp" ? t.payWaTitle : t.payCodTitle;

        const receiptText = buildDemoOrderPreviewText({
          firstName,
          lastName,
          country,
          phone,
          email,
          address,
          paymentLabel
        });

        const receiptModal = document.getElementById("demo-receipt-modal");
        const receiptPre = document.getElementById("receipt-text-output");
        if (receiptPre) receiptPre.textContent = receiptText;
        if (receiptModal) {
          receiptModal.hidden = false;
          receiptModal.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        // If user selected "Payment via WhatsApp" and valid number is configured, also open WhatsApp draft if desired
        if (payVal === "whatsapp") {
          openWhatsAppWithText(receiptText);
        }
      });
    }

    // Copy & WhatsApp buttons inside Checkout Summary Box
    const copyReceiptBtn = document.getElementById("copy-receipt-btn");
    if (copyReceiptBtn) {
      copyReceiptBtn.addEventListener("click", () => {
        const receiptPre = document.getElementById("receipt-text-output");
        if (receiptPre && receiptPre.textContent) {
          copyTextToClipboard(receiptPre.textContent);
        }
      });
    }

    const whatsappReceiptBtn = document.getElementById("whatsapp-receipt-btn");
    if (whatsappReceiptBtn) {
      whatsappReceiptBtn.addEventListener("click", () => {
        const receiptPre = document.getElementById("receipt-text-output");
        const text =
          receiptPre && receiptPre.textContent
            ? receiptPre.textContent
            : buildDemoOrderPreviewText();
        openWhatsAppWithText(text);
      });
    }
  }

  // Initialize Store
  loadStateFromStorage();
  initEvents();
  renderAll();
})();
