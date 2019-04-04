import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

export default class Paginator extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    actualPage: PropTypes.number.isRequired
  };

  render() {
    const { actualPage, totalItems, itemsPerPage } = this.props;
    let numberOfpages = totalItems / itemsPerPage;
    const pages = Array.apply(null, { length: numberOfpages }).map(
      Number.call,
      Number
    );

    return (
      <Pagination aria-label="Page navigation">
        {pages.map(page => (
          <PaginationItem active={page === actualPage} key={page}>
            <PaginationLink>{page + 1}</PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    );
  }
}
