import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import Header from './main/Header';
import Home from './main/Home';
import Guests from './main/Guests';
import Invitations from './main/Invitations';
import InvitationDetails from './main/InvitationDetails';
import Registry from './main/Registry';
import Menu from './main/Menu';
import MenuList from './rsvp/menu/MenuList';
import './app.css';

axios.defaults.headers.common['Content-Type'] = 'applicaiton/json'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="app-component">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route exact path='/invitations' component={Invitations} />
            <Route exact path='/invitations/:code' component={InvitationDetails} />
            <Route exact path='/invitations/:code/guests' component={Guests} />
            <Route exact path='/registry' component={Registry} />
            <Route exact path='/menu' component={Menu} />
          </Switch>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
