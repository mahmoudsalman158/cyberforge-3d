export const hardwareCategories = [
  {
    id: 'rover',
    title: '🚗 عربة الفحص الذاتية (Cyber-Rover)',
    color: '#00d4ff',
    items: [
      {
        name: 'Raspberry Pi 3B+ (أو Pi 4 2GB)',
        specs: 'اللوحة فقط بدون ملحقات مكلفة',
        usedPrice: '3,000 – 3,500 ج.م',
        source: 'دوبيزل (OLX) / فيسبوك ماركت',
        tip: 'افحص بورتات الـ USB والـ Ethernet وتأكد إن البائع استخدمها في مشروع تخرج مش سيرفر شغال 24 ساعة.',
        priority: 'أساسي'
      },
      {
        name: 'كارت WiFi — TP-Link WN722N (V1 فقط!)',
        specs: 'Atheros AR9271 Chipset يدعم Monitor Mode',
        usedPrice: '250 – 400 ج.م',
        source: 'دوبيزل / محلات كمبيوتر',
        tip: '⚠️ مهم جداً: اتأكد من رقم V1 على اللاصقة الخلفية؛ لأن V2 و V3 شيبست مختلف ومش بتدعم Monitor Mode.',
        priority: 'حرج جداً'
      },
      {
        name: 'شاسيه 4WD Robot Car Kit',
        specs: 'شاسيه أكريليك + 4 موتورات DC + 4 عجلات',
        usedPrice: '400 – 600 ج.م (جديد)',
        source: 'RAM Electronics / Lampatronics',
        tip: 'الجديد سعره مقارب للمستعمل ومتوفر بسهولة في محلات الإلكترونيات.',
        priority: 'أساسي'
      },
      {
        name: 'درايفر موتورات L298N',
        specs: 'Dual H-Bridge Motor Driver',
        usedPrice: '60 – 100 ج.م',
        source: 'RAM / Future Electronics',
        tip: 'يتحكم في اتجاه وسرعة موتورات العربة الأربعة.',
        priority: 'أساسي'
      },
      {
        name: 'حساس مسافة ألتراسونيك HC-SR04 (عدد 2)',
        specs: 'لتفادي الاصطدام الذاتي بالأجسام',
        usedPrice: '30 – 50 ج.م للقطعة',
        source: 'RAM Electronics',
        tip: 'يتم تركيب واحد في مقدمة العربة وواحد في الخلف.',
        priority: 'أساسي'
      },
      {
        name: 'باور بانك 20,000mAh',
        specs: 'خرج لا يقل عن 5V / 2.4A',
        usedPrice: '200 – 400 ج.م',
        source: 'دوبيزل / استخدام شخصي',
        tip: 'توفير: شوف لو حد في الفريق معاه باور بانك شغال عشان متدفعوش فيه فلوس.',
        priority: 'أساسي'
      },
      {
        name: 'شاشة OLED 0.96 بوصة I2C',
        specs: 'عرض عنوان الـ IP وحالة الفحص',
        usedPrice: '50 – 80 ج.م',
        source: 'RAM / Future Electronics',
        tip: 'شاشة صغيرة بتدي شكل مبهر للعربة أثناء الفحص.',
        priority: 'إضافي مميز'
      }
    ]
  },
  {
    id: 'scada',
    title: '⚡ محطات SCADA الأربعة (ESP32 Stations)',
    color: '#10b981',
    items: [
      {
        name: 'بوردات ESP32 DevKit V1 (عدد 4)',
        specs: '30-pin Dual Core مع WiFi & Bluetooth',
        usedPrice: '270 – 400 ج.م للقطعة (~1,200 ج.م للأربعة)',
        source: 'RAM / Future / Micro Ohm',
        tip: 'اشتريها جديدة لأن المستعمل فرق سعره بسيط والجديد أضمن لسلامة الدبابيس (Pins).',
        priority: 'أساسي'
      },
      {
        name: 'حساس حرارة ورطوبة DHT22 (AM2302)',
        specs: 'لمحطة الأفران (Furnace / Thermal Station)',
        usedPrice: '250 – 275 ج.م (أو DHT11 بـ 50 ج.م)',
        source: 'RAM Electronics',
        tip: 'لو الميزانية ضيقة، حساس DHT11 بديل رخيص بـ 50 جنيه ويؤدي نفس الغرض في العرض.',
        priority: 'أساسي'
      },
      {
        name: 'حساس تيار كهربائي ACS712 (5A/20A)',
        specs: 'لمحطة شبكة الطاقة (Power Distribution Station)',
        usedPrice: '80 – 100 ج.م',
        source: 'RAM / Fares PCB',
        tip: 'يقيس سحب التيار ويكشف هجمات زيادة الحمل الكهربائي.',
        priority: 'أساسي'
      },
      {
        name: 'حساس حركة PIR (HC-SR501)',
        specs: 'لمحطة الأمان والإنذار (Safety & Perimeter)',
        usedPrice: '40 – 60 ج.م',
        source: 'RAM Electronics',
        tip: 'يرصد أي حركة مشبوهة داخل منطقة التحكم.',
        priority: 'أساسي'
      },
      {
        name: 'مضخة مياه DC صغيرة + حساس مستوى',
        specs: 'لمحطة التبريد (Cooling & Pump Station)',
        usedPrice: '50 – 90 ج.م',
        source: 'Lampatronics / RAM',
        tip: 'محاكاة دورة تبريد المفاعلات أو خطوط الإنتاج.',
        priority: 'أساسي'
      },
      {
        name: 'ريلاي 4-Channel 5V Relay Module (عدد 2)',
        specs: 'مفاتيح العزل الفيزيائي الميكانيكي (Kill-Switches)',
        usedPrice: '60 – 80 ج.م للقطعة (~150 ج.م)',
        source: 'RAM / Future',
        tip: '⭐ هذه هي ميزة SCADA Shield الحصرية — فصل الكهرباء فيزيائياً بأمر من الـ AI!',
        priority: 'حرج جداً'
      },
      {
        name: 'إضاءات LED ملونة (أحمر + أخضر + أصفر)',
        specs: '20 ليد ملونة لبيان حالة المحطات',
        usedPrice: '50 – 100 ج.م',
        source: 'أي محل إلكترونيات',
        tip: 'أخضر: سليم | أصفر: نشاط مشبوه | أحمر: معزول فيزيائياً.',
        priority: 'أساسي'
      }
    ]
  },
  {
    id: 'network',
    title: '🌐 معدات الشبكات والفايروول',
    color: '#38bdf8',
    items: [
      {
        name: 'سويتش Cisco Catalyst 2960 (24 Port)',
        specs: 'Managed Switch يدعم VLANs و 802.1Q و SPAN',
        usedPrice: '1,200 – 2,500 ج.م (مستعمل)',
        source: 'دوبيزل / فيسبوك / شركات تصفية IT',
        tip: '⚠️ الموديل WS-C2960-24TC-L ممتاز جداً. تأكد إنه بيعمل Boot سليم واسأل البائع عن كابل الكونسول.',
        priority: 'حرج جداً'
      },
      {
        name: 'كابل كونسول Cisco (USB to RJ45)',
        specs: 'لبرمجة السويتش من اللابتوب عبر PuTTY',
        usedPrice: '80 – 150 ج.م',
        source: 'دوبيزل / أمازون مصر / محلات كمبيوتر',
        tip: 'اشتريه لو البائع معطاكش كابل مع السويتش.',
        priority: 'أساسي'
      },
      {
        name: 'كابلات إيثرنت Cat6 (حوالي 10 كابلات)',
        specs: 'أطوال مختلفة لتوصيل المحطات والسويتش والفايروول',
        usedPrice: '15 – 25 ج.م للكابل (~200 ج.م)',
        source: 'أي محل كمبيوتر',
        tip: 'اطلب من المحل يقرجلك كابلات بأطوال 1 متر و 2 متر.',
        priority: 'أساسي'
      },
      {
        name: 'USB to Ethernet Adapter (عدد 2)',
        specs: 'لإضافة كروت شبكة إضافية لجهاز الفايروول',
        usedPrice: '100 – 200 ج.م للقطعة',
        source: 'أمازون مصر / دوبيزل',
        tip: 'مهم جداً لجهاز pfSense ليكون عنده منافذ كافية للـ WAN والـ LAN.',
        priority: 'أساسي'
      },
      {
        name: 'لابتوب أو PC قديم (جهاز الفايروول pfSense)',
        specs: '1GB RAM + 8GB SSD كافيين جداً',
        usedPrice: '0 ج.م (استعارة من أحد أعضاء الفريق)',
        source: 'أي لابتوب قديم من البيت',
        tip: 'أي لابتوب من سنة 2010 فما فوق يقدر يشغل pfSense بكفاءة تامة بدون أي تكلفة إضافية.',
        priority: 'أساسي'
      }
    ]
  },
  {
    id: 'model',
    title: '🏗️ مجسم المصنع الفيزيائي والأدوات',
    color: '#f59e0b',
    items: [
      {
        name: 'لوح أكريليك أو خشب MDF للقاعدة',
        specs: 'مقاس مناسب لتثبيت المحطات الأربعة ومسار الـ Rover',
        usedPrice: '200 – 400 ج.م',
        source: 'محلات الأكريليك / ورش نجارة',
        tip: 'بيعطي شكل احترافي ومنظم جداً للمشروع يوم المناقشة.',
        priority: 'إضافي مميز'
      },
      {
        name: 'شريط إضاءة LED Strip',
        specs: 'لإضاءة المسارات والمحطات في المجسم',
        usedPrice: '100 – 200 ج.م',
        source: 'محلات الكهرباء',
        tip: 'بيخلي المجسم يلمع ويلفت نظر لجنة التحكيم فوراً.',
        priority: 'إضافي مميز'
      },
      {
        name: 'بريدبوردات Breadboards + أسلاك Jumper Wires',
        specs: 'حزمة أسلاك دكر/نتاية للتوصيلات السريعة',
        usedPrice: '150 – 200 ج.م',
        source: 'RAM / Future Electronics',
        tip: 'ضرورية لتجربة الدوائر قبل التثبيت النهائي.',
        priority: 'أساسي'
      }
    ]
  }
];

export const storesList = [
  { name: 'دوبيزل مصر (OLX سابقاً)', type: 'مستعمل', link: 'https://www.dubizzle.com.eg', bestFor: 'Cisco Switches, Raspberry Pi, TP-Link WN722N, Power Banks' },
  { name: 'RAM Electronics', type: 'جديد (متخصص)', link: 'https://ram-e-shop.com', bestFor: 'ESP32, Sensors (DHT22, PIR, ACS712), Relay Modules, LEDs, Breadboards' },
  { name: 'Future Electronics Egypt', type: 'جديد (متخصص)', link: 'https://fut-electronics.com', bestFor: 'ESP32, Robot Chassis, Sensors, Wiring' },
  { name: 'Lampatronics', type: 'جديد (روبوتكس)', link: 'https://lampatronics.com', bestFor: '4WD Robot Kits, DC Motors, Pump Sensors' },
  { name: 'Micro Ohm Electronics', type: 'جديد (بوردات)', link: 'https://microohm-eg.com', bestFor: 'ESP32 Development Boards, Advanced Modules' },
  { name: 'فيسبوك ماركت بليس وجروبات Arduino Egypt', type: 'جديد ومستعمل', link: 'https://facebook.com', bestFor: 'أجهزة ومستلزمات مشاريع تخرج سابقة بأسعار ممتازة' }
];
