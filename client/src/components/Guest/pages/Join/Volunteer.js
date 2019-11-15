import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';
class Volunteer extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
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
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
    };

    axios
      .post('/api/volunteer/register', formData)
      .then(response => {
        console.log(response.data);
        this.handleSubmit(response.data);

        this.setState(() => ({
          name: '',
          email: '',
          mobile: ''
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={this.handleSubmit}>
              <p className="h1 text-center mb-4">Join Us</p>
              <p className="h3 text-center mb-4">Volunteer</p>
              <label>Your name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
              <br />
              <label>Your email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <br />
              <label>Contact No.</label>
              <input
                type="text"
                value={this.state.mobile}
                onChange={this.handleChange}
                name="mobile"
              />
              <br />
              <div className="text-center mt-4">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Volunteer;
