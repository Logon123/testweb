import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Gandhi Chowk Pathankot,PB</p>
        <p className="p__opensans">+91 99999-99999 </p>
        <p className="p__opensans">+91 99999-99999</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.down} alt="footer_logo"  style={{ height:100, marginTop:-30 }}/>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 10 }} alt=''/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 09:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Resturant. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
