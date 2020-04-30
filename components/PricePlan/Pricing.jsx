import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class Pricing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeType: 'Month',
			price1: '12',
			price2: '16'
		}
	}

	selectType=(type, price1, price2)=> {
		this.setState({activeType: type});
		this.setState({price1: price1, price2: price2});
	}

	render() {
		return (
			<div>
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
					<link href="/static/style.css" rel="stylesheet" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
				</Head>
				<ScrollAnimation animateIn="fadeIn">
					<div className="pricing container">
						<span className="img-shape"><img src="images/icon-dark.png" alt="Image description" /></span>
						<span className="img-shape"><img src="images/icon-dark.png" alt="Image description" /></span>
						<h2>Plans & Pricing </h2>
						<ul className="tabset">
							<li className={this.state.activeType === "Month" ? "active" : "inactive"}><a onClick={()=>this.selectType("Month", "12", "16")}>Monthly</a></li>
							<li className={this.state.activeType === "Annual" ? "active" : "inactive"}><a onClick={()=>this.selectType("Annual", "10", "13")}>Annualy <span>-20%</span></a></li>
						</ul>
						<div className="tab-content">
							<div className="price-box">
								<span className="price"> <span className="currency">$</span> <em>{this.state.price1}</em> <span className="pkg">/ {this.state.activeType} <br /> per User</span></span>
								<ul className="stars">
									<li><img src="images/star.svg" alt="Image Description" /></li>
								</ul>
								<h3>Essentials</h3>
								<a href="https://app.aestheticrecord.com/signup-premium" target="_blank" className="btn">Get Started</a>
								<div className="package-info">
									<div className="info">
										<span>2 GB Storage </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>100 SMS </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>300 Emails </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>10 Hours </span>
										<em>Onboarding</em>
									</div>
								</div>
								<ul className="info-list">
									<li><i className="icon-check"></i> High-Res Photo Management</li>
									<li><i className="icon-check"></i> Procedure Charting & Tracking</li>
									<li><i className="icon-check"></i> Provider & Procedure Oversight</li>
									<li><i className="icon-check"></i> Automated Text & Email Reminders</li>
									<li><i className="icon-check"></i> Multiple Memberships</li>
									<li><i className="icon-check"></i> Dedicated Patient Portal & Wallet</li>
									<li><i className="icon-check"></i> Discounts & Package Creation</li>
									<li><i className="icon-check"></i> Monthly Treatment Plan Subscriptions</li>
									<li><i className="icon-check"></i> Mobile POS</li>
									<li><i className="icon-check"></i> eGift Cards</li>
									<li><i className="icon-check"></i> Online Booking & Cancellation Fees</li>
									<li><i className="icon-check"></i> Reputation Management</li>
									<li><i className="icon-check"></i> Inventory Management</li>
									<li><i className="icon-check"></i> Electronic Patient Questionnaires, Consents & Treatment Instructions</li>
									<li><i className="icon-check"></i> HIPAA-Compliant Telehealth Platform</li>
									<li><i className="icon-check"></i> Electronic-enabled Prescribing</li>
									<li><i className="icon-check"></i> Galderma Aspire Rewards Integration </li>
								</ul>
							</div>
							<div className="price-box">
								<span className="price"> <span className="currency">$</span> <em>{this.state.price2}</em> <span className="pkg">/ {this.state.activeType} <br /> per User</span></span>
								<ul className="stars">
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
								</ul>
								<h3>Accelerator</h3>
								<a href="https://app.aestheticrecord.com/signup-premium" target="_blank" className="btn">Get Started</a>
								<div className="package-info">
									<div className="info">
										<span>4 GB Storage </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>200 SMS </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>600 Emails </span>
										<em>Monthly / User</em>
									</div>
									<div className="info">
										<span>14 Hours </span>
										<em>Onboarding</em>
									</div>
								</div>
								<span className="title">Everything in Essential +</span>
								<ul className="info-list">
									<li><i className="icon-check"></i> Integrations with Third-Party Platforms</li>
									<li><i className="icon-check"></i> 2-Way Text Messaging</li>
									<li><i className="icon-check"></i> Integration with TouchMD</li>
									<li><i className="icon-check"></i> Dynamic Before & After Videos</li>

									<li><i className="icon-check"></i> Advanced KPI Reporting</li>
									<li><i className="icon-check"></i> Employee Time Tracking</li>
								</ul>
							</div>
							<div className="price-box">
								<h4>Contact Us</h4>
								<ul className="stars">
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
									<li><img src="images/star.svg" alt="Image Description" /></li>
								</ul>
								<h3>Enterprise</h3>
								<a href="mailto:info@aestheticrecord.com" className="btn">Email Us</a>
								<div className="package-info">
									<div className="info">
										<span>Customized</span>
									</div>
									<div className="info">
										<span>Customized</span>
									</div>
									<div className="info">
										<span>Customized</span>
									</div>
									<div className="info">
										<span>Customized</span>
									</div>
								</div>
								<span className="title">Everything in Essential +</span>
								<span className="title dark">Everything in Accelerator +</span>
								<ul className="info-list">
									<li><i className="icon-check"></i> Enterprise Management Portal</li>
									<li><i className="icon-check"></i> Onsite Setup & Train-the-Trainer</li>
									<li><i className="icon-check"></i> Branded Onboarding Materials</li>
									<li><i className="icon-check"></i> Dedicated Support Plans</li>
									<li><i className="icon-check"></i> Franchise & Multi-Location Dashboards</li>
								</ul>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		);
	}
}

export default Pricing;
