import './Login.css'
import logoKhedmni from '../assets/khdemni1.svg'

function Login(){

    return(
        <div className='login'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='login-form'>
                <h2 id='h2'>Login</h2>
                <label className='label-login' htmlFor="email">enter your name or email*</label>
                <input type="email" placeholder='Username/Email'/>
                <label className='label-login' htmlFor="email">enter your password*</label>
                <input type="email" placeholder='Password'/>
                <button type='submit' className='submit'>Login</button>
                <p className='sign'>Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    )
}

export default Login;
