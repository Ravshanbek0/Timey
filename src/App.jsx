import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import SearchPage from './pages/searchpage/SearchPage'
import MasterProfile from './pages/masterProfile/MasterProfile'
import BookingPage from './pages/bookingPage/BookingPage'
import PhoneNumber from './pages/phoneNumber/phoneNumber'
import UserProfilePage from './pages/profile/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchpage/:type' element={<SearchPage />} />
          <Route path='/masterProfile' element={<MasterProfile />} />
          <Route path='/bookingPage' element={<BookingPage />} />
          <Route path='/sharephone' element={<PhoneNumber />} />
          <Route path='/profile' element={<UserProfilePage />} />
        </Routes>
        <Nav/>
      </BrowserRouter>
    </div>
  )
}

export default App