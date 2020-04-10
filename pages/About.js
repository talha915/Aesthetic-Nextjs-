import About from '../components/AboutUs/About';
import Header from '../components/Header';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

function AboutUs() {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <Header />
                <About />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs;