import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='bg-blue-500 '>
        <nav className='h-16'>
          <ul className='flex justify-end items-center h-16 gap-6 text-white'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
