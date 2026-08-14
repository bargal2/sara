import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onNext }) => {
  // ✍️ الرسالة الجديدة
  const fullText = "بحبك يا أغلى ما ليا وأغلى ما في حياتي.. وحقك عليا بجد لو زعلتك أو ضايقتك في أي يوم، عشان خاطر زعلك ده غالي عندي اوي. تعالى نفتكر كل حاجة حلوة بينا ونعدي أي حاجة وحشة مع بعض ♥";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 45); // سرعة كتابة الحروف

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative min-h-screen w-full bg-[#1a0007] flex items-center justify-center overflow-hidden font-sans select-none p-4" dir="rtl">
      
      {/* 1. إضاءات الخلفية الساحرة (Ambient Glows) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" />

      {/* 2. خلفية القلوب المتألقة والمتحركة */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const duration = Math.random() * 6 + 7;
          const delay = Math.random() * 5;
          const size = Math.random() * 18 + 12;
          const left = Math.random() * 100;

          return (
            <motion.div
              key={i}
              initial={{ y: "105vh", x: 0, opacity: 0, scale: 0.5 }}
              animate={{ 
                y: "-10vh", 
                x: [0, 20, -20, 0],
                opacity: [0, 0.9, 0.9, 0],
                scale: [0.5, 1, 0.8, 0.5]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              className="absolute text-pink-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]"
              style={{
                left: `${left}%`,
                fontSize: `${size}px`,
              }}
            >
              ♥
            </motion.div>
          );
        })}
      </div>

      {/* 3. الكارت الزجاجي الرئيسي الفاخر */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[450px] bg-gradient-to-b from-white/10 via-white/5 to-black/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-7 md:p-10 flex flex-col items-center justify-between min-h-[540px] overflow-hidden group"
      >
        {/* توهج علوي فاخر داخل الكارت */}
        <div className="absolute -top-20 inset-x-0 h-40 bg-gradient-to-b from-rose-500/30 to-transparent blur-2xl pointer-events-none" />

        {/* أيقونة قلب نبض جوهرية */}
        <div className="relative mt-2 mb-6">
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-rose-500 blur-xl"
          />
          
          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-600 via-pink-500 to-rose-400 p-[1px] shadow-[0_0_30px_rgba(244,63,94,0.5)] flex items-center justify-center backdrop-blur-md"
          >
            <div className="w-full h-full bg-[#1e0208]/80 rounded-[23px] flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* النص المكتوب بتأثير آلة الكاتبة */}
        <div className="w-full text-center my-auto px-2 py-2">
          <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide whitespace-pre-line text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {displayedText}
            <span className="inline-block w-1 h-5 mr-1 bg-rose-400 rounded-full animate-pulse align-middle shadow-[0_0_10px_#f43f5e]" />
          </p>
        </div>

        {/* زر الاستكمال */}
        {onNext && (
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(244,63,94,0.6)" }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="mt-6 px-10 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-medium text-sm tracking-wider shadow-[0_10px_30px_rgba(244,63,94,0.3)] border border-pink-400/30 transition-all duration-300"
          >
            التالي ♥
          </motion.button>
        )}

      </motion.div>

    </div>
  );
};

export default Hero;