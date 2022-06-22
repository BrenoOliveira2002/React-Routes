import React from 'react'
import './Menu.css'

const Menu = props => (

    <aside className='Menu'>

        <nav>
            <ul>
                <li>
                    <link to="/">Inicio</link>
                </li>

                <li>
                <link to='/param/123'> Param #01 </link>
                </li>
                 
                <li>
                <link to='/param/fon'> Param #02 </link>
                </li>
                 
                <li>
                <link to='/about'> Sobre </link>
                </li>
                
                 
            </ul>
        </nav>

    </aside>


)

export default Menu