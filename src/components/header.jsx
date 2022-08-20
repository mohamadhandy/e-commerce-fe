import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import ButtonHeader from "./buttonHeader";
const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar color="faded" light>
        <Link to="/">
          <NavbarBrand className="me-auto">
            <img src="/images/logo.png" alt="logo" />
          </NavbarBrand>
        </Link>
        {useWindowDimensions().width <= 862 ? (
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
        ) : (
          <NavbarText>
            <ButtonHeader />
          </NavbarText>
        )}
        <Collapse onClick={toggleNavbar} isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <ButtonHeader />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
