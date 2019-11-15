import React from 'react';
import axios from 'axios';

class CorporateTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    axios
      .get('/api/corporate')
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
            <th className="">ID</th>
            <th className="">First Name</th>
            <th className="">Last Name</th>
            <th className="">Company Name</th>
            <th className="">Email</th>
            <th className="">Mobile</th>
          </tr>
        </thead>

        <tbody className="">
          {this.state.data.map((data, i) => {
            return (
              <tr key={i} className="">
                <td>{i + 1}</td>
                <td>{data._id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.companyName}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CorporateTable;
