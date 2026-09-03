export const systemLayers = [
  {
    id: 'hardware-layer',
    title: '1. طبقة الهاردوير والمحطات الفيزيائية',
    engineer: 'مروان أشرف جوده إبراهيم',
    color: '#10b981',
    icon: 'Cpu',
    description: '4 محطات صناعية (ESP32) تقرأ الحساسات + عربة فحص ذاتية (Cyber-Rover) + مفاتيح عزل فيزيائية (Relays).',
    outputs: ['رسائل MQTT بحالة الحساسات', 'نتائج فحص الـ Rover عبر WiFi', 'استجابة سريعة لأمر الفصل الفيزيائي']
  },
  {
    id: 'switch-layer',
    title: '2. طبقة السويتش والبنية التحتية الفيزيائية',
    engineer: 'محمد أشرف محمد إمبابي',
    color: '#06b6d4',
    icon: 'Network',
    description: 'سويتش Cisco 2960 مقسم لـ 5 شبكات VLANs معزولة مع حماية المنافذ Port Security وبورت نسخ الترافيك SPAN.',
    outputs: ['عزل الأجهزة في 5 شبكات فرعية', 'بورت SPAN ينسخ حركة البيانات', 'خط 802.1Q Trunk موصل للفايروول']
  },
  {
    id: 'protocols-layer',
    title: '3. طبقة بروتوكولات المصنع والنفق المشفر',
    engineer: 'محمود أشرف السيد عبداللطيف',
    color: '#3b82f6',
    icon: 'Layers',
    description: 'سيرفر Mosquitto MQTT Broker منظم + بروتوكول Modbus TCP + نفق WireGuard VPN المشفر لسحابة AWS + محاكاة EVE-NG.',
    outputs: ['قنوات اتصال Topics سريعة ومؤمنة', 'نفق WireGuard فائق السرعة لـ AWS', 'توجيه منخفض التأخير ومحاكاة لمصنع ضخم']
  },
  {
    id: 'firewall-layer',
    title: '4. طبقة الجدار الناري والتفتيش والعزل',
    engineer: 'شهد أحمد جوده محمد',
    color: '#f43f5e',
    icon: 'ShieldAlert',
    description: 'جهاز pfSense Firewall يطبق قواعد المرور الصارمة (ACLs) ويفحص الحزم بـ Suricata IDS/IPS ويعزل الأجهزة في VLAN 50.',
    outputs: ['منع وصول الترافيك غير المصرح به', 'رصد الهجمات بـ Suricata DPI', 'عزل تلقائي للمهاجم في Quarantine']
  },
  {
    id: 'cloud-layer',
    title: '5. طبقة السحابة والمصائد المخادعة',
    engineer: 'عمار ياسر السيد عبدالله',
    color: '#f59e0b',
    icon: 'Cloud',
    description: 'بنية AWS VPC مؤمنة + مصفوفة مصائد العسل (Cowrie SSH + Conpot SCADA) + ملفات مفخخة + استخراج Threat Intel.',
    outputs: ['استدراج المهاجمين وتسجيل أوامرهم', 'توليد ملفات Threat Intelligence', 'استضافة سيرفرات Wazuh والـ Backend']
  },
  {
    id: 'soc-layer',
    title: '6. طبقة مركز العمليات الأمنية (SOC)',
    engineer: 'شامل محمد علي شاهين',
    color: '#8b5cf6',
    icon: 'Radio',
    description: 'منصة Wazuh SIEM تجمع سجلات المنظومة + قواعد رصد مخصصة XML + تنبيهات لحظية + كتيبات الاستجابة للحوادث.',
    outputs: ['لوحة تحكم أمنية تفاعلية لايف', 'إنذارات مصنفة حسب مستويات الخطورة', 'تحليل شامل للأدلة الجنائية']
  },
  {
    id: 'pentest-layer',
    title: '7. طبقة اختبار الاختراق وفحص الثغرات',
    engineer: 'رقيه وسام محمد علي',
    color: '#ec4899',
    icon: 'Layers',
    description: 'فحص واختبار أمان تطبيقات الويب والـ APIs (Burp Suite و OWASP Top 10) وفحص شبكات الوايفاي وإعداد تقرير الـ Pentest الرسمي.',
    outputs: ['كشف واستغلال ثغرات الويب والـ APIs', 'فحص أمان وايفاي الـ Rover والشبكة', 'تقرير اختبار الاختراق الميداني الرسمي']
  },
  {
    id: 'ai-layer',
    title: '8. طبقة الذكاء الاصطناعي وتطوير المنظومة',
    engineer: 'محمود محمد أحمد عبد ربه سليمان',
    color: '#00d4ff',
    icon: 'Brain',
    description: 'محرك كشف الشذوذ (Isolation Forest & Autoencoder) + موديول تقييم المخاطر والـ GRC الذكي + خادم FastAPI + تطبيق الموبايل + هجمات الريد تيم المتقدمة.',
    outputs: ['كشف الشذوذ وتوليد Anomaly Score', 'مصفوفة المخاطر والامتثال الذكية (AI-GRC)', 'إصدار أمر العزل اللحظي للفايروول والريلاي']
  }
];

export const integrationFlows = [
  {
    from: 'مروان أشرف (ESP32)',
    to: 'محمود أشرف (MQTT Broker)',
    label: 'MQTT (Port 1883)',
    desc: 'نشر قراءات الحساسات (حرارة، تيار، غاز) في مواضيع topics محددة بصيغة JSON خفيفة.'
  },
  {
    from: 'محمد إمبابي (Switch)',
    to: 'شهد أحمد (pfSense)',
    label: '802.1Q Trunk',
    desc: 'تمرير ترافيك الـ 5 VLANs بكابل شبكة واحد عالي السرعة ليتم تطبيق التوجيه وقواعد الـ ACLs.'
  },
  {
    from: 'محمد إمبابي (Switch SPAN)',
    to: 'شامل وشهد ورقية',
    label: 'Port Mirroring',
    desc: 'نسخ كل ترافيك محطات المصنع والمصائد وبثه لأجهزة التحليل والسوك واختبار الاختراق.'
  },
  {
    from: 'محمود أشرف (معمل الشبكات)',
    to: 'عمار ياسر (AWS Cloud)',
    label: 'WireGuard (UDP 51820)',
    desc: 'نفق VPN مشفر يربط المعمل بالسحابة لنقل بيانات الـ Telemetry وسجلات المصائد بأمان.'
  },
  {
    from: 'شهد (pfSense) وإمبابي (Switch)',
    to: 'شامل شاهين (Wazuh SIEM)',
    label: 'Syslog (UDP 514)',
    desc: 'توجيه سجلات المرور وتنبيهات Suricata IDS وسجلات السويتش لمنصة الـ SIEM المركزية.'
  },
  {
    from: 'عمار ياسر (Honeypots)',
    to: 'شامل شاهين (Wazuh SIEM)',
    label: 'JSON Log Shipper',
    desc: 'تمرير جلسات المهاجمين المستدرجين في مصائد Cowrie و Conpot لتحليل تقنياتهم.'
  },
  {
    from: 'رقية وسام (Pentest & Recon)',
    to: 'محمود سلمان (AI & Dev)',
    label: 'Burp Suite / API Audit',
    desc: 'تسليم تقرير الثغرات المكتشفة في لوحة التحكم والـ APIs لسدها ودمجها مع تقرير هجمات الريد تيم.'
  },
  {
    from: 'محمود سلمان (AI Engine)',
    to: 'شهد (pfSense) ومروان (Relay)',
    label: 'REST API & MQTT Action',
    desc: 'إصدار أمر فوري لـ pfSense لنقل المهاجم لـ VLAN 50، وأمر لمفتاح الـ Relay لفصل الطاقة في 20ms.'
  }
];
