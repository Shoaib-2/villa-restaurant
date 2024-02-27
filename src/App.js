import React from 'react';

import {FindUs, Footer, Gallery, Header, SpecialMenu} from './container';
import Food from './container/Food/Food';
import { Navbar } from './components';
import './App.css';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Food />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
