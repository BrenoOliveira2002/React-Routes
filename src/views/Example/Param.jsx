import React from 'react'

import { useParams } from 'react-router-dom'

const Param = props => {
    
    const {id} = useParams()
    return(

    <div className='Param'>

       <h1> Valor</h1>
       <p> Valor:{id}!</p>
    </div>

        )}

export default Param