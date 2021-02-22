import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Col, Row } from "reactstrap";
import Card from "../Components/Card/Card";
import Error from "../Components/Error/Error";
import Loading from "../Components/Loading/Loading";
import { GET_USERS_REQUESTED } from "../redux/action.types";
import PropTypes from "prop-types";
import Pagination from "../Components/Pagination/Pagination";
const Users = ({ users, getUsers }) => {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.users.length / usersPerPage);

  const displayUsers = users.users.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  );
  useEffect(() => {
    getUsers();
  }, []);

  const handleRoute = (login) => {
    history.push(`/users/${login}`);
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const renderPagination = () => {
    return (
      <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
    );
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
      <>
        <Row style={{ justifyContent: "center" }} xs="1" md="2" lg="3" xl="4">
          {displayUsers.map((user) => (
            <Card
              key={`${user.login + user.node_id}`}
              user={{ ...user }}
              login={user.login}
              handleRoute={handleRoute}
            />
          ))}
        </Row>
        <div style={{ width: "100%" }}>{renderPagination()}</div>
      </>
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
