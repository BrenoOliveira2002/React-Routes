import './Content.css'
import React from 'react'

import { Routes, Route } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/Example/Home";
import Param from "../../views/Example/Param"
import About from "../../views/Example/About.jsx";
import NotFound from "../../views/Example/NotFound";

const Content = props => (

    <main className='Content'>
       <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </main>


)

export default Content