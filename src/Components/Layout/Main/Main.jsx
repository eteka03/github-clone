import React from "react";
import { Row } from "reactstrap";
import styles from "./styles/main.module.css";

const Main = ({ children }) => {
  return <Row className={styles.main}>{children}</Row>;
};

export default Main;
