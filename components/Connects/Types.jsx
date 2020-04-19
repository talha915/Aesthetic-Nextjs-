import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

class Types extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typeObj: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setTypeObj();
    }

    setTypeObj = () => {
        this.setState({ typeObj: this.props.typesObj });
    }

    getTypeObj = () => {
        let types = this.state.typeObj.map((data, index) => {
            return (
                <div className="container" key={index}>           
                    <div className="img">
                        <ScrollAnimation animateIn="fadeIn">
                            <img src={data.image} alt="Image Description" />
                        </ScrollAnimation>
                    </div>
                    <div className="textblock">
                        <div className="holder">
                            <h2>{data.heading}</h2>
                            <p>{data.para}</p>
                            <a className="more">{data.learn}</a>
                        </div>
                    </div>
                </div>       
            )
        })
        return types;
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div className="info-blocks connect">
                    {this.getTypeObj()}
                </div>
            </div>

        );
    }
}

export default Types;