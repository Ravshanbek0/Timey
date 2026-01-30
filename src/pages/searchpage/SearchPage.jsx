import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import MasterCard from "../../components/masterCard/MasterCard";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaSearch,
    FaStar,
    FaFilter,
    FaSlidersH,
    FaTimes,
    FaCalendarAlt,
    FaTag,
    FaSortAmountDown,
    FaFire
} from "react-icons/fa";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const [paramType, setParamType] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");
    const type = useParams();

    // Filter states
    const [selectedFilters, setSelectedFilters] = useState({
        availableToday: false,
        discount: false,
        rating: false,
        priceRange: { min: 0, max: 1000000 },
        sortBy: "rating"
    });

    const categories = [
        { id: "all", name: "Hammasi", icon: "🔥", count: "250+" },
        { id: "barber", name: "Sartaroshlik", icon: "💇", count: "150+" },
        { id: "electrician", name: "Elektrik", icon: "🔌", count: "45+" },
        { id: "plumber", name: "Santexnik", icon: "🔧", count: "60+" },
        { id: "cleaner", name: "Tozalovchi", icon: "🧹", count: "35+" },
        { id: "tailor", name: "Tikuvchi", icon: "🧵", count: "28+" },
        { id: "teacher", name: "O'qituvchi", icon: "📚", count: "85+" },
    ];

    const filters = [
        { id: "availableToday", label: "Bugun bo'sh", icon: <FaCalendarAlt className="w-4 h-4" /> },
        { id: "discount", label: "Chegirma bilan", icon: <FaTag className="w-4 h-4" /> },
        { id: "rating", label: "Yuqori reyting", icon: <FaStar className="w-4 h-4" /> },
        { id: "fast", label: "Tezkor", icon: <FaFire className="w-4 h-4" /> },
    ];

    const sortOptions = [
        { id: "rating", label: "Reyting bo'yicha" },
        { id: "priceLow", label: "Arzon narx" },
        { id: "priceHigh", label: "Qimmat narx" },
        { id: "distance", label: "Yaqinlik" },
        { id: "experience", label: "Tajriba" },
    ];

    useEffect(() => {
        if (type && type.type !== "search") {
            console.log("Category type:", type.type);
            setActiveCategory(type.type);
        } else if (type && type.type === "search") {
            setParamType(false);
        }
    }, [type]);

    const handleFilterToggle = (filterId) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterId]: !prev[filterId]
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Header */}
            <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 py-3">
                    {/* Back button and location */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <Link to="/">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 mr-3">
                                    <FaArrowLeft className="w-5 h-5 text-gray-600" />
                                </button>
                            </Link>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">JOYLASHUV</p>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="w-4 h-4 text-indigo-600 mr-1" />
                                    <span className="text-sm font-semibold text-gray-800">Toshkent, Chilonzor</span>
                                </div>
                            </div>
                        </div>

                        {!paramType && (
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`p-2 rounded-lg transition-colors duration-200 ${showFilters
                                    ? 'bg-indigo-100 text-indigo-600'
                                    : 'hover:bg-gray-100 text-gray-600'
                                    }`}
                            >
                                <FaSlidersH className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {/* Search Input */}
                    <form onSubmit={handleSearch} className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FaSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Sartarosh, elektrik, santexnik..."
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 placeholder-gray-500"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center"
                            >
                                <FaTimes className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                    </form>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-20">
                {!paramType && (
                    <>
                        {/* Categories */}
                        {/* <section className="px-4 pt-4">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-base font-bold text-gray-800">Kategoriyalar</h2>
                                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                    Hammasi
                                </button>
                            </div>

                            <div className="overflow-x-auto pb-3">
                                <div className="flex space-x-2" style={{ minWidth: 'min-content' }}>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex-shrink-0 px-4 py-3 rounded-xl transition-all duration-200 flex items-center space-x-2 ${activeCategory === category.id
                                                    ? 'bg-indigo-600 text-white shadow-md'
                                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className="text-lg">{category.icon}</span>
                                            <div className="text-left">
                                                <div className="font-medium text-sm">{category.name}</div>
                                                <div className={`text-xs mt-1 ${activeCategory === category.id
                                                        ? 'text-white/80'
                                                        : 'text-gray-500'
                                                    }`}>
                                                    {category.count}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section> */}

                        {/* Filters Bar */}
                        <section className="px-4 pt-4">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-base font-bold text-gray-800">Filtrlar</h2>
                                <div className="flex items-center space-x-2">
                                    <FaFilter className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">
                                        {Object.values(selectedFilters).filter(Boolean).length} ta
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => handleFilterToggle(filter.id)}
                                        className={`flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 ${selectedFilters[filter.id]
                                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        {filter.icon}
                                        <span className="text-sm font-medium">{filter.label}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Advanced Filters Modal */}
                        {showFilters && (
                            <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
                                <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto animate-slide-up">
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <h2 className="text-xl font-bold text-gray-800">Batafsil filtrlar</h2>
                                            <button
                                                onClick={() => setShowFilters(false)}
                                                className="p-2 hover:bg-gray-100 rounded-lg"
                                            >
                                                <FaTimes className="w-5 h-5 text-gray-600" />
                                            </button>
                                        </div>

                                        {/* Sort Options */}
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                                                <FaSortAmountDown className="w-4 h-4 mr-2 text-gray-500" />
                                                Tartiblash
                                            </h3>
                                            <div className="space-y-2">
                                                {sortOptions.map((option) => (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => setSelectedFilters(prev => ({
                                                            ...prev,
                                                            sortBy: option.id
                                                        }))}
                                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedFilters.sortBy === option.id
                                                            ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                                            : 'text-gray-700 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price Range */}
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-gray-700 mb-3">Narx oralig'i</h3>
                                            <div className="px-4 py-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm text-gray-600">Min: {selectedFilters.priceRange.min.toLocaleString()} so'm</span>
                                                    <span className="text-sm text-gray-600">Max: {selectedFilters.priceRange.max.toLocaleString()} so'm</span>
                                                </div>
                                                <div className="relative h-2 bg-gray-200 rounded-full">
                                                    <div
                                                        className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                                                        style={{
                                                            left: `${(selectedFilters.priceRange.min / 1000000) * 100}%`,
                                                            right: `${100 - (selectedFilters.priceRange.max / 1000000) * 100}%`
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                                            <button
                                                onClick={() => {
                                                    setSelectedFilters({
                                                        availableToday: false,
                                                        discount: false,
                                                        rating: false,
                                                        priceRange: { min: 0, max: 1000000 },
                                                        sortBy: "rating"
                                                    });
                                                }}
                                                className="py-3.5 text-gray-700 font-medium border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                                            >
                                                Tozalash
                                            </button>
                                            <button
                                                onClick={() => setShowFilters(false)}
                                                className="py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-md transition-all"
                                            >
                                                Natijalarni ko'rish
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Results Section */}
                <section className="px-4 pt-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-gray-800">Topilgan ustalar</h2>
                            <p className="text-sm text-gray-600 mt-1">23 ta natija</p>
                        </div>
                        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                            Hammasi
                        </button>
                    </div>

                    {/* Active Filters */}
                    {Object.entries(selectedFilters).some(([key, value]) =>
                        key !== 'priceRange' && key !== 'sortBy' && value
                    ) && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Object.entries(selectedFilters).map(([key, value]) => {
                                    if (key === 'priceRange' || key === 'sortBy' || !value) return null;

                                    const filterInfo = filters.find(f => f.id === key);
                                    return (
                                        <div
                                            key={key}
                                            className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-sm"
                                        >
                                            <span className="mr-2">{filterInfo?.label}</span>
                                            <button
                                                onClick={() => handleFilterToggle(key)}
                                                className="hover:text-indigo-900"
                                            >
                                                <FaTimes className="w-3 h-3" />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                    {/* Masters List */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <MasterCard key={i} />
                        ))}
                    </div>
                </section>

                {/* Load More Button */}
                <section className="px-4 pt-6 pb-8">
                    <button className="w-full py-3.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        Ko'proq yuklash
                    </button>
                </section>
            </main>

            {/* Bottom Navigation */}
            {showFilters && (
                <div className="fixed inset-0 z-40" onClick={() => setShowFilters(false)} />
            )}
        </div>
    );
}