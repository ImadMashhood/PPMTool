import React, { Component } from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavImg,
} from "./Layout/HeaderElements";
import { ReactComponent as ImgLogo } from "../images/Logo.svg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/securityActions";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.security;
    const userIsNotAuthenticated = (
      <NavMenu>
        <NavLink to="/about-us" activestyle>
          About Us
        </NavLink>
        <NavLink to="/signup" activestyle>
          Sign Up
        </NavLink>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavMenu>
    );
    const userIsAuthenticated = (
      <NavMenu>
        <NavLink to="/about-us" activestyle>
          About Us
        </NavLink>
        <NavLink to="/dashboard" activestyle>
          {user.fullName}
        </NavLink>
        <NavLink to="/logout" activestyle onClick={this.logout.bind(this)}>
          Logout
        </NavLink>
      </NavMenu>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <>
        <Nav>
          <NavImg to="/">
            <ImgLogo />
          </NavImg>
          <Bars />
          <NavMenu>{headerLinks}</NavMenu>
        </Nav>
      </>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
