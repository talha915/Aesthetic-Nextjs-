import Header from '../../../components/Header';
import Links from '../../../components/InnerLinks/Links';
import SignUp from '../../../components/SignUp';
import Footer from '../../../components/Footer';
import innerLinksData from '../../../data/innerLinksData.json';

import Head from 'next/head';

function SupplyChain(props) {
    return (
        <div>
            <Head>
                <title>Supply Chain Management</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                <link href="/static/style.css" rel="stylesheet" />
            </Head>
            <div className="wrapper">
                <div>
                    <Header />
                    <Links innerObj={props.onlineObj}/>
                    <SignUp />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
  
export async function getStaticProps({}) {
    let onlineObj = innerLinksData.supplyChain;
    return {
        props: {
            onlineObj,
        },
    }
}


export default SupplyChain;