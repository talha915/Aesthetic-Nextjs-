import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class InfoBlocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infoBlocks: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setInfoBlocks();
    }

    setInfoBlocks=()=> {
        this.setState({infoBlocks: this.props.infoObj});
    }

    getInfoBlocks=()=> {
        let block = this.state.infoBlocks.map((data, index)=> {
            return(
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
                                <p>{data.para}</p>
                                <a className="more">{data.learn}</a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            )
        })
        return block;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div className="info-blocks manage">
                    {this.getInfoBlocks()}   
                </div>
            </div>
        );
    }
}

export default InfoBlocks;