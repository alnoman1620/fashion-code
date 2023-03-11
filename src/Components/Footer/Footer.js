import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left-div'>
                <h3>FASHION</h3>
                <small>Complete your style with awesome clothes from us.</small>
                <div className='icons'>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className='right-div'>
                <div className='side-one'>
                    <p>Company</p>
                    <small>About</small><br></br>
                    <small>Contact us</small><br></br>
                    <small>Support</small><br></br>
                    <small>Careers</small>
                </div>
                <div className='side-one'>
                    <p>QuicK Link</p>
                    <small>Share Location</small><br></br>
                    <small>Orders Tracking</small><br></br>
                    <small>Size Guide</small><br></br>
                    <small>FAQs</small>
                </div>
                <div className='side-one'>
                    <p>Legal</p>
                    <small>Terms & conditions</small><br></br>
                    <small>Privacy Policy</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;