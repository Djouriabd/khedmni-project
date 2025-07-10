import './Famous.css'
import { IoIosArrowDropright } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";



function Famous(){

    return(
        <div className='famous-container'>
            <h1>MOST FAMOUS FEILDS</h1>
            <p>Here in Khedmni there is multiple fields with many chance to get hired on it!</p>
            <div className='famous'>
                <a className='hr' href="#"><span><MdDesignServices className='icons' /></span> Graphic Design</a>
                <a className='hr' href="#"><span><FaReact className='icons' /></span> Web Development</a>
                <a className='hr' href="#"><span><FaDatabase className='icons' /></span> Data Scientist</a>
                <a className='hr' href="#"><span><FaUserDoctor className='icons' /></span> Doctor</a>
                <a className='hr' href="#"><span><PiChalkboardTeacherFill className='icons' /></span> Teacher</a>
                <a className='hr' href="#"><span><GrTechnology className='icons' /></span> IT</a>
            </div>
            <button id='view'>View All <IoIosArrowDropright className="icon"/> </button>
        </div>
    )
}

export default Famous