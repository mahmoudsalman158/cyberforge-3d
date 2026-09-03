export const timelineMonths = [
  {
    month: 'الشهر 1',
    title: 'التأسيس والتعلم الفردي (Foundation & Setup)',
    status: 'جاهز للانطلاق',
    goals: [
      'محمود سلمان: بناء بروتوتايب نموذج Anomaly Detection وبدء خادم FastAPI وتصميم موديول الـ AI-GRC.',
      'رقية وسام: تسطيب Kali Linux والبدء في مسار Jr Penetration Tester على TryHackMe.',
      'محمد إمبابي: تعلم أوامر Cisco IOS وتوصيل سويتش 2960 وضبط الـ 5 VLANs الأساسية.',
      'محمود أشرف: تثبيت Mosquitto MQTT واختبار Modbus TCP ودراسة نفق WireGuard VPN.',
      'شهد أحمد: تثبيت pfSense على جهاز مخصص والتدرب على كتابة قواعد الـ ACLs.',
      'شامل شاهين: تثبيت Wazuh SIEM محلياً والتعرف على بنية القواعد XML وفك التشفير.',
      'عمار ياسر: إنشاء حساب AWS، ضبط VPC/IAM، ونشر حاويات Conpot و Cowrie الأولية.',
      'مروان أشرف: طلب القطع والمستلزمات، تجميع شاسيه الـ Rover، واختبار بوردة ESP32 الأولى.'
    ],
    deliverable: '✅ تثبيت جميع الأدوات وتجهيز البيئات وبدء التجارب الفردية بنجاح.'
  },
  {
    month: 'الشهر 2',
    title: 'البناء الفردي الكامل (Individual Build)',
    status: 'مخطط',
    goals: [
      'محمود سلمان: تدريب نموذج الـ AI واكتمال endpoints الـ API ولوحة تحكم مبدئية ومصفوفة الـ GRC.',
      'رقية وسام: إنجاز لابات ثغرات الويب (OWASP Top 10) والتدرب على Burp Suite و Nmap.',
      'محمد إمبابي: اكتمال الـ 5 VLANs و Trunking و Port Security و SPAN Mirroring على السويتش.',
      'محمود أشرف: تشغيل MQTT Broker مؤمن بكلمات سر وبناء نفق WireGuard ومحاكاة EVE-NG.',
      'شهد أحمد: تشغيل فايروول pfSense بكامل القواعد وتفعيل Suricata IDS/IPS وآلية العزل.',
      'شامل شاهين: نشر Wazuh SIEM على السحابة وكتابة قواعد الرصد المخصصة الأولية.',
      'عمار ياسر: تأمين بيئة AWS VPC ونشر مصائد Cowrie و Conpot SCADA وزرع الـ Honeyfiles.',
      'مروان أشرف: برمجة 4 محطات ESP32 لإرسال قراءات MQTT وتشغيل حركة الـ Rover وتفادي العقبات.'
    ],
    deliverable: '✅ كل مكوّن في المنظومة يعمل كـ Standalone بنجاح تام.'
  },
  {
    month: 'الشهر 3',
    title: 'الربط الثنائي والتكامل (Inter-Connection)',
    status: 'مخطط',
    goals: [
      'محمد إمبابي + شهد: ربط كابل الـ Trunk بين سويتش Cisco وجدار حماية pfSense وتفعيل الـ VLANs.',
      'محمود أشرف + عمار: ربط طرفي نفق WireGuard بنجاح بين معمل الشبكات وسحابة AWS.',
      'محمود أشرف + مروان: استقبال بيانات المحطات الأربعة على Mosquitto MQTT Broker بسلاسة.',
      'رقية + محمود سلمان: اختبار أمان واجهات الويب والـ APIs عبر Burp Suite وسد الثغرات المكتشفة.',
      'شهد + شامل: توجيه سجلات Syslog من الفايروول ومنظومة Suricata إلى Wazuh SIEM.',
      'عمار + شامل: استقبال سجلات المصائد السحابية في منصة Wazuh وتحليل مؤشرات الاختراق.'
    ],
    deliverable: '✅ الأجزاء تتحدث مع بعضها والبيانات تتدفق بين المعمل والسحابة.'
  },
  {
    month: 'الشهر 4',
    title: 'الهجمات الحية واختبار الاختراق (Red vs Blue & Testing)',
    status: 'مخطط',
    goals: [
      'محمود سلمان + رقية: شن هجمات الريد تيم وفحص الاختراق (Recon, Web Pentest, Stuxnet-like OT Tampering).',
      'رقية: استكمال فحص وايفاي الـ Rover وكتابة تقرير اختبار الاختراق الشامل (Pentest Report).',
      'شامل: التحقق من إطلاق Wazuh لتنبيهات فورية عند كل هجوم وفرزها في الداشبورد الأمني.',
      'شهد: التحقق من اعتراض Suricata للـ Payloads الخبيثة وتفعيل العزل التلقائي في VLAN 50.',
      'محمود سلمان + مروان + شهد: اختبار دورة الاستجابة التلقائية الكاملة: AI يرصد → Wazuh ينبه → pfSense يعزل في VLAN 50 → ESP32 يفصل الريلاي فيزيائياً.',
      'الجميع: توثيق كل اختبار بالصور والفيديوهات والـ Screenshots لتجهيز كتاب التخرج.'
    ],
    deliverable: '✅ المنظومة تعمل End-to-End وتتصدى للهجمات في أجزاء من الثانية.'
  },
  {
    month: 'الشهر 5',
    title: 'البروفة النهائية وتجهيز المناقشة (Final Rehearsal)',
    status: 'مخطط',
    goals: [
      'الجميع: دمج الأجزاء في مجسم المصنع النهائي وتثبيت الإضاءات وعلب الحماية.',
      'محمود سلمان: إتمام داشبورد الويب وتطبيق الموبايل وعرض مصفوفة الـ GRC ومؤشر الأمان اللحظي.',
      'رقية وسام: تسليم ومراجعة تقرير الـ Pentest الرسمي وتجهيز جزئية عرض الثغرات المكتشفة.',
      'محمد إمبابي ومحمود أشرف وشهد: مراجعة استقرار السويتش والـ VPN والفايروول ومحاكاة EVE-NG.',
      'شامل وعمار ومروان: تجهيز لوحات الـ SOC وتقرير Threat Intel ومجسم الروبوت التفاعلي.',
      'بروفة كاملة للمناقشة وعرض سيناريو الهجوم والدفاع المباشر لايف أمام لجنة التحكيم.'
    ],
    deliverable: '🏆 مشروع متكامل، جاهز للمناقشة وتحقيق الامتياز بإذن الله.'
  }
];

export const memberDetailedRoadmaps = [
  {
    id: 'mahmoud-salman',
    name: 'محمود محمد أحمد عبد ربه سليمان',
    role: 'Red Team Operator, Full-Stack Developer & AI Core Architect',
    color: '#00d4ff',
    avatar: '👨‍💻',
    whyLearn: 'لبناء العقل الذكي للمنظومة بالـ AI، ومصفوفة الـ GRC، وواجهات المراقبة، وشن هجمات الـ OT لإثبات كفاءة الدفاع الذاتي.',
    projectImpact: 'يربط الأجهزة الفيزيائية بالسحابة والداشبورد، ويكشف التلاعب الذكي بالحساسات، ويقود هجمات العرض الحي.',
    months: [
      { m: 'شهر 1', focus: 'AI Anomaly Detection Baseline & FastAPI Prototype', detail: 'تجهيز بيئة Python وتدريب نموذج أولي على بيانات الحساسات وبناء خادم FastAPI.' },
      { m: 'شهر 2', focus: 'AI-Driven GRC Engine & Realtime WebSockets', detail: 'برمجة موديول حساب مصفوفة المخاطر والامتثال لمعايير IEC 62443 وبث التنبيهات لايف.' },
      { m: 'شهر 3', focus: 'Interactive 3D Dashboard & Flutter Mobile App', detail: 'بناء لوحة تحكم الويب وتطبيق الموبايل بالـ Joystick للتحكم بالـ Rover في الطوارئ.' },
      { m: 'شهر 4', focus: 'Advanced SCADA Red Team Attacks & Stuxnet Simulation', detail: 'تنفيذ هجمات التلاعب الصناعي وحقن الحزم واختبار رد فعل العزل التلقائي.' },
      { m: 'شهر 5', focus: 'End-to-End System Integration & Live Demo Rehearsal', detail: 'الربط النهائي الشامل والبروفة المتكاملة للعرض أمام لجنة التحكيم.' }
    ]
  },
  {
    id: 'roqaya-wesam',
    name: 'رقيه وسام محمد علي',
    role: 'Red Team Analyst & Security Testing Specialist',
    color: '#ec4899',
    avatar: '👩‍💻',
    whyLearn: 'لاكتساب مهارات الفحص والاستطلاع العملي واختبار اختراق تطبيقات الويب والـ APIs والشبكات وإعداد التقارير الرسمية.',
    projectImpact: 'تضمن خلو واجهات المنظومة وخادم الـ APIs وشبكة الـ Rover من الثغرات الأمنية وتوثق مسارات الهجوم لكتاب التخرج.',
    months: [
      { m: 'شهر 1', focus: 'Kali Linux Setup & TryHackMe Pre-Security Path', detail: 'تجهيز بيئة Kali Linux وإتقان أدوات الاستطلاع الشبكي Nmap وفهم منافذ الخدمات.' },
      { m: 'شهر 2', focus: 'TryHackMe Jr Penetration Tester & Burp Suite Lab', detail: 'إنجاز لابات الـ Jr Pentester وفهم ثغرات OWASP Top 10 واعتراض حزم الـ HTTP.' },
      { m: 'شهر 3', focus: 'Web Dashboard & REST API Security Assessment', detail: 'فحص واختراق لوحة تحكم الويب والـ APIs واكتشاف ثغرات الـ Injection وتجاوز الصلاحيات.' },
      { m: 'شهر 4', focus: 'Wireless Wi-Fi Auditing & Network Vulnerability Scan', detail: 'فحص تشفير شبكة الـ Rover والوايفاي واكتشاف الثغرات وتجربة استغلالها مع سلمان.' },
      { m: 'شهر 5', focus: 'Official Penetration Testing Report & Presentation', detail: 'صياغة تقرير اختبار الاختراق الرسمي المكتمل وتجهيز استعراض النتائج للمناقشة.' }
    ]
  },
  {
    id: 'mohamed-embaby',
    name: 'محمد أشرف محمد إمبابي',
    role: 'Network Infrastructure & Switching Architect',
    color: '#06b6d4',
    avatar: '👨‍💼',
    whyLearn: 'لتأسيس البنية التحتية الفيزيائية للشبكة، عزل الـ VLANs، وتأمين منافذ السويتش ضد المتطفلين.',
    projectImpact: 'يوفر شبكة صناعية مجزأة ومحمية تمنع التحرك العرضي للمهاجم وتبث ترافيك المحطات لأجهزة السوك.',
    months: [
      { m: 'شهر 1', focus: 'Cisco 2960 Switch Initialization & 5 VLANs Setup', detail: 'توصيل كابل الـ Console وبرمجة الـ 5 VLANs المعزولة على سويتش Cisco 2960.' },
      { m: 'شهر 2', focus: '802.1Q Trunking & Port Security Sticky Configuration', detail: 'ربط خط الـ Trunk بالفايروول وتفعيل Port Security لغلق المنفذ عند توصيل جهاز غريب.' },
      { m: 'شهر 3', focus: 'SPAN Port Mirroring & Physical Cabling Architecture', detail: 'تفعيل بورت الـ SPAN لنسخ ترافيك المحطات والمصائد وتجهيز خريطة الكابلات.' },
      { m: 'شهر 4', focus: 'Network Stress Testing & Port Violation Simulation', detail: 'محاكاة اختراق فيزيائي وتوصيل أجهزة غريبة والتأكد من إغلاق المنافذ وعزل الشبكات.' },
      { m: 'شهر 5', focus: 'Physical Network Final Audit & Graduation Documentation', detail: 'المراجعة النهائية لاستقرار السويتش وتوثيق المخطط الفيزيائي في كتاب المشروع.' }
    ]
  },
  {
    id: 'mahmoud-ashraf',
    name: 'محمود أشرف السيد عبداللطيف',
    role: 'OT Protocols, VPN & Simulation Architect',
    color: '#3b82f6',
    avatar: '👨‍🔧',
    whyLearn: 'لهندسة وتأمين قنوات الاتصال الصناعي (MQTT و Modbus) والربط المشفر بالسحابة بـ WireGuard VPN والمحاكاة الموسعة.',
    projectImpact: 'يضمن نقل بيانات الحساسات المشفرة بأقل تأخير بين المعمل والسحابة ويوضح إمكانية تطبيق المشروع على كبرى المصانع.',
    months: [
      { m: 'شهر 1', focus: 'Mosquitto MQTT Setup & Modbus TCP Protocol Lab', detail: 'تثبيت خادم Mosquitto MQTT وضبط الـ Topics وبرمجة محاكي Modbus TCP الصناعي.' },
      { m: 'شهر 2', focus: 'WireGuard Site-to-Site VPN Tunnel pfSense to AWS', detail: 'توليد مفاتيح WireGuard وبناء نفق مشفر فائق السرعة يربط المعمل بسحابة AWS EC2.' },
      { m: 'شهر 3', focus: 'MQTT Authentication & Inter-VLAN Routing Integration', detail: 'تأمين وسيط الـ MQTT بالمصادقة وكلمات المرور والتأكد من استقرار نقل البيانات عبر الـ VPN.' },
      { m: 'شهر 4', focus: 'EVE-NG Industrial SCADA Network Topology Simulation', detail: 'بناء شبكة مصنع ضخم افتراضية على EVE-NG وإثبات قدرة النظام على استيعاب آلاف الأجهزة.' },
      { m: 'شهر 5', focus: 'Network Protocols Stability Audit & Final Defense Demo', detail: 'التدقيق النهائي لاستقرار الاتصالات والبروتوكولات وجاهزية نفق الـ VPN للمناقشة.' }
    ]
  },
  {
    id: 'shahd-ahmed',
    name: 'شهد أحمد جوده محمد',
    role: 'Firewall & Network Security Specialist',
    color: '#10b981',
    avatar: '👩‍💼',
    whyLearn: 'لحماية حدود المنظومة وتطبيق قواعد الـ ACLs الصارمة وكشف التسلل بـ Suricata والعزل التلقائي.',
    projectImpact: 'تمنع أي ترافيك غير مصرح به بين الشبكات وتعزل أي جهاز مشبوه فورياً في VLAN 50 بنقرة زر أو أمر AI.',
    months: [
      { m: 'شهر 1', focus: 'pfSense Firewall Hardware Setup & Interface Mapping', detail: 'تثبيت نظام pfSense واستقبال الـ Trunk من السويتش وضبط الواجهات الفرعية لكل VLAN.' },
      { m: 'شهر 2', focus: 'Strict ACL Firewall Rules & Suricata IDS/IPS Deployment', detail: 'كتابة مصفوفة قواعد الحظر والسماح وتثبيت حزمة Suricata وتفعيل وضع الـ Inline IPS.' },
      { m: 'شهر 3', focus: 'Custom Suricata Rules for OT & Syslog Forwarding to Wazuh', detail: 'كتابة قواعد رصد متخصصة لحزم الـ Nmap وحقن الـ MQTT وتوجيه السجلات لـ Wazuh.' },
      { m: 'شهر 4', focus: 'Dynamic Quarantine Automation Engine (VLAN 50 Isolation)', detail: 'برمجة سكربت العزل التلقائي لنقل الـ IP المهاجم لـ VLAN 50 في أقل من ثانية.' },
      { m: 'شهر 5', focus: 'Perimeter Defense Validation & Final Security Dossier', detail: 'اختبار صمود الفايروول وتوثيق سجلات الحظر ومصفوفة الـ ACLs للمناقشة.' }
    ]
  },
  {
    id: 'shamel-shaheen',
    name: 'شامل محمد علي شاهين',
    role: 'SOC Analyst / Blue Team Operations Specialist',
    color: '#8b5cf6',
    avatar: '🕵️‍♂️',
    whyLearn: 'لبناء وتشغيل مركز العمليات الأمنية (SIEM) ورصد الهجمات في لحظة وقوعها وإدارة الاستجابة.',
    projectImpact: 'يوفر لوحة موحدة تجمع كل سجلات المصنع والمصائد والفايروول وتطلق الإنذارات الفورية.',
    months: [
      { m: 'شهر 1', focus: 'Wazuh SIEM All-in-One Deployment & Architecture', detail: 'تثبيت Wazuh Manager و Indexer و Dashboard على سيرفر Ubuntu وفهم هيكل القواعد.' },
      { m: 'شهر 2', focus: 'Wazuh Agents Rollout & Syslog Input Pipeline', detail: 'نشر الـ Agents على الخوادم واستقبال سجلات Syslog من السويتش والفايروول لايف.' },
      { m: 'شهر 3', focus: 'Custom Decoders & XML Detection Rules Engineering', detail: 'كتابة قواعد وفك تشفير XML مخصصة لاكتشاف التلاعب بحساسات المصنع ومصائد العسل.' },
      { m: 'شهر 4', focus: 'Live Incident Triage & Response Playbook Simulation', detail: 'إجراء تدريبات الاستجابة للحوادث أثناء هجمات الريد تيم وتطبيق خطوات التحقيق والعزل.' },
      { m: 'شهر 5', focus: 'SOC Operations Dashboard & Incident Investigation Dossier', detail: 'تصميم لوحة المراقبة التفاعلية وإعداد تقارير الحوادث الجنائية لكتاب التخرج.' }
    ]
  },
  {
    id: 'ammar-yasser',
    name: 'عمار ياسر السيد عبدالله',
    role: 'Cloud Security & Deception Grid Architect',
    color: '#f59e0b',
    avatar: '☁️',
    whyLearn: 'لبناء سحابة آمنة ونشر مصفوفة مصائد مخادعة تستدرج المهاجمين وتجمع Threat Intelligence.',
    projectImpact: 'حماية البنية التحتية على AWS وخداع المهاجمين بمصائد SCADA و SSH واستخراج بصمات التهديدات.',
    months: [
      { m: 'شهر 1', focus: 'AWS VPC Architecture & Least-Privilege IAM Policies', detail: 'إنشاء VPC مخصصة، ضبط الـ Subnets، وتطبيق مبدأ Least Privilege على صلاحيات الـ IAM.' },
      { m: 'شهر 2', focus: 'Cowrie SSH & Conpot SCADA Docker Honeynet Grid', detail: 'نشر مصفوفة المصائد المخادعة (Cowrie SSH و Conpot SCADA) في حاويات Docker.' },
      { m: 'شهر 3', focus: 'Honeyfiles & Canary Tokens Deployment & VPN Endpoint', detail: 'زرع ملفات فخاخ حساسة (Honeyfiles) وتأكيد اتصال نفق WireGuard القادم من المعمل.' },
      { m: 'شهر 4', focus: 'Threat Intelligence Extraction & Automated Log Parsing', detail: 'استخراج عناوين المهاجمين والـ Hashes والكلمات المستخدمة وتوليد تقارير Threat Intel متجددة.' },
      { m: 'شهر 5', focus: 'Cloud Deception Final Audit & Threat Intel Report', detail: 'توثيق معمارية السحابة وتقارير استخبارات التهديدات لعرضها على لجنة المناقشة.' }
    ]
  },
  {
    id: 'marwan-ashraf',
    name: 'مروان أشرف جوده إبراهيم',
    role: 'Hardware & Robotics Systems Engineer',
    color: '#ef4444',
    avatar: '🤖',
    whyLearn: 'لبناء الكيان الفيزيائي الكامل للمشروع: عربة الفحص (Rover)، محطات المصنع الأربعة، ومفاتيح العزل الفيزيائي.',
    projectImpact: 'تحويل المشروع من مجرد برمجيات إلى مصنع فيزيائي حقيقي ملموس مزود بروبوت فحص ومفاتيح أمان.',
    months: [
      { m: 'شهر 1', focus: 'Components Sourcing & ESP32 Sensors Prototyping', detail: 'شراء القطع وبرمجة ESP32 لقراءة حساسات الحرارة والتيار والغاز والرطوبة.' },
      { m: 'شهر 2', focus: '4WD Cyber-Rover Chassis Assembly & Obstacle Avoidance', detail: 'تجميع شاسيه الروبوت، محركات DC ودائرة L298N، وحساسات تفادي الحواجز بالموجات فوق الصوتية.' },
      { m: 'شهر 3', focus: '4 Industrial ESP32 Stations & MQTT Telemetry Publishing', detail: 'برمجة بوردات ESP32 لإرسال قراءات الحساسات دورياً عبر MQTT والتحكم في إضاءات الـ LEDs.' },
      { m: 'شهر 4', focus: 'Hardware Relay Kill-Switch Integration (<20ms Cutoff)', detail: 'توصيل واختبار استجابة مفاتيح الـ Relay للفصل الميكانيكي الفوري في أقل من 20 ملي ثانية.' },
      { m: 'شهر 5', focus: 'Final Acrylic Model Finishing & Live Demo Assembly', detail: 'بناء وتجميع المجسم الفيزيائي النهائي بالأكريليك والإضاءات الاحترافية للعرض يوم المناقشة.' }
    ]
  }
];
