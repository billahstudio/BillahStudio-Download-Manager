import { useEffect } from 'react';
import { Download, CheckCircle, ExternalLink, X, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export function DownloadModal({ isOpen, onClose, currentLang }: DownloadModalProps) {
  const t = content[currentLang].modal;

  useEffect(() => {
    if (isOpen) {
      // Trigger the real file download automatically
      const link = document.createElement('a');
      link.href = '/download';
      link.setAttribute('download', 'BillahStudio-Download-Manager.exe');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div
        className="w-full max-w-lg rounded-2xl glass-panel-elevated p-6 sm:p-8 border border-white/15 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <BrandLogo className="w-10 h-10" />
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              {t.title}
            </h3>
            <p className="text-xs text-teal-400 font-mono-numbers">
              BillahStudio-Download-Manager.exe (v1.0.1)
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {t.subtitle}
        </p>

        {/* Manual download link */}
        <div className="p-3 rounded-xl bg-[#060A12] border border-white/5 mb-5 flex items-center justify-between text-xs">
          <span className="text-slate-300 font-mono-numbers truncate max-w-[280px]">
            BillahStudio-Download-Manager.exe
          </span>
          <a
            href="/download"
            className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1 shrink-0 ml-2"
          >
            <span>Direct Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Windows SmartScreen Guidance Box */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 space-y-2 mb-6">
          <div className="font-semibold text-amber-300 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>{t.tipTitle}</span>
          </div>
          <div className="space-y-1 text-slate-300">
            <div>{t.tip1}</div>
            <div>{t.tip2}</div>
            <div>{t.tip3}</div>
          </div>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
        >
          {t.closeBtn}
        </button>
      </div>
    </div>
  );
}
