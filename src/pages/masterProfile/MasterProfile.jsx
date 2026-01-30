import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaAward,
  FaCalendarAlt,
  FaShieldAlt,
  FaPhoneAlt,
  FaCommentAlt,
  FaUserCircle,
  FaFire,
  FaBolt,
  FaWrench,
  FaMoneyBillWave,
  FaThumbsUp,
  FaChevronRight
} from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

export default function MasterProfile() {
  const [selectedTime, setSelectedTime] = useState("15:30");

  const services = [
    { name: "Rozetka ta'miri", price: "50,000", time: "30 min", popular: true, icon: <FaBolt className="text-yellow-500" /> },
    { name: "Sim tortish (1m)", price: "80,000", time: "1 soat", popular: false, icon: <GiElectric className="text-blue-500" /> },
    { name: "Chiroq o'rnatish", price: "40,000", time: "20 min", popular: true, icon: <FaWrench className="text-green-500" /> },
    { name: "Elektr paneli", price: "120,000", time: "2 soat", popular: false, icon: <GiElectric className="text-purple-500" /> },
  ];

  const timeSlots = ["14:00", "15:30", "17:00", "18:30", "19:00", "20:00", "21:00", "22:00"];

  const reviews = [
    { name: "Ali Valiyev", rating: 5.0, comment: "Juda sifatli ishladi. Tez yetib keldi va muammoni hal qildi.", time: "2 kun oldin" },
    { name: "Dilshod Rajabov", rating: 4.5, comment: "Professional ustaman. Narxi ham o'rtacha, ishi ham yaxshi.", time: "1 hafta oldin" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 pt-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/searchpage/search">
              <button className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-colors duration-200">
                <FaArrowLeft className="w-5 h-5 text-white" />
              </button>
            </Link>
            <h1 className="text-lg font-bold text-white">Usta Profili</h1>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Master Info */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30 flex items-center justify-center">
                <FaUserCircle className="w-14 h-14 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                <FaCheckCircle className="w-3 h-3" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">Jamshid Tursunov</h2>
              <p className="text-sm text-white/90 mt-1">Elektrik mutaxassisi • 5 yil tajriba</p>

              <div className="flex items-center space-x-3 mt-3">
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <FaStar className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="font-semibold text-white">4.8</span>
                  <span className="text-xs text-white/80">(124)</span>
                </div>

                <div className="flex items-center space-x-1 text-sm text-white/90">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  <span>1.2 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="px-4 -mt-4 relative z-20">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
            <div className="flex items-center justify-around">
              <button className="flex flex-col items-center space-y-1.5 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-gray-700">Qo'ng'iroq</span>
              </button>

              <div className="h-10 w-px bg-gray-200"></div>

              <button className="flex flex-col items-center space-y-1.5 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                <div className="p-3 bg-green-50 rounded-xl">
                  <FaCommentAlt className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs font-medium text-gray-700">Xabar</span>
              </button>

              <div className="h-10 w-px bg-gray-200"></div>

              <button className="flex flex-col items-center space-y-1.5 p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                <div className="p-3 bg-amber-50 rounded-xl">
                  <FaCalendarAlt className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs font-medium text-gray-700">Bron</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pt-4 space-y-4">
        {/* Badges */}
        <div className="flex overflow-x-auto space-x-2 pb-2">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-xl whitespace-nowrap">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Bugun bo'sh</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-3 py-2 rounded-xl whitespace-nowrap">
            <FaAward className="w-4 h-4" />
            <span className="text-sm font-medium">15% chegirma</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-xl whitespace-nowrap">
            <FaShieldAlt className="w-4 h-4" />
            <span className="text-sm font-medium">Kafolatlangan</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-xl whitespace-nowrap">
            <FaFire className="w-4 h-4" />
            <span className="text-sm font-medium">Top reyting</span>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Usta haqida</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            5 yillik tajribaga ega elektrik ustaman. Tez yetib boraman,
            toza va sifatli ishlayman. Mijozlar bilan muomala yaxshi.
            Barcha turdagi elektr muammolari ustida ishlayman.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 font-medium">Ish tajribasi</p>
              <div className="flex items-center space-x-2 mt-1">
                <FaClock className="w-4 h-4 text-blue-600" />
                <p className="text-lg font-bold text-gray-800">5 yil</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 font-medium">Topildi</p>
              <div className="flex items-center space-x-2 mt-1">
                <FaThumbsUp className="w-4 h-4 text-green-600" />
                <p className="text-lg font-bold text-gray-800">245 marta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Xizmatlar va narxlar</h3>
            <span className="text-xs text-gray-500 font-medium">boshlang'ich narx</span>
          </div>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-gray-100 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{service.name}</h4>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-gray-500">⏱️ {service.time}</span>
                      {service.popular && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          Mashhur
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{service.price} so'm</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time Slots Section */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <FaClock className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-800">Bo'sh vaqtlar</h3>
            </div>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
              Barchasi
            </button>
          </div>

          <div className="mb-4">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl">
              <FaCalendarAlt className="w-4 h-4" />
              <span className="text-sm font-medium">Bugun, 22 Yanvar</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${selectedTime === time
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border hover:border-blue-200"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Mijoz fikrlari</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                <FaStar className="w-4 h-4 text-amber-500 fill-current" />
                <span className="font-bold text-gray-800">4.8</span>
                <span className="text-sm text-gray-500">(124)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <FaUserCircle className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(review.rating)
                                ? "text-amber-500 fill-current"
                                : "text-gray-300"
                              }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{review.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-xs text-gray-500 mt-2">{review.time}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 text-center text-blue-600 text-sm font-medium py-3 hover:bg-blue-50 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
            <span>Barcha fikrlarni ko'rish</span>
            <FaChevronRight className="w-3 h-3" />
          </button>
        </section>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed mb-16 bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-500">Jami narx</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-gray-800">50,000</span>
                <span className="text-sm text-gray-500">so'm</span>
              </div>
            </div>

            <Link to="/bookingPage">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                <FaCheckCircle className="w-5 h-5" />
                <span>Navbatga yozilish</span>
              </button>
            </Link>
          </div>

          <p className="text-xs text-center text-gray-500">
            <FaMoneyBillWave className="inline w-3 h-3 mr-1" />
            Narx xizmat turiga qarab o'zgarishi mumkin
          </p>
        </div>
      </div>
    </div>
  );
}