import React from 'react';
import './header.scss';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">RSVP Admin</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/invitations">Invitations</NavItem>
          <NavItem eventKey={2} href="/menu">Menu</NavItem>
          <NavItem eventKey={3} href="/registry">Registry</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

Header.displayName = 'MainHeader';
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
