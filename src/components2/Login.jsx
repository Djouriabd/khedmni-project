import './Login.css'
import logoKhedmni from '../assets/khdemni1.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login(){

    const go = useNavigate()

    const [email, setEmail] = useState('')

    const [password, setPassword]= useState('')

    const userEmail = (event) =>{
        setEmail(event.target.value)
    }

    const userPassword = (event) =>{
        setPassword(event.target.value)
    }
    
    const addUser = async (event) =>{
        event.preventDefault()

        const data = {
            email, //email:email
            password
        }
        try {
            const response = await axios.post("http://localhost:5000/login",data)
            if (response.status === 200) {
                localStorage.setItem("user",JSON.stringify(response.data.user))
                localStorage.setItem("token",JSON.stringify(response.data.token))
                go('/')
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return(
        <div className='login'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='login-form' onSubmit={(event)=>addUser(event)}>
                <h2 id='h2'>Login</h2>
                <div className='form-group' >
                    <label className='label-login' htmlFor="email">enter your name or email*</label>
                    <input type="email" id="email" placeholder='Username/Email' onChange={(event)=>userEmail(event)}/>
                </div>
                
                <div className='form-group'>
                    <label className='label-login' htmlFor="password">enter your password*</label>
                    <input type="password" id="password" placeholder='Password' onChange={(event)=>userPassword(event)}/>
                </div>
                
                <button type='submit' className='submit'>Login</button>
                <p className='sign'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;
