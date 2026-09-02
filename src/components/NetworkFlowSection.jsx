import React, { useState } from 'react';
import { Network, Shield, Cpu, Radio, ArrowDown, CheckCircle, Sparkles } from 'lucide-react';

export default function NetworkFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const networkLayers = [
    {
      step: 1,
      engineer: 'رقيه وسام محمد علي',
      role: 'Network Infrastructure Architect',
      title: 'الطبقة 1: السويتش الفيزيائي والـ 5 VLANs',
      color: '#38bdf8',
      icon: Network,
      tagline: 'تأسيس الطرق والبنية التحتية الفيزيائية',
      tasks: [
        'تقسيم سويتش Cisco 2960 لـ 5 شبكات (VLAN 10: SCADA, 20: Honeypot, 30: Rover, 40: Mgmt, 50: Quarantine)',
        'تجهيز كابلات ومنافذ الـ Access لأجهزة ESP32 والمصائد والـ Rover',
        'ضبط الـ 802.1Q Trunk Port الموجه لجهاز الفايروول',
        'تفعيل بورت الـ SPAN (Port Mirroring) لنسخ كل حركة الترافيك'
      ],
      handoverTo: 'تسلم منفذ الـ Trunk لـ شهد أحمد (الفايروول) وبورت الـ SPAN لـ محمد إمبابي (المراقبة)'
    },
    {
      step: 2,
      engineer: 'محمود أشرف السيد عبداللطيف',
      role: 'OT Protocols & Simulation Architect',
      title: 'الطبقة 2: بروتوكولات المصنع والمحاكاة الموسعة',
      color: '#818cf8',
      icon: Cpu,
      tagline: 'بناء لغة التخاطب الصناعي وقابلية التوسع',
      tasks: [
        'تثبيت وتأمين سيرفر Mosquitto MQTT Broker وضبط الـ Topics للمحطات الأربعة',
        'تجهيز بيئة Modbus TCP للتواصل مع الحساسات والمحركات الصناعية',
        'بناء محاكاة افتراضية موسعة لمصنع ضخم على EVE-NG/GNS3',
        'ضبط مسارات التوجيه والتأكد من انعدام الـ Packet Loss والـ Latency'
      ],
      handoverTo: 'تنسيق الـ Topics مع مروان (ESP32) وتوفير تدفق البيانات للـ AI (محمود سلمان)'
    },
    {
      step: 3,
      engineer: 'شهد أحمد جوده محمد',
      role: 'Firewall & Network Security Specialist',
      title: 'الطبقة 3: جدار الحماية وعزل التهديدات',
      color: '#f43f5e',
      icon: Shield,
      tagline: 'تأمين الحدود وفحص الحزم والعزل التلقائي',
      tasks: [
        'تحويل لابتوب لجهاز pfSense وتفعيل واجهات الـ VLANs الفرعية',
        'كتابة قواعد العزل الصارمة (منع دخول ترافيك الحساسات للإدارة، وحبس المهاجم في المصيدة)',
        'تفعيل منظومة Suricata IDS/IPS لفحص الـ Payloads ورصد محاولات الاختراق',
        'برمجة آلية Dynamic Quarantine لنقل أي جهاز مصاب فوراً لـ VLAN 50'
      ],
      handoverTo: 'السماح بنفق الـ VPN لـ محمد إمبابي وتوجيه تنبيهات Suricata لـ شامل شاهين'
    },
    {
      step: 4,
      engineer: 'محمد أشرف محمد إمبابي',
      role: 'VPN & Telemetry Specialist',
      title: 'الطبقة 4: النفق المشفر ومراقبة الترافيك',
      color: '#06b6d4',
      icon: Radio,
      tagline: 'ربط المعمل بالسحابة وسحب السجلات والـ PCAPs',
      tasks: [
        'إنشاء نفق WireGuard Site-to-Site VPN مشفر يربط المعمل بسحابة AWS',
        'برمجة سكربت أوتوماتيكي لالتقاط وحفظ ملفات الـ PCAP من بورت الـ SPAN',
        'تحليل حزم البيانات بـ Wireshark واستخراج مؤشرات الاختراق (IoCs)',
        'توجيه سجلات الـ Syslogs من السويتش والفايروول لسيرفر Wazuh'
      ],
      handoverTo: 'تسليم سجلات الشبكة لـ شامل (Wazuh) وتزويد الـ AI (محمود) بملفات الـ PCAP'
    }
  ];

  return (
    <section id="network-flow" className="py-20 bg-[#080d1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>تنسيق فريق الشبكات — Network Team 4-Layer Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            كيف يعمل <span className="text-gradient">مهندسو الشبكات الأربعة</span> بتكامل تام؟
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            لأن الشبكة هي العمود الفقري لمشروع الدفاع السيبراني؛ تم تقسيم مهام الـ 4 أعضاء إلى 4 طبقات متتالية، بحيث يقوم كل مهندس بتسليم مخرجاته للمهندس التالي بدون أي تداخل أو تضارب.
          </p>
        </div>

        {/* 4 Steps Interactive Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {networkLayers.map((layer, idx) => {
            const Icon = layer.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={layer.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  isActive
                    ? 'bg-[#0e172e] border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.03]'
                    : 'bg-[#0a1020]/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-700 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-800 text-gray-300">
                    الخطوة 0{layer.step}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm mb-1">{layer.engineer}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: layer.color }}>{layer.role}</p>
                <p className="text-[11px] text-gray-400 line-clamp-2">{layer.tagline}</p>
              </div>
            );
          })}
        </div>

        {/* Active Layer Deep Dive Card */}
        <div className="bg-[#0b1324] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fadeIn">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2 inline-block">
                الطبقة {networkLayers[activeStep].step} من 4
              </span>
              <h3 className="text-2xl font-bold text-white">{networkLayers[activeStep].title}</h3>
              <p className="text-sm font-semibold text-cyan-300 mt-1">👤 المسؤولة/المسؤول: {networkLayers[activeStep].engineer}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-gray-300 max-w-md">
              <strong className="text-emerald-400 block mb-1">🔗 التسليم للمرحلة التالية (Handover):</strong>
              {networkLayers[activeStep].handoverTo}
            </div>
          </div>

          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>المهام التنفيذية الدقيقة لهذه الطبقة:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {networkLayers[activeStep].tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-gray-200">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{task}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
