import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentYear: ''
        }
    }

    componentWillMount() {
        this.setCurrentYear();
    }

    setCurrentYear = () => {
        let date = new Date();
        this.setState({ currentYear: date.getFullYear() });
    }

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
                                    <a><img src="/images/logo-footer.png" alt="Aesthetic Record" /></a>
                                </Link>
                            </div>
                            <a href="mailto:info@aestheticrecord.com" className="mail"><i className="icon-email"></i> info@aestheticrecord.com</a>
                            <a href="https://calendly.com/isabelle-mcdowell/aesthetic-record-demo" target="_blank" className="btn">Book Meeting</a>
                            <ul className="social-networks">
                                <li><a target="_blank" href="https://www.facebook.com/aesthetic.rec/"><i className="icon-facebook"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/channel/UCY2W0j0DbqLsg4qomXL0c1g"><i className="icon-youtube"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/aestheticrecord/"><i className="icon-instagram"></i></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/company/aestheticrecord/"><i className="icon-linkedin"></i></a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <nav className="links">
                                <Link href={{ pathname: '/features/connect' }}>
                                    <strong>
                                        Connect
                                    </strong>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={{ pathname: '/features/connect/online-booking' }}>
                                            <a>Online Booking</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/connect/smart-scheduling' }}>
                                            <a>Smart Scheduling</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/connect/patient-portal' }}>
                                            <a >Patient Portal</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <Link href="/features/treat">
                                    <strong>Treat</strong>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href={{ pathname: '/features/treat/complete-emr-solution' }}>
                                            <a >Complete EMR Solution</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/treat/photo-management' }}>
                                            <a>Before & After Photos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/treat/mobile-point-of-sale' }}>
                                            <a>Mobile Point-of-Sale</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/treat/patient-wallet-and-memberships' }}>
                                            <a href="#">Patient Wallet & Memberships</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/treat/telehealth' }}>
                                            <a>Telehealth</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links large">
                                <Link href={{ pathname: '/features/manage' }}>
                                    <strong>
                                        Manage
                                    </strong>
                                </Link>

                                <ul>
                                    <li>
                                        <Link href={{ pathname: '/features/manage/business-insights' }}>
                                            <a>Business Insights </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/manage/supply-chain-management' }}>
                                            <a>Supply Chain Management </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname: '/features/manage/employee-performance' }}>
                                            <a>Employee Performance Tracking</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="links">
                                <strong>Company</strong>
                                <ul>
                                    <li>
                                        <Link href={{pathname: "/About"}}>
                                            <a >About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{pathname: "/Teams"}}>
                                            <a >Our Team </a>
                                        </Link>
                                    </li>
                                    <li><a href="https://www.aestheticrecord.com/elevate/" target="_blank">News</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </nav>
                            <nav className="links">
                                <strong>Resources</strong>
                                <ul>
                                    <li><a href="https://www.aestheticrecord.com/elevate/" target="_blank">Elevate Blog</a></li>
                                    <li><a href="https://learn.aestheticrecord.com/en/?_ga=2.38863395.160160872.1587343952-1803440311.157" target="_blank">Learn Articles</a></li>
                                    <li><a href="https://learn.aestheticrecord.com/en/?_ga=2.38863395.160160872.1587343952-1803440311.157" target="_blank">AR Academy</a></li>
                                    <li>
                                        <Link href={{ pathname: "/market-place" }}>
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
                                <p>© {this.state.currentYear} Aesthetic Record. All Rights Reserved <span>|</span>
                                    <a href="/terms-of-service">Terms Of Service</a> 
                                    <Link href={{ pathname: "/policies" }}><a>AR Policies</a></Link>                  
                                </p>
                            </div>
                            <div className="logo-holder">
                                <a href="https://apps.apple.com/us/app/aesthetic-record-emr/id1228049519" target="_blank"><img src="/images/logo-apple.svg" alt="Image Description" /></a>
                                <a href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/principles-gdpr_en" target="_blank"><img src="/images/logo-gdbr.svg" alt="Image Description" /></a>
                                <a href="https://www.capterra.com/p/162938/Aesthetic-Record/" target="_blank"><img src="/images/capterra.png" alt="Image Description" /></a>
                                <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html" target="_blank"><img src="/images/ar-emr-hipaa-law.png" alt="Image Description" /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;