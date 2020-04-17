import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head';

// Data
import learnCards from '../data/learn';

class LearningCards extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            learnCardRenderer: ''
        }
    }

    componentDidMount() {
        this.setLearnCards();
    }

    setLearnCards=()=> {
        this.setState({learnCardRenderer: learnCards});
    }

    getIntroData=()=> {
        if(this.state.learnCardRenderer) {
            let introData = this.state.learnCardRenderer;
            return(
                <div className="intro">
                    <ScrollAnimation animateIn="fadeIn">
                        <h1>
                            {introData.heading}
                        </h1>
                        <p>
                            {introData.subHeading}
                        </p>
                    </ScrollAnimation>
			    </div>
            )
        }
    }

    getLearnCards=()=> {
        if(this.state.learnCardRenderer.hasOwnProperty("learnCards")) {
            let cardsResult = this.state.learnCardRenderer.learnCards.map((data, index)=>{
                return(
                    <div className="col" key={index}>
                        <div className="img">
                            <ScrollAnimation animateIn="fadeIn">
                                <img src={data.image} alt="Image description" />
                                <h2>{data.heading}</h2>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="fadeIn">
                            <p>{data.textDetail}</p>
                            <a  className="btn">
                                {data.detailBtn}
                            </a>
                        </ScrollAnimation>
                    </div>
                );
            });
            return cardsResult;
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" /> 
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <main className="main">
                    {this.getIntroData()}
                    <div className="threecolumns container">
                        {this.getLearnCards()}
                    </div>
                </main>
            </div>
        );
    }
}

export default LearningCards;