import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./styles/loading.module.css";
const Loading = () => {
  return (
    <div className={styles.container}>
      <h3>
        <FaSpinner />
      </h3>
    </div>
  );
};

export default Loading;
