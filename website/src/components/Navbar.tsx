import { Download, Github, Languages } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { content, GITHUB_REPO_URL } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onTriggerDownload: () => void;
}

export function Navbar({ currentLang, onToggleLang, onTriggerDownload }: NavbarProps) {
  const t = content[currentLang].nav;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090D16]/85 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        
        {/* Zone 1: Single text element wordmark with logo */}
        <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none">
          <BrandLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
          <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            BillahStudio <span className="text-teal-400 font-semibold text-sm px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">DM</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0">
            {t.features}
          </a>
          <a href="#simulator" className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0">
            {t.simulator}
          </a>
          <a href="#benchmark" className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0">
            {t.benchmarks}
          </a>
          <a href="#installation" className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0">
            {t.installation}
          </a>
          <a href="#faq" className="hover:text-teal-300 transition-colors whitespace-nowrap shrink-0">
            {t.faq}
          </a>
        </nav>

        {/* Zone 3: Actions + Language Toggle + GitHub link */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-2.5 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
            title={currentLang === 'en' ? 'বাংলায় দেখুন (Switch to Bengali)' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-teal-400" />
            <span className="font-semibold">{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
          </button>

          {/* GitHub link */}
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* 1 Primary Action */}
          <button
            onClick={onTriggerDownload}
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-lg shadow-sm shadow-teal-500/20 active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloadExe}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
