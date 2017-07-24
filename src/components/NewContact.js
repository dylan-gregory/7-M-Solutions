import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Container, Content, CardItem, Left, Body, Thumbnail, Right, Text, Form, Item, Input, Label } from 'native-base';
import { Card, CardSection, Button } from './common';

class NewContact extends Component {
  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Text style={styles.textStyle}>Client Name</Text>
            <Item >
              <Input placeholder="First"/>
            </Item>

            <Item>
              <Input placeholder="Last"/>
            </Item>

            <Text style={styles.textStyle}>Phone Number</Text>
            <Item>
              <Input placeholder="555-555-5555" />
            </Item>
            <Text>(Button here to add another number, business, etc)</Text>

            <Text style={styles.textStyle}>Email</Text>
            <Item>
              <Input placeholder="bob@gmail.com"/>
            </Item>

            <Text style={styles.textStyle}>Mailing Address</Text>
            <Item>
              <Input placeholder="123 Main St. Greenville, SC"/>
            </Item>

            <Text style={styles.textStyle}>Last Touch</Text>
            <Item>
              <Input placeholder="Datepicker" />
              <Input placeholder="Note"/>
            </Item>

            <Text style={styles.textStyle}>Next Touch Personal</Text>
            <Item>
              <Input placeholder="Datepicker" />
            </Item>
            <Item>
              <Input placeholder="Note"/>
            </Item>

            <Text style={styles.textStyle}>Next Touch Business</Text>
            <Item>
              <Input placeholder="Datepicker" />
            </Item>
            <Item>
              <Input placeholder="Note"/>
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
  inputStyle: {
    flexGrow: 2
  }
}

export default NewContact;
