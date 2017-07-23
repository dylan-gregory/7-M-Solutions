import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class TaskItem extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>Task title/description</Text>
          <Text style={styles.textStyle}>Client Name</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.textStyle}>Phone #</Text>
          <Text style={styles.textStyle}>Due Date</Text>
          <Text style={styles.textStyle}>Last touch</Text>
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

export default TaskItem;
