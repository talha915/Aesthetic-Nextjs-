import React, { Component } from 'react';

import Head from 'next/head';

class FeatureContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            containers: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setContainer();
    }

    setContainer=()=> {
        this.setState({containers: this.props.containerObj});
    }

    getContainers=()=> {
        let container = this.state.containers.containerList.map((items, index)=> {
            return (
                <div className="column" key={index}>
                    <div className="image">
                        <img src={items.image} alt="Image Description" />
                        <span className="text">{items.heading}</span>
                    </div>
                    <p>{items.text} </p>
                    <a className="btn" href="#">{items.btn}</a>
                </div>
            )
        })
        return container;
    }

    render() {
        return (
            <div className="featureContainer">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div className="container features intro">
                    <h1>{this.state.containers.heading} </h1>
                    <p>{this.state.containers.text}</p>
                </div>
                <div className="features-block">
                    <div className="container">
                        {this.getContainers()}
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureContainer;