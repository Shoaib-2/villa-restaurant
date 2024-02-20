import React from 'react';
import { images } from '../../constants';


// Sub heading for the Different paragraphs, with different font-size and colors.
const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img'/>
  </div>
);

export default SubHeading;
