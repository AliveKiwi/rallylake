import React from 'react';
import axios from 'axios';
class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dateFrom: '',
      dateTo: '',
      timeFrom: '00:00:00',
      timeTo: '00:00:00',
      location: '',
      imgName: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  onImageUpload = event => {
    this.setState({
      imgName: event.target.files[0],
      loaded: 0
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', this.state.name);
    formData.append('dateFrom', this.state.dateFrom);
    formData.append('dateTo', this.state.dateTo);
    formData.append('timeFrom', this.state.timeFrom);
    formData.append('timeTo', this.state.timeTo);
    // formData.append(
    //   'timeFrom',
    //   new momemnt(this.state.timeFrom, 'HH:mm:ss').local()
    // );
    // formData.append(
    //   'timeTo',
    //   new momemnt(this.state.timeTo, 'HH:mm:ss').local()
    // );
    formData.append('location', this.state.location);
    formData.append('imgName', this.state.imgName);

    // for (var x = 0; x < this.state.images.length; x++) {
    //   formData.append('images', this.state.images[x]);
    // }
    console.log(formData);

    axios
      .post('/api/events/register', formData, {
        headers: {
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'multipart/form-data'
        }
      })
      .catch(err => {
        console.log(err);
      });
    // .then(
    //   this.setState({
    //     name: '',
    //     dateFrom: '',
    //     dateTo: '',
    //     timeFrom: '00:00:00',
    //     timeTo: '00:00:00',
    //     location: '',
    //     imgName: ''
    //   })
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
                      type="date"
                      value={this.state.dateTo}
                      onChange={this.handleChange}
                      name="dateTo"
                    />
                  </div>

                  <div className="field">
                    <label>Time From</label>
                    <input
                      placeholder="Timing"
                      type="time"
                      value={this.state.timeFrom}
                      onChange={this.handleChange}
                      name="timeFrom"
                    />
                  </div>

                  <div className="field">
                    <label>Time To</label>
                    <input
                      placeholder="Timing"
                      type="time"
                      value={this.state.timeTo}
                      onChange={this.handleChange}
                      name="timeTo"
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

                  <div className="field">
                    <label>Image </label>
                    <input
                      placeholder="Image"
                      type="file"
                      onChange={this.onImageUpload}
                      name="imgName"
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

export default EventForm;
