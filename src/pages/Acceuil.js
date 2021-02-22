import React from "react";
import { Button, Col, Row } from "reactstrap";

const Acceuil = () => {
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <h3>
        Bonjour mon nom est <span>Claver Akpaki</span>
      </h3>
      <p>
        Cette web application est un petit site qui liste différents
        utilisateurs de github ainsi qu,une page détail par rapport à chaque
        utilisateur
      </p>
      <p>Merci</p>
      <Button>Commencer</Button>
    </Col>
  );
};

export default Acceuil;
