import React from 'react'
import './Card.css'
import Arrow from './Arrow.png'


let Card = (props) => {
    return(
        <div className='card'>
            <div className='align'>
                <img className='icon' src={Arrow}/>
                <p className='digit'>{props.number}</p>
            </div>
            <p className='place'>{props.location}</p>
            <p className='language'>{props.tradution}</p>
        </div>
    )
}

export default Card