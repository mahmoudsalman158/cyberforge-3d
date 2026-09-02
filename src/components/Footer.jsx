import React from 'react';
import { Shield, Users } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function Footer() {
  return (
    <footer className="bg-[#040710] border-t border-slate-800/80 py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-slate-800/60">
          
          {/* Col 1: Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#080c14] rounded-[6px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">Cyber<span className="text-cyan-400">Forge</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px] max-w-sm mb-4">
              منصة دفاع سيبراني صناعية متكاملة بالذكاء الاصطناعي — مشروع تخرج 2026 يدمج عربة الفحص الذاتي (Cyber-Rover)، مصفوفة المصائد (Honeynet)، وحماية الحساسات والمحركات (SCADA Shield).
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold text-[10px]">
              Graduation Project 2026
            </span>
          </div>

          {/* Col 2: Team Members List */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>أعضاء الفريق الـ 8 (Team Members)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
              {teamMembers.map((m, i) => (
                <div key={i} className="text-gray-300 truncate">
                  • {m.name}
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">أقسام الدليل السريعة</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#simulation" className="hover:text-cyan-400 transition-colors">محاكي المصنع 3D الحي</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">أدوار الفريق وخارطة الطريق</a></li>
              <li><a href="#integration" className="hover:text-cyan-400 transition-colors">خريطة تكامل المنظومة</a></li>
              <li><a href="#network-flow" className="hover:text-cyan-400 transition-colors">هندسة شبكات الـ 4 أفراد</a></li>
              <li><a href="#hardware" className="hover:text-cyan-400 transition-colors">دليل شراء المستعمل في مصر</a></li>
              <li><a href="#timeline" className="hover:text-cyan-400 transition-colors">الخطة الزمنية وخطة التعلم</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <p className="text-[11px] text-gray-400">
            🛡️ تم تطوير وتنسيق المنظومة بواسطة: <strong className="text-cyan-400 font-bold">Mahmoud Salman</strong> & فريق عمل CyberForge 2026.
          </p>
          <p className="text-[11px] text-gray-500">
            جميع الحقوق محفوظة لمشروع التخرج 2026 ©
          </p>
        </div>

      </div>
    </footer>
  );
}
