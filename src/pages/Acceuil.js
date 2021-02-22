import React from "react";
import { useHistory } from "react-router";
import { Button, Col } from "reactstrap";

const Acceuil = () => {
  const history = useHistory();
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
      <Button color="primary" onClick={() => history.push("/users")}>
        Commencer
      </Button>
    </Col>
  );
};

Acceuil.defaultProps = {};
export default Acceuil;
