import React from 'react'
import logo from '../../assets/Qida-Logo-verde.svg'
import './Header.css'

export default function Header() {
    return (
        <div>
            <img className="header-logo" src={logo} alt="quida logo"/>
        </div>
    )
}
