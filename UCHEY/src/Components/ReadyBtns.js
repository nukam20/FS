import React, { Component } from 'react'
import BtnComp from './ButtonCom';

class ReadyBtn extends Component {

	state ={
		btn1: `CREATE AN ACCOUNT TODAY`,
		bt1Style: `btn  btn-success text-white`,
		btn2: `CONTACT US`,
		bt2Style: `btn text-success bg-white`		
	}

	render() {
		return (
			
			<div className="col-sm-6">
				<div className="container">
					<div className="boardBtn readyBtn">		
						<BtnComp prop1={ this.state.bt1Style } prop2={ this.state.btn1 } />
						<BtnComp prop1={ this.state.bt2Style } prop2={ this.state.btn2 } />						
					</div>			
				</div>
			</div>	
			
		)
	}
}

export default ReadyBtn
 