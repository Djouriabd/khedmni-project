import './Popular.css';
import ph3 from '../assets/ooredoo.png';


function Popular(){

    return(
        <div className='popular'>
            <h1>POPULAR COMPANIES</h1>
            <p>A big thanks to the companies who trusted us</p>
            <div className='popular-companies'>
                <div className='company' >
                    <img className='img' src={ph3} alt="ooredoo" />
                    <a href="#">ooredoo</a>
                    <p className='text'>bla bla bla</p>
                </div>
                <div className='company' >
                    <img className='img' src={ph3} alt="ooredoo" />
                    <a href="#">ooredoo</a>
                    <p className='text'>bla bla bla</p>
                </div>
                <div className='company' >
                    <img className='img' src={ph3} alt="ooredoo" />
                    <a href="#">ooredoo</a>
                    <p className='text'>bla bla bla</p>
                </div>
            </div>
        </div>
    )

}

export default Popular;