import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Card, CardSection, Button } from './common';

class SplashLoginPage extends Component {
  render() {
    return (
      <Image
        source={require('../images/leatherish-bg.jpg')}
        style={styles.backgroundImageStyle}
      >

         <CardSection>
          <Grid>
            <Col>
              <Row>
                <Text>John Doe</Text>
              </Row>
              <Text>Sales Rep</Text>
            </Col>

            <Col>
              <Image source={require('../images/7MS-logo-black.png')}
              style={{ height: 100, width: null }}
              />
            </Col>
          </Grid>


         </CardSection>



              <Button>
                <Text>
                  Contact List
                </Text>
              </Button>

              <Button>
                <Text>
                  Task List
                </Text>
              </Button>

              <Button>
                <Text>
                  Prospect List
                </Text>
              </Button>

              <Button>
                <Text>
                  How to use
                </Text>
              </Button>


      </Image>
    );
  };
}

const styles = {
  backgroundImageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  imageViewStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 5,
    paddingTop: 12,
    height: 130,
    width: 360,
  },
  textStyle: {
    color: '#fff',
    fontSize: 30
  }
}

export default SplashLoginPage;
