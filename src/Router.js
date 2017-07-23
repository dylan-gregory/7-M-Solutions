import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashLoginPage from './components/SplashLoginPage';
import ContactList from './components/ContactList';
import TaskList from './components/TaskList';
import ProspectList from './components/ProspectList';
import Instructions from './components/Instructions';
import NewContact from './components/NewContact';
import NewTask from './components/NewTask';
import NewProspect from './components/NewProspect';


const RouterComponent = () => {
  return(
    <Router
      sceneStyle={{ paddingTop: 65, backgroundColor: '#333'}}
      navigationBarStyle={{ backgroundColor: 'grey' }}
      barButtonIconStyle={{ tintColor: '#fff' }}
      rightButtonTextStyle={{ color: '#fff', fontFamily: 'Play' }}
      titleStyle={{ fontFamily: 'Play', fontSize: 20, color: '#fff' }}
    >

            {/* add this prop to the scene to change the header font
            titleStyle={{ fontFamily: 'Baskerville' }}
            */}
      <Scene key="main">
        <Scene
          key="splash"
          component={SplashLoginPage}
          title="7rM"
          titleStyle={{ fontSize: 25 }}
          initial
        />

        <Scene
          key="contacts"
          component={ContactList}
          title="Contacts"
          rightTitle="Add +"
          onRight={() => { Actions.newContact() }}
        />

        <Scene
          key="newContact"
          component={NewContact}
          title="New Contact"
        />

        <Scene
          key="tasks"
          component={TaskList}
          title="Tasks"
          rightTitle="Add +"
          onRight={() => { Actions.newTask() }}
        />

        <Scene
          key="newTask"
          component={NewTask}
          title="New Task"
        />

        <Scene
          key="prospects"
          component={ProspectList}
          title="Prospects"
          rightTitle="Add +"
          onRight={() => { Actions.newProspect() }}
        />

        <Scene
          key="newProspect"
          component={NewProspect}
          title="New Prospect"
        />

        <Scene
          key="instructions"
          component={Instructions}
          title="Instructions"
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
