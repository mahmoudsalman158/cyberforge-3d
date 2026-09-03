import React, { useState } from 'react';
import { Shield, Lock, User, AlertTriangle, Skull, Terminal, Sparkles, CheckCircle, RefreshCw } from 'lucide-react';

export default function LoginGate({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [showTrollModal, setShowTrollModal] = useState(false);
  const [trollModalType, setTrollModalType] = useState('sqli'); // 'sqli' | 'lockout'
  const [isSuccess, setIsSuccess] = useState(false);
  const [authenticatedMember, setAuthenticatedMember] = useState(null);

  // Authorized team members accounts
  const teamAccounts = [
    { username: 'mahmoud', pin: '1580', name: 'محمود سلمان', role: 'Red Team Operator & AI Core Architect', avatar: '👨‍💻' },
    { username: 'roqaya', pin: '2026', name: 'رقيه وسام', role: 'Red Team Analyst & Security Testing Specialist', avatar: '👩‍💻' },
    { username: 'embaby', pin: '2026', name: 'محمد إمبابي', role: 'Network Infrastructure & Switching Architect', avatar: '👨‍💼' },
    { username: 'ashraf', pin: '2026', name: 'محمود أشرف', role: 'OT Protocols, VPN & Simulation Architect', avatar: '👨‍🔧' },
    { username: 'shahd', pin: '2026', name: 'شهد أحمد', role: 'Firewall & Network Security Specialist', avatar: '👩‍💼' },
    { username: 'shamel', pin: '2026', name: 'شامل شاهين', role: 'SOC Analyst (Blue Team Operations)', avatar: '🕵️‍♂️' },
    { username: 'ammar', pin: '2026', name: 'عمار ياسر', role: 'Cloud & Deception Grid Architect', avatar: '☁️' },
    { username: 'marwan', pin: '2026', name: 'مروان أشرف', role: 'Hardware & Robotics Systems Engineer', avatar: '🤖' },
  ];

  // Regex for SQL injection and malicious bypass attempts
  const sqliRegex = /('|--|or\s+['"0-9]|union\s+select|<script>|'='|or\s+1=1|admin'\s*--|admin"|benchmark|sleep\()/i;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanUser = username.trim().toLowerCase();
    const cleanPin = pin.trim();

    // 1. Check for SQL Injection / XSS bypass attempt
    if (sqliRegex.test(username) || sqliRegex.test(pin)) {
      setTrollModalType('sqli');
      setShowTrollModal(true);
      return;
    }

    if (!cleanUser || !cleanPin) {
      setErrorMsg('يرجى كتابة اسم المستخدم وكود المرور (PIN)!');
      return;
    }

    // 2. Validate against authorized team roster
    const matched = teamAccounts.find(
      (acc) => acc.username === cleanUser && acc.pin === cleanPin
    );

    if (matched) {
      setIsSuccess(true);
      setAuthenticatedMember(matched);
      localStorage.setItem('cyf_authenticated_user', JSON.stringify(matched));
      setTimeout(() => {
        onLoginSuccess(matched);
      }, 1200);
    } else {
      const nextAttempts = attemptCount + 1;
      setAttemptCount(nextAttempts);

      if (nextAttempts === 3) {
        // Strike 3 - Trigger funny lockout warning
        setTrollModalType('lockout');
        setShowTrollModal(true);
        setErrorMsg('تحذير أمني: رصد 3 محاولات فاشلة!');
      } else {
        setErrorMsg(`بيانات غير صحيحة! محاولة فاشلة رقم ${nextAttempts}`);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050811] cyber-grid-bg p-4 overflow-y-auto">
      
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none -top-20 -left-20" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none -bottom-20 -right-20" />

      {/* Main Login Box */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#090f1f]/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-right z-10 transition-all">
        
        {/* Top Emblem & Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-xl shadow-cyan-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-[#080c14] rounded-[14px] flex items-center justify-center">
              {isSuccess ? (
                <CheckCircle className="w-8 h-8 text-emerald-400 animate-bounce" />
              ) : attemptCount >= 3 ? (
                <Skull className="w-8 h-8 text-red-500 animate-pulse" />
              ) : (
                <Lock className="w-8 h-8 text-cyan-400" />
              )}
            </div>
          </div>
          
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
            CyberForge Security Portal v2.0
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-2">
            تسجيل دخول <span className="text-gradient">أعضاء الفريق</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            المنظومة محمية ومخصصة لأعضاء فريق CyberForge 2026 فقط
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess && authenticatedMember && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-center text-xs font-bold mb-5 animate-pulse">
            <p className="text-sm">✔ تم التحقق بنجاح — Access Granted</p>
            <p className="text-white mt-1">مرحباً بك يا {authenticatedMember.name} ({authenticatedMember.avatar})</p>
            <p className="text-[10px] text-gray-400 mt-0.5">جاري تحميل واجهة المحاكاة والمنظومة...</p>
          </div>
        )}

        {/* Form */}
        {!isSuccess && (
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>اسم المستخدم (Username):</span>
              </label>
              <input
                type="text"
                placeholder="مثال: mahmoud أو roqaya..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-mono transition-all"
                autoComplete="off"
              />
            </div>

            {/* PIN / Password Input */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>كود المرور السري (PIN / Password):</span>
              </label>
              <input
                type="password"
                placeholder="••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-mono transition-all"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4 fill-black" />
              <span>التحقق والدخول للمنظومة</span>
            </button>
          </form>
        )}

        {/* Quick Help for Team */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-[11px] text-gray-500">
          <p>لو نسيت اسمك أو كود الـ PIN الخاص بك؛ تواصل مع مسؤول المنظومة.</p>
        </div>

      </div>

      {/* TROLL EASTER EGG MODAL */}
      {showTrollModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-md w-full rounded-3xl p-6 sm:p-8 text-center border shadow-2xl relative ${
            trollModalType === 'sqli' ? 'bg-[#0d1424] border-purple-500/60 shadow-purple-950/50' : 'bg-[#1a080c] border-red-500/80 shadow-red-950/60'
          }`}>
            
            {/* Big Meme Emoji */}
            <div className="text-6xl mb-4 animate-bounce">
              {trollModalType === 'sqli' ? '😂🤦‍♂️' : '💀⚡'}
            </div>

            {trollModalType === 'sqli' ? (
              <>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold mb-3 font-mono">
                  🚨 EXPLOIT TRAP DETECTED!
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  بطل يا عبيط.. SQL Injection على Frontend في React؟ 😂
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  داخل تكتب <code className="text-purple-400 font-mono font-bold bg-slate-900 px-1.5 py-0.5 rounded">' OR '1'='1</code> وعامل فيها مستر روبوت؟ فاكرنا مخزنين الباسورد في قاعدة بيانات من غير sanitization يعني؟ روح ذاكر OWASP وتعال ادخل بيوزرك الحقيقي! ☕
                </p>
              </>
            ) : (
              <>
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-bold mb-3 font-mono">
                  🚨 3 STRIKES SECURITY ALARM
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  شكلك هتتكرش دلوقتي يا بطل! 💀⚡
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  دي المحاولة التالتة الغلط! باقي لك محاولة واحدة والذكاء الاصطناعي هيبعت أمر لـ pfSense ينقلك لـ <strong className="text-red-400">VLAN 50 (Quarantine)</strong> ومروان هيعمل عليك <strong className="text-red-400">Kill-Switch</strong> فيزيائي ويفصل النت والكهرباء عن أوضتك! 😂🔌
                </p>
              </>
            )}

            <button
              onClick={() => setShowTrollModal(false)}
              className="py-2.5 px-6 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all inline-flex items-center gap-2"
            >
              <span>خلاص توبت، رجعني أكتب صح</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
