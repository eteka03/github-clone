import React from "react";
import styles from "./styles/avatar.module.css";
const Avatar = ({ avatar_url, login }) => {
  return (
    <img
      className={styles.avatarImage}
      src={avatar_url}
      title={login}
      alt="avatar"
    />
  );
};

export default Avatar;
