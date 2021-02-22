import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Badge } from "reactstrap";
import Avatar from "../Components/Avatar/Avatar";
import Error from "../Components/Error/Error";
import Loading from "../Components/Loading/Loading";
import { GET_USER_REQUESTED } from "../redux/action.types";
import PropTypes from "prop-types";
const User = ({ match, getUser, user }) => {
  //recuperation du login dans la barre de recherche à travers la propriété match du router
  const { login } = match.params;

  const { selectedUser, loading } = user;
  useEffect(() => {
    getUser(login);
  }, []);
  const render = () => {
    if (loading) {
      return (
        <Col>
          <Loading />
        </Col>
      );
    } else if (Object.keys(selectedUser).length <= 0) {
      return (
        <Col>
          <Error />
        </Col>
      );
    }
    return (
      <Row
        style={{ justifyContent: "center", width: "100%", textAlign: "center" }}
        xs="1"
        md="2"
        lg="3"
        xl="4"
      >
        <Col>
          <Avatar
            avatar_url={selectedUser?.avatar_url}
            login={selectedUser?.login}
          />
        </Col>
        <Col>
          <h3>
            <Badge color="info">Followers: {selectedUser?.followers} </Badge>
          </h3>
          <h3>
            <Badge color="info">Following: {selectedUser?.following}</Badge>
          </h3>
        </Col>
      </Row>
    );
  };
  return <>{render()}</>;
};

const mapStateToProps = (state) => ({
  user: state.users,
});
const mapDispatchToprops = (dispatch) => ({
  getUser: (login) => dispatch({ type: GET_USER_REQUESTED, payload: login }),
});

User.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToprops)(User);
