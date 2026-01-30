import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaStar,
    FaMapMarkerAlt,
    FaTag,
    FaUserCircle,
    FaCheckCircle
} from 'react-icons/fa';

function MasterCard({ masterId, data = {} }) {
    const navigate = useNavigate();

    // Compact data for card view
    const masterData = {
        id: masterId || 1,
        name: data.name || "Jamshid Tursunov",
        profession: data.profession || "Elektrik",
        rating: data.rating || 4.8,
        distance: data.distance || "1.2 km",
        availableToday: data.availableToday !== undefined ? data.availableToday : true,
        discount: data.discount || 15,
        price: data.price || "85,000",
        nextAvailable: data.nextAvailable || "15:30",
        verified: data.verified !== undefined ? data.verified : true
    };

    const handleCardClick = () => {
        navigate(`/masterProfile`);
    };

    return (
        <div
            
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all duration-200 cursor-pointer"
        >
            {/* Top Row - Avatar, Name, Rating */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                            <FaUserCircle className="w-7 h-7 text-white" />
                        </div>
                        {masterData.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-full">
                                <FaCheckCircle className="w-3 h-3" />
                            </div>
                        )}
                    </div>

                    {/* Basic Info */}
                    <div>
                        <h3 className="font-semibold text-gray-800 text-sm">{masterData.name}</h3>
                        <p className="text-xs text-gray-600 mt-0.5">{masterData.profession}</p>
                        <div className="flex items-center mt-1">
                            <FaMapMarkerAlt className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">{masterData.distance}</span>
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
                    <FaStar className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold">{masterData.rating}</span>
                </div>
            </div>

            {/* Status Badges - Single Row */}
            <div className="flex flex-wrap gap-2 mb-3">
                {masterData.availableToday && (
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                        Bo'sh
                    </span>
                )}
                {masterData.discount > 0 && (
                    <span className="inline-flex items-center bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium">
                        <FaTag className="w-3 h-3 mr-1" />
                        {masterData.discount}%
                    </span>
                )}
            </div>

            {/* Bottom Row - Price and Time */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                    <div className="flex items-baseline">
                        <span className="font-bold text-gray-800">{masterData.price}</span>
                        <span className="text-xs text-gray-500 ml-1">so'm</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">Eng yaqin: {masterData.nextAvailable}</p>
                </div>

                <button
                    onClick={() => {
                        navigate('/masterProfile')
                    }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                >
                    Tanlash
                </button>
            </div>
        </div>
    );
}

// Agar PropTypes kerak bo'lsa

export default MasterCard;