import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class InfoBlocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoBlock: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setInfoBlocks();
    }

    setInfoBlocks = () => {
        this.setState({ infoBlock: this.props.InfoObj });
    }

    getConnects = () => {
        let data = this.state.infoBlock.connects;
        let connects = data.map((data, index) => {
            return (
                <div className="container" key={index}>
                    <div className="img">
                        <ScrollAnimation animateIn="fadeIn">
                            <img src={data.image} alt="Image Description" />
                        </ScrollAnimation>
                    </div>
                    <div className="textblock">
                        <div className="holder">
                            <ScrollAnimation animateIn="fadeIn">
                                <h2>{data.heading}</h2>
                                <p>{data.paragraph}</p>
                                <ul className="info-list">
                                    {data.lists.map((datas, index) => {
                                        return (
                                            <li key={index}>{datas.list}</li>
                                        )
                                    })}
                                </ul>
                                <a className="more">{data.learnMore}</a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            )
        })
        return connects;
    }

    getGrowing = () => {
        let data = this.state.infoBlock.record;
        return (
            <div className="information-section">
                <div className="container">
                    <div className="col">
                        <ScrollAnimation animateIn="fadeIn">
                            <img src={data.image} alt="Image description" />
                        </ScrollAnimation>
                    </div>
                    <div className="col">
                        <div className="textblock">
                            <ScrollAnimation animateIn="fadeIn">
                                <span className="title">{data.title}</span>
                                <h2>{data.heading}</h2>
                                <a className="btn" href="https://app.aestheticrecord.com/signup-basic?_ga=2.39061923.160160872.1587343952-1803440311.1579636487" target="_blank">{data.btn}</a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>              
                <div className="info-blocks">
                    {this.getConnects()}
                </div>
                {this.getGrowing()}
            </div>
        );
    }
}

export default InfoBlocks;