import { useState, useEffect } from 'react';
import { Download, ShieldCheck, CheckCircle2, Pause, Play, Gauge, HardDrive, ArrowDownRight, Layers } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  currentLang: Language;
  onTriggerDownload: () => void;
}

export function Hero({ currentLang, onTriggerDownload }: HeroProps) {
  const t = content[currentLang].hero;
  const m = content[currentLang].mockup;
  const metrics = content[currentLang].metrics;

  // Interactive state inside the mockup
  const [isPlaying, setIsPlaying] = useState(true);
  const [downloadProgress, setDownloadProgress] = useState(74);
  const [speed, setSpeed] = useState(48.6);
  const [selectedLimit, setSelectedLimit] = useState<'Unlimited' | '50 MB/s' | '20 MB/s'>('Unlimited');

  // Realistic dynamic fluctuation for the active download in mockup
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 99) return 99;
        return Number((prev + 0.15).toFixed(1));
      });

      // fluctuate speed around limit
      let baseSpeed = 48.2;
      if (selectedLimit === '50 MB/s') baseSpeed = 44.1;
      if (selectedLimit === '20 MB/s') baseSpeed = 19.4;

      const randomJitter = (Math.random() - 0.5) * 3.2;
      setSpeed(Number(Math.max(12, baseSpeed + randomJitter).toFixed(1)));
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying, selectedLimit]);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-mesh-top pointer-events-none" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-3/4 h-80 radial-mesh-hero pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker / Editorial Version Indicator (Anti-slop: clean, unboxed text) */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs font-medium text-teal-400/90 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span>{t.versionBadge}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Windows 10 & 11</span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] text-balance">
            {t.titleLine1}{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              {t.titleLine2}
            </span>{' '}
            {t.titleLine3}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            {t.subtitle}
          </p>
        </div>

        {/* Primary Action Zone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onTriggerDownload}
            type="button"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 rounded-xl shadow-lg shadow-teal-500/20 active:scale-98 transition-all group cursor-pointer"
          >
            <Download className="w-5 h-5 text-teal-100 group-hover:translate-y-0.5 transition-transform" />
            <div className="text-left">
              <div className="font-bold leading-tight">{t.downloadBtn}</div>
              <div className="text-[11px] text-teal-100/80 font-normal">{t.downloadMeta}</div>
            </div>
          </button>

          <a
            href="#simulator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-slate-200 hover:text-white glass-panel hover:bg-white/[0.08] rounded-xl transition-all"
          >
            <Layers className="w-4 h-4 text-teal-400" />
            <span>{t.tryDemo}</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Quiet Trust Signals (Clean typographic layout) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 mb-14">
          <div className="flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-teal-400" />
            <span>{t.specs.os}</span>
          </div>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>{t.specs.safe}</span>
          </div>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>{t.specs.noAds}</span>
          </div>
        </div>

        {/* HERO FOCAL ANCHOR: Interactive Native Desktop App Mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl glass-panel-elevated shadow-2xl shadow-cyan-950/40 overflow-hidden border border-white/10">
          
          {/* Windows Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A101C]/90 border-b border-white/[0.08] select-none">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="w-4 h-4" />
              <span className="text-xs font-medium text-slate-300 font-display">
                {m.title} <span className="text-slate-500 text-[11px]">v1.0.1</span>
              </span>
            </div>

            {/* Simulated Desktop Window Controls */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-teal-400/90 font-mono-numbers bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                127.0.0.1 : 48291 [OK]
              </span>
              <div className="flex items-center gap-2 text-slate-400 pl-2 border-l border-white/10">
                <span className="w-2.5 h-0.5 bg-slate-400 rounded-full" />
                <span className="w-2.5 h-2.5 border border-slate-400 rounded-sm" />
                <span className="text-xs font-bold leading-none text-slate-400 hover:text-rose-400 cursor-default">✕</span>
              </div>
            </div>
          </div>

          {/* App Toolbar / Status Row */}
          <div className="p-4 sm:p-6 bg-[#0E1726]/80 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                type="button"
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  isPlaying
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25'
                    : 'bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? m.pause : m.resume}</span>
              </button>

              {/* Speed throttle selector */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Gauge className="w-3.5 h-3.5 text-teal-400" />
                <span>{m.throttle}:</span>
                {(['Unlimited', '50 MB/s', '20 MB/s'] as const).map((limit) => (
                  <button
                    key={limit}
                    onClick={() => setSelectedLimit(limit)}
                    type="button"
                    className={`px-2 py-1 rounded text-[11px] cursor-pointer transition-colors ${
                      selectedLimit === limit
                        ? 'bg-white/15 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {limit === 'Unlimited' ? m.unlimited : limit}
                  </button>
                ))}
              </div>
            </div>

            {/* Telemetry pill indicator */}
            <div className="flex items-center gap-4 text-xs font-mono-numbers">
              <div className="text-right">
                <span className="text-slate-400 text-[11px] block">{m.currentSpeed}</span>
                <span className="text-teal-300 font-semibold text-sm">
                  {isPlaying ? `${speed} MB/s` : '0.0 MB/s'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-[11px] block">{m.threads}</span>
                <span className="text-cyan-300 font-semibold text-sm">16 / 16</span>
              </div>
            </div>
          </div>

          {/* Active Download Main Row */}
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Download File Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-sm text-white flex items-center gap-2">
                    <span>BillahStudio-Download-Manager-v1.0.1-Full.exe</span>
                    <span className="text-[10px] text-teal-300 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">
                      RFC 7233
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-mono-numbers">
                    94.7 MB / 128 MB · HTTP/2 Multiplexed · 16 Parallel Ranges
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-sm font-bold text-white font-mono-numbers">{downloadProgress}%</span>
                <span className="text-xs text-slate-400 block font-mono-numbers">ETA: ~1.2s</span>
              </div>
            </div>

            {/* 16-Segment Visual Engine: Displays the real-time parallel streams */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Parallel Range Stream Allocation (16 Byte Slices)</span>
                <span className="font-mono-numbers text-teal-400">16 Sockets Active</span>
              </div>

              {/* Multi-thread segmented visual bar */}
              <div className="grid grid-cols-16 gap-1 h-3 rounded-md bg-[#0A101C] p-0.5 border border-white/5">
                {Array.from({ length: 16 }).map((_, index) => {
                  const isDone = index < Math.floor((downloadProgress / 100) * 16);
                  const isCurrent = index === Math.floor((downloadProgress / 100) * 16);
                  return (
                    <div
                      key={index}
                      className={`h-full rounded-xs transition-all duration-300 ${
                        isDone
                          ? 'bg-gradient-to-t from-teal-500 to-cyan-400'
                          : isCurrent && isPlaying
                          ? 'bg-cyan-300 animate-pulse'
                          : 'bg-white/10'
                      }`}
                      title={`Range Slice #${index + 1}`}
                    />
                  );
                })}
              </div>

              {/* Main overall progress bar */}
              <div className="w-full bg-[#0A101C] h-2 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-400 transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>

            {/* Second Queued Download (demonstrating queue engine) */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-slate-300">Blender-Studio-Render-Pack-4K.zip</span>
                <span className="text-slate-500 font-mono-numbers">(4.2 GB)</span>
              </div>
              <span className="font-mono-numbers text-slate-400">Queued · Next in Line</span>
            </div>

          </div>
        </div>

        {/* Claim-to-Proof Adjacency Strip (Under the hero frame) */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl text-center">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-teal-400 font-mono-numbers">
              {metrics.speedup}
            </div>
            <div className="text-xs text-slate-300 mt-1">{metrics.speedupLabel}</div>
          </div>
          
          <div className="glass-panel p-4 rounded-xl text-center">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-400 font-mono-numbers">
              {metrics.resume}
            </div>
            <div className="text-xs text-slate-300 mt-1">{metrics.resumeLabel}</div>
          </div>

          <div className="glass-panel p-4 rounded-xl text-center">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-sky-400 font-mono-numbers">
              {metrics.telemetry}
            </div>
            <div className="text-xs text-slate-300 mt-1">{metrics.telemetryLabel}</div>
          </div>

          <div className="glass-panel p-4 rounded-xl text-center">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 font-mono-numbers">
              {metrics.license}
            </div>
            <div className="text-xs text-slate-300 mt-1">{metrics.licenseLabel}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
