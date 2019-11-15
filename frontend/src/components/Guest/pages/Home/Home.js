import React from 'react';
import Image from '../../../../images/image.jpg';

class Home extends React.Component {
  render() {
    var cardStyle = {
      height: 460,
      width: 400,
      padding: 0,
      backgroundColor: '#FFF',
      boxShadow: '0px 0px 5px #666'
    };
    return (
      <div
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
        <img src={Image} alt="Anand Malligavad" width="390px" height="390px" />
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
      border: '1px solid grey',
      width: '390px',
      marginLeft: 5
    };
    return (
      <div style={labelStyle}>
        <p>My mission is to save 45 lakes by 2025."</p>
        <p>Anand Malligavad</p>
      </div>
    );
  }
}

export default Home;
