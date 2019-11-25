import React from 'react';
import axios from 'axios';

class ZoneForm extends React.Component {
  constructor() {
    super();
    this.state = {
      zoneCode: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    // if I use this it works
    const formData = {
      zoneCode: this.state.zoneCode
    };

    axios
      .post('/api/zones/register', formData)
      .then(response => {
        this.handleSubmit(response.data);

        this.setState(() => ({
          zoneCode: ''
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px',
      width: '100%',
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'center'
    };
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <div
                style={{ fontWeight: 'bold', textAlign: 'center' }}
                className="ui segment"
              >
                Zone Form
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Zone Code</label>
                    <input
                      placeholder="Zone Code"
                      type="text"
                      value={this.state.zoneCode}
                      onChange={this.handleChange}
                      name="zoneCode"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ui button"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZoneForm;
