import React, { Component } from 'react';
import AboutUsIntro from './AboutUsIntro';
import AboutUsBlock from './AboutUsBlock';

import Head from 'next/head';

class About extends Component {
    render() {
        console.log("About Us Props: ", this.props);
        return(
            <div className="address-blocks">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <main className="main about-us">
                    <AboutUsIntro />
                    <AboutUsBlock />
                </main>
            </div>
        );
    }
}

export default About;