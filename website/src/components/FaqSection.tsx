import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { content, FAQ_DATA } from '../data/translations';

interface FaqSectionProps {
  currentLang: Language;
}

export function FaqSection({ currentLang }: FaqSectionProps) {
  const t = content[currentLang].faq;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // first open by default

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0A0E1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-teal-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Category Filter Tabs (Zero-pill discipline: clean segmented buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#060A12] rounded-xl border border-white/5 mb-8 max-w-xl mx-auto">
          {[
            { id: 'all', label: t.all },
            { id: 'general', label: t.general },
            { id: 'performance', label: t.performance },
            { id: 'extension', label: t.extension },
            { id: 'security', label: t.security },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            const question = currentLang === 'en' ? faq.questionEn : faq.questionBn;
            const answer = currentLang === 'en' ? faq.answerEn : faq.answerBn;

            return (
              <div
                key={idx}
                className="rounded-xl glass-panel border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
