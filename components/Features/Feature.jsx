import React, { Component } from 'react';

/* Components */
import FeatureVisual from './FeatureVisual';
import FeatureContainer from './FeatureContainer';

import Head from 'next/head';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setFeatures();
    }

    setFeatures=()=> {
        this.setState({features: this.props.featuresObj});
    }

    render() {
        return (
            <div className="feature">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <main className="main">
                    <FeatureVisual visualObj={this.state.features.visual}/>
                    <FeatureContainer containerObj={this.state.features.container}/>
                </main>
            </div>
        )
    }
}

export default Feature;