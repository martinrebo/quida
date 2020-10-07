import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Qida-Logo-verde.svg'

export default function Home() {
  return (
    <div className="quida-page-home">
      <img className="responsive" style={{ maxHeight: 200 }} src={logo} alt="logo" />
      <div className="quida-home-cta">
        
        <Link className="quida-button" to="/booking">BOOK SERVICE</Link>
        <div>
        </div>
      </div>
    </div>
  )
}
