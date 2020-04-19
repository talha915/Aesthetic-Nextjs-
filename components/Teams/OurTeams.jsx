import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';
class OurTeams extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ourteams: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setTeamsObj();
    }

    setTeamsObj=()=> {
        this.setState({ourteams: this.props.teamObj.ourteams});
    }

    getTeamsObj=()=> {
        if(this.state.ourteams) {
            let teams = this.state.ourteams.map((data, index)=>{
                return(
                    <ScrollAnimation animateIn="fadeIn" key={index}>
                        <a className="box" key={index} onClick={()=>this.teamsData(data, index)}>
                            <div className="img">
                                <img src={data.image} alt="Image Description" />
                            </div>
                            <div className="holder">
                                <h4>{data.name}</h4>
                                <span className="designation">{data.designation} </span>
                                <span className="link">{data.readBio}<i className="icon-arrow-r"></i></span>
                            </div>
                        </a>
                    </ScrollAnimation>
                )
            })
            return teams;
        }
    }

    teamsData=(data, index)=> {
        localStorage.setItem('detailedRole', JSON.stringify(data.detailedRole));
        Router.push({ 
            pathname: '/DetailsTeam', query: {
                name: data.detailName, 
                designation: data.designation,
                backArrow: data.backArrows,
                leadership: data.seeLeadership,
                image: data.detailedImage,
            },
        }).then(() => window.scrollTo(0, 0));       
    }

    render() {
        return (
            <div>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet" />
                    <link href="/static/style.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                </Head>
                <div className="team">
                    <span className="img-shape-bottom">
                        <img src="images/icon-leaf-big.png" alt="Image description" />
                    </span>
                    <div className="container">
                        <h2>Our Team</h2>
                        <div className="boxes">
                            <span className="img-shape">
                                <img src="images/icon.png" alt="Image Description" />
                            </span>
                            {this.getTeamsObj()}                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeams;