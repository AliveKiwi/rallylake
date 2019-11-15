import React from 'react';
import axios from 'axios';
class Volunteer extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: ''
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.mobile
    };

    axios
      .post('/api/volunteer/register', formData)
      .then(response => {
        console.log(response.data);
        this.handleSubmit(response.data);

        this.setState(() => ({
          firstName: '',
          lastName: '',
          email: '',
          mobile: ''
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
                Volunteer's Form
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>First Name</label>
                    <input
                      placeholder="First Name"
                      type="text"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      name="firstName"
                    />
                  </div>

                  <div className="field">
                    <label>Last Name</label>
                    <input
                      placeholder="Last Name"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      name="lastName"
                    />
                  </div>

                  <div className="field">
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                    />
                  </div>

                  <div className="field">
                    <label>Contact Number</label>
                    <input
                      placeholder="Contact Number"
                      type="text"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                      name="mobile"
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

export default Volunteer;
