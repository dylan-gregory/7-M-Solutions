import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import ContactItem from './ContactItem';

class ContactList extends Component {
  render(){
    return (
      <ContactItem></ContactItem>
    );
  };
};

export default ContactList;
