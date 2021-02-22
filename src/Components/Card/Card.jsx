import React from "react";
import { Card as CardR, CardBody, CardSubtitle, CardLink } from "reactstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./styles/card.module.css";

const Card = ({ user, handleRoute }) => {
  const { avatar_url, url, login, html_url } = user;
  const handleClick = (e) => {
    e.preventDefault();
    handleRoute(login);
  };
  return (
    <CardR className={styles.card}>
      <CardBody>
        <img
          className={styles.cardImage}
          src={avatar_url}
          title={`${login}-avatar`}
          alt={`${login}-avatar`}
        />
        <CardSubtitle className={styles.cardSubtitle}>{login}</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardLink
          className={styles.externalLink}
          href={html_url}
          target="_blank"
        >
          <FaExternalLinkAlt size="14px" /> Voir Github
        </CardLink>
        <CardLink
          onClick={handleClick}
          className={styles.linkDetails}
          href={url}
        >
          Voir détails
        </CardLink>
      </CardBody>
    </CardR>
  );
};

export default Card;
