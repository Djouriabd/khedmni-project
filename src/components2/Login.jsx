import './Login.css'
import logoKhedmni from '../assets/khdemni1.svg'
import { Link } from 'react-router-dom'

function Login(){

    return(
        <div className='login'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='login-form'>
                <h2 id='h2'>Login</h2>
                <div className='form-group'>
                    <label className='label-login' htmlFor="email">enter your name or email*</label>
                    <input type="email" id="email" placeholder='Username/Email'/>
                </div>
                
                <div className='form-group'>
                    <label className='label-login' htmlFor="password">enter your password*</label>
                    <input type="password" id="password" placeholder='Password'/>
                </div>
                
                <button type='submit' className='submit'>Login</button>
                <p className='sign'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;
