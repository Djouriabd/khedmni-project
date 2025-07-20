import './Footer.css'

function Footer(){

    return(
        <div className='footer'>
        <div class="footer-content">
    <div class="footer-column">
        <h3>About</h3>
        <p className='footer-p'>Our Story</p>
        <p className='footer-p'>Careers</p>
        <p className='footer-p'>Our Team</p>
        <p className='footer-p'>Resources</p>
    </div>

    <div class="footer-column">
        <h3>Support</h3>
        <p className='footer-p'>FAQ</p>
        <p className='footer-p'>Contact Us</p>
        <p className='footer-p'>Help Center</p>
        <p className='footer-p'>Terms of Service</p>
    </div>

    <div class="footer-column">
        <h3>Find Us</h3>
        <p className='footer-p'>Events</p>
        <p className='footer-p'>Locations</p>
        <p className='footer-p'>Newsletter</p>
    </div>

    <div className="footer-column">
        <h3>Our Social</h3>
            <div className="social-links">
                <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
            </div>
    </div>
    </div>
        <div className="footer-bottom">
            <p>Bringing you closer to career opportunities. Start today.</p>
        </div>
        </div>
    )
}

export default Footer;