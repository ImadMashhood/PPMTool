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

class Header extends Component {
  render() {
    return (
      <>
        {/*Custom Nav button written using this video as a guide: https://www.youtube.com/watch?v=VzWBLj_CfpE*/}
        <Nav>
          <NavImg to="/">
            <ImgLogo />
          </NavImg>
          <Bars />
          <NavMenu>
            <NavLink to="/dashboard" activeStyle>
              Dashboard
            </NavLink>
            <NavLink to="/services" activeStyle>
              About Us
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
              Sign Up
            </NavLink>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavMenu>
        </Nav>
      </>
    );
  }
}

export default Header;
