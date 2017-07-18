import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashLoginPage from './components/SplashLoginPage';


const RouterComponent = () => {
  return(
    <Router
      sceneStyle={{ paddingTop: 65, backgroundColor: '#333'}}
      navigationBarStyle={{ backgroundColor: '#576AAC' }}
      barButtonIconStyle={{ tintColor: '#fff' }}
      rightButtonTextStyle={{ color: '#fff' }}
      titleStyle={{ fontSize: 20, color: '#fff' }}
    >

            {/* add this prop to the scene to change the header font
            titleStyle={{ fontFamily: 'Baskerville' }}
            */}
      <Scene key="main">
        <Scene
          key="splash"
          component={SplashLoginPage}
          title="7rM"
          titleStyle={{ fontSize: 20, letterSpacing: 3 }}
          initial
        />

      </Scene>

    </Router>
  );
};


// COLORS:
// cream: #FAEFCC
// off black: #333
// darker green: #60993E
// lighter green: #A1E44D
// blue: #3C91CA

// tealy: #00A5A5
// lighter teal: #79D2CA

export default RouterComponent;
