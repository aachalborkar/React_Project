import React from 'react';
import './Home.css';

function Home() {
  return (
 <div>
 <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
<div className="jumbotron text-center">
<h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
  </div>
  <div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Company Page</h2>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

  </div>
  );
}

export default Home;
