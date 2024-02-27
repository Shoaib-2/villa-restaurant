import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images} from "../../constants";
import data2 from "../../constants/data2";

import './Food.css'

const Food = () => (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Jaw-Dropping Scran!" />
      <h1 className="headtext__cormorant">Pub Eating for you, your mam & your dog!</h1>
    </div>
    {/* Menu for Nice plates section. */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Nice plates for you & your mates</p>
        <div className="app__specialMenu-menu_items">
          {data2.yourMates.map((your, index) => (
            <MenuItem key={your.title + index} title={your.title} price={your.price} tags={your.tags}/>
          )) }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu2} alt="menu" />
      </div>
            {/* Menu for Burger and Fries*/}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Our Pretzel Burgers & Fries</p>
        <div className="app__specialMenu-menu_items">
          {data2.burgers.map((burger, index) => (
            <MenuItem key={burger.title + index} title={burger.title} price={burger.price} tags={burger.tags}/>
          )) }
        </div>
      </div>  
    </div>
        <div style={{marginTop: '15px'}}>
            <button type="button" className='custom__button'>View More</button>
        </div>
  </div>
);

export default Food;