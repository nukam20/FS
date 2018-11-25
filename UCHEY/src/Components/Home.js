import React, { Component } from 'react';
import nibbs from '../Img/nibbs.png';
import mCash from '../Img/mCash.png';

// import CompLogo from './compLogo';
import Board from './TechBoard';
import Api from './ApiFor';
import CustDesc from './custDescription';
import Ready from './ReadyComp';
import ReadyBtn from './ReadyBtns';
import CustSaying from './custSaying';
import CustSayingCard from './custSayingCard';

class Home extends Component{

	state = {
		img: [nibbs, mCash, nibbs],
		ApiTitle:{
			Title: `Api's for Nigeria`,
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, fermentum et arcu vel, congue egestas mauris.`
		},
		imgDesc: ["NIBBS", "MCASH"],
		text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, fermentum et arcu vel, congue egestas mauris.`

	}

	render() {
		return (
			<div className="container-fluid p-0">
				<div className="container">
					<div className="Board">
						<div className="row">
							<div className="col-sm-12"> 
								<Board />
							</div>
											
						</div>					
					</div>
					<div className="apiDespSec">
						<Api prop={ this.state.ApiTitle } />
					</div>

					<div className="custDesc row">
						<CustDesc srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
						<CustDesc srcy={this.state.img[1]} imgDesc={this.state.imgDesc[1]} text={this.state.text} />
						<CustDesc srcy={this.state.img[2]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
					</div>				
				</div>
				<div className="container-fluid readyTogetStarted">
				<div className="readyweb" style={{ backgroundColor: '#E5E5E5', padding: '20px', marginTop:'100px', paddingLeft:'150px'}} className="row readyfield">
					<Ready />
					<ReadyBtn />
			
					
				</div>
				</div>
				<div className="container mb-5">
				<div style={{ marginTop: '100px', overflow: 'hidden' }} className="row  ">
					<CustSaying  />
					<CustSayingCard srcy={this.state.img[0]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
					<CustSayingCard srcy={this.state.img[1]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
					<CustSayingCard srcy={this.state.img[2]} imgDesc={this.state.imgDesc[0]} text={this.state.text} />
				</div>	
				</div>
												
			</div>
		)
	}
}

export default Home