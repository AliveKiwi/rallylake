import React from 'react';
import aboutImage from '../../../../images/about.jpeg';
import Anand from '../../../../images/image.jpg';
import Akshaya from '../../../../images/image1.jpeg';
import Sansera from '../../../../images/sansera.png';
import SayTrees from '../../../../images/say-trees.png';
import HP from '../../../../images/hp.png';
import Bhoomi from '../../../../images/bhoomi.png';
import Hikal from '../../../../images/hikal.png';
import Better from '../../../../images/better.jpg';
import Gas from '../../../../images/gas.jpg';
import DCF from '../../../../images/DCF.jpg';
import { Row, Col, Card } from 'react-materialize';

const About = () => {
  return (
    <form>
      <h1 align="center">About Us</h1>
      <br />
      <h4>Our Approach</h4>
      <h6>
        Our philosophy is to bring back the lakes to its original form. It means
        the ecological revival of lakes with the minimal use of any modern
        material.
        <br />
        <br />
        Our methodology focuses on rejuvenation of a lake within a limited span
        of time and minimal budget. They are designed and executed in a
        technical manner which involves modern re-engineering and scientific
        techniques.
      </h6>
      <br />
      <div align="center">
        <img src={aboutImage} alt="" />
      </div>
      <br />
      <h4>Our Vision</h4>
      <h6>
        The Lake Rejuvenation journey began with the aim of saving the city of
        Bangalore from a potential drought crisis. The vision is to revive 45
        lakes by 2025 and save at least 25% of the city from a crisis.
      </h6>
      <br />
      <h3 align="center">Meet the Team</h3>
      <br />
      <Row>
        <Col m={6} s={12}>
          <Card header={<img src={Anand} alt="" width="100%" />}>
            <h5>Anand Malligavad</h5>
            <p>Lake Conservationist</p>
          </Card>
        </Col>
        <Col m={6}>
          <Card header={<img src={Akshaya} alt="" width="100%" />}>
            <h5>Akshaya Devendra</h5>
            <p>Environmentalist</p>
          </Card>
        </Col>
      </Row>
      <div>
        <h1 align="center">Our Partners</h1>
        <br />
        <h2> </h2>
        <img src={Sansera} alt="" align="left" />
        <img src={SayTrees} alt="" />
        <img src={HP} alt="" align="center" />
        <img src={Hikal} alt="" align="right" />
        <br />
        <img src={Bhoomi} alt="" align="center" />
        <img src={DCF} alt="" width="25%" align="right" />
        <img src={Gas} alt="" align="right" />
        <img src={Better} alt="" align="center" />
      </div>
    </form>
  );
};

export default About;
