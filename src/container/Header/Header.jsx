
// Header Section, I have to put in the brandling villa background image.
import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

// The Header component is responsible for rendering the header section of the page. It includes a heading and an optional subheading. 
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Cask Beer, Good Pub Scran, Great Wine Selection, Doggos!'/>
      <h1 className="app__header-h1">The Brandling Villa</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}> <li>"Mmmmmmmmm"- Emma Burton, Facebook</li>
      <li>"Fancy it 1 night Kelly Arnott"- Micky Kelly, Facebook</li>
      <li>"F**king get up there now and steal one of those menus"- The Gaffer from the Millstone</li>​</p>
      <p className='p__cormorant'style={{margin: '2rem 0'}}>Famous for its ridiculous burgers & range of cask beers, <br />the Brandling Villa is hopefully what you'd want in a contemporary, but traditionally anchored local boozer. <br />Homemade scranners, dog & kid friendly, it hosts live music regularly, comedy gigs, film seasons, retro gaming events, nationally famous festivals & of course, a pub quiz. <br /> We hope you like it.</p>
      <button type='button' className='custom__button'><a href="#menu2">Explore Kitchen</a></button>
    </div>
    
    <div className="app_wrapper_img">
      <img src={images.burger} alt='header img' />
    </div>
  </div>
);

export default Header;
