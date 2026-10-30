import { Download, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface BottomBannerProps {
  currentLang: Language;
  onTriggerDownload: () => void;
}

export function BottomBanner({ currentLang, onTriggerDownload }: BottomBannerProps) {
  const isEn = currentLang === 'en';

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0A0E1A] to-[#060810] border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(13,148,136,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
          {isEn
            ? "Ready for Blazing-Fast Windows Downloads?"
            : "সুপারফাস্ট ও ঝামেলাহীন ডাউনলোডের জন্য প্রস্তুত?"}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          {isEn
            ? "Experience true 16-thread multi-segmented acceleration, zero ads, and crash-proof pause & resume on Windows 10 and 11."
            : "১৬টি সমান্তরাল থ্রেডের সর্বোচ্চ স্পিড, নো-অ্যাডওয়্যার এবং নির্ভুল পজ/রিজিউম উপভোগ করুন উইন্ডোজ ১০ ও ১১-তে।"}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTriggerDownload}
            type="button"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-sm rounded-xl shadow-xl shadow-teal-500/25 active:scale-98 transition-all cursor-pointer group"
          >
            <Download className="w-5 h-5 text-teal-100 group-hover:translate-y-0.5 transition-transform" />
            <div className="text-left">
              <div>{isEn ? "Download BillahStudio DM" : "ডাউনলোড BillahStudio DM"}</div>
              <div className="text-[11px] font-normal text-teal-100/80 font-mono-numbers">
                v1.0.1 for Windows (128 MB)
              </div>
            </div>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>100% Free · MIT Open-Source · SHA-256 Verified Clean</span>
        </div>

      </div>
    </section>
  );
}
