import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import LakeImage from '../../../../images/image.jpg';

class ZoneTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    axios
      .get('/api/zones')
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.state.data);
    return (
      <table style={{ textAlign: 'center' }} className="ui celled table">
        <thead className="">
          <tr className="">
            <th className="">Serial</th>
            <th className="">Zone Code</th>
          </tr>
        </thead>

        <tbody className="">
          {this.state.data.map((data, i) => {
            return (
              <tr key={i} className="">
                <td>{i + 1}</td>
                <td>{data.zoneCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ZoneTable;
{
  /* 
        {this.state.data.map(data => {
          return <ZoneTable zoneData={data}></ZoneTable>;
        })} */
}
