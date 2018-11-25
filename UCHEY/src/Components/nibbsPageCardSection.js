import React from 'react';

const NibbsPageCardSection = ({ApiTitle,text1,tryNow,arrow})=>{
  return(
    <div className="col-sm-6 container">
        <div className="card cardNibbsPage">
          <div className="card-content">
            <div className="mainCardCont">
              <div>
                <p className="cardNibbsPageTitle">{ApiTitle}</p>
                <p>{text1}</p>
                <div><span className="trynow">{tryNow}</span>
                <span className="text-left"><img src={arrow} width={20} height={20}></img></span></div>
          
              </div>
              
            </div>
          </div>
        </div>					
      </div>
  )
  
}
export default NibbsPageCardSection;