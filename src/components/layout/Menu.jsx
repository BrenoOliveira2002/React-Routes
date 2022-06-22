import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = props => (

    <aside className='Menu'>

        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                <Link to='/param/123'> Param #01 </Link>
                </li>
                 
                <li>
                <Link to='/param/fon'> Param #02 </Link>
                </li>
                 
                <li>
                <Link to='/about'> Sobre </Link>
                </li>
                <li>
                <Link to='*'> Not found </Link>
                </li>
                
                
                 
            </ul>
        </nav>

    </aside>


)

export default Menu