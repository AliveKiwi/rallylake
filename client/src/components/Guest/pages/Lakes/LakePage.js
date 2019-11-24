import React, { Component } from 'react';
import axios from 'axios';

const container = {
  paddingTop: 60,
  textAlign: 'center',
  marginBottom: '3%'
};
class LakePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/lakes/${this.props.match.params.recordNumber}`)
      .then(response => {
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
              <div className="ui segment">Lake Details</div>
            </div>
          </div>

          <div
            className="row ui segment"
            style={{ marginLeft: '2%', marginRight: '2%' }}
          >
            <div
              className="ui divided two column grid segment"
              style={{ margin: '0.5%' }}
            >
              <div className="row">
                <div className="column ui segment">Record Number</div>
                <div className="column ui segment">
                  {this.state.data.recordNumber}
                </div>
              </div>

              <div className="row">
                <div className="column ui segment">District</div>
                <div className="column ui segment">
                  {this.state.data.district}
                </div>
              </div>

              <div className="row ">
                <div className="column ui segment">Hobli</div>
                <div className="column ui segment">{this.state.data.hobli}</div>
              </div>

              <div className="row ">
                <div className="column ui segment">Zone</div>
                <div className="column ui segment">{this.state.data.zone}</div>
              </div>
            </div>

            <div
              className="ui divided two column grid segment"
              style={{ margin: '0.5%' }}
            >
              <div className="row">
                <div className="column ui segment">State</div>
                <div className="column ui segment">{this.state.data.state}</div>
              </div>

              <div className="row">
                <div className="column ui segment">Taluk</div>
                <div className="column ui segment">{this.state.data.taluk}</div>
              </div>

              <div className="row ">
                <div className="column ui segment">Village</div>
                <div className="column ui segment">
                  {this.state.data.village}
                </div>
              </div>

              <div className="row ">
                <div className="column ui segment">Status</div>
                <div className="column ui segment">
                  {this.state.data.status}
                </div>
              </div>
            </div>
          </div>

          <div
            className="row ui segment"
            style={{ marginLeft: '2%', marginRight: '2%' }}
          >
            <div className="column ui segment" style={{ margin: '0.5%' }}>
              <div className="row ">Before Rejuvenation</div>
              <div className="row ui segment">
                {this.state.data.imgBefore ? (
                  <img
                    style={{ width: '99%', height: '50%' }}
                    src={`http://localhost:5000/uploads/${this.state.data.imgBefore}`}
                  />
                ) : (
                  <h1>Image Before</h1>
                )}
              </div>
            </div>

            <div className="column ui segment" style={{ margin: '0.5%' }}>
              <div className="row ">After Rejuvenation</div>
              <div className="row ui segment">
                {this.state.data.imgBefore ? (
                  <img
                    style={{ width: '99%', height: '50%' }}
                    src={`http://localhost:5000/uploads/${this.state.data.imgAfter}`}
                  />
                ) : (
                  <h1>Image After</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LakePage;
