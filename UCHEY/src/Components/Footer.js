import React from 'react';
import logo from '../Img/logowhite.svg'

const Footer = () => {
	return (
		<footer className="page-footer bg-success p-2">
			<div className="footer-copyright">
				<div className="container">
				<div className="row" style={{color:'white'}}>
				<div className="text-left col-sm-6"><img src={logo}></img></div>
					<div className="text-right col-sm-6" style={{lineHeight:"50.11px"}}>© 2018 FSI Ltd.All rights reserved.Legal.</div>
					<a className="grey-text text-lighten-4 right" href=""><i className="fab fa-linkedin fa-2x"></i></a>
					<a className="grey-text text-lighten-4 right" href=""><i className="fab fa-google fa-2x"></i></a>
					<a className="grey-text text-lighten-4 right" href=""><i className="fab fa-facebook fa-2x"></i></a>
				</div>
				</div>
			
			</div>
	    </footer>
	)
}

export default Footer
