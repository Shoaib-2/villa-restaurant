import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants'
import './SpecialMenu.css';


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Sling Back and Sip Local: Quench Yer Thirst with Our Pub's Finest Beers and Wines!" />
      <h1 className="headtext__cormorant">Howay, Pet! Get Yersel' Sum Crackin' Pints and Top-Notch Wines at Our Local Pub!</h1>
    </div>
    {/* Menu for Beer and Cider */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Beer & Cider</p>
        <div className="app__specialMenu-menu_items">
          {data.beers.map((beer, index) => (
            <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags}/>
          )) }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.beerCocktail} alt="menu__img" />
      </div>

            {/* Menu for wine and Vermouth */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Vermouth</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          )) }
        </div>
      </div>
    </div>
        <div style={{marginTop: '15px'}}>
            <button type="button" className='custom__button'><a href="#menu">View More</a></button>
        </div>
  </div>
);


export default SpecialMenu;
