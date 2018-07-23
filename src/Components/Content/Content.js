import React from 'react'
import Digital from './Digital.png'
import './Content.css'
import Logo from'./Logo.png'

let Content = (props) => {
    return(
        <div>
            <div className='container'>
                <img className='logo' src={Logo}/> 
            </div>
            <div className='container2'>
                <p className='title'>{props.title}</p>
                <p className='subtitle'>{props.subtitle}</p>
            </div>
            <div className='container3'>
                <img className='fingertip' src={Digital}/>
            </div>
            <div className='container4'>
                <p className='bottom'>{props.visit}</p>
                <p className='subbotom'>{props.subvisit}</p>
            </div>
        </div>
    )
}

export default Content