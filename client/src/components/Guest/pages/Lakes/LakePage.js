import React, { Component } from 'react';
import axios from 'axios';

const container = {
  paddingTop: 60,
  textAlign: 'center'
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
        console.log(this.state.data);
      });
  }
  render() {
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <div className="ui segment">Lake Details</div>
            </div>
          </div>

          <div className="row">
            <div className="ui divided two column grid segment">
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
            <div className="ui divided two column grid segment">
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

          <div className="row ui segment">
            <div className="column ui segment">
              <div className="row ">Before Rejuvenation</div>
              <div className="row ui segment">
                <img src={this.state.data.imgBefore} />
              </div>
            </div>
            <div className="column ui segment">
              <div className="row ">After Rejuvenation</div>
              <div className="row ui segment">
                {/* {console.log(this.state.data.imgAfter)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LakePage;
