import React, { useEffect, useState } from "react";
import { Phone, Shield, CheckCircle, ArrowRight, Loader2, Smartphone } from "lucide-react";

export default function PhoneNumber() {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor("#4F46E5"); // Indigo color
      window.Telegram.WebApp.setBackgroundColor("#F9FAFB"); // Gray-50
    }
  }, []);

  const requestPhone = () => {
    setLoading(true);
    setError(null);

    if (!window.Telegram?.WebApp) {
      setError("Telegram WebApp not available");
      setLoading(false);
      return;
    }

    window.Telegram.WebApp.requestContact((result) => {
      setLoading(false);

      if (result?.phone_number) {
        setPhone(result.phone_number);
        
        // Success animation
        setTimeout(() => {
          if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
          }
        }, 2000);
      } else {
        setError("Telefon raqam olinmadi. Iltimos, qayta urinib ko'ring.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4 py-8">
      
      {/* Success State */}
      {phone ? (
        <div className="w-full max-w-md text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Muvaffaqiyatli!
            </h2>
            <p className="text-gray-600 mb-6">
              Telefon raqamingiz qabul qilindi
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Smartphone className="text-green-600" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Telefon raqamingiz</p>
                <p className="text-lg font-bold text-gray-800">{phone}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Loader2 className="animate-spin" size={16} />
            <span>Dasturga yo'naltirilmoqda...</span>
          </div>
        </div>
      ) : (
        /* Initial State */
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Phone className="text-white" size={48} />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Telefon raqamingizni ulang
            </h1>
            
            <p className="text-gray-600 mb-2">
              Xavfsiz va tez ro'yxatdan o'tish uchun
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-indigo-600" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 mb-1">100% xavfsiz</h4>
                <p className="text-sm text-gray-600">
                  Raqamingiz faqat tizimda saqlanadi, uchinchi shaxslarga berilmaydi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 mb-1">1 bosqichda ro'yxatdan o'tish</h4>
                <p className="text-sm text-gray-600">
                  Qo'shimcha parol yoki kod kiritishingiz shart emas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ArrowRight className="text-blue-600" size={20} />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 mb-1">Tezkor kirish</h4>
                <p className="text-sm text-gray-600">
                  Navbatga yozilish va boshqa xizmatlardan tez foydalaning
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={requestPhone}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Yuklanmoqda...</span>
              </>
            ) : (
              <>
                <Phone size={20} />
                <span>Telefon raqamni ulash</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-center text-gray-500 mt-4 px-4 pb-12">
            "Telefon raqamni ulash" tugmasini bosish orqali siz 
            <span className="font-medium"> foydalanish shartlari</span> va 
            <span className="font-medium"> maxfiylik siyosati</span>ga rozilik bildirasiz
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}