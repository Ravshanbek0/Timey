import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaArrowLeft,
    FaStar,
    FaClock,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaEdit,
    FaCheckCircle,
    FaUserCircle,
    FaInfoCircle,
    FaMoneyBillWave,
    FaShieldAlt,
    FaPhoneAlt,
    FaCommentAlt,
    FaThumbsUp,
    FaBolt,
    FaHistory,
    FaCalendarCheck
} from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

export default function BookingPage() {
    const navigate = useNavigate();
    const [problemDescription, setProblemDescription] = useState("");
    const [selectedDate, setSelectedDate] = useState("today");
    const [selectedTime, setSelectedTime] = useState("15:30");
    const [isEditing, setIsEditing] = useState(false);

    const dateOptions = [
        { id: "today", label: "Bugun", date: "24 Yanvar", day: "Chorshanba" },
        { id: "tomorrow", label: "Ertaga", date: "25 Yanvar", day: "Payshanba" },
        { id: "custom", label: "Boshqa", date: "Sana tanlash", day: "" }
    ];

    const timeSlots = [
        { time: "09:00", available: false, popular: false },
        { time: "10:30", available: true, popular: true },
        { time: "12:00", available: true, popular: false },
        { time: "14:00", available: true, popular: false },
        { time: "15:30", available: true, popular: true },
        { time: "17:00", available: false, popular: false },
        { time: "18:30", available: true, popular: false },
        { time: "20:00", available: true, popular: true }
    ];

    const masterStats = {
        completedJobs: 245,
        responseTime: "15 min",
        successRate: "98%",
        experience: "5 yil"
    };

    const handleSubmitBooking = () => {
        navigate('/sharephone');
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-32">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                        <Link to={-1}>
                            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200">
                                <FaArrowLeft className="w-5 h-5 text-gray-600" />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-base font-bold text-gray-800">Bron qilish</h1>
                            <p className="text-xs text-gray-500">Usta bilan kelishuv</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="px-1 pt-4 space-y-6">
                {/* Enhanced Master Info Card */}
                <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    {/* Master Header */}
                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-start space-x-4">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                                    <FaUserCircle className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-3 border-white">
                                    <FaShieldAlt className="w-3 h-3" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h2 className="font-bold text-xl text-gray-800">Jamshid Tursunov</h2>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <GiElectric className="w-5 h-5 text-blue-600" />
                                            <span className="font-medium text-gray-700">Elektrik mutaxassisi</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                                        <FaStar className="w-4 h-4 text-amber-500 fill-current" />
                                        <span className="font-bold text-gray-800">4.8</span>
                                        <span className="text-sm text-gray-600">(124)</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 mt-3">
                                    <div className="flex items-center space-x-1 text-gray-600">
                                        <FaMapMarkerAlt className="w-4 h-4" />
                                        <span className="text-sm">1.2 km • Chilonzor</span>
                                    </div>

                                    <div className="flex items-center space-x-1 text-green-600">
                                        <FaBolt className="w-3 h-3" />
                                        <span className="text-sm font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Master Statistics Grid */}
                    <div className="grid grid-cols-2 gap-3 p-5">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <FaHistory className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Bajargan ishlari</p>
                                    <p className="text-lg font-bold text-gray-800">{masterStats.completedJobs}+</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <FaClock className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Javob tezligi</p>
                                    <p className="text-lg font-bold text-gray-800">{masterStats.responseTime}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <FaThumbsUp className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Muvaffaqiyat</p>
                                    <p className="text-lg font-bold text-gray-800">{masterStats.successRate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-amber-100 rounded-lg">
                                    <FaCalendarCheck className="w-4 h-4 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Tajriba</p>
                                    <p className="text-lg font-bold text-gray-800">{masterStats.experience}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="p-5 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                            <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                                <FaPhoneAlt className="w-4 h-4" />
                                <span>Qo'ng'iroq qilish</span>
                            </button>

                            <button className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
                                <FaCommentAlt className="w-4 h-4" />
                                <span>Xabar yuborish</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Problem Description */}
                <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <FaEdit className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Muammo tavsifi</h3>
                                <p className="text-xs text-gray-500 mt-1">Muammoingizni batafsil yozing</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isEditing
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {isEditing ? "Saqlash" : "Tahrirlash"}
                        </button>
                    </div>

                    <textarea
                        value={problemDescription}
                        onChange={(e) => setProblemDescription(e.target.value)}
                        rows={4}
                        placeholder="Masalan: 
• Rozetka ishlamayapti, o'chib-ochib turadi
• Chiroyli elektr simlarini o'rnatish kerak
• Yotgi xonadagi chiroqlar ishlamayapti
• Elektr hisoblagich muammosi bor..."
                        className={`w-full rounded-xl border p-4 text-sm outline-none transition-all resize-none placeholder:text-gray-400 ${isEditing
                                ? 'border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white'
                                : 'border-gray-200 bg-gray-50'
                            }`}
                        readOnly={!isEditing}
                    />

                    {problemDescription && (
                        <div className="flex items-start space-x-2 mt-3 p-3 bg-blue-50 rounded-lg">
                            <FaInfoCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-blue-700">
                                Muammoning aniq tasviri usta tomonidan to'g'ri baholash va tez yechim topishga yordam beradi
                            </span>
                        </div>
                    )}
                </section>

                {/* Date Selection */}
                <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Sana tanlash</h3>
                            <p className="text-xs text-gray-500 mt-1">Usta kelishi mumkin bo'lgan vaqtlar</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {dateOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setSelectedDate(option.id)}
                                className={`w-full p-4 rounded-xl transition-all duration-200 flex items-center justify-between ${selectedDate === option.id
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md'
                                        : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                                    }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-lg ${selectedDate === option.id ? 'bg-white/20' : 'bg-white'
                                        }`}>
                                        <FaCalendarAlt className={`w-5 h-5 ${selectedDate === option.id ? 'text-white' : 'text-blue-600'
                                            }`} />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold">{option.label}</div>
                                        <div className={`text-sm ${selectedDate === option.id ? 'text-white/90' : 'text-gray-500'
                                            }`}>
                                            {option.date} {option.day && `• ${option.day}`}
                                        </div>
                                    </div>
                                </div>

                                {selectedDate === option.id && (
                                    <FaCheckCircle className="w-5 h-5 text-white" />
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Time Selection */}
                <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <FaClock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Vaqt tanlash</h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    {selectedDate === "today" ? "Bugun" : selectedDate === "tomorrow" ? "Ertaga" : "Tanlangan sana"}
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-sm font-medium text-gray-700">Tanlangan vaqt</div>
                            <div className="text-lg font-bold text-blue-600">{selectedTime}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                            <button
                                key={slot.time}
                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                disabled={!slot.available}
                                className={`p-3 rounded-xl transition-all duration-200 flex flex-col items-center ${!slot.available
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed relative'
                                        : selectedTime === slot.time
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md'
                                            : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                                    }`}
                            >
                                {slot.popular && slot.available && (
                                    <span className={`absolute -top-1 -right-1 text-xs px-1.5 py-0.5 rounded-full ${selectedTime === slot.time
                                            ? 'bg-white/30 text-white'
                                            : 'bg-amber-100 text-amber-700'
                                        }`}>
                                        ★
                                    </span>
                                )}

                                <FaClock className={`w-4 h-4 mb-1 ${selectedTime === slot.time ? 'text-white' : 'text-gray-500'
                                    }`} />

                                <span className="font-medium text-sm">{slot.time}</span>

                                {!slot.available && (
                                    <span className="text-xs mt-1 text-red-500">Band</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                            <span>Band vaqt</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <div className="w-3 h-3 bg-amber-100 rounded-full"></div>
                            <span>Mashhur vaqt</span>
                        </div>
                    </div>
                </section>

                {/* Price Info Card */}
                <section className="bg-gradient-to-r mb-16 from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 mb-6">
                    <div className="flex items-start space-x-3">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <FaMoneyBillWave className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-800 mb-3">Narx va shartlar</h4>
                            <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600"><strong>Bosh to'lov:</strong> Ish joyida kelishiladi</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600"><strong>Materiallar:</strong> Alohida hisoblanadi</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600"><strong>Kafolat:</strong> 30 kunlik ish kafolati</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-600"><strong>Tezkorlik:</strong> Usta 15 daqiqa ichida javob beradi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Enhanced Fixed Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-8 px-1">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Taxminiy narx</p>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-2xl font-bold text-gray-800">50,000</span>
                                <span className="text-gray-500">so'mdan</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-15% chegirma</span>
                                <span className="text-xs text-gray-500">ish joyida kelishiladi</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmitBooking}
                            disabled={!problemDescription.trim()}
                            className={`px-6 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all duration-200 relative overflow-hidden group ${problemDescription.trim()
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-xl hover:scale-[1.02]'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <FaCheckCircle className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Bron qilish</span>
                        </button>
                    </div>

                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                            <FaClock className="w-3 h-3" />
                            <span>Usta odatda 15 daqiqa ichida tasdiqlaydi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}