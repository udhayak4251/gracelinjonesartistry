import React from 'react';
import { Link } from 'react-router-dom';
import homePic from '../../images/imagecategory/Digital_Printed_Frames/2.jpg';
import FooterComponent from '../footer/footer';
import './home.css';
import * as ROUTES from "../../constants/routes";

function HomeComponent() {
  return (
    <div>
      <div className='home-content'>
        <div className="profile-image">
          <img className="home-profile-image" alt='' src={homePic} />
        </div>
        <div className="home-content-tile">
          <div className="home-content-title-header">Gracelin Jones Artistry</div>
          <div className="sized-box"></div>
          <div className="home-content-sub-title-header">Creative Director</div>
          <p className="home-content-body">My name is Gracelin Daniel Jones and I'm a passionate artist who loves creating art, right from the time I was 6. With strong interests in the field of Art, what started out as scribbles and pencil sketches of Anime characters during long school lectures, transformed into more focused work with meticulous attention to detail.</p>
          <p className="home-content-body">For many years I had kept this low key due to my Day job taking higher preference - you know family expectations to get a degree and have a successful careeer, however, my passion for art only started burning more brighter as I found happiness and satisfaction in it. It became my therapy and my 'escape' from work pressure and stress. I've ever since been kindled to start creating and inspiring others more in this therapeutic field and in 2018 I officially started Gracelin Jones Artistry.
            </p>
          <Link className="home-content-about-link" to={ROUTES.ABOUT}>More...</Link>  
        </div>

      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default HomeComponent;
