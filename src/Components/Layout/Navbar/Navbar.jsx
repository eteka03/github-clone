import React from "react";
import { Navbar as Navigation, NavbarBrand } from "reactstrap";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  return (
    <Navigation expand="md" className={styles.navbar}>
      <NavbarBrand className={styles.brand} href="/">
        Claver-Git
      </NavbarBrand>
    </Navigation>
  );
};

export default Navbar;
