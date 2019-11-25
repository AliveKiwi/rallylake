import React from 'react';
import axios from 'axios';

class LakeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordNumber: '',
      state: '',
      district: '',
      taluk: '',
      hobli: '',
      village: '',
      zoneCode: '',
      status: '',
      video: '',
      location: '',
      // images: null,
      imgBefore: null,
      imgAfter: null,
      zones: []
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  onImgBeforeUpload = event => {
    this.setState({
      imgBefore: event.target.files[0],
      loaded: 0
    });
  };

  onImgAfterUpload = event => {
    this.setState({
      imgAfter: event.target.files[0],
      loaded: 0
    });
  };
  handleSubmit = e => {
    const formData = new FormData();

    formData.append('recordNumber', this.state.recordNumber);
    formData.append('state', this.state.state);
    formData.append('district', this.state.district);
    formData.append('taluk', this.state.taluk);
    formData.append('hobli', this.state.hobli);
    formData.append('village', this.state.village);
    formData.append('zoneCode', this.state.zoneCode);
    formData.append('status', this.state.status);
    formData.append('video', this.state.video);
    formData.append('location', this.state.location);
    formData.append('imgBefore', this.state.imgBefore);
    formData.append('imgAfter', this.state.imgAfter);

    e.preventDefault();
    console.log(formData);

    axios
      .post('/api/lakes/register', formData, {
        headers: {
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(
        this.setState({
          recordNumber: '',
          state: '',
          district: '',
          taluk: '',
          hobli: '',
          village: '',
          zoneCode: '',
          status: '',
          video: '',
          location: '',
          imgBefore: null,
          imgAfter: null
        })
      );
  };

  componentDidMount() {
    axios
      .get('/api/zones')
      .then(response => {
        this.setState({ zones: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let zones = this.state.zones
      ? this.state.zones.map((zone, index) => (
          <option key={index} value={zone.zoneCode}>
            {zone.zoneCode}
          </option>
        ))
      : null;

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
                Lake Form
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Record Number</label>
                    <input
                      placeholder="Record Number"
                      type="text"
                      value={this.state.recordNumber}
                      onChange={this.handleChange}
                      name="recordNumber"
                    />
                  </div>
                  <div className="field">
                    <label>State</label>
                    <input
                      placeholder="State"
                      type="text"
                      value={this.state.state}
                      onChange={this.handleChange}
                      name="state"
                    />
                  </div>
                  <div className="field">
                    <label>District</label>
                    <input
                      placeholder="District"
                      type="text"
                      value={this.state.district}
                      onChange={this.handleChange}
                      name="district"
                    />
                  </div>
                  <div className="field">
                    <label>Taluk</label>
                    <input
                      placeholder="Taluk"
                      type="email"
                      value={this.state.taluk}
                      onChange={this.handleChange}
                      name="taluk"
                    />
                  </div>
                  <div className="field">
                    <label>Hobli</label>
                    <input
                      placeholder="Hobli"
                      type="text"
                      value={this.state.hobli}
                      onChange={this.handleChange}
                      name="hobli"
                    />
                  </div>
                  <div className="field">
                    <label>Village</label>
                    <input
                      placeholder="Village"
                      type="text"
                      value={this.state.village}
                      onChange={this.handleChange}
                      name="village"
                    />
                  </div>

                  <div className="field">
                    <label>Status</label>
                    <input
                      placeholder="Status"
                      type="text"
                      name="status"
                      value={this.state.status}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="field">
                    <label>Zone</label>
                    <select
                      name="zoneCode"
                      value={this.state.zoneCode}
                      onChange={this.handleChange}
                      style={{ marginRight: 10 }}
                    >
                      <option>Select the zone</option>
                      {zones}
                    </select>
                  </div>

                  <div className="field">
                    <label>Video</label>
                    <input
                      placeholder="Video"
                      type="text"
                      value={this.state.video}
                      onChange={this.handleChange}
                      name="video"
                    />
                  </div>

                  <div className="field">
                    <label>Image Before</label>
                    <input
                      placeholder="Image"
                      type="file"
                      onChange={this.onImgBeforeUpload}
                      name="imgBefore"
                    />
                  </div>
                  <div className="field">
                    <label>Image After</label>
                    <input
                      placeholder="Image"
                      type="file"
                      onChange={this.onImgAfterUpload}
                      name="imgAfter"
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

          <div className="row">
            <div className="column">
              <div style={{ textAlign: 'center' }} className="ui segment">
                <h4>You may contact us directly via email or phone :</h4>
                <p>Email : contact@rallyforlakes.com</p>
                <p>Phone : +919773736958</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//

export default LakeForm;
