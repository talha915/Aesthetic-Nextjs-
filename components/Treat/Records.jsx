import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class Records extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordsData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setRecords();
    }

    setRecords=()=> {
        this.setState({recordsData: this.props.recordObj});
    }

    getRecords=()=> {
        let records = this.state.recordsData.map((data, index)=> {
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
                                <a className="more" href={data.redirect}>{data.learn}</a>
                            </ScrollAnimation>
                        </div>
                    </div>                
                </div>
            )
        })
        return records;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="info-blocks treat">
                    {this.getRecords()}
                </div>
            </div>
        );
    }
}

export default Records;