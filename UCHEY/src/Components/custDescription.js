import React from 'react'
import { Link } from 'react-router-dom'
// import NibbsPage from './Components/nibbsPage'


const CustDesc = ({srcy, imgDesc, text}) => {
  console.log(srcy)
	return (
			<div className="col-sm-4">
				<div className="card">
					<div className="card-content">
						<div className="mainCardCont">
							<div className="boardBtn"> 
								<img src={ srcy } height={50}/>
								<h5 className="img-desc">{ imgDesc}</h5>
							</div>
							<div>
								<p>{text}</p>
							</div>
							<div>
								<Link to="/nibbsPage">Learn More</Link>
							</div>
						</div>
					</div>
				</div>					
			</div>
			
		
  )
  
}

export default CustDesc
 