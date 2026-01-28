import { Bell, MapPin, Search, Home, Settings, User } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MasterCard from "../../components/masterCard/MasterCard";

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* HEADER */}
      <div className="bg-white px-4 pt-4 pb-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Joylashuv</p>
            <div className="flex items-center text-sm font-semibold text-gray-800">
              <MapPin size={16} className="text-indigo-600 mr-1" />
              Toshkent, Chilonzor
            </div>
          </div>
          <div className="relative">
            <Bell className="text-gray-600" size={20} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-3 flex items-center bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm">
          <Search size={18} className="text-gray-400" />
          <input
            onClick={(() => { navigate("/searchpage/search") })}
            placeholder="Qaysi sartarosh kerak?"
            className="ml-2 w-full bg-transparent outline-none text-sm placeholder-gray-500"
          />
        </div>
      </div>

      {/* TOP CARDS */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        <div onClick={(() => {
          navigate('/searchpage/near')
        })} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <p className="font-semibold text-gray-800">Sartarosh topish</p>
          <p className="text-xs text-gray-500 mt-1">Eng yaqin</p>
        </div>

        <div onClick={(() => {
          navigate('/searchpage/discount')
        })} className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white shadow-sm hover:shadow-md transition-shadow">
          <p className="font-semibold">Bugun bo'sh sartarosh</p>
          <p className="text-xs opacity-90 mt-1">⚡ Tezkor (chegirmada)</p>
        </div>
      </div>

      {/* AVAILABLE MASTERS */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 text-lg">
            <span className="text-indigo-600 mr-1">⚡</span>
            Bugun bo'sh sartaroshlar
          </h3>
          <button className="text-indigo-600 text-sm font-medium">Barchasi</button>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <MasterCard key={i} />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="px-4 mt-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 text-white">
          <div className="relative">
            <h3 className="text-xl font-bold mb-2">
              Usta bo'ling — bo'sh vaqtingizni soting
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Ko'proq mijoz, kamroq bekor vaqt. Har bir soatda qo'shimcha daromad toping
            </p>
            <div className="flex gap-3">
              <button onClick={(() => { window.location.href = "https://timey-landingpage-omega.vercel.app/" })} className="bg-white text-indigo-600 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors flex-1">
                Usta sifatida qo'shilish
              </button>
              <button className="bg-white/20 border border-white/30 font-medium px-3 py-2.5 rounded-lg text-sm hover:bg-white/30 transition-colors">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}