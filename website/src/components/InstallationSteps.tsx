import { useState } from 'react';
import { Download, Monitor, CheckCircle, Terminal, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';

interface InstallationStepsProps {
  currentLang: Language;
  onTriggerDownload: () => void;
}

export function InstallationSteps({ currentLang, onTriggerDownload }: InstallationStepsProps) {
  const t = content[currentLang].installation;
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="installation" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0A0F1D]">
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

        {/* 3 Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div
            onClick={() => setActiveStep(1)}
            className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
              activeStep === 1
                ? 'bg-teal-500/10 border-teal-500/60 shadow-lg shadow-teal-950/40'
                : 'glass-panel border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-black text-2xl text-teal-400 font-mono-numbers">
                {t.step1Num}
              </span>
              <Download className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">{t.step1Title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {t.step1Desc}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTriggerDownload();
              }}
              type="button"
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Download .exe (128 MB)</span>
              <span>→</span>
            </button>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActiveStep(2)}
            className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
              activeStep === 2
                ? 'bg-cyan-500/10 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                : 'glass-panel border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-black text-2xl text-cyan-400 font-mono-numbers">
                {t.step2Num}
              </span>
              <Monitor className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">{t.step2Title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {t.step2Desc}
            </p>
            <span className="text-xs font-medium text-slate-400">
              Clean installer with desktop icon
            </span>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActiveStep(3)}
            className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
              activeStep === 3
                ? 'bg-sky-500/10 border-sky-500/60 shadow-lg shadow-sky-950/40'
                : 'glass-panel border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-black text-2xl text-sky-400 font-mono-numbers">
                {t.step3Num}
              </span>
              <CheckCircle className="w-5 h-5 text-sky-400" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">{t.step3Title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {t.step3Desc}
            </p>
            <span className="text-xs font-medium text-slate-400">
              1-click in-app extension pairing
            </span>
          </div>

        </div>

        {/* Step Preview Walkthrough Box */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel-elevated p-6 border border-white/10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs text-slate-400">
            <span className="font-medium text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Step {activeStep} Walkthrough Preview</span>
            </span>
            <span className="font-mono-numbers text-teal-400">Ready for Windows 10 & 11</span>
          </div>

          {activeStep === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#060A12] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">BillahStudio-Download-Manager.exe</div>
                  <div className="text-xs text-slate-400 mt-0.5 font-mono-numbers">
                    Official Windows 64-bit Installer · 128 MB · SHA-256 Verified
                  </div>
                </div>
                <button
                  onClick={onTriggerDownload}
                  type="button"
                  className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Download .exe Now
                </button>
              </div>
              <p className="text-xs text-slate-400">
                Tip: If Windows SmartScreen prompts &quot;Windows protected your PC&quot;, click &quot;More info&quot; and then &quot;Run anyway&quot;. BillahStudio DM is 100% clean and verified.
              </p>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#060A12] border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-white">Windows Setup Wizard</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  The setup installs the application to <code>%LOCALAPPDATA%\Programs\BillahStudio-Download-Manager</code> without requiring administrator privileges. It configures the native messaging host for browser integration automatically.
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-teal-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Zero system restart required</span>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#060A12] border border-white/5 space-y-2">
                <div className="text-xs font-semibold text-white">Chrome / Edge Extension Pairing</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Inside the BillahStudio DM desktop app, click <strong>Settings → Browser Extension</strong> and press <strong>"Install Extension"</strong>. It opens the Chrome Web Store extension page directly with zero manual configuration.
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-teal-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Supports Chrome, Edge, Brave, Vivaldi & Opera</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
