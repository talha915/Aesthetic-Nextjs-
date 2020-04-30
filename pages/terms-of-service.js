import Header from '../components/Header';
import Term from '../components/Term/Terms';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

function Terms(props) {
    return(
        <div>
            <Head>
                <title>Terms of Service</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <div className="wrapper">
                <Header />
                <Term />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export default Terms;