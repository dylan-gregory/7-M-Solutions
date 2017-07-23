import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class NewContact extends Component {
  render(){
    return (
      <Text>
        This will be the new contact form, have button to pull in contacts from phone
      </Text>
    );
  };
};

export default NewContact;
