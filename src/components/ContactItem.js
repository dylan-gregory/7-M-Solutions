import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { CardItem, Left, Body, Thumbnail, Right, Text } from 'native-base';
import { Card, CardSection, Button } from './common';

class ContactItem extends Component {
  render(){
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../images/7MS-logo-black.png')} />
            <Text style={styles.textStyle}>Client Name</Text>
          </Left>

        </CardItem>
      </Card>
    );
  };
};

const styles = {
  textStyle: {
    fontFamily: 'Play',
    fontSize: 20
  }
}

export default ContactItem;
