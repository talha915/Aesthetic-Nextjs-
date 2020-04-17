import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class AboutUsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutBlock: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setAboutBlock();
    }

    setAboutBlock=()=> {
        this.setState({aboutBlock: this.props.aboutUsBlock})
    }

    getAboutBlock=()=> {
        if(this.state.aboutBlock) {
            let address = this.state.aboutBlock.address.map((data, index)=> {
                return(
                    <div key={index}>
                        <ScrollAnimation animateIn="fadeIn">
                            <h3>{data.heading}</h3>
                            <div className="info-holder">
                                <address>{data.address}</address>
                                <div className="img">
                                    <img src={data.image} alt="Image Description" />
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                )
            });
            return address;
        }
    }

    getLeafImage=()=> {
        if (this.state.aboutBlock) {
            let data = this.state.aboutBlock;
            return (
                <div className="img-shape">
                    <ScrollAnimation animateIn="fadeIn">
                        <img src={data.bigLeafImage} alt="Image Description" />
                    </ScrollAnimation>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="address-blocks">
                    <div className="container">
                        {this.getAboutBlock()}
                        {this.getLeafImage()}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsBlock;