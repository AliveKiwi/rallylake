import React from 'react';
import Image from '../../../../images/image.jpg';

const Home = () => {
  return (
    <form>
      <div style={{ textAlign: 'center' }}>
        <br></br>
        <div>
          <h1 align="left">
            <img src={Image} alt="" height="300px" width="40%" align="right" />
            <br />
            <br /> "My mission is to save 45 lakes by 2025."
          </h1>
          <p align="left">
            <br />
            -Anand Malligavad
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
    </form>
  );
};

export default Home;
