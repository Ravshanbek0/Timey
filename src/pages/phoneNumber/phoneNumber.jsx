import React, { useState, useEffect } from "react";
import {
    FaPhoneAlt,
    FaShieldAlt,
    FaCheckCircle,
    FaArrowRight,
    FaSpinner,
    FaMobileAlt,
    FaLock,
    FaUserCheck,
    FaBolt,
    FaTelegram
} from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";

export default function PhoneNumber() {
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(5);

    const requestPhone = () => {
        const url = "https://t.me/timey_bron_bot?start=need_phone";
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.openTelegramLink(url);
            } else {
                window.open(url, '_blank');
            }

            if (window.Telegram?.WebApp) {
                const tg = window.Telegram.WebApp;
                tg.close();
            }

            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (phone && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [phone, countdown]);

    // For demo - simulate phone number received
    const demoSuccess = () => {
        setLoading(true);
        setTimeout(() => {
            setPhone("+998 90 123 45 67");
            setLoading(false);
        }, 1500);
    };

    const benefits = [
        {
            icon: <FaShieldAlt className="w-5 h-5 text-blue-600" />,
            title: "100% Xavfsiz",
            description: "Telefon raqamingiz faqat tizimda saqlanadi, uchinchi shaxslarga hech qachon berilmaydi",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100"
        },
        {
            icon: <FaUserCheck className="w-5 h-5 text-green-600" />,
            title: "1 bosqichda ro'yxatdan o'tish",
            description: "Qo'shimcha parol, kod yoki boshqa ma'lumotlar kiritish talab qilinmaydi",
            bgColor: "bg-green-50",
            borderColor: "border-green-100"
        },
        {
            icon: <FaBolt className="w-5 h-5 text-purple-600" />,
            title: "Tezkor kirish va bron",
            description: "Bir marta ulab, har qanday xizmatdan tez va oson foydalaning",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100"
        },
        {
            icon: <FaLock className="w-5 h-5 text-amber-600" />,
            title: "Maxfiylik kafolati",
            description: "Shaxsiy ma'lumotlaringiz maxfiylik siyosati asosida himoyalangan",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-100"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
            {/* Header */}
            <div className="px-4 pt-8 pb-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FaPhoneAlt className="w-12 h-12 text-white" />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {phone ? "Muvaffaqiyatli ulandi!" : "Telefon raqamingizni ulang"}
                </h1>

                <p className="text-gray-600 max-w-md mx-auto">
                    {phone
                        ? "Raqamingiz xavfsiz saqlandi. Endi barcha xizmatlardan foydalanishingiz mumkin"
                        : "Telefon raqamingiz orqali tez va xavfsiz ro'yxatdan o'ting"}
                </p>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-4 pb-8">
                {phone ? (
                    // Success State
                    <div className="max-w-md mx-auto space-y-6 animate-fade-in">
                        {/* Success Card */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center shadow-lg">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCheckCircle className="w-8 h-8" />
                            </div>

                            <h2 className="text-2xl font-bold mb-2">Muvaffaqiyatli ulandi!</h2>
                            <p className="opacity-90">Telefon raqamingiz xavfsiz saqlandi</p>

                            <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                <div className="flex items-center justify-center space-x-3">
                                    <GiSmartphone className="w-8 h-8" />
                                    <div className="text-left">
                                        <p className="text-sm opacity-80">Telefon raqamingiz</p>
                                        <p className="text-xl font-bold tracking-wider">{phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Countdown */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                            <div className="flex flex-col items-center space-y-3">
                                <FaSpinner className="w-8 h-8 text-blue-600 animate-spin" />
                                <div>
                                    <p className="text-gray-700 font-medium">Asosiy sahifaga yo'naltirilmoqda...</p>
                                    <div className="flex items-center justify-center space-x-2 mt-2">
                                        {[...Array(countdown)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                        ))}
                                    </div>
                                    <p className="text-3xl font-bold text-blue-600 mt-2">{countdown}s</p>
                                </div>
                            </div>
                        </div>

                        {/* Demo Button */}
                        <button
                            onClick={() => setPhone(null)}
                            className="w-full py-3.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200"
                        >
                            Boshqa raqam ulash
                        </button>
                    </div>
                ) : (
                    // Initial State
                    <div className="max-w-md mx-auto space-y-6">
                        {/* Benefits List */}
                        <div className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`${benefit.bgColor} border ${benefit.borderColor} rounded-xl p-4 hover:shadow-md transition-shadow duration-200`}
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            {benefit.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
                                            <p className="text-sm text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <FaShieldAlt className="w-4 h-4" />
                                    <span>{error}</span>
                                </div>
                            </div>
                        )}

                        {/* Main Button */}
                        <div className="space-y-4">
                            <button
                                onClick={demoSuccess} // For demo - change to requestPhone for production
                                disabled={loading}
                                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden group ${loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white hover:shadow-xl'
                                    }`}
                            >
                                {/* Shimmer effect */}
                                {!loading && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                )}

                                <div className="relative z-10 flex items-center space-x-3">
                                    {loading ? (
                                        <>
                                            <FaSpinner className="w-5 h-5 animate-spin" />
                                            <span>Yuklanmoqda...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPhoneAlt className="w-5 h-5" />
                                            <span>Telefon raqamni ulash</span>
                                            <FaArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </div>
                            </button>

                            {/* Alternative via Telegram */}
                            <button
                                onClick={requestPhone}
                                className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                            >
                                <FaTelegram className="w-5 h-5" />
                                <span>Telegram orqali ulash</span>
                            </button>
                        </div>

                        {/* Privacy Note */}
                        <div className="text-center pt-4">
                            <div className="inline-flex items-center space-x-2 text-xs text-gray-500 mb-2">
                                <FaShieldAlt className="w-3 h-3" />
                                <span>Maxfiylik va xavfsizlik</span>
                            </div>
                            <p className="text-xs text-gray-500 px-4">
                                "Telefon raqamni ulash" tugmasini bosish orqali siz{" "}
                                <button className="text-blue-600 font-medium hover:underline">
                                    foydalanish shartlari
                                </button>{" "}
                                va{" "}
                                <button className="text-blue-600 font-medium hover:underline">
                                    maxfiylik siyosati
                                </button>{" "}
                                ga rozilik bildirasiz
                            </p>
                        </div>

                        {/* Demo Warning */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <div className="flex items-start space-x-3">
                                <FaShieldAlt className="w-5 h-5 text-amber-600 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-amber-800 mb-1">Demo rejim</p>
                                    <p className="text-xs text-amber-700">
                                        Hozirda demo rejimda ishlayapsiz. Real loyiha uchun Telegram bot orqali haqiqiy telefon raqamingizni ulashingiz mumkin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-4 py-6 border-t border-gray-200">
                <div className="max-w-md mx-auto text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <FaShieldAlt className="w-3 h-3" />
                        <span>© 2024 Timey. Barcha huquqlar himoyalangan.</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
        </div>
    );
}