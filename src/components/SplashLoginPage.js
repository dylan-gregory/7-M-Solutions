import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class SplashLoginPage extends Component {
  render() {
    return (
      <Image
        source={require('../images/leatherish-bg.jpg')}
        style={styles.backgroundImageStyle}
      >

          <Grid style={{ borderBottomWidth: 1, borderBottomColor: '#fff', padding: 5 }}>
            <Col style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
              <Row>
                <Text style={styles.headerTextStyle}>John Doe</Text>
              </Row>
              <Text style={styles.headerTextStyle}>Sales Rep</Text>
            </Col>

            <Col>
              <Image source={require('../images/7MS-logo-white.png')}
              style={{ height: 100, width: null }}
              />
            </Col>
          </Grid>




              <Button onPress={() => { Actions.contacts() }}>
                <Text>
                  Contact List
                </Text>
              </Button>

              <Button onPress={() => { Actions.tasks() }}>
                <Text>
                  Task List
                </Text>
              </Button>

              <Button onPress={() => { Actions.prospects() }}>
                <Text>
                  Prospect List
                </Text>
              </Button>

              <Button onPress={() => { Actions.instructions() }}>
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
  headerTextStyle: {
    fontFamily: 'Play',
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    color: '#fff',
    fontSize: 30
  },

}

export default SplashLoginPage;
