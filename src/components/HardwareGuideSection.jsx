import React, { useState } from 'react';
import { hardwareCategories, storesList } from '../data/hardware';
import { ShoppingCart, AlertCircle, ExternalLink, Calculator, Check, Search, Tag, DollarSign, Store } from 'lucide-react';

export default function HardwareGuideSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allItems = hardwareCategories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.title, catId: cat.id })));

  const filteredItems = allItems.filter(item => {
    const matchesTab = activeTab === 'all' || item.catId === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="hardware" className="py-20 bg-[#060911] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>دليل شراء المستعمل — Used Hardware Purchasing Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            دليل شراء قطع الهاردوير <span className="text-gradient">المستعملة في مصر</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            لتقليل تكلفة مشروع التخرج إلى أقصى حد؛ تم حصر جميع القطع المطلوبة مع أسعار السوق المستعمل في مصر (دوبيزل، فيسبوك، ومحلات الإلكترونيات) مع نصائح المعاينة الفنية.
          </p>
        </div>

        {/* Budget Summary Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-[#0b1424] border border-cyan-500/30 shadow-lg">
            <span className="text-xs font-bold text-gray-400 block mb-1">إجمالي تكلفة المنظومة كاملة:</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">~8,400 – 13,500 <span className="text-sm text-gray-400 font-normal">ج.م</span></span>
            <p className="text-[11px] text-gray-400 mt-2">تشمل الـ Rover + المحطات الـ 4 + السويتش + المجسم</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b1720] border border-emerald-500/30 shadow-lg">
            <span className="text-xs font-bold text-gray-400 block mb-1">نصيب كل فرد في الفريق (8 أفراد):</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">~1,050 – 1,700 <span className="text-sm text-gray-400 font-normal">ج.م</span></span>
            <p className="text-[11px] text-gray-400 mt-2">مقسمة بالتساوي على كامل شهور التنفيذ</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#140f24] border border-purple-500/30 shadow-lg">
            <span className="text-xs font-bold text-gray-400 block mb-1">البرمجيات والسحابة (AWS):</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-400">0 ج.م <span className="text-sm text-gray-400 font-normal">(Free Tier)</span></span>
            <p className="text-[11px] text-gray-400 mt-2">جميع برمجيات المشروع مفتوحة المصدر مجاناً</p>
          </div>
        </div>

        {/* Categories Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0b1324] border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all' ? 'bg-emerald-500 text-black shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              جميع القطع ({allItems.length})
            </button>
            {hardwareCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === cat.id ? 'bg-emerald-500 text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat.title.split('(')[0]}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن قطعة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2 rounded-xl bg-[#0b1324] border border-slate-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>
        </div>

        {/* Hardware Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0a1020] border border-slate-800/80 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                    item.priority === 'حرج جداً'
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {item.priority}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mb-3">{item.specs}</p>

                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs mb-3 space-y-1">
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">السعر المتوقع:</span>
                    <strong className="text-emerald-400 font-bold">{item.usedPrice}</strong>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span className="text-gray-400">مكان الشراء:</span>
                    <span className="text-cyan-300 font-medium">{item.source}</span>
                  </div>
                </div>

                {/* Tip */}
                <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-300 leading-relaxed flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{item.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Stores in Egypt */}
        <div className="bg-[#0b1324] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Store className="w-5 h-5 text-emerald-400" />
            <span>أفضل أماكن ومنصات شراء قطع الهاردوير في مصر</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {storesList.map((store, i) => (
              <a
                key={i}
                href={store.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-white text-xs group-hover:text-emerald-400 transition-colors">{store.name}</h5>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-gray-300">{store.type}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-2">
                    <strong className="text-gray-300">الأفضل لشراء:</strong> {store.bestFor}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold group-hover:underline">
                  <span>زيارة المنصة</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
