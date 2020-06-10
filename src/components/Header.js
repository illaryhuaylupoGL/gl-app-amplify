import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth, Hub } from "aws-amplify";

function Header() {
  let [isLoggedIn, setUser] = useState(null);
  useEffect(() => {
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser);
    updateUser();
    return () => Hub.remove("auth", updateUser);
  }, []);

  return (
    <div>
      {isLoggedIn && (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">GORILLA LOGIC APPLICATION DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
              <NavLink to="/change-password" className="nav-link">
                Change Password
              </NavLink>
            </Nav>

            <AmplifySignOut />
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
}

export default Header;
