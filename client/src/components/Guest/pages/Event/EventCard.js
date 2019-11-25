import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import LakeImage from '../../../../images/image.jpg';
import moment from 'moment';
class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cardData
    };
  }
  render() {
    return (
      <Card
        style={{ margin: 0, marginLeft: 15, marginRight: 15, marginBottom: 30 }}
      >
        <img
          style={{ height: 300 }}
          alt="Event"
          src={
            `http://localhost:5000/uploads/${this.state.data.imgName}` ||
            LakeImage
          }
        />
        <Card.Content>
          <Card.Header>{this.state.data.name}</Card.Header>
          <Card.Meta>
            <span>
              {moment.utc(this.state.data.dateFrom).format('hh:mm:ss A')}
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/events/${this.state.data._id}`}>
            <Icon name="info" />
            Read More...
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default EventCard;
