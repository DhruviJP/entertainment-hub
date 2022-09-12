import React from 'react'
import './Header.css';
import { GiClapperboard } from 'react-icons/gi';

function Header() {
    return (
        <div>
            <span className='header' onClick={() => window.scroll(0, 0)}><GiClapperboard /> Entertainment Hub</span>
        </div>
    )

}

export default Header  