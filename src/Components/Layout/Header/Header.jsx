import React from "react";
import { Row } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import styles from "./styles/header.module.css";
const Header = () => {
  return (
    <Row className={styles.header}>
      <Navbar />
    </Row>
  );
};

export default Header;
