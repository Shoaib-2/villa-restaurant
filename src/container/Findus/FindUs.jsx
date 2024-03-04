import React from 'react';
import { SubHeading} from "../../components";
import { images} from "../../constants";

const FindUs = () => (
  // Left side info div
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom: "3rem"}}>Find Us</h1>
      <div className="app__wrapper-content">
            <p className="p__opensans">The Brandling Villa, <br />Haddricks Mill Road,
            <br />South Gosforth,
            <br />Newcastle upon Tyne,
            <br />United Kingdom,
            <br />NE3 1QL
            <br /> 0191 284 0490 </p>
            <p className="cormorant" style={{color: "#DCCA87", margin: "2rem 0"}}>Opening Hours</p>
            <p className="p__opensans">Mon - Sun: 12:00pm - 11:00pm</p>
      </div>
      <button className='custom__button' style={{marginTop: "2rem"}}>Visit Us</button>
    </div>
    {/* Right side image div */}
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"  style={{borderRadius: "30px", width: "100%", boxShadow: "0 0 10px rgba(235, 214, 214, 0.5)"}}/>
    </div>
  </div>
);

export default FindUs;

