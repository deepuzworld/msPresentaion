import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Activity, Brain, HeartHandshake, AlertCircle, 
  ShieldCheck, Target, Smartphone, Search, Cpu, Eye, ClipboardList, 
  CheckSquare, Lock, BarChart, RotateCw, Layers, Network, Workflow, 
  Database, Palette, MonitorPlay, Server, Box, ActivitySquare, Shield, 
  Zap, Radio, CheckCircle, AlertTriangle, Star, TrendingUp, List, Settings, 
  Users, Maximize, Minimize, Play, Pause, Sparkles, BookOpen, Heart, Menu
} from 'lucide-react';
import mermaid from 'mermaid';
import { slides } from './slidesData';
import type { SlideData } from './slidesData';

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'neutral',
  securityLevel: 'loose',
});

const Mermaid = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const renderChart = async () => {
      try {
        setError(false);
        const uniqueId = `mermaid-${Math.floor(Math.random() * 100000)}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        setSvg(renderedSvg);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };
    renderChart();
  }, [chart]);

  if (error) {
    return (
      <pre className="text-red-400 p-4 rounded-xl border border-red-900 bg-red-950/20 font-mono text-sm overflow-auto">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div 
      className="mermaid w-full h-full max-h-[50vh] lg:max-h-[52vh] flex items-center justify-center overflow-visible"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity size={48} className="text-pink-400" />,
  Brain: <Brain size={48} className="text-purple-400" />,
  HeartHandshake: <HeartHandshake size={48} className="text-rose-400" />,
  AlertCircle: <AlertCircle size={48} className="text-red-400" />,
  ShieldCheck: <ShieldCheck size={48} className="text-emerald-400" />,
  Target: <Target size={48} className="text-blue-400" />,
  Smartphone: <Smartphone size={48} className="text-indigo-400" />,
  Search: <Search size={48} className="text-teal-400" />,
  Cpu: <Cpu size={48} className="text-cyan-400" />,
  Eye: <Eye size={48} className="text-sky-400" />,
  ClipboardList: <ClipboardList size={48} className="text-orange-400" />,
  CheckSquare: <CheckSquare size={48} className="text-green-400" />,
  Lock: <Lock size={48} className="text-slate-400" />,
  BarChart: <BarChart size={48} className="text-fuchsia-400" />,
  RotateCw: <RotateCw size={48} className="text-blue-500" />,
  Layers: <Layers size={48} className="text-indigo-500" />,
  Network: <Network size={48} className="text-purple-500" />,
  Workflow: <Workflow size={48} className="text-pink-500" />,
  Database: <Database size={48} className="text-sky-500" />,
  Palette: <Palette size={48} className="text-rose-500" />,
  MonitorPlay: <MonitorPlay size={48} className="text-cyan-500" />,
  Server: <Server size={48} className="text-teal-500" />,
  Box: <Box size={48} className="text-orange-500" />,
  ActivitySquare: <ActivitySquare size={48} className="text-red-500" />,
  Shield: <Shield size={48} className="text-emerald-500" />,
  Zap: <Zap size={48} className="text-yellow-400" />,
  Radio: <Radio size={48} className="text-orange-600" />,
  CheckCircle: <CheckCircle size={48} className="text-green-500" />,
  AlertTriangle: <AlertTriangle size={48} className="text-amber-500" />,
  Star: <Star size={48} className="text-yellow-500" />,
  TrendingUp: <TrendingUp size={48} className="text-emerald-400" />,
  List: <List size={48} className="text-indigo-400" />,
  Settings: <Settings size={48} className="text-slate-400" />,
  Users: <Users size={48} className="text-indigo-400" />
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 }
    }
  })
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08 + 0.25,
      duration: 0.45,
      ease: "easeOut" as const
    }
  })
};

const dfdWorkflows: Record<number, { title: string; steps: string[] }> = {
  9: {
    title: "Level 0: Context Flow",
    steps: [
      "Mother: Submits vital logs, face scans, and chats with NurtureAI chatbot.",
      "Caregiver & Partner: Receives automated SMS alerts & trend warnings.",
      "Medical Experts: Evaluates logs, checks reports & hosts telehealth consults.",
      "System Administrator: Validates provider licenses & monitors system logs."
    ]
  },
  10: {
    title: "Level 1: Process Flow",
    steps: [
      "1. User Auth: Safe registration with active face-verification.",
      "2. Health Tracking: Real-time tracking of symptoms, mood logs & sleep.",
      "3. Python AI: Generates sentiment scores based on face and journal inputs.",
      "4. Appointment Mgmt: Matches patients with clinical care and specialists."
    ]
  },
  11: {
    title: "Level 2: Execution Thread",
    steps: [
      "Frontend App: Renders Next.js views & takes daily sentiment logs.",
      "Node.js Backend: Dispatches clinical payloads securely via Prisma.",
      "Python AI Microservice: Analyzes raw facial frames using DeepFace models.",
      "PostgreSQL Store: Logs physical metrics & risk scores safely.",
      "Interactive Recharts: Displays visual postpartum wellness scores."
    ]
  }
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isClassicTheme = false;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSlideSelect, setShowSlideSelect] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplaySpeed, setAutoplaySpeed] = useState(8000); // 8 seconds autoplay

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<any>(null);

  const paginate = useCallback((newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < slides.length) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    } else if (nextIndex === slides.length && isPlaying) {
      // Loop presentation on autoplay complete
      setCurrentIndex(0);
    }
  }, [currentIndex, isPlaying]);

  // Autoplay handler
  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        paginate(1);
      }, autoplaySpeed);
    } else {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    }
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPlaying, paginate, autoplaySpeed]);

  // Handle Fullscreen state change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(
        document.fullscreenElement || 
        (document as any).webkitFullscreenElement || 
        (document as any).mozFullscreenElement || 
        (document as any).msFullscreenElement
      ));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    const el = document.documentElement;
    if (!el) return;
    
    const isCurrentlyFullscreen = !!(
      document.fullscreenElement || 
      (document as any).webkitFullscreenElement || 
      (document as any).mozFullscreenElement || 
      (document as any).msFullscreenElement
    );

    if (!isCurrentlyFullscreen) {
      const p = el.requestFullscreen ? el.requestFullscreen() : 
                (el as any).webkitRequestFullscreen ? (el as any).webkitRequestFullscreen() :
                (el as any).mozRequestFullScreen ? (el as any).mozRequestFullScreen() :
                (el as any).msRequestFullscreen ? (el as any).msRequestFullscreen() : null;
      if (p && (p as any).catch) {
        (p as any).catch((err: any) => console.error("Fullscreen request failed:", err));
      }
    } else {
      const p = document.exitFullscreen ? document.exitFullscreen() :
                (document as any).webkitExitFullscreen ? (document as any).webkitExitFullscreen() :
                (document as any).mozCancelFullScreen ? (document as any).mozCancelFullScreen() :
                (document as any).msExitFullscreen ? (document as any).msExitFullscreen() : null;
      if (p && (p as any).catch) {
        (p as any).catch((err: any) => console.error("Fullscreen exit failed:", err));
      }
    }
  };

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      switch (e.key.toLowerCase()) {
        case 'arrowright':
        case ' ':
          e.preventDefault();
          paginate(1);
          break;
        case 'arrowleft':
          e.preventDefault();
          paginate(-1);
          break;
        case 'f':
          e.preventDefault();
          toggleFullScreen();
          break;

        case 'p':
          e.preventDefault();
          setIsPlaying(prev => !prev);
          break;
        case 'escape':
          setShowSlideSelect(false);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const slide = slides[currentIndex];

  // Thank You Particle Animation details
  const floatingParticles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 8,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 4,
    x: Math.random() * 100, // percentage width
    y: Math.random() * 30 + 70, // start low
    type: i % 3 === 0 ? 'sparkle' : i % 3 === 1 ? 'heart' : 'star'
  }));

  const renderContent = (slide: SlideData) => {


    const themeHeadingClass = isClassicTheme
      ? "font-cinzel tracking-wider text-gold-400 text-3xl lg:text-5xl font-semibold flex items-center gap-4"
      : "font-sans font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center gap-4 drop-shadow-sm";

    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-16 gap-12 w-full max-w-7xl mx-auto">
            {/* LHS: Content */}
            <div className="flex-1 flex flex-col items-start text-left space-y-6 z-10">
              {isClassicTheme && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-24 h-[2px] bg-gradient-to-r from-gold-500 to-transparent"
                />
              )}
              
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
                  className={isClassicTheme 
                    ? "font-cinzel tracking-widest classic-gold-text text-6xl lg:text-8xl drop-shadow-md font-black" 
                    : "font-sans font-black text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 drop-shadow-sm"}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className={isClassicTheme 
                    ? "font-serif-classic text-xl lg:text-3xl text-gold-200/90 italic font-light tracking-wide leading-relaxed" 
                    : "font-sans font-normal text-xl lg:text-3xl text-slate-600 leading-relaxed"}
                >
                  {slide.subtitle}
                </motion.p>
              </div>

              {slide.description && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className={`mt-4 p-6 rounded-2xl w-full max-w-md shadow-2xl ${isClassicTheme ? 'classic-panel border-gold-500/30 bg-slate-950/80' : 'glass-panel'}`}
                >
                  <div className="space-y-3">
                    {slide.description.split('\n').map((line, i) => {
                      const [label, ...val] = line.split(':');
                      const value = val.join(':');
                      return (
                        <div key={i} className="flex justify-between items-center text-sm lg:text-base border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                          <span className={isClassicTheme ? 'font-cinzel tracking-widest text-gold-400 font-bold uppercase text-xs' : 'font-sans text-indigo-600 font-bold uppercase text-xs'}>{label}</span>
                          <span className={isClassicTheme ? 'font-serif-classic text-gold-50 font-medium' : 'font-sans text-slate-700 font-semibold'}>{value.trim()}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* RHS: Image Showcase */}
            {slide.imageUrl && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="flex-1 w-full hidden lg:flex items-center justify-center relative"
              >
                {/* Glow behind image */}
                <div className={`absolute inset-0 blur-3xl rounded-full opacity-20 ${isClassicTheme ? 'bg-gold-500/40' : 'bg-purple-500/40'}`} />
                <img 
                  src={slide.imageUrl} 
                  alt="Presentation Hero Mockup" 
                  className={`relative z-10 w-full h-auto object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-700 ${isClassicTheme ? 'border-2 border-gold-500/30' : 'border border-white/10'}`}
                />
              </motion.div>
            )}
          </div>
        );

      case 'section':
        return (
          <div className={`flex flex-col items-start justify-center h-full pl-10 lg:pl-24 py-10 ${isClassicTheme ? 'border-l-[3px] border-gold-500/40 bg-gradient-to-r from-gold-500/5 to-transparent' : 'border-l-8 border-purple-500'}`}>
            {isClassicTheme && <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4">MAMASAFE SECTOR</span>}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className={isClassicTheme ? "font-cinzel tracking-wider text-5xl lg:text-7xl text-gold-300 font-semibold mb-6" : "font-sans font-black text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-800 mb-6"}
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={isClassicTheme ? "font-serif-classic text-2xl text-gold-100/80 italic font-light tracking-wide leading-relaxed" : "font-sans text-2xl text-indigo-950/75 font-semibold leading-relaxed"}
              >
                {slide.subtitle}
              </motion.h3>
            )}
          </div>
        );

      case 'content': {
        const isTechStack = slide.id === 6;
        if (isTechStack && slide.content) {
          return (
            <div className="flex flex-col h-full pt-1 lg:pt-2 px-2 lg:px-4 pb-2 w-full max-w-[98%] mx-auto">
              {/* Header - LHS Most Top of the Container */}
              <div className="flex items-center space-x-4 mb-3 lg:mb-4 self-start justify-start">
                {slide.icon && iconMap[slide.icon] && (
                  <div className="glass-panel shadow-md bg-white p-2.5 rounded-2xl">
                    {React.cloneElement(iconMap[slide.icon] as any, { 
                      size: 24,
                      className: "text-indigo-600" 
                    })}
                  </div>
                )}
                <h2 className={themeHeadingClass}>
                  {slide.title}
                </h2>
              </div>

              {/* Main Split Layout */}
              <div className="flex-1 flex items-center justify-center w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
                  
                  {/* Left Column (LHS): 3 cards in Row 1, 2 cards in Row 2 */}
                  <div className="lg:col-span-8 flex flex-col gap-6 w-full">
                    
                    {/* Row 1: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {slide.content.slice(0, 3).map((item, i) => {
                        const hasColon = item.includes(':');
                        const [title, ...descArr] = hasColon ? item.split(':') : [item, ''];
                        const desc = descArr.join(':').trim();
                        const tagColor = ["from-indigo-500 to-purple-600", "from-rose-500 to-pink-600", "from-emerald-500 to-teal-600"][i];
                        
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", damping: 15, stiffness: 100, delay: i * 0.08 }}
                            whileHover={{ y: -6, scale: 1.03, boxShadow: "0 20px 40px rgba(99,102,241,0.08)" }}
                            className="glass-panel bg-white/70 p-7 rounded-[2rem] min-h-[250px] border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all flex flex-col justify-center relative group"
                          >
                            <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-[2rem] bg-gradient-to-r ${tagColor}`} />
                            <div className="flex items-center space-x-2.5 mb-3">
                              <span className="flex items-center justify-center bg-indigo-50 text-indigo-600 font-black w-8 h-8 text-xs rounded-xl group-hover:scale-110 transition-transform">
                                {i + 1}
                              </span>
                              <h3 className="font-sans font-black text-indigo-950 tracking-tight text-lg lg:text-xl">
                                {title.trim()}
                              </h3>
                            </div>
                            <p className="font-sans text-slate-600 leading-relaxed font-semibold text-sm lg:text-base">
                              {desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Row 2: 2 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
                      {slide.content.slice(3, 5).map((item, i) => {
                        const idx = i + 3;
                        const hasColon = item.includes(':');
                        const [title, ...descArr] = hasColon ? item.split(':') : [item, ''];
                        const desc = descArr.join(':').trim();
                        const tagColor = ["from-amber-500 to-orange-600", "from-sky-500 to-blue-600"][i];
                        
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", damping: 15, stiffness: 100, delay: idx * 0.08 }}
                            whileHover={{ y: -6, scale: 1.03, boxShadow: "0 20px 40px rgba(99,102,241,0.08)" }}
                            className="glass-panel bg-white/70 p-7 rounded-[2rem] min-h-[230px] border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all flex flex-col justify-center relative group"
                          >
                            <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-[2rem] bg-gradient-to-r ${tagColor}`} />
                            <div className="flex items-center space-x-2.5 mb-3">
                              <span className="flex items-center justify-center bg-indigo-50 text-indigo-600 font-black w-8 h-8 text-xs rounded-xl group-hover:scale-110 transition-transform">
                                {idx + 1}
                              </span>
                              <h3 className="font-sans font-black text-indigo-950 tracking-tight text-lg lg:text-xl">
                                {title.trim()}
                              </h3>
                            </div>
                            <p className="font-sans text-slate-600 leading-relaxed font-semibold text-sm lg:text-base">
                              {desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Right Column (RHS): High-Tech Interactive Graphic on Remaining Space */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center relative h-full min-h-[350px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, type: "spring" }}
                      className="relative w-80 h-80 rounded-full border border-indigo-100/30 bg-indigo-50/5 flex items-center justify-center shadow-inner"
                    >
                      {/* Floating glowing background rings */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-indigo-200/40 animate-spin-slow" />
                      <div className="absolute inset-6 rounded-full border border-dashed border-pink-200/30 animate-spin-reverse" />
                      
                      {/* Center Core node */}
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center shadow-xl z-10 animate-float-slow"
                      >
                        <Cpu className="text-white mb-1" size={24} />
                        <span className="font-sans font-black text-[10px] uppercase text-white tracking-widest text-center">MamaSafe</span>
                        <span className="font-sans font-black text-[8px] uppercase text-pink-200 tracking-widest">Ecosystem</span>
                      </motion.div>

                      {/* Tech Stack Floating Node Badges */}
                      {[
                        { title: "Next.js", icon: "⚛️", top: "10%", left: "50%", color: "border-slate-800" },
                        { title: "Node.js", icon: "🟢", top: "45%", left: "85%", color: "border-emerald-500" },
                        { title: "Python AI", icon: "🐍", top: "80%", left: "65%", color: "border-blue-500" },
                        { title: "Postgres", icon: "🐘", top: "80%", left: "15%", color: "border-sky-500" },
                        { title: "Docker", icon: "🐳", top: "40%", left: "5%", color: "border-cyan-500" }
                      ].map((tech, idx) => (
                        <motion.div
                          key={idx}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ repeat: Infinity, duration: 3 + idx, ease: "easeInOut" }}
                          className={`absolute p-2.5 rounded-xl bg-white border ${tech.color} shadow-lg flex items-center gap-1.5 z-20 hover:scale-110 transition-transform cursor-default`}
                          style={{ top: tech.top, left: tech.left, transform: "translate(-50%, -50%)" }}
                        >
                          <span className="text-sm">{tech.icon}</span>
                          <span className="font-sans font-black text-[10px] text-indigo-950 uppercase tracking-wide">{tech.title}</span>
                        </motion.div>
                      ))}

                      {/* Connection lines using absolutely positioned vectors */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 288 288">
                        <line x1="144" y1="144" x2="144" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="144" y1="144" x2="244" y2="135" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="144" y1="144" x2="187" y2="230" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="144" y1="144" x2="43" y2="230" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="144" y1="144" x2="43" y2="120" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </motion.div>
                  </div>

                </div>
              </div>

            </div>
          );
        }

        const isGrid = slide.content && slide.content.length >= 3;
        const isLarge = slide.content && (slide.content.length === 3 || slide.content.length === 4);
        const isThree = slide.content && slide.content.length === 3;
        
        let gridCols = "grid-cols-1 md:grid-cols-2";
        if (slide.content) {
          if (slide.content.length === 3) gridCols = "grid-cols-1 md:grid-cols-3";
          else if (slide.content.length === 4) gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[95%] lg:max-w-[90%] mx-auto";
          else if (slide.content.length >= 5) gridCols = "grid-cols-1 sm:grid-cols-3 lg:grid-cols-5";
        }
        
        return (
          <div className="flex flex-col h-full pt-1 lg:pt-2 px-2 lg:px-4 pb-2 w-full max-w-[98%] mx-auto">
            {/* Header - LHS Most Top of the Container */}
            <div className="flex items-center space-x-4 mb-3 lg:mb-4 self-start justify-start">
              {slide.icon && iconMap[slide.icon] && (
                <div className={`p-2.5 rounded-2xl ${isClassicTheme ? 'border border-gold-500/20 bg-gold-950/20 shadow-[0_0_15px_rgba(197,160,89,0.1)]' : 'glass-panel shadow-md bg-white'}`}>
                  {React.cloneElement(iconMap[slide.icon] as any, { 
                    size: 24,
                    className: isClassicTheme ? "text-gold-400" : "text-indigo-600" 
                  })}
                </div>
              )}
              <h2 className={themeHeadingClass}>
                {slide.title}
              </h2>
            </div>
            
            {isGrid && slide.content ? (
              <div className="flex-1 flex items-center justify-center w-full">
                <div className={`grid ${gridCols} ${isThree ? 'gap-6 lg:gap-8 w-full' : 'gap-5 lg:gap-6 w-full'} p-1`}>
                  {slide.content.map((item, i) => {
                    const hasColon = item.includes(':');
                    const [title, ...descArr] = hasColon ? item.split(':') : [item, ''];
                    const desc = descArr.join(':').trim();
                    
                    // Vibrant color arrays for gorgeous tags
                    const gradientTagColors = [
                      "from-indigo-500 via-purple-500 to-indigo-600",
                      "from-rose-500 via-pink-500 to-rose-600",
                      "from-emerald-500 via-teal-500 to-emerald-600",
                      "from-amber-500 via-orange-500 to-amber-600",
                      "from-sky-500 via-blue-500 to-sky-600"
                    ];
                    const tagColor = gradientTagColors[i % gradientTagColors.length];
                    
                    return (
                      <motion.div
                        key={i}
                        custom={i}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", damping: 15, stiffness: 100, delay: i * 0.08 }}
                        whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px rgba(99,102,241,0.08)" }}
                        className={`glass-panel bg-white/70 shadow-[0_8px_25px_rgba(15,23,42,0.03)] border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all flex flex-col justify-center relative group ${
                          isThree 
                            ? "p-10 lg:p-12 rounded-[2.5rem] min-h-[440px] lg:min-h-[460px]" 
                            : isLarge 
                              ? "p-8 lg:p-10 rounded-[2.2rem] min-h-[320px] lg:min-h-[340px]" 
                              : "p-4 lg:p-5 rounded-3xl"
                        }`}
                      >
                        {/* Top color tag */}
                        <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-3xl bg-gradient-to-r ${tagColor} opacity-85 group-hover:opacity-100 transition-opacity`} />
                        
                        <div className={`flex items-center space-x-2.5 ${isLarge ? 'mb-4 mt-2' : 'mb-2 mt-1'}`}>
                          <span className={`flex items-center justify-center bg-indigo-50 text-indigo-600 font-black group-hover:scale-110 transition-transform ${isThree ? 'w-10 h-10 text-base rounded-2xl' : isLarge ? 'w-9 h-9 text-sm rounded-xl' : 'w-7 h-7 text-xs rounded-xl'}`}>
                            {i + 1}
                          </span>
                          {title && (
                            <h3 className={`font-sans font-black text-indigo-950 tracking-tight group-hover:text-indigo-600 transition-colors ${isThree ? 'text-2xl lg:text-3xl' : isLarge ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}>
                              {title.trim()}
                            </h3>
                          )}
                        </div>
                        {desc && (
                          <div className={`font-sans text-slate-600 leading-relaxed font-semibold mt-1 ${isThree ? 'space-y-3 text-xl lg:text-2xl' : isLarge ? 'space-y-2 text-lg lg:text-xl' : 'space-y-1 text-base lg:text-lg'}`}>
                            {desc.split('\n').map((line, lineIdx) => {
                              const isBullet = line.startsWith('•');
                              return (
                                <p 
                                  key={lineIdx} 
                                  className={isBullet ? `${isThree ? 'pl-5 text-lg lg:text-xl' : isLarge ? 'pl-4 text-base lg:text-lg' : 'pl-3 text-sm lg:text-base'} flex items-start gap-1.5 text-indigo-900/90 font-bold` : ""}
                                >
                                  {isBullet && <span className="text-pink-500 flex-shrink-0 mt-1">•</span>}
                                  {isBullet ? line.substring(1).trim() : line}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-2">
                <ul className="space-y-4 mt-2">
                  {slide.content?.map((item, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className="text-lg lg:text-xl text-slate-800 flex items-start group"
                    >
                      <span className={`w-3 h-3 mt-3 mr-6 rounded-full flex-shrink-0 transition-transform group-hover:scale-125 ${isClassicTheme ? 'bg-gold-500 shadow-[0_0_8px_#c5a059]' : 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.4)]'}`} />
                      <span className={`leading-relaxed ${isClassicTheme ? 'font-serif-classic text-gold-100/90' : 'font-sans text-slate-700 font-medium'}`}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      }

      case 'split':
        return (
          <div className="flex flex-col h-full pt-4 lg:pt-10 px-4 lg:px-12">
            <h2 className={themeHeadingClass}>
              {slide.title}
            </h2>
            <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-12 items-center overflow-y-auto lg:overflow-hidden mt-6">
              <div className="flex-1 w-full">
                <ul className="space-y-6">
                  {slide.content?.map((item, i) => (
                    <motion.li 
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className={`text-lg lg:text-2xl flex items-start p-6 rounded-2xl transition-all hover:translate-x-1 ${isClassicTheme ? 'classic-panel text-gold-100' : 'glass-panel text-slate-800'}`}
                    >
                      <span className={`leading-relaxed ${isClassicTheme ? 'font-serif-classic' : 'font-sans font-medium'}`}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="w-full lg:w-1/3 flex justify-center items-center py-6 lg:py-0"
              >
                {slide.icon && iconMap[slide.icon] ? (
                  <div className={`p-16 rounded-full transition-all duration-500 ${isClassicTheme ? 'classic-panel border-gold-500/30 animate-float-slow shadow-[0_0_50px_rgba(197,160,89,0.15)]' : 'glass-panel shadow-[0_20px_50px_rgba(124,58,237,0.1)]'}`}>
                    {React.cloneElement(iconMap[slide.icon] as any, { 
                      size: 110,
                      className: isClassicTheme ? "text-gold-400" : "text-indigo-600"
                    })}
                  </div>
                ) : (
                  <div className={`w-64 h-64 rounded-full ${isClassicTheme ? 'classic-panel animate-float-slow' : 'bg-gradient-to-br from-indigo-500/10 to-pink-500/10 glass-panel shadow-lg'}`} />
                )}
              </motion.div>
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`p-10 lg:p-16 rounded-3xl relative max-w-4xl shadow-2xl ${isClassicTheme ? 'classic-panel' : 'glass-panel'}`}
            >
              <div className={`absolute -top-6 -left-6 text-7xl lg:text-9xl font-serif leading-none select-none ${isClassicTheme ? 'text-gold-500/20' : 'text-pink-300/40'}`}>“</div>
              <p className={`text-2xl lg:text-4xl font-light italic leading-relaxed mb-10 relative z-10 ${isClassicTheme ? 'font-serif-classic text-gold-50:95' : 'text-slate-700'}`}>
                {slide.quote}
              </p>
              <div className={`absolute -bottom-16 -right-6 text-7xl lg:text-9xl font-serif leading-none select-none ${isClassicTheme ? 'text-gold-500/20' : 'text-purple-300/40'}`}>”</div>
              {slide.author && (
                <p className={`text-xl lg:text-2xl font-semibold tracking-wider ${isClassicTheme ? 'font-cinzel text-gold-400' : 'text-indigo-600'}`}>
                  — {slide.author}
                </p>
              )}
            </motion.div>
          </div>
        );

      case 'stats':
        return (
          <div className="flex flex-col h-full pt-4 lg:pt-10 px-4 lg:px-12">
            <h2 className={`${themeHeadingClass} justify-center mb-10 lg:mb-16`}>
              {slide.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 flex-1 content-center px-4 max-w-5xl mx-auto w-full">
              {slide.stats?.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className={`p-8 lg:p-10 rounded-3xl flex flex-col items-center justify-center text-center group hover:scale-[1.03] transition-all duration-300 shadow-xl ${isClassicTheme ? 'classic-panel border-gold-500/15 hover:border-gold-500/40 hover:bg-gold-950/10' : 'glass-panel hover:bg-white/50 bg-white/30'}`}
                >
                  <span className={`text-5xl lg:text-7xl font-black mb-4 tracking-tight transition-transform group-hover:scale-105 ${isClassicTheme ? 'font-cinzel classic-gold-text' : 'font-sans text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'}`}>
                    {stat.value}
                  </span>
                  <span className={`text-sm lg:text-lg tracking-widest uppercase font-semibold ${isClassicTheme ? 'font-sans text-gold-300/80' : 'text-slate-600'}`}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'image':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.title || 'Screenshot'} 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        );

      case 'code':
        return (
          <div className="flex flex-col h-full pt-2 lg:pt-4 px-2 lg:px-4 pb-2 w-full max-w-[98%] mx-auto">
            {/* Header - LHS Most Top of the Container */}
            <div className="flex items-center space-x-4 mb-3 lg:mb-4 self-start justify-start">
              <h2 className={themeHeadingClass}>
                {slide.title}
              </h2>
            </div>
            {slide.language === 'mermaid' && slide.code ? (() => {
              const workflow = dfdWorkflows[slide.id];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 h-auto min-h-[68vh] w-full items-center">
                  {/* Left Column: Mermaid Diagram */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-7 flex items-center justify-center h-[52vh] max-h-[52vh] rounded-2xl overflow-hidden p-2"
                  >
                    <Mermaid chart={slide.code} />
                  </motion.div>

                  {/* Right Column: Short Working Flow with *2 font sizes and enhanced motions */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-5 flex flex-col justify-center h-full p-2"
                  >
                    {workflow && (
                      <div className="glass-panel p-8 rounded-[2.5rem] border border-indigo-100 bg-white/80 shadow-[0_12px_35px_rgba(15,23,42,0.04)] flex flex-col justify-between h-auto min-h-[52vh] space-y-6">
                        <h3 className="font-sans font-black text-2xl lg:text-3xl text-indigo-950 flex items-center gap-3 pb-3.5 border-b border-indigo-50">
                          <Workflow size={28} className="text-pink-500 animate-pulse" /> {workflow.title}
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1">
                          
                          {/* Steps: LHS (7 columns) - Doubled font size (*2) */}
                          <div className="lg:col-span-7 space-y-4 lg:space-y-5">
                            {workflow.steps.map((step, idx) => {
                              const [stepTitle, ...stepDescArr] = step.split(':');
                              const stepDesc = stepDescArr.join(':').trim();
                              return (
                                <motion.div 
                                  key={idx} 
                                  whileHover={{ x: 8, scale: 1.02 }}
                                  className="flex gap-4 items-start group p-2.5 rounded-2xl hover:bg-indigo-50/40 transition-all border border-transparent hover:border-indigo-100/30"
                                >
                                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-pink-50 text-pink-600 font-black text-base mt-0.5 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                    {idx + 1}
                                  </span>
                                  <p className="font-sans text-base lg:text-lg text-slate-700 leading-relaxed font-semibold">
                                    <strong className="text-indigo-950 font-black text-lg lg:text-xl">{stepTitle.trim()}: </strong>
                                    {stepDesc && <span className="text-slate-600 font-semibold">{stepDesc}</span>}
                                  </p>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Decorative Vector: RHS (5 columns) with gorgeous graphics and motion */}
                          <div className="lg:col-span-5 flex flex-col items-center justify-center h-full relative p-2">
                            {slide.id === 9 && (
                              <div className="relative w-full h-full min-h-[220px] flex items-center justify-center overflow-visible">
                                {/* Pulsing glow background */}
                                <div className="absolute w-36 h-36 bg-pink-500/10 rounded-full blur-xl animate-pulse" />
                                
                                {/* Inner dashed rotating ring */}
                                <motion.div 
                                  animate={{ rotate: 360 }}
                                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                  className="absolute w-36 h-36 rounded-full border-2 border-dashed border-indigo-300/40"
                                />
                                
                                {/* Outer dashed rotating ring in reverse */}
                                <motion.div 
                                  animate={{ rotate: -360 }}
                                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                  className="absolute w-48 h-48 rounded-full border border-dashed border-pink-300/30"
                                />

                                {/* Central Ecosystem Node */}
                                <motion.div 
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30 z-10 border border-white/20"
                                >
                                  <HeartHandshake className="text-white animate-pulse" size={32} />
                                </motion.div>

                                {/* Orbiting Entities */}
                                {[
                                  { name: "Mother", icon: "👩‍🍼", angle: 0, color: "border-pink-400" },
                                  { name: "Partner", icon: "👨‍👩‍👦", angle: 90, color: "border-blue-400" },
                                  { name: "Expert", icon: "🩺", angle: 180, color: "border-teal-400" },
                                  { name: "Admin", icon: "🛡️", angle: 270, color: "border-purple-400" }
                                ].map((entity, idx) => {
                                  const radius = 80; // radius of orbit
                                  const x = Math.cos((entity.angle * Math.PI) / 180) * radius;
                                  const y = Math.sin((entity.angle * Math.PI) / 180) * radius;
                                  return (
                                    <motion.div
                                      key={idx}
                                      animate={{ 
                                        x: [x, Math.cos(((entity.angle + 360) * Math.PI) / 180) * radius],
                                        y: [y, Math.sin(((entity.angle + 360) * Math.PI) / 180) * radius],
                                      }}
                                      transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                                      className={`absolute p-2 rounded-xl bg-white/95 border ${entity.color} shadow-lg flex flex-col items-center justify-center z-20 cursor-default hover:scale-110 transition-transform`}
                                      style={{ transform: "translate(-50%, -50%)" }}
                                    >
                                      <span className="text-lg">{entity.icon}</span>
                                      <span className="font-sans font-black text-[9px] text-indigo-950 uppercase tracking-wide">{entity.name}</span>
                                    </motion.div>
                                  );
                                })}
                                
                                <span className="absolute bottom-[-10px] font-sans font-black text-[10px] uppercase tracking-wider text-indigo-950/80 text-center">Context Flow Map</span>
                              </div>
                            )}

                            {slide.id === 10 && (
                              <div className="relative w-full h-full min-h-[220px] flex items-center justify-center overflow-visible">
                                {/* Ambient background glow */}
                                <div className="absolute w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />

                                {/* Center Node */}
                                <motion.div 
                                  animate={{ y: [0, -6, 0] }}
                                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/20 z-10 border border-white/20"
                                >
                                  <Workflow className="text-white animate-spin-slow" size={32} />
                                </motion.div>

                                {/* Flow paths with glowing icons */}
                                {[
                                  { name: "Auth", icon: "🔑", top: "15%", left: "15%", delay: 0 },
                                  { name: "Health", icon: "📈", top: "15%", left: "85%", delay: 0.5 },
                                  { name: "AI Sync", icon: "🧠", top: "85%", left: "15%", delay: 1.0 },
                                  { name: "Consult", icon: "🤝", top: "85%", left: "85%", delay: 1.5 }
                                ].map((proc, idx) => (
                                  <motion.div
                                    key={idx}
                                    animate={{ scale: [1, 1.06, 1] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: proc.delay, ease: "easeInOut" }}
                                    className="absolute p-2.5 rounded-2xl bg-white border border-purple-100 shadow-md flex items-center gap-1.5 z-20 hover:scale-110 transition-all duration-300"
                                    style={{ top: proc.top, left: proc.left, transform: "translate(-50%, -50%)" }}
                                  >
                                    <span className="text-base">{proc.icon}</span>
                                    <span className="font-sans font-black text-[9px] text-indigo-950 uppercase tracking-wider">{proc.name}</span>
                                  </motion.div>
                                ))}

                                {/* Connecting SVG with animating dashes */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 200 200">
                                  {/* X-shaped connections through center (100, 100) */}
                                  <line x1="30" y1="30" x2="100" y2="100" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                  <line x1="170" y1="30" x2="100" y2="100" stroke="#ec4899" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                  <line x1="30" y1="170" x2="100" y2="100" stroke="#6366f1" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                  <line x1="170" y1="170" x2="100" y2="100" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                </svg>

                                <span className="absolute bottom-[-10px] font-sans font-black text-[10px] uppercase tracking-wider text-indigo-950/80 text-center">Process Breakdown Map</span>
                              </div>
                            )}

                            {slide.id === 11 && (
                              <div className="relative w-full h-full min-h-[220px] flex items-center justify-center overflow-visible">
                                {/* Ambient background glow */}
                                <div className="absolute w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />

                                {/* Center Node (AI Brain Core) */}
                                <motion.div 
                                  animate={{ scale: [1, 1.08, 1] }}
                                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-pink-500/20 z-10 border border-white/20"
                                >
                                  <Brain className="text-white animate-pulse" size={32} />
                                </motion.div>

                                {/* Tech execution nodes */}
                                {[
                                  { name: "Frontend", icon: "⚛️", top: "10%", left: "50%", color: "border-indigo-400" },
                                  { name: "Backend", icon: "🟢", top: "50%", left: "90%", color: "border-emerald-400" },
                                  { name: "Python AI", icon: "🐍", top: "90%", left: "70%", color: "border-blue-400" },
                                  { name: "PostgreSQL", icon: "🐘", top: "90%", left: "30%", color: "border-cyan-400" },
                                  { name: "Recharts", icon: "📊", top: "50%", left: "10%", color: "border-pink-400" }
                                ].map((tech, idx) => (
                                  <motion.div
                                    key={idx}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 + idx * 0.5, ease: "easeInOut" }}
                                    className={`absolute p-2 rounded-2xl bg-white border ${tech.color} shadow-lg flex items-center gap-1.5 z-20 hover:scale-110 transition-all duration-300`}
                                    style={{ top: tech.top, left: tech.left, transform: "translate(-50%, -50%)" }}
                                  >
                                    <span className="text-base">{tech.icon}</span>
                                    <span className="font-sans font-black text-[9px] text-indigo-950 uppercase tracking-wider">{tech.name}</span>
                                  </motion.div>
                                ))}

                                {/* Star-like network connection lines with animating dashes */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 200 200">
                                  <line x1="100" y1="100" x2="100" y2="20" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                  <line x1="100" y1="100" x2="180" y2="100" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                  <line x1="100" y1="100" x2="140" y2="180" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                  <line x1="100" y1="100" x2="60" y2="180" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                  <line x1="100" y1="100" x2="20" y2="100" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                </svg>

                                <span className="absolute bottom-[-10px] font-sans font-black text-[10px] uppercase tracking-wider text-indigo-950/80 text-center">Execution Thread Map</span>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })() : (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex-1 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden p-6 lg:p-8 shadow-2xl ${isClassicTheme ? 'classic-panel' : 'glass-panel bg-white/80 border border-slate-200/50'}`}
              >
                <pre className={`font-mono text-base lg:text-xl whitespace-pre-wrap leading-relaxed overflow-auto h-full p-4 rounded-xl border ${isClassicTheme ? 'text-gold-200 border-gold-500/20 bg-slate-950/60' : 'text-slate-800 border-slate-200 bg-slate-50'}`}>
                  <code>{slide.code}</code>
                </pre>
              </motion.div>
            )}
          </div>
        );

      case 'table':
        return (
          <div className="flex flex-col h-full pt-2 lg:pt-4 px-4 lg:px-12 w-full max-w-7xl mx-auto pb-4 overflow-hidden">
            <div className="flex items-center space-x-4 mb-2 lg:mb-4">
              <div className={`p-3 rounded-2xl ${isClassicTheme ? 'border border-gold-500/20 bg-gold-950/20 shadow-[0_0_15px_rgba(197,160,89,0.1)]' : 'glass-panel shadow-md bg-white'}`}>
                {React.cloneElement((iconMap[slide.icon || 'Database'] || iconMap['Database']) as any, { 
                  size: 26,
                  className: isClassicTheme ? "text-gold-400" : "text-indigo-600" 
                })}
              </div>
              <h2 className={themeHeadingClass}>
                {slide.title}
              </h2>
            </div>
            <div className="flex-1 flex flex-col justify-center w-full my-auto">
              <div className="rounded-[2.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.03)] glass-panel border border-slate-200/50 p-4 lg:p-6 bg-white/80 backdrop-blur-md w-full">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-indigo-200 text-base lg:text-lg font-black text-indigo-600">
                      {slide.table?.headers.map((header, i) => (
                        <th key={i} className="py-4 lg:py-5 px-6 border-r border-slate-100 last:border-r-0 font-sans tracking-widest uppercase font-black">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-sm lg:text-base text-slate-700 font-bold">
                    {slide.table?.rows.map((row, i) => (
                      <tr key={i} className="transition-all hover:bg-slate-50 border-b border-slate-100 last:border-b-0">
                        {row.map((cell, j) => (
                          <td key={j} className={`py-3.5 lg:py-4 px-6 border-r border-slate-100 last:border-r-0 font-sans ${j === 0 ? 'text-indigo-600 font-black text-base lg:text-lg' : 'font-semibold'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {slide.description && (
              <p className="mt-3 text-xs lg:text-sm text-center font-semibold italic py-1 px-4 rounded-xl border w-fit mx-auto shadow-sm text-indigo-600 border-indigo-100 bg-indigo-50/50">
                {slide.description}
              </p>
            )}
          </div>
        );

      case 'thankyou':
        return (
          <div className="relative flex flex-col items-center justify-center h-full text-center px-4 overflow-hidden">
            {/* Animated Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <AnimatePresence>
                {floatingParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    initial={{ opacity: 0, y: "100%", x: `${particle.x}%` }}
                    animate={{ 
                      opacity: [0, 0.7, 0.7, 0],
                      y: "-20%",
                      scale: [1, 1.2, 0.8, 1.1]
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                  >
                    {particle.type === 'heart' && <Heart size={particle.size} className={isClassicTheme ? "text-gold-500/40 fill-gold-500/10" : "text-pink-500/40 fill-pink-500/10"} />}
                    {particle.type === 'sparkle' && <Sparkles size={particle.size} className={isClassicTheme ? "text-gold-300/40" : "text-purple-300/40"} />}
                    {particle.type === 'star' && <Star size={particle.size} className={isClassicTheme ? "text-gold-400/30 fill-gold-400/5" : "text-blue-300/30"} />}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="relative z-10 max-w-4xl space-y-8">
              {isClassicTheme && (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 border border-dashed border-gold-500/30 rounded-full mx-auto flex items-center justify-center mb-2"
                >
                  <Heart size={32} className="text-gold-500 animate-pulse" />
                </motion.div>
              )}

              <div className="space-y-4">
                <motion.h1
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", stiffness: 100 }}
                  className={`${isClassicTheme ? 'font-cinzel tracking-[0.2em] classic-gold-text text-6xl lg:text-8xl font-black' : 'font-sans font-black text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'} drop-shadow-sm animate-float-slow`}
                >
                  {slide.title}
                </motion.h1>
                <div className={`h-[1px] w-48 mx-auto ${isClassicTheme ? 'bg-gradient-to-r from-transparent via-gold-500 to-transparent' : 'bg-gradient-to-r from-pink-400 to-indigo-500'}`} />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`text-xl lg:text-3xl max-w-2xl mx-auto leading-relaxed ${isClassicTheme ? 'font-serif-classic text-gold-100/90 italic' : 'font-sans text-slate-600 font-medium'}`}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`p-6 lg:p-8 rounded-2xl max-w-xl mx-auto border shadow-2xl transition-all ${isClassicTheme ? 'classic-panel border-gold-500/20' : 'glass-panel border-slate-200/50'}`}
              >
                <h4 className={`text-xs uppercase tracking-[0.25em] font-bold mb-4 ${isClassicTheme ? 'text-gold-500' : 'text-indigo-600'}`}>Academic Submission Details</h4>
                <div className={`space-y-2 text-sm lg:text-base ${isClassicTheme ? 'font-serif-classic text-gold-200/80' : 'font-sans text-slate-700'}`}>
                  <p className="font-semibold">{slide.description}</p>
                  <p>Department of Computer Applications</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400/80 mt-4">College of Engineering Vadakara</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-6 pt-4"
              >
                <button
                  onClick={() => setCurrentIndex(0)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer ${isClassicTheme ? 'bg-gold-500 text-[#05070c] hover:bg-gold-400 shadow-gold-500/10' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-purple-500/25'}`}
                >
                  <RotateCw size={16} /> Replay Deck
                </button>
              </motion.div>
            </div>
          </div>
        );
    }
  };



  return (
    <div 
      ref={containerRef}
      className={`relative w-screen h-screen overflow-hidden transition-all duration-700 font-sans selection:bg-gold-500/30 ${
        isClassicTheme 
          ? 'bg-[#03060a] text-[#f3edd3] shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]' 
          : 'bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-800'
      }`}
    >
      {/* Background Ornaments / Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isClassicTheme ? (
          <>
            {/* Elegant Amber/Gold glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-gold-900/15 blur-[150px] rounded-full mix-blend-screen animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-gold-800/15 blur-[150px] rounded-full mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute top-[30%] right-[25%] w-[25%] h-[25%] bg-[#624626]/10 blur-[120px] rounded-full mix-blend-screen animate-blob animation-delay-4000" />
            {/* Subtle luxury overlay texture */}
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
          </>
        ) : (
          <>
            {/* Beautiful pastel neumorphic light gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-200/40 blur-[130px] rounded-full animate-blob mix-blend-multiply" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-200/40 blur-[130px] rounded-full animate-blob animation-delay-2000 mix-blend-multiply" />
            <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-purple-200/30 blur-[100px] rounded-full animate-blob animation-delay-4000 mix-blend-multiply" />
          </>
        )}
      </div>

      {/* Slide Framing & Main Layout Container */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between p-4 lg:py-6 lg:px-12 ${isClassicTheme ? 'border-[1px] border-gold-500/10' : ''}`}>
        
        {/* PROGRESS BAR */}
        <div className="absolute top-0 left-0 h-1.5 w-full bg-slate-900/10 z-50">
          <div 
            className={`h-full transition-all duration-300 ease-out ${isClassicTheme ? 'bg-gradient-to-r from-gold-700 via-gold-500 to-gold-300' : 'bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 shadow-[0_2px_10px_rgba(124,58,237,0.3)]'}`} 
            style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} 
          />
        </div>

        {/* TOP BAR: PRESENTATION HEADER */}
        <div className="flex justify-between items-center w-full pb-1 border-b border-slate-200/60 relative z-40 select-none">
          <div className="flex items-center space-x-3">
            <Heart size={16} className={isClassicTheme ? 'text-gold-500' : 'text-pink-500'} />
            <span className={`text-[10px] uppercase tracking-[0.25em] font-bold ${isClassicTheme ? 'font-cinzel text-gold-300' : 'font-sans text-slate-500'}`}>
              MamaSafe — Postpartum Support Ecosystem
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Autoplay status badge */}
            {isPlaying && (
              <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full animate-pulse border ${isClassicTheme ? 'bg-gold-500/10 text-gold-400 border-gold-500/30' : 'bg-pink-100 text-pink-600 border-pink-200'}`}>
                AUTOPLAY: {(autoplaySpeed/1000)}s
              </span>
            )}
          </div>
        </div>

        {/* MAIN PRESENTATION CANVAS */}
        <div className="flex-1 relative overflow-hidden my-6 lg:my-8 flex items-center justify-center">
          <div className="w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full flex flex-col justify-center"
              >
                {renderContent(slide)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM BAR: NAVIGATION & ACTIONS */}
        <div className="flex justify-between items-center w-full pt-4 border-t border-white/5 relative z-40 select-none">
          {/* Quick Shortcuts & Settings */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Previous Button */}
            <button 
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className={`p-2.5 lg:p-3 rounded-full transition-all disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer ${isClassicTheme ? 'border border-gold-500/20 text-gold-300 hover:bg-gold-500/10 hover:border-gold-500' : 'glass-panel text-slate-700 hover:bg-slate-200/60 hover:text-slate-900 border-slate-200/50 shadow-sm bg-white/80'}`}
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next Button */}
            <button 
              onClick={() => paginate(1)}
              disabled={currentIndex === slides.length - 1}
              className={`p-2.5 lg:p-3 rounded-full transition-all disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer ${isClassicTheme ? 'border border-gold-500/20 text-gold-300 hover:bg-gold-500/10 hover:border-gold-500' : 'glass-panel text-slate-700 hover:bg-slate-200/60 hover:text-slate-900 border-slate-200/50 shadow-sm bg-white/80'}`}
              title="Next Slide (Right Arrow / Space)"
            >
              <ChevronRight size={18} />
            </button>

            <div className={`h-6 w-[1px] bg-slate-200/60 mx-1 hidden md:block`} />

            {/* Autoplay Play/Pause */}
            <button 
              onClick={() => setIsPlaying(prev => !prev)}
              className={`p-2.5 lg:p-3 rounded-full transition-all hidden md:flex cursor-pointer ${isClassicTheme ? 'border border-gold-500/20 text-gold-300 hover:bg-gold-500/10' : 'glass-panel text-slate-700 hover:bg-slate-200/60 hover:text-slate-900 border-slate-200/50 shadow-sm bg-white/80'}`}
              title={isPlaying ? "Pause Autoplay (P)" : "Start Autoplay (P)"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* Autoplay Timer Selector */}
            {isPlaying && (
              <select 
                value={autoplaySpeed}
                onChange={(e) => setAutoplaySpeed(Number(e.target.value))}
                className={`text-xs px-2 py-1.5 rounded-lg border bg-white font-medium text-slate-700 hidden lg:block ${isClassicTheme ? 'border-gold-500/30' : 'border-slate-200/60 shadow-sm'}`}
              >
                <option value={5000}>5 Seconds</option>
                <option value={8000}>8 Seconds</option>
                <option value={12000}>12 Seconds</option>
                <option value={18000}>18 Seconds</option>
              </select>
            )}
          </div>

          {/* Slide Selector & Counter */}
          <div className="relative">
            <button
              onClick={() => setShowSlideSelect(prev => !prev)}
              className={`flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs font-mono tracking-widest transition-all cursor-pointer ${
                isClassicTheme 
                  ? 'border border-gold-500/20 text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/5 font-cinzel' 
                  : 'glass-panel text-slate-300 hover:bg-white/10'
              }`}
              title="Click to jump to a specific slide"
            >
              <Menu size={14} />
              SLIDE {currentIndex + 1} / {slides.length}
            </button>

            {/* Slide Selection Popover */}
            <AnimatePresence>
              {showSlideSelect && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowSlideSelect(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className={`absolute bottom-12 right-0 w-80 max-h-96 overflow-y-auto rounded-2xl p-4 z-50 shadow-2xl border ${isClassicTheme ? 'classic-panel border-gold-500/30' : 'glass-panel border-slate-700 bg-slate-950/95'}`}
                  >
                    <h3 className={`text-xs uppercase tracking-[0.2em] font-black pb-3 border-b mb-2 flex items-center justify-between ${isClassicTheme ? 'text-gold-500 border-gold-500/20 font-cinzel' : 'text-purple-400 border-white/5'}`}>
                      Presentation Index
                      <BookOpen size={14} />
                    </h3>
                    <div className="space-y-1.5">
                      {slides.map((s, index) => {
                        let shortTitle = s.title || `Slide ${index + 1}`;
                        if (s.type === 'image') shortTitle = s.title || `UI Reference Screen ${index - 21}`;
                        if (s.type === 'thankyou') shortTitle = "Thank You Slide";
                        
                        return (
                          <button
                            key={s.id}
                            onClick={() => {
                              setCurrentIndex(index);
                              setShowSlideSelect(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between group cursor-pointer ${
                              index === currentIndex 
                                ? (isClassicTheme ? 'bg-gold-500/15 text-gold-300 font-semibold' : 'bg-purple-600/30 text-white font-semibold')
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="truncate max-w-[200px]">{index + 1}. {shortTitle}</span>
                            <span className={`text-[9px] uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded ${
                              index === currentIndex 
                                ? (isClassicTheme ? 'bg-gold-500/20 text-gold-400' : 'bg-purple-500/30 text-purple-300') 
                                : 'bg-white/5 group-hover:bg-white/10'
                            }`}>{s.type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Toggle Screen and Theme Options */}
          <div className="flex items-center space-x-2 lg:space-x-3">


            {/* Fullscreen Toggle */}
            <button 
              onClick={toggleFullScreen}
              className={`p-2.5 lg:p-3 rounded-full transition-all cursor-pointer ${isClassicTheme ? 'border border-gold-500/20 text-gold-300 hover:bg-gold-500/10' : 'glass-panel text-slate-700 hover:text-indigo-600 hover:bg-white/50 bg-white/30 border border-slate-200 shadow-md'}`}
              title="Toggle Fullscreen Mode (F)"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
