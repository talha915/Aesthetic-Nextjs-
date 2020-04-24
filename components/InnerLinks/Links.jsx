import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';


class Links extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkObj: '',
            name: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setLinkObj();
    }



    setLinkObj = () => {
        this.setState({ linkObj: this.props.innerObj });
    }

    getLinkObj = () => {
        if(this.state.linkObj) {
            let data = this.state.linkObj;
            return (
                <main className="main">

                    <div className="main-banner" >
                        <span className="shape-right"><ScrollAnimation animateIn="fadeIn"><img src={data.images} alt="Image description" /></ScrollAnimation></span>
                        <div className="container">
                            <div className="textblock">
                                <ScrollAnimation animateIn="fadeIn">
                                    <h1>{data.heading}</h1>
                                    <p>{data.para}</p>
                                </ScrollAnimation>
                                <div className="btn-area">
                                    <ScrollAnimation animateIn="fadeIn">
                                        <span className="shape-center"><img src={data.innerImage} alt="Image description" /></span>
                                        <a href="https://calendly.com/isabelle-mcdowell/aesthetic-record-demo?month=2020-04" target="_blank" className="btn">{data.btn}</a>
                                        <a href="https://app.aestheticrecord.com/signup-basic?_ga=2.39061923.160160872.1587343952-1803440311.1579636487" target="_blank" className="btn full">{data.btn1}</a>
                                    </ScrollAnimation>
                                </div>
                                <span className="note">{data.notes}</span>
                            </div>
                        </div>
                    </div>
                    <div className="full-image">
                        <span className="shape-left">
                            <ScrollAnimation animateIn="fadeIn">
                                <img src={data.fullImage} alt="Image Description" />
                            </ScrollAnimation>
                        </span>
                        <ScrollAnimation animateIn="fadeIn">
                            <img src={data.anotherImage} alt="Image description" />
                        </ScrollAnimation>
                    </div>
                </main>
            )
        }
        
    }

    render() {

        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                {this.getLinkObj()}

            </div>

        );
    }
}
export default Links;