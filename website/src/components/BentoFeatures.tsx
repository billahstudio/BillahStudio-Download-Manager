import { Cpu, Film, RefreshCw, Calendar, Gauge, Shield, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface BentoFeaturesProps {
  currentLang: Language;
}

export function BentoFeatures({ currentLang }: BentoFeaturesProps) {
  const t = content[currentLang].features;

  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 16-Segment Parallel Engine (Wide 2-col span on LG) */}
          <div className="lg:col-span-2 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-teal-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-teal-400 font-mono-numbers">01. ENGINE</span>
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                {t.f1_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {t.f1_desc}
              </p>
            </div>

            {/* Micro visual snippet inside Card 1 */}
            <div className="mt-6 p-4 rounded-xl bg-[#060A12] border border-white/5 font-mono-numbers text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                <span>RFC 7233 Range: bytes=0-1048575, 1048576-2097151...</span>
                <span className="text-teal-400">16 Sockets Ready</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5 h-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-full bg-teal-500/80 rounded-xs" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Browser Video Overlay */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-cyan-400 font-mono-numbers">02. EXTENSION</span>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Film className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {t.f2_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.f2_desc}
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-400 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Supports HLS, DASH & MP4 Stream Formats</span>
            </div>
          </div>

          {/* Card 3: Bulletproof Pause & Resume */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-sky-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-400 font-mono-numbers">03. RESILIENCE</span>
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {t.f3_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.f3_desc}
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-400 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Automatic exponential backoff on network drop</span>
            </div>
          </div>

          {/* Card 4: Smart Scheduler & Priority Queue */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-amber-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-400 font-mono-numbers">04. QUEUE</span>
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {t.f4_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.f4_desc}
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-400 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Sleep & Auto-shutdown after tasks complete</span>
            </div>
          </div>

          {/* Card 5: Bandwidth Speed Limiter */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-400 font-mono-numbers">05. CONTROL</span>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Gauge className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {t.f5_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.f5_desc}
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-400 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Zero ping spikes during online gameplay</span>
            </div>
          </div>

          {/* Card 6: 100% Private & Open Source (Spans across bottom if viewed on desktop) */}
          <div className="lg:col-span-3 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-teal-500/30 transition-all">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-teal-400 font-mono-numbers">06. INTEGRITY</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-medium">Local 127.0.0.1 Loopback Only</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                {t.f6_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.f6_desc}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-3 text-xs text-teal-300">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">VirusTotal 0/72 Clean</div>
                  <div className="text-[11px] text-teal-200/80">Independent Security Audit</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
