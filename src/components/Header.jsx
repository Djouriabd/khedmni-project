import ph1 from '../assets/ph1.svg'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Header(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup'); // or your specific sign-up route
    }

    return(
        <div className='header-container'>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <div className='header'>
                <h1>FIND YOUR <br /> DREAM <br /> JOB</h1>
                <p>Welcome to khedmni here where you <br /> can find your dream job in easiest <br /> way ever!</p>
                <button id='btnn' onClick={handleClick}>Let’s get started</button>
            </div>
            <div className='photo1'>
                <img id='ph' src={ph1} alt="header photo" />
            </div>
        </div>
    )
}


export default Header