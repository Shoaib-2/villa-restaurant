import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

//For navigating throught out the page.
const Navbar = () => {
   //to create a reference for our menu button and using it in onClick event handler of Hamburger Menu Icon.
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.brandling} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#kitchen">Kitchen</a>
      </li>
      {/* Booze has 2  subcategories, so I need to make it a dropdown menu. */}
      <li className="p__opensans">
        <a href="#booze">Booze</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="/" className="p__opensans">
        Book a Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {/* Setting the toggle menu, when clicked will then turn true, in turn shows the list */}
      {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__centeer slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
          {/* For small screens a drop down menu */}
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#kitchen">Kitchen</a>
            </li>
            <li className="p__opensans">
              <a href="#booze">Booze</a>
            </li>
          </ul>
        </div>
      )}
    

    </div>
  </nav>
  ) 
};

export default Navbar;
