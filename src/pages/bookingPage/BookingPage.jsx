import React from "react";
import { ArrowLeft, Star, Clock, Calendar, MapPin, Edit2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-28">

            {/* HEADER */}
            <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-3 sticky top-0 z-10">
                <Link to={-1}>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <ArrowLeft size={20} className="text-gray-600" />
                    </button>
                </Link>
                <h1 className="text-base font-semibold text-gray-800">
                    Navbatga yozilish
                </h1>
            </div>

            {/* MASTER CARD */}
            <div className="px-4 mt-6">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-4 border border-indigo-200 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                        J
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-gray-800">Jamshid Tursunov</p>
                        <p className="text-sm text-gray-600">Elektrik</p>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                            <Star size={14} className="fill-amber-500 text-amber-500" />
                            <span className="font-medium text-gray-700">4.8</span>
                            <span className="text-gray-400">•</span>
                            <MapPin size={14} className="text-gray-400" />
                            <span className="text-gray-500">1.2 km</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROBLEM INPUT */}
            <div className="px-4 mt-8">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700">
                        Muammo tavsifi
                    </h3>
                    <button className="text-indigo-600">
                        <Edit2 size={16} />
                    </button>
                </div>
                <textarea
                    rows={3}
                    placeholder="Masalan: rozetka ishlamayapti"
                    className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none placeholder:text-gray-400"
                />
            </div>

            {/* DATE SELECT */}
            <div className="px-4 mt-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Calendar size={16} className="text-indigo-600" />
                    Sana
                </h3>
                <div className="grid grid-cols-3 gap-2">
                    <button className="py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all">
                        Bugun
                    </button>
                    <button className="py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 hover:border-indigo-300 transition-colors">
                        Ertaga
                    </button>
                    <button className="py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 hover:border-indigo-300 transition-colors">
                        Sana tanlash
                    </button>
                </div>
            </div>

            {/* TIME SLOTS */}
            <div className="px-4 mt-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Clock size={16} className="text-indigo-600" />
                    Bo'sh vaqtlar
                </h3>
                <div className="grid grid-cols-4 gap-2">
                    {["14:00", "15:30", "17:00", "18:30"].map((time, index) => (
                        <button
                            key={time}
                            className={`px-3 py-3 rounded-xl text-sm font-medium transition-all flex flex-col items-center ${
                                index === 1 
                                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:border-indigo-300'
                            }`}
                        >
                            <Clock size={14} className="mb-1" />
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            {/* PRICE INFO */}
            <div className="px-4 mt-8 pb-20">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={18} className="text-indigo-600" />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-indigo-800 mb-1">
                                Narx to'g'risida
                            </h4>
                            <p className="text-xs text-indigo-700">
                                Narx ish joyida kelishiladi. Ko'rsatilgan vaqt taxminiy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FIXED ACTION BUTTON */}
            <div className="fixed bottom-[36px] left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-8 px-4">
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-xs text-gray-500">Taxminiy narx</p>
                            <p className="text-lg font-bold text-gray-900">50 000 so'm</p>
                        </div>
                        <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow flex items-center gap-2">
                            <CheckCircle size={18} />
                            Buyurtmani yuborish
                        </button>
                    </div>
                    <p className="text-xs text-center text-gray-500">
                        Usta 15 daqiqa ichida javob beradi
                    </p>
                </div>
            </div>

        </div>
    );
}