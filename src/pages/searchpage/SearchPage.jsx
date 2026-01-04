import { ArrowLeft, MapPin, Search, Star, Filter } from "lucide-react";
import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import MasterCard from "../../components/masterCard/MasterCard";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const [paramType, setParamType] = useState(true)
    const type = useParams()

    useEffect(() => {
        if (type && type.type !== "search") {
            console.log("Category type:", type.type);
        } else if (type && type.type == "search") {
            setParamType(false)
        }
    }, [type]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* HEADER */}
            <div className="bg-white px-4 py-3 shadow-sm border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <Link to={'/'}>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <ArrowLeft className="text-gray-600" size={20} />
                        </button>
                    </Link>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">Joylashuv</p>
                        <div className="flex items-center text-sm font-semibold text-gray-800">
                            <MapPin size={14} className="text-indigo-600 mr-2" />
                            Toshkent, Chilonzor
                        </div>
                    </div>
                </div>
            </div>

            {/* SEARCH INPUT */}
            <div className="px-4 pt-4">
                <div className="relative">
                    <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                        <Search size={18} className="text-gray-400" />
                        <input
                            placeholder="Muammoni yozing (masalan: rozetka ishlamayapti)"
                            className="ml-3 w-full outline-none text-sm placeholder-gray-500"
                        />
                    </div>
                </div>
            </div>

            {!paramType && (
                <section>
                    {/* <div className="px-4 mt-5">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-700">
                                Kategoriyalar
                            </h3>
                            <button className="text-indigo-600 text-xs font-medium">
                                Barchasi
                            </button>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                            {[
                                { name: "Santexnik", active: true },
                                { name: "Elektrik", active: false },
                                { name: "Ta'mirlovchi", active: false },
                                { name: "Tozalovchi", active: false },
                                { name: "Sartarosh", active: false },
                                { name: "Tikuvchi", active: false },
                                { name: "O'qituvchi", active: false },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${item.active
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    <div className="px-4 mt-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-semibold text-gray-700">
                                Filtrlar
                            </h3>
                            <Filter size={16} className="text-gray-500" />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow">
                                Bugun bo'sh
                            </button>
                            <button className="bg-white text-gray-700 text-sm py-2.5 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                                Chegirma
                            </button>
                            <button className="bg-white text-gray-700 text-sm py-2.5 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                                Reyting
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* RESULTS */}
            <div className="px-4 mt-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700">
                        Topilgan ustalar
                    </h3>
                    <button className="text-indigo-600 text-xs font-medium">
                        Barchasi
                    </button>
                </div>

                <div className="space-y-3">
                    {[1, 2, 3].map((_, i) => (
                        <MasterCard key={i} />
                    ))}
                </div>
            </div>

            {/* LOAD MORE */}
            <div className="px-4 mt-6 mb-8">
                <button className="w-full bg-white text-gray-700 text-sm font-medium py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                    Ko'proq ko'rish
                </button>
            </div>

            <style jsx>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}