import React, { Children } from "react";
import { Container } from "reactstrap";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
