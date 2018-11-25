import React,{Component} from 'react';
import AboutNibbs from './nibbsPageSectionOne';
import SandBox from './nibbsSandBox';
import NibbsPageCardSection from  './nibbsPageCardSection';
import NibbsPageSectionTwo from './ReadyComp';
import NibbsPageSectionTwobtn from './ReadyBtns';
import arrowRight from '../Img/arrowright.svg'

class NibbsPage extends Component  {

  state = {
		ApiTitle:{
			Title1: `BVN Fingerprint matching webservice specification...`,
      Title2: `BVN Placeholder Boolean Validation for Other parties...`,
      Title3: `BVN Validation web service Technical Specification...`
		},
		text:{
      text1:`This specification document details a web service interface that Banks and other interested parties can call to verify fingerprints of Bank Customers.`,
      text2:`This documentation details a RESTful web service interface that validates the correctness of the beneficiary details.`,
      text3: `This specification document details a web service interface that will assist Banks to validate BVN details of Bank customers.`,
      tryNow: `Try now`
    },
    arrow:[arrowRight]

	
	}
  render(){
    return(
      <div className="container-fluid p-0">
       <AboutNibbs/>
       <div className="" style={{background:"white"}}>
          <SandBox/>
          <div className="row aboutNibbs-text"style={{background:"white"}} >
          <NibbsPageCardSection ApiTitle={this.state.ApiTitle.Title1} text1={this.state.text.text1} tryNow={this.state.text.tryNow} arrow={this.state.arrow}/>
          <NibbsPageCardSection ApiTitle={this.state.ApiTitle.Title2} text1={this.state.text.text2} tryNow={this.state.text.tryNow} arrow={this.state.arrow}/>
          <NibbsPageCardSection ApiTitle={this.state.ApiTitle.Title3} text1={this.state.text.text3} tryNow={this.state.text.tryNow} arrow={this.state.arrow}/>
          </div>
          <div className="container-fluid p-5" style={{background:'linear-gradient(90deg, rgba(47, 53, 82, 0.05) 0%, rgba(41, 19, 38, 0.05) 100%)'}}>
          <div className="NibbsPageSectionTwoWrap">
            <div className="row">
            <NibbsPageSectionTwo/>
            <NibbsPageSectionTwobtn/>
            </div>
          </div>
           
          </div>
          
        
        </div>
      
       
      </div>
        
    )
  
  }
 
}  

export default NibbsPage