import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="footer" className="container">
            <div className="row description">
                <ul className="col-sm-12 col-md-3">
                    <li><a href="#banner"><img className="logo" src="https://i.imgur.com/889jCtq.png" alt="" /></a></li>
                    <li className="d-flex mt-4 social-links">
                        <div className="icon-container" href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></div>
                        <div className="icon-container" href="#"><FontAwesomeIcon className="icon" icon={faFacebookF} /></div>
                        <div className="icon-container" href="#"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></div>
                        <div className="icon-container" href="#"><FontAwesomeIcon className="icon" icon={faDribbble} /></div>
                        <div className="icon-container" href="#"><FontAwesomeIcon className="icon" icon={faBehance} /></div>
                    </li>
                </ul>
                <ul className="col-sm-12 col-md-3">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Enterprise</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <ul className="col-sm-12 col-md-3">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
                <ul className="col-sm-12 col-md-3">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;