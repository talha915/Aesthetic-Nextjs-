import React, { Component } from 'react';
import BreadCrumbs from './BreadCrumbs';
import Pricing from './Pricing';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';

class PricePlan extends Component {

    render() {
        return(
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <main className="main">
                    <BreadCrumbs />
                    <Pricing />
                    <div class="bottom-text">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2>Ready to Move to Aesthetic Record? </h2>
                            <p> Migrating patient records and practice data from an existing system to Aesthetic Record is easy! Contact us for more information.</p>
                            <a href="mailto:info@aestheticrecord.com" target="_blank" class="btn">Contact Us</a>
                        </ScrollAnimation>
                    </div>
                </main>
            </div>
            
        );
    }
}

export default PricePlan;