import Header from '../components/Header';
import Treats from '../components/Treat/Treats';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import treatData from '../data/treat.json';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

function Treat(props) {
    return(
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <div className="wrapper">
                <Header />
                <Treats treatsObj={props.treatObj}/>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps({}) {
    let treatObj = treatData;
    return {
        props: {
            treatObj,
        },
    }
}

export default Treat;