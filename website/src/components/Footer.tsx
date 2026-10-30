import { Shield, Mail, Globe, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const t = content[currentLang].footer;
  const nav = content[currentLang].nav;

  return (
    <footer className="bg-[#05080E] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="w-7 h-7" />
              <span className="font-display font-bold text-base text-white tracking-tight">
                BillahStudio Download Manager
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t.brandDesc}
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-400 text-[11px] font-mono-numbers">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>SHA-256 Verified · Billah Studio Official</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              {t.quickLinks}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {nav.features}
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors">
                  {nav.simulator}
                </a>
              </li>
              <li>
                <a href="#benchmark" className="hover:text-white transition-colors">
                  {nav.benchmarks}
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-white transition-colors">
                  {nav.installation}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Official Links */}
          <div className="space-y-3">
            <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              {t.resources}
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://billahstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-400" />
                  <span>BillahStudio Official</span>
                </a>
              </li>
              <li>
                <a
                  href="#installation"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>{t.releaseNotes}</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  <span>{t.reportIssue}</span>
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  <span>{t.license}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>{t.copyright}</div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">BillahStudio DM</span>
            <span>·</span>
            <span className="text-slate-300">v1.0.1 Official</span>
            <span>·</span>
            <a href="https://billahstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              BillahStudio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
