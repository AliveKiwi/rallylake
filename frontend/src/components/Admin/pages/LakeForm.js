import React from 'react';
import axios from 'axios';
import Select from 'react-select';

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
      zone: '',
      status: '',
      video: '',
      imgBefore: '',
      imgAfter: '',
      location: '',
      file: '',
      filePath: '',

      data: []
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  //When the user starts filling the form, e.target.value will be empty. So seperate handler should be written for file handling.
  fileHanlde = e => {
    e.preventDefault();

    this.setState({
      file: e.target.files[0]
    });

    //This is for preview of file uploaded
    this.setState({
      filePath: URL.createObjectURL(e.target.files[0])
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
    formData.append('zone', this.state.zone);
    formData.append('status', this.state.status);
    formData.append('video', this.state.video);
    //HTML 'name' attribute should match with first argument of append
    formData.append('imgAfter', this.state.file);
    e.preventDefault();

    console.log(this.state);

    //"Content-Type": "multipart/form-data" is compulsory. Multer has to be used for viewing the FormData.
    axios
      .post('/api/lakes/reigster', formData, {
        headers: {
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log('res', res);
      });
  };

  componentDidMount() {
    axios
      .get('/api/zones')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
                Lake's Form
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
                      value={this.state.status}
                      onChange={this.handleChange}
                      name="status"
                    />
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
                      value={this.state.imgAfter}
                      onChange={this.handleChange}
                      name="imgAfter"
                    />
                  </div>

                  <div className="field">
                    <label>Image After</label>
                    <input
                      placeholder="Image"
                      type="file"
                      value={this.state.imgAfter}
                      onChange={this.handleChange}
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
