export const attackScenarios = [
  {
    id: 'stuxnet-scada',
    title: 'هجوم التلاعب بالحساسات الصناعية (Stuxnet-style Attack)',
    target: 'محطة أفران الصهر (Furnace Station - ESP32 #2)',
    description: 'محاولة المهاجم حقن قراءات حرارة وهمية متطرفة لتعطيل الإنتاج وإحداث تلف فيزيائي.',
    steps: [
      {
        step: 1,
        actor: 'المهاجم (Red Team)',
        action: 'حقن رسائل MQTT مزيفة تدعي أن حرارة الفرن 350°C',
        status: 'warning',
        systemLog: '[ATTACK] MQTT Spoofing payload sent to topic /furnace/temp -> value: 350.0'
      },
      {
        step: 2,
        actor: 'مصفوفة الرصد (Suricata & Wazuh)',
        action: 'رصد معدل غير طبيعي لرسائل الـ MQTT ومحاولة حقن باكتس غريبة',
        status: 'alert',
        systemLog: '[SURICATA ALERT] SID:2009112 - Suspicious MQTT payload rate on VLAN 10'
      },
      {
        step: 3,
        actor: 'محرك الذكاء الاصطناعي (AI Core)',
        action: 'اكتشاف التغير الفيزيائي المستحيل وتصنيف الهجوم بدرجة خطورة 96%',
        status: 'danger',
        systemLog: '[AI ENGINE] Anomaly Score: 96.4% - Sudden impossible temperature spike detected!'
      },
      {
        step: 4,
        actor: 'الاستجابة التلقائية (SOAR + Hardware)',
        action: 'pfSense ينقل عنوان المهاجم إلى VLAN 50 (Quarantine) و ESP32 يفصل الـ Relay فيزيائياً و LED يتحول للأحمر 🔴',
        status: 'success',
        systemLog: '[KILL-SWITCH] Station #2 Relay OFF -> Physical power severed in 18ms. Host moved to VLAN 50.'
      }
    ]
  },
  {
    id: 'rover-hijack',
    title: 'هجوم محاولة اختطاف العربة والعودة للقاعدة (Rover Hijack & Safe-Return)',
    target: 'عربة الفحص الذاتي (Cyber-Rover - Wireless VLAN 30)',
    description: 'المهاجم يحاول إرسال حزم تحكم لاسلكية خبيثة للسيطرة على حركة العربة؛ فالمنظومة ترصد التسلل، تفصل قناة التحكم غير المصرح بها، وتفعل بروتوكول العودة الذاتية الآمنة للقاعدة (Safe-Return-to-Base) مع تفعيل تطبيق الموبايل للتحكم الطارئ.',
    steps: [
      {
        step: 1,
        actor: 'المهاجم (Red Team)',
        action: 'إرسال حزم Socket خبيثة لاختطاف قناة توجيه محركات الـ Rover اللاسلكية',
        status: 'warning',
        systemLog: '[ROVER ATTACK] Unauthorized motor override packets detected from source IP 192.168.30.88'
      },
      {
        step: 2,
        actor: 'الذكاء الاصطناعي والـ SIEM',
        action: 'الـ AI يرصد محاولة التحكم غير المصرح بها ويطلق إنذار CYF-008 عالي الخطورة',
        status: 'alert',
        systemLog: '[WAZUH ALERT] Rule CYF-008: Unauthorized Rover takeover attempt! Level 14 Critical.'
      },
      {
        step: 3,
        actor: 'بروتوكول الأمان الذاتي (Safe-Return Protocol)',
        action: 'إلغاء قناة التحكم المشبوهة، تشغيل أضواء التحذير الصفراء، وتوجيه الـ Rover للعودة أوتوماتيكياً للقاعدة',
        status: 'danger',
        systemLog: '[ROVER PROTOCOL] Autonomous Safe-Return-to-Base initiated. Coordinates -> [0, 0, 0]. Speed locked.'
      },
      {
        step: 4,
        actor: 'تطبيق الموبايل (Mobile App Override)',
        action: 'وصول إشعار طارئ لتطبيق الموبايل للمسؤول مع تمكين ذراع التحكم اليدوي (Virtual Joystick) لاستعادة السيطرة فوراً',
        status: 'success',
        systemLog: '[MOBILE APP] Push alert sent. Manual Joystick Override unlocked for authorized operator.'
      }
    ]
  },
  {
    id: 'honeypot-ssh',
    title: 'هجوم التخمين والوقوع في المصيدة (Cowrie Honeypot Trap)',
    target: 'مصيدة العسل السحابية (Cowrie SSH Honeypot)',
    description: 'محاولة المهاجم عمل Brute Force على سيرفر المصيدة وتنزيل برمجيات خبيثة.',
    steps: [
      {
        step: 1,
        actor: 'المهاجم (Red Team)',
        action: 'تشغيل أداة Hydra لمحاولة تخمين كلمة سر SSH على المنظومة',
        status: 'warning',
        systemLog: '[ATTACK] Hydra SSH dictionary attack initiated against target IP'
      },
      {
        step: 2,
        actor: 'المصيدة المخادعة (Cowrie)',
        action: 'المصيدة تفتح جلسة وهمية وتسمح بالدخول وتسجل كل حرف وأمر يكتبه المهاجم',
        status: 'alert',
        systemLog: '[COWRIE HONEYPOT] Attacker logged in as "admin". Session recorded to session_492.log'
      },
      {
        step: 3,
        actor: 'مركز العمليات الأمنية (Wazuh SIEM)',
        action: 'Wazuh يطلق قاعدة CYF-002 ويرفع مستوى الإنذار فوراً ويستخرج الـ IP والـ Hashes',
        status: 'danger',
        systemLog: '[WAZUH SIEM] Rule CYF-002 Triggered: Honeypot interaction confirmed. Level 12 Alert.'
      },
      {
        step: 4,
        actor: 'استخبارات التهديدات (Threat Intel)',
        action: 'توليد تقرير IoCs وحجب عنوان المهاجم عبر الفايروول ومشاركة البصمة',
        status: 'success',
        systemLog: '[THREAT INTEL] Attacker IP auto-blacklisted. IoCs published to SIEM feed.'
      }
    ]
  },
  {
    id: 'rover-recon',
    title: 'فحص واكتشاف الثغرات الذاتي (Autonomous Rover Recon)',
    target: 'شبكات المصنع المتعددة (All VLANs)',
    description: 'جولة دورية لعربة الـ Rover لاكتشاف المنافذ المفتوحة والمعدات غير المصرح بها.',
    steps: [
      {
        step: 1,
        actor: 'عربة الفحص (Cyber-Rover)',
        action: 'الـ Rover يتحرك ذاتياً ويتفادى العوائق ويقوم بعمل Nmap Scan على نطاق الشبكة',
        status: 'warning',
        systemLog: '[ROVER] Patrol cycle #14 started. Scanning subnet 192.168.10.0/24...'
      },
      {
        step: 2,
        actor: 'السويتش الذكي (Cisco 2960)',
        action: 'السويتش يرصد عنوان MAC جديد غير مسجل في الـ White List',
        status: 'alert',
        systemLog: '[SWITCH] Port Gi0/4 Port-Security Alert: Unknown MAC 00:1A:2B:3C:4D:5E detected'
      },
      {
        step: 3,
        actor: 'لوحة التحكم والـ API',
        action: 'الـ Rover يرسل تقرير الفحص للـ API ويعرض على الداشبورد بورت مفتوح غير آمن (Telnet: 23)',
        status: 'danger',
        systemLog: '[API GATEWAY] Rover report received: Vulnerable service Telnet/23 discovered on Node #3'
      },
      {
        step: 4,
        actor: 'الإجراء الأمني السريع',
        action: 'الـ Rover يرسل تنبيه لمسؤول الأمان مع تحديد موقع الجهاز غير المؤمن لعلاجه',
        status: 'success',
        systemLog: '[SOC DASHBOARD] Vulnerability flagged on factory map. Incident ticket #CYF-89 created.'
      }
    ]
  }
];
