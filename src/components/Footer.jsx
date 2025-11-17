import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="/images/lock.png" alt="lock" />
                    <h4>Stay fit & updated with us</h4>
                    <p>We'll send you only what matters, no spam.</p>
                    <div className="input-wrap">
                        <input type="text" placeholder="Enter your email" />
                        <button>Send <img src="/images/arrow2.png" alt="arrow" /></button>
                    </div>
                </div>
                <div className="footer-top-right">
                    <div className="footer-box">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About</li>
                            <li>Programs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4>Contact</h4>
                        <ul>
                            <li><i class="ri-phone-fill"></i>+91 72343 22821</li>
                            <li><i class="ri-mail-fill"></i>unlock@gmail.com</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4>Follow Our Socials</h4>
                        <div className="social-links">
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-linkedin-box-fill"></i>
                            <i class="ri-facebook-box-fill"></i>
                            <i class="ri-twitter-x-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-mid">
                <img src="/images/unlock.png" alt="unlock" className='unlock' />
                <img src="/images/lock3.png" alt="lock" className='lock' />
            </div>
            <div className="footer-bottom">
                <p>© 2024 Unlock. All rights reserved.</p>
                <p>Made with ❤️ <strong> by ArtWorksIT</strong></p>
            </div>
        </footer>
    )
}

export default Footer