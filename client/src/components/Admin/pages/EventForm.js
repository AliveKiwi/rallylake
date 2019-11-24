import React from 'react';
import axios from 'axios';

class Corporates extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dateFrom: '',
      dateTo: '',
      timings: '',
      location: '',
      imgURL: ''
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
      dateFrom: this.state.dateFrom,
      dateTo: this.state.dateTo,
      timings: this.state.timings,
      location: this.state.location,
      imgURL: this.state.imgURL
    };

    axios
      .post('/register', formData)
      .then(response => {
        this.handleSubmit(response.data);

        this.setState(() => ({
          name: '',
          dateFrom: '',
          dateTo: '',
          timings: '',
          location: '',
          imgURL: ''
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
                Event's Form
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Event Name</label>
                    <input
                      placeholder="Event Name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                    />
                  </div>

                  <div className="field">
                    <label>Date From</label>
                    <input
                      placeholder="Date From"
                      type="date"
                      value={this.state.dateFrom}
                      onChange={this.handleChange}
                      name="dateFrom"
                    />
                  </div>

                  <div className="field">
                    <label>Date To</label>
                    <input
                      placeholder="Date To"
                      type="text"
                      value={this.state.dateTo}
                      onChange={this.handleChange}
                      name="dateTo"
                    />
                  </div>

                  <div className="field">
                    <label>Timing</label>
                    <input
                      placeholder="Timing"
                      type="text"
                      value={this.state.timings}
                      onChange={this.handleChange}
                      name="timings"
                    />
                  </div>

                  <div className="field">
                    <label>Location</label>
                    <input
                      placeholder="Location"
                      type="text"
                      value={this.state.location}
                      onChange={this.handleChange}
                      name="location"
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

export default Corporates;
