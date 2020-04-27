import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link'

class DetailTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailTeamObj: '',
            detailedRole: ''
        }
    }
    UNSAFE_componentWillMount() {
        this.setDetailTeamObj();
    }

    componentDidMount() {
        this.setDetailedRole();
    }

    setDetailTeamObj = () => {
        this.setState({ detailTeamObj: this.props.detailTeamObj.url.query });
    }

    setDetailedRole=()=> {
        this.setState({ detailedRole: JSON.parse(localStorage.getItem('detailedRole'))});
    }

    getDetailTeamObj = () => {
        if (this.state.detailTeamObj) {
            let data = this.state.detailTeamObj;
            return (
                <div className="team-detail">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="container">               
                            <div className="img-user">
                                <img src={data.image} alt="Justin Harper" />
                                <a className="back" onClick={()=>this.backToTeams()}><img src={data.backArrow} alt="Image description" /> See All Leadership</a>                                    
                            </div>
                            <div className="textblock">
                                <div className="holder">
                                    <h2>{data.name}</h2>
                                    <span className="designation">{data.designation}</span>
                                    {this.detailedRole()}
                                </div>                          
                            </div>                    
                        </div>
                    </ScrollAnimation>
                </div>
            )
        }
    }

    detailedRole=()=> {
        if(this.state.detailedRole) {
            let detailedRole = this.state.detailedRole.map((role, index)=> {
            return(
                    <p key={index}>
                        {role.roles}
                    </p>
                )
            })
            return detailedRole; 
        }
    }

    backToTeams=()=> {
        Router.push({ pathname: '/teams' });
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
                    <ul className="breadcrumbs container">
                        <li><Link href={{ pathname: '/' }}><a >Home</a></Link></li>
                        <li><Link href={{ pathname: '/teams' }}><a>Our Team</a></Link></li>
                        <li className="current"><a >{this.state.detailTeamObj.name}</a></li>
                    </ul>
                    {this.getDetailTeamObj()}
                </main>
            </div>
        );
    }
}

export default DetailTeam;