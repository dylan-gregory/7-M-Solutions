import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { CardItem, Left, Body, Thumbnail, Right, Text } from 'native-base';
import { Card, CardSection, Button } from './common';

class TaskItem extends Component {
  render(){
    return (
      <Card>
        <CardItem>
          <Left>
            <Text style={styles.textStyle}>Task title/description</Text>
          </Left>

          <Text style={styles.textStyle}>Client Name</Text>
        </CardItem>

        <CardItem>
          <Left>
            <Text style={styles.textStyle}>Due Date</Text>
          </Left>
          <Right>
            <Text style={styles.textStyle}>Last touch</Text>
          </Right>
        </CardItem>

        <CardItem>
          <Left>
            <Text note style={styles.textStyle}>Phone #</Text>
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

export default TaskItem;
