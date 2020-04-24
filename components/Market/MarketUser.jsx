import React, { Component } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';

class MarketUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            marketUser: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMarketUsers();
    }


    setMarketUsers=()=> {
        this.setState({marketUser: this.props.marketUser});
    }

    getMarketUsers=()=> {
        if(this.state.marketUser) {
            let data = this.state.marketUser.map((data, index)=> {
                return(
                    <div className="image-box" key={index}>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="slide">
                                <img src={data.image} href="https://market.aestheticrecord.com/" target="_blank" alt="Image description" />
                                <h3>
                                    {data.userType}
                                </h3>
                            </div>
                        </ScrollAnimation>
                    </div>
                );
            });
            return data;
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
                <div className="container marketplace">
                    <div className="image-boxes">
                        {this.getMarketUsers()}
                        <div className="arrows">
                            <a className="btn-arrow btn-left" href="https://market.aestheticrecord.com/" target="_blank"><i className="icon-arrow-l"></i></a>
                            <a className="btn-arrow btn-right" href="https://market.aestheticrecord.com/merchant/login" target="_blank"><i className="icon-arrow-r"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MarketUser);