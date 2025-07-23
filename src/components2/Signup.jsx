import logoKhedmni from '../assets/khdemni1.svg';
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Signup(){

    const go = useNavigate()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const userRealName = (event) =>{
        setName(event.target.value)
    }

    const userSurname = (event) =>{
        setSurname(event.target.value)
    }

    const userName = (event) =>{
        setUsername(event.target.value)
    }

    const userEmail = (event) =>{
        setEmail(event.target.value)
    }

    const userPassword = (event) =>{
        setPassword(event.target.value)
    }

    const addNewUser = async (event) =>{
        event.preventDefault()

        const data = {
            name,
            surname,
            username,
            email,
            password
        }
        try {
            const response = await axios.post("http://localhost:5000/register",data)
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
        <div className='signup'>
            <img src={logoKhedmni} alt="logo"/>
            <form className='sign-form' onSubmit={(event)=>addNewUser(event)}>
                <h2 id='hh'>Sign Up</h2>

                <div className='name-row'>
                    <div className='name'>
                        <label htmlFor="name">name*</label>
                        <input type="text" id="name" placeholder='Name' onChange={(event)=>userRealName(event)}/>
                    </div>
                    <div className='name'>
                        <label htmlFor="surname">surname*</label>
                        <input type="text" id="surname" placeholder='Surname' onChange={(event)=>userSurname(event)}/>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor="username">enter your username*</label>
                    <input type="text" id="username" placeholder='Username' onChange={(event)=>userName(event)}/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="email">enter your email*</label>
                    <input type="email" id="email" placeholder='Email' onChange={(event)=>userEmail(event)}/>
                </div>
                
                <div className='form-group'>
                    <label htmlFor="password">enter your password*</label>
                    <input type="password" id="password" placeholder='Password' onChange={(event)=>userPassword(event)}/>
                </div>
                
                <button type='submit' className='submit'>Sign Up</button>
                <p className='sign'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup;