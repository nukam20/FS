import React from 'react'
import { Link } from 'react-router-dom';

const CustSaying = () => {

	return (
		
		<div className="col-sm-3">
			<span><svg width="96" height="105" viewBox="0 0 96 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H41.9048V49.7368L0 105V0Z" fill="#6AAC32" fill-opacity="0.3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M54.0957 0H96.0005V49.7368L54.0957 105V0Z" fill="#6AAC32" fill-opacity="0.3"/>
</svg>
</span>
			<h3 style={{marginTop:'-100px'}}> What are customers Saying </h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, fermentum et arcu vel, congue egestas mauris.</p>
			<Link to="/nibbsPage"> Learn More </Link><span></span>
		</div>	
	)
}

export default CustSaying
 