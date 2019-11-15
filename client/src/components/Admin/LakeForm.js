import React from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Select from 'react-select';

class LakeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

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
    const option = [
      { label: 'KA-BLR-1', value: 1 },
      { label: 'KA-BLR-2', value: 2 },
      { label: 'KA-BLR-3', value: 3 },
      { label: 'KA-BLR-4', value: 4 }
    ];

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p className="h1 text-center mb-4">Lakes</p>
              <p className="h3 text-center mb-4">Add / Update Lake Details</p>
              <label>Enter Record Number</label>
              <input type="text" id="recordNumber" />
              <br />
              <label>Enter State</label>
              <input type="text" id="state" />
              <br />
              <label>Enter District</label>
              <input type="text" id="district" />
              <br />
              <label>Enter Taluk</label>
              <input type="text" id="taluk" />
              <br />
              <label>Enter Hobli</label>
              <input type="text" id="hobli" />
              <br />
              <label>Enter Village</label>
              <input type="text" id="village" />
              <br />
              <label>Select Zone Number</label>
              <Select options={option} />
              <br />
              <label>Enter Rejuvenation Status</label>
              <input type="text" id="status" />
              <br />
              <label>Enter Video URL</label>
              <input type="text" id="videoURL" />
              <br />
              <label>Lake Before Image </label>
              <br />
              <br />
              <input type="file" id="beforeImg" />
              <br />
              <br />
              <label>Lake After Image</label>
              <br />
              <br />
              <input type="file" id="afterImg" />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" id="addLake">
                  Add Lake
                </MDBBtn>
                <MDBBtn color="indigo" type="submit" id="updateLake">
                  Update Lake
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LakeForm;
