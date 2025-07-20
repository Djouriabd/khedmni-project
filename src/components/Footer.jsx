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

    <div class="footer-column">
        <h3>Our Social</h3>
        <div class="social-links">
            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
        </div>
    </div>
</div>
        <p>Bringing you closer to career opportunities. Start today.</p>
        </div>
    )
}

export default Footer;