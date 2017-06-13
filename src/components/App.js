import React from 'react';
import axios from 'axios';
import YeomanImage from './YeomanImage';
import MenuList from './rsvp/menu/MenuList';
import './app.css';

axios.defaults.headers.common['Content-Type'] = 'applicaiton/json'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
        <MenuList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
