import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateAdPage from './pages/CreateAdPage'
import EditAdPage from './pages/EditAdPage'
import LoginPage from './pages/LoginPage'
import NotFound404 from './pages/NotFound404'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import WishlistPage from './pages/WishlistPage'
import MainLayout from './layouts/MainLayout'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NotFound404 />} />
      </Route>
    </Routes>
  )
}

export default App