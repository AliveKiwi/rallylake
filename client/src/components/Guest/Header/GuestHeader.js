import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import './GuestHeader.css';

class GuestHeader extends React.Component {
  render() {
    const HeaderStyle = {
      backgroundColor: '#3393ff',
      width: '100%',
      height: 48,
      position: 'fixed',
      margin: 0,
      top: 0,
      zIndex: '100'
    };
    const MenuStyle = {
      display: 'flex-inline',
      textAlign: 'right'
    };
    return (
      <div style={HeaderStyle} className="ui equal width height grid">
        <div className="column">
          <div>1</div>
        </div>
        <div style={MenuStyle} className="column">
          <div>
            <Link to="/">Home</Link>
            <Link to="/lakes">Lakes</Link>
            <Link to="/events">Events</Link>
            <Link to="/about">About Us</Link>
            <Dropdown text="Join Us">
              <Dropdown.Menu direction="left">
                <Dropdown.Item>
                  <Link to="/volunteers">Volunteers</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/corporates">Corporates</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestHeader;
