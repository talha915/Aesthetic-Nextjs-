import React, { Component } from 'react';

import Head from 'next/head';

class TeamsFooter extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="bottom-block shape" style={{backgroundImage:"url(images/img17.jpg)"}}>
                    <div className="container">
                        <div className="textblock">
                            <h3>Try Aesthetic Record with your team for free </h3>
                            <a href="https://app.aestheticrecord.com/signup-basic?_ga=2.39061923.160160872.1587343952-1803440311.1579636487" target="_blank" className="btn full">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamsFooter;