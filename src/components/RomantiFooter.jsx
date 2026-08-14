import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveMemory = () => {
    const [isOpen, setIsOpen] = useState(false);

    const memories = [
        { id: 1, img: "1.jpg", text: "بحبك يا نور عيني ❤️", size: "tall" },
        { id: 4, img: "4.jpg", text: "عمري ما كنت مبسوط زي ما انا معاكي ❤️", size: "tall" },
        { id: 6, img: "2.jpg", text: "يا مالكه قلبي ❤️", size: "small" },
    ];

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <section className="relative min-h-[650px] w-full flex flex-col items-center justify-center bg-[#52000d] overflow-hidden font-sans select-none dir-rtl text-white py-16 px-4">

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

            {/* 2. الزر الرئيسي بأسلوب Glassmorphism الدافئ */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        exit={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
                        transition={{ duration: 0.6 }}
                        className="z-10 flex flex-col items-center my-auto"
                    >
                        <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-pink-200/80 text-xs font-semibold tracking-widest uppercase mb-6"
                        >
                            ✨ اضغطي هنا لفتح الألبوم ✨
                        </motion.span>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(true)}
                            className="relative cursor-pointer"
                        >
                            <div className="relative px-8 py-5 md:px-12 md:py-6 bg-gradient-to-b from-white/10 to-black/30 backdrop-blur-2xl border border-white/20 rounded-full flex items-center gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                                <span className="text-white text-xl md:text-3xl font-extrabold tracking-wide">
                                    أجمل حكاية في <span className="text-pink-300 drop-shadow-md">عُمري</span>
                                </span>
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="text-2xl md:text-3xl"
                                >
                                    💖
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3. نافذة الألبوم الغامرة (Modal) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#3b0007]/95 backdrop-blur-2xl overflow-y-auto pt-20 pb-20 px-4 dir-rtl text-white"
                    >
                        {/* خلفية قلوب إضافية للنافذة */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: "100vh", opacity: 0 }}
                                    animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                                    transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 3 }}
                                    className="absolute text-red-400"
                                    style={{ left: `${Math.random() * 100}%`, fontSize: `${Math.random() * 20 + 10}px` }}
                                >
                                    ❤️
                                </motion.div>
                            ))}
                        </div>

                        {/* زر الإغلاق */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl z-[110] hover:bg-white/20 transition-all shadow-lg"
                        >
                            ✕
                        </motion.button>

                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="max-w-4xl mx-auto text-center mb-12"
                        >
                            <div className="text-3xl mb-2">🎞️</div>
                            <h3 className="text-white text-3xl md:text-5xl font-extrabold mb-3">
                                ذكريات <span className="text-pink-300">لا تُنسى</span>
                            </h3>
                            <div className="h-0.5 w-16 bg-pink-400/50 mx-auto rounded-full" />
                        </motion.div>

                        {/* شبكة الصور */}
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-2 relative z-10">
                            {memories.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    className="group relative"
                                >
                                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 to-black/30 backdrop-blur-xl p-3 shadow-2xl transition-all duration-500 hover:border-pink-300/40">
                                        <div className="relative overflow-hidden rounded-[2rem] h-80 w-full">
                                            <img
                                                src={item.img}
                                                alt="Memory"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                        </div>
                                        <div className="mt-4 mb-2 px-2 text-center">
                                            <p className="text-white font-bold text-lg leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* الرسالة الختامية داخل النافذة */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 text-center"
                        >
                            <h4 className="text-pink-200/90 text-xl font-bold italic animate-pulse">
                                — دمتِ لي عُمراً جميلاً —
                            </h4>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </section>
    );
};

export default InteractiveMemory;