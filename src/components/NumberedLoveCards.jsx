import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NumberedLoveCards = () => {
    const cards = [
        { id: 1, text: "محبتش", subText: "البداية كانت عندك" },
        { id: 2, text: "ولا بحب", subText: "الحاضر كله ليكي" },
        { id: 3, text: "ولا هحب حد", subText: "المستقبل محجوز باسمك" },
        { id: 4, text: "زي ما حبيتك يا اجمل حاجة في حياتي ❤️", subText: "النهاية السعيدة" },
    ];

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
                <div className="text-3xl mb-2">✨</div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-wide">
                    اكتشفي الحكاية
                </h2>
                <p className="text-pink-200/80 text-xs md:text-sm font-medium">
                    اضغطي على الكروت بالترتيب من 01 إلى 04
                </p>
            </motion.div>

            {/* 3. شبكة الكروت الزجاجية */}
            <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-2">
                {cards.map((card, index) => (
                    <CardItem key={card.id} card={card} index={index} />
                ))}
            </div>



        </section>
    );
};

const CardItem = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group relative h-56 w-full cursor-pointer [perspective:1000px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full transition-all duration-700"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                whileHover={{ scale: 1.02 }}
            >
                {/* الوجه الأمامي: زجاجي ناعم برقم الكارت */}
                <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-2xl border border-white/15 rounded-[2rem] flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    <span className="text-6xl font-black text-white/90 drop-shadow-md">
                        {card.id.toString().padStart(2, '0')}
                    </span>
                    <div className="h-0.5 w-12 bg-pink-400/50 mt-3 rounded-full" />
                    <span className="mt-4 text-[11px] text-pink-200/70 font-medium tracking-wider uppercase">
                        اضغطي للفتح 💖
                    </span>
                </div>

                {/* الوجه الخلفي: كارت عنابي داكن برومانسية ونعومة */}
                <div
                    className="absolute inset-0 w-full h-full bg-[#3b0007] border border-white/20 rounded-[2rem] flex flex-col items-center justify-center p-6 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <span className="text-xs text-pink-300/80 mb-2 font-semibold">
                        {card.subText}
                    </span>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0.9 }}
                        transition={{ delay: 0.15 }}
                        className="text-lg md:text-xl font-bold text-white text-center leading-relaxed drop-shadow-sm"
                    >
                        {card.text}
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default NumberedLoveCards;