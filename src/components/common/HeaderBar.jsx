import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { func } from 'prop-types';
import TwitModal from './TwitModal';

class HeaderBar extends Component {
  static propTypes = {
    handleChangeOnTweetField: func.isRequired,
    onTwitSubmit: func.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="headerContainer">
        <Navbar className="navbar" color="white" light expand="md">
          <NavbarBrand href="/">KG Twitter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="logout">
                <NavLink href="/">Log out</NavLink>
              </NavItem>
              <NavItem>
                <img
                  src="../../../public/img/1.jpg"
                  alt="profile-bubble"
                  className="header__img--profile"
                />
              </NavItem>
              <NavItem>
                <TwitModal
                  buttonLabel="Tweet"
                  handleChangeOnTweetField={this.props.handleChangeOnTweetField}
                  onTwitSubmit={this.props.onTwitSubmit}
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;
