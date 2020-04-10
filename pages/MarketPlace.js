import Header from '../components/Header';
import MarketIntro from '../components/Market/MarketIntro';
import MarketUser from '../components/Market/MarketUser';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

import Head from 'next/head';

function MarketPlace() {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <div>
                    <Header />
                    <main className="main">
                        <MarketIntro />
                        <MarketUser />
                    </main>
                    <SignUp />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
  
export default MarketPlace;