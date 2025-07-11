import './Contact.css'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";


function Contact(){

    return(
        <div className="contact-container">
            <div className='contact-header'>
                <h1 >Contact Us</h1>
                <div className='contact-info'>
                    <p>If you have any questions or need assistance, feel free to reach out to us.</p><br />
                    <p><MdLocalPhone /> +213 123456789</p>
                    <p><MdOutlineEmail /> khedmniassistant@gmail.com</p>
                    <p><FaMapMarkedAlt /> idk wchmn location ndir mais n3mr biha lplace lol</p>
                </div>
            </div>
            <div className='contact-form'>
                <form>
                    <label>Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label>Message:</label>
                    <textarea id="message" name="message" rows="6"></textarea>
                    <button id='submitBtn' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact