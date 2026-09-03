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
    memberId: 'mahmoud-salman',
    memberName: 'محمود محمد أحمد عبد ربه سليمان',
    role: 'Red Team Operator, Full-Stack Developer & AI Core Architect',
    months: [
      { month: 'الشهر 1', focus: 'AI Anomaly Detection Baseline & FastAPI Prototype', output: 'نموذج أولي لكشف الشذوذ وخادم REST API مبدئي' },
      { month: 'الشهر 2', focus: 'AI-Driven GRC Engine & Realtime WebSockets', output: 'موديول حساب مصفوفة المخاطر والامتثال لمعيار IEC 62443' },
      { month: 'الشهر 3', focus: 'Interactive 3D Dashboard & Flutter Mobile App', output: 'لوحة تحكم تفاعلية وتطبيق الهاتف بالـ Joystick للتحكم بالـ Rover' },
      { month: 'الشهر 4', focus: 'Advanced SCADA Red Team Attacks & Stuxnet Simulation', output: 'سكربتات هجومية متقدمة وحقن حزم الـ OT واختبار العزل التلقائي' },
      { month: 'الشهر 5', focus: 'End-to-End System Integration & Live Demo Rehearsal', output: 'إتقان العرض التفاعلي الحي أمام لجنة التحكيم' }
    ]
  },
  {
    memberId: 'roqaya-wesam',
    memberName: 'رقيه وسام محمد علي',
    role: 'Red Team Analyst & Security Testing Specialist',
    months: [
      { month: 'الشهر 1', focus: 'Kali Linux Setup & TryHackMe Pre-Security Path', output: 'تجهيز بيئة العمل وإتقان أوامر الاستطلاع والفحص الشبكي' },
      { month: 'الشهر 2', focus: 'TryHackMe Jr Penetration Tester & Burp Suite Lab', output: 'فهم واختبار ثغرات OWASP Top 10 واعتراض حزم الـ HTTP/APIs' },
      { month: 'الشهر 3', focus: 'Web Dashboard & REST API Security Assessment', output: 'فحص واختراق واجهات المنظومة والـ APIs وتسليم تقرير الثغرات لسلمان' },
      { month: 'الشهر 4', focus: 'Wireless Wi-Fi Auditing & Network Vulnerability Scan', output: 'فحص تشفير شبكة المعمل والـ Rover واكتشاف الـ Rogue APs' },
      { month: 'الشهر 5', focus: 'Official Penetration Testing Report & Presentation', output: 'تسليم تقرير الـ Pentest الرسمي المتكامل لكتاب المشروع' }
    ]
  },
  {
    memberId: 'mohamed-embaby',
    memberName: 'محمد أشرف محمد إمبابي',
    role: 'Network Infrastructure & Switching Architect',
    months: [
      { month: 'الشهر 1', focus: 'Cisco 2960 Switch Initialization & 5 VLANs Setup', output: 'ضبط السويتش الأساسي وعزل الشبكات الخمسة المعملية' },
      { month: 'الشهر 2', focus: '802.1Q Trunking & Port Security Sticky Configuration', output: 'ربط الـ Trunk بالفايروول وتفعيل حماية المنافذ ضد المتطفلين' },
      { month: 'الشهر 3', focus: 'SPAN Port Mirroring & Physical Cabling Architecture', output: 'بث ترافيك المحطات والمصائد لأجهزة التحليل وتوثيق المخطط' },
      { month: 'الشهر 4', focus: 'Network Stress Testing & Port Violation Simulation', output: 'اختبار حظر الأجهزة الغريبة والتأكد من استقرار الـ VLANs' },
      { month: 'الشهر 5', focus: 'Physical Network Final Audit & Graduation Documentation', output: 'تقرير تدقيق البنية التحتية والمخطط الفيزيائي النهائي' }
    ]
  },
  {
    memberId: 'mahmoud-ashraf',
    memberName: 'محمود أشرف السيد عبداللطيف',
    role: 'OT Protocols, VPN & Simulation Architect',
    months: [
      { month: 'الشهر 1', focus: 'Mosquitto MQTT Setup & Modbus TCP Protocol Lab', output: 'خادم MQTT شغال ومحاكي بروتوكول Modbus TCP الصناعي' },
      { month: 'الشهر 2', focus: 'WireGuard Site-to-Site VPN Tunnel pfSense to AWS', output: 'نفق مشفر فائق السرعة يربط المعمل بسحابة AWS' },
      { month: 'الشهر 3', focus: 'MQTT Authentication & Inter-VLAN Routing Integration', output: 'تأمين قنوات الـ MQTT بكلمات سر والتأكد من عبورها عبر الـ VPN' },
      { month: 'الشهر 4', focus: 'EVE-NG Industrial SCADA Network Topology Simulation', output: 'توبولوجي افتراضي لمصنع ضخم يثبت قابلية المنظومة للتوسع' },
      { month: 'الشهر 5', focus: 'Network Protocols Stability Audit & Final Defense Demo', output: 'جاهزية بروتوكولات المصنع ونفق الـ VPN للمناقشة' }
    ]
  },
  {
    memberId: 'shahd-ahmed',
    memberName: 'شهد أحمد جوده محمد',
    role: 'Firewall & Network Security Specialist',
    months: [
      { month: 'الشهر 1', focus: 'pfSense Firewall Hardware Setup & Interface Mapping', output: 'تثبيت نظام pfSense واستقبال كابل الـ Trunk وضبط الواجهات' },
      { month: 'الشهر 2', focus: 'Strict ACL Firewall Rules & Suricata IDS/IPS Deployment', output: 'مصفوفة عزل الـ VLANs وتفعيل الفحص العميق للحزم بـ Suricata' },
      { month: 'الشهر 3', focus: 'Custom Suricata Rules for OT & Syslog Forwarding to Wazuh', output: 'رصد هجمات الـ Port Scan والـ MQTT Injection وتمرير السجلات' },
      { month: 'الشهر 4', focus: 'Dynamic Quarantine Automation Engine (VLAN 50 Isolation)', output: 'نقل الأجهزة المخترقة تلقائياً لـ VLAN 50 فور أمر الـ AI' },
      { month: 'الشهر 5', focus: 'Perimeter Defense Validation & Final Security Dossier', output: 'توثيق كفاءة جدار الحماية وسجل الحظر للمناقشة' }
    ]
  },
  {
    memberId: 'shamel-shaheen',
    memberName: 'شامل محمد علي شاهين',
    role: 'SOC Analyst / Blue Team Operations Specialist',
    months: [
      { month: 'الشهر 1', focus: 'Wazuh SIEM All-in-One Deployment & Architecture', output: 'خادم Wazuh يعمل ومفهرس السجلات جاهز' },
      { month: 'الشهر 2', focus: 'Wazuh Agents Rollout & Syslog Input Pipeline', output: 'استقبال سجلات السويتش والفايروول والخوادم لايف' },
      { month: 'الشهر 3', focus: 'Custom Decoders & XML Detection Rules Engineering', output: 'قواعد رصد مخصصة تلتقط التلاعب بالحساسات والمصائد' },
      { month: 'الشهر 4', focus: 'Live Incident Triage & Response Playbook Simulation', output: 'تصنيف التنبيهات واختبار خطوات الاحتواء الأمني' },
      { month: 'الشهر 5', focus: 'SOC Operations Dashboard & Incident Investigation Dossier', output: 'لوحة مراقبة أمنية متكاملة وتقارير الحوادث الجنائية' }
    ]
  },
  {
    memberId: 'ammar-yasser',
    memberName: 'عمار ياسر السيد عبدالله',
    role: 'Cloud Security & Deception Grid Architect',
    months: [
      { month: 'الشهر 1', focus: 'AWS VPC Architecture & Least-Privilege IAM Policies', output: 'بنية سحابية مؤمنة ومجموعات أمان مشددة' },
      { month: 'الشهر 2', focus: 'Cowrie SSH & Conpot SCADA Docker Honeynet Grid', output: 'مصفوفة مصائد العسل جاهزة لاستدراج المهاجمين' },
      { month: 'الشهر 3', focus: 'Honeyfiles & Canary Tokens Deployment & VPN Endpoint', output: 'منظومة الملفات المفخخة وتأكيد اتصال نفق المعمل' },
      { month: 'الشهر 4', focus: 'Threat Intelligence Extraction & Automated Log Parsing', output: 'استخراج عناوين IP وتكتيكات المهاجمين وتمريرها للـ SIEM' },
      { month: 'الشهر 5', focus: 'Cloud Deception Final Audit & Threat Intel Report', output: 'تقرير استخبارات التهديدات موثق بهجمات حقيقية' }
    ]
  },
  {
    memberId: 'marwan-ashraf',
    memberName: 'مروان أشرف جوده إبراهيم',
    role: 'Hardware & Robotics Systems Engineer',
    months: [
      { month: 'الشهر 1', focus: 'Components Sourcing & ESP32 Sensors Prototyping', output: 'اختبار حساسات الحرارة والتيار والغاز على Breadboard' },
      { month: 'الشهر 2', focus: '4WD Cyber-Rover Chassis Assembly & Obstacle Avoidance', output: 'روبوت متنقل يتفادى العقبات بالموجات فوق الصوتية' },
      { month: 'الشهر 3', focus: '4 Industrial ESP32 Stations & MQTT Telemetry Publishing', output: 'أربع محطات تنشر قراءاتها لايف على وسيط الـ MQTT' },
      { month: 'الشهر 4', focus: 'Hardware Relay Kill-Switch Integration (<20ms Cutoff)', output: 'دوائر عزل فيزيائي تفصل الكهرباء فورياً في الطوارئ' },
      { month: 'الشهر 5', focus: 'Final Acrylic Model Finishing & Live Demo Assembly', output: 'مجسم المصنع الذكي المضيء جاهز بالكامل للمناقشة' }
    ]
  }
];
