export const teamMembers = [
  {
    id: 'mahmoud-salman',
    name: 'محمود محمد أحمد عبد ربه سليمان',
    role: 'Red Team Operator, Full-Stack Software & AI Core Architect',
    category: 'Software & AI',
    color: '#00d4ff',
    badge: 'Red Team / AI / Full-Stack',
    avatar: '👨‍💻',
    summary: 'مسؤول عن قيادة سيناريوهات هجمات الريد تيم، تطوير لوحة تحكم الويب وتطبيق الموبايل، وبناء نماذج الذكاء الاصطناعي لكشف الشذوذ، وهندسة خوادم الـ APIs والـ WebSockets.',
    detailedMission: 'بناء العقل الذكي للمنظومة الذي يربط العالم الفيزيائي (الحساسات والمحركات) بالبنية الشبكية والسحابية، وتطوير واجهات المراقبة والتحكم اللحظية للمسؤولين، مع تصميم وتنفيذ هجمات سيبرانية متقدمة على المنظومة لإثبات كفاءة آليات الكشف والاستجابة التلقائية.',
    whyThisRoleMatters: 'بدون محرك الذكاء الاصطناعي، ستعتمد المنظومة فقط على القواعد الثابتة (Rule-based) التي تفشل أمام هجمات التلاعب التدريجي والتزوير الدقيق للبيانات. وبدون الواجهات البرمجية وتطبيق الموبايل ولوحة التحكم، لن يتمكن مهندسو الأمن من رؤية الأحداث لايف أو التحكم في الـ Rover واستلام الإنذارات في ثوانٍ.',
    howItIsImplemented: '1. تدريب نماذج Machine Learning (Isolation Forest & Autoencoder) باستخدام Scikit-learn و PyTorch على مجموعات بيانات حركة المرور الصناعية وقراءات الحساسات لتحديد الأنماط الشاذة وتوليد Anomaly Score فوري.\n2. برمجة خادم Backend بـ FastAPI يدعم بروتوكول WebSockets لضمان التحديث اللحظي لبيانات الحساسات وتنبيهات الأمان بدون أي تأخير.\n3. تطوير لوحة تحكم ويب تفاعلية بـ React وتطبيق موبايل بـ Flutter يحتوي على خريطة المصنع، حالة الأجهزة، وواجهة تحكم يدوي في حركة الـ Rover في حالات الطوارئ.\n4. إعداد سكربتات هجومية متقدمة في بيئة Kali Linux باستخدام Python و Scapy و Nmap لمحاكاة هجمات Stuxnet و MQTT Injection و Brute-Force وتنفيذها مباشرة أمام لجنة التحكيم.',
    practicalLabSteps: [
      'تجهيز بيئة Python 3.11 وتثبيت مكتبات الذكاء الاصطناعي (PyTorch, Scikit-learn, Pandas, NumPy).',
      'بناء وتدريب نموذج كشف الشذوذ على قراءات الحساسات الطبيعية وتحديد عتبة الإنذار (Threshold > 80%).',
      'تطوير وتوثيق نقاط الـ REST APIs ونظام الـ WebSockets باستخدام إطار عمل FastAPI.',
      'تطوير واجهات الداشبورد بـ React و Tailwind CSS وتطبيق الموبايل للتحكم في الـ Rover واستقبال الـ Push Notifications.',
      'كتابة وتجربة 7 سيناريوهات هجومية آمنة ومتحكم بها لاختبار دورة الاستجابة التلقائية كاملة.'
    ],
    deliverables: [
      'نموذج الذكاء الاصطناعي لكشف الشذوذ (Isolation Forest & Autoencoders) بدقة عالية',
      'خادم REST APIs و WebSockets بـ FastAPI لربط كافة أجزاء المنظومة لايف',
      'لوحة تحكم الويب (Web Dashboard) التفاعلية لعرض حالة المصنع والإنذارات الحية',
      'تطبيق الموبايل (Flutter/React Native) للتحكم اللاسلكي بالـ Rover واستقبال الإشعارات الفورية',
      'حزمة سكربتات وسيناريوهات هجمات الريد تيم (7 سيناريوهات) موثقة وجاهزة للتنفيذ لايف'
    ],
    tools: ['Python', 'FastAPI', 'PyTorch / Scikit-learn', 'React', 'Flutter', 'Kali Linux', 'Nmap', 'Scapy', 'Docker'],
    searchKeywords: [
      'Isolation Forest anomaly detection python tutorial',
      'FastAPI WebSocket Realtime Dashboard industrial IoT',
      'Flutter IoT monitoring app with MQTT and Push Notifications',
      'SCADA penetration testing tools python script Modbus MQTT',
      'Simulating Stuxnet PLC attack python tutorial'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: بناء وتدريب محرك الذكاء الاصطناعي (AI Anomaly Detection)',
        desc: 'تطوير نموذج Machine Learning يتعلم النمط الطبيعي لقراءات الحساسات وترافيك الشبكة، ويكشف فورياً أي تلاعب أو حقن لبيانات خبيثة مع إعطاء درجة خطورة Anomaly Score من 0 إلى 100%.'
      },
      {
        phase: 'المرحلة 2: خادم الـ APIs و WebSockets المركزي (Backend & Integration)',
        desc: 'برمجة خادم Backend بـ FastAPI يعمل كمحور ربط رئيسي: يستقبل قراءات MQTT، يمررها للـ AI، يرسل تنبيهات للـ SIEM، ويبعث أوامر العزل لـ pfSense ومفاتيح الـ Relay.'
      },
      {
        phase: 'المرحلة 3: لوحة التحكم الويب وتطبيق الموبايل (Full-Stack UI)',
        desc: 'بناء داشبورد الويب وتطبيق الهاتف لمراقبة خريطة المصنع، حالة الأجهزة (أخضر/أصفر/أحمر)، استعراض نتائج فحص الـ Rover اللاسلكي، والتحكم اليدوي في الطوارئ.'
      },
      {
        phase: 'المرحلة 4: سيناريوهات هجمات الريد تيم الحية (Red Teaming Playbooks)',
        desc: 'تجهيز سكربتات هجومية متقنة (Port Scanning, MQTT Spoofing, Stuxnet-like OT tampering, Brute-force) لاختبار كفاءة الدفاع الذاتي أمام الدكاترة ولجنة التحكيم.'
      }
    ],
    connectionsWith: [
      { name: 'مروان أشرف', detail: 'استقبال قراءات الحساسات وبيانات الـ Rover عبر MQTT، وإرسال أمر isolate لتفعيل الـ Physical Kill-Switch وفصل المحطة فيزيائياً' },
      { name: 'شهد أحمد', detail: 'إرسال أمر عزل المهاجم آلياً عبر pfSense REST API إلى VLAN 50 (Quarantine) فور تأكيد هجوم الـ AI' },
      { name: 'شامل شاهين', detail: 'تغذية منصة Wazuh SIEM بتنبيهات الذكاء الاصطناعي ونتائج فحص الثغرات لربطها في التقارير الأمنية' },
      { name: 'عمار ياسر', detail: 'نشر واستضافة الـ Backend ونماذج الـ AI على سيرفرات AWS السحابية وتجربة الهجوم على المصائد' }
    ]
  },
  {
    id: 'roqaya-wesam',
    name: 'رقيه وسام محمد علي',
    role: 'Network Infrastructure Architect',
    category: 'Network',
    color: '#38bdf8',
    badge: 'Switching & Infra',
    avatar: '👩‍💻',
    summary: 'مسؤولة عن إعداد وضبط السويتش الفيزيائي (Cisco Switch)، تقسيم الـ 5 VLANs، ضبط الـ Trunking، حماية المنافذ (Port Security)، وبورت نسخ الترافيك (SPAN).',
    detailedMission: 'بناء العمود الفقري الفيزيائي لشبكة المصنع وتقسيمها إلى بيئات معزولة تماماً لمنع انتشار الهجمات وتأمين كل منفذ ضد محاولات التسلل أو توصيل أجهزة غير مصرح بها.',
    whyThisRoleMatters: 'في البيئات الصناعية، الشبكة المسطحة (Flat Network) هي أكبر خطر؛ فاختراق جهاز واحد يعني الوصول لكل المحطات. تقسيم الـ VLANs يضمن عزل الأجهزة، وبورت الـ SPAN يتيح مراقبة كل باكت وتحليلها بدون التأثير على سرعة الشبكة.',
    howItIsImplemented: '1. استخدام كابل الكونسول للاتصال بسويتش Cisco Catalyst 2960 وضبط الإعدادات الأساسية وبروتوكول SSH الآمن.\n2. إنشاء 5 شبكات VLANs: (VLAN 10: SCADA/IoT, VLAN 20: Honeypots, VLAN 30: Rover, VLAN 40: Management, VLAN 50: Quarantine).\n3. ضبط بروتوكول 802.1Q Trunking على المنفذ المتصل بجهاز الفايروول (pfSense) لنقل الترافيك الموسوم (Tagged).\n4. تفعيل ميزة Port Security مع تثبيت عناوين MAC الموثوقة (Sticky MAC) وتحديد الإجراء (Shutdown/Restrict) عند رصد جهاز غريب.\n5. برمجة جلسة Port Mirroring (SPAN) لنسخ ترافيك شبكات SCADA و Honeypots إلى المنفذ المتصل بجهاز تحليل ومراقبة الترافيك.',
    practicalLabSteps: [
      'توصيل كابل Console بالسويتش وفتح جلسة الاتصال بـ PuTTY على سرعة 9600 Baud.',
      'إنشاء الـ 5 VLANs وتسميتها بالأسماء المعيارية للمشروع.',
      'تخصيص منافذ Access لكل من بوردات ESP32 والمصائد والـ Rover وتفعيل Port Security.',
      'ضبط منفذ الـ Trunk وتفعيل Encapsulation dot1q لتوصيله بفايروول pfSense.',
      'إدخال أوامر `monitor session 1 source vlan 10,20` و `monitor session 1 destination interface` لتفعيل الـ SPAN.'
    ],
    deliverables: [
      'ملف إعدادات السويتش الفيزيائي (Cisco 2960 Running Configuration)',
      'مخطط تقسيم الـ 5 شبكات المعزولة (VLANs 10, 20, 30, 40, 50)',
      'تفعيل بورت الـ SPAN Mirroring لنسخ كامل حركة الترافيك للتحليل',
      'سياسات حماية المنافذ (Port Security & Sticky MAC Addresses)'
    ],
    tools: ['Cisco Catalyst 2960', 'Console Cable', 'PuTTY / SecureCRT', 'Packet Tracer / Draw.io'],
    searchKeywords: [
      'Cisco 2960 VLAN configuration step by step for beginners',
      'How to configure Port Mirroring SPAN on Cisco Catalyst switch',
      'Configuring 802.1Q Trunk between Cisco Switch and pfSense',
      'Cisco Switch Port Security sticky MAC address setup',
      'Network Segmentation best practices for ICS OT networks'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: أساسيات Cisco IOS وإدارة السويتش',
        desc: 'توصيل كابل الـ Console بالسويتش الفيزيائي، استخدام PuTTY، ضبط كلمات المرور، وفهم بنية المنافذ والأوامر الأساسية.'
      },
      {
        phase: 'المرحلة 2: إنشاء الـ 5 VLANs وعزل البيئات',
        desc: 'تقسيم السويتش لـ 5 شبكات (10: SCADA, 20: Honeypot, 30: Rover, 40: Mgmt, 50: Quarantine) لضمان عدم وصول أي جهاز خارج نطاقه المسموح.'
      },
      {
        phase: 'المرحلة 3: ضبط الـ Trunking وأمان المنافذ (Port Security)',
        desc: 'إعداد خط الـ 802.1Q Trunk لنقل بيانات الـ VLANs لجهاز الفايروول، وقفل المنافذ غير المستخدمة وتفعيل MAC Sticky لمنع توصيل أي جهاز غريب.'
      },
      {
        phase: 'المرحلة 4: تفعيل بورت المراقبة (SPAN / Port Mirroring)',
        desc: 'نسخ حركة البيانات من شبكات SCADA و Honeypot وتوجيهها مباشرة لبورت التحليل لتمكين مهندس المراقبة من التقاط الـ PCAPs.'
      }
    ],
    connectionsWith: [
      { name: 'شهد أحمد', detail: 'تسليم كابل الـ 802.1Q Trunk إلى منفذ الـ LAN في جهاز pfSense لتطبيق سياسات الحماية والتوجيه' },
      { name: 'محمد إمبابي', detail: 'تجهيز بورت الـ SPAN لتمكينه من التقاط وتحليل الـ PCAPs وتمرير سجلات الترافيك' },
      { name: 'مروان أشرف', detail: 'تخصيص منافذ الـ Access Ports لأجهزة ESP32 ومسار الـ Rover اللاسلكي' },
      { name: 'محمود أشرف', detail: 'تنسيق نطاق الـ VLANs لضبط بروتوكولات الـ OT وسيرفر الـ MQTT Broker' }
    ]
  },
  {
    id: 'mahmoud-ashraf',
    name: 'محمود أشرف السيد عبداللطيف',
    role: 'OT Protocols & Simulation Architect',
    category: 'Network',
    color: '#818cf8',
    badge: 'OT & Industrial Protocols',
    avatar: '👨‍💻',
    summary: 'مسؤول عن هندسة بروتوكولات المصانع (Modbus TCP, MQTT Broker, OPC-UA)، إعداد التوجيه بين الشبكات، والمحاكاة الافتراضية الموسعة على EVE-NG/GNS3.',
    detailedMission: 'هندسة لغة التخاطب بين الحساسات والمتحكمات الصناعية والخوادم المركزية، وضمان تدفق بيانات المصنع بسرعة عالية وزمن استجابة فائق الانخفاض، مع بناء بيئة محاكاة افتراضية لمصنع ضخم تبرهن على إمكانية تطبيق المشروع في منشآت كبرى.',
    whyThisRoleMatters: 'الأنظمة الصناعية تعتمد على بروتوكولات متخصصة غير مشفرة تقليدياً مثل Modbus و MQTT. ضبط وسيط الرسائل (Broker) وتأمينه وتنظيم قنوات الـ Topics يمنع تداخل البيانات، والمحاكاة على EVE-NG تمنح المشروع وزناً أكاديمياً كبيراً بإثبات قابلية التوسع (Scalability).',
    howItIsImplemented: '1. تثبيت Mosquitto MQTT Broker على نظام Linux وتأمينه بكلمات سر وصلاحيات وصول (ACLs) محددة لكل محطة.\n2. تصميم هيكل Topics هرمي منظم: `/factory/station1/cooling/telemetry`, `/factory/station2/furnace/telemetry`, `/factory/commands/isolate`.\n3. إعداد خادم محاكاة لبروتوكول Modbus TCP باستخدام مكتبة `pymodbus` لمحاكاة قراءة وكتابة سجلات الـ Holding Registers.\n4. بناء توبولوجي متقدم على EVE-NG يضم راوترات Cisco و FortiGate و SCADA PLCs لمحاكاة مصنع بتروكيماويات أو أدوية متعدد الفروع.',
    practicalLabSteps: [
      'تثبيت Mosquitto على Ubuntu وتعديل ملف `mosquitto.conf` لمنع الوصول المجهول (allow_anonymous false).',
      'إنشاء ملف المستخدمين المشفر `mosquitto_passwd` وضبط صلاحيات كل بوردة ESP32.',
      'كتابة سكربت Python لاختبار النشر والاشتراك (Publish/Subscribe) وقياس زمن وصول الرسائل (Latency Benchmarking).',
      'بناء سيناريو EVE-NG المتكامل وحفظ ملفات الـ UNetLab لربطها في العرض التقديمي.'
    ],
    deliverables: [
      'سيرفر Mosquitto MQTT Broker مؤمن ومنظم بـ Topics صناعية',
      'محاكي بروتوكول Modbus TCP للأجهزة والمحطات الصناعية',
      'سيناريو محاكاة شبكة صناعية متكاملة على EVE-NG',
      'جداول التوجيه والتأكد من انخفاض زمن الاستجابة (Low Latency)'
    ],
    tools: ['Mosquitto MQTT', 'Modbus TCP', 'EVE-NG / GNS3', 'Wireshark', 'Python pymodbus'],
    searchKeywords: [
      'How Modbus TCP works Wireshark packet analysis',
      'Deploying Mosquitto MQTT broker Ubuntu with user authentication',
      'EVE-NG industrial network topology simulation guide',
      'Inter-VLAN routing configuration with Router-on-a-stick',
      'Python pymodbus tutorial read and write registers'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: دراسة بنية بروتوكولات الـ OT الصناعية',
        desc: 'فهم حزم بيانات Modbus TCP (بورت 502) و MQTT (بورت 1883) وهيكل الرسائل وسجلات الحساسات وطريقة التلاعب بها.'
      },
      {
        phase: 'المرحلة 2: نشر وتأمين Mosquitto MQTT Broker',
        desc: 'تثبيت السيرفر وضبط Authentication بقفل الحسابات بكلمات سر وتشفير TLS اختياري وضبط Topics هرمية منظمة لمحطات المصنع.'
      },
      {
        phase: 'المرحلة 3: محاكاة المصنع الموسع على EVE-NG',
        desc: 'بناء توبولوجي متقدم لمصنع ضخم يضم عشرات الراوترات والمتحكمات لإثبات قابلية توسع المشروع أمام لجنة المناقشة.'
      },
      {
        phase: 'المرحلة 4: تحسين مسارات التوجيه وسرعة النقل',
        desc: 'اختبار سرعة انتقال البيانات بين الحساسات والفايروول والداشبورد وضمان عدم وجود تأخير يؤثر على إشارات الحساسات.'
      }
    ],
    connectionsWith: [
      { name: 'مروان أشرف', detail: 'استقبال رسائل MQTT من بوردات ESP32 والتأكد من توافق الـ Topics وتنسيق JSON وتأكيد استلام الأوامر' },
      { name: 'محمود سلمان', detail: 'توفير تدفق البيانات للـ Backend ونماذج الذكاء الاصطناعي عبر اشتراكات الـ MQTT المنظمة' },
      { name: 'رقيه وسام', detail: 'تثبيت الـ Broker والمحاكاة على الـ VLANs المخصصة بالسويتش' },
      { name: 'شهد أحمد', detail: 'التأكد من مطابقة سياسات التوجيه بين الشبكات مع قواعد الفايروول' }
    ]
  },
  {
    id: 'shahd-ahmed',
    name: 'شهد أحمد جوده محمد',
    role: 'Firewall & Network Security Specialist',
    category: 'Network',
    color: '#f43f5e',
    badge: 'Firewall & IDS/IPS',
    avatar: '👩‍💻',
    summary: 'مسؤولة عن بناء وإدارة جدار الحماية (pfSense Firewall)، كتابة سياسات وقواعد المرور الصارمة (ACLs)، تفعيل Suricata IDS/IPS، وبرمجة آلية العزل التلقائي (Dynamic Quarantine).',
    detailedMission: 'إقامة الحصن الأمني والجدار الناري للمنظومة الذي يراقب كل اتصال، ويمنع أي حركة غير مصرح بها بين الشبكات، ويستخدم فحص الحزم المعمق (Deep Packet Inspection) لكشف ومنع الهجمات ونقل الأجهزة المخترقة فوراً إلى الحجر الصحي.',
    whyThisRoleMatters: 'بدون جدار حماية قوي وقواعد ACLs محكمة، يمكن لأي مهاجم مخترق لحساس أو مصيدة أن يتسلل إلى شبكة الإدارة أو الخوادم المركزية (Lateral Movement). الفايروول هو الأداة التنفيذية التي تحول قرارات الذكاء الاصطناعي إلى عزل شبكي حقيقي في أجزاء من الثانية.',
    howItIsImplemented: '1. تثبيت pfSense OS على جهاز مخصص وضبط واجهة WAN للاتصال الخارجي وسحابة AWS، وواجهة LAN مقسمة إلى 5 Virtual Interfaces (VLANs 10, 20, 30, 40, 50).\n2. كتابة سياسات جدار الحماية الصارمة (Zero Trust approach): منع ترافيك SCADA من الوصول للـ Management، والسماح للمصائد باستقبال الهجمات مع منعها الصارم من الاتصال بالخارج.\n3. تثبيت حزمة Suricata وضبطها كـ IDS/IPS مع تفعيل قواعد Emerging Threats لاكتشاف هجمات DoS واستغلال الثغرات.\n4. بناء آلية Dynamic Quarantine عبر برمجة سكربت أو استدعاء pfSense REST API لتعديل جداول الحجب (pfctl tables) ونقل الـ IP المشبوه إلى VLAN 50 فورياً.',
    practicalLabSteps: [
      'تثبيت pfSense من فلاشة USB وضبط إعدادات الشبكة ومنافذ الـ Ethernet.',
      'إنشاء واجهات الـ VLANs الخمس وضبط DHCP Server لكل شبكة.',
      'كتابة وتجربة قواعد المرور واختبار العزل بـ Ping و Nmap للتأكد من حظر الاتصالات غير المصرح بها.',
      'تثبيت وتحديث قواعد Suricata واختبار تشغيلها في نمط الـ Inline Blocking لمنع الهجمات.',
      'برمجة وتجربة سكربت نقل الجهاز المصاب لـ VLAN 50 والتأكد من إرسال سجلات الحظر لـ Wazuh.'
    ],
    deliverables: [
      'نظام pfSense متكامل بقواعد حماية صارمة بين الـ VLANs',
      'قواعد ومنظومة رصد التسلل Suricata IDS/IPS مفعلة ومحدثة',
      'آلية عزل الأجهزة المخترقة تلقائياً بنقلها لـ VLAN 50 (Quarantine)',
      'سجلات الترافيك وتوجيه الـ Syslogs لمنصة الـ SIEM'
    ],
    tools: ['pfSense', 'Suricata IDS/IPS', 'pfSense REST API / pfctl', 'Snort rules', 'Wireshark'],
    searchKeywords: [
      'pfSense complete beginner guide installation and VLAN setup',
      'pfSense firewall rules best practices network segmentation',
      'Installing and configuring Suricata on pfSense step by step',
      'Automating pfSense firewall rules via API or script python',
      'pfSense quarantine VLAN setup for infected endpoints'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: تثبيت وإعداد pfSense على جهاز مخصص',
        desc: 'تحويل جهاز كمبيوتر/لابتوب قديم إلى جدار حماية احترافي وضبط واجهات WAN و LAN و 5 VLAN Sub-interfaces.'
      },
      {
        phase: 'المرحلة 2: كتابة سياسات وقواعد المرور الصارمة (ACLs)',
        desc: 'منع وصول ترافيك الحساسات لشبكة الإدارة، والسماح للمصائد باستقبال الهجمات مع منعها من الهجوم للخارج.'
      },
      {
        phase: 'المرحلة 3: تفعيل وفحص الحزم بـ Suricata IDS/IPS',
        desc: 'تشغيل حزم قواعد الحماية المتقدمة (Emerging Threats) لرصد محاولات استغلال الثغرات وهجمات DoS فورياً.'
      },
      {
        phase: 'المرحلة 4: بناء آلية الحجر الصحي الذاتي (Dynamic Quarantine)',
        desc: 'برمجة استجابة فورية تنقل أي IP مشبوه تلقائياً إلى VLAN 50 المعزول كلياً عبر pfSense API أو جداول الـ Block.'
      }
    ],
    connectionsWith: [
      { name: 'رقيه وسام', detail: 'استقبال الـ Trunk القادم من السويتش وتطبيق القواعد على كل VLAN والتأكد من صحة الـ Tagging' },
      { name: 'محمد إمبابي', detail: 'السماح بمرور ترافيك نفق WireGuard VPN المشفر وتوجيه الـ Syslogs بأمان' },
      { name: 'محمود سلمان', detail: 'استقبال أوامر العزل الآلية القادمة من الـ AI والـ API لنقل المهاجم للحجر الصحي' },
      { name: 'شامل شاهين', detail: 'إرسال سجلات وتنبيهات Suricata لمنظومة Wazuh لتحليلها وعرضها في الداشبورد' }
    ]
  },
  {
    id: 'mohamed-embaby',
    name: 'محمد أشرف محمد إمبابي',
    role: 'VPN Tunnels & Telemetry Specialist',
    category: 'Network',
    color: '#06b6d4',
    badge: 'VPN & Traffic Telemetry',
    avatar: '👨‍💻',
    summary: 'مسؤول عن إنشاء نفق VPN مشفر ومستقر يربط شبكة المعمل بسحابة AWS (WireGuard)، جمع وتحليل الباكتس (PCAP / Wireshark / tcpdump)، وتمرير سجلات الشبكة لمنصة الـ SIEM.',
    detailedMission: 'تأمين الاتصال بين البنية الفيزيائية في المعمل والمنصة السحابية بنفق مشفر عالي السرعة، والتقاط حركة المرور في الوقت الفعلي لتحليل الهجمات واستخراج البصمات وتغذية نماذج الذكاء الاصطناعي بالبيانات.',
    whyThisRoleMatters: 'نقل سجلات الأجهزة وترافيك المصنع إلى السحابة عبر الإنترنت العام دون نفق VPN يعرض البيانات الصناعية للتنصت والاعتراض (Man-in-the-Middle). استخدام WireGuard يضمن تشفيراً فائقاً وسرعة عالية، والتقاط الـ PCAPs يمثل المادة الخام التي يعتمد عليها الـ SOC والـ AI.',
    howItIsImplemented: '1. توليد مفاتيح التشفير (Public/Private Keys) وضبط خادم WireGuard على سيرفر AWS EC2 وعميل WireGuard على فايروول pfSense.\n2. ضبط مسارات التوجيه (Routing Tables) لربط الشبكة المحلية بالمعمل (192.168.0.0/16) بشبكة السحابة (10.0.0.0/16).\n3. برمجة سكربت Python/Bash يستمع لبورت الـ SPAN ويستخدم `tcpdump` لتجزئة الترافيك إلى ملفات PCAP دورية ورفعها إلى AWS S3.\n4. إعداد خدمة `rsyslog` لتوجيه سجلات الفايروول والسويتش إلى سيرفر Wazuh SIEM.\n5. قياس الأداء وعرض استهلاك الباندويث وجودة الاتصال باستخدام `iperf3` و `ntopng`.',
    practicalLabSteps: [
      'تثبيت WireGuard على جهاز Linux وتوليد أزواج المفاتيح وضبط ملفات التكوين `wg0.conf`.',
      'تفعيل النفق المشفر واختبار الاتصال والـ Handshake وقياس سرعة النقل والـ Latency بـ iperf3.',
      'كتابة سكربت أوتوماتيكي لالتقاط الترافيك بـ tcpdump مع تدوير الملفات كل ساعة وتسميتها بالوقت.',
      'تحليل حزم هجمات الـ Red Team بـ Wireshark واستخراج مؤشرات الاختراق (IoCs).',
      'توجيه سجلات Syslog عبر نفق الـ VPN لسيرفر Wazuh والتأكد من وصول السجلات دون انقطاع.'
    ],
    deliverables: [
      'نفق WireGuard Site-to-Site VPN مشفر يربط المعمل بالسحابة',
      'سكربت التقاط وتحليل الـ PCAPs أوتوماتيكياً من بورت الـ SPAN',
      'توجيه الـ Syslogs من السويتش والفايروول لسيرفر Wazuh',
      'لوحة قياس استهلاك الباندويث وجودة واستقرار الاتصال'
    ],
    tools: ['WireGuard', 'Wireshark', 'tcpdump / tshark', 'rsyslog', 'iperf3 / ntopng', 'Python'],
    searchKeywords: [
      'WireGuard site to site VPN pfSense to AWS EC2 ubuntu',
      'Automated network traffic capture using tcpdump and python script',
      'Wireshark filters for finding brute force and port scans',
      'Forwarding pfSense syslogs to Wazuh SIEM server',
      'Network bandwidth and latency monitoring tools for Linux'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: بناء نفق WireGuard Site-to-Site',
        desc: 'إنشاء نفق VPN مشفر وآمن يربط شبكة الأجهزة في المعمل بسحابة AWS بسرعة فائقة وبدون تأخير لنقل السجلات.'
      },
      {
        phase: 'المرحلة 2: برمجة سكربت التقاط الـ PCAP الأوتوماتيكي',
        desc: 'التنصت على بورت الـ SPAN وسحب الباكتس وتقسيمها وتخزينها محلياً أو رفعها لسحابة AWS S3.'
      },
      {
        phase: 'المرحلة 3: تحليل ترافيك الهجمات بـ Wireshark',
        desc: 'استخراج مؤشرات الاختراق (IoCs)، وتحليل سلوكيات الـ Port Scanning والـ Brute Force بالـ Filters.'
      },
      {
        phase: 'المرحلة 4: توجيه السجلات (Syslog Forwarding)',
        desc: 'ربط سجلات السويتش والفايروول بسيرفر Wazuh التابع لشامل لتحليلها لحظياً.'
      }
    ],
    connectionsWith: [
      { name: 'عمار ياسر', detail: 'ربط طرفي نفق WireGuard بين شبكة المعمل وسيرفرات AWS السحابية وتأمين مسار الاتصال' },
      { name: 'رقيه وسام', detail: 'التوصيل على بورت الـ SPAN بالسويتش لالتقاط حزم البيانات' },
      { name: 'شامل شاهين', detail: 'تزويد الـ SIEM بسجلات وترافيك الشبكة الكامل عبر الـ Syslogs' },
      { name: 'محمود سلمان', detail: 'توفير ملفات الـ PCAP لاستخدامها في تدريب وتغذية نماذج الذكاء الاصطناعي' }
    ]
  },
  {
    id: 'shamel-shaheen',
    name: 'شامل محمد علي شاهين',
    role: 'SOC Analyst (Blue Team Operations)',
    category: 'Cybersecurity & SOC',
    color: '#3b82f6',
    badge: 'SIEM & Incident Response',
    avatar: '👨‍💻',
    summary: 'مسؤول عن بناء وإدارة مركز العمليات الأمنية (Wazuh SIEM)، كتابة قواعد الرصد المخصصة للمشروع، تتبع التنبيهات لايف، وإعداد كتيبات الاستجابة للحوادث (Incident Response Playbooks).',
    detailedMission: 'إدارة مركز المراقبة والعمليات الأمنية (SOC) للمنظومة، وجمع وتحليل السجلات من كافة الأجهزة، وكتابة قواعد كشف التهديدات المخصصة لرصد أي نشاط مريب، وتوثيق إجراءات الاستجابة للحوادث وفق المعايير العالمية.',
    whyThisRoleMatters: 'بدون محلل SOC ومنصة SIEM مركزية، ستكون السجلات مبعثرة في كل جهاز ولن يلاحظ أحد الهجوم إلا بعد وقوع الكارثة. الـ SOC يربط الخيوط معاً (Log Correlation)، ويحدد مصدر الهجوم، ويقود خطة الاحتواء والتعافي الفوري.',
    howItIsImplemented: '1. نشر منصة Wazuh (Manager, Indexer, Dashboard) على خادم سحابي لتجميع وتحليل السجلات.\n2. تثبيت Wazuh Agents على خوادم المصائد وأجهزة الفايروول وخادم الباكيند واستقبال سجلات السويتش عبر Syslog.\n3. كتابة قواعد XML مخصصة للمشروع (CYF Detection Rules) لرصد محاولات كسر كلمات السر، القراءات الشاذة، والاتصال بالمصائد.\n4. تصميم لوحة تحكم أمنية تفاعلية بـ Kibana تعرض خريطة المهاجمين ومستوى الخطورة وسجل الإنذارات الحية.\n5. كتابة Runbooks تفصيلية للاستجابة للحوادث (Triage -> Containment -> Eradication -> Recovery).',
    practicalLabSteps: [
      'تثبيت Wazuh All-in-one على خادم Ubuntu وتأمين الاتصال بـ SSL Certificates.',
      'تثبيت عملاء Wazuh Agents والتحقق من ظهور الأجهزة في حالة Active على لوحة التحكم.',
      'كتابة واختبار ملف قواعد XML مخصص في مسار `/var/ossec/etc/rules/local_rules.xml`.',
      'بناء Visualizations ولوحات مراقبة متقدمة في Wazuh Dashboard تعرض الإنذارات ذات الخطورة العالية (Level > 10).',
      'توثيق ومحاكاة خطوات الاستجابة لحادثة اختراق محطة الأفران وإعداد تقرير Incident Report احترافي.'
    ],
    deliverables: [
      'منصة Wazuh SIEM مركزية تجمع كل سجلات الأجهزة والمصائد والشبكة',
      'قواعد اكتشاف مخصصة (Custom XML Rules) خاصة بسيناريوهات CyberForge',
      'داشبورد أمني متقدم يعرض التنبيهات ومستوى الخطورة لايف',
      'كتيب الاستجابة للحوادث الأمنية (Incident Response Playbook)'
    ],
    tools: ['Wazuh Manager / Indexer / Dashboard', 'Kibana / Elasticsearch', 'Custom XML Rules', 'Syslog'],
    searchKeywords: [
      'Wazuh SIEM step by step installation on Ubuntu 22.04',
      'Writing custom Wazuh detection rules XML examples',
      'Integrating Cowrie honeypot logs with Wazuh SIEM',
      'Building custom dashboards in Wazuh Kibana for security alerts',
      'SOC Analyst Incident Response Playbook template and tutorial'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: نشر وإعداد Wazuh SIEM',
        desc: 'تثبيت Wazuh Manager و Indexer و Dashboard وتجهيز البنية التحتية لاستقبال السجلات وتخزينها.'
      },
      {
        phase: 'المرحلة 2: توزيع وتثبيت عملاء Wazuh Agents',
        desc: 'نشر الـ Agents على الخوادم وكتابة قواعد XML مخصصة لاكتشاف هجمات المصائد والتلاعب بالحساسات.'
      },
      {
        phase: 'المرحلة 3: ربط السجلات وتصميم الداشبورد الأمني',
        desc: 'ربط وتجميع السجلات من pfSense والمصائد والـ AI وبناء لوحة داشبورد أمنية في Kibana.'
      },
      {
        phase: 'المرحلة 4: تدريبات الاستجابة للحوادث (Incident Response)',
        desc: 'إجراء تدريبات الاستجابة للحوادث أثناء هجمات الريد تيم وتطبيق خطوات التحقيق والعزل.'
      }
    ],
    connectionsWith: [
      { name: 'عمار ياسر', detail: 'تثبيت Wazuh على سحابة AWS واستقبال سجلات مصفوفة المصائد المخادعة وتحليلها' },
      { name: 'محمد إمبابي', detail: 'استقبال سجلات الـ Syslogs القادمة عبر نفق الـ VPN من المعمل' },
      { name: 'شهد أحمد', detail: 'استقبال تنبيهات وتفاصيل حزم Suricata IDS/IPS لدمجها في التحليل الأمني' },
      { name: 'محمود سلمان', detail: 'عرض تنبيهات الـ AI والتحقق من رصد هجمات الريد تيم لايف' }
    ]
  },
  {
    id: 'ammar-yasser',
    name: 'عمار ياسر السيد عبدالله',
    role: 'Cloud Security & Deception Architect',
    category: 'Cybersecurity & SOC',
    color: '#a855f7',
    badge: 'Cloud & Deception Grid',
    avatar: '👨‍💻',
    summary: 'مسؤول عن تأمين وإدارة البنية التحتية السحابية على AWS، وبناء شبكة المصائد المخادعة (Cowrie, Dionaea, Conpot SCADA)، واستخراج استخبارات التهديدات (Threat Intelligence).',
    detailedMission: 'تأمين البنية التحتية السحابية لمشروع CyberForge على سحابة AWS وتجهيز بيئات الاستضافة الآمنة، وبناء مصفوفة خداع سيبراني متقدمة (Deception Grid) تشتت انتباه المهاجمين وتستدرجهم بعيداً عن أصول المصنع الحقيقية لجمع بصماتهم وسلوكياتهم.',
    whyThisRoleMatters: 'تقنيات الخداع (Deception Technology) تعد من أحدث وأقوى استراتيجيات الأمن السيبراني؛ فالمصيدة لا تحتوي على أي مستخدمين شرعيين، مما يعني أن أي اتصال يدخل إليها هو تهديد بنسبة 100% (Zero False Positives). تأمين السحابة يضمن أيضاً عدم اختراق خوادم الـ SIEM والـ Backend.',
    howItIsImplemented: '1. بناء وتأمين AWS VPC مع تقسيمها لـ Public و Private Subnets وضبط Security Groups صارمة تعتمد على مبدأ Least Privilege.\n2. نشر مصفوفة مصائد العسل في حاويات Docker:\n   - **Cowrie:** لمحاكاة سيرفر SSH/Telnet وتسجيل كل أمر وملف ينزله المهاجم.\n   - **Dionaea:** لمحاكاة ثغرات SMB و HTTP وسحب عينات البرمجيات الخبيثة.\n   - **Conpot:** لمحاكاة نظام SCADA صناعي حقيقي (Modbus/S7) لخداع مهاجمي المصانع! ⭐\n3. وضع ملفات فخاخ سرية (Honeyfiles & Canary Tokens) مثل `scada_passwords.txt` تطلق إنذاراً فورياً عند قراءتها.\n4. بناء خط معالجة واستخراج استخبارات التهديدات (Threat Intel Pipeline) وتمرير السجلات لمنصة Wazuh.',
    practicalLabSteps: [
      'إنشاء حساب AWS وضبط إعدادات الـ IAM و MFA وإنشاء VPC مخصصة للمشروع.',
      'تثبيت Docker و Docker-Compose على سيرفر Ubuntu سحابي.',
      'تشغيل حاويات Cowrie و Conpot وضبط ملفات التكوين لتغيير بصمة السيرفرات الوهمية لتطابق مصنعاً حقيقياً.',
      'زرع ملفات Canary Tokens واختبار إطلاق الإنذارات عند فتحها.',
      'ربط مخرجات المصائد بـ Wazuh وتجهيز تقرير دوري لاستخبارات التهديدات.'
    ],
    deliverables: [
      'بيئة AWS VPC مؤمنة بأعلى معايير الحماية والـ Least Privilege',
      'مصفوفة مصائد مخادعة متكاملة (Cowrie SSH + Dionaea + Conpot SCADA)',
      'ملفات فخاخ سرية (Honeyfiles & Canary Tokens) داخل الخوادم',
      'تقرير واستخبارات التهديدات (Threat Intelligence Feed & Reports)'
    ],
    tools: ['AWS VPC / EC2 / S3 / IAM', 'Conpot (SCADA Honeypot)', 'Cowrie', 'Dionaea', 'Docker', 'Canary Tokens'],
    searchKeywords: [
      'AWS VPC Security Group best practices for security projects',
      'How to deploy Conpot SCADA honeypot docker step by step',
      'Cowrie SSH Honeypot setup and log integration',
      'Setting up Honeyfiles canary tokens for intrusion detection',
      'Building a Threat Intelligence feed from honeypot data'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: بناء وتأمين سحابة AWS (Cloud Hardening)',
        desc: 'إنشاء VPC مخصصة، ضبط الـ Subnets، وتطبيق مبدأ Least Privilege على صلاحيات الـ IAM.'
      },
      {
        phase: 'المرحلة 2: نشر مصفوفة المصائد المخادعة (Deception Grid)',
        desc: 'نشر مصفوفة المصائد المخادعة (Cowrie SSH, Dionaea, Conpot SCADA) في حاويات Docker.'
      },
      {
        phase: 'المرحلة 3: زرع الفخاخ وربط السجلات (Honeyfiles & SIEM)',
        desc: 'زرع ملفات فخاخ حساسة (Honeyfiles) وربط سجلات المصائد بمنصة Wazuh.'
      },
      {
        phase: 'المرحلة 4: استخراج استخبارات التهديدات (Threat Intelligence)',
        desc: 'استخراج عناوين المهاجمين والـ Hashes والكلمات المستخدمة وتوليد تقارير Threat Intel متجددة.'
      }
    ],
    connectionsWith: [
      { name: 'شامل شاهين', detail: 'توفير البنية السحابية للـ SIEM وتمرير سجلات المصائد لـ Wazuh وتجميع الـ IoCs' },
      { name: 'محمد إمبابي', detail: 'استقبال نفق WireGuard VPN القادم من شبكة المعمل إلى AWS وتأمينه' },
      { name: 'محمود سلمان', detail: 'استضافة خوادم الـ API والـ AI وتجربة استدراج هجمات الريد تيم لايف' },
      { name: 'رقيه وسام', detail: 'التنسيق بين المصائد السحابية والمصائد المحلية على VLAN 20 بالسويتش' }
    ]
  },
  {
    id: 'marwan-ashraf',
    name: 'مروان أشرف جوده إبراهيم',
    role: 'Hardware & Embedded Systems Engineer',
    category: 'Hardware & Embedded',
    color: '#10b981',
    badge: 'Embedded & Rover & SCADA',
    avatar: '👨‍💻',
    summary: 'مسؤول عن تجميع وبرمجة عربة الفحص (Cyber-Rover)، بناء محطات المصنع الأربعة بـ 4 بوردات ESP32 بالحساسات والمشغلات ومفاتيح العزل (Relay Kill-Switches)، وتجهيز المجسم الفيزيائي.',
    detailedMission: 'تحويل المفاهيم البرمجية إلى واقع ملموس عبر بناء محطات المصنع الفيزيائية الأربعة وتزويدها بالحساسات والمشغلات، وبرمجة نظام الفصل الميكانيكي الفوري (Physical Kill-Switch)، وتجميع عربة الفحص الذكية (Cyber-Rover) وبرمجة حركتها اللاسلكية وتفادي العوائق.',
    whyThisRoleMatters: 'مشروع CyberForge يتميز عن بقية المشاريع الأكاديمية بوجود الكيان الفيزيائي الحقيقي (Hardware in the Loop). بدون الـ ESP32 والحساسات والريلاي، لن يكون هناك فصل فيزيائي للتيار، وبدون الـ Rover لن يكون هناك فحص أوتوماتيكي متنقل في المصنع.',
    howItIsImplemented: '1. برمجة 4 بوردات ESP32 باستخدام Arduino IDE لقراءة حساسات الحرارة (DHT22)، والتيار (ACS712)، والحركة (PIR)، وتدفق المياه، ونشر البيانات عبر MQTT كل ثانية.\n2. توصيل وحدات الـ Relay Modules كمفاتيح أمان فيزيائية تفصل الطاقة عن المحركات والمضخات فور استلام أمر `isolate` وتغيير إضاءة LED إلى الأحمر.\n3. تجميع عربة الـ Cyber-Rover بشاسيه 4WD ودرايفر موتور L298N، وحساسات ألتراسونيك HC-SR04 لتفادي الاصطدام، وتوصيل Raspberry Pi وبطارية Power Bank مع كارت وايفاي Monitor Mode.\n4. كتابة كود Python على الـ Rover للتحكم في الحركة، وإجراء فحص دوري لاسلكي بـ Nmap، وإرسال النتائج عبر REST API، مع ميزة العودة التلقائية للقاعدة (Safe-Return-to-Base) عند الطوارئ.\n5. تصميم وبناء مجسم مصنع مصغر بألواح أكريليك/خشب مضيء لترتيب المحطات والأسلاك بشكل مبهر للمناقشة.',
    practicalLabSteps: [
      'شراء وفحص قطع الهاردوير والتأكد من سلامة دبابيس بوردات ESP32.',
      'توصيل كل محطة على Breadboard واختبار قراءة الحساسات وإرسالها عبر Wi-Fi لـ Mosquitto Broker.',
      'اختبار دائرة الـ Relay والتأكد من فصل الحمل الكهربائي في أقل من 20ms عند إرسال أمر العزل.',
      'تجميع شاسيه الـ Rover اللاسلكي وتجربة السير الذاتي وتفادي العوائق بالألتراسونيك.',
      'تثبيت المحطات والأسلاك والإضاءات داخل المجسم النهائي وضبط مسار دورية الـ Rover.'
    ],
    deliverables: [
      'عربة Cyber-Rover لاسلكية ذاتية الحركة تفحص الشبكة وتتجنب العوائق وتدعم العودة للقاعدة',
      '4 محطات صناعية فيزيائية ESP32 (تبريد، أفران، طاقة كهربائية، وأمان)',
      'نظام الفصل الفيزيائي الميكانيكي (Relay Kill-Switches) ولمبات البيان الملونة',
      'المجسم الفيزيائي المضيء للمصنع لعرضه وتشغيله يوم المناقشة'
    ],
    tools: ['ESP32', 'Raspberry Pi / Laptop', 'Arduino IDE / PlatformIO', 'Relay Modules', 'Ultrasonic HC-SR04', '4WD Chassis', 'Python'],
    searchKeywords: [
      'ESP32 MQTT Publish Sensor Data Arduino IDE tutorial',
      'ESP32 Relay Module emergency kill switch control',
      'Build 4WD Robot Car with Raspberry Pi and L298N Python',
      'Raspberry Pi automated network scanner with Nmap and python-nmap',
      'Interactive industrial IoT factory demo model layout ideas'
    ],
    roadmapPhases: [
      {
        phase: 'المرحلة 1: برمجة المحطات الأربعة (4 ESP32 Stations)',
        desc: 'قراءة حساسات الحرارة والتيار والتدفق والحركة، وإرسال البيانات دورياً عبر بروتوكول MQTT.'
      },
      {
        phase: 'المرحلة 2: برمجة مفاتيح العزل الفيزيائي (Kill-Switch Logic)',
        desc: 'توصيل الـ Relay لفصل طاقة المحطة في أجزاء من الثانية فور استلام أمر isolate وتحويل LED للأحمر.'
      },
      {
        phase: 'المرحلة 3: تجميع وبرمجة عربة الفحص (Cyber-Rover)',
        desc: 'تجميع الشاسيه 4WD، وتوصيل الحساسات لتفادي العوائق، وكارت الوايفاي لفحص الشبكة وإرسال التقارير.'
      },
      {
        phase: 'المرحلة 4: تصميم وبناء المجسم الفيزيائي للمصنع',
        desc: 'بناء مجسم مصغر يجمع المحطات الأربعة مع إضاءات وتوصيلات احترافية للعرض يوم المناقشة.'
      }
    ],
    connectionsWith: [
      { name: 'محمود أشرف', detail: 'إرسال بيانات الحساسات لسيرفر Mosquitto MQTT وضبط قنوات الاتصال والـ Topics' },
      { name: 'رقيه وسام', detail: 'توصيل البوردات والـ Rover بمنافذ الـ Access المحددة على السويتش في الـ VLANs الصحيحة' },
      { name: 'محمود سلمان', detail: 'تنفيذ أوامر الـ Kill-Switch القادمة من الـ AI، وإرسال نتائج فحص الـ Rover وعرض حالة المحطات على الداشبورد وتطبيق الموبايل' },
      { name: 'شامل شاهين', detail: 'إرسال قراءات التنبيهات الفيزيائية والحالات الطارئة للـ SOC' }
    ]
  }
];
