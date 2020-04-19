import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class Partners extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partnerObj: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setPartnersObj();
    }

    setPartnersObj = () => {
        this.setState({ partnerObj: this.props.partnersObj });
    }

    getPartnerDef = () => {
        let data = this.state.partnerObj;
        return (
            <div className="container">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="intro">
                        <h1>{data.heading}</h1>
                        <p>{data.paragraph}</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }

    getPartnerLogos = () => {
        let data = this.state.partnerObj.logos;
        let logos = data.map((data, index) => {
            return (        
                <li key={index}>
                    <ScrollAnimation animateIn="fadeIn">
                        <img src={data.image} alt={data.image} />
                    </ScrollAnimation>
                </li>
            )
        })
        return logos;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div className="partners">
                    {this.getPartnerDef()}
                    <div className="logos-holder">
                        <div className="container">
                            <ul>
                                {this.getPartnerLogos()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;