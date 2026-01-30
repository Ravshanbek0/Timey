import React from "react";
import { useNavigate } from "react-router-dom";
import MasterCard from "../../components/masterCard/MasterCard";

// Ikonlarni react-icons dan import qilamiz
import {
  FaBell,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaStar,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaHome,
  FaUser,
  FaCut,
  FaFemale,
  FaMale,
  FaChild,
  FaPalette,
  FaChartLine,
  FaBolt
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  // Mock data - professional formatda
  const popularServices = [
    { id: 1, name: "Erkaklar", count: "150+ usta", icon: <FaMale className="text-blue-600" />, color: "bg-blue-50" },
    { id: 2, name: "Ayollar", count: "120+ usta", icon: <FaFemale className="text-pink-600" />, color: "bg-pink-50" },
    { id: 3, name: "Bolalar", count: "80+ usta", icon: <FaChild className="text-green-600" />, color: "bg-green-50" },
    { id: 4, name: "Rang berish", count: "90+ usta", icon: <FaPalette className="text-purple-600" />, color: "bg-purple-50" },
  ];

  const availableMasters = [
    {
      id: 1,
      name: "Shavkat Rajabov",
      specialty: "Erkaklar sartaroshlik",
      rating: 4.9,
      reviews: 127,
      price: "50,000",
      available: true,
      experience: "5 yil"
    },
    {
      id: 2,
      name: "Dilnoza Xolmatova",
      specialty: "Ayollar sartaroshlik",
      rating: 4.8,
      reviews: 89,
      price: "80,000",
      available: true,
      experience: "7 yil"
    },
    {
      id: 3,
      name: "Javohir Karimov",
      specialty: "Bolalar sartaroshlik",
      rating: 5.0,
      reviews: 45,
      price: "40,000",
      available: true,
      experience: "3 yil"
    },
  ];

  const statistics = [
    { value: "850+", label: "Sartaroshlar", color: "text-blue-600", bg: "bg-blue-50" },
    { value: "12,500+", label: "Faol mijozlar", color: "text-green-600", bg: "bg-green-50" },
    { value: "45,000+", label: "Muvaffaqiyatli bron", color: "text-purple-600", bg: "bg-purple-50" },
    { value: "4.8/5.0", label: "Mijozlar bahosi", color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-4 py-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <FaMapMarkerAlt className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">MANZIL</p>
                <h1 className="text-sm font-semibold text-gray-800">Toshkent, Chilonzor</h1>
              </div>
            </div>

            <button className="relative p-2">
              <FaBell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              onClick={() => navigate("/searchpage/search")}
              placeholder="Sartarosh qidirish..."
              className="w-full pl-12 pr-12 py-3.5 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 placeholder-gray-500 cursor-pointer"
            />
            <button
              onClick={() => navigate("/searchpage/filter")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              <FaFilter className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {/* Quick Actions */}
        <section className="px-4 pt-6">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/searchpage/near')}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 text-left"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Yaqin atrofda</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">Eng yaqin sartaroshlar</p>
            </button>

            <button
              onClick={() => navigate('/searchpage/discount')}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-left text-white"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 bg-white/20 rounded-lg mr-3">
                  <FaBolt className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">Chegirmali</h3>
              </div>
              <p className="text-sm opacity-90 mt-1">Bugun bo'sh sartaroshlar</p>
            </button>
          </div>
        </section>

        {/* Popular Services */}
        {/* <section className="px-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Mashhur Xizmatlar</h2>
            <button 
              onClick={() => navigate('/services')}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Hammasi →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {popularServices.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className={`${service.color} p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 text-left`}
              >
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.count}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section> */}

        {/* Available Today */}
        <section className="px-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800 flex items-center">
                <FaClock className="w-5 h-5 text-green-500 mr-2" />
                Bugun Bo'sh
              </h2>
              <p className="text-sm text-gray-600 mt-1">Darhol bron qilish mumkin</p>
            </div>
            <button
              onClick={() => navigate('/available-today')}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Hammasi →
            </button>
          </div>

          <div className="space-y-3">
            {availableMasters.map((master) => (
              <div
                key={master.id}
                onClick={() => navigate(`/masterProfile`)}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <MasterCard />
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="px-4 mt-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FaChartLine className="w-5 h-5 text-gray-700 mr-2" />
              <h2 className="text-lg font-bold text-gray-800">Timey Statistikasi</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statistics.map((stat, index) => (
                <div key={index} className={`${stat.bg} rounded-lg p-4 text-center`}>
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Master CTA */}
        <section className="px-4 mt-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-start mb-4">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <FaCut className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Usta bo'ling!</h3>
                <p className="text-sm opacity-90">
                  Bo'sh vaqtingizni qo'shimcha daromadga aylantiring.
                  Har bir soat sizga yangi imkoniyatlar ochadi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs opacity-90">O'rtacha oylik daromad</div>
                <div className="text-lg font-bold mt-1">2.5 mln so'm</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs opacity-90">Faol mijozlar</div>
                <div className="text-lg font-bold mt-1">150+</div>
              </div>
            </div>

            <button
              onClick={() => window.open("https://timey-landingpage-omega.vercel.app/", "_blank")}
              className="w-full bg-white text-indigo-600 font-semibold py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Usta sifatida ro'yxatdan o'tish
            </button>
          </div>
        </section>

        {/* MasterCard Components */}
        <section className="px-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Tanlangan Sartaroshlar</h2>
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Hammasi →
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <MasterCard key={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}