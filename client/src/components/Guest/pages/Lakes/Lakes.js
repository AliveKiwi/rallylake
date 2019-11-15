import React from 'react';
import axios from 'axios';
import Image from '../../../../images/image.jpg';

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
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {this.state.data.map(data => {
          return (
            <div
              className="card"
              style={{
                width: '18rem',
                flex: 1,
                padding: '10px',
                margin: '6px'
              }}
            >
              <img src={Image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.recordNumber}</h5>
                <p className="card-text">{data.divison}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Lakes;
