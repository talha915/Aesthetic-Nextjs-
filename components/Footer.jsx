import React, { Component } from 'react';
import Head from 'next/head';

class Footer extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <footer className="footer">
                    <div className="container">
                        <div className="info">
                            <div className="logo">
                                <a href="#"><img src="images/logo-footer.png" alt="Aesthetic Record" /></a>
                            </div>
                            <a href="mailto:info@aestheticrecord.com" className="mail"><i className="icon-email"></i> info@aestheticrecord.com</a>
                            <a href="#" className="btn">Book Meeting</a>
                            <ul className="social-networks">
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-youtube"></i></a></li>
                                <li><a href="#"><i className="icon-instagram"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <nav className="links">
                                <strong>Connect</strong>
                                <ul>
                                    <li><a href="#">Online Booking</a></li>
                                    <li><a href="#">Smart Scheduling</a></li>
                                    <li><a href="#">Patient Portal</a></li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <strong>Treat</strong>
                                <ul>
                                    <li><a href="#">Complete EMR Solution</a></li>
                                    <li><a href="#">Before & After Photos</a></li>
                                    <li><a href="#">Mobile Point-of-Sale</a></li>
                                    <li><a href="#">Patient Wallet & Memberships</a></li>
                                    <li><a href="#">Telehealth</a></li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <strong>Manage</strong>
                                <ul>
                                    <li><a href="#">Business Insights </a></li>
                                    <li><a href="#">Supply Chain Management</a></li>
                                    <li><a href="#">Employee Performance Tracking</a></li>
                                </ul>
                            </nav>
                            <nav className="links">
                                <strong>Company</strong>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Team </a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </nav>
                            <nav className="links">
                                <strong>Resources</strong>
                                <ul>
                                    <li><a href="#">Elevate Blog</a></li>
                                    <li><a href="#">Learn Articles</a></li>
                                    <li><a href="#">AR Academy</a></li>
                                    <li><a href="#">Marketplace</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="container">
                            <div className="copyright">
                                <p>© 2019 Aesthetic Record. All Rights Reserved <span>|</span> <a href="#">Terms Of Service</a> <a href="#">AR Policies</a></p>
                            </div>
                            <div className="logo-holder">
                                <a href="#"><img src="images/logo-apple.svg" alt="Image Description" /></a>
                                <a href="#"><img src="images/logo-gdbr.svg" alt="Image Description" /></a>
                                <a href="#"><img src="images/ar-emr-hipaa-law.png" alt="Image Description" /></a>
					        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;