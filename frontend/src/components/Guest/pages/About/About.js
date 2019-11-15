import React from 'react';
import aboutImage from '../../../../images/about.jpeg';
import Anand from '../../../../images/image.jpg';
import Akshaya from '../../../../images/image1.jpeg';
import Sansera from '../../../../images/sansera.png';
import SayTrees from '../../../../images/say-trees.png';
import HP from '../../../../images/hp.png';
import Bhoomi from '../../../../images/bhoomi.png';
import Hikal from '../../../../images/hikal.png';
import Better from '../../../../images/better.jpg';
import Gas from '../../../../images/gas.jpg';
import DCF from '../../../../images/DCF.jpg';

import { Card, Image } from 'semantic-ui-react';

class About extends React.Component {
  render() {
    const container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px'
      // display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-evenly'
    };
    const removePaddingRow = { paddingTop: 10, paddingBottom: 0 };
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div style={removePaddingRow} className="row ">
            <div
              style={{ height: '100%', backgroundColor: '#CCFFCC' }}
              className="column center"
            >
              <h1
                style={{
                  fontFamily: 'Times New Roman',
                  fontStyle: 'Italic',
                  color: '#black',
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}
              >
                Our Approach
              </h1>
              <p
                style={{
                  fontFamily: 'Times New Roman',
                  fontStyle: 'Italic',
                  color: '#black',
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}
              >
                Our philosophy is to bring back the lakes to its original form.
                It means the ecological revival of lakes with the minimal use of
                any modern material.
              </p>
              <p
                style={{
                  fontFamily: 'Times New Roman',
                  fontStyle: 'Italic',
                  color: '#black',
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}
              >
                Our methodology focuses on rejuvenation of a lake within a
                limited span of time and minimal budget. They are designed and
                executed in a technical manner which involves modern
                re-engineering and scientific techniques.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="column" align="center">
              <img src={aboutImage} alt="" />
            </div>
          </div>

          <div style={removePaddingRow} className="row">
            <div
              style={{ height: '100px', backgroundColor: '#CCFFCC' }}
              className="column"
            >
              <h1
                style={{
                  fontFamily: 'Times New Roman',
                  fontStyle: 'Italic',
                  color: '#black',
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}
              >
                Our Vision
              </h1>
              <p
                style={{
                  fontFamily: 'Times New Roman',
                  fontStyle: 'Italic',
                  color: '#black',
                  textAlign: 'center',
                  marginTop: '1%',
                  marginBottom: '1%'
                }}
              >
                The Lake Rejuvenation journey began with the aim of saving the
                city of Bangalore from a potential drought crisis. The vision is
                to revive 45 lakes by 2025 and save at least 25% of the city
                from a crisis.
              </p>
            </div>
          </div>

          <div className="row" style={{ justifyContent: 'center' }}>
            <h1>Meet the Team</h1>
          </div>

          <div className="ui divided two column grid">
            <div className="row">
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="column"
              >
                <Card>
                  <Image src={Anand} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Anand Malligavad</Card.Header>
                    <Card.Description>Lake Conservationist </Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="column"
              >
                <Card>
                  <Image src={Anand} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Akshaya Devendra</Card.Header>
                    <Card.Description>Environmentalist</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </div>

            <div className="row" style={{ justifyContent: 'center' }}>
              <h1>Partners</h1>
            </div>

            <div className="row">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  flexWrap: 'wrap',
                  padding: '2%'
                }}
              >
                <img
                  style={{ margin: '1%' }}
                  width="150px"
                  height="150px"
                  src={Sansera}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="150px"
                  height="150px"
                  src={SayTrees}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="150px"
                  height="150px"
                  src={HP}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="300px"
                  height="150px"
                  src={Hikal}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="400px"
                  height="150px"
                  src={Bhoomi}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="300px"
                  height="150px"
                  src={DCF}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="150px"
                  height="150px"
                  src={Gas}
                  alt=""
                />
                <img
                  style={{ margin: '1%' }}
                  width="150px"
                  height="150px"
                  src={Better}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
