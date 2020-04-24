import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link'

class Header extends Component {
    render() { 
        return (
            <div>
                <Head>
                    <meta property="og:url" content="https://www.aestheticrecord.com"/>
                    <meta property="og:type" content="article"/> 
                    <meta property="og:title" content="Aesthetic Record"/>
                    <meta property="og:description" content="Aesthetic Record"/>
                    <meta property="og:image" content="https://www.aestheticrecord.com/wp-content/uploads/2019/08/aestheticrecordlogo-short.png"/>
                    <link  rel="profile" href="http://gmpg.org/xfn/11"/>
                    <meta name="description" content="Aesthetic Record is an all-in-one solution for connecting, treating, and managing your patients. Start growing your practice with 2 weeks risk-free trial!"/>
                    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                    <link rel="canonical" href="https://www.aestheticrecord.com/" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Aesthetic Record EMR Software &amp; Medical Spa Management Solution" />
                    <meta property="og:description" content="Aesthetic Record is an all-in-one solution for connecting, treating, and managing your patients. Start growing your practice with 2 weeks risk-free trial!" />
                    <meta property="og:url" content="https://www.aestheticrecord.com/" />
                    <meta property="og:site_name" content="Aesthetic Record" />
                    <meta property="og:image" content="https://www.aestheticrecord.com/wp-content/uploads/2019/08/aestheticrecordlogo-short.png" />
                    <meta property="og:image:secure_url" content="https://www.aestheticrecord.com/wp-content/uploads/2019/08/aestheticrecordlogo-short.png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="Aesthetic Record is an all-in-one solution for connecting, treating, and managing your patients. Start growing your practice with 2 weeks risk-free trial!" />
                    <meta name="twitter:title" content="Aesthetic Record EMR Software &amp; Medical Spa Management Solution" />
                    <meta name="twitter:site" content="@Aesthetic_Rec" />
                    <meta name="twitter:image" content="https://www.aestheticrecord.com/wp-content/uploads/2019/08/aestheticrecordlogo-short.png" />
                    <meta name="twitter:creator" content="@Aesthetic_Rec" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <Link href="/">
                                <a href="#"><img src="images/logo.png" alt="Aesthetic Record" /></a>
                            </Link>
                        </div>
                        <input type="checkbox" id="menu" />
                        <label className="nav-opener" htmlFor="menu"><span></span></label>
                        <span className="overlay"></span>
                        <nav className="main-nav">
                            <ul>
                                <li className="has-drop">
                                    <a href="#">Features</a>
                                    <ul className="dropdown">
                                        <li className="has-drop">
                                            <Link href={{ pathname: '/Connect' }}>
                                                <a>
                                                    Connect
                                                </a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href={{ pathname: '/OnlineBooking' }}>
                                                        <a>Online Booking</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/SmartScheduling' }}>
                                                        <a>Smart Scheduling</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/PatientPortal' }}>
                                                        <a >Patient Portal</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-drop">
                                            <Link href="/Treat">
                                                <a>Treat</a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href={{ pathname: '/EMR' }}>
                                                        <a >Complete EMR Solution</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/BeforeAfterPhoto' }}>
                                                        <a>Before & After Photos</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/MobilePointOfSale' }}>
                                                        <a>Mobile Point-of-Sale</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/PatientMembership' }}>
                                                        <a href="#">Patient Wallet & Memberships</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/Telehealth' }}>
                                                        <a>Telehealth</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-drop">
                                            <Link href="/Manage">
                                                <a>Manage</a>
                                            </Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href={{ pathname: '/BusinessInsights' }}>
                                                        <a>Business Insights </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/SupplyChain' }}>
                                                        <a>Supply Chain Management </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={{ pathname: '/EPT' }}>
                                                        <a>Employee Performance Tracking</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/PricePlans">
                                        <a href="#">Plans & Pricing</a>
                                    </Link>
                                </li>
                                
                                <li className="has-drop">
                                    <Link href="/Learn">
                                        <a>Learning Lab</a>
                                    </Link>
                                    <ul className="dropdown">
                                        <li><a  href="https://www.aestheticrecord.com/elevate/" target="_blank">Elevate Blog</a></li>
                                        <li><a href="https://learn.aestheticrecord.com/en/" target="_blank">Learn Articles</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/MarketPlace">
                                        <a>Marketplace</a>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="user-info">
                                <li><a href="https://app.aestheticrecord.com/login" target="_blank">Login</a></li>
                                <li><a href="https://app.aestheticrecord.com/signup-basic?_ga=2.39061923.160160872.1587343952-1803440311.1579636487" target="_blank" className="btn">Start Free Trial</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;