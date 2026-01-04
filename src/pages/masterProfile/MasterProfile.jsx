import React from "react"
import { ArrowLeft, Star, MapPin, Clock, CheckCircle, Award, Calendar, Shield, Phone, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function MasterProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-28">

      {/* HEADER WITH GRADIENT */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 pt-4 pb-6 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/searchpage/search">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all">
              <ArrowLeft size={20} className="text-white" />
            </button>
          </Link>
          <h1 className="text-lg font-semibold">
            Usta profili
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              J
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold">
              Jamshid Tursunov
            </h2>
            <p className="text-sm opacity-90">
              Elektrik usta • 5 yillik tajriba
            </p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <Star size={14} className="fill-white" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-xs opacity-80 ml-1">(124)</span>
              </div>

              <div className="flex items-center gap-1 text-sm opacity-90">
                <MapPin size={14} />
                <span>1.2 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="px-4 -mt-4 relative z-10">
        <div className="flex items-center justify-between bg-white rounded-2xl p-3 shadow-lg border border-gray-200/50">
          <button className="flex flex-col items-center gap-1 p-2">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
              <Phone className="text-indigo-600" size={18} />
            </div>
            <span className="text-xs text-gray-600">Qo'ng'iroq</span>
          </button>

          <div className="h-8 w-px bg-gray-200"></div>

          <button className="flex flex-col items-center gap-1 p-2">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <MessageCircle className="text-green-600" size={18} />
            </div>
            <span className="text-xs text-gray-600">Xabar</span>
          </button>

          <div className="h-8 w-px bg-gray-200"></div>

          <button className="flex flex-col items-center gap-1 p-2">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <Calendar className="text-amber-600" size={18} />
            </div>
            <span className="text-xs text-gray-600">Navbat</span>
          </button>
        </div>
      </div>

      {/* BADGES */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
            <Clock size={14} />
            <span>Bugun bo'sh</span>
          </div>
          <div className="flex items-center gap-1 bg-red-100 text-red-800 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
            <Award size={14} />
            <span>−15% chegirma</span>
          </div>
          <div className="flex items-center gap-1 bg-indigo-100 text-indigo-800 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
            <Shield size={14} />
            <span>Kafolatlangan</span>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Usta haqida
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            5 yillik tajribaga ega elektrik ustaman. Tez yetib boraman,
            toza va sifatli ishlayman. Mijozlar bilan muomala yaxshi.
            Barcha turdagi elektr muammolari ustida ishlayman.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Ish tajribasi</p>
              <p className="font-semibold text-gray-800">5 yil</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Topildi</p>
              <p className="font-semibold text-gray-800">245 marta</p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Xizmatlar va narxlar
            </h3>
            <span className="text-xs text-gray-500">boshlang'ich narx</span>
          </div>

          <div className="space-y-3">
            {[
              { name: "Rozetka tuzatish", price: "50 000 so'm", time: "30 min", popular: true },
              { name: "Sim tortish (1m)", price: "80 000 so'm", time: "1 soat", popular: false },
              { name: "Chiroq o'rnatish", price: "40 000 so'm", time: "20 min", popular: true },
              { name: "Elektr paneli", price: "120 000 so'm", time: "2 soat", popular: false },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800">
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                        Mashhur
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    ⏱️ {item.time}
                  </p>
                </div>
                <span className="font-bold text-gray-900">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AVAILABLE TIME SLOTS */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Clock size={18} />
              Bo'sh vaqtlar
            </h3>
            <button className="text-indigo-600 text-sm font-medium">
              Barchasi
            </button>
          </div>

          <div className="mb-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg">
              <Calendar size={14} />
              <span className="text-sm font-medium">Bugun, 22 Yanvar</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["14:00", "15:30", "17:00", "18:30", "19:00", "20:00", "21:00", "22:00"].map((time, i) => (
              <button
                key={i}
                className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${i === 1
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border hover:border-indigo-200'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS PREVIEW */}
      <div className="px-4 mt-4 mb-6 pb-20">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Fikrlar
            </h3>
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-amber-500 text-amber-500" />
              <span className="font-semibold text-gray-800">4.8</span>
              <span className="text-sm text-gray-500">(124)</span>
            </div>
          </div>

          <div className="space-y-3">
            {[1, 2].map((_, i) => (
              <div key={i} className="pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">Ali Valiyev</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-500 text-amber-500" />
                    <span className="text-xs font-medium">5.0</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Juda sifatli ishladi. Tez yetib keldi va muammoni hal qildi.
                </p>
                <p className="text-xs text-gray-500 mt-2">2 kun oldin</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 text-center text-indigo-600 text-sm font-medium py-2 rounded-lg hover:bg-indigo-50 transition-colors">
            Barcha fikrlarni ko'rish →
          </button>
        </div>
      </div>

      {/* FIXED BOTTOM CTA */}
      <div className="fixed bottom-12 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-4 pb-6 px-4">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200/50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-500">Jami narx</p>
              <p className="text-lg font-bold text-gray-900">50 000 so'm</p>
            </div>
            <Link to={'/bookingPage'}>
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow flex items-center gap-2">
                <CheckCircle size={18} />
                Navbatga yozilish
              </button>
            </Link>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Narx xizmat turiga qarab o'zgarishi mumkin
          </p>
        </div>
      </div>

    </div>
  )
}