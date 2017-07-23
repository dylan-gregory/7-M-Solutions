import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Input } from './common';

class NewTask extends Component {
  render(){
    return (
        <Grid>
          <Row style={styles.rowStyle}>
            <Text style={styles.textStyle}>Client Name</Text>

            <Input style={styles.inputStyle} placeholder="First" />
          </Row>

          <Row style={styles.rowStyle}>
              <Input style={styles.inputStyle} placeholder="Last" />
          </Row>

          <Row style={styles.rowStyle}>

              <Text style={styles.textStyle}>Phone Number</Text>

            <Input style={styles.inputStyle} placeholder="555-555-5555" />
          </Row>
          <Row style={styles.rowStyle}>

              <Text style={styles.textStyle}>Email Address</Text>

            <Input style={styles.inputStyle} placeholder="bob@gmail.com" />
          </Row>
          <Row style={styles.rowStyle}>

              <Text style={styles.textStyle}>Mailing Address</Text>

            <Input style={styles.inputStyle} placeholder="452 Main St Greenville SC, 29611" />
          </Row>

          <Button>
            <Text style={styles.textStyle}>Save</Text>
          </Button>

        </Grid>

    );
  };
};

const styles = {
  textStyle: {
    // flex: 1,
    fontFamily: 'Play',
    color: '#fff',
    fontSize: 18
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
