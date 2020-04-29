import React, { Component } from 'react';

import TermsIntro from './TermsIntro';
import TermsDescription from './TermsDescription';

import Head from 'next/head';

class Term extends Component {
    render() {
        return(
            <div className="terms">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <main class="main about-us privacy">
                    <TermsIntro />
                    <TermsDescription />
                </main>
            </div>
        )
    }
}

export default Term;