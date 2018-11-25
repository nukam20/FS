import React from 'react'
import logo from '../Img/logo.png';


const NavBar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand" href="index.html"><img src={logo} width="50" height="50"/></a>
      
      <ul className= "navbar-nav mr-auto">
      <li class="nav-item active">
            <a class="nav-link" href="Courses.html">ABOUT <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DEVELOPERS</a>
          </li>
      </ul>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link login" href="Aboutus.html">LOGIN</a>
            </li>
            <li className="nav-item sign-up">
                <button class="signup-button "><a className="nav-link signup-btn-content" href="form.html">SIGN UP</a></button> 
                 </li>
          </ul>
      </div>
    </nav>
  )
}
export default NavBar