import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoveGate = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const correctPassword = "1"; // كلمة المرور

    // حساب عدد الأيام منذ البداية (20 مايو 2025)
    const startDate = new Date('2025-05-20');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.trim() === correctPassword) {
            setError(false);
            if (onUnlock) onUnlock();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-[#52000d] flex flex-col items-center justify-between overflow-hidden font-sans select-none py-8 px-4 text-white dir-rtl">

            {/* 1. خلفية القلوب المتطايرة */}
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

            {/* 2. شريط التواريخ المميزة في الأعلى */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 w-full max-w-sm flex flex-col gap-2 text-center"
            >
                <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-4 shadow-lg flex justify-around items-center text-xs">
                    <div>
                        <p className="text-pink-300 font-bold">بداية حكايتنا 🌹</p>
                        <p className="text-gray-200 font-mono">20 / 05 / 2025</p>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div>
                        <p className="text-pink-300 font-bold">أول كلمة بحبك ❤️</p>
                        <p className="text-gray-200 font-mono">17 / 09 / 2025</p>
                    </div>
                </div>

                {/* عداد الأيام */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-full py-1 px-4 text-center">
                    <p className="text-pink-100 text-xs font-medium">
                        مع بعض بقالنا <span className="text-pink-300 font-extrabold font-mono text-sm">{diffDays}</span> يوم من أجمل أيام حياتي ✨
                    </p>
                </div>
            </motion.div>

            {/* 3. الحاوية الرئيسية للقلب وقفل الدخول */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[420px] aspect-square flex items-center justify-center z-10 my-auto"
            >
                {/* رسمة القلب الأساسية بـ SVG */}
                <svg
                    viewBox="0 0 500 500"
                    className="absolute inset-0 w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                >
                    <path
                        d="M250,440 C120,340 40,260 40,165 C40,95 95,40 165,40 C205,40 235,60 250,85 C265,60 295,40 335,40 C405,40 460,95 460,165 C460,260 380,340 250,440 Z"
                        fill="#800014"
                    />
                </svg>

                {/* المحتوى الداخلي فوق القلب */}
                <div className="relative z-10 flex flex-col items-center justify-center w-[75%] max-w-[260px] -mt-2 text-center">

                    {/* الصورة الشخصية */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-pink-500 to-red-400 shadow-lg mb-2 overflow-hidden flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400"
                            alt="Love Avatar"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/* النصوص */}
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow">
                        Love Gate
                    </h1>
                    <p className="text-[11px] text-pink-200/90 flex items-center justify-center gap-1 font-medium mb-3">
                        ❤️ My Everything
                    </p>

                    {/* نموذج إدخال كلمة المرور */}
                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">

                        {/* حقل الإدخال */}
                        <div className="relative w-full">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="كلمة السر..."
                                className="w-full h-10 px-4 text-center text-white bg-black/40 rounded-xl border border-white/20 focus:outline-none focus:border-pink-300 placeholder:text-white/40 font-medium text-sm transition-all backdrop-blur-sm"
                                autoFocus
                            />
                        </div>

                        {/* زر Unlock */}
                        <button
                            type="submit"
                            className="w-full h-10 bg-gradient-to-r from-red-800 to-pink-900 hover:from-red-700 hover:to-pink-800 text-white font-bold text-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            ❤️ دخول لعالمنا ❤️
                        </button>
                    </form>

                    {/* رسالة الخطأ */}
                    {error && (
                        <p className="text-xs text-pink-300 font-bold animate-bounce mt-2 absolute -bottom-6">
                            كلمة السر غير صحيحة!
                        </p>
                    )}

                </div>
            </motion.div>


        </div>
    );
};

export default LoveGate;