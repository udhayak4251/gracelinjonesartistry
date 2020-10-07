import React from 'react';
import './footer.css';

function FooterComponent() {
  return (
    <div className="footer">
       <div className="footer-info">
            ©Gracelin Jones Artistry 2020
            <br/><br/>
            Chennai, India
       </div>
       <div className="footer-info">
        <a href="https://www.instagram.com/gracelin_jones_artistry" className="fa fa-instagram social-icons"> </a>
        <a href="https://www.facebook.com/GracelinJonesArtistry" className="fa fa-facebook social-icons"> </a>
        <a href="https://youtu.be/IPDoP2kNXkI" className="fa fa-youtube social-icons"> </a>
        </div>   
    </div>
  );
}

export default FooterComponent;
