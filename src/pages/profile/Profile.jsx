import React, { useState } from "react";
import {
    FaUserCircle,
    FaPhoneAlt,
    FaTelegram,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaHistory,
    FaCog,
    FaBell,
    FaHeadset,
    FaTrashAlt,
    FaEdit,
    FaCheck,
    FaTimes,
    FaChevronRight,
    FaExclamationTriangle,
    FaHome,
    FaSearch,
    FaBookmark,
    FaUser
} from "react-icons/fa";
import { GiHairStrands, GiElectric } from "react-icons/gi";

export default function UserProfilePage() {
    const [user, setUser] = useState({
        id: "hidden-system-id",
        fullName: "John Doe",
        telegramUsername: "@johndoe",
        telegramPhoto: null,
        phoneNumber: "+998 90 *** ** 67",
        location: "Tashkent, Chilonzor",
        preferences: {
            serviceType: "barber",
            city: "Tashkent",
            district: "Chilonzor",
            notifications: true
        },
        bookings: {
            total: 12,
            active: 1,
            lastBooking: "2024-01-20"
        }
    });

    const [editingField, setEditingField] = useState(null);
    const [tempPhone, setTempPhone] = useState("");
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);

    const isEmptyPhone = !user.phoneNumber || user.phoneNumber.includes("***");
    const hasBookings = user.bookings.total > 0;

    const serviceTypes = [
        { id: "barber", name: "Sartaroshlik", icon: <GiHairStrands className="w-5 h-5 text-violet-600" /> },
        { id: "electrician", name: "Elektrik", icon: <GiElectric className="w-5 h-5 text-violet-600" /> },
        { id: "plumber", name: "Santexnik", icon: "🔧" },
        { id: "cleaner", name: "Tozalovchi", icon: "🧹" },
        { id: "all", name: "Barchasi", icon: "📋" }
    ];

    const handleAddPhone = () => {
        if (editingField === 'phone') {
            if (tempPhone.length >= 9) {
                setUser(prev => ({ ...prev, phoneNumber: tempPhone }));
                setEditingField(null);
                setTempPhone("");
            }
        } else {
            setEditingField('phone');
            setTempPhone("");
        }
    };

    const handlePreferenceChange = (type, value) => {
        setUser(prev => ({
            ...prev,
            preferences: {
                ...prev.preferences,
                [type]: value
            }
        }));
    };

    const togglePhoneVisibility = () => {
        setPhoneVisible(!phoneVisible);
    };

    const getPhoneDisplay = () => {
        if (isEmptyPhone) return "Telefon raqam qo'shilmagan";
        if (phoneVisible) return user.phoneNumber;
        return user.phoneNumber.replace(/\d(?=\d{2})/g, '*');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Fixed but with proper z-index */}
            <div className="sticky top-0 z-30 bg-gradient-to-r from-violet-600 to-indigo-700 px-4 pt-6 pb-8 text-white">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        {user.telegramPhoto ? (
                            <img
                                src={user.telegramPhoto}
                                alt="Profile"
                                className="w-20 h-20 rounded-full border-4 border-white/30"
                            />
                        ) : (
                            <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full border-4 border-white/30 flex items-center justify-center">
                                <FaUserCircle className="w-14 h-14 text-white" />
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{user.fullName}</h1>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm opacity-90">Timey mijoz</span>
                            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                            <span className="text-sm opacity-90">ID: •••••••</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Proper padding for fixed bottom nav */}
            <main className="px-4 pt-4 pb-24 space-y-4">
                {/* Contact Information Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <div className="p-2 bg-violet-50 rounded-lg mr-3">
                            <FaPhoneAlt className="w-5 h-5 text-violet-600" />
                        </div>
                        Aloqa ma'lumotlari
                    </h2>

                    <div className="space-y-4">
                        {/* Phone Number */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <FaPhoneAlt className="w-4 h-4 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Telefon raqam</p>
                                    <p className={`font-medium ${isEmptyPhone ? 'text-gray-400' : 'text-gray-800'}`}>
                                        {getPhoneDisplay()}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                {!isEmptyPhone && (
                                    <button
                                        onClick={togglePhoneVisibility}
                                        className="text-sm text-violet-600 hover:text-violet-700"
                                    >
                                        {phoneVisible ? 'Yashirish' : 'Ko\'rsatish'}
                                    </button>
                                )}
                                <button
                                    onClick={handleAddPhone}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isEmptyPhone
                                            ? 'bg-violet-600 text-white hover:bg-violet-700'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {isEmptyPhone ? 'Qo\'shish' : 'O\'zgartirish'}
                                </button>
                            </div>
                        </div>

                        {/* Phone Input Modal - Higher z-index when active */}
                        {editingField === 'phone' && (
                            <div className="relative z-40">
                                <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
                                    <div className="bg-white rounded-2xl p-5 w-full max-w-md animate-scale-in">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-bold text-gray-800">Telefon raqamni kiriting</h3>
                                            <button
                                                onClick={() => setEditingField(null)}
                                                className="p-2 hover:bg-gray-100 rounded-lg"
                                            >
                                                <FaTimes className="w-5 h-5 text-gray-500" />
                                            </button>
                                        </div>
                                        <input
                                            type="tel"
                                            value={tempPhone}
                                            onChange={(e) => setTempPhone(e.target.value)}
                                            placeholder="+998 90 123 45 67"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                                            autoFocus
                                        />
                                        <div className="flex items-center justify-between mt-4">
                                            <p className="text-sm text-gray-500">
                                                Faqat bron qilish vaqti kerak
                                            </p>
                                            <button
                                                onClick={handleAddPhone}
                                                disabled={tempPhone.length < 9}
                                                className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                Saqlash
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Telegram Username */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <FaTelegram className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Telegram username</p>
                                    <p className="font-medium text-gray-800">{user.telegramUsername}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">Auto-filled</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <FaMapMarkerAlt className="w-4 h-4 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Joylashuv</p>
                                    <p className="font-medium text-gray-800">{user.location || "Belgilanmagan"}</p>
                                </div>
                            </div>
                            <button className="text-sm text-violet-600 hover:text-violet-700">
                                O'zgartirish
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <div className="p-2 bg-violet-50 rounded-lg mr-3">
                            <FaCalendarAlt className="w-5 h-5 text-violet-600" />
                        </div>
                        Bronlar statistikasi
                    </h2>

                    {hasBookings ? (
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-violet-50 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-violet-700">{user.bookings.total}</div>
                                <div className="text-sm text-gray-600 mt-1">Jami bron</div>
                            </div>

                            <div className="bg-amber-50 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-amber-700">{user.bookings.active}</div>
                                <div className="text-sm text-gray-600 mt-1">Faol bron</div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-4 text-center col-span-2">
                                <div className="text-lg font-bold text-gray-800">So'ngi bron</div>
                                <div className="text-gray-600 mt-1">
                                    {new Date(user.bookings.lastBooking).toLocaleDateString('uz-UZ', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FaCalendarAlt className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="font-medium text-gray-700 mb-1">Hozircha bronlaringiz yo'q</h3>
                            <p className="text-sm text-gray-500">Birorta ham bron qilmagansiz</p>
                        </div>
                    )}

                    <button className="w-full mt-4 flex items-center justify-between py-3 px-4 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                            <FaHistory className="w-4 h-4" />
                            <span className="font-medium">Barcha bronlar tarixi</span>
                        </div>
                        <FaChevronRight className="w-3 h-3 text-gray-400" />
                    </button>
                </div>

                {/* Preferences */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <div className="p-2 bg-violet-50 rounded-lg mr-3">
                            <FaCog className="w-5 h-5 text-violet-600" />
                        </div>
                        Sozlamalar
                    </h2>

                    <div className="space-y-4">
                        {/* Service Type Preference */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Afzal ko'rgan xizmat turi
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {serviceTypes.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => handlePreferenceChange('serviceType', service.id)}
                                        className={`p-3 rounded-xl transition-all ${user.preferences.serviceType === service.id
                                                ? 'bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-sm'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex flex-col items-center space-y-1">
                                            {typeof service.icon === 'string' ? (
                                                <span className="text-2xl">{service.icon}</span>
                                            ) : (
                                                <div className="mb-1">{service.icon}</div>
                                            )}
                                            <span className="text-sm font-medium text-center">{service.name}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* City & District */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Shahar</label>
                                <select
                                    value={user.preferences.city}
                                    onChange={(e) => handlePreferenceChange('city', e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                                >
                                    <option value="Tashkent">Toshkent</option>
                                    <option value="Samarkand">Samarqand</option>
                                    <option value="Bukhara">Buxoro</option>
                                    <option value="Andijan">Andijon</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Tuman</label>
                                <select
                                    value={user.preferences.district}
                                    onChange={(e) => handlePreferenceChange('district', e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
                                >
                                    <option value="Chilonzor">Chilonzor</option>
                                    <option value="Yunusobod">Yunusobod</option>
                                    <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
                                    <option value="Shayxontohur">Shayxontohur</option>
                                </select>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <FaBell className="w-4 h-4 text-gray-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Bildirishnomalar</p>
                                    <p className="text-sm text-gray-500">Telegram orqali</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={user.preferences.notifications}
                                    onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Harakatlar</h2>

                    <div className="space-y-2">
                        <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-violet-50 rounded-lg">
                                    <FaHistory className="w-4 h-4 text-violet-600" />
                                </div>
                                <span className="font-medium text-gray-800">Mening bronlarim</span>
                            </div>
                            <FaChevronRight className="w-3 h-3 text-gray-400" />
                        </button>

                        <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <FaHeadset className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-800">Qo'llab-quvvatlash</span>
                            </div>
                            <FaChevronRight className="w-3 h-3 text-gray-400" />
                        </button>

                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-red-50 rounded-lg">
                                    <FaTrashAlt className="w-4 h-4 text-red-600" />
                                </div>
                                <span className="font-medium text-red-600">Hisobni o'chirish</span>
                            </div>
                            <FaChevronRight className="w-3 h-3 text-red-400" />
                        </button>
                    </div>
                </div>

                {/* Empty Phone State Info */}
                {isEmptyPhone && editingField !== 'phone' && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
                        <div className="flex items-start space-x-3">
                            <FaExclamationTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-amber-800 mb-1">Telefon raqam kerak emas</p>
                                <p className="text-sm text-amber-700">
                                    Telefon raqamingiz faqat bron qilish vaqtida talab qilinadi.
                                    Hozir qo'shmasangiz ham bron qila olasiz.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

      

            {/* Delete Account Confirmation Modal - Highest z-index */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md animate-scale-in">
                        <div className="text-center mb-4">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <FaExclamationTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Hisobni o'chirishni tasdiqlaysizmi?</h3>
                            <p className="text-gray-600 text-sm">
                                Barcha ma'lumotlaringiz va bronlar tarixi butunlay o'chiriladi.
                                Bu harakatni ortga qaytarib bo'lmaydi.
                            </p>
                        </div>

                        <div className="flex space-x-3 mt-6">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={() => {
                                    // Handle account deletion
                                    setShowDeleteConfirm(false);
                                }}
                                className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-xl hover:shadow-md transition-all"
                            >
                                O'chirish
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
        </div>
    );
}