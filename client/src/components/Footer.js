import React from 'react';
import Logo from '../images/logo.png';

const Footer = () => {
  var style = {
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    height: '60px',
    width: '100%',
    flex: 'inline'
  };

  return (
    <div>
      <div style={style}>
        <img src={Logo} alt="" />
        <p>
          RallyForLakes.com &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
