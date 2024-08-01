import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <img src={images.spinachleaf} className='leaf-img' style={{width:50, left:30, top:50}} alt="leaf" />
    <img src={images.leaf} className='vege-img' alt="Vege" style={{top:-750, left:290}}/>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.platedecor} alt="Plate_overlay" style={{opacity:0.5, width:300}} />
      
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans1">Our dishes feature top-quality ingredients and fresh herbs, delivering an authentic and flavorful experience fresh herbs to create truly authentic and delicious dishes.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans1">Infused with the richness of culture, tradition, and the timeless warmth of Indian hospitality. The restaurant’s carefully crafted menu is designed to meet the preferences of all North Indian food.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;