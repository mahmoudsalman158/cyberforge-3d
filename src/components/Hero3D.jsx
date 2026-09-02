import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Play, RotateCcw, Zap, Radio, ShieldAlert, ShieldCheck, CheckCircle2, Lock, Smartphone, Home, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Battery, Wifi, AlertOctagon } from 'lucide-react';
import { attackScenarios } from '../data/attackScenarios';

// 3D Station Component
function ScadaStation({ position, name, color, status, onClick, isSelected, subtitle, isQuarantined }) {
  const meshRef = useRef();
  const ledRef = useRef();

  useFrame(({ clock }) => {
    if (ledRef.current) {
      const t = clock.getElapsedTime();
      if (status === 'danger') {
        ledRef.current.intensity = Math.sin(t * 12) > 0 ? 3.5 : 0.2;
      } else if (status === 'warning') {
        ledRef.current.intensity = Math.sin(t * 4) > 0 ? 2 : 0.5;
      } else {
        ledRef.current.intensity = 1.2;
      }
    }
  });

  const getLedColor = () => {
    if (status === 'danger') return '#ff3366';
    if (status === 'warning') return '#ffaa00';
    return '#00ff88';
  };

  return (
    <group position={position} onClick={onClick}>
      {/* Station Base Box */}
      <mesh ref={meshRef} position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[1.4, 0.8, 1.4]} />
        <meshStandardMaterial
          color={isQuarantined ? '#330814' : '#0d1b2a'}
          metalness={0.8}
          roughness={0.2}
          emissive={isSelected ? color : isQuarantined ? '#ff0033' : '#050a14'}
          emissiveIntensity={isSelected ? 0.6 : isQuarantined ? 0.3 : 0.1}
        />
      </mesh>

      {/* Industrial Machine Top Element */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 16]} />
        <meshStandardMaterial color={isQuarantined ? '#4a0e1c' : '#1b2a47'} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Quarantine Energy Shield Barrier if isolated */}
      {isQuarantined && (
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 1.6, 16]} />
          <meshStandardMaterial color="#ff0044" wireframe transparent opacity={0.4} />
        </mesh>
      )}

      {/* Glowing Status LED (Kill-Switch Indicator) */}
      <mesh position={[0, 1.35, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={getLedColor()}
          emissive={getLedColor()}
          emissiveIntensity={status === 'danger' ? 3 : 1.5}
        />
      </mesh>
      <pointLight ref={ledRef} position={[0, 1.4, 0]} color={getLedColor()} distance={3.5} intensity={1.5} />

      {/* Floating HTML Label */}
      <Html position={[0, 1.85, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
        <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap backdrop-blur-md transition-all ${
          status === 'danger'
            ? 'bg-rose-950/95 text-rose-300 border border-rose-500 shadow-xl shadow-rose-500/50 animate-pulse'
            : status === 'warning'
            ? 'bg-amber-950/90 text-amber-300 border border-amber-500'
            : 'bg-slate-900/90 text-cyan-300 border border-cyan-500/40 shadow-sm'
        }`}>
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${
              status === 'danger' ? 'bg-rose-500 animate-ping' : status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'
            }`} />
            {name}
            {isQuarantined && <span className="text-[9px] bg-rose-900 px-1 rounded text-white font-mono">VLAN 50</span>}
          </div>
        </div>
      </Html>
    </group>
  );
}

// 3D Cyber-Rover Component with Autonomous Patrol / Safe-Return / Manual Joystick Steering
function CyberRover({ targetPositions, roverMode, manualOffset, onSelect }) {
  const roverRef = useRef();
  const [currentWaypoint, setCurrentWaypoint] = useState(0);

  useFrame((state, delta) => {
    if (!roverRef.current) return;

    if (roverMode === 'safe-return') {
      // Return straight to home base [0, 0.2, 0]
      const currentPos = roverRef.current.position;
      const dir = new THREE.Vector3(0 - currentPos.x, 0, 0 - currentPos.z);
      const dist = dir.length();
      if (dist > 0.1) {
        dir.normalize();
        currentPos.x += dir.x * delta * 2.5;
        currentPos.z += dir.z * delta * 2.5;
        roverRef.current.rotation.y = Math.atan2(dir.x, dir.z);
      }
    } else if (roverMode === 'manual') {
      // Guided by manual joystick delta offset
      roverRef.current.position.x += manualOffset.x * delta * 3;
      roverRef.current.position.z += manualOffset.z * delta * 3;
      if (manualOffset.x !== 0 || manualOffset.z !== 0) {
        roverRef.current.rotation.y = Math.atan2(manualOffset.x, manualOffset.z);
      }
    } else {
      // Normal autonomous patrol loop
      if (targetPositions.length === 0) return;
      const target = targetPositions[currentWaypoint];
      const currentPos = roverRef.current.position;
      const dir = new THREE.Vector3(target[0] - currentPos.x, 0, target[2] - currentPos.z);
      const dist = dir.length();

      if (dist < 0.2) {
        setCurrentWaypoint((prev) => (prev + 1) % targetPositions.length);
      } else {
        dir.normalize();
        currentPos.x += dir.x * delta * 1.6;
        currentPos.z += dir.z * delta * 1.6;
        roverRef.current.rotation.y = Math.atan2(dir.x, dir.z);
      }
    }
  });

  const getAntennaColor = () => {
    if (roverMode === 'safe-return') return '#ffaa00';
    if (roverMode === 'manual') return '#a855f7';
    return '#00ff88';
  };

  return (
    <group ref={roverRef} position={[0, 0.2, 0]} onClick={onSelect}>
      {/* Rover Chassis */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.9, 0.3, 1.2]} />
        <meshStandardMaterial
          color={roverMode === 'safe-return' ? '#331b05' : '#0f172a'}
          metalness={0.7}
          roughness={0.3}
          emissive={roverMode === 'safe-return' ? '#ffaa00' : '#00d4ff'}
          emissiveIntensity={roverMode === 'safe-return' ? 0.4 : 0.15}
        />
      </mesh>

      {/* Wheels */}
      {[-0.5, 0.5].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.15, 0.4]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.18, 0.18, 0.15, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.9} />
          </mesh>
          <mesh position={[x, 0.15, -0.4]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.18, 0.18, 0.15, 16]} />
            <meshStandardMaterial color="#334155" metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <mesh position={[0.25, 0.2, 0.6]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color={roverMode === 'safe-return' ? '#ffaa00' : '#00ffff'} />
      </mesh>
      <mesh position={[-0.25, 0.2, 0.6]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color={roverMode === 'safe-return' ? '#ffaa00' : '#00ffff'} />
      </mesh>
      <spotLight
        position={[0, 0.3, 0.6]}
        color={roverMode === 'safe-return' ? '#ffaa00' : '#00ffff'}
        intensity={1.8}
        angle={0.6}
        penumbra={0.5}
        distance={4.5}
      />

      {/* Scanning Radar Antenna */}
      <Float speed={5} rotationIntensity={2} floatIntensity={0.2}>
        <mesh position={[0, 0.45, -0.2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.6, -0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={getAntennaColor()} emissive={getAntennaColor()} emissiveIntensity={2} />
        </mesh>
      </Float>

      {/* Rover Floating Label */}
      <Html position={[0, 1.15, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
        <div className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold whitespace-nowrap shadow-lg ${
          roverMode === 'safe-return'
            ? 'bg-amber-950 text-amber-300 border border-amber-400 shadow-amber-500/40 animate-bounce'
            : roverMode === 'manual'
            ? 'bg-purple-950 text-purple-300 border border-purple-400 shadow-purple-500/40'
            : 'bg-cyan-950/90 text-cyan-300 border border-cyan-400 shadow-cyan-500/30'
        }`}>
          {roverMode === 'safe-return' ? '⚠️ العودة الذاتية للقاعدة (Safe-Return)' : roverMode === 'manual' ? '🎮 تحكم يدوي (Mobile App)' : '🚗 Cyber-Rover (Wireless Patrol)'}
        </div>
      </Html>
    </group>
  );
}

// 3D Central Switch & Firewall Hub
function InfrastructureHub({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.8, 0.5, 1.2]} />
        <meshStandardMaterial color="#0b1329" metalness={0.8} roughness={0.2} emissive="#0284c7" emissiveIntensity={0.2} />
      </mesh>

      {/* Blinking Port Lights */}
      {[-0.6, -0.3, 0, 0.3, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.4, 0.61]}>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#00ff88' : '#00d4ff'} emissive={i % 2 === 0 ? '#00ff88' : '#00d4ff'} emissiveIntensity={1.5} />
        </mesh>
      ))}

      {/* Firewall Energy Dome */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
      </mesh>

      <Html position={[0, 1.6, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
        <div className="px-2 py-0.5 rounded-md bg-slate-900/90 text-sky-300 border border-sky-500/50 text-[9px] font-bold whitespace-nowrap">
          🌐 Cisco 2960 + pfSense
        </div>
      </Html>
    </group>
  );
}

// 3D Cloud Node (AWS & Wazuh SIEM)
function CloudNode({ position }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 2.5, 0]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#9d4edd" metalness={0.6} roughness={0.2} emissive="#a855f7" emissiveIntensity={0.6} />
        </mesh>
        <pointLight position={[0, 2.5, 0]} color="#a855f7" intensity={2} distance={4} />

        <Html position={[0, 3.4, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
          <div className="px-2.5 py-1 rounded-lg bg-purple-950/90 text-purple-300 border border-purple-500 text-[10px] font-bold whitespace-nowrap shadow-lg shadow-purple-500/30">
            ☁️ AWS Cloud & Wazuh SIEM
          </div>
        </Html>
      </Float>
    </group>
  );
}

// Floor Grid Component
function CyberFloor() {
  return (
    <group position={[0, -0.01, 0]}>
      <gridHelper args={[24, 24, '#00d4ff', '#1e293b']} position={[0, 0, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#040711" roughness={0.8} metalness={0.2} />
      </mesh>
    </group>
  );
}

// Main 3D Scene Wrapper
export default function Hero3D() {
  const [selectedStationId, setSelectedStationId] = useState(null);
  const [activeSim, setActiveSim] = useState(null);
  const [simStep, setSimStep] = useState(0);
  const [simLogs, setSimLogs] = useState([]);
  const [autoRotate, setAutoRotate] = useState(true);

  // Rover Movement & Mobile App Controller State
  const [roverMode, setRoverMode] = useState('patrol'); // 'patrol', 'safe-return', 'manual'
  const [manualOffset, setManualOffset] = useState({ x: 0, z: 0 });
  const [showMobileApp, setShowMobileApp] = useState(false);
  const [roverBattery, setRoverBattery] = useState(94);
  const [roverSpeed, setRoverSpeed] = useState(1.6);

  // Dynamic Station Data calculation based on active simulation state
  const getStationState = (stationId) => {
    if (activeSim?.id === 'stuxnet-scada' && stationId === 'furnace') {
      if (simStep === 1) return { status: 'warning', vlan: 'VLAN 10', stateLabel: '🟡 قراءة حرارة غير منطقية (350°C)' };
      if (simStep === 2) return { status: 'warning', vlan: 'VLAN 10', stateLabel: '🟡 إنذار Suricata + رصد الهجوم' };
      if (simStep >= 3) return { status: 'danger', isQuarantined: true, vlan: 'VLAN 50 (Quarantine)', stateLabel: '🔴 تم العزل الفيزيائي والحجر الصحي (Kill-Switch Active)' };
    }
    return { status: 'normal', isQuarantined: false, vlan: 'VLAN 10 (SCADA/IoT)', stateLabel: '🟢 متصل ومحمي' };
  };

  const stations = [
    {
      id: 'cooling',
      name: 'محطة التبريد والمضخة',
      subtitle: 'Cooling & DC Pump (ESP32 #1)',
      pos: [-4.5, 0, -3],
      color: '#06b6d4',
      details: 'حساس تدفق مياه + مضخة DC + ريلاي فصل فيزيائي. مسؤولة عن دورة تبريد المحركات وخطوط الإنتاج.'
    },
    {
      id: 'furnace',
      name: 'محطة أفران الصهر والحرارة',
      subtitle: 'Thermal Furnace (ESP32 #2)',
      pos: [4.5, 0, -3],
      color: '#f43f5e',
      details: 'حساس حرارة DHT22 + مروحة تبريد + ريلاي فصل فيزيائي. هدف هجمات التلاعب المشابهة لـ Stuxnet.'
    },
    {
      id: 'power',
      name: 'محطة توزيع الطاقة والكهرباء',
      subtitle: 'Power Grid (ESP32 #3)',
      pos: [-4.5, 0, 3],
      color: '#10b981',
      details: 'حساس تيار ACS712 + ريلاي رئيسي. مراقبة استهلاك الجهد وتفادي الحمولات الكهربائية الزائدة.'
    },
    {
      id: 'safety',
      name: 'محطة الأمان ومحيط المصنع',
      subtitle: 'Safety & Perimeter (ESP32 #4)',
      pos: [4.5, 0, 3],
      color: '#f59e0b',
      details: 'حساس حركة PIR + إنذار صوتي Buzzer. حماية محيط غرف التحكم الصناعي والأبواب الحساسة.'
    }
  ];

  const roverWaypoints = [
    [-3.5, 0, -2],
    [3.5, 0, -2],
    [3.5, 0, 2],
    [-3.5, 0, 2]
  ];

  // Run Simulation Logic
  const handleStartSim = (scenario) => {
    setActiveSim(scenario);
    setSimStep(0);
    setSimLogs([`[INIT] بدء تشغيل سيناريو: ${scenario.title}`]);

    if (scenario.id === 'stuxnet-scada') {
      setSelectedStationId('furnace');
    } else if (scenario.id === 'rover-hijack') {
      setSelectedStationId('rover');
      setShowMobileApp(true);
    }

    scenario.steps.forEach((st, idx) => {
      setTimeout(() => {
        setSimStep(idx + 1);
        setSimLogs((prev) => [...prev, st.systemLog]);

        // Specific actions on hijack scenario
        if (scenario.id === 'rover-hijack') {
          if (idx + 1 === 3) {
            setRoverMode('safe-return');
          }
        }
      }, (idx + 1) * 2200);
    });
  };

  const handleResetSim = () => {
    setActiveSim(null);
    setSimStep(0);
    setSimLogs([]);
    setSelectedStationId(null);
    setRoverMode('patrol');
    setManualOffset({ x: 0, z: 0 });
  };

  // Joystick manual movements
  const handleManualMove = (dx, dz) => {
    setRoverMode('manual');
    setManualOffset({ x: dx, z: dz });
    setTimeout(() => {
      setManualOffset({ x: 0, z: 0 });
    }, 400);
  };

  const handleSafeReturn = () => {
    setRoverMode('safe-return');
    setSimLogs((prev) => [...prev, '[MOBILE APP] تفعيل أمر العودة الذاتية للقاعدة (Safe-Return-to-Base)']);
  };

  const handleResumePatrol = () => {
    setRoverMode('patrol');
    setManualOffset({ x: 0, z: 0 });
    setSimLogs((prev) => [...prev, '[MOBILE APP] استئناف الدورية اللاسلكية الأوتوماتيكية']);
  };

  // Resolve currently selected station details with live dynamic status
  const currentSelectedData = (() => {
    if (!selectedStationId) return null;
    if (selectedStationId === 'rover') {
      return {
        id: 'rover',
        name: 'عربة الفحص الذاتية (Cyber-Rover)',
        subtitle: 'Autonomous Penetration Testing Vehicle (Wireless)',
        details: 'عربة لاسلكية بالكامل (Wireless) مزودة بـ Raspberry Pi وكارت Wi-Fi يدعم Monitor Mode وبطارية Power Bank. تقوم بعمل Nmap Scan دوري لاسلكياً وتدعم بروتوكول العودة الآمنة للقاعدة والتحكم الطارئ من تطبيق الموبايل.',
        vlan: 'VLAN 30 (Rover)',
        stateLabel: roverMode === 'safe-return' ? '⚠️ العودة الذاتية الآمنة للقاعدة' : roverMode === 'manual' ? '🎮 تحت التحكم اليدوي (Mobile App)' : '🟢 تقوم بالدورية اللاسلكية وفحص الثغرات',
        status: roverMode === 'safe-return' ? 'warning' : 'normal'
      };
    }
    const base = stations.find((s) => s.id === selectedStationId);
    if (!base) return null;
    const dynamicState = getStationState(base.id);
    return {
      ...base,
      ...dynamicState
    };
  })();

  return (
    <section id="simulation" className="relative w-full min-h-[90vh] bg-[#060911] overflow-hidden pt-20 pb-12 flex flex-col items-center justify-center">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-4 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3 shadow-inner">
          <Zap className="w-3.5 h-3.5" />
          <span>محاكي المصنع التفاعلي ثلاثي الأبعاد — 3D Cyber Simulation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          دليل منظومة <span className="text-gradient">CyberForge</span> والربط المتكامل
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          محاكاة حية توضح دور كل عضو في الفريق، تدفق البيانات بين الحساسات والسويتش والفايروول وسحابة AWS، مع دعم تطبيق الموبايل للتحكم في الـ Rover والعودة الذاتية للقاعدة.
        </p>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative w-full max-w-6xl h-[540px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#080d1a] shadow-2xl shadow-cyan-950/40 mx-4">
        
        {/* Floating Controls Overlay (Top Right) */}
        <div className="absolute top-4 right-4 z-20 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowMobileApp(!showMobileApp)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 shadow-lg ${
              showMobileApp
                ? 'bg-purple-600 text-white border-purple-400 shadow-purple-600/30'
                : 'bg-slate-900/90 text-purple-300 border-purple-500/40 hover:bg-purple-950'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{showMobileApp ? 'إخفاء تطبيق الموبايل' : '📱 فتح تطبيق الموبايل للتحكم'}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
              autoRotate ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' : 'bg-slate-900/80 text-gray-400 border-slate-700'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{autoRotate ? 'دوران تلقائي: مفعل' : 'دوران: متوقف'}</span>
          </button>

          {activeSim && (
            <button
              onClick={handleResetSim}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/50 hover:bg-rose-500/30 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة تعيين</span>
            </button>
          )}
        </div>

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 9, 12], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />
          <pointLight position={[0, 5, 0]} color="#00d4ff" intensity={1} />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={5}
            maxDistance={20}
          />

          <CyberFloor />
          <InfrastructureHub position={[0, 0, 0]} />
          <CloudNode position={[0, 0, 0]} />

          {/* SCADA Stations with dynamic states */}
          {stations.map((st) => {
            const dynamicState = getStationState(st.id);
            return (
              <ScadaStation
                key={st.id}
                position={st.pos}
                name={st.name}
                subtitle={st.subtitle}
                color={st.color}
                status={dynamicState.status}
                isQuarantined={dynamicState.isQuarantined}
                isSelected={selectedStationId === st.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStationId(st.id);
                }}
              />
            );
          })}

          {/* Cyber-Rover Patrol (Wireless with Safe-Return & Manual Override) */}
          <CyberRover
            targetPositions={roverWaypoints}
            roverMode={roverMode}
            manualOffset={manualOffset}
            onSelect={(e) => {
              e.stopPropagation();
              setSelectedStationId('rover');
              setShowMobileApp(true);
            }}
          />
        </Canvas>

        {/* Interactive Virtual Mobile App Controller Widget (Overlay) */}
        {showMobileApp && (
          <div className="absolute top-16 right-4 z-30 w-72 rounded-2xl bg-[#090e1c]/95 border-2 border-purple-500/60 p-4 shadow-2xl backdrop-blur-xl animate-fadeIn text-right text-xs">
            {/* Phone Top Bar */}
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-purple-500/30 text-gray-300 text-[11px]">
              <div className="flex items-center gap-1.5 text-purple-300 font-bold">
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span>CyberForge Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="flex items-center gap-0.5 text-emerald-400"><Wifi className="w-3 h-3" /> VLAN 30</span>
                <span className="flex items-center gap-0.5 text-cyan-400"><Battery className="w-3 h-3" /> {roverBattery}%</span>
                <button onClick={() => setShowMobileApp(false)} className="text-gray-400 hover:text-white px-1">✕</button>
              </div>
            </div>

            {/* Emergency Hijack Warning Banner */}
            {activeSim?.id === 'rover-hijack' && (
              <div className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/80 text-[11px] text-rose-200 mb-3 animate-pulse">
                <div className="flex items-center gap-1.5 font-bold text-rose-400 mb-0.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>تنبيه: محاولة اختطاف غير مصرح بها!</span>
                </div>
                تم تفعيل العودة الذاتية الآمنة للقاعدة (Safe-Return).
              </div>
            )}

            {/* Rover Status & Telemetry */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-3 space-y-1">
              <div className="flex justify-between text-gray-400 text-[10px]">
                <span>الوضع الحالي:</span>
                <strong className={roverMode === 'safe-return' ? 'text-amber-400' : roverMode === 'manual' ? 'text-purple-400' : 'text-emerald-400'}>
                  {roverMode === 'safe-return' ? '⚠️ عودة ذاتية للقاعدة' : roverMode === 'manual' ? '🎮 تحكم يدوي طارئ' : '🟢 دورية ذاتية (Auto)'}
                </strong>
              </div>
              <div className="flex justify-between text-gray-400 text-[10px]">
                <span>IP العربة:</span>
                <span className="font-mono text-cyan-300">192.168.30.15</span>
              </div>
              <div className="flex justify-between text-gray-400 text-[10px]">
                <span>سرعة المحركات:</span>
                <span className="font-mono text-white">{roverSpeed} m/s</span>
              </div>
            </div>

            {/* Virtual Joystick Navigation Controls */}
            <div className="mb-3">
              <span className="text-[10px] font-bold text-gray-400 block mb-2 text-center">ذراع التحكم اليدوي (Virtual Joystick):</span>
              <div className="flex flex-col items-center gap-1.5">
                <button
                  onClick={() => handleManualMove(0, -0.8)}
                  className="w-10 h-10 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-400 text-white font-bold flex items-center justify-center transition-all active:scale-90"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleManualMove(-0.8, 0)}
                    className="w-10 h-10 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-400 text-white font-bold flex items-center justify-center transition-all active:scale-90"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleSafeReturn}
                    title="العودة الذاتية للقاعدة"
                    className="w-10 h-10 rounded-xl bg-amber-500/30 hover:bg-amber-500 border border-amber-400 text-amber-300 hover:text-black font-bold flex items-center justify-center transition-all active:scale-90"
                  >
                    <Home className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleManualMove(0.8, 0)}
                    className="w-10 h-10 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-400 text-white font-bold flex items-center justify-center transition-all active:scale-90"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={() => handleManualMove(0, 0.8)}
                  className="w-10 h-10 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-400 text-white font-bold flex items-center justify-center transition-all active:scale-90"
                >
                  <ArrowDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleSafeReturn}
                className="flex-1 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/50 hover:bg-amber-500 hover:text-black font-bold text-[10px] transition-all flex items-center justify-center gap-1"
              >
                <Home className="w-3 h-3" />
                <span>عودة للقاعدة</span>
              </button>
              <button
                onClick={handleResumePatrol}
                className="flex-1 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black font-bold text-[10px] transition-all flex items-center justify-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>دورية ذاتية</span>
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Station Detail Modal / Popup (Bottom Left) */}
        {currentSelectedData && (
          <div className={`absolute bottom-4 left-4 z-20 max-w-sm rounded-xl p-4 shadow-2xl backdrop-blur-md transition-all animate-fadeIn border ${
            currentSelectedData.isQuarantined
              ? 'bg-rose-950/95 border-rose-500 text-rose-100 shadow-rose-950/60'
              : currentSelectedData.status === 'warning'
              ? 'bg-amber-950/95 border-amber-500 text-amber-100'
              : 'bg-[#0d1527]/95 border-cyan-500/50 text-gray-100'
          }`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-white">{currentSelectedData.name}</h4>
                  {currentSelectedData.isQuarantined && (
                    <span className="px-1.5 py-0.5 rounded bg-rose-600 text-[9px] font-bold text-white flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" />
                      معزول
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-mono text-cyan-300">{currentSelectedData.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedStationId(null)}
                className="text-gray-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-900 border border-slate-700"
              >
                ✕
              </button>
            </div>
            
            <p className="text-xs text-gray-200 leading-relaxed mb-3">{currentSelectedData.details}</p>

            <div className="pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <div>
                <span className="text-gray-400 block text-[10px]">الحالة الأمنية:</span>
                <strong className={`font-bold ${
                  currentSelectedData.isQuarantined ? 'text-rose-400' : currentSelectedData.status === 'warning' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {currentSelectedData.stateLabel}
                </strong>
              </div>
              <div className="text-left">
                <span className="text-gray-400 block text-[10px]">نطاق الشبكة:</span>
                <span className="font-mono text-cyan-300 font-bold">{currentSelectedData.vlan}</span>
              </div>
            </div>
          </div>
        )}

        {/* Live Attack Simulation Scenario Buttons (Top Left) */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">تشغيل سيناريو مباشر:</span>
          {attackScenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handleStartSim(sc)}
              className={`text-right px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-3 ${
                activeSim?.id === sc.id
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-slate-900/90 text-gray-200 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <Play className="w-3 h-3 fill-current" />
                <span>{sc.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Real-Time Terminal Log Feed (Bottom Right of 3D Scene) */}
        {simLogs.length > 0 && (
          <div className="absolute bottom-4 right-4 z-20 max-w-md w-full bg-[#050811]/95 border border-cyan-500/40 rounded-xl p-3 font-mono text-[11px] shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-slate-800 text-cyan-400 text-xs">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                سجل الاستجابة الفوري (Live Defense Stream)
              </span>
              <span className="text-[10px] text-gray-400">الخطوة {simStep}/4</span>
            </div>
            <div className="space-y-1 max-h-24 overflow-y-auto pr-1">
              {simLogs.map((log, i) => (
                <div key={i} className="text-gray-300 leading-snug">
                  <span className="text-cyan-400">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Navigation Cards below 3D */}
      <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-4 gap-3 px-4 mt-6 z-10">
        <a href="#team" className="p-3.5 rounded-xl bg-[#0d1527]/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">👥</span>
            <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">فريق العمل (8)</span>
          </div>
          <p className="text-[11px] text-gray-400">توزيع الأدوار وخارطة الطريق</p>
        </a>

        <a href="#integration" className="p-3.5 rounded-xl bg-[#0d1527]/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🔗</span>
            <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">خريطة الربط</span>
          </div>
          <p className="text-[11px] text-gray-400">تسليم الشغل والبروتوكولات</p>
        </a>

        <a href="#network-flow" className="p-3.5 rounded-xl bg-[#0d1527]/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🌐</span>
            <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">فريق الشبكات (4)</span>
          </div>
          <p className="text-[11px] text-gray-400">تنسيق طبقات الـ Network</p>
        </a>

        <a href="#hardware" className="p-3.5 rounded-xl bg-[#0d1527]/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">🛒</span>
            <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">دليل المستعمل</span>
          </div>
          <p className="text-[11px] text-gray-400">أسعار الهاردوير في مصر</p>
        </a>
      </div>
    </section>
  );
}
