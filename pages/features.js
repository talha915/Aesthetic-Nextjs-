import Header from '../components/Header';
import Feature from '../components/Features/Feature';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import featureData from '../data/feature.json';

import Head from 'next/head';

function Features(props) {
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <div className="wrapper">
                <Header />
                <Feature featuresObj={props.featureObj}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let featureObj = featureData;
    return {
        props: {
            featureObj,
        },
    }
}

export default Features;