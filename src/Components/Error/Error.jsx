import React from "react";
import { BiError } from "react-icons/bi";
import styles from "./styles/error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h3>
        <BiError /> Oups !! On a une erreur!{" "}
      </h3>
      <h4>Paniquez Pas :) , rafraichissez a page s'il vous plait</h4>
    </div>
  );
};

export default Error;
