import React, { Component } from 'react';

import Head from 'next/head';


class Banner extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <div className="visual" style={{ backgroundImage: "url(images/img33.jpg)" }}>
                    <div className="container">
                        <div className="textblock">
                            <h1>Software Designed To Make Growing Your Aesthetic Practice Easy</h1>
                            <p>All-In-One EMR & Practice Management Software Solution</p>
                            <a href="https://calendly.com/isabelle-mcdowell/aesthetic-record-demo?month=2020-04" target="_blank" className="btn">Schedule Demo</a>
                            <a href="https://app.aestheticrecord.com/signup-basic?_ga=2.39061923.160160872.1587343952-1803440311.1579636487" target="_blank" className="btn full">Start Free Trial</a>
                            <em className="note">No Credit Card Required, 14 Day Free Trial</em>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;