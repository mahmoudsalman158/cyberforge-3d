import React, { useState } from 'react';
import { teamMembers } from '../data/team';
import { Users, Search, BookOpen, Sparkles, Copy, Check, Lightbulb, Target, Wrench, Terminal, CheckCircle2, Printer } from 'lucide-react';

export default function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalMember, setActiveModalMember] = useState(null);
  const [copiedQuery, setCopiedQuery] = useState(null);

  const categories = ['All', 'Network', 'Cybersecurity & SOC', 'Hardware & Embedded', 'Software & AI'];

  const filteredMembers = teamMembers.filter((m) => {
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedQuery(text);
    setTimeout(() => setCopiedQuery(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="team" className="py-20 bg-[#060911] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>فريق العمل وخطة التعلم — Team Roles & Individual Roadmaps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            أدوار ومهام <span className="text-gradient">أعضاء الفريق الـ 8</span> بالتفصيل
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            فريق متكامل ومتعاون؛ كل عضو متخصص في جزء دقيق مع شرح سبب الدور، آلية تنفيذه العملية، مخرجات واضحة، وزر لحفظ وطباعة خارطة الطريق كـ PDF.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0b1324] border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'All' ? 'جميع الأعضاء (8)' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث بالاسم أو التخصص..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 rounded-xl bg-[#0b1324] border border-slate-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-[#0a1020] border border-slate-800/80 p-5 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all group"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-slate-900 border border-slate-700/80 shadow-inner group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      color: member.color,
                      borderColor: `${member.color}40`,
                      backgroundColor: `${member.color}10`
                    }}
                  >
                    {member.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                <p className="text-xs font-semibold mb-3 text-cyan-400">{member.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {member.summary}
                </p>

                {/* Tools Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-gray-300 border border-slate-800">
                      {tool}
                    </span>
                  ))}
                  {member.tools.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-gray-500">
                      +{member.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalMember(member)}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-950/40"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>عرض التفاصيل وخارطة الطريق</span>
              </button>
            </div>
          ))}
        </div>

        {/* Member Detailed Modal with Print/PDF Support */}
        {activeModalMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="print-area bg-[#0b1324] border border-cyan-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-right">
              
              {/* Top Controls: Close + Print */}
              <div className="no-print absolute top-5 left-5 flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title="طباعة / حفظ كـ PDF"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-all"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة / حفظ PDF</span>
                </button>
                <button
                  onClick={() => setActiveModalMember(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-slate-900 border border-slate-700 shadow-inner">
                  {activeModalMember.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeModalMember.name}</h3>
                  <p className="text-sm font-semibold" style={{ color: activeModalMember.color }}>
                    {activeModalMember.role}
                  </p>
                </div>
              </div>

              {/* Detailed Mission */}
              {activeModalMember.detailedMission && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    <span>الهدف والمهمة التفصيلية في المشروع:</span>
                  </h4>
                  <p className="text-xs text-gray-200 leading-relaxed">{activeModalMember.detailedMission}</p>
                </div>
              )}

              {/* Why This Role Matters & How It's Implemented */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>لماذا هذا الدور ضروري للمنظومة؟</span>
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{activeModalMember.whyThisRoleMatters}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>كيف يتم التنفيذ عملياً؟</span>
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-line">{activeModalMember.howItIsImplemented}</p>
                </div>
              </div>

              {/* Practical Lab Steps */}
              {activeModalMember.practicalLabSteps && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span>خطوات المعمل والتجهيز العملي (Practical Steps):</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalMember.practicalLabSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Roadmap Phases */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>المراحل التنفيذية (Step-by-Step Roadmap):</span>
                </h4>
                <div className="space-y-2.5">
                  {activeModalMember.roadmapPhases.map((phase, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <h5 className="font-bold text-white text-xs mb-1">{phase.phase}</h5>
                      <p className="text-xs text-gray-300 leading-relaxed">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">المخرجات المطلوب تسليمها (Deliverables):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalMember.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-gray-200">
                      <span className="text-emerald-400">✔</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search Keywords (Click to copy) */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">كلمات بحث دقيقة للتعلم على Google و YouTube (اضغط للنسخ):</h4>
                <div className="space-y-1.5">
                  {activeModalMember.searchKeywords.map((kw, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopy(kw)}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 cursor-pointer group text-xs text-gray-300 font-mono transition-all"
                    >
                      <span className="truncate">{kw}</span>
                      <button className="no-print text-gray-400 group-hover:text-purple-400 shrink-0 ml-2">
                        {copiedQuery === kw ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaboration Partners */}
              <div>
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">نقاط التكامل والربط مع باقي الفريق:</h4>
                <div className="space-y-2">
                  {activeModalMember.connectionsWith.map((conn, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs flex items-start gap-2">
                      <span className="font-bold text-cyan-300 shrink-0">مع {conn.name}:</span>
                      <span className="text-gray-300">{conn.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
