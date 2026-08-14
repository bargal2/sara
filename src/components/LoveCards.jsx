import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardsData = [
  { id: 1, frontIcon: "❤️", text: "بحبك", backContent: "أنتي أجمل حاجة حصلتلي" },
  { id: 2, frontIcon: "✨", text: "بموت فيكي", backContent: "ضحكتك هي السبب اللي بيخليني أبتسم كل يوم" },
  { id: 3, frontIcon: "🔒", text: "بعشقك", backContent: "قلبي ملكك لوحدك، للأبد" },
];

const LoveCards = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#52000d] flex flex-col items-center justify-center py-16 px-4 overflow-hidden font-sans select-none dir-rtl text-white">

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-10 px-4"
      >
        <div className="text-3xl mb-2">💌</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-wide">
          رسائل من قلبي
        </h2>
        <p className="text-pink-200/80 text-xs md:text-sm font-medium">
          كل كارت يحمل سراً صغيراً .. اضغطي لتكتشفي ما وراء الكلمات
        </p>
      </motion.div>

      {/* 3. شبكة الكروت الرومانسية */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-2">
        {cardsData.map((card, index) => (
          <LoveCard key={card.id} card={card} index={index} />
        ))}
      </div>


    </section>
  );
};

const LoveCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-80 w-full cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* الواجهة الأمامية (Glassmorphism شفاف) */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-6xl mb-4 drop-shadow-md"
          >
            {card.frontIcon}
          </motion.div>

          <h3 className="text-2xl font-black text-white mb-2">{card.text}</h3>
          <div className="h-0.5 w-10 bg-pink-400/50 my-2 rounded-full" />

          <span className="mt-3 text-[11px] text-pink-200/70 font-medium tracking-wider uppercase">
            اضغطي لرؤية السر 💖
          </span>
        </div>

        {/* الواجهة الخلفية (عنابي داكن دافئ) */}
        <div
          className="absolute inset-0 w-full h-full bg-[#3b0007] border border-white/20 rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-base md:text-lg font-bold text-white text-center leading-relaxed drop-shadow-sm mb-4">
            {card.backContent}
          </p>

          <span className="text-xs font-semibold text-pink-300/80">
            ❤️ بحبك للأبد ❤️
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoveCards;