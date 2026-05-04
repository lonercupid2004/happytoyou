/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Moon, 
  Star, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Gift, 
  Flower, 
  Wind,
  CheckCircle2,
  Volume2,
  VolumeX
} from 'lucide-react';

// --- Components ---

const FloatingDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, -20, 20, -10],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          {i % 4 === 0 ? (
            <Star className="text-[var(--color-brand-gold)]" style={{ opacity: 0.2 }} size={16 + Math.random() * 10} />
          ) : i % 4 === 1 ? (
            <Heart className="text-pink-300" style={{ opacity: 0.2 }} size={12 + Math.random() * 8} />
          ) : i % 4 === 2 ? (
            <Flower className="text-purple-300" style={{ opacity: 0.2 }} size={14 + Math.random() * 12} />
          ) : (
            <div className="w-1 h-1 bg-brand-gold/30 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
};



interface ChapterProps {
  onNext: () => void;
  onPrev?: () => void;
  key?: string;
}

const WelcomeScreen = ({ onNext }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0.01 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 bg-white/50 rounded-3xl theme-shadow"
    >
      <header className="absolute top-8 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end z-10 gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans text-[var(--color-brand-gold)] mb-1">Bismillah-ir-Rahman-ir-Rahim</span>
          <h1 className="text-xl md:text-2xl font-light italic text-[var(--color-brand-dark)]">A Journey for Swalaiha</h1>
        </div>
      </header>

      <div
        className="mb-8 mt-24 md:mt-0"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[var(--color-brand-border)] mb-8 flex items-center justify-center mx-auto shadow-sm bg-white/40">
           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-pink-50/50 flex items-center justify-center text-5xl md:text-6xl">🌸</div>
        </div>
        <span className="font-arabic text-4xl md:text-6xl text-[var(--color-brand-gold)] mb-4 block leading-relaxed">
          بِسْمِ ٱللَّهِ
        </span>
      </div>

      <h1 
        className="font-serif text-5xl md:text-7xl text-[var(--color-brand-dark)] mb-6 font-light leading-tight"
      >
        Happy Birthday, <br />
        <span className="text-[var(--color-brand-gold)] font-serif italic">Swalaiha</span>
      </h1>

      <p
        className="text-[var(--color-brand-brown)]/80 max-w-md mx-auto mb-12 font-sans italic leading-relaxed text-sm md:text-lg"
      >
        "Your presence in our lives is a beautiful reminder of Allah's mercy and boundless love. Today, we celebrate the blessing that is you."
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-12 py-4 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-[0.2em] uppercase text-[10px] md:text-xs shadow-xl shadow-stone-200 hover:bg-[var(--color-brand-brown)] transition-all flex items-center gap-2 cursor-pointer"
      >
        Begin the Journey
        <ChevronRight size={14} />
      </motion.button>
    </motion.div>
  );
};

const Chapter1 = ({ onNext, onPrev }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0.01, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 space-y-8"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[var(--color-brand-pink-soft)] flex items-center justify-center text-3xl shadow-sm border border-pink-100">🌙</div>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-tighter text-pink-700 opacity-60 font-sans">Chapter One</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-dark)]">A Divine Gift</h2>
      </div>

      <div className="max-w-lg bg-[var(--color-brand-pink-soft)] p-8 md:p-12 rounded-[2.5rem] border border-pink-200/30 theme-shadow">
        <p className="text-[var(--color-brand-brown)] leading-relaxed font-serif italic text-lg md:text-xl">
          "Alhamdulillah for the day you graced this world with your light. You weren't just a child; you were a Barakah—a divine blessing to our family."
        </p>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="p-3 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-border)] hover:bg-white/80 transition-colors cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={onNext} className="px-10 py-3 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-widest uppercase text-[10px] flex items-center gap-2 hover:bg-[var(--color-brand-brown)] cursor-pointer">
          Continue <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Chapter2 = ({ onNext, onPrev }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 space-y-10"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[var(--color-brand-purple-soft)] flex items-center justify-center text-3xl shadow-sm border border-purple-100">✨</div>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-tighter text-purple-700 opacity-60 font-sans">Chapter Two</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-dark)]">Pure Soul</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-xl w-full">
        <div className="bg-[var(--color-brand-purple-soft)] p-8 rounded-[2rem] border border-purple-200/30 text-left">
          <p className="text-[var(--color-brand-brown)] leading-relaxed font-serif italic text-lg text-center">
            "MashaAllah, your kindness and smile brighten the darkest corners. Your heart reflects the beauty of your character."
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Heart className="text-purple-300" size={24} fill="currentColor" opacity={0.3} />
            <Flower className="text-purple-300" size={24} />
            <Heart className="text-purple-300" size={24} fill="currentColor" opacity={0.3} />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="p-3 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-border)] hover:bg-white/80 transition-colors cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={onNext} className="px-10 py-3 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-widest uppercase text-[10px] flex items-center gap-2 hover:bg-[var(--color-brand-brown)] cursor-pointer">
          Continue <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Chapter3 = ({ onNext, onPrev }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 space-y-12"
    >
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-[#B45309] font-sans">Sacred Blessings</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-dark)]">Duas for Swalaiha</h2>
      </div>

      <div className="bg-[var(--color-brand-amber-soft)] p-8 md:p-12 rounded-[3rem] border border-[#FEF3C7]/50 max-w-xl w-full theme-shadow relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-xl">🤲</div>
        <div className="space-y-8 mt-4 text-center">
          <div className="space-y-2">
            <span className="font-arabic text-2xl text-[#B45309]">اللهم ارزقها العافية</span>
            <p className="text-sm italic font-serif opacity-80 leading-relaxed">"May Allah grant you Afiyah, Imaan that never wavers, and a heart content with His decree."</p>
          </div>
          <div className="space-y-2 pt-6 border-t border-[#FEF3C7]">
            <span className="font-arabic text-2xl text-[#B45309]">اللهم اجعلها من الموفقين</span>
            <p className="text-sm italic font-serif opacity-80 leading-relaxed">"May Allah make you among the successful in both Dunya and Akhirah."</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="p-3 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-border)] hover:bg-white/80 transition-colors cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={onNext} className="px-10 py-3 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-widest uppercase text-[10px] flex items-center gap-2 hover:bg-[var(--color-brand-brown)] cursor-pointer">
          Celebrate <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Chapter4 = ({ onNext, onPrev }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 space-y-12"
    >
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent opacity-20"></div>
        <h2 className="font-serif text-5xl md:text-7xl text-[var(--color-brand-dark)] leading-tight mt-8">
          Eid Milad <br />
          <span className="font-serif text-[var(--color-brand-gold)] italic">Swalaiha</span>
        </h2>
      </div>

      <div className="relative">
         <motion.div
           animate={{ scale: [1, 1.05, 1] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[var(--color-brand-border)] flex items-center justify-center bg-white/60 backdrop-blur-sm shadow-inner"
         >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-pink-50 flex items-center justify-center text-6xl md:text-7xl">🎂</div>
         </motion.div>
         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-gold)] text-white px-6 py-1 rounded-full text-[10px] tracking-widest uppercase font-sans">Alhamdulillah</div>
      </div>

      <div className="max-w-md">
        <p className="text-base md:text-lg text-[var(--color-brand-brown)] font-serif italic leading-relaxed">
           "Your life is a story written by the Best of Creators. May this year be your most blessed one yet."
        </p>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="p-3 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-border)] hover:bg-white/80 transition-colors cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={onNext} className="px-10 py-3 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-widest uppercase text-[10px] flex items-center gap-2 hover:bg-[var(--color-brand-brown)] cursor-pointer">
          Final Note <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Chapter5 = ({ onNext, onPrev }: ChapterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 space-y-12"
    >
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-brand-gold)] font-sans">A Loving Note</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-dark)]">From Our Heart</h2>
      </div>

      <div className="bg-white/60 backdrop-blur-sm p-10 md:p-14 rounded-[40px] border border-[var(--color-brand-border)] max-w-xl text-left space-y-8 theme-shadow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent"></div>
        
        <h3 className="text-2xl md:text-3xl font-serif italic leading-snug">
          "I cherish your presence always and forever."
        </h3>

        <div className="space-y-4 text-[var(--color-brand-brown)]/80 font-serif text-base md:text-lg leading-relaxed">
           <p>"May Jannah be our meeting place, where joys never end and partings never occur."</p>
           <p className="border-t border-[var(--color-brand-border)] pt-4 text-right">
             <span className="text-xs uppercase tracking-widest block mb-2 font-sans opacity-60">From your loving sibling</span>
             <span className="font-bold text-[var(--color-brand-dark)]">Always by your side</span>
           </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="p-3 rounded-full bg-white text-[var(--color-brand-gold)] border border-[var(--color-brand-border)] hover:bg-white/80 transition-colors cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <button onClick={onNext} className="px-10 py-3 bg-[var(--color-brand-dark)] text-white rounded-full font-sans tracking-widest uppercase text-[10px] flex items-center gap-2 hover:bg-[var(--color-brand-brown)] cursor-pointer">
          Finish <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const FinalScreen = ({ onPrev, onReset }: { onPrev: () => void, onReset: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="mb-12 relative"
      >
        <div className="text-6xl md:text-8xl opacity-10">🕌</div>
        <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="text-[var(--color-brand-gold)] w-16 h-16 md:w-24 md:h-24" fill="currentColor" opacity={0.2} />
        </div>
      </motion.div>

      <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-brand-dark)] mb-8 px-4 leading-tight">
        Keep her in your <br /> <span className="italic font-normal text-[var(--color-brand-gold)]">Duas • Ameen</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm">
        <button
          onClick={onReset}
          className="flex-1 bg-[var(--color-brand-dark)] text-white py-4 rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-brand-brown)] shadow-lg shadow-stone-200 transition-all cursor-pointer"
        >
          Replay Story
        </button>
        
        <button 
          onClick={() => {}} // Placeholder for "Send Love"
          className="flex-1 px-8 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-brand-gold)]/5 transition-all cursor-pointer"
        >
          Send Love
        </button>
      </div>

      <footer className="mt-24 w-full flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)]"></span>
          <span className="text-[10px] uppercase tracking-widest font-sans">Islamic Creative Series</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest font-sans">
          MMXXIV • Developed with Love
        </div>
      </footer>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Background Audio State (Mental Placeholder)
  const [isAudioOn, setIsAudioOn] = useState(false);

  useEffect(() => {
    // Update scroll progress visual for the indicator
    const totalChapters = 7;
    setScrollProgress(((currentChapter + 1) / totalChapters) * 100);
    
    // Scroll to top on chapter change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapter]);

  const nextChapter = () => {
    if (currentChapter < 6) setCurrentChapter(prev => prev + 1);
  };

  const prevChapter = () => {
    if (currentChapter > 0) setCurrentChapter(prev => prev - 1);
  };

  const resetJourney = () => {
    setCurrentChapter(0);
  };

  return (
    <div className="min-h-screen islamic-pattern font-sans relative overflow-x-hidden pb-32 box-border bg-[#FAF7F2]">
      <FloatingDecorations />

      {/* Progress Bar Top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-100">
        <motion.div 
          className="h-full bg-[var(--color-brand-gold)]" 
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Audio Toggle Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsAudioOn(!isAudioOn)}
          className="w-10 h-10 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors cursor-pointer"
        >
          {isAudioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>

      <main className="container mx-auto max-w-4xl px-4 pt-10 md:pt-20 relative z-10 min-h-[90vh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentChapter === 0 && <WelcomeScreen key="welcome" onNext={nextChapter} />}
          {currentChapter === 1 && <Chapter1 key="c1" onNext={nextChapter} onPrev={prevChapter} />}
          {currentChapter === 2 && <Chapter2 key="c2" onNext={nextChapter} onPrev={prevChapter} />}
          {currentChapter === 3 && <Chapter3 key="c3" onNext={nextChapter} onPrev={prevChapter} />}
          {currentChapter === 4 && <Chapter4 key="c4" onNext={nextChapter} onPrev={prevChapter} />}
          {currentChapter === 5 && <Chapter5 key="c5" onNext={nextChapter} onPrev={prevChapter} />}
          {currentChapter === 6 && <FinalScreen key="final" onPrev={prevChapter} onReset={resetJourney} />}
        </AnimatePresence>
      </main>

      {/* Page Dots indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-3 glass-card px-4 md:px-6 py-3 rounded-full">
        {[...Array(7)].map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentChapter(i)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 cursor-pointer ${
              currentChapter === i ? 'bg-[var(--color-brand-gold)] scale-125 w-4 md:w-6' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      
      {/* Footer Accents */}
      <div className="fixed bottom-0 w-full flex justify-between px-6 md:px-10 pb-6 pointer-events-none opacity-20 hidden sm:flex">
         <span className="font-arabic text-[var(--color-brand-gold)] text-sm md:text-base">الحمد لله</span>
         <span className="font-script text-[var(--color-brand-gold)] text-sm md:text-base">MashaAllah</span>
         <span className="font-arabic text-[var(--color-brand-gold)] text-sm md:text-base">مَا شَاءَ ٱللَّهُ</span>
      </div>
    </div>
  );
}
