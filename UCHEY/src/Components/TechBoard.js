import React, { Component } from 'react'

class Board extends Component{

	state = {
		title: 'Technology For Nigerians',
		text: `A set of APIs that allows developers to utilise APIs to solve Nigeria’s hard problems towards presence-less,  paperless, and cashless service delivery.`,
		btn1: `Learn More`,
		bt1Style: `btn green darken-3`,
		btn2: `START BUILDING`,
		bt2Style: `btn green darken-3`,

	}

	render() {
		return (
			<div className="">
				<h3 className="board-title">{ this.state.title }</h3>
				<p className="board-details">{ this.state.text }</p>
				<div className="row">
				<div className="boardBtn col-sm-12">
					<button className="learn-more">Learn More</button>
					<button className="start-building">Start Developing</button>
					<div></div>
				</div>
				</div>
			
			</div>
		)
	}
}

export default Board
