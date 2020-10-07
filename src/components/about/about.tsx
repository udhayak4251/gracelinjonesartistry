import React from 'react';
import profile1 from "../../images/profile_1.jpg";
import profile2 from "../../images/profile_2.jpg";
import profile3 from "../../images/profile_3.jpg";
import './about.css';

function AboutComponent() {
  return (
    <div className="About">
      <div className='home-content'>
        <div className="profile-image">
          <img className="about-profile-image" alt='' src={profile1} />
        </div>
        <div className="home-content-tile">
          <div className="home-content-title-header">Gracelin Jones Artistry</div>
          <div className="sized-box"></div>
          <div className="home-content-sub-title-header">Creative Director</div>
          <p className="home-content-body">My name is Gracelin Daniel Jones and I'm a passionate artist who loves creating art, right from the time I was 6. With strong interests in the field of Art, what started out as scribbles and pencil sketches of Anime characters during long school lectures, transformed into more focused work with meticulous attention to detail.</p>
          <p className="home-content-body">For many years I had kept this low key due to my Day job taking higher preference - you know family expectations to get a degree and have a successful careeer, however, my passion for art only started burning more brighter as I found happiness and satisfaction in it. It became my therapy and my 'escape' from work pressure and stress. I've ever since been kindled to start creating and inspiring others more in this therapeutic field and in 2018 I officially started Gracelin Jones Artistry.
            </p>
        </div>
      </div>
      <div className='home-content'>
        <div className="home-content-tile">
          <p className="home-content-body">Of all the art forms that I've had the chance to explore, I've developed interests towards pencil sketching, acrylic and watercolor paintings, wall murals and especially CALLIGRAPHY! I was introduced to calligraphy in 2017 by a friend and what can I say? It was love at first sight! I slowly started my self-learning journey from there and over the years I started to develop this passion more and more. My journey so far? - It has been overwhelming!!!</p>
          <p className="home-content-body">I truly believe we all were once creative artists as children with colourful imaginations, who didnt really mind colouring outside the lines. One of the best parts about this journey has been going around teaching and inspiring people and rekindling this passion from within them as well. Through that, I also understood how patience, inspiration and motivation as a trainer/teacher has always been a part of my inner being. Apart from taking up commissioned projects, I've also conducted both online and in-person Brush Lettering Workshops in and around Chennai for 100+ students and I'm working on scaling this up in the coming days. The World is a vast place and for those who I couldnt reach, I also started my YouTube channel with innovative tutorials and product/brand reviews to help them out.</p>
        </div>
        <div className="profile-image">
          <img className="about-profile-image" alt='' src={profile2} />
        </div>
      </div>
      <div className='home-content'>
      <div className="profile-image">
          <img className="home-profile-image" alt='' src={profile3} />
        </div>
        <div className="home-content-tile">
          <p className="home-content-body">That being said, I myself am in a continuous process of learning and developing my skills. I believe that every artist should keep evolving and thats the only way to grow. As I continue to grow in this journey, my purpose remains - to inspire people to become 'creators'. Welcome to my World.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
