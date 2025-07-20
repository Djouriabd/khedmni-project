import logoKhedmni from '../assets/khdemni1.svg';
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup(){

    return(
        <div className='signup'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='sign-form'>
                <h2 id='hh'>Sign Up</h2>

                <div className='name-row'>
                    <div className='name'>
                        <label htmlFor="name">name*</label>
                        <input type="text" id="name" placeholder='Name'/>
                    </div>
                    <div className='name'>
                        <label htmlFor="surname">surname*</label>
                        <input type="text" id="surname" placeholder='Surname'/>
                    </div>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="email">enter your email*</label>
                    <input type="email" id="email" placeholder='Email'/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="password">enter your password*</label>
                    <input type="password" id="password" placeholder='Password'/>
                </div>
                
                <button type='submit' className='submit'>Sign Up</button>
                <p className='sign'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup;