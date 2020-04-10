import React, { Component } from 'react';
import Head from 'next/head';

// Market Data
import marketData from '../../data/market';

class MarketIntro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketDetailData: '',
        }
    }

    componentDidMount() {
        this.setMarketData();
    }

    setMarketData=()=> {
        this.setState({marketDetailData: marketData});
    }

    getMarketData=()=> {
        if(this.state.marketDetailData) {
            console.log("Market Data:");
            let data = this.state.marketDetailData;
            return(
                <div className="intro market">
                    <h1> {data.heading}  <span><img src={data.image} alt="Image Description" /> {data.furtherHeading}</span>  </h1>
                    <p>
                        {data.detail}
                    </p>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                {this.getMarketData()}
            </div>
        );
    }
}

export default MarketIntro;