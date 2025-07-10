import ph1 from '../assets/ph1.svg'
import './Header.css'


function Header(){
    return(
        <div className='header-container'>
            <div className='header'>
                <h1>FIND YOUR <br /> DREAM <br /> JOB</h1>
                <p>Welcome to khedmni here where you can find your dream job in easiest way ever!</p>
                <button id='btnn'>Let’s get started</button>
            </div>
            <div className='photo1'>
                <img id='ph' src={ph1} alt="header photo" />
            </div>
        </div>
    )
}


export default Header