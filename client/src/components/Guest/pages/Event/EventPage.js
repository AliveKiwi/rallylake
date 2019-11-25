import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
const container = {
  paddingTop: 60,
  textAlign: 'center',
  marginBottom: '3%'
};

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params._id}`).then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div className="row" style={{ marginLeft: '1%', marginRight: '1%' }}>
            <div className="column">
              <div className="ui segment">Event Details</div>
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Event Name
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {this.state.data.name}
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Date From
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {moment.utc(this.state.data.dateFrom).format('DD-MM-YYYY')}
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Date To
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {moment.utc(this.state.data.dateTo).format('DD-MM-YYYY')}
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Time From
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {moment.utc(this.state.data.timeFrom).format('hh:mm:ss A')}
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Time To
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {moment.utc(this.state.data.timeTo).format('hh:mm:ss A')}
            </div>
          </div>

          <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
            <div className="column ui segment" style={{ marginRight: '0.5%' }}>
              Location
            </div>
            <div className="column ui segment" style={{ marginLeft: '0.5%' }}>
              {this.state.data.location}
            </div>
          </div>
        </div>

        <div className="row" style={{ marginLeft: '2%', marginRight: '2%' }}>
          <div className="column ui segment" style={{ margin: '0.5%' }}>
            <div className="row ">Event Banner</div>
            <div className="row ui segment">
              {this.state.data.imgName ? (
                <img
                  style={{ width: '99%', height: '50%' }}
                  src={`http://localhost:5000/uploads/${this.state.data.imgName}`}
                  alt="Event"
                />
              ) : (
                <h1>Event</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventPage;
