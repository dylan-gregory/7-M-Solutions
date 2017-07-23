import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class ContactItem extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>Photo?/Client Name</Text>
        </CardSection>
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
