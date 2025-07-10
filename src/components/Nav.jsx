import './Nav.css'
import { useState } from 'react'
import logo from '../assets/khdemni.svg'

function Nav() {

    return(
        <>
            <nav className='nav'>
                <div>
                    <img src={logo} alt="khedmni logo" />
                </div>

                <div className='link'>
                    <a className='NavBtn' href='#' id='clicked'>Home</a>
                    <a className='NavBtn' href='#'>Find Job</a>
                    <a className='NavBtn' href='#'>Services</a>
                    <a className='NavBtn' href='#'>Contact</a>
                </div>
                <div className='buttons'>
                    <button className='btn1'>Sign Up</button>
                    <button className='btn2'>Login</button> //lol
                </div>
            </nav>
        </>
    )
}

export default Nav
