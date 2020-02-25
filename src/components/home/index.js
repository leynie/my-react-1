import React from 'react';

import Navbar from '../navbar';

const listNav = ['bonjour', 'nouveau menu'];

const Home = () => (
  <div>
    <Navbar listNav={listNav} />
    <h1>Home</h1>
  </div>
);

export default Home;
