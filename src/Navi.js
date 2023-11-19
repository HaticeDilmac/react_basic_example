import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/HaticeDilmac">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{ marginRight: 'auto' }}></NavbarText>
          <NavbarText style={{ marginRight: '20px' }}>
            <i className="fas fa-shopping-cart"></i> Sepet {props.cart.length}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
