import React from 'react';
import VolunteerTable from './VolunteerTable';

class ViewVolunteer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    // console.log(this.state.data);
    let container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    };
    return (
      <div style={container}>
        <VolunteerTable></VolunteerTable>
      </div>
    );
  }
}

export default ViewVolunteer;
