import React from 'react'
import { ArrowLeft, MapPin, Search, Star, Filter } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';


function MasterCard({ key }) {
    const navigate = useNavigate()
    return (
        <div
            key={key}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                        J
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Jamshid Tursunov</p>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-gray-600">Elektrik</p>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <p className="text-xs text-gray-600">1.2 km</p>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                Bugun bo'sh
                            </span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                                −15% chegirma
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
                    <Star size={12} className="fill-amber-500" />
                    <span className="text-xs font-bold">4.8</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <div>
                    <p className="text-xs text-gray-500">Eng yaqin vaqt</p>
                    <p className="text-sm font-medium text-gray-800">15:30</p>
                </div>
                <Link to={'/masterProfile'}>
                    <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:shadow-md transition-shadow">
                        Navbatga yozilish
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MasterCard