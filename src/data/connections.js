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
    title: '2. طبقة السويتش والبنية التحتية',
    engineer: 'رقيه وسام محمد علي',
    color: '#38bdf8',
    icon: 'Network',
    description: 'سويتش Cisco 2960 مقسم لـ 5 شبكات VLANs معزولة مع حماية المنافذ وبورت نسخ الترافيك SPAN.',
    outputs: ['عزل الأجهزة في شبكات فرعية', 'بورت SPAN ينسخ حركة البيانات', 'خط Trunk موصل للفايروول']
  },
  {
    id: 'protocols-layer',
    title: '3. طبقة بروتوكولات المصنع والمحاكاة',
    engineer: 'محمود أشرف السيد عبداللطيف',
    color: '#818cf8',
    icon: 'Layers',
    description: 'سيرفر Mosquitto MQTT Broker منظم + محاكي Modbus TCP + سيناريو موسع لمصنع افتراضي على EVE-NG.',
    outputs: ['قنوات اتصال Topics سريعة ومنظمة', 'محاكاة لشبكة مصنع ضخم قابل للتوسع', 'توجيه منخفض التأخير للبيانات']
  },
  {
    id: 'firewall-layer',
    title: '4. طبقة الجدار الناري والتفتيش',
    engineer: 'شهد أحمد جوده محمد',
    color: '#f43f5e',
    icon: 'ShieldAlert',
    description: 'جهاز pfSense Firewall يطبق قواعد المرور الصارمة (ACLs) ويفحص الحزم بـ Suricata IDS/IPS ويعزل الأجهزة في VLAN 50.',
    outputs: ['منع وصول الترافيك غير المصرح', 'رصد الهجمات بـ Suricata', 'عزل تلقائي للمهاجم في Quarantine']
  },
  {
    id: 'vpn-layer',
    title: '5. طبقة النفق المشفر والمراقبة',
    engineer: 'محمد أشرف محمد إمبابي',
    color: '#06b6d4',
    icon: 'Radio',
    description: 'نفق مشفر WireGuard VPN يربط المعمل بالسحابة + التقاط PCAPs مستمر + تمرير السجلات عبر Syslog.',
    outputs: ['نفق مشفر آمن وسريع لـ AWS', 'سحب ملفات PCAP لتدريب الـ AI', 'توجيه سجلات الشبكة لمنصة Wazuh']
  },
  {
    id: 'cloud-layer',
    title: '6. طبقة السحابة والمصائد المخادعة',
    engineer: 'عمار ياسر السيد عبدالله',
    color: '#a855f7',
    icon: 'Cloud',
    description: 'بنية AWS VPC مؤمنة + مصفوفة مصائد العسل (Cowrie + Dionaea + Conpot SCADA) + استخراج Threat Intel.',
    outputs: ['استدراج المهاجمين وتسجيل أوامرهم', 'توليد ملفات Threat Intel', 'استضافة سيرفرات Wazuh والـ Backend']
  },
  {
    id: 'soc-layer',
    title: '7. طبقة مركز العمليات الأمنية (SOC)',
    engineer: 'شامل محمد علي شاهين',
    color: '#3b82f6',
    icon: 'Eye',
    description: 'منصة Wazuh SIEM تجمع كل السجلات في شاشة واحدة + قواعد رصد مخصصة + كتيبات الاستجابة للحوادث.',
    outputs: ['تنبيهات فورية عند أي هجوم', 'داشبورد أمني شامل لايف', 'تقارير أمنية احترافية للحوادث']
  },
  {
    id: 'ai-software-layer',
    title: '8. طبقة الذكاء الاصطناعي وتطبيقات المراقبة',
    engineer: 'محمود محمد أحمد عبد ربه سليمان',
    color: '#00d4ff',
    icon: 'Brain',
    description: 'نماذج ML لكشف الشذوذ (Anomaly Detection) + خادم APIs بـ FastAPI + لوحة تحكم الويب وتطبيق الموبايل + هجمات الريد تيم.',
    outputs: ['تقييم نسبة الخطر Anomaly Score', 'أوامر عزل تلقائية فورية', 'لوحة تحكم وتطبيق موبايل تفاعلي لايف']
  }
];

export const integrationFlows = [
  {
    from: 'مروان أشرف (ESP32 & Rover)',
    to: 'رقيه وسام (Cisco Switch)',
    label: 'Physical Access Ports',
    desc: 'توصيل البوردات والحساسات في بورتات الـ Access المخصصة لكل VLAN'
  },
  {
    from: 'رقيه وسام (Cisco Switch)',
    to: 'شهد أحمد (pfSense Firewall)',
    label: '802.1Q Trunk Port',
    desc: 'تمرير ترافيك الـ 5 شبكات للفايروول لتطبيق قواعد العزل'
  },
  {
    from: 'رقيه وسام (SPAN Port)',
    to: 'محمد إمبابي (Traffic Collector)',
    label: 'Mirror Traffic',
    desc: 'نسخ جميع باكتس الشبكة للتحليل واستخراج ملفات الـ PCAP'
  },
  {
    from: 'مروان أشرف (Sensors)',
    to: 'محمود أشرف (MQTT Broker)',
    label: 'Sensor Telemetry',
    desc: 'إرسال قراءات المحطات الأربعة كل ثانية عبر Topics منظمة'
  },
  {
    from: 'شهد أحمد (pfSense) + إمبابي',
    to: 'عمار ياسر (AWS Cloud)',
    label: 'WireGuard Tunnel',
    desc: 'ربط الشبكة المحلية بالمعمل مع سيرفرات السحابة بنفق مشفر'
  },
  {
    from: 'عمار ياسر (Honeypots) + إمبابي (Syslog)',
    to: 'شامل شاهين (Wazuh SIEM)',
    label: 'Log Aggregation',
    desc: 'تغذية السجلات من المصائد والفايروول والسويتش في مكان واحد'
  },
  {
    from: 'محمود أشرف (MQTT) + إمبابي (PCAPs)',
    to: 'محمود سلمان (AI Engine & API)',
    label: 'Data Feed for AI',
    desc: 'تغذية نموذج الذكاء الاصطناعي بالبيانات لكشف الأنماط الشاذة'
  },
  {
    from: 'محمود سلمان (AI Detection)',
    to: 'شهد أحمد (pfSense API) + مروان (Relay)',
    label: 'Automated Response',
    desc: 'عزل المهاجم في VLAN 50 فوراً وفصل كهرباء المحطة فيزيائياً'
  }
];
