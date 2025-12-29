import React from 'react'
import { Bell, MapPin, Search, Home, Settings, User } from "lucide-react";


function Nav() {
    return (
        <div><div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 shadow-lg">
            <div className="flex justify-around items-center max-w-md mx-auto">
                <button className="flex flex-col items-center p-2">
                    <Home size={22} className="text-indigo-600 mb-1" />
                    <span className="text-xs text-indigo-600 font-medium">Bosh</span>
                </button>
                <button className="flex flex-col items-center p-2">
                    <Search size={22} className="text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">Qidirish</span>
                </button>
                <button className="flex flex-col items-center p-2">
                    <div className="relative">
                        <Bell size={22} className="text-gray-500 mb-1" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Bildirish</span>
                </button>
                <button className="flex flex-col items-center p-2">
                    <User size={22} className="text-gray-500 mb-1" />
                    <span className="text-xs text-gray-500">Profil</span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Nav