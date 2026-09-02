import React, { useState } from 'react';
import { systemLayers, integrationFlows } from '../data/connections';
import { ArrowLeftRight, CheckCircle2, Shield, Layers, Radio, Network, Cpu, Cloud, Eye, Brain } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Network: Network,
  Layers: Layers,
  ShieldAlert: Shield,
  Radio: Radio,
  Cloud: Cloud,
  Eye: Eye,
  Brain: Brain
};

export default function IntegrationGraph() {
  const [selectedLayer, setSelectedLayer] = useState(systemLayers[0]);
  const [selectedFlow, setSelectedFlow] = useState(null);

  return (
    <section id="integration" className="py-20 bg-[#080c14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>خريطة تسليم وتكامل الشغل — System Integration Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            كيف يترابط عمل <span className="text-gradient">الأعضاء الـ 8</span> في منظومة واحدة؟
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            كل عضو يسلّم مخرجاته لطبقة تالية في مسار مترابط؛ من الحساسات الفيزيائية على الأرض إلى السويتش والفايروول، وصولاً إلى السحابة ومنصة Wazuh ونماذج الذكاء الاصطناعي.
          </p>
        </div>

        {/* 8 System Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {systemLayers.map((layer, idx) => {
            const IconComponent = iconMap[layer.icon] || Layers;
            const isSelected = selectedLayer?.id === layer.id;

            return (
              <div
                key={layer.id}
                onClick={() => {
                  setSelectedLayer(layer);
                  setSelectedFlow(null);
                }}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#0f1b33] border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-[#0a1020]/90 border-slate-800 hover:border-slate-700 hover:bg-[#0c1426]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-700" style={{ color: layer.color }}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-gray-300">
                    طبقة #{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1">{layer.title}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: layer.color }}>
                  👤 {layer.engineer}
                </p>
                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deep Dive on Selected Layer */}
        {selectedLayer && (
          <div className="bg-[#0b1324] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-xl mb-12 animate-fadeIn">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{selectedLayer.title}</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {selectedLayer.engineer}
                  </span>
                </div>
                <p className="text-sm text-gray-300 max-w-2xl">{selectedLayer.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">المخرجات التي تسلمها هذه الطبقة لباقي المنظومة:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedLayer.outputs.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Handover & Protocol Connection Table */}
        <div className="bg-[#090e1c] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-cyan-400" />
            <span>جدول التسليمات المباشرة بين الأعضاء والبروتوكولات (Direct Handovers)</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-gray-400 font-bold">
                  <th className="py-3 px-4">من العضو (Source)</th>
                  <th className="py-3 px-4">إلى العضو (Destination)</th>
                  <th className="py-3 px-4">البروتوكول / الرابط (Protocol)</th>
                  <th className="py-3 px-4">طريقة التكامل والهدف</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {integrationFlows.map((flow, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-cyan-300">{flow.from}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-300">{flow.to}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/30 font-mono text-[11px]">
                        {flow.label}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-300 leading-relaxed">{flow.desc}</td>
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
