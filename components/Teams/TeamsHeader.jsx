import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

class TeamsHeader extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                </Head>
                <ul className="breadcrumbs container">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="current"><a href="#">Our Team</a></li>
                </ul>
                <div className="banner">
                    <div className="container">
                        <img src="images/banner.jpg" alt="Image Description" />
                        <span className="img-shape">
                            <img src="images/icon-leaf.png" alt="image description" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamsHeader;