import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Col, Row } from "reactstrap";
import Card from "../Components/Card/Card";
import Error from "../Components/Error/Error";
import Loading from "../Components/Loading/Loading";
import { GET_USERS_REQUESTED } from "../redux/action.types";
import PropTypes from "prop-types";
const Users = ({ users, getUsers }) => {
  const history = useHistory();
  useEffect(() => {
    getUsers();
  }, []);

  const handleRoute = (login) => {
    history.push(`/users/${login}`);
  };

  const render = () => {
    if (users?.loading) {
      return (
        <Col>
          <Loading />
        </Col>
      );
    } else if (users?.users.length <= 0) {
      return (
        <Col>
          <Error />
        </Col>
      );
    }
    return (
      <Row style={{ justifyContent: "center" }} xs="1" md="2" lg="3" xl="4">
        {users.users.map((user) => (
          <Card
            key={`${user.login + user.node_id}`}
            user={{ ...user }}
            login={user.login}
            handleRoute={handleRoute}
          />
        ))}
      </Row>
    );
  };
  return <>{render()}</>;
};

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToprops = (dispatch) => ({
  getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
});

Users.defaultProps = {};
Users.propTypes = {
  users: PropTypes.object,
  getUsers: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToprops)(Users);
