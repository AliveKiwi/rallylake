import React from 'react';
import Image from '../../../../images/image.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component {
  render() {
    var cardStyle = {
      height: 460,
      width: 400,
      paddingLeft: 0,
      backgroundColor: '#FFF',
      boxShadow: '0px 0px 5px #666'
    };
    var styleObj = {
      fontSize: 80,
      paddingTop: 120,
      paddingLeft: 60
    };
    var styleObjs = {
      fontSize: 40,
      paddingTop: 30
    };
    var carouselStyle = {
      display: 'flex',
      justifyContent: 'center',
      padding: 50
    };
    return (
      <form>
        <div className="ui equal width grid">
          <div className="row"></div>
          <div className="row">
            <div className="column">
              <div>
                <h1 style={styleObj}>
                  "My mission is to save 45 lakes by 2025"
                </h1>
              </div>
            </div>
            <div
              className="column"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '60px'
              }}
            >
              <div style={cardStyle}>
                <Square />
                <Label />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div align="center">
                <h1 style={styleObjs}>Recent Events</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div style={carouselStyle}>
                <Carousel
                  showThumbs
                  infiniteLoop
                  width="500px"
                  align="center"
                  autoPlay
                >
                  <div>
                    <img src={Image} alt="" />
                  </div>
                  <div>
                    <img src={Image} alt="" />
                  </div>
                  <div>
                    <img src={Image} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
class Square extends React.Component {
  render() {
    var squareStyle = {
      textAlign: 'center',
      marginTop: 4
    };
    return (
      <div style={squareStyle}>
        <img src={Image} alt="" width="390px" height="390px" />
      </div>
    );
  }
}
class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: 'san-serif',
      fontWeight: 'bold',
      textAlign: 'center',
      // border: '1px solid grey',
      width: '390px',
      marginLeft: 5
    };
    return (
      <div style={labelStyle}>
        <p> </p>
        <h3>Anand Malligavad</h3>
      </div>
    );
  }
}

export default Home;
