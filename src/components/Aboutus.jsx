import './Aboutus.css'
import ph2 from '../assets/ph2.svg'

function About() {

    return(
        <div className='about-container'>
        <h1 className='h1'> ABOUT KHEDMNI</h1>
            <div className='about'>
                <div className='photo2'>
                    <img id='ph2' src={ph2} alt="about us photo" />
                </div>
                <div className='about-us'>
                    <h2 className='about-h2'>What is Khedmni?</h2>
                    <p className='about-text'>Khedmni is a platform that was created to make people find there dream job from their houses in the most easiest way. <br /><br /> As well for companies to find a suitable customers to hire them. </p>
                </div>
            </div>
        </div>
    )

}

export default About