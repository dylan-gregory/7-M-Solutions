import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Container, Content, CardItem, Left, Body, Thumbnail, Right, Text, Form, Item, Input, Label } from 'native-base';
import { Card, CardSection, Button } from './common';

class NewTask extends Component {
  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Text style={styles.textStyle}>Client Name</Text>
            <Item inlineLabel>
              <Label>First</Label>
              <Input />
            </Item>

            <Item inlineLabel>
              <Label>Last</Label>
              <Input />
            </Item>

            <Text style={styles.textStyle}>Phone Number</Text>
            <Item inlineLabel>
              <Label>###-###-####</Label>
              <Input />
            </Item>

            <Text style={styles.textStyle}>Email</Text>
            <Item inlineLabel>
              <Label>bob@gmail.com</Label>
              <Input />
            </Item>

            <Text style={styles.textStyle}>Mailing Address</Text>
            <Item inlineLabel>
              <Label>123 Main St.</Label>
              <Input />
            </Item>

            <Button>
              <Text style={styles.textStyle}>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  };
};

const styles = {
  textStyle: {
    // flex: 1,
    fontFamily: 'Play',
    color: '#fff',
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 15
  },
  rowStyle: {
    padding: 15,
    alignItems: 'center'
  },
  inputStyle: {
    flexGrow: 2
  }
}

export default NewTask;
