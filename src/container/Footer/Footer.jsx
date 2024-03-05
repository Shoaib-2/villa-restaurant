import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      {/* For the contact us div */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          The Brandling Villa, Haddricks Mill Road, South Gosforth, Newcastle
          Upon Tyne, United Kingdom, NE3 1QL
        </p>
        <p className="p__opensans">0191 284 0490</p>
      </div>

      {/* For the logo */}
      <div className="app__footer-links_logo">
        <img src={images.footerLogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Howay man, gan in the pub and get yersel' a pint of cheer! Wor
          doors are always open, like a friendly Geordie's heart.&quot;
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        {/* For social media links */}
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/thebrandlingvilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
          <a
            href="https://twitter.com/brandlingvilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com/brandlingvilla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      {/* For the worrking hour div */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">11:00am - 11:00pm</p>
        <p className="p__opensans">Saturday-Sunday: </p>
        <p className="p__opensans">10:00am - 11:00pm</p>
      </div>
    </div>

    {/* For the copyright div */}
    <div className="footer__copyright">
      <p className="p__opensans">© 2023 Frank & Bird Ltd </p>
    </div>
  </div>
);

export default Footer;
