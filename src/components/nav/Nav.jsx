import React from 'react'
import { Bell, Search, Home, User } from "lucide-react"
import { NavLink, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

  const linkClass = (isActive) =>
    `flex flex-col items-center p-2 
     ${isActive ? 'text-indigo-600' : 'text-gray-500'}`

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">

        {/* HOME */}
        <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
          <Home size={22} />
          <span className="text-xs font-medium">Bosh</span>
        </NavLink>

        {/* SEARCH — MUHIM QISM */}
        <NavLink
          to="/searchpage/search"
          className={() =>
            linkClass(location.pathname.startsWith('/searchpage'))
          }
        >
          <Search size={22} />
          <span className="text-xs">Qidirish</span>
        </NavLink>

        {/* NOTIFICATION */}
        <button className="flex flex-col items-center p-2 text-gray-500">
          <div className="relative">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <span className="text-xs">Bildirish</span>
        </button>

        {/* PROFILE */}
        <NavLink to="/profile" className={({ isActive }) => linkClass(isActive)}>
          <User size={22} />
          <span className="text-xs">Profil</span>
        </NavLink>

      </div>
    </div>
  )
}

export default Nav
