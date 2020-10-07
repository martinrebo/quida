import React from 'react'
import logo from '../../assets/Qida-Logo-verde.svg'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="quida-header">
            <Link to="/">
                <img className="quida-header-logo" src={logo} alt="quida logo" />
            </Link>

        </div>
    )
}
