import React from 'react';

import { AboutUs, Header, Intro} from './container';
import { Navbar } from './components';
// import { Navhead } from './components';
// import Navhead from './components'; // Correct import statement
import './App.css';

const App = () => (
  <div>
    <Navbar />
    {/* <Navhead /> */}
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    {/* <Chef /> */}
    <Intro />
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    {/* <Footer /> */}
  </div>
);

export default App;
