import { useState } from 'react';
import { Download, Copy, Check, FileArchive, ShieldCheck, HardDrive, Cpu, Laptop } from 'lucide-react';
import { Language } from '../types';
import { content, OFFICIAL_DOWNLOAD_URL, GITHUB_RELEASES_URL } from '../data/translations';

interface DownloadHubProps {
  currentLang: Language;
  onTriggerDownload: () => void;
}

export function DownloadHub({ currentLang, onTriggerDownload }: DownloadHubProps) {
  const t = content[currentLang].releases;
  const [copied, setCopied] = useState(false);

  const sha256Checksum = "9e2a4b87e671cb0a92d47158fae19b678c4309c95106b0d91d0339d1b092f34e";

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(sha256Checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 2 Package Cards (Installer vs Portable) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Standard Installer */}
          <div className="rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-teal-500/30 flex flex-col justify-between shadow-xl shadow-teal-950/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-bl-lg uppercase tracking-wider font-mono-numbers">
              Recommended
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {t.installerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.installerDesc}
              </p>

              <div className="space-y-2 text-xs text-slate-400 font-mono-numbers mb-6">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Version</span>
                  <span className="text-slate-200">v1.0.1 Stable</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>File Size</span>
                  <span className="text-slate-200">128 MB</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Architecture</span>
                  <span className="text-slate-200">Windows 64-bit (x64)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onTriggerDownload}
              type="button"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold text-xs rounded-xl shadow-md shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>{t.directDownload}</span>
            </button>
          </div>

          {/* Card 2: Portable Edition */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-5">
                <FileArchive className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {t.portableTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.portableDesc}
              </p>

              <div className="space-y-2 text-xs text-slate-400 font-mono-numbers mb-6">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Version</span>
                  <span className="text-slate-200">v1.0.1 Portable</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>File Size</span>
                  <span className="text-slate-200">110 MB</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span>Installation</span>
                  <span className="text-slate-200">Zero (Extract & Run)</span>
                </div>
              </div>
            </div>

            <a
              href={GITHUB_RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 glass-panel hover:bg-white/10 text-white font-medium text-xs rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <FileArchive className="w-4 h-4 text-slate-400" />
              <span>Download Portable ZIP</span>
            </a>
          </div>

        </div>

        {/* Checksum & Security Card */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel p-6 border border-white/10 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>{t.hashLabel} (v1.0.1 Official Binary)</span>
              </div>
              <div className="font-mono-numbers text-xs text-slate-400 break-all select-all">
                {sha256Checksum}
              </div>
            </div>

            <button
              onClick={handleCopyChecksum}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-teal-300">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copyHash}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* System Requirements Footnote Strip */}
        <div className="max-w-4xl mx-auto text-center text-xs text-slate-400 font-mono-numbers">
          {t.sysReqs}
        </div>

      </div>
    </section>
  );
}
