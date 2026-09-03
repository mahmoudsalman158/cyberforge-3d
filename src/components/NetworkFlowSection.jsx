import React, { useState } from 'react';
import { Network, Shield, Cpu, Sparkles, Activity, CheckCircle, ArrowDown, Radio, Search, Terminal, Cloud, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NetworkFlowSection() {
  const [activeCellIndex, setActiveCellIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const teamCells = [
    {
      id: 'offensive-ai',
      name: 'خلية الريد تيم والسوفتوير والـ AI',
      subtitle: 'محمود سلمان + رقية وسام',
      color: '#00d4ff',
      badge: 'Offensive & AI/Software Cell',
      icon: Sparkles,
      description: 'دورة الاستطلاع، فحص واختراق الويب والـ APIs، محرك كشف الشذوذ بالذكاء الاصطناعي، ومصفوفة الـ GRC، وهجمات الـ SCADA المتقدمة.',
      steps: [
        {
          step: 1,
          engineer: 'رقيه وسام محمد علي',
          role: 'Red Team Analyst & Security Testing Specialist',
          title: 'الاستطلاع وفحص الثغرات (Reconnaissance & Scan)',
          tagline: 'كشف الأهداف وتحليل المنافذ والخدمات المفتوحة',
          tools: ['Kali Linux', 'Nmap', 'Zenmap', 'Shodan'],
          tasks: [
            'إجراء مسح شبكي شامل (Network Scan) لاكتشاف عناوين IP النشطة ومنافذ الخدمات الصناعية',
            'استقبال قراءات استطلاع عربة الـ Rover اللاسلكية وتحليل البورتات المفتوحة للمحطات',
            'رسم خريطة الأهداف السطحية (Attack Surface Mapping) وتحديد نقاط الضعف المبدئية'
          ],
          handover: 'تسليم خريطة المنافذ والخدمات المشبوهة لمحمود سلمان وبدء فحص ثغرات الويب'
        },
        {
          step: 2,
          engineer: 'رقيه وسام محمد علي',
          role: 'Red Team Analyst & Security Testing Specialist',
          title: 'اختبار اختراق الويب والـ APIs والوايفاي',
          tagline: 'فحص لوحة التحكم والـ APIs بثغرات OWASP Top 10',
          tools: ['Burp Suite', 'OWASP Top 10', 'Postman', 'Aircrack-ng'],
          tasks: [
            'اعتراض وتعديل طلبات الـ HTTP/REST APIs الخاصة بالداشبورد لاكتشاف ثغرات الـ Authentication والـ Input Validation',
            'فحص تشفير وايفاي الـ Rover واختبار صمود الشبكة اللاسلكية أمام محاولات التجسس واعتراض الحزم',
            'توثيق الثغرات المكتشفة بالـ CVSS وإعداد تقرير الـ Pentest الرسمي للمشروع'
          ],
          handover: 'تسليم تقرير الثغرات المكتشفة لمحمود سلمان لبرمجة الترقيع وسد الثغرات'
        },
        {
          step: 3,
          engineer: 'محمود محمد أحمد عبد ربه سليمان',
          role: 'Red Team Operator, Full-Stack Developer & AI Core Architect',
          title: 'محرك الذكاء الاصطناعي وتقييم المخاطر (AI & GRC)',
          tagline: 'كشف الشذوذ وحساب مصفوفة الامتثال لمعيار IEC 62443 أوتوماتيكياً',
          tools: ['Python', 'PyTorch / Scikit-learn', 'FastAPI', 'IEC 62443 Matrix'],
          tasks: [
            'تدريب نموذج Anomaly Detection (Isolation Forest & Autoencoder) لكشف هجمات التلاعب بحرارة وضغط المحطات',
            'برمجة موديول AI-Driven GRC يحسب مصفوفة المخاطر لايف ونسبة مطابقة المصنع للمواصفات الدولية',
            'ربط خادم FastAPI ونظام WebSockets لبث التنبيهات لايف في الداشبورد وتطبيق الموبايل'
          ],
          handover: 'تجهيز المنظومة لاستقبال هجمات العرض الحي وإرسال أوامر العزل لـ pfSense ومفاتيح الريلاي'
        },
        {
          step: 4,
          engineer: 'محمود محمد أحمد عبد ربه سليمان',
          role: 'Red Team Operator & Exploit Developer',
          title: 'الهجمات الصناعية الحية والأمر اللحظي (SCADA Live Attacks)',
          tagline: 'هجمات Stuxnet، تزوير رسائل MQTT/Modbus، وأمر العزل في 20ms',
          tools: ['Kali Linux', 'Scapy', 'Python Scripts', 'FastAPI WebSockets'],
          tasks: [
            'إطلاق هجوم محاكاة Stuxnet لتزوير تردد وحرارة المحطات واختبار رد فعل الموديل الذكي',
            'إرسال أمر فوري عبر pfSense API لعزل المخترق في VLAN 50 (Quarantine)',
            'إرسال أمر طوارئ فوري لمفتاح الـ Relay الفيزيائي لقطع الطاقة عن المحطة المصابة في أقل من 20 ملي ثانية'
          ],
          handover: 'إثبات كفاءة الدفاع الذاتي التلقائي للمنظومة لايف أمام لجنة التحكيم'
        }
      ]
    },
    {
      id: 'network-infra',
      name: 'خلية هندسة الشبكات والبنية التحتية',
      subtitle: 'محمد إمبابي + محمود أشرف + شهد أحمد',
      color: '#38bdf8',
      badge: 'Network Infrastructure Cell (3 Layers)',
      icon: Network,
      description: 'البنية التحتية الفيزيائية لسويتش Cisco، بروتوكولات المصنع ونفق WireGuard VPN السحابي، وجدار حماية pfSense ومنظومة Suricata.',
      steps: [
        {
          step: 1,
          engineer: 'محمد أشرف محمد إمبابي',
          role: 'Network Infrastructure & Switching Architect',
          title: 'الطبقة 1: السويتش الفيزيائي وعزل الـ 5 VLANs',
          tagline: 'تأسيس الطرق الفيزيائية وتأمين المنافذ Port Security',
          tools: ['Cisco 2960 Switch', 'PuTTY / Console', '802.1Q Trunking', 'SPAN Mirroring'],
          tasks: [
            'تقسيم سويتش Cisco 2960 إلى 5 شبكات: VLAN 10 (SCADA), 20 (Honeypot), 30 (Rover), 40 (Mgmt), 50 (Quarantine)',
            'تفعيل حماية المنافذ Port Security بـ MAC Sticky وإغلاق البورت فورياً عند توصيل جهاز غريب',
            'ضبط منفذ 802.1Q Trunk لنقل كل ترافيك الـ VLANs لجدار حماية pfSense بكابل واحد عالي السرعة',
            'تفعيل بورت نسخ البيانات SPAN (Port Mirroring) لبث نسخة طبق الأصل من ترافيك المصنع'
          ],
          handover: 'تسليم كابل الـ Trunk لـ شهد أحمد (الفايروول) وبورت الـ SPAN لأجهزة المراقبة والسوك'
        },
        {
          step: 2,
          engineer: 'محمود أشرف السيد عبداللطيف',
          role: 'OT Protocols, VPN & Simulation Architect',
          title: 'الطبقة 2: لغة المصنع ونفق WireGuard VPN المشفر',
          tagline: 'بروتوكولات MQTT و Modbus والربط المشفر بالسحابة ومحاكاة EVE-NG',
          tools: ['Mosquitto MQTT', 'WireGuard VPN', 'Modbus TCP', 'EVE-NG / GNS3'],
          tasks: [
            'تثبيت وتأمين خادم Mosquitto MQTT Broker وضبط مواضيع الـ Topics الخاصة بالمحطات الصناعية',
            'إعداد بروتوكول Modbus TCP الصناعي لمحاكاة الأجهزة الثقيلة وقراءة السجلات',
            'بناء نفق WireGuard Site-to-Site VPN مشفر يربط المعمل بسحابة AWS EC2 بسرعة فائقة',
            'بناء محاكاة افتراضية موسعة لمصنع ضخم على EVE-NG لإثبات قابلية المنظومة للتوسع'
          ],
          handover: 'استقبال بيانات المحطات من مروان وربط نفق الـ VPN مع عمار ياسر في سحابة AWS'
        },
        {
          step: 3,
          engineer: 'شهد أحمد جوده محمد',
          role: 'Firewall & Network Security Specialist',
          title: 'الطبقة 3: جدار الحماية pfSense ومنظومة Suricata IDS/IPS',
          tagline: 'تأمين الحدود، التفتيش العميق للحزم، وآلية العزل التلقائي',
          tools: ['pfSense Firewall', 'Suricata IDS/IPS', 'Dynamic Quarantine', 'Syslog'],
          tasks: [
            'استقبال كابل الـ Trunk من سويتش إمبابي وتوزيع الـ Sub-interfaces للـ 5 VLANs',
            'كتابة وتطبيق قواعد الـ ACLs الصارمة لمنع وصول المحطات الحساسة للإدارة وحبس ترافيك المصائد',
            'تشغيل منظومة Suricata IDS/IPS للفحص العميق للحزم ورصد محاولات الـ Port Scan وحقن الـ Payloads',
            'برمجة محرك العزل التلقائي (Dynamic Quarantine) لنقل أي جهاز مشبوه إلى VLAN 50 فور أمر الـ AI'
          ],
          handover: 'السماح بترافيك نفق WireGuard المشفر وتوجيه سجلات الـ Syslogs لايف لمنصة Wazuh SIEM'
        }
      ]
    },
    {
      id: 'soc-cloud',
      name: 'خلية مركز العمليات الأمنية والسحابة',
      subtitle: 'شامل شاهين + عمار ياسر',
      color: '#8b5cf6',
      badge: 'SOC & Cloud Deception Cell',
      icon: Activity,
      description: 'سحابة AWS VPC، مصفوفة المصائد الخداعية واستخراج Threat Intel، ومنصة Wazuh SIEM وكتيبات الاستجابة للحوادث.',
      steps: [
        {
          step: 1,
          engineer: 'عمار ياسر السيد عبدالله',
          role: 'Cloud Security & Deception Architect',
          title: 'البنية السحابية ومصفوفة المصائد الخداعية (Honeynet Grid)',
          tagline: 'تأمين AWS VPC ونشر مصائد Cowrie و Conpot SCADA',
          tools: ['AWS (VPC/EC2/IAM)', 'Docker', 'Cowrie SSH', 'Conpot SCADA'],
          tasks: [
            'تصميم وتأمين شبكة AWS VPC بمجموعات أمان مشددة وسياسات صلاحيات Least-Privilege IAM',
            'نشر مصائد Cowrie التفاعلية لاستدراج المهاجمين ومصيدة Conpot SCADA لمحاكاة أنظمة التحكم الصناعية',
            'استقبال نهاية نفق WireGuard VPN القادم من معمل محمود أشرف لربط السحابة بالمعمل'
          ],
          handover: 'زرع الملفات المفخخة وتمرير سجلات المخترقين لمنصة Wazuh SIEM'
        },
        {
          step: 2,
          engineer: 'عمار ياسر السيد عبدالله',
          role: 'Cloud Security & Deception Architect',
          title: 'الملفات المفخخة واستخبارات التهديدات (Threat Intel)',
          tagline: 'زرع Honeyfiles و Canary Tokens واستخراج سلوك المهاجمين',
          tools: ['Canary Tokens', 'Threat Intelligence', 'Log Parsing Python'],
          tasks: [
            'زرع ملفات مفخخة (Honeyfiles) تكشف فورياً أي تطفل داخلي وترسل تنبيهاً سرياً',
            'تحليل الأوامر وعناوين IP المستدرجة في المصائد واستخراج مؤشرات الاختراق (IoCs)',
            'توليد تقرير استخبارات التهديدات الشامل لتقديمه في كتاب التخرج'
          ],
          handover: 'تغذية منصة Wazuh SIEM بسجلات الهجمات ومؤشرات الاختراق للتحليل والربط'
        },
        {
          step: 3,
          engineer: 'شامل محمد علي شاهين',
          role: 'SOC Analyst / Blue Team Operations Specialist',
          title: 'منصة Wazuh SIEM وهندسة قواعد الكشف بـ XML',
          tagline: 'تجميع السجلات، كتابة القواعد المخصصة، وتتبع الإنذارات لايف',
          tools: ['Wazuh SIEM', 'Custom XML Rules', 'rsyslog', 'OpenSearch / Kibana'],
          tasks: [
            'تثبيت خادم Wazuh SIEM واستقبال سجلات Syslog من سويتش إمبابي وفايروول شهد ومصائد عمار',
            'كتابة قواعد رصد مخصصة في ملف local_rules.xml لاكتشاف التلاعب بحساسات المصنع بدقة',
            'تصنيف التنبيهات ورفع مستوى الإنذار للدرجات العالية (Level 12+) عند رصد الهجمات'
          ],
          handover: 'تفعيل لوحات المراقبة الأمنية وكتيبات الاستجابة للحوادث'
        },
        {
          step: 4,
          engineer: 'شامل محمد علي شاهين',
          role: 'SOC Analyst / Blue Team Operations Specialist',
          title: 'لوحة القيادة الأمنية وكتيبات الاستجابة (Incident Response)',
          tagline: 'فرز الإنذارات لايف وتنفيذ كتيبات الاحتواء والتوثيق الجنائي',
          tools: ['Wazuh Dashboard', 'IR Playbooks', 'MITRE ATT&CK Mapping'],
          tasks: [
            'تصميم لوحة المراقبة التفاعلية لعرض التنبيهات ومستويات الخطورة وتوزيع الهجمات لايف',
            'صياغة وتنفيذ كتيبات الاستجابة للحادث (Incident Response Playbooks): رصد → فرز → احتواء → تعافي',
            'إعداد وتوثيق ملف التحقيق الأمني لحوادث الهجوم لعرضه أمام لجنة التحكيم'
          ],
          handover: 'توثيق حالة الأمان العامة للمنظومة وإثبات سرعة رصد التهديدات في ثوانٍ'
        }
      ]
    },
    {
      id: 'hardware-embedded',
      name: 'خلية الأنظمة المدمجة والروبوتكس',
      subtitle: 'مروان أشرف جوده إبراهيم',
      color: '#ef4444',
      badge: 'Hardware & Embedded Cell',
      icon: Cpu,
      description: 'المحطات الصناعية الأربعة ببوردات ESP32، حساسات الحرارة والتيار والغاز، مفاتيح العزل الفيزيائي (Relays)، وعربة الـ Cyber-Rover الذكية.',
      steps: [
        {
          step: 1,
          engineer: 'مروان أشرف جوده إبراهيم',
          role: 'Hardware & Robotics Systems Engineer',
          title: 'محطات التحكم الصناعية الأربعة (ESP32 Stations)',
          tagline: 'تجميع وتوصيل وبرمجة بوردات ESP32 وقراءة الحساسات',
          tools: ['ESP32 NodeMCU', 'Arduino IDE & C++', 'DHT22 / ACS712 / MQ-2', 'Sensors Wiring'],
          tasks: [
            'تجميع 4 محطات صناعية حقيقية تمثل: الفرن الحراري، خزان المياه، مضخة التبريد، وغرفة المولدات',
            'برمجة بوردات ESP32 لقراءة إشارات حساسات الحرارة والتيار والغاز والرطوبة ومعايرتها',
            'برمجة نشر قراءات الحساسات الدورية بصيغة JSON عبر بروتوكول MQTT إلى خادم محمود أشرف'
          ],
          handover: 'تغذية خادم الـ MQTT ببيانات المصنع الفيزيائية الحية'
        },
        {
          step: 2,
          engineer: 'مروان أشرف جوده إبراهيم',
          role: 'Hardware & Robotics Systems Engineer',
          title: 'مفاتيح العزل الفيزيائي السريع (Hardware Relay Kill-Switches)',
          tagline: 'قطع الطاقة ميكانيكياً في 20ms وإضاءة إشارات التحذير',
          tools: ['Relay Modules', 'Tricolor LEDs (Green/Yellow/Red)', 'Power Circuitry'],
          tasks: [
            'دمج مفاتيح ريلاي كهروميكانيكية تتحكم في تغذية خطوط الطاقة للأجهزة والمحركات الصناعية',
            'برمجة الاستجابة اللحظية لأمر isolate القادم من الذكاء الاصطناعي لفصل الدائرة في أقل من 20 جزء من الثانية',
            'توصيل إضاءات LEDs ثلاثية الألوان (أخضر للمتصل، أصفر للتحذير، أحمر للعزل الفيزيائي)'
          ],
          handover: 'تأكيد حدوث الفصل الميكانيكي بصوت تك ملموس وإضاءة اللمبة الحمراء لايف'
        },
        {
          step: 3,
          engineer: 'مروان أشرف جوده إبراهيم',
          role: 'Hardware & Robotics Systems Engineer',
          title: 'عربة الفحص الذكية اللاسلكية (Cyber-Rover 4WD)',
          tagline: 'روبوت متنقل للملاحة الذاتية وتفادي العقبات ومسح الوايفاي',
          tools: ['4WD Chassis', 'L298N Motor Driver', 'Ultrasonic HC-SR04', 'ESP32 / Raspberry Pi'],
          tasks: [
            'بناء وتجميع شاسيه الروبوت رباعي الدفع وتركيب محركات DC ودائرة التغذية ببطاريات الليثيوم و BMS',
            'برمجة خوارزمية تفادي الحواجز الذاتية باستخدام حساس الموجات فوق الصوتية (Ultrasonic)',
            'ربط العربة بوايفاي المعمل على VLAN 30 لتلقي أوامر التحكم اليدوي من تطبيق الموبايل والداشبورد',
            'تفعيل ميزة العودة التلقائية الآمنة للقاعدة (Safe-Return-to-Base) عند استشعار أي تلاعب بالاتصال'
          ],
          handover: 'توفير فحص لاسلكي متحرك وتجاوب حي مع أوامر تطبيق الموبايل'
        },
        {
          step: 4,
          engineer: 'مروان أشرف جوده إبراهيم',
          role: 'Hardware & Robotics Systems Engineer',
          title: 'مجسم المصنع الذكي الفيزيائي النهائي (Acrylic Demo Model)',
          tagline: 'الهيكل المتكامل لإبهار لجنة التحكيم يوم المناقشة',
          tools: ['Acrylic & Laser Cut Chassis', 'Neon LED Strips', 'Cable Management'],
          tasks: [
            'تصميم وبناء هيكل أكريليك متقن يجمع محطات المصنع الأربعة ومسار سير عربة الـ Rover',
            'تنظيم وتثبيت الكابلات وعلب الحماية وإضاءات النيون لإعطاء مظهر صناعي فخم',
            'اختبار المنظومة الفيزيائية بالكامل في المعمل والتأكد من استقرار عمل الدوائر والحساسات'
          ],
          handover: 'المجسم الفيزيائي جاهز 100% ليكون النجم المضيء في قاعة المناقشة'
        }
      ]
    }
  ];

  const currentCell = teamCells[activeCellIndex];

  return (
    <section id="pipelines" className="py-20 bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>خطوط سير العمل والتكامل الهندسي — End-to-End Engineering Pipelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            كيف يتكامل عمل <span className="text-gradient">أقسام الفريق الأربعة</span> خطوة بخطوة؟
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            استعراض تفاعلي كامل يشرح بالتفصيل كيف يعمل كل تخصص، وما هي خطواته العملية، وكيف يُسلّم مخرجاته لزملائه بسلاسة تامة.
          </p>
        </div>

        {/* 4 Cell Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {teamCells.map((cell, idx) => {
            const Icon = cell.icon;
            const isSelected = activeCellIndex === idx;
            return (
              <button
                key={cell.id}
                onClick={() => {
                  setActiveCellIndex(idx);
                  setActiveStepIndex(0);
                }}
                className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0d172e] border-cyan-400 shadow-xl shadow-cyan-950/40 scale-[1.02]'
                    : 'bg-[#0a1020] border-slate-800/80 hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 border"
                    style={{ borderColor: `${cell.color}40`, color: cell.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      color: cell.color,
                      borderColor: `${cell.color}40`,
                      backgroundColor: `${cell.color}10`
                    }}
                  >
                    {cell.steps.length} مراحل
                  </span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white mb-0.5">{cell.name}</h3>
                  <p className="text-[11px] text-gray-400 font-semibold">{cell.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Cell Overview Banner */}
        <div className="rounded-2xl p-6 mb-8 border transition-all" style={{ backgroundColor: '#090e1c', borderColor: `${currentCell.color}40` }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${currentCell.color}20`, color: currentCell.color }}>
                  {currentCell.badge}
                </span>
                <span className="text-xs text-gray-400">({currentCell.subtitle})</span>
              </div>
              <h3 className="text-xl font-bold text-white">{currentCell.name}</h3>
              <p className="text-xs text-gray-300 mt-1 max-w-3xl leading-relaxed">{currentCell.description}</p>
            </div>

            {/* Step Selector Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
              {currentCell.steps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStepIndex(i)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeStepIndex === i
                      ? 'bg-cyan-500 text-black shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  المرحلة {st.step}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details Active Card */}
        {(() => {
          const stepData = currentCell.steps[activeStepIndex] || currentCell.steps[0];
          return (
            <div className="rounded-2xl bg-[#0b1324] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-right">
              {/* Glow Accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-0 opacity-15 pointer-events-none"
                style={{ backgroundColor: currentCell.color }}
              />

              <div className="relative z-10">
                {/* Top Badge & Engineer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block mb-2">
                      المرحلة رقم {stepData.step} من {currentCell.steps.length}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{stepData.title}</h4>
                    <p className="text-xs font-semibold text-emerald-400">{stepData.tagline}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-slate-800 border border-slate-700">
                      👤
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold block">المسؤول عن التنفيذ:</span>
                      <h5 className="text-xs font-bold text-white">{stepData.engineer}</h5>
                      <span className="text-[10px] text-cyan-400">{stepData.role}</span>
                    </div>
                  </div>
                </div>

                {/* Practical Tasks Checklist */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>المهام التطبيقية وخطوات التنفيذ:</span>
                  </h5>
                  <div className="grid grid-cols-1 gap-2.5">
                    {stepData.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-gray-200"
                      >
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tools & Handover */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tools */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <h5 className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>الأدوات والتقنيات المستخدمة:</span>
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {stepData.tools.map((tool, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-gray-300 border border-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Handover Indicator */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <h5 className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <ArrowDown className="w-3.5 h-3.5" />
                      <span>كيف تسلّم مخرجاتك للخطوة التالية؟ (Handover):</span>
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed">{stepData.handover}</p>
                  </div>
                </div>

                {/* Navigation Next / Prev Step */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>المرحلة السابقة</span>
                  </button>

                  <span className="text-xs text-gray-500 font-mono">
                    {activeStepIndex + 1} / {currentCell.steps.length}
                  </span>

                  <button
                    disabled={activeStepIndex === currentCell.steps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(currentCell.steps.length - 1, prev + 1))}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-400 hover:text-cyan-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <span>المرحلة التالية</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
