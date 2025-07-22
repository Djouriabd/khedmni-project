import './Error.css'

import error_img from '../assets/404.svg'

function Error(){

    return(
        <div className='error-container'>
                    <div className='error'>
                        <h1 className='error-text'>404</h1>
                        <h1 className='error-h1'>OOOPS PAGE NOT FOUND :/ </h1>
                        <p>it seems this page doesn't exist try another page</p>
                    </div>
                    <div className='photo3'>
                        <img id='err_ph' src={error_img} alt="header photo" />
                    </div>
                </div>
    )
}

export default Error