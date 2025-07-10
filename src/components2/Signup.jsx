import logoKhedmni from '../assets/khdemni1.svg';
import './Signup.css'

function Signup(){

    return(
        <div className='signup'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='sign-form'>
                <h2 id='hh'>Sign Up</h2>
                <div className='name'>
                    <label htmlFor="email">name*</label>
                    <input type="email" placeholder='Name'/>
                </div>
                <div className='name'>
                    <label htmlFor="email">surname*</label>
                    <input type="email" placeholder='Username'/>
                </div>
                <label htmlFor="email">enter your email*</label>
                <input type="email" placeholder='Email'/>
                <label htmlFor="email">enter your password*</label>
                <input type="email" placeholder='Password'/>
                <button type='submit' className='submit'>Login</button>
                <p className='sign'>Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    )
}

export default Signup;