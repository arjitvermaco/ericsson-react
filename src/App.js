import React from 'react'
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import ProductPage from './pages/ProductPage'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/about" Component={AboutPage}/>
        <Route path="/contact" Component={ContactPage}/>
        <Route path="/product/:id" Component={ProductPage}/>
        <Route path="/dashboard" element={<ProtectedRoute>
          <DashboardPage/>
        </ProtectedRoute>}/>

        <Route path="/login" Component={LoginPage}/>

      </Routes>
      {/* <ParentComponent>
        <ChildComponent/>
       
      </ParentComponent> */}
      <Footer/>
    </div>
  )
}
