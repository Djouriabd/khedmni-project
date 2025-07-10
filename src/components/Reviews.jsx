import './Reviews.css';
import { FaCircleUser } from "react-icons/fa6";

function Reviews(){

    return(
        <div className='reviews-container'>
            <h1>REVIEWS</h1>
            <p>Here are some reviews about our services</p>
            <div className='reviews'>
                <div className='user'>
                    <h3><span><FaCircleUser className='ic' /></span> user1</h3>
                    <p className='pov'>bla bla bla</p>
                </div>

                <div className='user' >
                    <h3><span><FaCircleUser className='ic' /></span> user2</h3>
                    <p className='pov'>bla bla bla</p>
                </div>

                <div className='user' >
                    <h3><span><FaCircleUser className='ic' /></span> user3</h3>
                    <p className='pov'>bla bla bla</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;