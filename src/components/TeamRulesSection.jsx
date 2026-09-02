import React from 'react';
import { Clock, GitBranch, Camera, Calendar, HelpCircle, ShieldCheck, FolderTree, MessageSquare } from 'lucide-react';

export default function TeamRulesSection() {
  const rules = [
    {
      icon: Clock,
      color: '#f59e0b',
      title: 'قاعدة الـ 48 ساعة لحل المشاكل ⏰',
      desc: 'أي عضو يواجه عقبة برمجية أو شبكية تستمر لأكثر من 48 ساعة دون حل؛ يُلزم بطرحها فوراً في الجروب أو في الميتنج الأسبوعي. مفيش حد يتكسف يطلب مساعدة لأن نجاح المنظومة يعتمد على تكامل الجميع.'
    },
    {
      icon: GitBranch,
      color: '#00d4ff',
      title: 'تنظيم مجلدات مستودع Git 📁',
      desc: 'لكل تخصص مجلده المستقل لتجنب تضارب التعديلات (Merge Conflicts): `/network/` لفريق الشبكات، `/hardware/` للمتحكمات، `/soc/` لقواعد Wazuh، `/cloud/` للـ Honeypots، و `/ai/` و `/api/` و `/dashboard/` للبرمجيات والذكاء الاصطناعي.'
    },
    {
      icon: Camera,
      color: '#10b981',
      title: 'التوثيق المستمر بالصور والفيديو 📸',
      desc: 'التقاط صور، لقطات شاشة (Screenshots)، وفيديوهات قصيرة لكل تجربة تنجح في المعمل (توصيل السويتش، تفعيل الفايروول، إنذار الـ SIEM، حركة الـ Rover). هذا التوثيق هو أساس كتاب التخرج والعرض التقديمي النهائي.'
    },
    {
      icon: Calendar,
      color: '#a855f7',
      title: 'الميتنج الأسبوعي الدوري 🗓️',
      desc: 'جلسة أسبوعية مدتها 30 إلى 45 دقيقة (أونلاين أو في الجامعة) للإجابة على 3 أسئلة: 1. ماذا أنجزت هذا الأسبوع؟ 2. ما هي العقبات؟ 3. ماذا تحتاج من زملائك في التخصصات الأخرى للأسبوع القادم؟'
    }
  ];

  const gitFolders = [
    { folder: '/network/', members: 'رقيه وسام، محمود أشرف، شهد أحمد، محمد إمبابي', desc: 'إعدادات السويتش، قواعد pfSense، بروتوكولات MQTT و Modbus، وملفات WireGuard.' },
    { folder: '/hardware/', members: 'مروان أشرف', desc: 'أكواد Arduino للـ 4 ESP32، كود الـ Rover للتحكم، ومخططات الدوائر والـ Relays.' },
    { folder: '/soc/', members: 'شامل شاهين', desc: 'ملفات قواعد Wazuh XML المخصصة، قوالب Kibana Dashboards، وكتيبات الـ Incident Response.' },
    { folder: '/cloud/ & /honeypot/', members: 'عمار ياسر', desc: 'ملفات Docker-Compose للمصائد (Cowrie, Conpot), وقوالب Terraform لـ AWS.' },
    { folder: '/ai/ & /api/ & /dashboard/', members: 'محمود سلمان', desc: 'نماذج الـ Machine Learning، خادم FastAPI، كود لوحة تحكم React، وتطبيق الموبايل.' }
  ];

  return (
    <section id="rules" className="py-20 bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ميثاق العمل وقواعد التنسيق — Team Charter & Golden Rules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            قواعد النجاح <span className="text-gradient">والتنسيق المشترك للتيم</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            مبادئ عمل متفق عليها لضمان سير المشروع بأعلى كفاءة ومرونة، وحل المشكلات سريعاً، والالتزام بالتسليم في المواعيد المحددة.
          </p>
        </div>

        {/* 4 Golden Rules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b1324] border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-700" style={{ color: rule.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{rule.title}</h3>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Git Directory Structure Breakdown */}
        <div className="bg-[#090e1c] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-cyan-400" />
            <span>توزيع مجلدات المستودع (Git Repository Folder Structure)</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-gray-400 font-bold">
                  <th className="py-3 px-4">المجلد في المستودع</th>
                  <th className="py-3 px-4">المسؤول عنه</th>
                  <th className="py-3 px-4">المحتويات والمخرجات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {gitFolders.map((gf, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">{gf.folder}</td>
                    <td className="py-3.5 px-4 text-emerald-300 font-semibold">{gf.members}</td>
                    <td className="py-3.5 px-4 text-gray-300 leading-relaxed">{gf.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
