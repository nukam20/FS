import React from 'react'

const CustSayingCard = ({srcy, imgDesc, text}) => {
	return (
			<div className="col-sm-3 container">
				<div className="card">
					<div className="card-content">
						<div className="mainCardCont">
							<div>
								<p>{text}</p>
							</div>
							<div className="boardBtn"> 
								<h5>{ imgDesc }</h5>
								<img src={ srcy } height={50} />
							</div>
						</div>
					</div>
				</div>					
			</div>
		
	)
}

export default CustSayingCard