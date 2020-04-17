import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
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
                                <Link href="/">
                                    <a><img src="images/logo-footer.png" alt="Aesthetic Record" /></a>
                                </Link>
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
                                <Link href={{pathname: '/Connect'}}>
                                    <strong>
                                        Connect
                                    </strong>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={{ pathname: '/OnlineBooking'}}>
                                            <a>Online Booking</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/SmartScheduling'}}>
                                            <a>Smart Scheduling</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/PatientPortal'}}>
                                            <a >Patient Portal</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <Link href="/Treat">
                                    <strong>Treat</strong>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={{ pathname: '/EMR'}}>
                                            <a >Complete EMR Solution</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: '/BeforeAfterPhoto'}}>
                                            <a>Before & After Photos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: '/MobilePointOfSale'}}>
                                            <a>Mobile Point-of-Sale</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: '/PatientMembership'}}>
                                            <a href="#">Patient Wallet & Memberships</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/Telehealth'}}>
                                            <a>Telehealth</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <Link href="/Manage">
                                    <strong>Manage</strong>
                                </Link>

                                <ul>
                                    <li>
                                        <Link href={{pathname: '/BusinessInsights'}}>
                                            <a>Business Insights </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: '/SupplyChain'}}>
                                            <a>Supply Chain Management </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: '/EPT'}}>
                                            <a>Employee Performance Tracking</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links">
                                <strong>Company</strong>
                                <ul>
                                    <li>
                                        <Link href="/About">
                                            <a >About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Teams">
                                            <a >Our Team </a>
                                        </Link>
                                    </li>
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
                                    <li>
                                        <Link href={{pathname: "/MarketPlace"}}>
                                            <a>Marketplace</a>
                                        </Link>
                                    </li>
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