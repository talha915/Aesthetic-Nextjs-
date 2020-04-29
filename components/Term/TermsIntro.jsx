import React, { Component } from 'react';

import Head from 'next/head';

class TermsIntro extends Component {
    render() {
        return (
            <div className="termsIntro">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div class="shape-large">
                    <img src="images/icon-huge-leaf.png" alt="Image Description" />
                </div>
                <div class="banner">
                    <div class="container">
                        <img src="images/banner.jpg" alt="Image Description" />
                        <span class="img-shape">
                            <img src="images/icon-leaf.png" alt="image description" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TermsIntro;