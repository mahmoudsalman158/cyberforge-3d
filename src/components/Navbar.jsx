import React, { useState, useEffect } from 'react';
import { Shield, Activity, Users, Network, Cpu, ShoppingCart, Calendar, Play, ShieldCheck, LogOut, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenSim, currentUser, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'المحاكاة ثلاثية الأبعاد', href: '#simulation', icon: Activity },
    { label: 'فريق العمل والمهام', href: '#team', icon: Users },
    { label: 'خريطة ربط المنظومة', href: '#integration', icon: Network },
    { label: 'خطوط سير الأقسام (Pipelines)', href: '#pipelines', icon: Cpu },
    { label: 'دليل شراء الهاردوير', href: '#hardware', icon: ShoppingCart },
    { label: 'الخطة الزمنية', href: '#timeline', icon: Calendar },
    { label: 'ميثاق التيم', href: '#rules', icon: ShieldCheck },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">Cyber<span className="text-cyan-400">Forge</span></span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">3D Interactive</span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">مشروع التخرج 2026 — دليل المنظومة والربط</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-[#0d1527]/80 border border-slate-800/80 rounded-full px-3 py-1.5 shadow-inner">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400/80" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA + User Profile + Logout */}
        <div className="flex items-center gap-2.5">
          {currentUser && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs">
              <span className="text-base">{currentUser.avatar}</span>
              <div className="text-right">
                <span className="font-bold text-white block text-[11px]">{currentUser.name}</span>
                <span className="text-[9px] text-cyan-400 block font-mono">@{currentUser.username}</span>
              </div>
              <button
                onClick={onLogout}
                title="تسجيل الخروج"
                className="mr-1 text-gray-400 hover:text-red-400 p-1 rounded-lg hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            onClick={onOpenSim}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span className="hidden sm:inline">تشغيل المحاكاة</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenu && (
        <div className="xl:hidden bg-[#080c14]/98 border-b border-cyan-500/20 px-4 pt-3 pb-6 mt-3 space-y-2">
          {currentUser && (
            <div className="p-3 mb-2 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentUser.avatar}</span>
                <div>
                  <span className="font-bold text-white text-xs block">{currentUser.name}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">@{currentUser.username}</span>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400 text-xs font-bold flex items-center gap-1"
              >
                <LogOut className="w-3 h-3" />
                <span>خروج</span>
              </button>
            </div>
          )}

          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
