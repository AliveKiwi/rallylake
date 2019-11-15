import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import './AdminHeader.css';

class AdminHeader extends React.Component {
  render() {
    const HeaderStyle = {
      backgroundColor: '#3393ff',
      width: '100%',
      height: 48,
      position: 'fixed',
      margin: 0,
      top: 0,
      zIndex: 100
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
        <div style={MenuStyle} className="eleven wide column">
          <div>
            <Dropdown text="Forms">
              <Dropdown.Menu direction="left">
                <Dropdown.Item>
                  <Link to="/lakeForm">Lake Form</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/eventForm">Event Form</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/zoneForm">Zone Form</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link to="/lakes">Lakes</Link>
            <Link to="/viewEvents">Events</Link>
            <Link to="/viewZones">Zones</Link>
            <Link to="/viewVolunteers">Volunteers</Link>
            <Link to="/viewCorporates">Corporates</Link>
            <Link to="/viewContacts">Contacts</Link>
            <Link to="/Complaints">Complaints</Link>

            <Dropdown text="Admin">
              <Dropdown.Menu direction="left">
                <Dropdown.Item>
                  <Link to="">Reset Password</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/logout">Logout</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHeader;
