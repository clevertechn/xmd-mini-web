import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Maswali Yanayoulizwa
            <br />
            <span className="text-gradient">Marsha Mara kwa Mara</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Pata majibu ya maswali yanayoulizwa zaidi kuhusu Black Hat XMD.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-primary-500/30' : 'border-white/5'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`font-display text-sm sm:text-base font-semibold transition-colors ${
                    isOpen ? 'text-white' : 'text-dark-200'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'text-primary-400 rotate-180' : 'text-dark-400'
                    }`
                  }
                />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-dark-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-dark-400">
            Una swali lingine?{' '}
            <a href="#contact" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
              Wasiliana nasi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
