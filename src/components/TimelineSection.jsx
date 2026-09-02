import React, { useState } from 'react';
import { timelineMonths, memberDetailedRoadmaps } from '../data/timeline';
import { Calendar, CheckCircle2, Flag, Sparkles, User, Layers, Lightbulb, Target } from 'lucide-react';

export default function TimelineSection() {
  const [viewMode, setViewMode] = useState('members'); // 'overall' or 'members'
  const [activeMonth, setActiveMonth] = useState(0);
  const [selectedMemberId, setSelectedMemberId] = useState(memberDetailedRoadmaps[0].id);

  const activeMember = memberDetailedRoadmaps.find(m => m.id === selectedMemberId) || memberDetailedRoadmaps[0];

  return (
    <section id="timeline" className="py-20 bg-[#080d1a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>الخطة الزمنية وخطة التعلم — 5-Month Learning & Project Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            خطة التعلم والتنفيذ <span className="text-gradient">لكل عضو على مدار 5 شهور</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            خطة تفصيلية تمكن كل عضو من معرفة ماذا سيتعلم، ولماذا يتعلمه، وكيف يفيد المشروع مباشرة، والمخرجات المطلوبة منه في كل شهر.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="p-1 rounded-xl bg-[#0b1324] border border-slate-800 flex items-center gap-1">
            <button
              onClick={() => setViewMode('members')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'members'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>خطة التعلم الفردية لكل عضو (موصى بها)</span>
            </button>
            <button
              onClick={() => setViewMode('overall')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'overall'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>التقسيم الزمني العام للمشروع (5 شهور)</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Individual Member Plan */}
        {viewMode === 'members' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Member Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
              {memberDetailedRoadmaps.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMemberId(m.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    selectedMemberId === m.id
                      ? 'bg-[#0f1b33] text-white border-purple-500 shadow-lg shadow-purple-500/25 scale-105'
                      : 'bg-[#0a1020] text-gray-400 border-slate-800 hover:border-slate-700 hover:text-gray-200'
                  }`}
                >
                  <span>{m.avatar}</span>
                  <span>{m.name.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              ))}
            </div>

            {/* Member Detailed 5-Month Breakdown Card */}
            <div className="bg-[#0b1324] border border-purple-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-5xl mx-auto">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-slate-900 border border-slate-700">
                    {activeMember.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeMember.name}</h3>
                    <p className="text-xs font-semibold text-purple-300">{activeMember.role}</p>
                  </div>
                </div>
              </div>

              {/* Why & Impact Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>لماذا يدرس هذا التخصص؟</span>
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">{activeMember.whyLearn}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>أثر ذلك المباشر على نجاح المنظومة:</span>
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">{activeMember.projectImpact}</p>
                </div>
              </div>

              {/* 5-Month Detailed Stepper for this member */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>خطة التنفيذ على مدار الـ 5 شهور:</span>
              </h4>
              <div className="space-y-3">
                {activeMember.months.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col sm:flex-row sm:items-start gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-xs shrink-0 self-start">
                      {step.m}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-bold text-white text-xs mb-1">{step.focus}</h5>
                      <p className="text-xs text-gray-300 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: Overall 5-Month Project Plan */}
        {viewMode === 'overall' && (
          <div className="space-y-8 animate-fadeIn">
            {/* 5-Month Horizontal Stepper */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {timelineMonths.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMonth(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeMonth === idx
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                      : 'bg-[#0b1324] text-gray-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeMonth === idx ? 'bg-white' : 'bg-purple-400'}`} />
                  <span>{m.month}</span>
                </button>
              ))}
            </div>

            {/* Active Month Detail Card */}
            <div className="bg-[#0b1324] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">
                    {timelineMonths[activeMonth].month}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{timelineMonths[activeMonth].title}</h3>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {timelineMonths[activeMonth].status}
                </span>
              </div>

              {/* Goals for each member */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>المهام والمستهدفات لهذا الشهر:</span>
              </h4>
              <div className="space-y-2.5 mb-8">
                {timelineMonths[activeMonth].goals.map((g, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{g}</span>
                  </div>
                ))}
              </div>

              {/* Milestone Deliverable */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-3">
                <Flag className="w-5 h-5 shrink-0 text-emerald-400" />
                <div>
                  <strong className="block font-bold mb-0.5">المخرج الرئيسي المستهدف (Milestone Deliverable):</strong>
                  <span>{timelineMonths[activeMonth].deliverable}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
