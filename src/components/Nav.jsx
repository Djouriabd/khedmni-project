import './Nav.css'
import { useState } from 'react'
import logo from '../assets/khdemni.svg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigateLogin = useNavigate();

    const navigateSignUp = useNavigate();

    const handleClick = () => {
        navigateLogin('/login'); // or your specific sign-up route
    }

    const secondHandleClick = () =>{
        navigateSignUp('/signup')
    }

    return (
        <nav className='nav'>
            <div>
                <img id='logo-ph' src={logo} alt="khedmni logo" />
            </div>

            <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <div className={`link ${menuOpen ? 'open' : ''}`}>
                <NavLink 
                    className={({ isActive }) => isActive ? 'NavBtn active' : 'NavBtn'} to="/" end onClick={() => setMenuOpen(false)}>Home
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'NavBtn active' : 'NavBtn'} to="/findjob" onClick={() => setMenuOpen(false)}>Find Job
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'NavBtn active' : 'NavBtn'} to="/services" onClick={() => setMenuOpen(false)}>Services
                </NavLink>

                <NavLink 
                    className={({ isActive }) => isActive ? 'NavBtn active' : 'NavBtn'} to="/contactus" onClick={() => setMenuOpen(false)}>Contact
                </NavLink>
            </div>

            <div className={`buttons ${menuOpen ? 'open' : ''}`}>
                <button className='btn1' onClick={secondHandleClick}>Sign Up</button>
                <button className='btn2' onClick={handleClick}>Login</button>
            </div>
        </nav>
    )
}

export default Nav;