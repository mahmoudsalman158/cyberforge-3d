export const timelineMonths = [
  {
    month: 'الشهر 1',
    title: 'التأسيس والتعلم الفردي (Foundation & Setup)',
    status: 'جاهز للانطلاق',
    goals: [
      'رقيه: تعلم أوامر Cisco IOS وتوصيل السويتش وضبط الـ 5 VLANs الأساسية.',
      'محمود أشرف: تعلم MQTT وتثبيت سيرفر Mosquitto واختبار Modbus TCP.',
      'شهد: تثبيت pfSense على لابتوب والتدرب على كتابة قواعد الحماية.',
      'محمد إمبابي: فهم WireGuard واختبار نفق VPN محلي وتجربة tcpdump.',
      'شامل: تثبيت Wazuh SIEM محلياً والتعرف على بنية القواعد XML.',
      'عمار: إنشاء حساب AWS، ضبط VPC/IAM، والبحث في مصائد Conpot و Cowrie.',
      'مروان: طلب القطع والمستلزمات، تجميع شاسيه الـ Rover، واختبار بوردة ESP32.',
      'محمود سلمان: بناء بروتوتايب نموذج Anomaly Detection وبدء برمجة FastAPI.'
    ],
    deliverable: '✅ تثبيت جميع الأدوات وتجهيز البيئات وبدء التجارب الفردية بنجاح.'
  },
  {
    month: 'الشهر 2',
    title: 'البناء الفردي الكامل (Individual Build)',
    status: 'مخطط',
    goals: [
      'رقيه: اكتمال الـ 5 VLANs و Trunking و SPAN Mirroring على السويتش.',
      'محمود أشرف: تشغيل MQTT Broker مؤمن وبناء توبولوجي EVE-NG.',
      'شهد: تشغيل فايروول pfSense بكامل القواعد وتفعيل Suricata IDS/IPS.',
      'محمد إمبابي: ربط نفق WireGuard مستقر مع AWS وتشغيل سكربت PCAP.',
      'شامل: نشر Wazuh SIEM على السحابة وكتابة قواعد الرصد المخصصة الأولية.',
      'عمار: تأمين بيئة AWS VPC ونشر مصائد Cowrie و Conpot SCADA.',
      'مروان: برمجة 4 محطات ESP32 لإرسال قراءات MQTT وتشغيل حركة الـ Rover.',
      'محمود سلمان: تدريب نموذج الـ AI واكتمال endpoints الـ API ولوحة تحكم مبدئية.'
    ],
    deliverable: '✅ كل مكوّن في المنظومة يعمل كـ Standalone بنجاح تام.'
  },
  {
    month: 'الشهر 3',
    title: 'الربط الثنائي والتكامل (Inter-Connection)',
    status: 'مخطط',
    goals: [
      'رقيه + مروان: توصيل بوردات ESP32 والـ Rover على منافذ السويتش بالـ VLANs المناسبة.',
      'محمود أشرف + مروان: استقبال بيانات المحطات الأربعة على MQTT Broker بسلاسة.',
      'شهد + رقيه: اختبار الـ Trunk والتأكد من تطبيق قواعد العزل بين الـ VLANs.',
      'محمد إمبابي + عمار: ربط طرفي نفق WireGuard بنجاح بين المعمل والسحابة.',
      'محمد إمبابي + شامل: توجيه سجلات Syslogs من الفايروول والسويتش إلى Wazuh.',
      'عمار + شامل: استقبال سجلات المصائد السحابية في منصة Wazuh وتحليلها.'
    ],
    deliverable: '✅ الأجزاء تتحدث مع بعضها والبيانات تتدفق بين المعمل والسحابة.'
  },
  {
    month: 'الشهر 4',
    title: 'الهجمات الحية والدفاع التلقائي (Red vs Blue & Testing)',
    status: 'مخطط',
    goals: [
      'محمود سلمان: تنفيذ هجمات الريد تيم العملية (Port Scan, MQTT Tampering, Stuxnet-like).',
      'شامل: التحقق من إطلاق Wazuh لتنبيهات فورية عند كل هجوم.',
      'شهد: التحقق من اعتراض Suricata للـ Payloads الخبيثة وتفعيل الـ Block.',
      'محمود سلمان + مروان + شهد: اختبار دورة الاستجابة التلقائية الكاملة: AI يرصد → Wazuh ينبه → pfSense يعزل في VLAN 50 → ESP32 يفصل الريلاي فيزيائياً.',
      'الجميع: توثيق كل اختبار بالصور والفيديوهات والـ Screenshots.'
    ],
    deliverable: '✅ المنظومة تعمل End-to-End وتتصدى للهجمات في أجزاء من الثانية.'
  },
  {
    month: 'الشهر 5',
    title: 'البروفة النهائية وتجهيز المناقشة (Final Rehearsal)',
    status: 'مخطط',
    goals: [
      'مروان: اكتمال المجسم الفيزيائي المضيء مع المحطات الأربعة وعربة الـ Rover.',
      'محمود سلمان: النسخة النهائية للوحة التحكم Web وتطبيق الموبايل.',
      'شامل + عمار: تجهيز تقارير الـ SOC واستخبارات التهديدات Threat Intel.',
      'الفريق كاملاً: بروفة العرض الحي (Live Demo Rehearsal) وكتابة كتاب التخرج والعرض التقديمي.'
    ],
    deliverable: '✅ جاهزون 100% ليوم مناقشة مشروع التخرج والتفوق بإذن الله! 🎓'
  }
];

export const memberDetailedRoadmaps = [
  {
    id: 'mahmoud-salman',
    name: 'محمود محمد أحمد عبد ربه سليمان',
    role: 'Red Team, Full-Stack Software & AI Core',
    color: '#00d4ff',
    avatar: '👨‍💻',
    whyLearn: 'لبناء مخ المنظومة الذكي (AI) وواجهة التحكم التفاعلية وسيناريوهات الهجوم الحية لإبهار لجنة التحكيم.',
    projectImpact: 'يمكن المنظومة من كشف الهجمات الصناعية في أجزاء من الثانية واتخاذ قرار العزل التلقائي لايف.',
    months: [
      { m: 'شهر 1', focus: 'AI Anomaly Detection Prototype', detail: 'دراسة وتجربة خوارزميات Isolation Forest و Autoencoders على داتاسيت ترافيك وحساسات صناعية.' },
      { m: 'شهر 2', focus: 'FastAPI Backend & ML Pipeline', detail: 'بناء خادم FastAPI مع WebSockets لاستقبال بيانات MQTT وتمريرها لموديل الذكاء الاصطناعي.' },
      { m: 'شهر 3', focus: 'Web Dashboard & Mobile App', detail: 'برمجة واجهة الويب ولوحة التحكم التفاعلية وتطبيق الموبايل لعرض حالة المحطات والـ Rover.' },
      { m: 'شهر 4', focus: 'Red Team Attack Automation', detail: 'كتابة سكربتات هجومية متقدمة (Port Scan, MQTT Spoofing, Stuxnet-like Tampering) واختبار الرد الآلي.' },
      { m: 'شهر 5', focus: 'End-to-End Live Rehearsal', detail: 'إجراء بروفة العرض الحي الشامل وتوثيق الأكواد وكتابة جزء البرمجيات والذكاء الاصطناعي في كتاب المشروع.' }
    ]
  },
  {
    id: 'roqaya-wesam',
    name: 'رقيه وسام محمد علي',
    role: 'Network Infrastructure Architect',
    color: '#38bdf8',
    avatar: '👩‍💻',
    whyLearn: 'لبناء العمود الفقري الفيزيائي للشبكة وعزل البيئات الصناعية عن بعضها وحماية المنافذ.',
    projectImpact: 'تضمن عزل الأجهزة في 5 شبكات مستقلة وتمرير حركة البيانات بدون تداخل مع إتاحة نسخ الترافيك للتحليل.',
    months: [
      { m: 'شهر 1', focus: 'Cisco Switch IOS & Console Setup', detail: 'التدرب على إدارة سويتش Cisco 2960 عبر كابل الكونسول وأوامر التكوين والحماية الأساسية.' },
      { m: 'شهر 2', focus: '5 VLANs, 802.1Q Trunk & Port Security', detail: 'تقسيم السويتش لـ 5 شبكات وضبط الـ Trunk Port للفايروول وتفعيل حماية المنافذ بـ Sticky MAC.' },
      { m: 'شهر 3', focus: 'SPAN Port Mirroring & Physical Wiring', detail: 'تفعيل بورت نسخ الترافيك SPAN وتوصيل بوردات ESP32 والمصائد في بورتات الـ Access المحددة.' },
      { m: 'شهر 4', focus: 'Network Stress Testing & Isolation Verification', detail: 'اختبار ثبات السويتش أثناء هجمات الريد تيم والتأكد من عدم تسرب الباكتس بين الـ VLANs.' },
      { m: 'شهر 5', focus: 'Network Documentation & Final Topology', detail: 'رسم توبولوجي الشبكة النهائي وتوثيق جداول الـ IPs وإعدادات السويتش لكتاب التخرج.' }
    ]
  },
  {
    id: 'mahmoud-ashraf',
    name: 'محمود أشرف السيد عبداللطيف',
    role: 'OT Protocols & Simulation Specialist',
    color: '#818cf8',
    avatar: '👨‍💻',
    whyLearn: 'لإتقان لغة تخاطب المصانع (MQTT/Modbus) وبناء محاكاة افتراضية موسعة تثبت قابلية توسع المشروع.',
    projectImpact: 'يوفر قنوات تواصل فائقة السرعة ومنخفضة التأخير بين الحساسات والسيرفر، ومحاكاة مصنع كامل على EVE-NG.',
    months: [
      { m: 'شهر 1', focus: 'MQTT & Modbus TCP Deep Dive', detail: 'دراسة هيكل حزم Modbus TCP و MQTT وتثبيت سيرفر Mosquitto Broker تجريبي.' },
      { m: 'شهر 2', focus: 'Securing MQTT & EVE-NG Lab Setup', detail: 'تأمين الـ Broker بحسابات وصلاحيات وتصميم معمارية مصنع افتراضي ضخم على EVE-NG.' },
      { m: 'شهر 3', focus: 'Broker-to-Sensor Integration & Latency Tuning', detail: 'استقبال رسائل MQTT من بوردات ESP32 والتأكد من سرعة انتقال الرسائل بدون تأخير.' },
      { m: 'شهر 4', focus: 'OT Traffic Tampering Analysis', detail: 'مراقبة سلوك بروتوكولات الـ OT أثناء محاولات الحقن والتزوير ومساعدة الـ Blue Team في الرصد.' },
      { m: 'شهر 5', focus: 'Simulation Demo Prep & Protocol Docs', detail: 'تجهيز عرض محاكاة EVE-NG الحي ليوم المناقشة وكتابة فصل بروتوكولات الـ OT.' }
    ]
  },
  {
    id: 'shahd-ahmed',
    name: 'شهد أحمد جوده محمد',
    role: 'Firewall & Network Security Specialist',
    color: '#f43f5e',
    avatar: '👩‍💻',
    whyLearn: 'لبناء خط الدفاع الأول الذي يتحكم في كل باكت تمر بالشبكة ويعزل التهديدات تلقائياً.',
    projectImpact: 'تطبيق قواعد حماية صارمة وفحص الحزم بـ Suricata ونقل أي جهاز مصاب فوراً إلى شبكة الحجر الصحي.',
    months: [
      { m: 'شهر 1', focus: 'pfSense OS Installation & Interface Setup', detail: 'تحويل جهاز كمبيوتر إلى فايروول pfSense وضبط منافذ WAN و LAN وتجهيز الـ VLAN Sub-interfaces.' },
      { m: 'شهر 2', focus: 'Firewall Rules & Suricata IDS/IPS Deployment', detail: 'كتابة قواعد المرور الصارمة وتثبيت حزمة Suricata وتفعيل قواعد كشف التسلل (Emerging Threats).' },
      { m: 'شهر 3', focus: 'Dynamic Quarantine & Syslog Forwarding', detail: 'برمجة آلية نقل المهاجم تلقائياً إلى VLAN 50 وتوجيه سجلات الفايروول لمنصة Wazuh.' },
      { m: 'شهر 4', focus: 'Live Attack Blocking & IPS Validation', detail: 'اختبار تصدي الفايروول لهجمات الـ Port Scan والـ Brute Force وعزل الأجهزة المشبوهة لايف.' },
      { m: 'شهر 5', focus: 'Security Policy Documentation & Runbooks', detail: 'توثيق مصفوفة قواعد الفايروول وتفاصيل Suricata لكتاب المناقشة.' }
    ]
  },
  {
    id: 'mohamed-embaby',
    name: 'محمد أشرف محمد إمبابي',
    role: 'VPN Tunnels & Traffic Telemetry Specialist',
    color: '#06b6d4',
    avatar: '👨‍💻',
    whyLearn: 'لربط شبكة المعمل بالسحابة بنفق مشفر آمن وسحب وتحليل حركة البيانات لتغذية الـ SIEM والـ AI.',
    projectImpact: 'يضمن اتصالاً آمناً ومشفراً بين المعمل وسيرفرات AWS واستخراج ملفات PCAP لتدريب الذكاء الاصطناعي.',
    months: [
      { m: 'شهر 1', focus: 'WireGuard Protocol & Packet Sniffing Basics', detail: 'فهم بروتوكول WireGuard وتوليد المفاتيح والتدرب على أدوات tcpdump و Wireshark.' },
      { m: 'شهر 2', focus: 'Site-to-Site Tunnel & Automated PCAP Script', detail: 'إنشاء نفق مشفر بين pfSense وسحابة AWS وبرمجة سكربت أوتوماتيكي لالتقاط وحفظ الـ PCAPs.' },
      { m: 'شهر 3', focus: 'SPAN Traffic Capture & Syslog Forwarding', detail: 'ربط سيرفر المراقبة ببورت الـ SPAN وتمرير سجلات السويتش والفايروول لسيرفر Wazuh.' },
      { m: 'شهر 4', focus: 'Traffic Analysis during Attacks & IoCs Extraction', detail: 'تحليل ترافيك هجمات الريد تيم واستخراج مؤشرات الاختراق (IoCs) ومراقبة استهلاك الباندويث.' },
      { m: 'شهر 5', focus: 'Telemetry Reports & Packet Analysis Walkthrough', detail: 'إعداد تقارير تحليل حركة البيانات ومخططات الـ Wireshark لعرضها على لجنة المناقشة.' }
    ]
  },
  {
    id: 'shamel-shaheen',
    name: 'شامل محمد علي شاهين',
    role: 'SOC Analyst (Blue Team Operations)',
    color: '#3b82f6',
    avatar: '👨‍💻',
    whyLearn: 'لبناء وتشغيل مركز العمليات الأمنية (SIEM) ورصد الهجمات في لحظة وقوعها وإدارة الاستجابة.',
    projectImpact: 'يوفر لوحة موحدة تجمع كل سجلات المصنع والمصائد والفايروول وتطلق الإنذارات الفورية.',
    months: [
      { m: 'شهر 1', focus: 'Wazuh SIEM Architecture & Installation', detail: 'تثبيت Wazuh Manager و Indexer و Dashboard على سيرفر Ubuntu وفهم هيكل القواعد.' },
      { m: 'شهر 2', focus: 'Agent Deployment & Custom XML Detection Rules', detail: 'نشر الـ Agents على الخوادم وكتابة قواعد XML مخصصة لاكتشاف هجمات المصائد والتلاعب بالحساسات.' },
      { m: 'شهر 3', focus: 'Log Correlation & Custom SOC Dashboard', detail: 'ربط وتجميع السجلات من pfSense والمصائد والـ AI وبناء لوحة داشبورد أمنية في Kibana.' },
      { m: 'شهر 4', focus: 'Incident Response Drills & Alert Triage', detail: 'إجراء تدريبات الاستجابة للحوادث أثناء هجمات الريد تيم وتطبيق خطوات التحقيق والعزل.' },
      { m: 'شهر 5', focus: 'SOC Runbooks & Incident Reports Preparation', detail: 'كتابة كتيبات الاستجابة للحوادث والتقارير الأمنية الشاملة لكتاب التخرج.' }
    ]
  },
  {
    id: 'ammar-yasser',
    name: 'عمار ياسر السيد عبدالله',
    role: 'Cloud Security & Deception Architect',
    color: '#a855f7',
    avatar: '👨‍💻',
    whyLearn: 'لبناء سحابة آمنة ونشر مصفوفة مصائد مخادعة تستدرج المهاجمين وتجمع Threat Intelligence.',
    projectImpact: 'حماية البنية التحتية على AWS وخداع المهاجمين بمصائد SCADA و SSH واستخراج بصمات التهديدات.',
    months: [
      { m: 'شهر 1', focus: 'AWS Cloud Hardening (VPC, IAM, Security Groups)', detail: 'إنشاء VPC مخصصة، ضبط الـ Subnets، وتطبيق مبدأ Least Privilege على صلاحيات الـ IAM.' },
      { m: 'شهر 2', focus: 'Deploying Cowrie, Dionaea & Conpot SCADA', detail: 'نشر مصفوفة المصائد المخادعة (Cowrie SSH, Dionaea, Conpot SCADA) في حاويات Docker.' },
      { m: 'شهر 3', focus: 'Honeyfiles Placement & SIEM Integration', detail: 'زرع ملفات فخاخ حساسة (Honeyfiles) وربط سجلات المصائد بمنصة Wazuh.' },
      { m: 'شهر 4', focus: 'Threat Intelligence Extraction & Feed Generation', detail: 'استخراج عناوين المهاجمين والـ Hashes والكلمات المستخدمة وتوليد تقارير Threat Intel متجددة.' },
      { m: 'شهر 5', focus: 'Cloud Architecture Diagram & Threat Reports', detail: 'توثيق معمارية السحابة وتقارير استخبارات التهديدات لعرضها على لجنة المناقشة.' }
    ]
  },
  {
    id: 'marwan-ashraf',
    name: 'مروان أشرف جوده إبراهيم',
    role: 'Hardware & Embedded Systems Engineer',
    color: '#10b981',
    avatar: '👨‍💻',
    whyLearn: 'لبناء الكيان الفيزيائي الكامل للمشروع: عربة الفحص (Rover)، محطات المصنع الأربعة، ومفاتيح العزل الفيزيائي.',
    projectImpact: 'تحويل المشروع من مجرد برمجيات إلى مصنع فيزيائي حقيقي ملموس مزود بروبوت فحص ومفاتيح أمان.',
    months: [
      { m: 'شهر 1', focus: 'Component Sourcing & ESP32 Sensor Interfacing', detail: 'شراء القطع المستعملة وبرمجة ESP32 لقراءة حساسات الحرارة والتيار والتدفق والحركة.' },
      { m: 'شهر 2', focus: '4 Industrial Stations & Relay Kill-Switch Build', detail: 'برمجة بوردات ESP32 لإرسال بيانات MQTT وتوصيل دوائر الـ Relays للفصل الفيزيائي ولمبات البيان.' },
      { m: 'شهر 3', focus: 'Wireless Cyber-Rover Assembly & Firmware', detail: 'تجميع شاسيه الـ Rover اللاسلكي، درايفر L298N، حساسات تفادي العوائق، وكارت فحص الوايفاي.' },
      { m: 'شهر 4', focus: 'Autonomous Patrol & Hardware Kill-Switch Testing', detail: 'اختبار حركة الـ Rover اللاسلكية وفحص الشبكة، واختبار استجابة الـ Relay لأمر isolate في أجزاء من الثانية.' },
      { m: 'شهر 5', focus: 'Physical Factory Demo Model Finishing', detail: 'بناء وتجميع المجسم الفيزيائي النهائي بالأكريليك والإضاءات الاحترافية للعرض يوم المناقشة.' }
    ]
  }
];
