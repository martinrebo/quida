import React from 'react'
import logo from '../../assets/Qida-Logo-verde.svg'

export default function Header() {
    return (
        <div className="quida-header">
            <img className="quida-header-logo" src={logo} alt="quida logo"/>
        </div>
    )
}
