import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import LakeImage from '../../../../images/image.jpg';

class LakeCard extends React.Component {
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
        <Image
          src={this.state.data.imageAfter || LakeImage}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.state.data.recordNumber}</Card.Header>
          <Card.Meta>
            <span>{this.state.data.status}</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to="/info">
            <Icon name="info" />
            Read More...
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default LakeCard;
