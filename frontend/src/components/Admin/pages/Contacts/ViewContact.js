import React from 'react';
import ContactTable from './ContactTable';

class ViewContact extends React.Component {
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
        <ContactTable></ContactTable>
      </div>
    );
  }
}

export default ViewContact;
