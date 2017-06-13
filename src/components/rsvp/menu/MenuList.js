import React from 'react';
import MenuItem from './MenuItem'
import axios from 'axios';
import './menulist.scss';

class MenuList extends React.Component {

 constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/menu/items")
      .then(res => {
        const items = res.data;
        this.setState({ items: items });
      });
  }

  render() {
    return (
      <div className="menulist-component">
        <h1>Menu Items</h1>
        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Dish</th>
              <th>Description</th>
              <th>Key</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item =>
              <MenuItem item={item}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

MenuList.displayName = 'RsvpMenuMenuList';
MenuList.propTypes = {};
MenuList.defaultProps = {};

export default MenuList;
