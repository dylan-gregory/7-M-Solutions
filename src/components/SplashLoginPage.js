import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

class SplashLoginPage extends Component {
  render() {
    return (
      <Image
        source={require('../images/metal-bg.jpg')}
        style={styles.backgroundImageStyle}
      >
        <View style={styles.imageViewStyle}>
          <Text style={styles.textStyle}>
            I got a background
          </Text>
        </View>
      </Image>
    );
  };
}

const styles = {
  backgroundImageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  imageViewStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 5,
    paddingTop: 12,
    height: 130,
    width: 360,
  },
  textStyle: {
    color: '#fff',
    fontSize: 30
  }
}

export default SplashLoginPage;
