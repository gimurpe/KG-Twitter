import React, {Component} from 'react';
import { Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

class LoginHeaderBar extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='headerContainer'>
        <Navbar className='navbar' color="white" light expand="md">
          <NavbarBrand href="/">KG Twitter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}

export default LoginHeaderBar;