import React from 'react';
import './menuitem.scss';

class MenuItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      <tr>
        <td className="menuitem-component mdl-data-table__cell--non-numeric">{this.props.item.name}</td>
        <td>{this.props.item.description}</td>
        <td>{this.props.item.key}</td>
      </tr>
    );
  }
}

MenuItem.displayName = 'RsvpMenuMenuItem';
MenuItem.propTypes = {};
MenuItem.defaultProps = {};

export default MenuItem;
