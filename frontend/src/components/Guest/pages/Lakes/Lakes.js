import React from 'react';
import axios from 'axios';
import LakeCard from './LakeCard';

class Lakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/lakes')
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
        {this.state.data.map(data => {
          return <LakeCard key={data._id} cardData={data}></LakeCard>;
        })}
      </div>
    );
  }
}

export default Lakes;
