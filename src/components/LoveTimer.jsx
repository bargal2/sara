import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveTimer = () => {
  // تاريخ البداية المطلوب: 20 مايو 2025
  const startDate = new Date('2025-05-20T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#52000d] flex flex-col items-center justify-center overflow-hidden font-sans select-none p-4 dir-rtl text-white">
      
      {/* 1. خلفية القلوب المتطايرة للأعلى */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const duration = Math.random() * 5 + 4;
          const delay = Math.random() * 5;
          const size = Math.random() * 20 + 12;
          const left = Math.random() * 100;

          return (
            <motion.div
              key={i}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
              className="absolute text-red-500"
              style={{
                left: `${left}%`,
                fontSize: `${size}px`,
              }}
            >
              ❤️
            </motion.div>
          );
        })}
      </div>

      {/* 2. العنوان الرئيسي */}
      <div className="z-10 flex items-center gap-2 mb-6 text-3xl md:text-4xl font-extrabold tracking-wide">
        <span className="text-2xl">💞</span>
        <h2>بدايتنا</h2>
      </div>

      {/* 3. كارت العداد الرئيسي */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[460px] bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col items-center gap-6"
      >
        {/* تاريخ البداية العلوي */}
        <div className="text-sm md:text-base font-bold text-pink-100 tracking-wider flex items-center gap-1">
          ❤️ سوا من 20-05-2025 ❤️
        </div>

        {/* المربعات الأربعة للعداد */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
          
          {/* يوم */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.days}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              يوم
            </span>
          </div>

          {/* ساعة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              ساعة
            </span>
          </div>

          {/* دقيقة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              دقيقة
            </span>
          </div>

          {/* ثانية مع الحركة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.seconds}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl sm:text-2xl font-black text-white"
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              ثانية
            </span>
          </div>

        </div>

        {/* النص السفلي للكارت */}
        <div className="text-xs sm:text-sm font-semibold text-pink-100 flex items-center gap-1">
          ❤️ كل ثانية بتعدي وانت في قلبي
        </div>
      </motion.div>

      {/* 4. كارت "يوم ما قولتلك بحبك" السفلي */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 w-full max-w-[460px] mt-6 flex flex-col items-center gap-3"
      >
        <div className="w-full bg-[#3b0007] hover:bg-[#2e0005] border border-white/10 rounded-2xl p-4 text-center font-bold text-sm md:text-base text-white shadow-lg cursor-pointer transition-transform active:scale-98">
          ❤️ يوم ما قولتلك بحبك ❤️
        </div>

        {/* زر التاريخ المصغر */}
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl px-4 py-1 text-xs font-mono font-bold text-gray-200 flex items-center gap-2">
          <span>2025-09-17</span>
          <span>📅</span>
        </div>
      </motion.div>

    </div>
  );
};

export default LoveTimer;