import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Shield, Lock, User, AlertTriangle, Skull, CheckCircle, Sparkles, RefreshCw, Zap, Laugh } from 'lucide-react';

// 3D Animated Laughing Cyber Bot Component
function LaughingBotHead({ mode = 'idle' }) {
  const groupRef = useRef();
  const jawRef = useRef();
  const eyesRef = useRef();
  const haloRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      if (mode === 'sqli_troll' || mode === 'lockout') {
        // Laughing uncontrollably animation (head tilting side to side & bobbing)
        groupRef.current.rotation.z = Math.sin(t * 14) * 0.18;
        groupRef.current.rotation.x = Math.sin(t * 10) * 0.12;
        groupRef.current.rotation.y = Math.sin(t * 6) * 0.25;
        groupRef.current.position.y = Math.sin(t * 16) * 0.12;

        // Laughing open/close jaw
        if (jawRef.current) {
          jawRef.current.position.y = -0.5 - Math.abs(Math.sin(t * 18)) * 0.25;
        }
      } else if (mode === 'repented_correct') {
        // Happy approving head nod & joyful celebration
        groupRef.current.rotation.x = Math.sin(t * 12) * 0.25;
        groupRef.current.rotation.y = Math.sin(t * 4) * 0.15;
        groupRef.current.position.y = 0.05 + Math.sin(t * 6) * 0.1;

        // Big smile jaw
        if (jawRef.current) {
          jawRef.current.position.y = -0.52 + Math.sin(t * 8) * 0.06;
        }

        // Spinning victory halo
        if (haloRef.current) {
          haloRef.current.rotation.y = t * 3;
        }
      } else {
        // Idle smooth breathing & curious look around
        groupRef.current.rotation.y = Math.sin(t * 1.5) * 0.25;
        groupRef.current.rotation.x = Math.sin(t * 2) * 0.08;
        groupRef.current.position.y = Math.sin(t * 2.5) * 0.08;

        if (jawRef.current) {
          jawRef.current.position.y = -0.48;
        }
      }
    }
  });

  const getEyeColor = () => {
    if (mode === 'repented_correct') return '#00ff88';
    if (mode === 'lockout') return '#ff0033';
    if (mode === 'sqli_troll') return '#c084fc';
    return '#00d4ff';
  };

  const getHeadColor = () => {
    if (mode === 'repented_correct') return '#064e3b';
    if (mode === 'lockout') return '#450a0a';
    if (mode === 'sqli_troll') return '#3b0764';
    return '#0b1329';
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Victory Halo if repented and correct */}
      {mode === 'repented_correct' && (
        <group ref={haloRef} position={[0, 1.2, 0]}>
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[0.7, 0.06, 16, 32]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={2} />
          </mesh>
        </group>
      )}

      {/* Main Bot Head Base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[1.2, 0.9, 1.1]} />
        <meshStandardMaterial
          color={getHeadColor()}
          metalness={0.8}
          roughness={0.2}
          emissive={getEyeColor()}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Futuristic Curved Visor Screen */}
      <mesh position={[0, 0.2, 0.58]}>
        <boxGeometry args={[1.05, 0.45, 0.08]} />
        <meshStandardMaterial color="#020617" roughness={0.1} />
      </mesh>

      {/* Dual Glowing Cyber Eyes (LEDs) */}
      <group position={[0, 0.2, 0.63]}>
        {/* Left Eye */}
        <mesh position={[-0.28, 0, 0]}>
          {mode === 'repented_correct' ? (
            // Smiling crescent eye
            <torusGeometry args={[0.12, 0.04, 16, 16, Math.PI]} />
          ) : (
            <sphereGeometry args={[0.12, 16, 16]} />
          )}
          <meshStandardMaterial color={getEyeColor()} emissive={getEyeColor()} emissiveIntensity={2.5} />
        </mesh>

        {/* Right Eye */}
        <mesh position={[0.28, 0, 0]}>
          {mode === 'repented_correct' ? (
            <torusGeometry args={[0.12, 0.04, 16, 16, Math.PI]} />
          ) : (
            <sphereGeometry args={[0.12, 16, 16]} />
          )}
          <meshStandardMaterial color={getEyeColor()} emissive={getEyeColor()} emissiveIntensity={2.5} />
        </mesh>
      </group>

      {/* Laughing Moving Jaw */}
      <mesh ref={jawRef} position={[0, -0.48, 0.05]}>
        <boxGeometry args={[1.0, 0.35, 0.95]} />
        <meshStandardMaterial color={getHeadColor()} metalness={0.9} roughness={0.2} />
        {/* Glowing Smile Teeth */}
        <mesh position={[0, 0.1, 0.5]}>
          <boxGeometry args={[0.7, 0.08, 0.04]} />
          <meshStandardMaterial color={getEyeColor()} emissive={getEyeColor()} emissiveIntensity={1.5} />
        </mesh>
      </mesh>

      {/* Ear Antennas with blinking LEDs */}
      {[-0.68, 0.68].map((x, i) => (
        <group key={i} position={[x, 0.2, 0]}>
          <mesh rotation={[0, 0, i === 0 ? Math.PI / 8 : -Math.PI / 8]}>
            <cylinderGeometry args={[0.05, 0.08, 0.4, 8]} />
            <meshStandardMaterial color="#334155" metalness={0.8} />
          </mesh>
          <mesh position={[i === 0 ? -0.1 : 0.1, 0.25, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={getEyeColor()} emissive={getEyeColor()} emissiveIntensity={2} />
          </mesh>
        </group>
      ))}

      {/* Head Top Antenna */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 0.3, 8]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
      <mesh position={[0, 0.92, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={getEyeColor()} emissive={getEyeColor()} emissiveIntensity={2.5} />
      </mesh>
    </group>
  );
}

export default function LoginGate({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isRepenting, setIsRepenting] = useState(false);
  const [showTrollModal, setShowTrollModal] = useState(false);
  const [trollModalType, setTrollModalType] = useState('sqli'); // 'sqli' | 'lockout'
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRepentedSuccess, setIsRepentedSuccess] = useState(false);
  const [authenticatedMember, setAuthenticatedMember] = useState(null);

  // Authorized team accounts with multilingual aliases
  const teamAccounts = [
    {
      id: 'mahmoud-salman',
      aliases: ['mahmoud', 'محمود', 'سلمان', 'محمود سلمان', 'mahmoud salman'],
      pin: '1580',
      name: 'محمود سلمان',
      role: 'Red Team Operator & AI Core Architect',
      avatar: '👨‍💻'
    },
    {
      id: 'roqaya-wesam',
      aliases: ['roqaya', 'رقية', 'رقيه', 'رقية وسام', 'رقيه وسام', 'roqaya wesam'],
      pin: '2026',
      name: 'رقيه وسام',
      role: 'Red Team Analyst & Security Testing Specialist',
      avatar: '👩‍💻'
    },
    {
      id: 'mohamed-embaby',
      aliases: ['embaby', 'إمبابي', 'امبابي', 'محمد إمبابي', 'محمد امبابي', 'mohamed embaby'],
      pin: '2026',
      name: 'محمد إمبابي',
      role: 'Network Infrastructure & Switching Architect',
      avatar: '👨‍💼'
    },
    {
      id: 'mahmoud-ashraf',
      aliases: ['ashraf', 'أشرف', 'اشرف', 'محمود أشرف', 'محمود اشرف', 'mahmoud ashraf'],
      pin: '2026',
      name: 'محمود أشرف',
      role: 'OT Protocols, VPN & Simulation Architect',
      avatar: '👨‍🔧'
    },
    {
      id: 'shahd-ahmed',
      aliases: ['shahd', 'شهد', 'شهد أحمد', 'شهد احمد', 'shahd ahmed'],
      pin: '2026',
      name: 'شهد أحمد',
      role: 'Firewall & Network Security Specialist',
      avatar: '👩‍💼'
    },
    {
      id: 'shamel-shaheen',
      aliases: ['shamel', 'شامل', 'شامل شاهين', 'shamel shaheen'],
      pin: '2026',
      name: 'شامل شاهين',
      role: 'SOC Analyst (Blue Team Operations)',
      avatar: '🕵️‍♂️'
    },
    {
      id: 'ammar-yasser',
      aliases: ['ammar', 'عمار', 'عمار ياسر', 'ammar yasser'],
      pin: '2026',
      name: 'عمار ياسر',
      role: 'Cloud & Deception Grid Architect',
      avatar: '☁️'
    },
    {
      id: 'marwan-ashraf',
      aliases: ['marwan', 'مروان', 'مروان أشرف', 'مروان اشرف', 'marwan ashraf'],
      pin: '2026',
      name: 'مروان أشرف',
      role: 'Hardware & Robotics Systems Engineer',
      avatar: '🤖'
    },
  ];

  // Arabic numbers to English converter
  const normalizeDigits = (str) => {
    return str
      .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
      .trim();
  };

  // Regex for SQL injection and malicious bypass attempts
  const sqliRegex = /('|--|or\s+['"0-9]|union\s+select|<script>|'='|or\s+1=1|admin'\s*--|admin"|benchmark|sleep\()/i;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanUser = username.trim().toLowerCase();
    const cleanPin = normalizeDigits(pin);

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

    // 2. Validate against authorized aliases
    const matched = teamAccounts.find((acc) => {
      const isAliasMatch = acc.aliases.some((al) => al.toLowerCase() === cleanUser);
      const isPinMatch = acc.pin === cleanPin;
      return isAliasMatch && isPinMatch;
    });

    if (matched) {
      setAuthenticatedMember(matched);
      try {
        localStorage.setItem('cyf_authenticated_user', JSON.stringify(matched));
      } catch (err) {
        console.warn('LocalStorage unavailable', err);
      }

      if (isRepenting) {
        // Trigger the funny "أيووون كدا اظبط واسترجل! 😂👌" celebration
        setIsRepentedSuccess(true);
        setTimeout(() => {
          onLoginSuccess(matched);
        }, 2600);
      } else {
        setIsSuccess(true);
        setTimeout(() => {
          onLoginSuccess(matched);
        }, 1200);
      }
    } else {
      const nextAttempts = attemptCount + 1;
      setAttemptCount(nextAttempts);

      if (nextAttempts >= 3) {
        setTrollModalType('lockout');
        setShowTrollModal(true);
        setErrorMsg('تحذير أمني: رصد 3 محاولات فاشلة!');
      } else {
        setErrorMsg(`بيانات غير صحيحة! محاولة فاشلة (${nextAttempts} من 3)`);
      }
    }
  };

  const handleRepentance = () => {
    setShowTrollModal(false);
    setIsRepenting(true);
    setErrorMsg('');
    setAttemptCount(0);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050811] cyber-grid-bg p-4 overflow-y-auto">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -top-24 -left-24" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none -bottom-24 -right-24" />

      {/* Main Login Card */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#090f1f]/95 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl text-right z-10 transition-all">
        
        {/* 3D Animated Bot Avatar */}
        <div className="w-28 h-28 mx-auto -mt-3 mb-2 relative">
          <Canvas camera={{ position: [0, 0, 3.2], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[0, 0, 2]} color={isRepentedSuccess || isSuccess ? '#00ff88' : '#00d4ff'} intensity={2} />
            <LaughingBotHead mode={isRepentedSuccess ? 'repented_correct' : isSuccess ? 'repented_correct' : attemptCount >= 3 ? 'lockout' : 'idle'} />
          </Canvas>
        </div>

        {/* Top Header */}
        <div className="text-center mb-5">
          <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase inline-block mb-1.5">
            CyberForge Security Portal v2.0
          </span>
          <h2 className="text-2xl font-extrabold text-white">
            تسجيل دخول <span className="text-gradient">أعضاء الفريق</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            المنظومة مؤمنة ومخصصة لفريق عمل CyberForge 2026 فقط
          </p>
        </div>

        {/* REPENTED VICTORY BANNER ("أيووون كدا اظبط واسترجل! 😂👌") */}
        {isRepentedSuccess && authenticatedMember && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 border border-emerald-400 text-center text-xs font-bold mb-5 shadow-xl shadow-emerald-950/50 animate-bounce">
            <span className="text-3xl block mb-1">😂👌🎉</span>
            <p className="text-base text-emerald-300 font-extrabold">
              أيوووون كدا اظبط واسترجل! 😂👌
            </p>
            <p className="text-white mt-1 text-xs leading-relaxed">
              شفت لما مشيت صح ورجعت لعقلك دخلت في ثانية إزاي؟ مرحباً بك يا <strong className="text-cyan-300">{authenticatedMember.name}</strong> ({authenticatedMember.avatar})
            </p>
            <p className="text-[10px] text-gray-300 mt-1 font-mono">
              🚀 جاري نقلك إلى لوحة القيادة والمحاكاة ثلاثية الأبعاد...
            </p>
          </div>
        )}

        {/* NORMAL SUCCESS BANNER */}
        {!isRepentedSuccess && isSuccess && authenticatedMember && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-center text-xs font-bold mb-5 animate-pulse">
            <p className="text-sm">✔ تم التحقق بنجاح — Access Granted</p>
            <p className="text-white mt-1">مرحباً بك يا {authenticatedMember.name} ({authenticatedMember.avatar})</p>
            <p className="text-[10px] text-gray-400 mt-0.5">جاري فتح المنظومة ثلاثية الأبعاد...</p>
          </div>
        )}

        {/* Input Form */}
        {!isSuccess && !isRepentedSuccess && (
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>اسم المستخدم (بالعربي أو الإنجليزي):</span>
                </span>
                <span className="text-[10px] text-gray-500">مثال: mahmoud أو محمود</span>
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك أو يوزرك..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all font-semibold"
                autoComplete="off"
              />
            </div>

            {/* Quick Clickable Member Badges */}
            <div>
              <span className="text-[10px] text-gray-400 block mb-1.5 font-bold">أو اختر اسمك بنقرة واحدة:</span>
              <div className="flex flex-wrap gap-1">
                {teamAccounts.map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => setUsername(acc.aliases[0])}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition-all flex items-center gap-1 ${
                      username.toLowerCase() === acc.aliases[0].toLowerCase()
                        ? 'bg-cyan-500 text-black border-cyan-400 shadow-sm'
                        : 'bg-slate-900/80 text-gray-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{acc.avatar}</span>
                    <span>{acc.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
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
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2 animate-shake">
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

        <div className="mt-5 pt-3 border-t border-slate-800 text-center text-[10px] text-gray-500">
          <p>CyberForge Platform • Industrial SCADA AI Protection Grid 2026</p>
        </div>
      </div>

      {/* TROLL EASTER EGG MODAL WITH 3D ANIMATED LAUGHING BOT */}
      {showTrollModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-md w-full rounded-3xl p-6 sm:p-8 text-center border shadow-2xl relative ${
            trollModalType === 'sqli'
              ? 'bg-[#0d1424] border-purple-500/70 shadow-purple-950/60'
              : 'bg-[#1a080c] border-red-500/80 shadow-red-950/70'
          }`}>
            {/* 3D Model in Modal laughing and moving jaw */}
            <div className="w-36 h-36 mx-auto mb-2">
              <Canvas camera={{ position: [0, 0, 3.2], fov: 40 }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 5, 5]} intensity={1.8} />
                <pointLight position={[0, 0, 2]} color={trollModalType === 'sqli' ? '#c084fc' : '#ff0033'} intensity={3} />
                <LaughingBotHead mode={trollModalType} />
              </Canvas>
            </div>

            {trollModalType === 'sqli' ? (
              <>
                <div className="inline-block px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold mb-2 font-mono">
                  🚨 EXPLOIT TRAP DETECTED!
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  بطل يا عبيط.. SQL Injection على Frontend في React؟ 😂🤦‍♂️
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  داخل تكتب <code className="text-purple-400 font-mono font-bold bg-slate-900 px-1.5 py-0.5 rounded">' OR '1'='1</code> وعامل فيها مستر روبوت؟ فاكرنا مخزنين الباسورد في قاعدة بيانات من غير sanitization يعني؟ روح ذاكر OWASP وتعال ادخل بيوزرك الحقيقي! ☕
                </p>
              </>
            ) : (
              <>
                <div className="inline-block px-3 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-bold mb-2 font-mono">
                  🚨 3 STRIKES SECURITY ALARM
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  شكلك هتتكرش دلوقتي يا بطل! 💀⚡
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  دي المحاولة التالتة الغلط! باقي لك محاولة واحدة والذكاء الاصطناعي هيبعت أمر لـ pfSense ينقلك لـ <strong className="text-red-400">VLAN 50 (Quarantine)</strong> ومروان هيعمل عليك <strong className="text-red-400">Kill-Switch</strong> فيزيائي ويفصل النت والكهرباء عن أوضتك! 😂🔌
                </p>
              </>
            )}

            <button
              onClick={handleRepentance}
              className="w-full py-3 px-6 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400 shadow-lg shadow-purple-950/40 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>خلاص توبت رجعني أكتب صح</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
