import React from 'react'
import './App.css'

import { BrowserRouter } from  'react-router-dom' // essa importação mudou

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'



const App = props => (

    <div className='App'>
        
        <BrowserRouter> // Usamos a importação acima bem aqui


        <Menu />
        <Content> </Content>


        </BrowserRouter> // Aqui também

    </div>  


)

export default App