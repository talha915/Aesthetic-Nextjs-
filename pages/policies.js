import Header from '../components/Header';
import PrivacyPlans from '../components/Privacy/PrivacyPlans';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

function Privacy() {
    return(
        <div>
            <Head>
                <title>Aesthetic Record EMR - Policies</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </Head>
            <div className="wrapper">
                <Header />
                <PrivacyPlans />
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}

export default Privacy;