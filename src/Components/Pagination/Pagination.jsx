import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./styles/pagination.module.css";
const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      pageCount={pageCount}
      nextLabel={"Next"}
      onPageChange={handlePageChange}
      containerClassName={styles.container}
      previousLinkClassName={styles.previous}
      nextLinkClassName={styles.next}
      disabledClassName={styles.disabled}
      activeClassName={styles.active}
    />
  );
};
Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func,
};
export default Pagination;
