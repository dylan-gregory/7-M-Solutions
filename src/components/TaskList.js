import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render(){
    return (
      <TaskItem></TaskItem>
    );
  };
};

export default TaskList;
