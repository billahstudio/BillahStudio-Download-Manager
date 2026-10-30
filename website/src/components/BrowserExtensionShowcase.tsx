import { useState } from 'react';
import { Chrome, Play, CheckCircle2, Sparkles, Download, Layers } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface BrowserExtensionShowcaseProps {
  currentLang: Language;
}

export function BrowserExtensionShowcase({ currentLang }: BrowserExtensionShowcaseProps) {
  const t = content[currentLang].extension;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState<string | null>(null);

  const handleSelectFormat = (format: string) => {
    setDownloadTriggered(format);
    setIsDropdownOpen(false);
    setTimeout(() => {
      setDownloadTriggered(null);
    }, 3500);
  };

  return (
    <section className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Explanations + Interactive Browser Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3 Architectural Points */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-5 rounded-2xl glass-panel border border-white/5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-xs">
                  01
                </div>
                <h3 className="font-semibold text-white text-base">{t.step1Title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                {t.step1Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  02
                </div>
                <h3 className="font-semibold text-white text-base">{t.step2Title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                {t.step2Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs">
                  03
                </div>
                <h3 className="font-semibold text-white text-base">{t.step3Title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                {t.step3Desc}
              </p>
            </div>

            {/* Supported Browsers Footnote */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pl-2">
              <Chrome className="w-4 h-4 text-teal-400" />
              <span>Full compatibility with Google Chrome, Microsoft Edge, Brave, and Opera</span>
            </div>

          </div>

          {/* Right Column: Interactive Browser Window with Floating Sniffer Widget */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel-elevated border border-white/10 overflow-hidden shadow-2xl shadow-cyan-950/30">
              
              {/* Simulated Browser Chrome / URL Bar */}
              <div className="px-4 py-3 bg-[#0A101C] border-b border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex-1 max-w-md mx-auto bg-[#060A12] px-3 py-1 rounded-lg border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="truncate">https://video-hub.stream/watch?v=cinematic-trailer-4k</span>
                  <span className="text-[10px] text-teal-400 font-mono-numbers">SSL · 200 OK</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400">
                  <BrandLogo className="w-4 h-4" />
                </div>
              </div>

              {/* Simulated Video Player Area */}
              <div className="relative aspect-video bg-gradient-to-br from-[#0c1322] via-[#090d16] to-[#04060a] flex items-center justify-center p-6 overflow-hidden">
                
                {/* Background decorative artwork / video preview graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-black/80 pointer-events-none" />

                {/* Central Play Button */}
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl shadow-black/50 hover:scale-105 transition-transform cursor-pointer">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>

                {/* Video Title Overlay (Bottom Left) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="font-medium text-white truncate max-w-[200px] sm:max-w-xs">
                      Cosmos Exploration: 4K HDR Official Footage
                    </span>
                  </div>
                  <span className="font-mono-numbers bg-black/60 px-2 py-1 rounded border border-white/10 text-[11px]">
                    04:12 / 18:30
                  </span>
                </div>

                {/* FLOATING SNIFFER WIDGET (Top Right of the Video) */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      type="button"
                      className="flex items-center gap-2 px-3 py-2 bg-[#090E18]/95 hover:bg-[#0E1626] text-white border border-teal-500/50 hover:border-teal-400 rounded-xl shadow-lg shadow-teal-500/25 transition-all cursor-pointer backdrop-blur-md text-xs font-semibold group"
                    >
                      <BrandLogo className="w-4 h-4" />
                      <span>Download Video</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    </button>

                    {/* Interactive Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-[#0A101C] border border-white/15 rounded-xl shadow-2xl p-2 z-30 animate-in fade-in zoom-in-95">
                        <div className="px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 tracking-wider uppercase border-b border-white/5 mb-1 flex items-center justify-between">
                          <span>Detected Streams</span>
                          <span className="text-teal-400 font-mono-numbers">4 Available</span>
                        </div>

                        {[
                          { label: '4K Ultra HD (2160p 60fps)', size: '1.42 GB', codec: 'AV1' },
                          { label: 'Full HD (1080p)', size: '480 MB', codec: 'H.264' },
                          { label: 'Standard HD (720p)', size: '210 MB', codec: 'H.264' },
                          { label: 'Audio Only (M4A 320k)', size: '42 MB', codec: 'AAC' },
                        ].map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleSelectFormat(item.label)}
                            type="button"
                            className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-teal-500/10 hover:border hover:border-teal-500/30 text-xs text-slate-200 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
                          >
                            <div>
                              <div className="font-medium truncate">{item.label}</div>
                              <div className="text-[10px] text-slate-400 font-mono-numbers">
                                {item.codec} · {item.size}
                              </div>
                            </div>
                            <Download className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hand-off Confirmation Toast */}
                {downloadTriggered && (
                  <div className="absolute inset-x-4 top-4 z-30 p-3 bg-teal-950/90 border border-teal-500/50 rounded-xl text-teal-200 text-xs flex items-center justify-between backdrop-blur-md shadow-2xl">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      <span>Transferred <strong>{downloadTriggered}</strong> to BillahStudio DM (16 parallel ranges)!</span>
                    </div>
                    <span className="text-[11px] font-mono-numbers text-teal-300">Engine Active</span>
                  </div>
                )}

              </div>

              {/* Bottom Card Footer */}
              <div className="p-3 bg-[#080D17] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Try clicking <strong>Download Video</strong> in the preview above</span>
                </span>
                <span className="font-mono-numbers text-slate-500">Native Messaging v2.4</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
