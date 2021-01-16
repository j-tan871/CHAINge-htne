import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Group from '../pages/Group';
import FindGroup from '../pages/FindGroup';
import Profile from '../pages/Profile';

const Navigation = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar
          className="navbar-horizontal navbar-dark bg-light"
          expand="lg"
        >
          <Container>
            <NavbarBrand onClick={e => e.preventDefault()}>
              CHAINge
        </NavbarBrand>
            <Nav className="ml-lg-auto">
              <NavLink><Link to="/about">About Us</Link></NavLink>
              <NavLink><Link to="/groups">My Groups</Link></NavLink>
              <NavLink><Link to="/findGroups">Find Groups</Link></NavLink>
              <NavLink><Link to="/profile">Profile</Link></NavLink>
              {/* <NavLink><Link to="/login">Login</Link></NavLink> */}
            </Nav>
            <Link to="/login">
              <Button color="primary" type="button" className="ml-3">Login</Button>
            </Link>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/groups">
            <Group />
          </Route>
          <Route path="/findGroups">
            <FindGroup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Navigation;