import React , { Component } from 'react';
import './Footer.css';
 
class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
 
    }
  }
  render(){
    let footerLinks = ['ABOUT US','SUPPORT','BLOG','PRESS','API','JOBS','PRIVACY','TERMS','DIRECTORY','PROFILES','LANGUAGE'];
    let temp = '© 2018 INSTAGRAM';
    return (
      <div className="Footer">
        <div className="footer-links">
            { footerLinks.map((elem,i) =>{
                return (
                <div key={i}><a href="ABOUT US">{ elem }</a></div>
                )
            })}
        </div>
        <div>{temp}</div>
    

    
      </div>
    )
  }
}
export default Footer;