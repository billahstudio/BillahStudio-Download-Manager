import { useState } from 'react';
import { Gauge, Clock, Zap, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface SpeedBenchmarkProps {
  currentLang: Language;
}

export function SpeedBenchmark({ currentLang }: SpeedBenchmarkProps) {
  const t = content[currentLang].benchmark;

  // File size in GB
  const [fileSizeGB, setFileSizeGB] = useState<number>(8);

  const fileSizeMB = fileSizeGB * 1024;
  const browserSpeedMBs = 3.8;
  const bdmSpeedMBs = 48.5;

  // Seconds calculated
  const browserSeconds = fileSizeMB / browserSpeedMBs;
  const bdmSeconds = fileSizeMB / bdmSpeedMBs;
  const secondsSaved = Math.max(0, browserSeconds - bdmSeconds);

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return `${hrs}h ${remainingMins}m`;
    }
    return `${mins}m ${secs}s`;
  };

  const speedMultiplier = (bdmSpeedMBs / browserSpeedMBs).toFixed(1);

  return (
    <section id="benchmark" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/10 shadow-xl">
          
          {/* Slider Row */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200">{t.sliderLabel}</span>
              <span className="text-lg font-bold text-teal-300 font-mono-numbers">
                {fileSizeGB} GB
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={fileSizeGB}
              onChange={(e) => setFileSizeGB(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />

            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono-numbers">
              <span>1 GB (Movie)</span>
              <span>15 GB (Game Pack)</span>
              <span>30 GB (4K Footage)</span>
              <span>60 GB (Virtual Machine)</span>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            
            {/* Standard Browser */}
            <div className="p-5 rounded-xl bg-[#060A12]/80 border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{t.defaultBrowser}</span>
                <span className="font-mono-numbers text-slate-400">{t.defaultSpeed}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <Clock className="w-5 h-5 text-rose-400 shrink-0 self-center" />
                <span className="text-3xl font-extrabold text-slate-200 font-mono-numbers">
                  {formatDuration(browserSeconds)}
                </span>
                <span className="text-xs text-slate-400">wait time</span>
              </div>

              {/* Visual Relative Progress */}
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-500 transition-all duration-300"
                  style={{ width: `${Math.max(5, (bdmSeconds / browserSeconds) * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400">Single HTTP stream bottlenecks on network fluctuations.</p>
            </div>

            {/* BillahStudio DM */}
            <div className="p-5 rounded-xl bg-teal-500/10 border border-teal-500/30 space-y-3 shadow-lg shadow-teal-950/30">
              <div className="flex items-center justify-between text-xs text-teal-300">
                <span className="font-semibold text-white">BillahStudio DM (16 Slices)</span>
                <span className="font-mono-numbers text-teal-400">{t.bdmSpeed}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <Zap className="w-5 h-5 text-teal-400 shrink-0 self-center" />
                <span className="text-3xl font-extrabold text-teal-300 font-mono-numbers">
                  {formatDuration(bdmSeconds)}
                </span>
                <span className="text-xs text-teal-200/80 font-medium">{speedMultiplier}× faster</span>
              </div>

              {/* Visual Relative Progress */}
              <div className="w-full bg-teal-950/60 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 w-full transition-all duration-300" />
              </div>
              <p className="text-[11px] text-teal-200/90 font-medium">16 simultaneous parallel byte-range streams maximize link saturation.</p>
            </div>

          </div>

          {/* Time Saved Hero Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-transparent border border-teal-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-teal-300 font-medium uppercase tracking-wider">
                {t.timeSaved}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono-numbers mt-0.5">
                {formatDuration(secondsSaved)}{' '}
                <span className="text-sm font-normal text-slate-300">
                  saved on a {fileSizeGB} GB download
                </span>
              </div>
            </div>

            <a
              href="#installation"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-teal-500 hover:bg-teal-400 px-4 py-2.5 rounded-lg transition-colors shrink-0 shadow-md shadow-teal-500/20"
            >
              <span>Install v1.0.1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
